import React from "react";
import CardBerita from "./CardBerita";
import { CgSoftwareDownload } from "react-icons/cg";

const DetailBerita = () => {
	return (
		<>
			<div className="grid md:px-20 px-4 py-24">
				<div className="container mx-auto">
					<div className="my-12">
						<p className="text-2xl mb-8">Tahap Perekrutan</p>
						<p className="text-4xl font-semibold mb-4">
							Pengumuman Calon Angkatan Muda yang berhasil
							<br /> lolos ke Tahap Selanjutnya
						</p>
						<p className="text-xl leading-7 mb-4">
							Dalam menjadi angkatan muda Inready Workgroup dibutuhkan beberapa
							tahap yang harus diikuti oleh seluruh peserta, jika salah satu
							peserta tidak menemukan namanya dalam daftar dan telah mengikuti
							seluruh tahapan perekrutan, maka harap menghubungi salah satu
							pengurus Inready Workgroup.
						</p>
						<p className="text-xl mb-9">
							silahkan download lampiran di bawah ini untuk melihat daftar nama
							yang lolos ke tahap selanjutnya.
						</p>
						<button className="border border-yellow-400 rounded-2xl text-yellow-400 py-3 px-6 text-xl flex mx-auto hover:bg-yellow-400 hover:text-white">
							<CgSoftwareDownload className="self-center mr-1 text-3xl" />
							Download Daftar Nama
						</button>
					</div>

					<div className="md:my-28 my-6">
						<hr />
					</div>

					<div className="mb-14">
						<p className="text-2xl">Berita Lainnya</p>
					</div>
					<div className="grid md:grid-cols-3 gap-10">
						<CardBerita />
						<CardBerita />
						<CardBerita />
					</div>
				</div>
			</div>
		</>
	);
};

export default DetailBerita;
