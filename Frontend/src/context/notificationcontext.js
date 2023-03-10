import { createContext, useReducer } from 'react'


export const NotificationContext = createContext()

export const notificationReducer = (state, action) => {
    switch (action.type) {
      case 'get Notification':
        return { 
          notifications: action.payload 
        }
      case 'updated Notification':
        return { 
          notifications: [action.payload, ...state.notifications] 
        }
      default:
        return state
    }
  }

  export const NotificationContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(notificationReducer, { 
      notifcation: null
    })
    
    return (
      <NotificationContext.Provider value={{ ...state, dispatch }}>
        { children }
      </NotificationContext.Provider>
    )
  }