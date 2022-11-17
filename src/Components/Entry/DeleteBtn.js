import React from 'react'
import {useNavigate} from 'react-router-dom';

export const DeleteBtn = ({id}) => {
    const navigate = useNavigate()
    const deleteEntry = () => {
        fetch(`/api/${id}`,{
            method: 'POST',
            body: JSON.stringify({
                id:id
            })
        }).then(response=>response.json())
        .then(data=>{
            console.log(data)
            navigate('/')
        })
    }
  return (
    <>
        <button onClick={ deleteEntry }> Delete </button>
    </>
  )
}
