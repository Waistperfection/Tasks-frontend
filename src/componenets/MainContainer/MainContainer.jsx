import cls from "./MainContainer.module.css"

function MainContainer({ children }) {
  return (
    <div className={cls.wrapper}>
        <div className={cls.container}>
            {children}
        </div>
    </div>
  )
}

export default MainContainer