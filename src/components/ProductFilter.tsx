import { ChangeEvent } from 'react'

interface ProductFilterProps {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function ProductFilter({ value, onChange }: ProductFilterProps) {
  return (
    <input
      type="text"
      className="outline-none"
      value={value}
      onChange={onChange}
      placeholder="Buscar produtos..."
    />
  )
}
