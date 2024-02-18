import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function AppBar() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Typography
        style={{ fontWeight: "bold" }}
        color={"primary"}
        variant="h5"
        component="h2"
      >
        MemoMate
      </Typography>
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            navigate("/signin");
          }}
          style={{ marginRight: "12px", color: "white" }}
        >
          Sign In
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default AppBar;
