import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/logo-text.png";
import { useState } from "react";

const Nav = () => {
  const menuItems = [
    { id: 1, label: "Home" },
    { id: 2, label: "Technologies" },
    { id: 3, label: "Projects" },
    { id: 4, label: "About" },
    { id: 5, label: "Contact" },
  ];
  const [selectedMenu, setSelectedMenu] = useState(1);

  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <GiHamburgerMenu />
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {
                menuItems.map((item) => (
                  <li key={item.id} className={selectedMenu === item.id ? "text-devstack-primary" : ""} onClick={() => setSelectedMenu(item.id)}>
                    <a href="#">{item.label}</a>
                  </li>
                ))
              }
            </ul>
          </div>
          <img className="hidden lg:flex" src={Logo} alt="logo" />
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        </div>
        <div className="navbar-center w-20 lg:w-full lg:hidden">
          <img src={Logo} alt="logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              menuItems.map((item) => (
                <li key={item.id} className={selectedMenu === item.id ? "text-devstack-primary" : ""} onClick={() => setSelectedMenu(item.id)}>
                  <a href="#">{item.label}</a>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-sm btn-ghost">Sign In</a>
          <a className="btn btn-sm bg-devstack-primary text-white hover:bg-devstack-primary/80 rounded-3xl">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;