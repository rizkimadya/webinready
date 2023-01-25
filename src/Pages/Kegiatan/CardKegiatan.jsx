import React from "react";
import Image from "../../Assets/cardkegiatan.png";

const CardKegiatan = () => {
	return (
		<>
			<div className="border border-gray-500 rounded-xl overflow-hidden">
				<img src={Image} alt="" />
				<div className="px-4 pt-4 pb-10">
					<div className="flex">
						<p>28-30 Oktober 2022</p>
						<p className="ml-auto">Div. Keorganisasian</p>
					</div>
					<p className="text-left font-semibold my-3 text-base">
						Outdoor Inready Workgroup
					</p>
					<p className="text-left font-normal text-sm text-gray-500">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac etiam
						odio pellentesque interdum vehicula vel velit donec tincidunt. Quis
						tortor id augue aliquet id.....
					</p>
				</div>
			</div>
		</>
	);
};

export default CardKegiatan;
