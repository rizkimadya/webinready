import React from "react";
import Hero from "./Hero";
import FokusKami from "./FokusKami";
import BeritaTerkini from "./BeritaTerkini";
import Kegiatan from "./Kegiatan";

const Beranda = () => {
	return (
		<>
			<Hero />
			<FokusKami />
			<BeritaTerkini />
			<Kegiatan />
		</>
	);
};

export default Beranda;
