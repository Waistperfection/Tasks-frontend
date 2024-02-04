import cls from "./PageHeader.module.css"

function PageHeader({ children }) {
  return (
    <h2 className={ cls.pageHeader }>{ children }</h2>
  )
}

export default PageHeader