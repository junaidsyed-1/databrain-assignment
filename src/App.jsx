/* eslint-disable react-refresh/only-export-components */
import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Form from "./components/Form";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/form",
        element: <Form />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
