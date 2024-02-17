import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppBar from "./components/appbar";
import SignIn from "./screens/signin_screen";
import SignUp from "./screens/signup_screen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

function App() {
  return (
    <>
      <AppBar />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
export default App;
