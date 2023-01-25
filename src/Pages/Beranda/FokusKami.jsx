import React from "react";
import design from '../../Assets/design.png'
import mobile from '../../Assets/mobile.png'
import web from '../../Assets/web.png'

const FokusKami = () => {
	return (
		<>
			<div className="grid md:px-20 px-4 [margin-bottom:80px;]">
				<div className="container mx-auto">
					<p className="text-left text-4xl font-semibold">Fokus Kami</p>
					<div className="w-20 h-1 bg-black"></div>
				</div>

				<div className="grid md:grid-cols-3 mt-14 gap-32">
					<div className="bg-black rounded-2xl px-8 py-10 text-left drop-shadow-xl">
						<img src={web} alt="" className="w-40 mb-12 ml-auto"/>
						<p className="text-xl mb-3 font-semibold text-yellow-400">
							Bidang <br/> Website
						</p>
						<div className="w-full [height:0.5px;] bg-yellow-400"></div>
					</div>
					<div className="bg-yellow-400 rounded-2xl px-8 py-10 text-left drop-shadow-xl">
						<img src={mobile} alt="" className="w-32 ml-auto mb-4"/>
						<p className="text-xl mb-3 font-semibold">Bidang <br/> Mobile Android</p>
						<div className="w-full [height:0.5px;] bg-black"></div>
					</div>
					<div className="bg-black rounded-2xl px-8 py-10 text-left drop-shadow-xl">
						<img src={design} alt="" className="w-32 ml-auto mb-8"/>
						<p className="text-xl mb-3 font-semibold text-yellow-400">
							Bidang <br/>  Design
						</p>
						<div className="w-full [height:0.5px;] bg-yellow-400"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FokusKami;
