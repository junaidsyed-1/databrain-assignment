import { Link } from "react-router-dom";
import { BUTTON_CSS, inputClass, labelClass } from "../utils/constant";
import { useState } from "react";
import { checkValidData } from "../utils/validate";

const PersonalDetailsForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [submited, setSubmited] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { email, fullName } = formData;
    const message = checkValidData(email, fullName);
    if (message) {
      setErrorMessage(message);
    } else {
      setErrorMessage("");
      setSubmited(true);
    }
  }
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center mb-2">Personal Details</h1>
      <div className="container mx-auto py-4 flex justify-center">
        <div className="w-full max-w-xs">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label className={labelClass}>Full Name</label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={inputClass}
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-4">
              <label className={labelClass}>Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className={labelClass}>Date of Birth</label>
              <input
                className={inputClass}
                type="date"
                placeholder="Date of Birth"
              />
            </div>
            <div className="mb-4">
              <label className={labelClass}>Phone Number</label>
              <input
                name="number"
                value={formData.number}
                onChange={handleChange}
                className={inputClass}
                type="tel"
                placeholder="Phone Number"
              />
              <span className="text-red-500 font-bold">{errorMessage}</span>
            </div>
            <div className="flex items-center justify-between">
              <button className={BUTTON_CSS} type="submit">
                Submit
              </button>
              <Link to="/form">
                <button className={BUTTON_CSS} type="button">
                  Go Back
                </button>
              </Link>
            </div>
          </form>
          {submited && (
            <div className="text-xl">
              <h2 className="font-bold">Form Data Result</h2>
              <p className="">
                <b>Name:</b> {formData.fullName}
              </p>
              <p className="">
                <b>Email:</b> {formData.email}
              </p>
              <p className="">
                <b>Number:</b> {formData.number}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
