/* eslint-disable react/prop-types */
import { inputClass, labelClass } from "../utils/constant";

const PersonalDetailsForm = ({ formData, setFormData }) => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center mb-2">Personal Details</h1>
      <div className="container mx-auto py-4 flex justify-center">
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className={"flex flex-col" + labelClass}>
                Full Name <pre className="text-red-400">*</pre>
              </label>
              <input
                name="fullName"
                value={formData.fullName || ""}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className={inputClass}
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-4">
              <label className={"flex flex-col" + labelClass}>
                Email <pre className="text-red-400">*</pre>
              </label>
              <input
                name="email"
                value={formData.email || ""}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={inputClass}
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className={"flex flex-col" + labelClass}>
                Phone Number <pre className="text-red-400">*</pre>
              </label>
              <input
                name="number"
                value={formData.number || ""}
                onChange={(e) =>
                  setFormData({ ...formData, number: e.target.value })
                }
                className={inputClass}
                type="tel"
                placeholder="Phone Number"
              />
              {/* <span className="text-red-500 font-bold">{errorMessage}</span> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
