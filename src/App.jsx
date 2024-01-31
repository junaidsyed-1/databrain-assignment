/* eslint-disable react-refresh/only-export-components */
import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import FormContainer from "./components/FormContainer";
import AddressForm from "./components/AddressForm";
import PaymentDetailForm from "./components/PaymentDetailForm";
import PersonalDetailsForm from "./components/PersonalDetailsForm";

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
        element: <FormContainer />,
      },
      {
        path: "/personal",
        element: <PersonalDetailsForm />,
      },
      {
        path: "/address",
        element: <AddressForm />,
      },
      {
        path: "/payment",
        element: <PaymentDetailForm />,
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
