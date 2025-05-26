export type Movie = {
  id: string
  title_en: string
  title_th: string
  price: number
  rating: string
  coverUrl: string
  colors: string[]
  priceSale: number | null
}

export type FiltersProps = {
  genre: string[]
  language: string[]
  releaseYear: string
}

export type OptionItem = {
  value: string
  label: string
}
