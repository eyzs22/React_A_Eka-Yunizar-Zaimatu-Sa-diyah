import { useId } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { useUser  } from '../../context/UserContext';

export default function Navbar({ onSearchChange }) {
  const inputId = useId();
  const { isLoggedIn, login, logout } = useUser ();

  const handleSearchInput = (e) => {
    onSearchChange(e.target.value); // Panggil fungsi pencarian
  };

  return (
    <nav className="grid grid-cols-3 justify-between px-24 py-4 bg-[#001f3f] items-center">
=======
import { useUser } from '../../context/UserContext';

export default function Navbar({ onSearchChange }) {
  const inputId = useId();
  const { isLoggedIn, login, logout } = useUser();

  const handleSearchInput = (e) => {
    onSearchChange(e.target.value);
  };
  return (
    <nav className="grid grid-cols-3 justify-between px-24 py-4 bg-[#c02020] items-center">
>>>>>>> fcd2578 (first commit)
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
<<<<<<< HEAD
            onChange={handleSearchInput} // Hubungkan input dengan fungsi pencarian
=======
            onChange={handleSearchInput}
>>>>>>> fcd2578 (first commit)
          />
        </li>
      </ul>
      {!isLoggedIn ? (
        <ul className="flex gap-2 justify-end">
          <li className="text-[#F2F4FF] hover:text-[#fffc00] active:text-[#1d2342]">
<<<<<<< HEAD
            <button onClick ={login}>Login</button>
          </li>
        </ul>
      ) : (
        <ul className="flex gap-2 justify-end">
          <li className="text-[#F2F4FF] hover:text-[#fffc00] active:text-[#1d2342]">
            <button onClick={logout}>Logout</button>
=======
            {/* <Link to="">Sign in</Link> */}
            <button onClick={login}>Sign in</button>
          </li>
          <li>
            <Link
              className="text-[#F2F4FF] hover:text-[#fffc00] active:text-[#1d2342]"
              to="/singup"
            >
              Sign up
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="flex justify-end gap-2">
          <li>
            <Link
              className="text-[#F2F4FF] hover:text-[#565f93] active:text-[#1d2342]"
              to="/cart"
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className="text-[#F2F4FF] hover:text-[#565f93] active:text-[#1d2342]"
            >
              My Orders
            </Link>
          </li>
          <li>
            <button
              onClick={logout}
              className="text-[#F2F4FF] hover:text-[#565f93] active:text-[#1d2342]"
            >
              Sign out
            </button>
>>>>>>> fcd2578 (first commit)
          </li>
        </ul>
      )}
    </nav>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> fcd2578 (first commit)
