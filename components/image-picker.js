"use client"

import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image'

export default function ImagePicker({label,name})
{
    const [previewPhoto,setPreviewPhoto]=useState(null)
    const clickref=useRef();
    
    function handleClick()
    {
         clickref.current.click();
    }

    function handlePhoto(event)
    {
        const photo=event.target.files[0];
        
        if(!photo)
        {
           setPreviewPhoto(null);
           return;
        }

        const fileReader=new FileReader();

        fileReader.onload=()=>
        {
            setPreviewPhoto(fileReader.result)
        };

        fileReader.readAsDataURL(photo);
    }
    return(
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {previewPhoto!=null?<Image src={previewPhoto} alt="Photo set by user" fill></Image>:<p>No Image picked yet</p>}
                </div>
                <input type="file" id={name} accept="image/jpeg image/png image/jpg " name={name} className={classes.input} ref={clickref} onChange={handlePhoto}/>
                <button type='button' className={classes.button} onClick={handleClick}>Pick An Image</button>
            </div>

        </div>
    )
}