import { Card, Typography, TextField, Checkbox, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/userServices.js";
import { fetchNotesForThisUser } from "../services/notesServices.js";
import Cookies from "js-cookie";
function SignIn() {
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

  async function onLogin() {
    let res = await loginUser(usercreds);
    Cookies.set("token", res.data.token);
    console.log(res);
    console.log(res.status);
    if (res.status == 200) {
      let result = await fetchNotesForThisUser(res.data.token);
      console.log(result.data.notes);
      navigate("/notes", { state: { data: result.data.notes } });
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
                Login To Your Account{" "}
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
            <Button sx={{ marginTop: "10px" }} onClick={onLogin}>
              Login
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default SignIn;
