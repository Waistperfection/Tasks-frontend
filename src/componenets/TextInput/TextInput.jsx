import cls from "./TextInput.module.css"

function TextInput({id, type="text", label="default", ...props}) {
  return (
    <div className={cls.formInput}>
        <input type={type} name={id} id={id} required className={cls.textInput} {...props} />
        <label className={cls.inputLabel} htmlFor={id}>{label}</label>
    </div>
  )
}


function BtnTextInput({id, callback, label="default", btnText="click"}) {
  return (
    <div className={cls.formInput}>
        <input type="text" name={id} id={id} required className={cls.textInput}/>
        <label className={cls.inputLabel} htmlFor={id}>{label}</label>
        <button className={cls.inlineBtn} onClick={callback}>
          <div>
          {btnText}
          </div>
        </button>
    </div>
  )
}
export {TextInput, BtnTextInput};