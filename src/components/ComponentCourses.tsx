import contentCourses from "@content/contentCourses";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Element } from "react-scroll";
import { FaAngleRight } from "react-icons/fa6";

const ComponentCourses: React.FC = () => {
	const SPLIDE_OPTIONS = {
		perPage: 4,
		padding: 64,
		perMove: 1,
		gap: "16px",
		pagination: false,
		mediaQuery: "max",
		breakpoints: {
			1479: {
				perPage: 3,
			},
			1199: {
				perPage: 3,
			},
			1099: {
				perPage: 2,
			},
			591: {
				perPage: 1,
				padding: 64,
			},
		},
	};

	const coursesCards = contentCourses.map((course, index) => {
		if (course.list) {
			var listItems: JSX.Element[] | undefined = course.list.map((item, index) => (
				<li key={index} className="list-disc font-poppins text-base font-normal text-night">
					{item}
				</li>
			));
		} else {
			var listItems: JSX.Element[] | undefined = undefined;
		}
		return (
			<SplideSlide key={index} className="flex aspect-golden-vertical flex-col items-start justify-start bg-platinum p-4 shadow-base">
				<img src={course.image} alt="TODO" className="aspect-golden-vertical w-1/3 self-center" title={course.imageSource}/>
				<h3 className="font-libre-baskerville text-h5 font-semibold text-night sm:text-h4">{course.headerText}</h3>
				<p className="font-poppins text-base font-normal text-night">{course.mainText}</p>
				{listItems ? <ul className="ml-4">{listItems}</ul> : ""}
			</SplideSlide>
		);
	});

	return (
		<section className="flex h-fit w-full bg-cornell_red p-16 sm:p-8">
			<Element name="courses" className="container flex h-full flex-col items-center gap-4 ">
				<h2 className="w-full font-libre-baskerville text-h2 font-bold text-platinum sm:text-h3">Nasze kursy</h2>
				<Splide className="w-[calc(100%+128px)] max-[767px]::w-full" options={SPLIDE_OPTIONS} hasTrack={false}>
					<SplideTrack>{coursesCards}</SplideTrack>
					<div className="splide__arrows">
						<button className="splide__arrow splide__arrow--prev !size-11 !left-8 md:!size-8  !rounded-none !bg-night !opacity-100 flex !justify-center !items-center">
							<FaAngleRight className="!fill-platinum" />
						</button>
						<button className="splide__arrow splide__arrow--next !size-11 !right-8 md:!size-8  !rounded-none !bg-night !opacity-100 flex !justify-center !items-center">
							<FaAngleRight className="!fill-platinum" />
						</button>
					</div>
				</Splide>
			</Element>
		</section>
	);
};

export default ComponentCourses;
