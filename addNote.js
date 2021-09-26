

const addNote = function (title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function (note) {
        return note.title == title
    })


    if (duplicateNotes.length == 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log('New Note added')
    }
    else{
        console.log('No Note added')
    }

}

module.exports = {
    addNote: addNote
}