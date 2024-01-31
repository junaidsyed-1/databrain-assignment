import { useState } from "react";
import { Link } from "react-router-dom";
import { BUTTON_CSS, inputClass, labelClass } from "../utils/constant";
import { checkValidPayment } from "../utils/validate";

const PaymentDetailForm = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
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
    const { cardNumber, expiryDate, cvv } = formData;
    const message = checkValidPayment(cardNumber, expiryDate, cvv);
    if (message) {
      setErrorMessage(message);
    } else {
      setErrorMessage("");
      setSubmitted(true);
    }
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-2">Payment Details</h1>

      <div className="container mx-auto py-4 flex justify-center">
        <div className="w-full max-w-xs">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label className={labelClass}>Card Number</label>
              <input
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className={inputClass}
                type="number"
                placeholder="Card Number"
              />
            </div>
            <div className="mb-4">
              <label className={labelClass}>Expiry Date</label>
              <input
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className={inputClass}
                type="text"
                placeholder="MM/YY"
              />
            </div>
            <div className="mb-4">
              <label className={labelClass}>CVV</label>
              <input
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className={inputClass}
                type="number"
                placeholder="CVV"
              />
            </div>
            <div className="mb-4">
              <label className={labelClass}>Billing Address</label>
              <input
                className={inputClass}
                type="text"
                placeholder="Billing Address"
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
              <h2 className="font-bold">Payment Data Result</h2>
              <p className="">Card Number: {formData.cardNumber}</p>
              <p className="">Expiry Date: {formData.expiryDate}</p>
              <p className="">CVV: {formData.cvv}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailForm;
