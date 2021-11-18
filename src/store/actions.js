export const addNote = note => {
    return {
      type: "ADD_NOTE",
      note
    };
  };
  
  export const removeNote = id => {
    return {
      type: "REMOVE_NOTE",
      id
    };
  };
  