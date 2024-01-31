import { Link } from "react-router-dom";
import { BUTTON_CSS } from "../utils/constant";

const FormContainer = () => {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-3xl font-bold text-center mb-4">Form Validation</h1>
      <div className="flex flex-col py-2">
        <Link to="/personal">
          <button className={`mb-4 ${BUTTON_CSS}`}>Personal Detail Form</button>
        </Link>
        <Link to="/payment">
          <button className={`mb-4 ${BUTTON_CSS}`}>Payment Detail Form</button>
        </Link>
        <Link to="/address">
          <button className={`mb-4 ${BUTTON_CSS}`}>Address Form</button>
        </Link>
      </div>
    </div>
  );
};

export default FormContainer;
