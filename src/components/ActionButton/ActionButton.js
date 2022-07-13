import React from "react";

import './ActionButton.scss';

const ActionButton = ({ archivedStatus, id, onDelete, onArchive, onUnArchive }) => {
  return (
    <div className="action-button">
      <button className="btn btn-danger" onClick={onDelete.bind(null, id)}>Hapus</button>
      <button className="btn btn-warning" onClick={archivedStatus ? onUnArchive.bind(null, id) : onArchive.bind(null, id)}>{archivedStatus ? 'Pindahkan' : 'Arsipkan'}</button>
    </div>
  );
};

export default ActionButton;
