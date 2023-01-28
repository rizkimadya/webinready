import React from "react";
import ImgStruktur from "../../Assets/struktur.jpg";
import ExketumCard from "../Profile/ExketumCard";

const Struktur = () => {
	return (
		<>
			<div className="grid px-4 py-24 md:px-20">
				<div className="container mx-auto">
					<div className="my-12">
						<p className="mb-2 text-5xl font-semibold text-left">
							Struktur Organisasi
						</p>
						<div className="w-24 h-1 bg-black"></div>
					</div>
					<div className="grid">
						<img src={ImgStruktur} alt="" />
					</div>
					<p className="mt-20 mb-10 text-3xl font-semibold text-left">
						Pembina Inready Workgroup
					</p>
					<div className="grid grid-cols-2 gap-10">
						<ExketumCard />
						<ExketumCard />
					</div>

					<p className="mt-20 mb-10 text-3xl font-semibold text-left">
						Badan Pengurus Organisasi
					</p>
					<div className="grid grid-cols-2 gap-10 md:grid-cols-3">
						<ExketumCard />
						<ExketumCard />
						<ExketumCard />
					</div>

					<p className="mt-20 mb-10 text-3xl font-semibold text-left">
						Pengurus Inready Workgroup Periode 2022 - 2023
					</p>
					<div className="grid grid-cols-2 gap-10 md:grid-cols-3">
						<ExketumCard />
						<ExketumCard />
						<ExketumCard />
					</div>
				</div>
			</div>
		</>
	);
};

export default Struktur;
