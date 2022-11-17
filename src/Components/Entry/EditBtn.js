import React from 'react'
import {useNavigate} from 'react-router-dom';

export const EditBtn = (isEdit) => {

    // const deleteEntry = () => {
    //     toggleEdit();
    // }

  return (
    <>
        <button> {isEdit ? "Save":"Edit"} </button>
    </>
  )
}
