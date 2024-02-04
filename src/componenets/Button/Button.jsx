import cls from "./Button.module.css"

function Button({ children, className='', ...props}) {
  const classes = [cls.btn, className].join(' ');
  return (
    <button className={classes} {...props}>{children}</button>
  )
}

export default Button