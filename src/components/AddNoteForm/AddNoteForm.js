import React, { useState } from "react";

import './AddNoteForm.scss';

const AddNoteForm = ({ onAddNoteHandler }) => {
  const [titleValue, setTitleValue] = useState('');
  const [bodyValue, setBodyValue] = useState('');
  const [limitTitleValue, setLimitTitleValue] = useState(50);
  
  const titleChangeHandler = (event) => {
    const limit = 50;
    setTitleValue(event.target.value.slice(0, limit));
    
    if (event.target.value.length <= limit) {
      setLimitTitleValue(limit - event.target.value.length);
    }
  };
  
  const bodyChangeHandler = (event) => {
    setBodyValue(event.target.value);
  };
  
  const submitNoteHandler = (event) => {
    event.preventDefault();
    
    const note = {
      id: +Date.now(),
      title: titleValue,
      body: bodyValue,
      archived: false,
      createdAt: new Date(),
    }
    
    onAddNoteHandler(note);
  };
  
  return (
    <div className="add-note__form">
      <h2 className="text-center">Tambah Catatan</h2>
      <form onSubmit={submitNoteHandler}>
        <div className="form-group">
          <p>Maksimal judul karakter yang tersisa: {limitTitleValue}</p>
          <label htmlFor="title">Judul</label>
          <input value={titleValue} onChange={titleChangeHandler} type="text" className="form-control" id="title" placeholder="Judul" />
        </div>
        <div className="form-group">
          <label htmlFor="deskripsi">Deskripsi</label>
          <textarea value={bodyValue} onChange={bodyChangeHandler} className="form-control" id="deskripsi" rows="5" placeholder="Deskripsi dari catatan" />
        </div>
        <button type="submit" className="btn btn-primary">Tambah</button>
      </form>
    </div>
  )
};

export default AddNoteForm;
