import styles from "../../../styles/Admin/Menu.module.css"
import Layout from "../../../Component/layout"
import { handler } from "../../api"
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import NotFound from "../../../public/notfound.jpg"
export default function Menu({menu}){
    const [Loading, setLoading] = useState(false)
    const router =  new useRouter();
    const [Name , setName] = useState(menu.Name);
    const [imageSrc, setImageSrc] = useState( menu.Image != null ? menu.Image :  NotFound );
    const [uploadData, setUploadData] = useState();
    const [Description , setDescription] = useState(menu.Description);
   
    // useEffect(()=>{
    //     if (menu.length>0){
    //         setLoading(true)
    //     }
    //     setLoading(false)
    // },[Loading])
    function handleOnChange(changeEvent) {
        const reader = new FileReader();
    
        reader.onload = function(onLoadEvent) {
          setImageSrc(onLoadEvent.target.result);
          setUploadData(undefined);
        }
    
        if(changeEvent.target.files[0]){
            reader.readAsDataURL(changeEvent.target.files[0]);
        }
      }
      async function handleOnSubmit(e) {
        e.preventDefault()
        const form = e.currentTarget;
        const fileInput = Array.from(form.elements).find(({ name }) => name === 'file');

        const formData = new FormData();

        for ( const file of fileInput.files ) {
            formData.append('file', file);
            formData.append('upload_preset', 'my-uploads');
        }
        const data = await fetch('https://api.cloudinary.com/v1_1/dtdbhz2u0/image/upload', {
            method: 'POST',
            body: formData
        }).then(r => r.json());
        const image = data.secure_url

        const Name = e.target.Name.value;
        const Description = e.target.Description.value
        const menus ={
            method: "PUT",
            body: JSON.stringify({
                Name : Name,
                Description : Description,
                Image : image
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }
        fetch(`http://127.0.0.1:8000/api/menu/${menu.id}`,menus).
        then(res=>res.json()).then(response=>console.log(`response`,response)).catch(console.error())
        router.push('/Admin/Menus')
    }
    const handleOnReset = (e) =>{
        router.push('/Admin/Menus');
    }
    return(
        <Layout>
        <h1>CreateMenu</h1>
        <a href="/" rel="noreferrer nofollower" className={styles.card}>
            <span>
            <Image src={imageSrc} />
            <h4>{Name}</h4>
            {Description}
            </span>
        </a>
        <form className={styles.form} action="/Admin/Menus" onSubmit={handleOnSubmit} onReset={handleOnReset} method="POST">
            <label for="first">Menu Name:</label>
            <input type="text" 
            id="first" 
            onChange={(event)=>{
                setName(event.target.value)
            }}
            defaultValue={menu.Name}
            name="Name" 
            required/>
            <label for="last">Menu Description:</label>
            <input type="text"
            onChange={(event)=>{
                setDescription(event.target.value)
            }}
            defaultValue={menu.Description}
            id="last" 
            name="Description" />
            
            <label for="last">Menu Image:</label>
            <input type="file" 
            id="last"  
            name="file"
            
            onChange={handleOnChange} 
            required/>
            <div className={styles.BtnContainer}>

            <button type="reset" >Cancel</button>
            <button type="submit">Submit</button>
            </div>
            </form> 
        </Layout>
    )
}
export async function getServerSideProps({params}){
    const Menu_id = params.Menu
    // console.log(Menu_id)
    const menu = await handler(`http://127.0.0.1:8000/api/menu/${Menu_id}`);
    return{
        props :{
            menu,
       }
    }
}