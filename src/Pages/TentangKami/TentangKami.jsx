import React from "react";
import "./Tentang.css";

const TentangKami = () => {
	return (
		<>
			<div className="grid py-20">
				<div className="bg relative">
					<div className="absolute bottom-6 text-center left-0 right-0">
						<p className="text-4xl font-semibold mb-3">Tentang Kami</p>
						<div className="w-20 h-1 bg-black mx-auto"></div>
					</div>
				</div>

				<div className="md:px-20 px-4">
					<div className="grid md:grid-cols-2 py-20">
						<div className="mx-auto mb-6">
							<img
								src="https://awsimages.detik.net.id/community/media/visual/2019/02/19/42393387-9c5c-4be4-97b8-49260708719e.jpeg?w=750&q=90"
								alt=""
								className="w-96 rounded-lg"
							/>
						</div>
						<div className="text-left">
							<div className="mb-9">
								<p className="text-5xl font-semibold">Ketua Umum </p>
								<p className="text-3xl mt-2">Mr. been</p>
							</div>
							<div className="mb-6 text-2xl">
								<p>Visi :</p>
								<ul className="list-disc ml-7">
									<li>Lorem ipsum dolor sit amet consectetur.</li>
									<li>Lorem ipsum dolor sit amet consectetur.</li>
									<li>Lorem ipsum dolor sit amet consectetur.</li>
								</ul>
							</div>
							<div className="mb-6 text-2xl">
								<p>Misi :</p>
								<ul className="list-disc ml-7">
									<li>Lorem ipsum dolor sit amet consectetur.</li>
									<li>Lorem ipsum dolor sit amet consectetur.</li>
									<li>Lorem ipsum dolor sit amet consectetur.</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="grid">
						<p className="text-5xl font-semibold mb-9">Inready Workgroup</p>
						<p className="text-justify text-2xl tracking-tighter">
							Inready Workgroup adalah Lorem ipsum dolor sit amet consectetur.
							Arcu egestas sed sapien consectetur sagittis et nec dolor ac.
							Dolor augue cras duis sed ac sed id. Quam orci cursus non nunc
							pellentesque egestas semper urna pharetra. Malesuada erat
							consequat sit quis consectetur. Nascetur semper sit placerat
							egestas. Blandit viverra velit vulputate velit neque imperdiet
							aliquet dolor proin. Vitae vestibulum eget diam rhoncus. Sit eget
							in ante eget elementum fringilla enim est morbi. Tortor non donec
							sed elit at egestas integer. Mauris gravida ut in eu blandit. Et
							purus et augue ipsum augue velit pharetra neque. Etiam arcu
							condimentum in odio. Pretium amet aliquam odio eget amet feugiat
							praesent. Senectus velit scelerisque facilisis lacus blandit purus
							nunc donec vitae. Vulputate bibendum nunc arcu dignissim augue
							porta. Et sit platea lectus sit <br/> adipiscing posuere viverra velit.
							Et purus iaculis ac vitae viverra. Quisque semper ornare volutpat
							sed. Scelerisque donec quisque enim cras id nec felis quis.
							Lobortis velit augue consequat neque ultricies. In et habitant
							morbi a maecenas diam purus. Aliquet dictum eu morbi suscipit.
							Rhoncus et lorem quis ipsum. Leo sagittis netus id diam ut est
							ultricies nisl. Platea aliquam diam et feugiat. Diam egestas
							euismod lectus arcu tortor sagittis ultrices. Malesuada odio
							condimentum risus amet. Sem egestas nullam commodo turpis. Sed
							maecenas eros sociis integer mi quam vel ac non. Fames neque sed
							tempor consectetur. Suscipit vivamus urna odio praesent
							pellentesque. Pellentesque et lectus a magna accumsan adipiscing.
							Pharetra consequat adipiscing ipsum suspendisse phasellus
							fringilla in at feugiat. Convallis lectus nulla
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default TentangKami;
