import { Header } from '../components/Header'
import { Profile } from '../components/Profile'
import { ProductFilter } from '../components/ProductFilter'
import { ShoppingCart } from '../components/ShoppingCart'
import { ProductGallery } from '../components/ProductGallery'
import data from '../data.json'
import { useState } from 'react'
import { ProductModal } from '../components/ProductModal'
import { IProducts } from '../types/Product'

export function Home() {
  const [filterValue, setFilterValue] = useState<string>('')
  const [modal, setModal] = useState<boolean>(false)
  const [selectedProduct, setSelectedProduct] = useState<IProducts | null>(null)

  const filteredProducts = data.products.filter((product) =>
    product.title.toLocaleLowerCase().includes(filterValue.toLowerCase()),
  )

  return (
    <div className="h-screen w-screen">
      <div className="container mx-auto px-6">
        <Header>
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold">devstore</h1>
            <ProductFilter
              value={filterValue}
              onChange={(event) => setFilterValue(event.target.value)}
            />
          </div>
          <div className="flex items-center gap-4">
            <ShoppingCart />
            <Profile />
          </div>
        </Header>

        <ProductGallery>
          {filteredProducts.map((product) => (
            <div key={product.id} className="rounded bg-gray-100">
              <div
                onClick={() => {
                  setModal(true)
                  setSelectedProduct(product)
                  console.log(product)
                }}
                className="cursor-pointer transition-all hover:scale-105"
              >
                <img
                  className="max-w-80"
                  src={product.image}
                  alt="product-image"
                />
              </div>
            </div>
          ))}
        </ProductGallery>

        {selectedProduct && modal && <ProductModal product={selectedProduct} />}
      </div>
    </div>
  )
}
