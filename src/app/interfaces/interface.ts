export interface MenuItems{
  ruta:string
  nombre:string
  icon:string
  subMenu?:Array<{
    ruta:string
    nombre:string
  }>
}