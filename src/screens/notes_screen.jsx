import { Paper, Typography, TextField } from "@mui/material";
import { useState } from "react";
function NotesScreen() {
  const [expandedStates, setExpandedStates] = useState(
    Array.from({ length: 2 }, () => false)
  );
  let [details, setDetails] = useState([
    {
      title: "Go To Gym",
      subTasks: ["wakeup at 5", "have your preworkout", "Go to Gym"],
    },
    {
      title: "Study",
      subTasks: [
        "wakeup at 3",
        "have your Coffee or Tea",
        "Study Continuously",
      ],
    },
  ]);
  const handleExpandClick = (index) => {
    const newExpandedStates = [...expandedStates];
    newExpandedStates[index] = !newExpandedStates[index];
    setExpandedStates(newExpandedStates);
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
          onClick={() => handleExpandClick(index)}
          sx={{
            height: expanded ? "400px" : "200px",
            width: expanded ? "400px" : "200px",
            background: "#0afa9a",
            marginRight: "30px",
            marginBottom: "30px",
            borderRadius: "30px",
            marginLeft: "10px",
            transition: "height 0.3s ease-in-out, width 0.3s ease-in-out",
            cursor: "pointer",
            position: "relative",
          }}
        >
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
