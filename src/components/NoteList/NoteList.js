import React, { useEffect, useState } from "react";

import NoteListItem from "../NoteListItem/NoteListItem";

import './NoteList.scss';
import NotFound from "../NotFound/NotFound";

const NoteList = ({ notes, title, isActive, onDelete, onArchive, onUnArchive, searchTerm }) => {
  const [isNotFound, setIsNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const filteredNotes = isActive ?
    notes.filter(note => !note.archived) :
    notes.filter(note => note.archived);
  
  let filteredNotesBySearchTerm = !searchTerm ?
    filteredNotes : filteredNotes.filter(note => note.title.toLowerCase().includes(searchTerm.toLowerCase()));
  ;
  
  useEffect(() => {
    if (searchTerm && filteredNotesBySearchTerm.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
    
    setIsLoading(!(filteredNotesBySearchTerm.length > 0));
  }, [searchTerm, filteredNotesBySearchTerm]);
  
  return (
    <section className="note-list">
      <h2>{title}</h2>
      <div className={filteredNotesBySearchTerm.length === 0 ? 'note-list__container-empty' : 'note-list__container'}>
        {isNotFound && !isLoading && <h3 className="text-center">Loading...</h3>}
        {(filteredNotesBySearchTerm.length === 0 || (filteredNotes.length === 0 && filteredNotesBySearchTerm === 0)) && <NotFound />}
        {filteredNotesBySearchTerm.map((note) => {
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
