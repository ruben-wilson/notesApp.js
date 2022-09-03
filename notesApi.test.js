const NotesAPi = require('./notesApi.js')

require('jest-fetch-mock').enableMocks()

describe('NotesAPi', ()=>{
  it('calls fetch and loads data', () => {
    const api = new NotesAPi


    fetch.mockResponseOnce(JSON.stringify(
      ["This note is coming from the server"]
    ));


    api.loadData((returnedDataFromApi) => {
      expect(returnedDataFromApi).toEqual(["This note is coming from the server"]);
    });
  });

});