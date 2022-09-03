const NotesView = require('./notesView.js');
const NotesModel = require('./notesModel.js');
const NotesAPi = require('./notesApi.js')

const api = new NotesAPi;
const model = new NotesModel;
model.addNote('test note')

const view = new NotesView(model, api)

view.displayNotesFromApi()
