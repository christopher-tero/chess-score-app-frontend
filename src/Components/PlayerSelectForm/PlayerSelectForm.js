import React, {Component} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default class PlayerSelectForm extends Component {
  render(){
    return(
      <div>
        <h4>Please Enter Player Names</h4>
        <form>
          <input type="text" name="white" placeholder="White Player"/>
          <input type="text" name="black" placeholder="Black Player"/>
        </form>
      </div>
    )
  }
}
