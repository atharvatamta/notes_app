import React from "react";
import { useState } from "react";

const NoteList = ({ notes }) => {
  const decideColor = (priority) => {
    if (priority === "High") return "border-l-red-500";
    if (priority === "Medium") return "border-l-yellow-500";
    else 
        return "border-l-green-500";
  };
  return (
    <div className="space-y-4">
      {notes.length === 0 ? (
        <p className="text-center text-gray-500">No notes yet!</p>
      ) : null}
      {notes.map((note) => (
        <div
          key={note.id}
          className={`p-4 bg-white rounded-lg shadow-md border-l-6 ${decideColor(note.priority)}`}
          
        >
          <h3 className="text-lg font-bold">{note.title}</h3>
          <p className="text-sm text-gray-600">
            <strong>Category:</strong> {note.category}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Priority:</strong> {note.priority}
          </p>
          <p className="mt-2">{note.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
