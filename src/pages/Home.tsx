import { Header } from '../components/Header'
import { Profile } from '../components/Profile'
import { ProductFilter } from '../components/ProductFilter'
import { ShoppingCart } from '../components/ShoppingCart'
import { ProductGallery } from '../components/ProductGallery'
import data from '../data.json'

export function Home() {
  return (
    <div className="h-screen w-screen">
      <div className="container mx-auto px-6">
        <Header>
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold">devstore</h1>
            <ProductFilter />
          </div>
          <div className="flex items-center gap-4">
            <ShoppingCart />
            <Profile />
          </div>
        </Header>

        <ProductGallery>
          {data.products.map((product) => (
            <div key={product.id} className="rounded bg-gray-100">
              <div className="cursor-pointer transition-all hover:scale-105">
                <img
                  className="max-w-80"
                  src={product.image}
                  alt="product-image"
                />
              </div>
            </div>
          ))}
        </ProductGallery>
      </div>
    </div>
  )
}
