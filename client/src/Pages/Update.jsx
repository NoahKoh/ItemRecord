import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios" // Use to post data to the backend servers


const Update = () => {
    const [item, setItem] = useState({
        name: "",
        desc: "",
        info: "",
        extrainfo: ""
    })

    const navigate = useNavigate()
    const location = useLocation()
    
    const itemID = location.pathname.split("/")[2]
    
    const handleChange = (e) => {
        setItem((prev) => ({...prev, [e.target.name]: e.target.value})) // because item has multiple field, needs the name
    }

    const handleClick = async e => { //req requires await
        e.preventDefault() // prevent reload page
        try{
            await axios.put("http://localhost:8800/items/" + itemID, item) // put to the backend
            navigate("/") // then navigate back to the homepage. Similar to Link but after some logic.
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="form">
            <h1>Updating Item</h1>
            <input type="text" placeholder="name" onChange={handleChange} name="name" /> 
            <input type="text" placeholder="desc" onChange={handleChange} name="desc" />
            <input type="text" placeholder="info" onChange={handleChange} name="info" />
            <input type="text" placeholder="extrainfo" onChange={handleChange} name="extrainfo" />
            <button onClick={handleClick}>Update</button>
        </div>
    )
}

export default Update