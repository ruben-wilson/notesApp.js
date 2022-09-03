const NotesView = require('./notesView.js');
const NotesModel = require('./notesModel.js');

const model = new NotesModel;
model.addNote('test note')

const view = new NotesView(model)

view.displayAllNotes()
