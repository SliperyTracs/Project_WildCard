import { useState } from "react"
<<<<<<< HEAD
import styles from "../../../styles/Admin/MenusCreate.module.css"
import Layout from "../../../Component/layout"
import Link from "next/link"
import { useRouter } from "next/router";
export default function MenuCreate({}){
    const router =  new useRouter();
=======
import Layout from "../../../Component/layout"
export default function MenuCreate({}){
>>>>>>> c87786d2070907e606f902197f4f0139f56616de
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
<<<<<<< HEAD
        router.push('/Admin/Menus')
    }
    const handleOnReset = (e) =>{
        router.push('/Admin/Menus');
    }
    return (
        <Layout>
        <h1>Create Menu</h1>
        <div>
        </div>
            <div>
            <form className={styles.form} action="/Admin/MenuAll" onSubmit={handleOnSubmit} onReset={handleOnReset} method="POST">
=======
        
    }
    return (
        <Layout>
        <h1>CreateMenu</h1>
            
            <form action="/Admin/MenuAll" onSubmit={handleOnSubmit} method="POST">
>>>>>>> c87786d2070907e606f902197f4f0139f56616de
            <label for="first">Menu Name:</label>
            <input type="text" 
            id="first" 
            onChange={(event)=>{
                setName(event.target.value)
            }}

<<<<<<< HEAD
            name="Name" 
            required/>
=======
            name="Name" />
>>>>>>> c87786d2070907e606f902197f4f0139f56616de
            <label for="last">Menu Description:</label>
            <input type="text"
            onChange={(event)=>{
                setDescription(event.target.value)
            }}
            id="last" 
<<<<<<< HEAD
            name="Description" 
            required/>
=======
            name="Description" />
>>>>>>> c87786d2070907e606f902197f4f0139f56616de
            <label for="last">Menu Image:</label>
            <input type="text"
            onChange={(event)=>{
                setImage(event.target.value)
            }}
            id="last" 
<<<<<<< HEAD
            name="Image" 
            required/>
            <div className={styles.BtnContainer}>
            <button type="reset" >Cancel</button>
            <button type="submit">Submit</button>
            </div>
            </form>
            </div>
=======
            name="Image" />
            <button type="submit">Submit</button>
            </form>
>>>>>>> c87786d2070907e606f902197f4f0139f56616de
        </Layout>

    )
}