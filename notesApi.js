class NotesAPi {

  loadData(callback){
    fetch('http://localhost:3000/notes')
      .then((response)=> response.json())
      .then((response)=> callback(response))
  }

  addData(data){
    const input_data = {content: data}
    fetch('http://localhost:3000/notes', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input_data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
  })
  }


}

module.exports = NotesAPi;