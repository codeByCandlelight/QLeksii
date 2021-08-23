import React, { FunctionComponent, useState }  from "react";
type props = {
  handleClick: (arg: {fields: [], tables: []}) => void
  handleURI: (uri: string) => void
}
export const UriMenu: FunctionComponent<props> = ({handleClick, handleURI}) => {
  const [change, setChange] = useState('');
  const handleSubmit = () => {
    fetch("http://localhost:3333/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({URI:change}),
    })
    .then(response => response.json())
    .then(data => {
      // console.log('Success', change);
      handleURI(change);
      handleClick(data);
    })
    .catch(error => console.log('Error', error));
  }
  return(<div className="wrapper__Uri">
  <input className="Input__uri" type='text' onChange={(e)=>{setChange(e.target.value)}} value={change} placeholder='Write Uri Here'/>
  <button onClick={handleSubmit}>Send URI</button>
</div>)}