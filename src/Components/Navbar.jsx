import React from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../Assets/logo.png";

export default function Navbar({ fixed }) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<div className="fixed w-full z-50">
				<nav className="relative flex flex-wrap items-center justify-between py-2 bg-gray-900 md:px-20 px-4">
					<div className="container mx-auto flex flex-wrap items-center justify-between">
						<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
							<a
								className="text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
								href="#pablo"
							>
								<img src={Logo} alt="" className="[width:66px;]" />
							</a>
							<button
								className="text-white bg-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
								type="button"
								onClick={() => setNavbarOpen(!navbarOpen)}
							>
								<FaBars />
							</button>
						</div>
						<div
							className={
								"lg:flex flex-grow items-center" +
								(navbarOpen ? " flex" : " hidden")
							}
							id="example-navbar-danger"
						>
							<ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:gap-9">
								<li className="nav-item">
									<a
										className="py-2 flex items-center text-base text-white hover:text-yellow-400 font-normal"
										href="#pablo"
									>
										Beranda
									</a>
								</li>
								<li className="nav-item">
									<a
										className="py-2 flex items-center text-base text-white hover:text-yellow-400 font-normal"
										href="#pablo"
									>
										Profil
									</a>
								</li>
								<li className="nav-item">
									<a
										className="py-2 flex items-center text-base text-white hover:text-yellow-400 font-normal"
										href="#pablo"
									>
										Kegiatan
									</a>
								</li>
								<li className="nav-item">
									<a
										className="py-2 flex items-center text-base text-white hover:text-yellow-400 font-normal"
										href="#pablo"
									>
										Karya
									</a>
								</li>
								<li className="nav-item">
									<a
										className="py-2 flex items-center text-base text-white hover:text-yellow-400 font-normal"
										href="#pablo"
									>
										Angkatan
									</a>
								</li>
								<li className="nav-item">
									<a
										className="py-2 flex items-center text-base text-white hover:text-yellow-400 font-normal"
										href="#pablo"
									>
										Tentang Kami
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
}
