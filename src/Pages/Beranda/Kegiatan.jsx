import React from "react";
import cardkegiatan from "../../Assets/bgkegiatan.png";
import { CgCalendarDates } from "react-icons/cg";

const Kegiatan = () => {
	return (
		<>
			<div className="[margin-bottom:80px;] md:px-20 px-4">
				<div className="container mx-auto">
					<p className="text-left text-4xl font-semibold">Kegiatan</p>
					<div className="w-20 h-1 bg-black mt-2 mb-6"></div>

					<div className="grid md:grid-cols-2">
						<div className="self-center mb-6 shadow-md bg-yellow-400 [width:424px;] [height:480px;] [border-radius:35px;]">
							<img src={cardkegiatan} alt="" className="" />
							<div className="p-10">
								<p className="text-3xl font-semibold mb-3">PRESENTASI KARYA</p>
								<p className="text-base mb-6">
									Salah satu tahapan dalam perekrutan anggota baru Inready
									Workgroup.
								</p>
								<p className="text-white">Kegiatan Dimulai dalam:</p>
								<div className="flex text-white font-semibold mt-6 justify-between">
									<div className="flex">
										<p className="text-3xl">07</p>
										<p className="mt-auto">Hari</p>
									</div>
									<div className="flex">
										<p className="text-3xl">10</p>
										<p className="mt-auto">Jam</p>
									</div>
									<div className="flex">
										<p className="text-3xl">35</p>
										<p className="mt-auto">Menit</p>
									</div>
									<div className="flex">
										<p className="text-3xl">10</p>
										<p className="mt-auto">Detik</p>
									</div>
								</div>
							</div>
						</div>
						<div>
							<p className="text-2xl font-semibold mb-6">Kegiatan Lainnya</p>
							<div className="border-t border-x rounded-t-xl">
								<div className="border-b px-6 py-5">
									<a href="" className="block text-left text-xl mb-1">
										Outdoor Inready Workgroup
									</a>
									<div className="flex">
										<CgCalendarDates className="self-center" />
										<p className="text-sm font-light ml-1">
											28-30 Oktober 2022
										</p>
									</div>
								</div>
								<div className="border-b px-6 py-5">
									<a href="" className="block text-left text-xl mb-1">
										Tahap Wawancara Calon Angkatan Muda
									</a>
									<div className="flex">
										<CgCalendarDates className="self-center" />
										<p className="text-sm font-light ml-1">20 September 2022</p>
									</div>
								</div>
								<div className="border-b px-6 py-5">
									<a href="" className="block text-left text-xl mb-1">
										Open House untuk Calon Angkatan Muda
									</a>
									<div className="flex">
										<CgCalendarDates className="self-center" />
										<p className="text-sm font-light ml-1">15 September 2022</p>
									</div>
								</div>
								<div className="border-b px-6 py-5">
									<a href="" className="block text-left text-xl mb-1">
										Sosialisasi Inready Workgroup untuk Calon Angkatan Muda
									</a>
									<div className="flex">
										<CgCalendarDates className="self-center" />
										<p className="text-sm font-light ml-1">10 September 2022</p>
									</div>
								</div>
								<div className="px-6 py-5">
									<a href="" className="block text-left text-xl mb-1">
										Rapat Kerja Pengurus Inready Workgroup periode 2022-2023
									</a>
									<div className="flex">
										<CgCalendarDates className="self-center" />
										<p className="text-sm font-light ml-1">20 September 2022</p>
									</div>
								</div>
								<div>
									<button className="bg-yellow-400 w-full rounded-b-lg py-4 font-semibold">
										Tampilkan Lebih banyak-{">"}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Kegiatan;
