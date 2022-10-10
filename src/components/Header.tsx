import { useSession } from 'next-auth/react';
import Image from 'next/image';
import ThemeSwap from './ThemeSwap';
import { FaRunning, FaCog } from 'react-icons/fa';
import { signOut } from 'next-auth/react';

const Header: React.FC = () => {
	const { data: session } = useSession();

	return (
		<div className="navbar bg-primary">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a>Homepage</a>
						</li>
						<li>
							<a>Portfolio</a>
						</li>
						<li>
							<a>About</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="navbar-center">
				<a className="btn btn-ghost normal-case text-xl">Products Page</a>
			</div>
			<div className="navbar-end flex gap-3">
				{/* <button className="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button> */}
				<ThemeSwap />
				{/* <button className="btn btn-ghost btn-circle">
					<div className="indicator">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
							/>
						</svg>
						<span className="badge badge-xs badge-secondary indicator-item"></span>
					</div>
				</button> */}
				<div className="dropdown dropdown-end">
					<button tabIndex={3} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 mask mask-hexagon">
							{session?.user?.image && (
								<Image src={session?.user?.image} alt="Avatar" layout="fill" />
							)}
						</div>
					</button>
					<ul
						tabIndex={3}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box"
					>
						<li>
							<a>
								Settings <FaCog />
							</a>
						</li>
						<li onClick={() => signOut({ callbackUrl: '/' })}>
							<a>
								Log out
								<FaRunning />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
