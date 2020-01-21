let notes = [];

function getNotes() {
    return notes;
}

function getNoteByTitle(title) {
    return notes.find(n => n.title === title);
}

function addNote(title, text) {
   notes.push({title, text});
}

function deleteNoteByTitle(title ) {
    notes = notes.filter( n => n.title !== title);
 }

module.exports = {
    getNotes,
    getNoteByTitle,
    addNote,
    deleteNoteByTitle
}