import { Link } from "react-router-dom";
import Button from "../Button";
import { BsHeadphones } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="max-w-[1100px] mx-auto">
      <header className="py-3 flex justify-between">
        <div>
          <Link to={"/"}>
            <h1 className="text-[#64ab03] text-3xl font-bold">Pluslib</h1>
          </Link>
        </div>
        <div className="flex items-center">
          <input
            name="search"
            id="search"
            autoComplete="off"
            className="border bg-gray-100 rounded-md px-3 py-2 w-80 h-10 outline-none"
            placeholder="Search in the entire store.."
          />
          <Button>Search</Button>
        </div>
        <div>
          <div>
            <Link
              className="font-semibold text-gray-800 duration-200 hover:text-[#62ab00]"
              to={"/login"}
            >
              Login
            </Link>
          </div>
          <div>
            or{" "}
            <Link
              className="duration-200 text-gray-800 hover:text-[#62ab00]"
              to={"/register"}
            >
              Register
            </Link>
          </div>
        </div>
      </header>
      <nav className="flex items-center gap-80 justify-end">
        <div className="flex items-center gap-3">
          <BsHeadphones className="text-3xl text-[#62ab00]" />
          <div>
            <div>Free support 24/7</div>
            <div className="font-bold">+216 52544318</div>
          </div>
        </div>
        <div className="justify-end mr-80 flex gap-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Store</Link>
          <Link to={"/"}>Contact US</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
