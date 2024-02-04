import cls from "./ContentContainer.module.css"

function ContentContainer({ children }) {
  return (
    <div className={cls.contentContainer}>{ children }</div>
  )
}

export default ContentContainer