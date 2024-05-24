import contentOverview from "@content/contentOverview";
import unitedKingdomFlag from "@assets/unitedKingdomFlag.svg"
import { Element } from "react-scroll";
const ComponentOverview: React.FC = () => {
    return (
        <section className="relative w-full bg-platinum-700 p-16 sm:p-8 flex">
            <div className="container grid h-auto grid-cols-2 grid-rows-[auto] gap-x-8 gap-y-16 sm:flex sm:h-fit sm:flex-col sm:gap-2 z-20">
                <div className="col-span-1 col-start-2 row-span-1 row-start-1 sm:h-fit ">
                    <img
                        className="size-full object-cover shadow-base brightness-75 sm:aspect-golden-horizontal sm:w-full"
                        src={contentOverview[0].image}
                        alt={contentOverview[0].imageAlt}
                    />
                </div>
                <Element name="overview-1" className="col-span-1 col-start-1 row-span-1 row-start-1 flex flex-col gap-4 sm:gap-1 sm:mb-8">
                    <h2 className="text-h2 font-libre-baskerville font-bold text-night underline decoration-cornell_red decoration-2 sm:text-h3">
                        {contentOverview[0].headerText}
                    </h2>
                    <p className="text-base font-normal font-poppins text-night">{contentOverview[0].mainText}</p>
                </Element>

                <div className="col-span-1 col-start-1 row-span-1 row-start-2 ">
                    <img
                        className="aspect-golden-horizontal w-full object-cover shadow-base brightness-75"
                        src={contentOverview[1].image}
                        alt={contentOverview[1].imageAlt}
                    />
                </div>
                <Element name="overview-2" className="col-span-1 col-start-2 row-span-1 row-start-2 flex flex-col gap-4 sm:gap-1 sm:mb-8">
                    <h2 className="text-h2 font-libre-baskerville font-bold text-night underline decoration-cornell_red decoration-2 sm:text-h3">
                        {contentOverview[1].headerText}
                    </h2>
                    <p className="text-base font-normal font-poppins text-night">{contentOverview[1].mainText}</p>
                </Element>

                <div className="col-span-1 col-start-2 row-span-1 row-start-3">
                    <img
                        className="aspect-golden-horizontal size-full h-auto object-cover shadow-base brightness-75"
                        src={contentOverview[2].image}
                        alt={contentOverview[2].imageAlt}
                    />
                </div>
                <Element name="overview-3" className="col-span-1 col-start-1 row-span-1 row-start-3 flex flex-col gap-4 sm:gap-1 sm:mb-8">
                    <h2 className="text-h2 font-libre-baskerville font-bold text-night underline decoration-cornell_red decoration-2 sm:text-h3">
                        {contentOverview[2].headerText}
                    </h2>
                    <p className="text-base font-normal font-poppins text-night">{contentOverview[2].mainText}</p>
                </Element>
            </div>
            <div className="z-10 absolute w-[900px] aspect-golden-horizontal top-[700px] left-0 -translate-y-1/2 rotate-12 -translate-x-1/3 sm:hidden">
                <img src={unitedKingdomFlag} alt="United Kingdom Flag Image"  className="size-full"/>
            </div>
        </section>
    );
};

export default ComponentOverview;
