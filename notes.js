const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title == title)

    const duplicateNote = notes.find((note) => note.title == title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log('New Note added')
    }
    else {
        console.log('No Note added')
    }

}

const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notesToKeep.length == notes.length) {
        console.log(chalk.red('No note removed'))
    }
    else {
        console.log(chalk.green('Note removed'))
    }
    saveNotes(notesToKeep)
}


const listNotes = () => {
    console.log(chalk.bold.red.inverse("Your Notes"))
    
    notes = loadNotes()

    notes.forEach(element => {
        console.log(chalk.bold.green.inverse("Title : ", element.title))
        console.log(chalk.blue.inverse("Body : ", element.body))
        console.log("---------------------------------------")
    });
}

const readNotes = (title) => {
    const notes = loadNotes()

    const note = notes.find((note) => note.title == title)
    // debugging
    //console.log(note.title)

    debugger

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse('Note not found'))
    }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}