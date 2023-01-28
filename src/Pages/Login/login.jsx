import React from "react";

const login = () => {
	return (
		<>
			<div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-gray-900 md:px-0 px-4">
				<div className="w-full py-10 px-20 m-auto bg-gray-700 rounded-md shadow-md lg:max-w-xl">
					<h1 className="text-2xl font-bold text-center text-yellow-400">
						Masuk
					</h1>
					<form className="mt-10">
						<div className="mb-6">
							<input
								type="email"
								className="block w-full px-4 py-2 mt-2 border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring "
								placeholder="E-mail"
							/>
						</div>
						<div className="mb-4">
							<input
								type="password"
								className="block w-full px-4 py-2 mt-2 border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring "
								placeholder="Password"
							/>
						</div>
						<a href="#" className="text-sm text-yellow-400 hover:underline">
							Lupa Password?
						</a>
						<div className="mt-6">
							<button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transfo rounded-md bg-yellow-400 hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">
								Login
							</button>
						</div>
					</form>

					<p className="mt-8 text-sm font-light text-center text-white">
						Belum Punya akun?
						<a
							href="#"
							className="font-medium text-yellow-400 hover:underline ml-1"
						>
							Daftar Sekarang
						</a>
					</p>
				</div>
			</div>
		</>
	);
};

export default login;
