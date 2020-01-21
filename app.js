const noteManager = require("./noteManager");

// Sync blocking version
/*
console.log("notes::", noteManager.getNotesSync());

console.log("adding new note");
noteManager.addNote("hello", "this is hello note");

console.log("notes::", noteManager.getNotes());

console.log(noteManager.getNoteByTitle("hello"));

console.log("deleting note");
noteManager.deleteNoteByTitle("hello");

console.log("notes::", noteManager.getNotes());
*/
// Sync Blocking version ends

// Async nonblocking version 

function displayNotes() {
    console.log(" getting notes async");
    noteManager.getNotes()
        .then(notes => {
            console.log(" getting notes async completed");
            console.log("notes ::", notes);
        }, (err) => {
            console.error("Error reading notes", err);
        })
}

function addNotes(title, text) {
    console.log(" adding notes async");
  return noteManager.addNote(title, text)
        .then(() => {
            console.log(" note added succesfully");
            displayNotes();
        }, (err) => {
            console.error("Error adding note", err);
        })
}

function deleteNotes(title) {
    console.log(" deleting notes async");
    return noteManager.deleteNoteByTitle(title)
        .then(() => {
            console.log(" note deleted succesfully");
            displayNotes();
        }, (err) => {
            console.error("Error deleting note", err);
        })
}

displayNotes();

addNotes("hello2", "this is hello2 async note")
.then(() => {
    deleteNotes("hello2");
})
// Async non blocking version ends