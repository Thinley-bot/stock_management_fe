import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight, faHome,faSackDollar, faAdd, faMinus, faChevronLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo.png'

export const Sidebar = ({ showSidebar }) => {
    const location = useLocation();
    const [isProductSubMenuOpen, setIsProductSubMenuOpen] = useState(false);
    const [isStockSubMenuOpen, setIsStockSubMenuOpen] = useState(false);

    const toggleProductSubMenu = () => {
        setIsProductSubMenuOpen(!isProductSubMenuOpen);
        setIsStockSubMenuOpen(false);
    };

    const toggleStockSubMenu = () => {
        setIsStockSubMenuOpen(!isStockSubMenuOpen);
        setIsProductSubMenuOpen(false);
    };

    return (
        <div className="bg-gradient-to-br from-gray-950 to-blue-950 w-80 h-screen overflow-y-scroll lg:flex flex-col p-2 pb-10">
            <div>
                <div className="flex items-center justify-start p-4 gap-3 mb-8">
                    <div className='rounded-md  text-center flex flex-row justify-center items-center h-20 w-20'>
                        <img
                            src={logo}
                            alt="Logo"
                            className='rounded-md'
                        />
                    </div>
                    <span className="text-base font-medium text-white" >ATHANG GADGETS</span>
                    <span onClick={showSidebar} className='px-2 py-1 rounded-sm bg-gray-500 text-white'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </span>
                </div>
            </div>

            <div>
                <h1 className='text-gray-500 px-4 py-2'>MENU</h1>
                <ul className="space-y-2 text-gray-200 flex flex-col gap-8">
                    <li className={`${location.pathname === "/" ? 'active' : ''}`}>
                        <Link to="/dashboard" className='flex items-center space-x-3'>
                            <div className='bg-gray-500 rounded-md px-2 py-2 text-center flex flex-row justify-center items-center'>
                                <FontAwesomeIcon icon={faHome} />
                            </div>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className={`${location.pathname === "/users" ? 'active' : ''}`}>
                        <Link to="/users" className='flex items-center space-x-3'>
                            <div className='bg-gray-500 rounded-md px-2 py-2 text-center flex flex-row justify-center items-center'>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <span>Users</span>
                        </Link>
                    </li>
                    <li className={`${(location.pathname === "/products" ) ? 'active' : ''}`} onClick={toggleProductSubMenu}>
                        <div className="flex items-center justify-between">
                            <div className='flex items-center space-x-3'>
                                <div className='bg-gray-500 rounded-md p-2 text-center flex flex-row justify-center items-center'>
                                    <FontAwesomeIcon icon={faSackDollar} />
                                </div>
                                <span>Products</span>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className={`ml-auto ${isProductSubMenuOpen ? 'transform rotate-90' : ''} transition-transform duration-300`} />
                        </div>
                        {isProductSubMenuOpen && (
                            <ul className="pl-6 text-gray-400 py-1">
                                <Link to="/products" >
                                    <li className={`${location.pathname === "/products" ? 'p-2 bg-slate-400 text-gray-800 rounded-md mt-1' : 'p-2 hover:bg-slate-400 hover:text-gray-800 rounded-md mt-1'}`}>
                                        View Products
                                    </li>
                                </Link>
                        
                            </ul>
                        )}
                    </li>
                    <li className={`${(location.pathname === "/stock" || location.pathname === "/stock-category") ? 'active' : ''}`} onClick={toggleStockSubMenu}>
                        <div className="flex items-center justify-between">
                            <div className='flex items-center space-x-3'>
                                <div className='bg-gray-500 rounded-md p-2 text-center flex flex-row justify-center items-center'>
                                    <FontAwesomeIcon icon={faSackDollar} />
                                </div>
                                <span>Stock</span>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className={`ml-auto ${isStockSubMenuOpen ? 'transform rotate-90' : ''} transition-transform duration-300`} />
                        </div>
                        {isStockSubMenuOpen && (
                            <ul className="pl-6 text-gray-400 py-1">
                                <Link to="/stocks" >
                                    <li className={`${location.pathname === "/stocks" ? 'p-2 bg-slate-400 text-gray-800 rounded-md mt-1' : 'p-2 hover:bg-slate-400 hover:text-gray-800 rounded-md mt-1'}`}>
                                        View Stock
                                    </li>
                                </Link>
                            </ul>
                        )}
                    </li>
                    <li className={`${location.pathname === "/stock-issue" ? 'active' : ''}`}>
                        <Link to="/stockissue" className="flex items-center space-x-2">
                            <div className='bg-gray-500 rounded-md p-2 text-center flex flex-row justify-center items-center'>
                                <FontAwesomeIcon icon={faMinus} />
                            </div>
                            <span>Stock Issue</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;

