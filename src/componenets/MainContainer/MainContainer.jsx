import cls from "./MainContainer.module.css"

function MainContainer({ children }) {
  return (
        <div className={cls.container}>
            {children}
        </div>
  )
}

export default MainContainer