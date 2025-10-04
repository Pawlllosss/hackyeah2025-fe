import ExperienceTile from "./ExperienceTile.tsx";

const About = () => {
    return <div className="flex h-[60vh] flex-col">
        <h1 className="text-center">Test</h1>
        <div className="flex justify-center">
            <div className="flex w-1/3 flex-col space-y-20 items-start mt-6">
                <ExperienceTile jobTitle="Test" companyName="Test" jobStart={new Date(2024, 10)}/>
                <ExperienceTile jobTitle="Test" companyName="Test" jobStart={new Date(2019, 11)}
                                jobEnd={new Date(2024, 10)}/>
            </div>
        </div>
    </div>
}

export default About;