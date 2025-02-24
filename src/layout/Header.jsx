import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="text-white flex justify-between items-center p-4 fixed top-0 left-0 w-full bg-gray-950 shadow-md z-50">
            {/* Logo */}
            <div>Stock Market</div>

            {/* Navigation Menu */}
            <div>
                <ul className="flex gap-10">
                    {[
                        { name: "OverView", path: "/" },
                        { name: "Portfolio", path: "/portfolio" },
                        { name: "Market", path: "/market" },
                        { name: "Transaction", path: "/transaction" },
                        { name: "News", path: "/news" },
                        { name: "Community", path: "/community" },
                    ].map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-2xl ${
                                        isActive ? "active bg-blue-600" : "hover:bg-gray-800"
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Login Section */}
            <div className="flex gap-4">
                <div><a href="">Sign in</a></div>
                <div><a href="">Sign up</a></div>
            </div>
        </div>
    );
};

export default Header;
