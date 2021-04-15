import React, { Component } from 'react'
import Data from './data'

export class Provider extends Component {
  constructor() {
    super()
  }

render() {
  return (
    <Context.Provider>
      {this.props.children}
    </Context.Provider>
  )
}

signIn = async () => {

}

signOut 

}