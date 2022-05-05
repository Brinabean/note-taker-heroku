const fs = require("fs");
const path = require("path");

function createNewNote(body, notes) {
  const note = body;
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes }, null, 2)
  );
  return note;
}

function validatenote(note) {
  if (!note.title || typeof note.title !== "string") {
    return false;
  }
  if (!note.text || typeof note.text !== "string") {
    return false;
  }
  return true;
}

function deleteNotes(id, notes) {
  const result = notes.filter((note) => note.id === id)[0];
  delete result;
}

module.exports = {
  createNewNote,
  validatenote,
  deleteNotes,
};
