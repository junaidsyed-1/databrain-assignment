import { Link } from "react-router-dom";
import { BUTTON_CSS, inputClass, labelClass } from "../utils/constant";
import { useState } from "react";
import { checkValidAddress } from "../utils/validate";

const AddressForm = () => {
  const [formData, setFormData] = useState({
    street: "",
    city: "",
    zipCode: "",
    country: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { street, city, zipCode, country } = formData;
    const message = checkValidAddress(street, city, zipCode, country);
    if (message) {
      setErrorMessage(message);
    } else {
      setErrorMessage("");
      setSubmitted(true);
    }
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-2">Address Details</h1>

      <div className="container mx-auto py-4 flex justify-center">
        <div className="w-full max-w-xs">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label className={labelClass}>Street</label>
              <input
                name="street"
                value={formData.street}
                onChange={handleChange}
                className={inputClass}
                type="text"
                placeholder="Street"
              />
            </div>
            <div className="mb-4">
              <label className={labelClass}>City</label>
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={inputClass}
                type="text"
                placeholder="City"
              />
            </div>
            <div className="mb-4">
              <label className={labelClass}>State/Province</label>
              <input
                className={inputClass}
                type="text"
                placeholder="State/Province"
              />
            </div>
            <div className="mb-4">
              <label className={labelClass}>Zip Code</label>
              <input
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className={inputClass}
                type="text"
                placeholder="Zip Code"
              />
            </div>
            <div className="mb-4">
              <label className={labelClass}>Country</label>
              <input
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={inputClass}
                type="text"
                placeholder="Country"
              />
            </div>
            <span className="text-red-500 font-bold">{errorMessage}</span>
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
          {submitted && (
            <div className="text-xl">
              <h2 className="font-bold">Address Data Result</h2>
              <p className="">Street: {formData.street}</p>
              <p className="">City: {formData.city}</p>
              <p className="">Zip Code: {formData.zipCode}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
