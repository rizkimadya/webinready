import React from "react";
import Location from "../Assets/Location.png";
import Call from "../Assets/Call.png";
import Mail from "../Assets/mail.png";
import Instagram from "../Assets/instagram.png";
import Youtube from "../Assets/youtube.png";
import {BiCopyright} from 'react-icons/bi'

const Footer = () => {
	return (
		<>
			<div className="bg-gray-900 py-10 md:px-20 px-4">
				<div className="grid md:grid-cols-3 container mx-auto text-white text-left gap-8">
					<div>
						<div className="flex mb-4">
							<img src={Location} alt="" />
							<p className="font-semibold text-xl self-center">
								Sekretariat Inready Workgroup
							</p>
						</div>
						<p className="text-left text-xl pl-10">Jl.Sembarang</p>
					</div>
					<div>
						<div className="mt-2 mb-4">
							<p className="font-semibold text-xl">Kontak</p>
						</div>
						<div className="flex mb-4">
							<img src={Call} alt="" />
							<p className="text-xl ml-4 self-center">+62 8534216789</p>
						</div>
						<div className="flex mb-4">
							<img src={Mail} alt="" />
							<p className="text-xl ml-4 self-center">
								inready.workgroup@gmail.com
							</p>
						</div>
					</div>
					<div className="items-center md:mx-auto">
						<div className="mt-2 mb-4">
							<p className="font-semibold text-xl">Sosial Media</p>
						</div>
						<div className="flex gap-6 justify-center">
							<a href="">
								<img src={Instagram} alt="" />
							</a>
							<a href="">
								<img src={Youtube} alt="" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-yellow-400">
				<div className="grid py-10">
					<div className="flex justify-center">
						<BiCopyright  className="self-center mr-1 text-xl"/>
						<p>2023 Inready Workgroup. All Rights Reserved.</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
