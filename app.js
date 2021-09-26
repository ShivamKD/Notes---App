
const { command, describe } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')


//Creating add command [Creating command of our own]

yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Creating remove command

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.removeNote(argv.title)
    }
})

// Creating list command

yargs.command({
    command: 'list',
    describe: 'List',
    handler () {
        notes.listNotes()
    }
})


// Creating a read command

yargs.command({
    command: 'read',
    describe: 'Reading',
    builder: {
        title: {
            describe: 'Reading',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.readNotes(argv.title)
    }
})

yargs.parse()
// Customise yargs version
//yargs.version('1.0.1')
//console.log(yargs.argv)



/**const command = process.argv[2]

if(command == 'add'){
    console.log('Adding a node')
}
else if(add == 'remove'){
    console.log('Removing the node')
}
*/
//const msg = getNotes()

//console.log(msg)
//console.log(chalk.green.bold.italic.bgRed('This is green'))

//console.log(process.argv[2])