import React, { Component } from 'react'
import { render } from 'react-dom'
import './style.css'

class App extends Component {
  function constructor() {
    super()
  }
  function componentWillMount() {
    this.getData()
  }

  function getData() {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText)
    })
    // open the request with the verb and the url
    xhr.open('GET', 'https://api.opendota.com/api/mars')
    // send the request
    xhr.send()
  }

  function render() {
    return (
      <div>
        <p>Hello World</p>
      </div>
    )
  }
}

export default getData;