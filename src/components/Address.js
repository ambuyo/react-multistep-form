import React from 'react'

import ItemForm from './ItemForm'
import County from './County'

const Address =({setForm, formData, navigation}) =>{
 const {address, cities,state,zip} = formData

 const {previous, next} = navigation

 return(
     <div className="form">
         <h3>Address</h3>

         <ItemForm
         label="address"
         name="address"
         value={address}
         onChange = {setForm}
         />

          <County
         label="city"
         name="city"
         value={cities}
         onChange = {setForm}
         />

          <ItemForm
         label="state"
         name="state"
         value={state}
         onChange = {setForm}
         />

<ItemForm
         label="zip"
         name="zip"
         value={zip}
         onChange = {setForm}
         />
<div>
<button onClick={previous}>Previous</button>
<button onClick={next}>Next</button>
</div>
     </div>
 )
}

export default Address
