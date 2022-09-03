const NotesModel = require('./notesModel.js')


describe('NotesModel', ()=>{
  it('returns empty array when getnotes() is called and no notes have been added', ()=>{
      const model = new NotesModel;
      expect(model.getNotes()).toEqual([]);

  })
  it('returns note after one has been added', ()=>{
      const model = new NotesModel;
      model.addNote('this is a note')

      expect(model.getNotes()).toEqual(['this is a note']);

  })
  it("reset() empty's array of notes", ()=>{
      const model = new NotesModel;
      model.addNote('this is a note')
      model.addNote('this is a note')
      model.reset()

      expect(model.getNotes()).toEqual([]);

  })
  it("setNotes add array of notes to this.notes", ()=>{
      const model = new NotesModel;
      model.setNotes(['note1 to set', 'note2 to set'])

      expect(model.getNotes()).toEqual(['note1 to set', 'note2 to set']);

  })
});