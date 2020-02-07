import React, {Component} from 'react'
import {Form, Button} from 'semantic-ui-react'
// import {throws} from 'assert'

class PersonalDetails extends Component{
     saveAndContinue = (e) =>{
         e.preventDefault(
             this.props.nextStep()
         )
     }
     back = (e) =>{
         e.preventDefault()
         this.props.prevStep()
     }
     render() {
         const {values} = this.props
         return(
             <Form color="blue" >
                 <h1 className="ui-centred"> Enter Personal Details </h1>
                 <Form.Field>
                     <label>Age</label>
                     <input 
                     placeholder="Age"
                     onChange={this.props.onChange('age')}
                     defaultValue={values.age}
                     />
                 </Form.Field>

                 <Form.Field>
                     <label>City</label>
                     <input 
                     placeholder="city"
                     onChange={this.props.onChange('city')}
                     defaultValue={values.city}
                     />
                 </Form.Field>

                 <Form.Field>
                     <label>Country</label>
                     <input 
                     placeholder="Country"
                     onChange={this.props.onChange('country')}
                     defaultValue={values.country}
                     />
                 </Form.Field>

                 <Button onClick={this.back}>Back</Button>
                 <Button onClick={this.saveAndContinue}>Save and Continue</Button>
             </Form>
         )
     }
}

export default PersonalDetails