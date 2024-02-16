import { ChangeEvent } from 'react'

interface ProductFilterProps {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function ProductFilter({ value, onChange }: ProductFilterProps) {
  return (
    <input
      type="text"
      className="rounded bg-zinc-900 px-4 py-2 outline-none"
      value={value}
      onChange={onChange}
      placeholder="Buscar produtos..."
    />
  )
}
