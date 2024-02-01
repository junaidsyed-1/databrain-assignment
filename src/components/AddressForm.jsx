/* eslint-disable react/prop-types */
import { inputClass, labelClass } from "../utils/constant";

const AddressForm = ({ formData, setFormData }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-2">Address Details</h1>

      <div className="container mx-auto py-4 flex justify-center">
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className={"flex flex-col" + labelClass}>Street</label>
              <input
                name="street"
                value={formData.street || ""}
                onChange={(e) =>
                  setFormData({ ...formData, street: e.target.value })
                }
                className={inputClass}
                type="text"
                placeholder="Street"
              />
            </div>
            <div className="mb-4">
              <label className={"flex flex-col" + labelClass}>City</label>
              <input
                name="city"
                value={formData.city || ""}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className={inputClass}
                type="text"
                placeholder="City"
              />
            </div>
            <div className="mb-4">
              <label className={"flex flex-col" + labelClass}>Country</label>
              <input
                name="country"
                value={formData.country || ""}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                className={"flex flex-col" + inputClass}
                type="text"
                placeholder="Country"
              />
            </div>
            {/* <span className="text-red-500 font-bold">{errorMessage}</span> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
