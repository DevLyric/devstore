import { IProducts } from '../types/Product'

interface ProductModalProps {
  product: IProducts
  handleAddProductToCart: () => void
  handleCloseModal: () => void
}
export function ProductModal({
  product,
  handleAddProductToCart,
  handleCloseModal,
}: ProductModalProps) {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black/50 px-6">
      <div className="flex h-max flex-col gap-8 rounded-md bg-white shadow lg:flex-row">
        <img
          className="w-full max-w-xl"
          src={product.image}
          alt="product-modal-image"
        />

        <div className="flex flex-col gap-8 p-6">
          <button onClick={handleCloseModal} className="w-10 self-end">
            X
          </button>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold">{product.title}</p>
            <p>{product.description}</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-full bg-purple-500 px-5 py-2 font-medium text-white">
              R${product.price}
            </button>
            <p>Em 12x s/juros de R${product.price / 12}</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-medium">Tamanhos</p>
            <div className="flex gap-3">
              {['P', 'M', 'G', 'GG'].map((size) => (
                <button
                  key={size}
                  className="w-14 rounded-full bg-gray-600 px-4 py-2 font-medium text-white hover:bg-gray-900"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAddProductToCart}
            className="rounded-full bg-emerald-500 p-3 font-medium text-white hover:bg-emerald-600"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  )
}
