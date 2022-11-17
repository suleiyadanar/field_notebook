import React, { useState,useEffect } from 'react'
import { Entry } from "../Components/Entry/Entry"
import { Form } from "../Components/Entry/Form"
import { NavBar } from "../Components/Entry/NavBar"


export const Home = () => {
    const [ entry, setEntry] = useState([])

    const [ show , setShow ] = useState(false)
    useEffect(()=>{
        fetch('/api').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => setEntry(data))
        .catch(function (error) {
            console.log(error);
        });
    },[]);

    const toggle = () =>{
        setShow(!show)
        console.log(show)
    }
  return (
    <div>
        <NavBar />
        <div style={{display:"flex"}}> <button onClick={toggle}> {show ? "x Close" : "+Add Entry" }</button>
        <h2>My Tree Notes</h2>
        </div>

        <Form setEntry={setEntry} display={show}/>
        <Entry entryList = {entry} />
    </div>
  )
}
