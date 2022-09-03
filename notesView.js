class NotesView{
  constructor(model){
    this.model = model
    this.body = document.querySelector('body');

    this.textInputEL = document.querySelector('#notes-input')
    this.addNoteEL = document.querySelector('#add-note-button')
    this.addNoteEL.addEventListener('click', ()=>{
      this.model.addNote(this.textInputEL.value)
      this.createNote(this.textInputEL.value)
      this.textInputEL.value = null;
    });

    this.deleteNoteEL = document.querySelector('#delete-note-button')
    this.deleteNoteEL.addEventListener('click', ()=>{
      const div = document.querySelectorAll('div.note')[document.querySelectorAll('div.note').length - 1];
      div.remove()
      
    });
  }

  displayAllNotes(){
    for(const e of this.model.getNotes()){
      const div = document.createElement('div');
      div.textContent = e;
      div.className = "note";
      this.body.append(div);
    }
  }

  createNote(input){
    const div = document.createElement('div');
    div.textContent = input;
    div.className = "note";
    this.body.append(div);
  }
}

module.exports = NotesView; 