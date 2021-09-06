const { notStrictEqual } = require("assert");
const chalk = require("chalk");
const fs = require("fs");
const getNotes = () => {
  return "my notes.......";
};

const addNotes = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(function (elements) {
    return elements.title === title;
  });

  // console.log(duplicateNotes);
  debugger;

  if (duplicateNotes.length === 0) {
    notes.push({ title: title, body: body });
    console.log(chalk.green.inverse("NOTES ADDED"));
    saveNotes(notes);
  } else {
    console.log(chalk.red.inverse("NOTES TAKEN"));
  }
};

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataString = dataBuffer.toString();
    return JSON.parse(dataString);
  } catch {
    return [];
  }
};

const removeNotes = (deletingNote) => {
  const notes = loadNotes();

  const notesToKeep = notes.filter(function (elements) {
    return elements.title !== deletingNote;
  });

  const matchedNote = notes.filter(function (elements) {
    return elements.title === deletingNote;
  });

  if (matchedNote.length === 0) {
    console.log(chalk.red.inverse("NOTE NOT FOUND!!!!"));
  } else {
    if (matchedNote[0].title === deletingNote) {
      console.log(chalk.green.inverse("SUCCESSFULLY REMOVED"));
    }
  }
  saveNotes(notesToKeep);
};

const listNotes = () => {
  console.log(chalk.white.inverse("YOUR NOTES"));
  const notes = loadNotes();

  notes.map(function (elements) {
    console.log(chalk.bgCyan(elements.title));
    console.log(chalk.bgMagenta(elements.body));
  });
};

const readNotes = (titleRead) => {
  const notes = loadNotes();
  const readNote = notes.filter(function (elements) {
    return elements.title === titleRead;
  });

  if (readNote.length === 0) {
    console.log(chalk.red.inverse("NOTE NOT FOUND!!!!!!"));
  } else {
    console.log(chalk.underline(readNote[0].title));
    console.log(readNote[0].body);
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
