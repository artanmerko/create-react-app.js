import React, { Component } from 'react'

 class LifeCycleB extends Component {
  constructor(props) {
    super(props)

    this.state = {
       name: 'Artan'
    }
    console.log('LifeCycleB constructor')
  }

  static getDerivedStateFromProps(props, state) {
		console.log('LifecycleB getDerivedStateFromProps')
		return null
	}

  componentDidMount(){
    console.log('LifeCycleB ComponentDidMount')
  }

  shouldComponentUpdate(){
    console.log('LifeCycleB shouldComponetnUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LifeCycleB getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate(){
    console.log('LifeCycleB componentDidUpdate')
  }

  render() {
    console.log('LifeCycleB render')
    return (<div>LifeCycleB</div>)
  }
}

export default LifeCycleB
