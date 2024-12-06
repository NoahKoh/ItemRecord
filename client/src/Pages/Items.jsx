import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios" // Use to fetch data from the backend servers

const Items = () => {
    const [items, setItems] = useState([]) // Use to get and Set an array of items

    useEffect(()=>{ // Used to run once to fetch items data
        const fetchData = async () => {
            try{
                const res = await axios.get("http://localhost:8800/items")
                setItems(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8800/items/" + id)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1>Item Record</h1>
            <div className="items">
                {items.map(item=>(
                    <div className="item" key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.desc}</p>
                        <span>{item.info}</span>
                        <span>{item.extrainfo}</span>
                        <button className="delete" onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                ))}
            </div>
            <button className="adding">
                <Link to="/add">Add new Item</Link>
            </button>
        </div>
    )
}

export default Items