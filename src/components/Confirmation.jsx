import React, {Component} from 'react'
import {Button, List} from 'semantic-ui-react'

class Confirmation extends Component {

    saveAndContinue = (e)=>{
        e.preventDefault()
        this.props.nextStep()
    }
    back = (e) =>{
        e.preventDefault()
        this.props.prevStep()
    }

    render(){
        const {values : {firstName, lastName, email, age, city, country}} = this.props
        
     return(
        <div>
            <h1 className="ui centered">Confirm Details </h1>
            <p>confirm if right details are entered</p>
          <List>
              <List.Item>
                 <List.Icon name="users" />
                 <List.Content>First Name : {firstName}</List.Content>
              </List.Item>
              <List.Item>
                 <List.Icon name="users" />
                 <List.Content> Last Name : {lastName}</List.Content>
              </List.Item>
              <List.Item>
                 <List.Icon name="mail" />
                 <List.Content> Email : {email}</List.Content>
              </List.Item>
              <List.Item>
                 <List.Icon name="calendar" />
                 <List.Content> Age : {age}</List.Content>
              </List.Item>
              <List.Item>
                 <List.Icon name="marker" />
                 <List.Content> {city}, {country}</List.Content>
              </List.Item>
            
          </List>

          <Button onClick={this.back}>Back</Button>
          <Button onClick={this.saveAndContinue}> Confirm</Button>
        </div>
           )
}
}
export default Confirmation