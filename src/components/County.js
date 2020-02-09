import React from 'react'

const cities = [
    ['NKR', 'Nakuru'],
    ['ELD', 'Eldoret'],
    ['NRB', 'Nairobi']
]

const County = ({label, ...others}) =>(
    <>
<label>{label}</label>
<select {...others}>
    {cities.map(([value, name]) =>(
        <option value={value}>{name}</option>
    ))}


</select>
</>
)

export default County
