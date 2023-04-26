import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="max-w-[1100px] mx-auto border-t border-gray-300 mt-4 p-2">
      <div className="mt-4 flex justify-between">
        <div className="flex flex-col gap-4 w-[340px]">
          <h1 className="text-[#64ab03] text-4xl font-bold">Pluslib</h1>
          <p>
            <span className="font-bold mr-1">Address:</span> Example Street 98,
            AlMonastir, Tunisia
          </p>
          <p>
            <span className="font-bold mr-1">Phone:</span> + 216 52544318
          </p>
          <p>
            <span className="font-bold mr-1">Email:</span>{" "}
            yassin.bagane2@gmail.com
          </p>
        </div>
        <div>
          <h1 className="text-gray-800 font-semibold">INFORMATION</h1>
          <ul className="flex flex-col gap-4 mt-4">
            <li>
              <Link className="hover:text-[#64ab03] duration-150" to={"#"}>
                Price drop
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#64ab03] duration-150" to={"#"}>
                New products
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#64ab03] duration-150" to={"#"}>
                Best sales
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#64ab03] duration-150" to={"#"}>
                Contact US
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-gray-800 font-semibold">EXTRAS</h1>
          <ul className="flex flex-col gap-4 mt-4">
            <li>
              <Link className="hover:text-[#64ab03] duration-150" to={"#"}>
                Delivery
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#64ab03] duration-150" to={"#"}>
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#64ab03] duration-150" to={"#"}>
                Stores
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#64ab03] duration-150" to={"#"}>
                Contact US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
