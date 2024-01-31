import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="px-4 py-4 flex justify-between items-center bg-blue-950 text-white shadow-md">
        <div className="flex items-center">
          <h1 className="text-2xl">NavBar</h1>
        </div>

        <div className="flex">
          <ul className="flex mx-2 className='mx-2'">
            <Link to="/">
              {" "}
              <li className="mx-2">Home</li>
            </Link>
            <Link to="form">
              <li className="mx-2">Form</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
