export interface Menu {
  id: string
  name: string
  title: string
  icon: string
  isActive?: boolean
  from?: string
  children?: Menu[]
  routerLink?: {
    name: string
    query?: Record<string, string>
  }
}

export interface TabMenu extends Menu {
  preActive: string
}
