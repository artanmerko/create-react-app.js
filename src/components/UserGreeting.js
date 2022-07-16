import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super(props)

    this.state = {
       isLoggedin: true
    }
  }

  render() {
  //  return this.state.isLoggedin && <div>Welcome Artan</div>

    return(
      this.state.isLoggedin ?
      <div>Welcome Artan</div> :
      <div>Welcome Guest</div>
    )

    // let message
    // if(this.state.isLoggedin){
    //   message = <div>Welcome Artan</div>
    // } else{
    //   message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

    // if(this.state.isLoggedin){
    //   return (
    //     <div> Welcome Artan</div>
    //   )
    // } else{
    //   return (
    //   <div>Welcome Guest</div>
    //   )
    // }

    // return (
    //   <div>
    //     <div>Welcome Artan</div>
    //     <div>Welcome Guest</div>
    //   </div>

    // )
  }
}

export default UserGreeting