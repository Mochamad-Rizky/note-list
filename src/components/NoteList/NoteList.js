import React, { useEffect, useState } from "react";

import NoteListItem from "../NoteListItem/NoteListItem";

import './NoteList.scss';
import NotFound from "../NotFound/NotFound";

const NoteList = ({ notes, title, isActive, onDelete, onArchive, onUnArchive, searchTerm }) => {
  const [listNote, setListNote] = useState([]);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const filteredNotes = isActive ?
      notes.filter(note => !note.archived) :
      notes.filter(note => note.archived);
    
    let filteredNotesBySearchTerm = !searchTerm ?
      filteredNotes : filteredNotes.filter(note => note.title.toLowerCase().includes(searchTerm.toLowerCase()));
    ;
    
    if (searchTerm && filteredNotesBySearchTerm.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
    
    setIsLoading(!(filteredNotesBySearchTerm.length > 0));
    setListNote(filteredNotesBySearchTerm);
  }, [searchTerm, notes])
  
  console.log(isNotFound);
  console.log(isLoading);
  
  return (
    <section className="note-list">
      <h2>{title}</h2>
      <div className={listNote.length === 0 ? 'note-list__container-empty' : 'note-list__container'}>
        {isNotFound && !isLoading && <h3 className="text-center">Loading...</h3>}
        {isNotFound && isLoading && <NotFound />}
        {listNote.map((note) => {
          const { id, title, body, createdAt, archived } = note;
          
          return (
            <NoteListItem
              key={id}
              id={id}
              title={title}
              body={body}
              createdAt={createdAt}
              archivedStatus={archived}
              isActive={isActive}
              onDelete={onDelete}
              onArchive={onArchive}
              onUnArchive={onUnArchive}
            />
          );
        })}
      </div>
    </section>
  );
};

export default NoteList;
