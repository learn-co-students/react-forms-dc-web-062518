// Code ControlledInput Component Here

import React from 'react'

export default class ControlledInput extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "Joe"
    }
  }

  handleFirstNameChange = (event) => (
    this.setState({
      firstName: event.target.value
    })
  )

  render() {
    return (<input type="text" id="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />)
  }
}
