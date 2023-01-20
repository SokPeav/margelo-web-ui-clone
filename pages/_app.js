import "../styles/globals.css";
import ScrollObersver from "../untils/ScrollObersver";
import SizeObserver from "../untils/SizeObserver";

function MyApp({ Component, pageProps }) {
	return (
		<SizeObserver>
			<ScrollObersver>
				<Component {...pageProps} />
			</ScrollObersver>
		</SizeObserver>
	);
}

export default MyApp;
