interface ShoppingCartProps {
  numberOfProducts: number
}

export function ShoppingCart({ numberOfProducts = 0 }: ShoppingCartProps) {
  return (
    <div>
      Cart <span>({numberOfProducts})</span>
    </div>
  )
}
