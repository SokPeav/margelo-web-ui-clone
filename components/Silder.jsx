import React, { useContext, useRef, useCallback } from "react";
import { SizeContext } from "../untils/SizeObserver";
import useAnimationFrame from "../untils/use-animation-frame";

export const SliderItem = ({ children, width }) => {
	return (
		<div className="inline-flex justify-center items-center mx-4 " style={{ width }}>
			{children}
		</div>
	);
};
const SilderContainer = ({ children, initialOffsetX, className, contentWidth }) => {
	const { innerWidth } = useContext(SizeContext);
	const refScrollX = useRef(initialOffsetX);
	const refContainer = useRef(null);
	const refContent = useRef(null);
	const enabled = innerWidth < contentWidth;
	useAnimationFrame(
		enabled,
		useCallback(() => {
			const { current: elContainer } = refContainer;
			const { current: elContent } = refContent;
			if (elContainer && elContent) {
				refScrollX.current += 0.5;
				elContainer.scrollLeft = refScrollX.current;
				if (elContainer.scrollLeft >= elContent.clientWidth) {
					refScrollX.current = 0;
					elContainer.scrollLeft = 0;
				}
			}
		}, [])
	);
	return (
		<div ref={refContainer} className={`slider-container overflow-x-hidden whitespace-nowrap max-w-full pointer-events-none ${className}`}>
			<div ref={refContent} className="inline-block">
				{children}
			</div>
			<div className={enabled ? "inline-block" : "hidden"}>{children}</div>
		</div>
	);
};

export default SilderContainer;
