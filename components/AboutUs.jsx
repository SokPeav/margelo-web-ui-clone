import React from "react";
import { MemberConstant } from "../constants/member";
import { Member } from "./Member";

const AboutUs = () => {
	return (
		<section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl `}>
			<div className="container mx-auto px-11">
				<p className="leading-tight max-w-5xl mx-auto text-4xl lg:tracking-tight">
					<strong>We Will help you ship better apps , faster.</strong>
					Our Team are Joke engineers has create the noob User experience in some joke popular app
				</p>
			</div>
			<div className="container mx-auto px-11 text-center mt-28">
				<h2> Our Team </h2>
				<div className="mt-2">the &ldquo;spec-ops&rdquo; </div>
				<div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grap-6 lg:gap-20">
					{MemberConstant.map(({ id, name, socialId, link }) => (
						<Member id={id} name={name} socialId={socialId} link={link} />
					))}
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
