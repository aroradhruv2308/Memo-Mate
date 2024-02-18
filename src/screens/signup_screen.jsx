import { Card, Typography, TextField, Checkbox, Button } from "@mui/material";
import { useState } from "react";

function SignUp() {
  let [isChecked, setChecked] = useState(false);
  function onChange(event) {
    setChecked(event.target.checked);
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
                id="outlined-basic"
                label="Username"
                variant="outlined"
                sx={{ marginTop: "20px" }}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                sx={{ marginTop: "20px" }}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Phone No"
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
            <Button sx={{ marginTop: "10px" }}>Register</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default SignUp;
