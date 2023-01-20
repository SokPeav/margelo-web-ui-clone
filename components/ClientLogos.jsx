import React from "react";
import Image from "next/image";
import SilderContainer, { SliderItem } from "./Silder";
const ClientLogos = () => {
	return (
		<>
			<SilderContainer className="" contentWidth={1290} initialOffsetX={0}>
				<SliderItem width={150}>
					<Image src={"/assets/avatar.svg"} width={150} height={150} alt="logo" objectFit="contain" />
				</SliderItem>
				<SliderItem width={150}>
					<Image src={"/assets/avatar.svg"} width={150} height={150} alt="logo" objectFit="contain" />
				</SliderItem>
				<SliderItem width={150}>
					<Image src={"/assets/avatar.svg"} width={150} height={150} alt="logo" objectFit="contain" />
				</SliderItem>
				<SliderItem width={150}>
					<Image src={"/assets/avatar.svg"} width={150} height={150} alt="logo" objectFit="contain" />
				</SliderItem>
				<SliderItem width={150}>
					<Image src={"/assets/avatar.svg"} width={150} height={150} alt="logo" objectFit="contain" />
				</SliderItem>
				<SliderItem width={150}>
					<Image src={"/assets/avatar.svg"} width={150} height={150} alt="logo" objectFit="contain" />
				</SliderItem>
				<SliderItem width={150}>
					<Image src={"/assets/avatar.svg"} width={150} height={150} alt="logo" objectFit="contain" />
				</SliderItem>
				<SliderItem width={150}>
					<Image src={"/assets/avatar.svg"} width={150} height={150} alt="logo" objectFit="contain" />
				</SliderItem>
				<SliderItem width={150}>
					<Image src={"/assets/avatar.svg"} width={150} height={150} alt="logo" objectFit="contain" />
				</SliderItem>
			</SilderContainer>
			
		</>
	);
};

export default ClientLogos;
