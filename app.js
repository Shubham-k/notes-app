const { demandOption, argv } = require("yargs");
const yargs = require("yargs");
const sendNotes = require("./notes");
const chalk = require("chalk");
const notes = require("./notes");

//add command
yargs.command({
  command: "add",
  describe: "Adding a new note",
  builder: {
    title: {
      describe: "NOTE TITLE",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "NOTE BODY",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    // console.log(argv.title);
    // console.log(argv.body);
    sendNotes.addNotes(argv.title, argv.body);
  },
});

//remove command
yargs.command({
  command: "remove",
  describe: "Removing a note",
  builder: {
    title: {
      describe: "removing note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    sendNotes.removeNotes(argv.title);
  },
});

//reading note
yargs.command({
  command: "read",
  describe: "Reading a note",
  builder: {
    title: {
      describe: "reading note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});

//listing notes
yargs.command({
  command: "list",
  describe: "listing a note",
  handler() {
    // console.log("for listing a note");
    notes.listNotes();
  },
});

yargs.parse();
