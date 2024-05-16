import infoContent from "@content/infoContent";
import redLine from "@assets/redLine.svg";
import image from "@assets/stockEducation.webp";
import certificate from "@assets/certificate.webp"
import { Element } from "react-scroll";
const ComponentInfo = () => {
	const infoCards = infoContent.map((info, index) => (
		<div key={index} className="size-full flex flex-col gap-0">
			<h2 className="font-libre-baskerville text-h5 font-semibold text-night sm:text-h4">
				{info.headerText}
			</h2>
			<p className="font-poppins text-base font-normal text-night">{info.mainText}</p>
		</div>
	));

	return (
		<section className="flex h-fit w-full bg-platinum p-16 sm:p-8">
			<div className="container flex h-fit items-start gap-16 md:flex-col-reverse">
				<div className="flex flex-col gap-8 w-fit">
					<h2 className="font-libre-baskerville text-h2 font-bold text-night underline decoration-cornell_red decoration-2 sm:text-h3">Dlaczego YES?</h2>
					{infoCards}
				</div>
				<Element name="gallery" className="w-full relative h-min max-w-[600px] md:max-w-none md:flex md:flex-col md:gap-4">
					<h2 className="font-libre-baskerville text-h2 font-bold text-night underline decoration-cornell_red decoration-2 sm:text-h3">
						Nasza galeria
					</h2>
					<img src={redLine} alt="Red Line" className="size-full absolute md:relative" />
					<div className="relative md:absolute top-0 left-0 flex size-full flex-col justify-evenly items-start gap-8 py-8 md:py-0">
						<img
							className="md:!w-1/3 object-cover xl:w-1/3 min-w-[250px] aspect-golden-vertical shadow-image-shadow w-1/3"
							src={certificate}
							alt=""
						/>
						<img
							className="md:!w-2/3 object-cover xl:w-3/4 min-w-[250px] aspect-golden-horizontal shadow-image-shadow w-1/2 place-self-end"
							src={image}
							alt=""
						/>
						<img
							className="md:!w-2/3 object-cover xl:w-3/4 min-w-[250px] aspect-golden-horizontal shadow-image-shadow w-1/2"
							src={image}
							alt=""
						/>
					</div>
				</Element>
			</div>
		</section>
	);
};

export default ComponentInfo;
