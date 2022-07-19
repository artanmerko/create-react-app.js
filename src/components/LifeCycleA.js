import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

 class LifeCycleA extends Component {
  constructor(props) {
    super(props)

    this.state = {
       name: 'Artan'
    }
    console.log('LifeCycleA constructor')
  }

  static getDerivedStateFromProps(props, state) {
		console.log('LifecycleA getDerivedStateFromProps')
		return null
	}
  componentDidMount(){
    console.log('LifeCycleA ComponentDidMount')
  }

  shouldComponentUpdate(){
    console.log('LifeCycleA shouldComponetnUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LifeCycleA getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate(){
    console.log('LifeCycleA componentDidUpdate')
  }

  changeState = () =>{
    this.setState({
      name: 'CodeCademy'
    })
  }

  render() {
    console.log('LifeCycleA render')
    return (
    <div>
    <div>LifeCycleA</div>
    <button onClick={this.changeState}>Chnage State</button>
    <LifeCycleB />
    </div>
    )
  }
}

export default LifeCycleA
