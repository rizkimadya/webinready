import React from "react";
import CardKegiatan from "./CardKegiatan";

const Kegiatan = () => {
	return (
		<>
			<div className="grid md:px-20 px-4 py-24">
				<div className="container mx-auto">
					<div className="my-12">
						<p className="text-left text-4xl font-medium mb-2">Kegiatan</p>
						<div className="w-20 h-1 bg-black"></div>
					</div>
					<div className="grid md:grid-cols-3 gap-10">
						<CardKegiatan />
						<CardKegiatan />
						<CardKegiatan />
					</div>
				</div>
			</div>
		</>
	);
};

export default Kegiatan;
