import React from "react";
import CardKegiatan from "./CardKegiatan";
import { MdOutlineDateRange } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { FaUserAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import DokumentasiKegiatan from "./DokumentasiKegiatan";

const DetailKegiatan = () => {
	return (
		<>
			<div className="grid md:px-20 px-4 py-24">
				<div className="container mx-auto">
					<div className="my-12">
						<p className="text-2xl mb-8">Tahap Kaderisasi</p>
						<p className="text-4xl font-semibold mb-16">
							Outdoor Inready Workgroup
						</p>
						<div className="grid grid-cols-12 gap-8 text-xl text-left">
							<div className="col-span-6 ml-auto ">
								<p className="mb-4 flex">
									<MdOutlineDateRange className="self-center mr-5" />
									Tanggal Pelaksana
								</p>
								<p className="mb-4 flex">
									<SiGooglemaps className="self-center mr-5" />
									Lokasi Kegiatan
								</p>
								<p className="mb-4 flex">
									<FaUserAlt className="self-center mr-5" />
									Ketua Panitia
								</p>
								<p className="mb-4 flex">
									<HiUserGroup className="self-center mr-5" />
									Participant
								</p>
							</div>
							<div className="col-span-6">
								<p className="mb-4">: 28 Oktober 2022</p>
								<p className="mb-4">: Bissoloro</p>
								<p className="mb-4">: Aidil</p>
								<p className="mb-4">: Calon Angkatan Muda</p>
							</div>
						</div>
					</div>

					<div>
						<p className="text-justify text-xl">
							Lorem ipsum dolor sit amet consectetur. Arcu egestas sed sapien
							consectetur sagittis et nec dolor ac. Dolor augue cras duis sed ac
							sed id. Quam orci cursus non nunc pellentesque egestas semper urna
							pharetra. Malesuada erat consequat sit quis consectetur. Nascetur
							semper sit placerat egestas. Blandit viverra velit vulputate velit
							neque imperdiet aliquet dolor proin. Vitae vestibulum eget diam
							rhoncus. Sit eget in ante eget elementum fringilla enim est morbi.
							Tortor non donec sed elit at egestas integer. Mauris gravida ut in
							eu blandit. Et purus et augue ipsum augue velit pharetra neque.
							Etiam arcu condimentum in odio. Pretium amet aliquam odio eget
							amet feugiat praesent. Senectus velit scelerisque facilisis lacus
							blandit purus nunc donec vitae. Vulputate bibendum nunc arcu
							dignissim augue porta. Et sit platea lectus sit adipiscing posuere
							viverra velit. Et purus iaculis ac vitae viverra. Quisque semper
							ornare volutpat sed. Scelerisque donec quisque enim cras id nec
							felis quis. Lobortis velit augue consequat neque ultricies. In et
							habitant morbi a maecenas diam purus. Aliquet dictum eu morbi
							suscipit. Rhoncus et lorem quis ipsum. Leo sagittis netus id diam
							ut est ultricies nisl. Platea aliquam diam et feugiat. Diam
							egestas euismod lectus arcu tortor sagittis ultrices. Malesuada
							odio condimentum risus amet. Sem egestas nullam commodo turpis.
							Sed maecenas eros sociis integer mi quam vel ac non. Fames neque
							sed tempor consectetur. Suscipit vivamus urna odio praesent
							pellentesque. Pellentesque et lectus a magna accumsan adipiscing.
							Pharetra consequat adipiscing ipsum suspendisse phasellus
							fringilla in at feugiat. Convallis lectus nulla
						</p>
					</div>
				</div>
			</div>
			<DokumentasiKegiatan />
			<div className="grid md:px-20 px-4 mb-24">
				<div className="container mx-auto">
					<div className="mb-14">
						<p className="text-2xl">Kegiatan Lainnya</p>
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

export default DetailKegiatan;
