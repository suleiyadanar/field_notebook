import React, {useEffect, useState } from 'react';
import { DeleteBtn } from '../Components/Entry/DeleteBtn'
import {
    useParams,
    Link
} from "react-router-dom";
import { NavBar } from "../Components/Entry/NavBar";
import "../styles/Page.css";


export const Page = () => {
    const { id } = useParams()
    const [entry, setEntry] = useState([])

    useEffect(()=>{
        fetch(`/api/${id}`)
        .then(response=>response.json())
        .then(data => setEntry(data))
    },[id])

    return (
    <>
    <NavBar />
        <div className="showEntry">
        {entry.length > 0 && entry.map(data=>
            <div key={data.id} className="info">
                <h1>{data.common_name} ( {data.family_name} )</h1>
                <h4><i>{data.sci_name}</i></h4>
                <p><u>Leaf Type</u><br/>{data.leaf_type}</p>
                <p><u>Bark</u><br/>{data.bark}</p>
                <p><u>Notes</u><br/>{data.notes}</p>
            </div>)}
        <DeleteBtn id={id}/>
        <hr></hr>
        <Link to="/"> Home </Link>
        </div>
    </>
  )
}

