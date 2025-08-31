export interface Menu {
  id: string
  path: string
  name: string
  meta: {
    title: string
    icon: string
  }
  isActive?: boolean
  from?: string
  children?: Menu[]
}


export interface TabMenu extends Menu {
  preActive: string
}
