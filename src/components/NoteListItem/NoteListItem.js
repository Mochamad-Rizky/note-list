import React from "react";

import ActionButton from "../ActionButton/ActionButton";
import convertDateToLocale from "../../utils/convertDatetoLocale";

import './NoteListItem.scss';

const NoteListItem = ({ title, body, createdAt, id, archivedStatus, onDelete, onArchive, onUnArchive }) => {
  return (
    <article className="note-list__item">
      <div className="note-list__item-description__container">
        <h2 className="note-list__item-title">{title}</h2>
        <span className="note-list__item-createdAt">{convertDateToLocale(createdAt)}</span>
        <p className="note-list__item-description">{body}</p>
      </div>
      <div className="note-list__item-button-container">
        <ActionButton archivedStatus={archivedStatus} onDelete={onDelete} onArchive={onArchive} onUnArchive={onUnArchive} id={id} />
      </div>
    </article>
  );
};

export default NoteListItem;
