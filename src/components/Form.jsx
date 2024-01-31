import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";

const Form = () => {
  const [inputInfo, setInputInfo] = useState({
    fullName: "",
    email: "",
    address: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const address = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleSubmit = () => {
    const message = checkValidData(email.current.value, name.current.value);
    setErrorMessage(message);

    if (!message) {
      const newInputInfo = {
        fullName: name.current.value,
        email: email.current.value,
        address: address.current.value,
      };

      setInputInfo(newInputInfo);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-4">Form Validation</h1>
      <div className="container mx-auto py-4 flex justify-center">
        <div className="w-full max-w-xs">
          <form
            onSubmit={handleFormSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                ref={name}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                ref={email}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Address
              </label>
              <input
                ref={address}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Address"
              />
              <span className="text-red-600 font-semibold">{errorMessage}</span>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
          <div className="mt-4 text-xl">
            <h2 className="font-bold ">Form Values:</h2>
            <p>Full Name: {inputInfo.fullName}</p>
            <p>Email: {inputInfo.email}</p>
            <p>Address: {inputInfo.address}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
