import { ReactNode } from 'react'

interface ProductsProps {
  children: ReactNode
}
export function ProductGallery({ children }: ProductsProps) {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-between gap-12">
      {children}
    </div>
  )
}
