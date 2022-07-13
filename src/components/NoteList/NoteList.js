import React from "react";

import NoteListItem from "../NoteListItem/NoteListItem";

import './NoteList.scss';

const NoteList = ({ notes, title, isActive }) => {
  const filteredNotes = isActive ?
    notes.filter(note => note.archived === false) :
    notes.filter(note => note.archived === true);
  
  return (
    <section className="note-list">
      <h2>{title}</h2>
      <div className="note-list__container">
        {filteredNotes.map((note) => {
          const { id, title, body, createdAt, archived } = note;
          
          return (
            <NoteListItem
              key={id}
              id={id}
              title={title}
              body={body}
              createdAt={createdAt}
              archivedStatus={archived}
            />
          );
        })}
      </div>
    </section>
  );
};

export default NoteList;
