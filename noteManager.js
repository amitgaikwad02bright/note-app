
const noteDb = require("./notesDb");

function getNotes() {
    return noteDb.readNotes();
}

function getNotesSync() {
    return noteDb.readNotesSync();
}

function getNoteByTitle(title) {
    return noteDb.readNotes()
            .then(notes => {
                return notes.find(n => n.title === title);
            });
}

function getNoteByTitleSync(title) {
    const notes = noteDb.readNotesSync();
    return notes.find(n => n.title === title);
}

function addNote(title, text) {
    return new Promise((resolve, reject) => {
        noteDb.readNotes()
        .then(notes => {
            notes.push({title, text});
            noteDb.saveNotes(notes)
            .then(()=> {
                resolve("success");
            }, (err)=> {
                reject(err);
            }
            )
        }, (err)=> {
            reject(err);
        });
    });
   
}

function addNoteSync(title, text) {
    const notes = noteDb.readNotesSync();
    notes.push({title, text});
    noteDb.saveNotesSync(notes);
 }

function deleteNoteByTitle(title ) {
    return new Promise((resolve, reject) => {
        noteDb.readNotes()
        .then(notes => {
            const newNotes = notes.filter( n => n.title !== title);
            noteDb.saveNotes(newNotes)
            .then(()=> {
                resolve("success");
            }, (err)=> {
                reject(err);
            }
            )
        }, (err)=> {
            reject(err);
        });
    });
 }

 function deleteNoteByTitleSync(title ) {
    const notes = noteDb.readNotesSync();
    const newNotes = notes.filter( n => n.title !== title);
    noteDb.saveNotesSync(newNotes);
 }

module.exports = {
    getNotes,
    getNotesSync,
    getNoteByTitle,
    getNoteByTitleSync,
    addNote,
    addNoteSync,
    deleteNoteByTitle,
    deleteNoteByTitleSync,
}