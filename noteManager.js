
const noteDb = require("./notesDb");

function getNotes() {
    return noteDb.readNotesSync();
}

function getNoteByTitle(title) {
    const notes = noteDb.readNotesSync();
    return notes.find(n => n.title === title);
}

function addNote(title, text) {
   const notes = noteDb.readNotesSync();
   notes.push({title, text});
   noteDb.saveNotesSync(notes);
}

function deleteNoteByTitle(title ) {
    const notes = noteDb.readNotesSync();
    const newNotes = notes.filter( n => n.title !== title);
    noteDb.saveNotesSync(newNotes);
 }

module.exports = {
    getNotes,
    getNoteByTitle,
    addNote,
    deleteNoteByTitle
}