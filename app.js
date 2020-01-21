const noteManager = require("./noteManager");

console.log("notes::",noteManager.getNotes());

console.log("adding new note");
noteManager.addNote("hello","this is hello note");

console.log("notes::", noteManager.getNotes());

console.log(noteManager.getNoteByTitle("hello"));

console.log("deleting note");
noteManager.deleteNoteByTitle("hello");


console.log("notes::", noteManager.getNotes());
