import { Card, Typography, TextField, Checkbox, Button } from "@mui/material";
import { useState } from "react";
import { registerUser } from "../services/userServices.js";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const navigate = useNavigate();
  let [isChecked, setChecked] = useState(false);
  let [usercreds, setUsercreds] = useState({ username: "", password: "" });

  function usernameOnChange(event) {
    setUsercreds((prevState) => ({
      ...prevState,
      username: event.target.value,
    }));
  }

  function passwordOnChange(event) {
    setUsercreds((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
  }

  async function onRegister() {
    let res = await registerUser(usercreds);
    if (res.status == 200) {
      navigate("/notes");
    }
  }
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Card
        variant="outlined"
        sx={{
          width: 600,
          maxWidth: "100%",
          height: 600,
          boxShadow: "lg",
          marginTop: "40px",
          paddingTop: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div>
              <Typography
                variant="h5"
                component="h2"
                sx={{ marginTop: "20px", textAlign: "center" }}
              >
                Create Your Own Account
              </Typography>
            </div>
            <div>
              <TextField
                onChange={usernameOnChange}
                id="outlined-basic"
                label="Username"
                variant="outlined"
                sx={{ marginTop: "20px" }}
              />
            </div>
            <div>
              <TextField
                onChange={passwordOnChange}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                sx={{ marginTop: "20px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                alignItems: "center",
              }}
            ></div>
            <Button sx={{ marginTop: "10px" }} onClick={onRegister}>
              Register
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default SignUp;
