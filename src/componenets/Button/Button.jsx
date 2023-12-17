import cls from "./Button.module.css"

function Button({ children, ...props}) {
  return (
    <button className={cls.btn} {...props}>{children}</button>
  )
}

export default Button