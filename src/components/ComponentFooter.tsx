import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-scroll";
const ComponentFooter = () => {
	return (
		<footer className="h-fit w-full bg-cornell_red md:h-fit">
			<div className="container flex flex-row h-full justify-between gap-4 p-16 md:grid md:grid-cols-2 md:grid-rows-2 sm:!flex sm:!flex-col sm:gap-4">
				<div className="flex w-full flex-col gap-2">
					<h2 className="font-libre-baskerville text-h2 font-bold text-platinum underline decoration-platinum decoration-2 sm:text-h3">
						Kontakt
					</h2>
					<div className="flex items-center justify-start gap-2">
						<FaPhoneAlt className="aspect-square h-full w-auto p-1" fill="#e7e7e7" />
						<a href="tel:604076433" className="font-poppins text-base font-normal text-platinum hover:underline decoration-2">
						604 076 433
						</a>
					</div>
					<div className="flex items-center justify-start gap-2">
						<IoMdMail className="aspect-square h-full w-auto p-1" fill="#e7e7e7" />
						<a
							href="mailto:biuro@yesokay.eu"
							className="font-poppins text-base font-normal text-platinum hover:underline decoration-2"
						>
							biuro@yesokay.eu
						</a>
					</div>
				</div>
				<div className="flex w-full flex-col gap-2">
					<h2 className="font-libre-baskerville text-h2 font-bold text-platinum underline decoration-platinum decoration-2 sm:text-h3">
						Lokalizacja
					</h2>
					<div className="flex items-start justify-start gap-2">
						<FaLocationDot className="aspect-square h-6 w-auto p-1" fill="#e7e7e7" />
						<a
							href="https://maps.app.goo.gl/A5nLQuFur619TXe16"
							about="_blank"
							className="font-poppins text-base font-normal text-platinum hover:underline decoration-2"
						>
							ul. Example 123 <br /> Pruszków, 05-800
							<br />
						</a>
					</div>
				</div>
				<div className="flex w-full flex-col gap-2">
					<h2 className="font-libre-baskerville text-h2 font-bold text-platinum underline decoration-platinum decoration-2 sm:text-h3">
						Odnośniki
					</h2>
					<ul className="flex flex-col ml-4">
						<li className="list-disc text-platinum">
							<Link
								className="cursor-pointer font-poppins text-base font-normal text-platinum"
								to="overview-1"
								offset={-100}
								smooth={true}
								duration={500}
							>
								O nas
							</Link>
						</li>
						<li className="list-disc text-platinum">
							<Link
								className="cursor-pointer font-poppins text-base font-normal text-platinum"
								to="overview-2"
								offset={-100}
								smooth={true}
								duration={500}
							>
								Cel
							</Link>
						</li>
						<li className="list-disc text-platinum">
							<Link
								className="cursor-pointer font-poppins text-base font-normal text-platinum"
								to="overview-3"
								offset={-100}
								smooth={true}
								duration={500}
							>
								Lektorzy
							</Link>
						</li>
						<li className="list-disc text-platinum">
							<Link
								className="cursor-pointer font-poppins text-base font-normal text-platinum"
								to="courses"
								offset={-100}
								smooth={true}
								duration={500}
							>
								Nasze kursy
							</Link>
						</li>
						<li className="list-disc text-platinum">
							<Link
								className="cursor-pointer font-poppins text-base font-normal text-platinum"
								to="hoursOfCourses"
								offset={-100}
								smooth={true}
								duration={500}
							>
								Godziny kursów
							</Link>
						</li>
						<li className="list-disc text-platinum">
							<Link
								className="cursor-pointer font-poppins text-base font-normal text-platinum"
								to="gallery"
								offset={-100}
								smooth={true}
								duration={500}
							>
								Nasza galeria
							</Link>
						</li>
						<li className="list-disc text-platinum">
							<Link
								className="cursor-pointer font-poppins text-base font-normal text-platinum"
								to="gallery"
								offset={-100}
								smooth={true}
								duration={500}
							>
								Dlaczego YES
							</Link>
						</li>
						<li className="list-disc text-platinum">
							<Link
								className="cursor-pointer font-poppins text-base font-normal text-platinum"
								to="location"
								offset={-100}
								smooth={true}
								duration={500}
							>
								Kontakt
							</Link>
						</li>
						<li className="list-disc text-platinum">
							Vectors and icons by{" "}
							<a href="https://dazzleui.gumroad.com/l/dazzleiconsfree?ref=svgrepo.com" target="_blank">
								Dazzle Ui
							</a>{" "}
							in CC Attribution License via{" "}
							<a href="https://www.svgrepo.com/" target="_blank">
								SVG Repo
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default ComponentFooter;
