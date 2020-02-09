//global react imports
import React from 'react'
import { useForm, useStep} from 'react-hooks-helper'
import './App.css'

//local components import 

import Names from './components/Names'
import Address from './components/Address'
import Contact from './components/Contact'
import  Review from './components/Review'
import Submit from './components/Submit'

//intialize steps 

const steps = [
    {id : "names"},
    {id : "address"},
    {id : "contact" },
    {id : "review"},
    {id : "submit"}
];

const defaultData ={
    firstName: "Madavi",
  lastName: "Agency",
  nickName: "madavii",
  address: "lowerhill road",
  city: "nairobi",
  state: "CA",
  zip: "90505",
  email: "email@email.com",
  phone: "+61 4252 454 332"
}

const MultiStepform = ({images}) => {
const [formData, setForm] = useForm(defaultData)
const {step, navigation } = useStep({initialStep : 0, steps})
const {id} = step

const props = { formData, setForm, navigation}

switch(id){
    case "names" :
        return<Names {...props} />
    case "address" :
        return<Address {...props} />
    case "contact" :
        return<Contact {...props} />
    case "review" :
        return <Review {...props} />
    case "submit" :
        return <Submit {...props} />
    
    default : 
        return null;
    
    }
} 

export default MultiStepform