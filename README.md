#notes-app

A terminal based note taking app made with NodeJS and Yargs with options to `add`, `delete`, `read` and `list` notes stored in a JSON file locally.

### Commands
Type `node app.js --help` to view the list of available commands or type `node app.js <command> --help` to see which options are available for each command.

---

|Command |Example | Description |
|-|-|-|
|add| `node app.js add --title="//title" --body="//body"`| Add a note|
|read| `node app.js read --title="//title"` | Read a note|
|list| `node app.js list`| List all notes|
|remove| `node app.js remove --title="//title"`| Remove a note|

### Dependencies
|Dependency|Description|
|-|-|
|[Yargs](https://yargs.js.org/)|Argument Parser|
|[Chalk](https://github.com/chalk/chalk#readme)|Terminal Styling|
