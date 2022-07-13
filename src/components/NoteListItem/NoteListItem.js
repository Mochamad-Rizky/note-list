import ActionButton from "../ActionButton/ActionButton";
import convertDateToLocale from "../../utils/convertDatetoLocale";

import './NoteListItem.scss';

const NoteListItem = ({ title, body, createdAt, id, archivedStatus }) => {
  return (
    <article className="note-list__item">
      <h2 className="note-list__item-title">{title}</h2>
      <span className="note-list__item-createdAt">{convertDateToLocale(createdAt)}</span>
      <p className="note-list__item-description">{body}</p>
      <ActionButton archivedStatus={archivedStatus} />
    </article>
  );
};

export default NoteListItem;
