import React, {Component} from 'react'
import {render} from 'react-dom'

import MetamaskStatus from '../../src/MetamaskStatus'

class Demo extends Component {
  render() {
    return <div>
      <MetamaskStatus/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
