import React, { useState } from "react";
import "../../styles/Form.css";

export const Form = ({ display, setEntry }) => {
  const original = {
    common_name: "\n",
    sci_name: "\n",
    family_name: "\n",
    leaf_type: "needle_scales",
    bark: "\n",
    notes: "\n",
  }
  const [data, setData] = useState(
   original
  );

  const handle = (e) => {
    const newdata = { ...data };
    console.log(e.target.id)

    newdata[e.target.id] = e.target.value;


    setData(newdata);
    console.log(newdata);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault()
    fetch("/api/create", {
      method: "POST",
      body: JSON.stringify({
        common_name: data.common_name,
        sci_name: data.sci_name,
        family_name: data.family_name,
        leaf_type: data.leaf_type,
        bark: data.bark,
        notes: data.notes,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        response.json();
      })
      .then((message) => {
        console.log(message)
        getEntries()
        setData(original)
      });
  };

  const getEntries = () => {
    fetch('/api').then(response => {
      if (response.ok){
        return response.json()
      }
    }).then(rq=>setEntry(rq))
  }
  return (
    <div className="formDiv">
      { display ? <form onSubmit={handleFormSubmit} className="formItem">
      <h3>New Tree Data Entry</h3>
      <label className="formInput">
        Common Name:{" "}
        <input
          onChange={(e) => handle(e)}
          type="text"
          id="common_name"
          name="common_name"
          value= {data.common_name}
          placeholder="Common Name"
          required
        />
      </label>
      <label className="formInput">
        Scientific Name:{" "}
        <input
          onChange={(e) => handle(e)}
          type="text"
          id="sci_name"
          value= {data.sci_name}
          name="sci_name"
          placeholder="Scientific Name"
          required
        />
      </label>
      <label className="formInput">
        Family Name:{" "}
        <input
          onChange={(e) => handle(e)}
          type="text"
          id="family_name"
          value= {data.family_name}
          name="family_name"
          placeholder="Family Name"
          required
        />
      </label>
      <label className="formInput">
        Leaf Type:
        <select id="leaf_type" name="leaf_type" onChange={(e) => handle(e)} value= {data.leaf_type}>
          <option value="needle_scales">Needle/Scales</option>
          <option value="simple_alternate">Simple Alternate</option>
          <option value="simple_opposite">Simple Opposite</option>
          <option value="compound_alternate">Compound Alternate</option>
          <option value="compound_opposite">Compound Opposite</option>
        </select>
      </label>
      <label className="formInput">
        Bark Details:{" "}
        <input
          onChange={(e) => handle(e)}
          value={data.bark}
          type="text"
          id="bark"
          name="bark"
          placeholder="Bark Details"
        />
      </label>
      <label className="formInput">
        Notes:{" "}
        <textarea
          onChange={(e) => handle(e)}
          value= {data.notes}
          type="text"
          id="notes"
          name="notes"
          placeholder="Notes"
        />
      </label>
      <button> Add Entry </button>
    </form> : ""}

    </div>
  );
};
