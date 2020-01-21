const filePath = "notes.json";
const fs = require("fs");

module.exports = {
    saveNotes(notes) {
        return new Promise((resolve, reject) => {
            fs.writeFile("notes.json", JSON.stringify(notes) , (err) => {
                if (err) {
                    return reject(err);
                }
                return resolve();
            });
        });
    },
    saveNotesSync(notes) {
        try {
           fs.writeFileSync("notes.json", JSON.stringify(notes) )
         }
         catch(ex) {
             console.error("\x1b[31m merror saving notes\x1b[0m", ex );
             throw ex;
         }
    },
    readNotes() {
        return new Promise((resolve, reject) => {
            fs.readFile("notes.json", (err, data) => {
                if (err) {
                    return reject(err);
                }
                return resolve(JSON.parse(data));
            });
        });
    },
    readNotesSync() {
        try {
           const data = fs.readFileSync("notes.json");

            if (data) {
                return JSON.parse(data);
            }
        }
        catch {
            console.error("\x1b[31m notes.json not found\x1b[0m")
        }
        return [];
    }
}