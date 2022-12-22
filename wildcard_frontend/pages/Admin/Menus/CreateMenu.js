import { useState } from "react"

import styles from "../../../styles/Admin/MenusCreate.module.css"
import Layout from "../../../Component/layout"
import Link from "next/link"
import { useRouter } from "next/router";
export default function MenuCreate({}){
    const router =  new useRouter();
    const [Name , setName] = useState("");
    console.log(`Name`,Name)
    const [Description , setDescription] = useState("");
    const [Image , setImage] = useState("");
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const menus ={
            method: "POST",
            body: JSON.stringify({
                Name,
                Description,
                Image
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }
        fetch('http://127.0.0.1:8000/api/menu',menus).
        then(res=>res.json()).then(response=>console.log(`response`,response)).catch(console.error())
        router.push('/Admin/Menus')
    }
    const handleOnReset = (e) =>{
        router.push('/Admin/Menus');
    }
            
    return (
        <Layout>
        <h1>CreateMenu</h1>
            
        <form className={styles.form} action="/Admin/Menus" onSubmit={handleOnSubmit} onReset={handleOnReset} method="POST">
            <label for="first">Menu Name:</label>
            <input type="text" 
            id="first" 
            onChange={(event)=>{
                setName(event.target.value)
            }}
            name="Name" 
            required/>
            <label for="last">Menu Description:</label>
            <input type="text"
            onChange={(event)=>{
                setDescription(event.target.value)
            }}
            id="last" 
            name="Description" />
            <label for="last">Menu Image:</label>
            <input type="text"
            onChange={(event)=>{
                setImage(event.target.value)
            }}
            id="last" 
            name="Image" 
            required/>
            <div className={styles.BtnContainer}>
            <button type="reset" >Cancel</button>
            <button type="submit">Submit</button>
            </div>
            </form> 
        </Layout>

    )
}