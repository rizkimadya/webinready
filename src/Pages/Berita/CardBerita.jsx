import React from "react";
import Image from "../../Assets/cardkegiatan.png";

const CardBerita = () => {
	return (
		<>
			<div className="border border-gray-500 rounded-xl overflow-hidden">
				<img src={Image} alt="" />
				<div className="px-4 pt-4 pb-10">
					<p className="text-left text-xs text-gray-500">28 Nov 2021</p>
					<p className="text-left font-semibold my-3 text-base text-gray-700">
						Pengumuman Calon Angkatan Muda yang berhasil lolos ke Tahap Selanjutnya
					</p>
					<p className="text-left font-normal text-sm text-gray-500">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac etiam odio pellentesque... 
					</p>
				</div>
			</div>
		</>
	);
};

export default CardBerita;
