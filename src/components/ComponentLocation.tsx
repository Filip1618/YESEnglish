import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Element } from "react-scroll";

const ComponentContact: React.FC = () => {
	const location: google.maps.LatLngLiteral = { lat: 52.17257400132175, lng: 20.789143710372283 };

	const options: google.maps.MapOptions = {
		zoomControl: false,
		fullscreenControl: false,
		clickableIcons: false,
		streetViewControl: false,
		disableDefaultUI: true,
		keyboardShortcuts: false,
	};

	const mapContainerStyle: React.CSSProperties = {
		width: "100%",
		height: "100%",
	}; 
	return (
		<section className="flex p-16 sm:p-8 h-[700px] sm:h-fit w-full bg-platinum">
			<Element name="location" className="container flex flex-row sm:flex-col gap-8">
				<div className="flex h-full w-1/2 flex-col gap-2 sm:w-full sm:h-fit">
					<h2 className="mb-4 text-h2 font-libre-baskerville font-bold text-night underline decoration-cornell_red decoration-2 sm:text-h3">
						Kontakt
					</h2>
					<div className="flex items-center justify-start gap-2">
						<FaPhoneAlt className="aspect-square h-full w-auto p-1" fill="#ba181b" />
						<a href="tel:123123123" about="_blank" className="text-base font-normal font-poppins text-night hover:underline decoration-2">
							123 123 123
						</a>
					</div>
					<div className="flex items-center justify-start gap-2">
						<IoMdMail className="aspect-square h-full w-auto p-1" fill="#ba181b" />
						<a href="mailto:example@example.com" about="_blank" className="text-base font-normal font-poppins text-night hover:underline decoration-2">
							example@example.com
						</a>
					</div>
					<div className="flex items-start justify-start gap-2">
						<FaLocationDot className="aspect-square h-6 w-auto p-1" fill="#ba181b" />
						<a
							href="https://maps.app.goo.gl/A5nLQuFur619TXe16"
							about="_blank"
							className="text-base font-normal font-poppins text-night hover:underline decoration-2"
						>
							ul. Example 123 <br /> Pruszków, 05-800
							<br />
						</a>
					</div>
				</div>
				<div className="h-full w-1/2 shadow-base md:w-2/3 sm:!w-full aspect-square">
					<LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
						<GoogleMap options={options} mapContainerStyle={mapContainerStyle} center={location} zoom={16}>
							<Marker position={location} />
						</GoogleMap>
					</LoadScript>
				</div>
			</Element>
		</section>
	);
};

export default ComponentContact;
