import styles from "../../../styles/Admin/Menu.module.css"
import Layout from "../../../Component/layout"
import { OneHandler, PutHandler } from "../../api"
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import NotFound from "../../../public/notfound.jpg"
export default function Menu({menu}){
    const [Loading, setLoading] = useState(false)
    const router =  new useRouter();
    const [Name , setName] = useState(menu.Name);
    const [imageSrc, setImageSrc] = useState( menu.Image != null ? menu.Image :  NotFound );
    const [Halal, setHalal] = useState(menu.Halal);
    const [Cusine, setCusine] = useState(menu.Cusine);
   
    useEffect(()=>{
        if (menu.length>0){
            setLoading(true)
        }
        setLoading(false)
    },[Loading])
    function handleOnChange(changeEvent) {
        const reader = new FileReader();
    
        reader.onload = function(onLoadEvent) {
          setImageSrc(onLoadEvent.target.result);
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

        setName(e.target.Name)
        setCusine(e.target.Cusine)
        //Puts Handler for Menu
        PutHandler("menu" ,menu.id , {
            Name : Name,
            Cusine : Cusine,
            Halal : Halal,
            Image : image
        })
        router.push('/Admin/Menus')
    }
    const handleOnReset = (e) =>{
        router.push('/Admin/Menus');
    }
    const handleOnCheck = (event) =>{
        if (event.target.checked){
            setHalal(true)
            return
        }
        setHalal(false)

    }
    return(
        <Layout>
        <h1>CreateMenu</h1>
        <a href="/" rel="noreferrer nofollower" className={styles.card}>
            <span>
            <Image width="100" height="75" src={imageSrc != null ? imageSrc :  NotFound } alt="image"/>
            <h4>{Name}</h4>
            {Cusine}
            {Halal ? <>Halal</> : <>Non Halal</>} 
            </span>
        </a>
        <form className={styles.form} action="/Admin/Menus" onSubmit={handleOnSubmit} onReset={handleOnReset} method="POST">
            <label for="last">Menu Image:</label>
            <input type="file" 
            id="last"  
            name="file"
            
            onChange={handleOnChange} 
            DefaultValue={menu.Image}
            />

            <label for="first">Menu Name:</label>
            <input type="text" 
            id="first" 
            onChange={(event)=>{
                setName(event.target.value)
            }}
            defaultValue={menu.Name}
            name="Name" 
            required/>
           <label for="last">Menu Cusine:</label>
            <select name="cusine" onChange={(event)=>{
                setCusine(event.target.value)
            }}
            defaultValue={menu.Cusine}>
                <option value="Western">Western</option>
                <option value="Chinese">Chinese</option>
                <option value="Indian">Indian</option>
                <option value="Malay">Malay</option>
            </select>
            <label for="first">Halal:</label>
            <input type="Checkbox"
            onChange={handleOnCheck}
            defaultValue={Halal}
            id="last" 
            name="Halal" />
            
           
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
    const menu = await OneHandler(`http://127.0.0.1:8000/api/menu/${Menu_id}`);
    return{
        props :{
            menu,
       }
    }
}