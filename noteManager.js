const notes = [];

module.exports = {
    getNotes: () => "getnotes",
    getNoteByTitle:  (title) => "getNoteByTitle",
    addNote:  (newNote) =>Promise.resolve("note added"),
    deleteNoteByTitle:  (title) =>Promise.resolve("note deleted"),
}