import { NotificationContext } from "../context/notificationcontext.js"
import { useContext } from "react"

export const useNotificationContext = () => {
  const context = useContext(NotificationContext)

  if(!context) {
    throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
  }

  return context
}