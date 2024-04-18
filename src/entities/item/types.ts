export interface Item {
  id: number
  category: string
  name: string
  description: string
  code: string
  uuid: string
  art: string
  loot: string
  craft: [
    {
      id: number
      items: Item[]
    },
  ]
  gems: Item[]
}
