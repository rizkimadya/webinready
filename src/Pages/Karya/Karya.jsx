import React from "react";
import ImgKarya from "../../Assets/karya.jpg";

const Karya = () => {
	return (
		<>
			<div className="bg-gray-900">
				<div className="grid px-4 py-24 md:px-20">
					<div className="container mx-auto">
						<div className="my-12">
							<p className="mb-2 text-5xl font-semibold text-left text-white">
								Karya
							</p>
							<div className="w-24 h-1 bg-white"></div>
						</div>
						<div className="text-center md:mt-20">
							<p className="mb-6 text-3xl text-yellow-400">
								Karya Terbaik Periode 2022-2023
							</p>
						</div>
					</div>
				</div>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#111827"
					fill-opacity="1"
					d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,197.3C672,171,768,149,864,128C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
				></path>
			</svg>
			<div className="grid px-4 mb-20 -mt-48 md:px-20">
				<div className="container mx-auto">
					<div className="grid mb-20 md:grid-cols-2">
						<div>
							<img src={ImgKarya} alt="" className="w-full rounded-lg" />
						</div>
						<div className="self-center text-right">
							<p className="text-4xl font-semibold">Mobile Android</p>
							<div className="mt-10 text-xl">
								<p className="mb-4 font-medium">Judul Karya</p>
								<p className="mb-4">Nama :</p>
								<p className="mb-4">Keterangan :</p>
								<p className="mb-4">Link Github :</p>
							</div>
						</div>
					</div>

					<div className="grid mb-20 md:grid-cols-2">
						<div className="self-center text-left">
							<p className="text-4xl font-semibold">Website</p>
							<div className="mt-10 text-xl">
								<p className="mb-4 font-medium">Judul Karya</p>
								<p className="mb-4">Nama :</p>
								<p className="mb-4">Keterangan :</p>
								<p className="mb-4">Link Github :</p>
							</div>
						</div>
						<div>
							<img src={ImgKarya} alt="" className="w-full rounded-lg" />
						</div>
					</div>

					<div className="grid mb-20 md:grid-cols-2">
						<div>
							<img src={ImgKarya} alt="" className="w-full rounded-lg" />
						</div>
						<div className="self-center text-right">
							<p className="text-4xl font-semibold">Desain</p>
							<div className="mt-10 text-xl">
								<p className="mb-4 font-medium">Judul Karya</p>
								<p className="mb-4">Nama :</p>
								<p className="mb-4">Keterangan :</p>
								<p className="mb-4">Link Github :</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Karya;
