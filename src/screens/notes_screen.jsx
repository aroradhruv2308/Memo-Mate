import { Paper, Typography, TextField } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { updateNote } from "../services/notesServices.js";
function NotesScreen() {
  const location = useLocation();
  const data = location.state.data;
  console.log(data);
  const [expandedStates, setExpandedStates] = useState(
    Array.from({ length: data.length }, () => false)
  );
  let [details, setDetails] = useState([]);
  let [title, setTitle] = useState("");

  let [subtitle, setSubtitle] = useState("");
  data.forEach((element) => {
    details.push(element);
  });
  const handleExpandClick = (index) => {
    const newExpandedStates = [...expandedStates];
    newExpandedStates[index] = !newExpandedStates[index];
    setExpandedStates(newExpandedStates);
  };

  const handleUpdateNotes = async (index, note) => {
    let result = await updateNote(res.data.token, index, note);
    console.log(result);
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
                  autoFocus
                  onClick={handleTextFieldClick}
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
