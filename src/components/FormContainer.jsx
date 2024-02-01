import { useState } from "react";
import { BUTTON_CSS } from "../utils/constant";
import PersonalDetailsForm from "./PersonalDetailsForm";
import PaymentDetailForm from "./PaymentDetailForm";
import AddressForm from "./AddressForm";

const FormContainer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [savedData, setSavedData] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    street: "",
    city: "",
    country: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
  });

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleSubmit = () => {
    setSavedData(formData);
    setFormData((prevFormData) => ({
      ...prevFormData,
      fullName: "",
      email: "",
      number: "",
      street: "",
      city: "",
      country: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      billingAddress: "",
    }));
  };

  return (
    <div className="c0ontainer mx-auto text-center">
      <h1 className="text-3xl font-bold text-center mb-4">Form Validation</h1>
      <div className="flex flex-col py-2">
        {currentStep === 1 && (
          <PersonalDetailsForm formData={formData} setFormData={setFormData} />
        )}
        {currentStep === 2 && (
          <AddressForm formData={formData} setFormData={setFormData} />
        )}
        {currentStep === 3 && (
          <PaymentDetailForm formData={formData} setFormData={setFormData} />
        )}

        <div className="justify-between flex w-full max-w-xs mx-auto">
          {currentStep > 1 && (
            <button className={`mb-4 ${BUTTON_CSS}`} onClick={prevStep}>
              Previous
            </button>
          )}
          <div className="flex-grow"></div>
          {currentStep < 3 && (
            <button className={`mb-4 ${BUTTON_CSS}`} onClick={nextStep}>
              Next
            </button>
          )}
          {currentStep === 3 && (
            <button className={`mb-4 ${BUTTON_CSS}`} onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mt-2">Form Result</h2>
          {savedData && (
            <div className="flex flex-col w-3/4 sm:w-1/4 mt-4 text-left mx-auto font-bold">
              <h2>
                Full Name:{" "}
                <span className="font-regular text-red-500">
                  {savedData.fullName}
                </span>
              </h2>
              <h2>
                Email:{" "}
                <span className="font-regular text-red-500">
                  {savedData.email}
                </span>
              </h2>
              <h2>
                Number:{" "}
                <span className="font-regular text-red-500">
                  {savedData.number}
                </span>
              </h2>
              <h2>
                Country:{" "}
                <span className="font-regular text-red-500">
                  {savedData.country}
                </span>
              </h2>
              <h2>
                Card Number:{" "}
                <span className="font-regular text-red-500">
                  {savedData.cardNumber}
                </span>
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
