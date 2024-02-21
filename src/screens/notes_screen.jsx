import { Paper, Typography, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  updateNote,
  deleteNote,
  fetchNotesForThisUser,
} from "../services/notesServices.js";
import Cookies from "js-cookie";

function NotesScreen() {
  let location = useLocation();
  let data = location.state.data;
  let [details, setDetails] = useState([]);
  data.forEach((element) => {
    details.push(element);
  });
  let [expandedStates, setExpandedStates] = useState(
    Array.from({ length: data.length }, () => false)
  );

  let [dataUpdated, setDataUpdated] = useState(false);
  let [title, setTitle] = useState("");

  let [subtitle, setSubtitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchNotesForThisUser(Cookies.get("token"));
        console.log("got res", result);
        const newData = result.data.notes;
        setDetails(newData);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    console.log("useEffect was called!!");
    fetchData();
  }, [dataUpdated]);

  const handleExpandClick = (index) => {
    const newExpandedStates = [...expandedStates];
    newExpandedStates[index] = !newExpandedStates[index];
    setExpandedStates(newExpandedStates);
  };

  const handleUpdateNotes = async (index, note) => {
    let result = await updateNote(Cookies.get("token"), index, note);
    setDataUpdated(!dataUpdated);
  };

  const handleDeleteNotes = async (index, note) => {
    let result = await deleteNote(Cookies.get("token"), index);
    setDataUpdated(!dataUpdated);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTextFieldClick = (event) => {
    event.stopPropagation();
  };

  const handleDetailsChange = (event) => {
    setDetails(event.target.value);
  };
  console.log();
  return (
    <div style={{ marginTop: "40px", display: "flex", flexWrap: "wrap" }}>
      {expandedStates.map((expanded, index) => (
        <Paper
          key={index}
          sx={{
            height: expanded ? "400px" : "200px",
            width: expanded ? "400px" : "200px",
            background: "#0afa9a",
            marginRight: "30px",
            marginBottom: "30px",
            borderRadius: "30px",
            marginLeft: "10px",
            transition: "height 0.3s ease-in-out, width 0.3s ease-in-out",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              right: "60px",
              cursor: "pointer",
            }}
          >
            {!expanded ? (
              <div
                style={{
                  textAlign: "center",
                  background: "white",
                  color: "red",
                  padding: "10px",
                  borderRadius: "30px",
                }}
                onClick={() =>
                  handleDeleteNotes(index, { title: title, subtitle: "" })
                }
              >
                delete
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => handleExpandClick(index)}
          >
            {!expanded ? (
              <div
                style={{
                  textAlign: "center",
                  background: "black",
                  color: "yellow",
                  padding: "10px",
                  height: "20px",
                  width: "20px",
                  borderRadius: "30px",
                }}
                onClick={() => handleExpandClick(index)}
              >
                +
              </div>
            ) : (
              <div
                style={{
                  textAlign: "center",
                  background: "black",
                  color: "yellow",
                  padding: "10px",
                }}
                onClick={() =>
                  handleUpdateNotes(index, { title: title, subtitle: "" })
                }
              >
                Save Changes
              </div>
            )}
          </div>
          <div style={{ padding: "20px" }}>
            {!expanded ? (
              <Typography variant="h3" sx={{ fontSize: "40px" }}>
                {details[index].title}
              </Typography>
            ) : (
              <div>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  defaultValue="Title"
                  InputProps={{
                    disableUnderline: true,
                    style: { fontSize: "40px", fontWeight: "bold" },
                  }}
                  focused={true}
                  onFocus={(e) => e.target.select()}
                  onChange={handleTitleChange}
                  autoFocus
                />
              </div>
            )}
          </div>
        </Paper>
      ))}
    </div>
  );
}

export default NotesScreen;
