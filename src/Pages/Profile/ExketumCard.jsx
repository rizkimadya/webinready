import React from "react";
import Image from "../../Assets/cardkegiatan.png";

const ExketumCard = () => {
	return (
		<>
			<div className="rounded-xl overflow-hidden">
				<img src={Image} alt="" />
				<div className="bg-black text-white">
					<p className="py-3 text-xl">Mr.Been </p>
				</div>
				<div className="bg-yellow-400 dark">
					<p className="py-3 text-xl">Ketua Umum Ang. 1</p>
				</div>
			</div>
		</>
	);
};

export default ExketumCard;
