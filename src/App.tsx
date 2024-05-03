import ComponentHeader from "@components/ComponentHeader";
import ComponentOverview from "@components/ComponentOverview";
import ComponentCourses from "@components/ComponentCourses";
import ComponentBanner from "@components/ComponentBanner";
import ComponentLocation from "@components/ComponentLocation";
import ComponentFooter from "@components/ComponentFooter";
import ComponentInfo from "@components/ComponentInfo";
import "@splidejs/react-splide/css";

const App: React.FC = () => {
    return (
        <>
            <ComponentHeader />
            <ComponentOverview />
            <ComponentCourses />
            <ComponentBanner />
            <ComponentInfo />
            <ComponentLocation />
            <ComponentFooter />
        </>
    );
};

export default App;
