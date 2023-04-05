import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [data, setData] = useState({title:"", content:""});
  const [isExpanded, setExpanded] = useState(false);

  function handleOnChange(event){
    const {name, value} = event.target;
    setData(prevData => {
      return{
        ...prevData,
        [name]: value
      }
    });
  }

  function submitNote(event){
    props.onAdd(data);
    event.preventDefault();
    setData({title:"", content:""});
  }

  function expand(){
    setExpanded(true);
  }

  return ( 
    <div>
      <form className="create-note">

       {isExpanded ? 
        <input 
        name="title" 
        placeholder="Title" 
        value={data.title} 
        onChange={handleOnChange}
        /> : null}

        <textarea 
        name="content" 
        placeholder="Take a note..."  
        rows={isExpanded ? 3 : 1}
        value={data.content} 
        onChange={handleOnChange} 
        onClick={expand}
        />
        
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote} color="primary"><AddIcon/></Fab> 
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;
