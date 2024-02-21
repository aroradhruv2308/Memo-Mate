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
  console.log("[rdsfadsfasd", index);
  let config = {
    headers: {
      token: token,
      "Content-Type": "application/json",
    },
    params: {
      index: index,
    },
  };
  let data = { title: note.title, subtitle: note.subtitle };
  console.log("data that i am sending", data);
  let res = await axios.put("http://localhost:3000/updateNote", data, config);
  console.log("idharrrrr", res);
  return res;
};

export const addNote = async (token, note) => {
  let config = {
    headers: {
      token: token,
      "Content-Type": "application/json",
    },
  };
  let data = { title: note.title, subtitle: note.subtitle };
  console.log("Data being sent for adding note:", data);
  let res = await axios.post("http://localhost:3000/addNote", data, config);
  console.log("Response from server:", res);
  return res;
};

export const deleteNote = async (token, index) => {
  let config = {
    headers: {
      token: token,
    },
    params: {
      index: index,
    },
  };
  console.log("Index of note to delete:", index);
  let res = await axios.delete("http://localhost:3000/deleteNote", config);
  console.log("Response from server:", res);
  return res;
};
