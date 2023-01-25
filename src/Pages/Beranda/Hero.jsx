import React from "react";
import Imghero from "../../Assets/imghero.png";

const Hero = () => {
	return (
		<>
			<div className="bg-gray-900 [margin-bottom:80px;] md:pb-28 md:pt-40 md:px-20 py-24 px-4">
				<div className="container mx-auto">
					<p className="text-6xl leading-normal font-semibold text-left text-white">
						Dengan Hitam Emas
					</p>
					<div className="grid md:grid-cols-2 text-left text-white">
						<div>
							<p className="text-6xl leading-normal font-semibold mb-10 text-yellow-400">
								Kita Berkarya
							</p>
							<p className="mb-8 md:pr-24">
								Inready Workgroup adalah Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Pharetra egestas sit feugiat at euismod tellus
								scelerisque enim lorem. Morbi faucibus ipsum, ut cursus viverra
								egestas.
							</p>
							<button className="bg-yellow-400 rounded-3xl py-3 px-6 font-medium text-gray-800">
								Lihat Kegiatan Kami
							</button>
						</div>
						<div>
							<img src={Imghero} alt="" className="[width:549px;]" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
