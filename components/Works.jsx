import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./Tile";
import { WorkBackground, WorkContainer, WorkLeft, WorkLink, WorkRight } from "./Work";
import Image from "next/image";
const Works = () => {
	return (
		<TileWrapper numberOfPage={3}>
			<TileBackground>
				<WorkBackground />
			</TileBackground>
			<TileContent>
				<Tile
					page={0}
					renderContent={({ progress }) => (
						<WorkContainer>
							<WorkLeft progress={progress}>
								<div>We build shit</div>
								<div className="text-4xl md:text-5xl font-semibold tracking-tight">
									<WorkLink href="https://react-table-v7.tanstack.com/docs/examples/basic">Pink &apos;s App</WorkLink>
								</div>
							</WorkLeft>
							<WorkRight progress={progress}>
								<Image src={"/assets/avatar.svg"} layout="responsive" width={840} height={1620} alt="testing Image" />
							</WorkRight>
						</WorkContainer>
					)}
				></Tile>
				<Tile
					page={1}
					renderContent={({ progress }) => (
						<WorkContainer>
							<WorkLeft progress={progress}>
								<div>We Made</div>
								<div className="text-4xl md:text-5xl font-semibold tracking-tight">Joke &apos;s App</div>
							</WorkLeft>
							<WorkRight progress={progress}>
								<Image src={"/assets/avatar4.svg"} layout="responsive" width={840} height={1620} alt="testing Image" />
							</WorkRight>
						</WorkContainer>
					)}
				></Tile>
				<Tile
					page={2}
					renderContent={({ progress }) => (
						<WorkContainer>
							<WorkLeft progress={progress}>
								<div>We Made</div>
								<div className="text-4xl md:text-5xl font-semibold tracking-tight">Joke &apos;s App</div>
							</WorkLeft>
							<WorkRight progress={progress}>
								<Image src={"/assets/avatar2.svg"} layout="responsive" width={840} height={1620} alt="testing Image" />
							</WorkRight>
						</WorkContainer>
					)}
				></Tile>
			</TileContent>
		</TileWrapper>
	);
};

export default Works;
