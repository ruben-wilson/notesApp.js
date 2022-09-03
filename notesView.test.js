/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesView = require('./notesView.js');
const NotesModel = require('./notesModel.js');




describe('NotesView', ()=>{
  beforeEach(()=>{
    document.body.innerHTML = fs.readFileSync('./index.html')
  });

  it('it returns notes in the model class', ()=>{
    const model = new NotesModel;
    model.addNote('test note for view test');
    const view = new NotesView(model);

    view.displayAllNotes()
  
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('test note for view test');
  });
  it('it add note after form is filed in and button is clicked', ()=>{
    const model = new NotesModel;
    const view = new NotesView(model);

    const notesInput = document.querySelector('#notes-input')
    notesInput.value = 'test note'
    const buttonEL = document.querySelector('#add-note-button')
    buttonEL.click();

    
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('test note');
  });
  it('it removes note after one has been added', ()=>{
    const model = new NotesModel;
    const view = new NotesView(model);

    const notesInput = document.querySelector('#notes-input')
    notesInput.value = 'test note to be deleted'
    const addButtonEL = document.querySelector('#add-note-button')
    addButtonEL.click();
    const deleteButtonEL = document.querySelector('#delete-note-button')
    deleteButtonEL.click();

    
    expect(document.querySelectorAll('div.note').length).toEqual(0);
  });
  it('it removes notes after two have been added', ()=>{
    const model = new NotesModel;
    const view = new NotesView(model);

    const notesInput = document.querySelector('#notes-input')
    notesInput.value = 'test note to be deleted'
    const addButtonEL = document.querySelector('#add-note-button')
    addButtonEL.click();
    notesInput.value = 'test note2 to be deleted'
    addButtonEL.click();

    const deleteButtonEL = document.querySelector('#delete-note-button')
    deleteButtonEL.click();
    deleteButtonEL.click();

    
    expect(document.querySelectorAll('div.note').length).toEqual(0);
  });
  xit('displayNotesFromApi() is called all notes in api are added to page', ()=>{
    const model = new NotesModel;

    const fakeApi = {
    loadData: (callback) => {['test note 1', 'test note 2from api']}
  }

    const view = new NotesView(model, fakeApi);

    view.displayNotesFromApi();
    
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('test note 1');
    expect(document.querySelectorAll('div.note')[1].textContent).toEqual('test note 2from api');
  });
});


