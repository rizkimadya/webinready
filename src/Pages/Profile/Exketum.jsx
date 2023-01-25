import React from "react";
import ExketumCard from "./ExketumCard";

const Exketum = () => {
	return (
		<>
			<div className="grid md:px-20 px-4 py-24">
				<div className="container mx-auto">
					<div className="my-12">
						<p className="text-left text-5xl font-semibold mb-2">
							Mantan Ketua Umum Inready Workgroup
						</p>
						<div className="w-24 h-1 bg-black"></div>
					</div>
					<div className="md:mb-20">
						<p className="text-justify text-xl mb-6">
							Lorem ipsum dolor sit amet consectetur. Odio quisque arcu dictumst
							mattis enim blandit scelerisque. Quam orci cursus non nunc
							pellentesque egestas semper urna pharetra. Malesuada erat
							consequat sit quis consectetur.
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-x-32 gap-y-16">
						<ExketumCard/>
						<ExketumCard/>
						<ExketumCard/>
						<ExketumCard/>
						<ExketumCard/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Exketum;
