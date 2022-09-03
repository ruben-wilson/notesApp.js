class NotesModel{
  constructor(){
    this.notes = []
  }

  getNotes(){
    return this.notes;
  }

  addNote(note){
    this.notes.push(note);
  }

  reset(){
    this.notes = [];
  }

  setNotes(array_of_notes){
    this.notes = array_of_notes;
  }
}
module.exports = NotesModel;