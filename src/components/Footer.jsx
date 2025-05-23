import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="bg-white border-t-2 border-gray-200 shadow-sm dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <Link to="/" className="hover:underline">Films list™</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="https://github.com/pawel2557" target="_blank" className="hover:underline me-4 md:me-6">Github</a>
                    </li>
                    <li>
                        <a href="#" target="_blank" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" target="_blank" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" target="_blank" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}
