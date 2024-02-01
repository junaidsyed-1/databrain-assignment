/* eslint-disable react/prop-types */
import { inputClass, labelClass } from "../utils/constant";

const PaymentDetailForm = ({ formData, setFormData }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-2">Payment Details</h1>

      <div className="container mx-auto py-4 flex justify-center">
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className={"flex flex-col" + labelClass}>
                Card Number
              </label>
              <input
                required
                name="cardNumber"
                value={formData.cardNumber || ""}
                onChange={(e) =>
                  setFormData({ ...formData, cardNumber: e.target.value })
                }
                className={inputClass}
                type="number"
                placeholder="Card Number"
              />
            </div>
            <div className="mb-4">
              <label className={"flex flex-col" + labelClass}>
                Expiry Date
              </label>
              <input
                name="expiryDate"
                value={formData.expiryDate || ""}
                onChange={(e) =>
                  setFormData({ ...formData, expiryDate: e.target.value })
                }
                className={inputClass}
                type="text"
                placeholder="MM/YY"
              />
            </div>
            <div className="mb-4">
              <label className={"flex flex-col" + labelClass}>CVV</label>
              <input
                name="cvv"
                value={formData.cvv || ""}
                onChange={(e) =>
                  setFormData({ ...formData, cvv: e.target.value })
                }
                className={inputClass}
                type="number"
                placeholder="CVV"
              />
            </div>
            <div className="mb-4">
              <label className={"flex flex-col" + labelClass}>
                Billing Address
              </label>
              <input
                value={formData.billingAddress || ""}
                onChange={(e) =>
                  setFormData({ ...formData, billingAddress: e.target.value })
                }
                className={inputClass}
                type="text"
                placeholder="Billing Address"
              />
            </div>

            {/* <span className="text-red-500 font-bold">{errorMessage}</span> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailForm;
