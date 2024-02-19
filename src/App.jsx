import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import AppBar from "./components/appbar";
import SignIn from "./screens/signin_screen";
import SignUp from "./screens/signup_screen";
import NotesScreen from "./screens/notes_screen";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0D9276",
    },
    secondary: {
      main: "#40A2E3",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <AppBar />
        <SignUp />
      </div>
    ),
  },
  {
    path: "/signup",
    element: (
      <div>
        <AppBar />
        <SignUp />
      </div>
    ),
  },
  {
    path: "/signin",
    element: (
      <div>
        <AppBar />
        <SignIn />
      </div>
    ),
  },
  {
    path: "/notes",
    element: (
      <div>
        <AppBar />
        <NotesScreen />
      </div>
    ),
  },
]);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </>
  );
}
export default App;
