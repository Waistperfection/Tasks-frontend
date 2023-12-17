import cls from "./Messages.module.css"

function Messages() {
    const messages = [
        {sender: 'nikki', message: "lorum ipselum bobus abobus"},
        {sender: 'denisov', message: "lorum ipselum bobus abobus"},
        {sender: 'denisov', message: "lorum ipselum bobus abobus"},
        {sender: 'denisov', message: "lorum ipselum bobus abobus"},
        {sender: 'denisov', message: "lorum ipselum bobus abobus"},
        {sender: 'nikki', message: "lorum ipselum bobus abobus"},
        {sender: 'nikki', message: "lorum ipselum bobus abobus"},
        {sender: 'denisov', message: "lorum ipselum bobus abobus"},
        {sender: 'nikki', message: "lorum ipselum bobus abobus"},
        {sender: 'nikki', message: "lorum ipselum bobus abobus"},
        {sender: 'denisov', message: "lorum ipselum bobus abobus"},
        {sender: 'nikki', message: "lorum ipselum bobus abobus"},
        {sender: 'nikki', message: "lorum ipselum bobus abobus"},
        {sender: 'denisov', message: "lorum ipselum bobus abobus"},
        {sender: 'denisov', message: "lorum ipselum bobus abobus"},
        {sender: 'nikki', message: "lorum ipselum bobus abobus"},
    ]
  return (
    <div className={cls.messagesContainer}></div>
  )
}

export default Messages