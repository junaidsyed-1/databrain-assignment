/* eslint-disable react/prop-types */
import { USER_PROFILE_IMG } from "../utils/constant";

const Card = ({ info }) => {
  const { address, name, phone, email } = info;

  return (
    <div className="flex py-3 mx-auto">
      <div className="w-72 shadow-sm hover:shadow-lg">
        <div className="flex bg-blue-800 text-white items-center rounded-sm py-1 px-2">
          <img className="w-12" src={USER_PROFILE_IMG} alt="Profile" />
          <h2 className="font-bold mx-2">
            UserName: <span className="font-normal">{name}</span>
          </h2>
        </div>
        <div className="font-bold p-2">
          <p>
            Address :{" "}
            <span className="font-normal">
              {" "}
              {address.city}, {address.street}
            </span>
          </p>
          <p>
            Email: <span className="font-normal">{email}</span>{" "}
          </p>
          <p>
            Phone Number : <span className="font-normal">{phone}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
