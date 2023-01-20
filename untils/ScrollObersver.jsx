import React, { useCallback, useEffect, useState } from "react";

export const ScrollContext = React.createContext({ scrollY: 0 });

const ScrollObersver = ({ children }) => {
	const [scrollY, setScrollY] = useState(0);
	const handleScroll = useCallback(() => {
		setScrollY(window.scrollY);
	}, []); 
	useEffect(() => {
		document.addEventListener("scroll", handleScroll, { passive: true });
		return () => document.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);
	return <ScrollContext.Provider value={{ scrollY }}>{children}</ScrollContext.Provider>;
};

export default ScrollObersver;
