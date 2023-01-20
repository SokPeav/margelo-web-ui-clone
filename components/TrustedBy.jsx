import React from "react";
import ClientLogos from "./ClientLogos";
import Testimonials from "./Testimonials";
import s from "../styles/trustedBy.module.css";
const TrustedBy = () => {
	return (
		<section className={`bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32 ${s.bg}`}>
			<div className="flex-1"></div>
			<div className="flex flex-col  justify-center items-center">
				<h3 className="text-xl mb-10 font-bold text-center">
					<span className="whitespace-nowrap">Trust By</span> <span className="whitespace-nowrap">Some of the app you use daily</span>
				</h3>
				<ClientLogos />
			</div>
			<div className="flex flex-col justify-center items-center">
				<div className="container mx-auto lg:max-w-[70%] lg:px-10">
					<h3 className="text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.5rem]">We Believe in good communication and a fully tranparent development procress</h3>
				</div>
			</div>
			<Testimonials />
			<div className="flex-1 bg-black"></div>
		</section>
	);
};

export default TrustedBy;
