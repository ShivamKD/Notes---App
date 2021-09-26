const chalk = require('chalk')

const removeNote = function(title){
    const notes = loadNotes()
    
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })

    if(notesToKeep.length ==  notes.length){

        console.log(chalk.red('No note removed'))
    }
    else{
        console.log(chalk.green('Note removed'))
    }
    saveNotes(notesToKeep)
}

module.exports = {
    removeNote: removeNote
}