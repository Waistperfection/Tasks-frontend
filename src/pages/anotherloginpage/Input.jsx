import style from "./Input.module.css"

function Input({type="text", label="default", ...props}) {
  return (
    <div className={style.formInput}>
        <input className={style.input} type={type} required {...props}/>
        <span className={style.label}>{label}</span>
    </div>
  )
}

export default Input