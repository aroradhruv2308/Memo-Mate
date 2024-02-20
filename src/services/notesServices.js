import axios from "axios";

export const fetchNotesForThisUser = async (token) => {
  let config = {
    headers: {
      token: token,
    },
  };
  let data = {};
  console.log(token);
  let res = await axios.get("http://localhost:3000/notes", config);
  return res;
};

export const updateNote = async (token, index, note) => {
  let config = {
    headers: {
      token: token,
    },
    params: {
      index: index,
    },
  };
  let data = { title: note.title, subtitle: note.subtitle };
  console.log(token);
  let res = await axios.put("http://localhost:3000/updateNote", data, config);
  return res;
};
