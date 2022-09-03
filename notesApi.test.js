const NotesAPi = require('./notesApi.js')

require('jest-fetch-mock').enableMocks()

describe('NotesAPi', ()=>{
  it('calls fetch and loads data', () => {
    const api = new Api();

    fetch.mockResponseOnce(JSON.stringify({
      name: "Some value",
      id: 123
    }));

    // 3. We call the method, and use `expect`
    // to assert the values we get back contain
    // what we expect.
    api.loadData((returnedDataFromApi) => {
      expect(returnedDataFromApi.name).toBe("Some value");
      expect(returnedDataFromApi.id).toBe(123);
    });
  });

});