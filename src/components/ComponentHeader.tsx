import headerImage from "@assets/headerImage.webp";
import { Link } from "react-scroll";
const ComponentHeader: React.FC = () => {
	return (
		<header className="relative h-[700px] w-full p-16 sm:p-8 sm:h-[90vh]">
			<img className="absolute left-0 top-0 size-full object-cover brightness-50" src={headerImage} alt="Header Stock Image" />
			<div className="container relative z-10 flex h-full flex-col gap-6 sm:justify-start">
				<div className="flex h-fit w-full flex-col items-start justify-start">
					<p className="leading-[1em] font-libre-baskerville w-4/5 text-left text-[5em] font-bold text-platinum sm:text-[3em]">YOUR</p>
					<p className="leading-[1em] font-libre-baskerville w-4/5 text-left text-[5em] font-bold text-platinum sm:text-[3em]">
						ENGLISH
					</p>
					<p className="leading-[1em] font-libre-baskerville w-4/5 text-left text-[5em] font-bold text-platinum sm:text-[3em]">
						SCHOOL
					</p>
				</div>
				<p className="h-fit w-2/5 text-base font-light font-poppins text-platinum sm:w-full">
					„With languages, you are at home anywhere”  
				</p>
				<Link
					className="font-semibold cursor-pointer text-platinum sm:justify-self-end sm:absolute font-poppins bottom-0 h-fit w-fit justify-self-end rounded-sm bg-cornell_red px-4 py-2 hover:bg-cornell_red-400 sm:self-center  sm:px-8 sm:py-4"
					to="overview-1"
					smooth={true}
					duration={500}
				>
					Zapoznaj się z nami
				</Link>
			</div>
		</header>
	);
};

export default ComponentHeader;
