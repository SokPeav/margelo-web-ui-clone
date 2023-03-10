import Link from "next/link";
import React from "react";

export const WorkContainer = ({ children }) => <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">{children}</div>;
export const WorkBackground = () => (
	<div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
		<div className="bg-black h-[30vh] lg:h-auto"></div>

		<div className="bg-white h-[70vh] lg:min-h-screen"></div>
	</div>
);
export const WorkLeft = ({ children, progress }) => {
	let translateY = Math.min(0, 50 - progress * 3 * 50);
	if (progress > 85) translateY = Math.min(-50, -(progress - 0.85) * 2 * 50);

	return (
		<div className="flex flex-col items-center justify-center text-3xl lg:text-3xl h-[30vh] lg:h-auto" style={{ transform: `translateY(${translateY}px)` }}>
			<div className="leading-10">{children}</div>
		</div>
	);
};

export const WorkRight = ({ children, progress }) => {
	let translateY = Math.min(-50, -(progress - 0.5) * 50);

	return (
		<div
			className="flex flex-1 lg:items-center justify-center h-screen"
			style={{
				transform: `translateY(${translateY}px)`,
			}}
		>
			<div className="w-full max-w-md pt-10 lg:pt-10 px-10 md:px-0">{children}</div>
		</div>
	);
};

export const WorkLink = ({ href, children }) => (
	<Link href={href}>
		<a target="_blank" rel="noreferrer" className="underline underline-offset-8 decoration-1">
			{children}
		</a>
	</Link>
);
