export const getDatabase = () => {
  let objString = localStorage.getItem('database');
  if (!localStorage.getItem('database')) {
    return fetch('assets/database.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json);
        saveDatabase(json);
        return json;
      });
  } else {
    return JSON.parse(objString);
  }
}

export const saveDatabase = (json) => {
  localStorage.setItem('database', JSON.stringify(json))
}


export const getCategory = (id) => {
  const database: any = getDatabase();
  return (database.pastTrialsCategory.find(c => c.id === id) || {}).value;
}
