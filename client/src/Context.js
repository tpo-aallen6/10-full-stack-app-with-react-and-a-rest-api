import React, { useState } from "react"
import Data from './Data'

export const CourseContext = React.createContext()

export const Provider = () => {
  const [authenticatedUser, setAuthUser] = useState(null)
  const data = new Data()

  const userSignIn = async (username, password) => {
    const user = await data.getUser(username, password)
    if (user !== null) {
      setAuthUser(() => {
        return {
          authenticatedUser: user
        }
      })
    }
  }
  return (
    <CourseContext value={{
      authenticatedUser,
      data,
      actions: {
        signIn: userSignIn
      }
    }}
    />
  )
}
