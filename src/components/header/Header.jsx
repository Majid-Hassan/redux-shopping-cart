import { useState } from "react";
import { Link } from "react-router-dom"
import { FiMenu, FiX } from "react-icons/fi";


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div>
            <header className={`fixed w-full py-2 bg-red-950 z-50 duration-300 text-gray-200`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <Link to='/'>
                                <h1 className={`font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide`}>
                                    REACT REDUX SHOPPING CART
                                </h1>
                            </Link>
                        </div>

                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link to={'/'} className="px-3 py-1 text-lg font-medium p-2 rounded-lg hover:bg-gray-200 hover:text-red-900 hover:underline transition-colors duration-400">
                                    Home
                                </Link>
                                <Link to={'/'} className="px-3 py-1 text-lg font-medium p-2 rounded-lg hover:bg-gray-200 hover:text-red-900 hover:underline transition-colors duration-400">
                                    Services
                                </Link>
                                <Link to={'/cart'}
                                    className="px-3 py-1 text-lg font-medium p-2 rounded-lg hover:bg-gray-200 hover:text-red-900 hover:underline transition-colors duration-400">
                                    Cart
                                </Link>
                            </div>
                        </div>
                        <div className="-mr-2 flex sm:hidden md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md bg-red-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none"
                            >
                                {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 h-screen" : "opacity-0 h-0 invisible"}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
                       <Link
                            to={'/'}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            to={'/'}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                        >
                            Services
                        </Link>
                        <Link
                            to={'/cart'}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                        >
                            Cart
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
