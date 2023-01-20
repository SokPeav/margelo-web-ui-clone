import React from "react";
import Carousel from "./Carousel";
import CarouselItem from "./Carousel-item";
import Review from "./Review";

const Testimonials = () => (
	<Carousel className={`bg-black text-white py-10 lg:py-20`}>
		<CarouselItem index={0}>
			<Review by="John Terry">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat ut, laudantium consequatur ipsa rerum molestias doloribus suscipit, corporis vero id quos eligendi
				asperiores, vel cumque. Dolores, pariatur aperiam. Commodi, deserunt?
			</Review>
		</CarouselItem>
		<CarouselItem index={1}>
			<Review by="Yan Rithy">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat ut, laudantium consequatur ipsa rerum molestias doloribus suscipit, corporis vero id quos eligendi
				asperiores, vel cumque. Dolores, pariatur aperiam. Commodi, deserunt?
			</Review>
		</CarouselItem>
		<CarouselItem index={2}>
			<Review by="Yan Rithy">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat ut, laudantium consequatur ipsa rerum molestias doloribus suscipit, corporis vero id quos eligendi
				asperiores, vel cumque. Dolores, pariatur aperiam. Commodi, deserunt?
			</Review>
		</CarouselItem>
		<CarouselItem index={3}>
			<Review by="Yan Rithy">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat ut, laudantium consequatur ipsa rerum molestias doloribus suscipit, corporis vero id quos eligendi
				asperiores, vel cumque. Dolores, pariatur aperiam. Commodi, deserunt?
			</Review>
		</CarouselItem>
		<CarouselItem index={4}>
			<Review by="Yan Rithy">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat ut, laudantium consequatur ipsa rerum molestias doloribus suscipit, corporis vero id quos eligendi
				asperiores, vel cumque. Dolores, pariatur aperiam. Commodi, deserunt?
			</Review>
		</CarouselItem>
	</Carousel>
);

export default Testimonials;
