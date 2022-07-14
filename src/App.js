import React, { useEffect, useState, useCallback } from "react";
import Swal from "sweetalert2";

import Layout from "./layout/Layout";
import NoteList from "./components/NoteList/NoteList";
import getData from "./data/data";

import './App.scss';
import SearchBar from "./components/SearchBar/SearchBar";
import AddNoteForm from "./components/AddNoteForm/AddNoteForm";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    setNotes(getData);
  }, []);
  
  const deleteNoteHandler = (id) => {
    Swal.fire({
      title: "Apakah Anda yakin ingin menghapus catatan ini?",
      text: "Data akan dihapus!",
      icon: "warning",
      showCancelButton: true,
      
    }).then(result => {
      if (result.isConfirmed) {
        setNotes(prevState => {
          return prevState.filter(note => note.id !== id);
        });
        
        Swal.fire({
          title: "Berhasil!",
          text: "Data berhasil dihapus!",
          icon: "success",
          timer: 1000,
        });
      }
    });
  };
  
  const archiveNoteHandler = (id) => {
    Swal.fire({
      title: "Apakah Anda yakin ingin mengarsipkan catatan ini?",
      text: "Data akan diarsipkan!",
      icon: "warning",
      showCancelButton: true,
    }).then(result => {
      if (result.isConfirmed) {
        setNotes(prevState => {
          return prevState.map(note => {
            if (note.id === id) {
              note.archived = true;
            }
            return note;
          });
        });
        
        Swal.fire({
          title: "Berhasil!",
          text: "Data berhasil diarsipkan!",
          icon: "success",
          timer: 1000,
        });
      }
    });
  };
  
  const unArchiveNoteHandler = (id) => {
    Swal.fire({
      title: "Apakah Anda yakin ingin memindahkan ke catatan aktif?",
      text: "Data akan dipindahkan ke catatan aktif!",
      icon: "warning",
      showCancelButton: true,
    }).then(result => {
      if (result.isConfirmed) {
        setNotes(prevState => {
          return prevState.map(note => {
            if (note.id === id) {
              note.archived = false;
            }
            return note;
          });
        });
        
        Swal.fire({
          title: "Berhasil!",
          text: "Data berhasil memindahkan ke catatan aktif!",
          icon: "success",
          timer: 1000,
        });
      }
    });
  }
  
  const searchNoteHandler = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const addNoteHandler = (note) => {
    setNotes(prevState => [...prevState, note]);
    
    Swal.fire({
      title: "Berhasil!",
      text: "Catatan berhasil ditambahkan!",
      icon: "success",
      timer: 1000,
    });
  };
  
  return (
    <Layout>
      <AddNoteForm onAddNoteHandler={addNoteHandler}/>
      <SearchBar onSearch={searchNoteHandler} />
      <NoteList
        notes={notes}
        title="Catatan Aktif"
        isActive
        onDelete={deleteNoteHandler}
        onArchive={archiveNoteHandler}
        searchTerm={searchTerm}
      />
      <NoteList
        notes={notes}
        title="Catatan Arsip"
        onDelete={deleteNoteHandler}
        onUnArchive={unArchiveNoteHandler}
        searchTerm={searchTerm}
      />
    </Layout>
  );
};

export default App;
