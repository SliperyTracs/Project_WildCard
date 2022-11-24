import { useState } from "react"

export default function MenuCreate({}){
    const [Name , setName] = useState("");
    console.log(`Name`,Name)
    const [Description , setDescription] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const options ={
            method: "POST",
            body: JSON.stringify({
                Name,
                Description
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }
        fetch('http://127.0.0.1:8000/api/menu',options).
        then(res=>res.json()).then(response=>console.log(`response`,response)).catch(console.error())
    }
    return (
        <>
        <h1>CreateMenu</h1>
            
            <form action="/Admin/MenuAll" onSubmit={handleOnSubmit} method="POST">
            <label for="first">Menu Name:</label>
            <input type="text" 
            id="first" 
            onChange={(event)=>{
                setName(event.target.value)
            }}

            name="Name" />
            <label for="last">Menu Description:</label>
            <input type="text"
            onChange={(event)=>{
                setDescription(event.target.value)
            }}
            id="last" 
            name="Description" />
            <button type="submit">Submit</button>
            </form>
        </>

    )
}