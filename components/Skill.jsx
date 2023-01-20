import React, { useContext, useRef } from "react";
import s from "../styles/skill.module.css";
import { ScrollContext } from "../untils/ScrollObersver";
const opcatityForBlock = (sectionProgress, blockNo) => {
	const progress = sectionProgress - blockNo;
	if (progress >= 0 && progress < 1) return 1;
	return 0.2;
};
const Skill = () => {
	const { scrollY } = useContext(ScrollContext);
	const refContainer = useRef(null);

	const numOfPage = 3;
	let progress = 0;

	const { current: elContainer } = refContainer;
	if (elContainer) {
		const { clientHeight, offsetTop } = elContainer;
		const screenH = window.innerHeight;
		const halfH = screenH / 2;
		const percentY = Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight;
		progress = Math.min(numOfPage - 0.5, Math.max(0.5, percentY * numOfPage));
		
		console.log(progress)
	}

	return (
		<div ref={refContainer} className="bg-black text-white ">
			<div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
				<div className="leading-[1.15]">
					<div
						className={s.skillText}
						style={{
							opacity: opcatityForBlock(progress, 0),
						}}
					>
						We Know Our tools inside
					</div>

					<span
						className={`${s.skillText} inline-block after:content-center-['_']`}
						style={{
							opacity: opcatityForBlock(progress, 1),
						}}
					>
						Out Team has contributed 123 commit to react Native core , powering thousand of app world wide.
					</span>
					<span
						className={`${s.skillText} inline-block`}
						style={{
							opacity: opcatityForBlock(progress, 2),
						}}
					>
						We&apos;re maintaning some of the most popular open-source project, With out <strong>1231</strong> Download
					</span>
				</div>
			</div>
		</div>
	);
};

export default Skill;
