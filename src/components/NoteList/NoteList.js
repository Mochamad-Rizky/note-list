import React from "react";

import NoteListItem from "../NoteListItem/NoteListItem";

import './NoteList.scss';

const NoteList = ({ notes, title, isActive, onDelete, onArchive, onUnArchive }) => {
  const filteredNotes = isActive ?
    notes.filter(note => !note.archived) :
    notes.filter(note => note.archived);
  
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
