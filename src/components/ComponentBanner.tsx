import contentBanner from "@content/contentBanner";
import "@splidejs/react-splide/css";
import { Element } from "react-scroll";

const ComponentBanner: React.FC = () => {
	return (
		<section className="h-[400px] w-full bg-platinum p-16 sm:h-auto sm:p-8">
			<Element name="banner" className="container relative flex size-full flex-row-reverse gap-4 sm:flex-col-reverse">
				<Element name="hoursOfCourses" className="flex w-1/2 flex-col justify-end gap-2  md:w-full">
					<h2 className="text-h2 font-libre-baskerville font-bold text-night underline decoration-cornell_red decoration-2 sm:text-h3">
						{contentBanner.headerText}
					</h2>
					<p className="text-base font-normal font-poppins text-night">{contentBanner.mainText}</p>
				</Element>
				<div className="w-1/2 md:w-full shadow-base">
					<img className="size-full object-cover brightness-75 md:aspect-golden-horizontal" src={contentBanner.image} alt="TO DO" />
					<span className="bg-cornell_red opacity-80 brightness-50"></span>
				</div>
			</Element>
		</section>
	);
};

export default ComponentBanner;
