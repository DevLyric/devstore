import { Header } from '../components/Header'
import { Profile } from '../components/Profile'
import { ProductFilter } from '../components/ProductFilter'
import { ShoppingCart } from '../components/ShoppingCart'

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
      </div>
    </div>
  )
}
