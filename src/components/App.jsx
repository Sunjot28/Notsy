import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [listItem, setListItem] = useState([]);

  function addData(data){
    setListItem(prevData => {
      return [...prevData, data];
    });
  }   

  function deleteNote(id){
    setListItem(prevData => {
        return prevData.filter((item, index) => {
          return index !== id;
        });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addData} />
      {listItem.map((items, index) => {
        return <Note  
          key={index}
          id={index}
          title={items.title}
          content={items.content}
          onDelete={deleteNote}
        />
      })}
      <Footer />
    </div>
  );
} 

export default App;
