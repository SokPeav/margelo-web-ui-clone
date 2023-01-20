import Head from "next/head";
import AboutUs from "../components/aboutus";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Masthead from "../components/masthead";
import Skill from "../components/Skill";
import TrustedBy from "../components/TrustedBy";
import Works from "../components/Works.jsx";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Me Clone</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Masthead />
			<AboutUs />
			<Skill />
			<Works />
			<TrustedBy />
			<ContactUs/>
			<Footer/>
		</div>
	);
}
