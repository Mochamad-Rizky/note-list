import React, {useEffect, useState} from "react";

import Layout from "./layout/Layout";
import NoteList from "./components/NoteList/NoteList";
import getData from "./data/data";

import './App.scss';

const App = () => {
  const [notes, setNotes] = useState([]);
  
  useEffect(() => {
    setNotes(getData);
  }, []);
  
  return (
    <Layout>
      <NoteList
        notes={notes}
        title="Catatan Aktif"
        isActive
      />
    </Layout>
  );
};

export default App;
