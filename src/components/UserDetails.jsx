import React, {Component} from 'react'
import {Form, Button} from 'semantic-ui-react'

class UserDetails extends Component {
    saveAndContinue = (e) =>{
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const values = this.props
        return(
            <Form>
                <h1 className="ui-centered">Enter User Details</h1>
                <Form.Field>
                    <label>First Name</label>
                    <input 
                    placeholder="First Name"
                    onChange={this.props.handleChange('firstName')}
                    defaultValue={values.firstName}
                    />
                </Form.Field>

                <Form.Field>
                    <label>Last Name</label>
                    <input 
                    placeholder="Last Name"
                    onChange={this.props.onChange('lastName')}
                    defaultValue={values.lastName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Country</label>
                    <input
                    placeholder="Email"
                    onChange={this.props.onChange('email')}
                    defaultValue={values.email} />
                </Form.Field>
                <Button onClick={this.saveAndContinue}>Save and Continue</Button>
            </Form>
        )
    }
}

export default UserDetails