export interface ICustomButton {
  title: string,
  icon?:string,
  onClick?: () => void,
  fullWidth?: boolean,
  active?: boolean,
  activeIcon?: string,
  color?: "primary" | "secondary"
  disabled?: boolean
}
