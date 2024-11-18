import { useId } from 'react';
import { Link } from 'react-router-dom';
import { useUser  } from '../../context/UserContext';

export default function Navbar({ onSearchChange }) {
  const inputId = useId();
  const { isLoggedIn, login, logout } = useUser ();

  const handleSearchInput = (e) => {
    onSearchChange(e.target.value); // Panggil fungsi pencarian
  };

  return (
    <nav className="grid grid-cols-3 justify-between px-24 py-4 bg-[#001f3f] items-center">
      <ul>
        <li className="flex items-center justify-center">
          <Link
            to="/"
            className="text-[#F2F4FF] hover:text-[#fffc00] active:text-[#1d2342]"
          >
            Home
          </Link>
        </li>
      </ul>
      <ul className="flex justify-center items-center">
        <li className="w-full">
          <input
            type="text"
            className="text-black active:text-black focus:text-black px-4 py-2 w-full"
            name="search"
            id={inputId}
            placeholder="Search product..."
            onChange={handleSearchInput} // Hubungkan input dengan fungsi pencarian
          />
        </li>
      </ul>
      {!isLoggedIn ? (
        <ul className="flex gap-2 justify-end">
          <li className="text-[#F2F4FF] hover:text-[#fffc00] active:text-[#1d2342]">
            <button onClick ={login}>Login</button>
          </li>
        </ul>
      ) : (
        <ul className="flex gap-2 justify-end">
          <li className="text-[#F2F4FF] hover:text-[#fffc00] active:text-[#1d2342]">
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      )}
    </nav>
  );
}
