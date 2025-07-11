import Eye from "../assets/svgFunctions/Eye"
import GitHub from "../assets/svgFunctions/GitHub"
import Palatable from "../assets/palatable.png"
import Clockwise from "../assets/clockwise.png"
import Crocodile from "../assets/crocodile.png"


const Projects = () => {
    
    return (
        <section
            id="projects"
            className="
                flex flex-col gap-10 
                min-h-[calc(100vh-5rem)] px-8 pb-6 pt-6 sm:px-10 md:px-24
                bg-gradient-to-b from-gray-200 to-gray-100 text-gray-800 
                scroll-mt-[5rem]
        ">
            <div className="flex flex-col items-center gap-4 xl:gap-24">
                <div className="flex flex-col gap-7 mb-2">
                    <h2 className="mb-2 mx-auto lg:mt-2">
                        <span className="border-b-8 border-orange-500 pb-2 text-center text-2xl md:text-[2rem] xl:text-[2.65rem] font-semibold tracking-wide">
                            PROJECTS
                        </span>
                    </h2>
                    <p className="text-[0.95rem] sm:text-[1.05rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.35rem]">
                        Here is a selection of my recent projects, where I've
                        applied my ever-growing skillset to create practical and
                        engaging solutions.
                    </p>
                </div>
                <div className="flex items-start justify-center gap-10">
                    <div className="flex flex-col gap-4 xl:gap-10 xl:w-1/2 md:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.35rem]">
                        <h3 className="text-center font-bold text-[1.5rem] md:text-[1.8rem] lg:text-[1.9rem] xl:text-[2rem]">
                        <a 
                            href="https://palatable.netlify.app/"
                            rel="noreferrer"
                            target="_blank"
                            className="relative group inline-block transition-colors duration-300"
                        >
                            <span className="relative z-10 bg-[linear-gradient(to_right,_#70c1b3,_#2D5A9A,_#b39ddb,_#B553A2)] bg-clip-text hover:text-transparent transition-all duration-500 ease-in-out">
                                palatable
                            </span>
                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[linear-gradient(to_right,_#70c1b3,_#2D5A9A,_#b39ddb,_#B553A2)] transition-all duration-700 ease-in-out group-hover:w-full"></span>
                        </a>
                        </h3>
                        <div className="group overflow-hidden rounded border-4 xl:hidden">
                            <a
                                href="https://palatable.netlify.app/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img
                                    src={Palatable}
                                    alt=""
                                    className="transition-all duration-1000 ease-in-out group-hover:scale-125"
                                />
                            </a>
                        </div>
                        <a
                            href="https://github.com/maxkatilius/palatable"
                            rel="noreferrer"
                            target="_blank"
                            className="xl:hidden"
                        >
                            <div className="flex items-center justify-center gap-2 px-2 py-1 bg-orange-500 font-bold text-white rounded shadow-lg hover:bg-orange-400">
                                <GitHub className="h-6 w-6" />
                                <p>GITHUB REPO</p>
                            </div>
                        </a>
                        <a
                            href="https://palatable.netlify.app/"
                            rel="noreferrer"
                            target="_blank"
                            className="xl:hidden"
                        >
                            <div className="flex items-center justify-center gap-2 px-2 py-1 bg-orange-500 font-bold text-white rounded shadow-lg hover:bg-orange-400">
                                <Eye className="h-6 w-6" />
                                <p>LIVE DEMO</p>
                            </div>
                        </a>
                        <p className="md:pt-2 lg:pt-4 xl:pt-0">
                            <span className="font-semibold tracking-wide">palatable </span> 
                            is an interactive color palette generator designed for designers 
                            and developers who want creative control over their color schemes. 
                            With support for multiple color modes, customizable generation logic, 
                            and persistent local storage, palatable offers a visually engaging 
                            and technically rich experience.
                        </p>
                        <p className="mt-1">
                            <span className="tracking-wide font-semibold">Key Features:</span>
                        </p>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <span className="font-bold">
                                    - Colour Modes:
                                </span>{" "}
                                Custom logic that utilises colour theory to 
                                generate colour palettes according to users 
                                custom selection.
                            </li>
                            <li>
                                <span className="font-bold">- Name Match:</span>{" "}
                                An integrated binary search algorithm provides
                                the closest colour name match from a database of
                                over 30,000 colour names.
                            </li>
                            <li>
                                <span className="font-bold">
                                    - Save Palettes:
                                </span>{" "}
                                Store favorite colour combinations in local
                                storage and download .png swatches.
                            </li>
                        </ul>
                        <hr className="mt-2 lg:mt-4 border-4 border-orange-500 text-orange-500 xl:hidden" />
                    </div>
                    <div className="hidden w-[45%] xl:flex flex-col items-center gap-4 m-auto">
                        <div className="group overflow-hidden rounded border-4 shadow-xl">
                            <a
                                href="https://palatable.netlify.app/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img
                                    src={Palatable}
                                    alt=""
                                    className="transition-all duration-1000 ease-in-out group-hover:scale-125"
                                />
                            </a>
                        </div>
                        <a
                            href="https://github.com/maxkatilius/palatable"
                            rel="noreferrer"
                            target="_blank"
                            className="w-72"
                        >
                            <div className="flex items-center justify-center gap-2 px-2 py-1 bg-orange-500 font-bold text-white rounded shadow-lg hover:bg-orange-400">
                                <GitHub className="h-6 w-6" />
                                <p>GITHUB REPO</p>
                            </div>
                        </a>
                        <a
                            href="https://palatable.netlify.app/"
                            rel="noreferrer"
                            target="_blank"
                            className="w-72"
                        >
                            <div className="flex items-center justify-center gap-2 px-2 py-1 bg-orange-500 font-bold text-white rounded shadow-lg hover:bg-orange-400">
                                <Eye className="h-6 w-6" />
                                <p>LIVE DEMO</p>
                            </div>
                        </a>
                    </div>
                </div>
                <hr className="hidden xl:block w-full border-4 border-orange-500" />
                <div className="flex items-start justify-center gap-10">
                    <div className="flex flex-col gap-4 xl:w-1/2 xl:gap-10 md:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.35rem]">
                        <h3 className="text-center font-bold text-[1.5rem] md:text-[1.8rem] lg:text-[1.9rem] xl:text-[2rem] py-1">
                        <a 
                                href="https://clockwise-mk.netlify.app/"
                                rel="noreferrer"
                                target="_blank"
                                className="relative group inline-block tracking-wide hover:text-blue-800 transition-all duration-500"
                            >
                                CLOCKWISE
                                <span className="absolute -bottom-1 left-0 h-1 w-0 bg-blue-800 transition-all duration-600 ease-in-out group-hover:w-full"></span>
                            </a>
                        </h3>
                        <div className="group overflow-hidden rounded border-4 xl:hidden">
                            <a
                                href="https://clockwise-mk.netlify.app/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img
                                    src={Clockwise}
                                    alt=""
                                    className="transition-all duration-1000 ease-in-out group-hover:scale-125"
                                />
                            </a>
                        </div>
                        <a
                            href="https://github.com/maxkatilius/clockwise"
                            rel="noreferrer"
                            target="_blank"
                            className="xl:hidden"
                        >
                            <div className="flex items-center justify-center gap-2 px-2 py-1 bg-orange-500 font-bold text-white rounded shadow-lg hover:bg-orange-400">
                                <GitHub className="h-6 w-6" />
                                <p>GITHUB REPO</p>
                            </div>
                        </a>
                        <a
                            href="https://clockwise-mk.netlify.app/"
                            rel="noreferrer"
                            target="_blank"
                            className="xl:hidden"
                        >
                            <div className="flex items-center justify-center gap-2 px-2 py-1 bg-orange-500 font-bold text-white rounded shadow-lg hover:bg-orange-400">
                                <Eye className="h-6 w-6" />
                                <p>LIVE DEMO</p>
                            </div>
                        </a>
                        <p className="md:pt-2 lg:pt-4">
                            <span className="font-semibold tracking-wide">CLOCKWISE </span> 
                            is a modern time zone converter designed to help users easily 
                            view and compare times across multiple global locations. 
                            Whether you're coordinating international business meetings 
                            or simply trying to stay connected with loved ones abroad, 
                            Clockwise provides a streamlined solution for managing time 
                            across time zones — anytime, anywhere.
                        </p>
                        <p className="mt-1">
                            <span className="tracking-wide font-semibold">Key Features:</span>
                        </p>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <span className="font-bold">
                                    - Live and Manual Time Modes:
                                </span>{" "}
                                Toggle between real-time updates or manually set a custom 
                                time to plan future events. Time conversions update instantly 
                                across all selected locations.
                            </li>
                            <li>
                                <span className="font-bold">
                                    - Location Selection & Auto-Detection:
                                </span>{" "}
                                Choose from a wide range of global cities or 
                                use your current location for quick comparisons 
                                and accurate results.
                            </li>
                        </ul>
                        <hr className="mt-2 lg:mt-4 border-4 border-orange-500 text-orange-500 xl:hidden" />
                    </div>
                    <div className="hidden w-[45%] xl:flex flex-col items-center gap-4 m-auto">
                        <div className="group overflow-hidden rounded border-4 shadow-xl">
                            <a
                                href="https://clockwise-mk.netlify.app/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img
                                    src={Clockwise}
                                    alt=""
                                    className="transition-all duration-1000 ease-in-out group-hover:scale-125"
                                />
                            </a>
                        </div>
                        <a
                            href="https://github.com/maxkatilius/clockwise"
                            rel="noreferrer"
                            target="_blank"
                            className="w-72"
                        >
                            <div className="flex items-center justify-center gap-2 px-2 py-1 bg-orange-500 font-bold text-white rounded shadow-lg hover:bg-orange-400">
                                <GitHub className="h-6 w-6" />
                                <p>GITHUB REPO</p>
                            </div>
                        </a>
                        <a
                            href="https://clockwise-mk.netlify.app/"
                            rel="noreferrer"
                            target="_blank"
                            className="w-72"
                        >
                            <div className="flex items-center justify-center gap-2 px-2 py-1 bg-orange-500 font-bold text-white rounded shadow-lg hover:bg-orange-400">
                                <Eye className="h-6 w-6" />
                                <p>LIVE DEMO</p>
                            </div>
                        </a>
                    </div>
                </div>
                <hr className="hidden xl:block w-full border-4 border-orange-500" />
                <div className="mb-10 flex items-start justify-center gap-10">
                    <div className="flex flex-col gap-4 xl:gap-10 xl:w-1/2 md:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.35rem]">
                        <h3 className="text-center font-bold text-[1.5rem] md:text-[1.8rem] lg:text-[1.9rem] xl:text-[2rem] tracking-wide py-1">
                            <a 
                                href="https://crocodile-mk.netlify.app/"
                                rel="noreferrer"
                                target="_blank"
                                className="relative group inline-block tracking-wide hover:text-[#0B6E4F] transition-all duration-500"
                            >
                                CROCODILE
                                <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#0B6E4F] transition-all duration-600 ease-in-out group-hover:w-full"></span>
                            </a>
                        </h3>
                        <div className="group overflow-hidden rounded border-4 xl:hidden">
                            <a
                                href="https://crocodile-mk.netlify.app/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img
                                    src={Crocodile}
                                    alt=""
                                    className="transition-all duration-1000 ease-in-out group-hover:scale-125"
                                />
                            </a>
                        </div>
                        <a
                            href="https://github.com/maxkatilius/croc"
                            rel="noreferrer"
                            target="_blank"
                            className="xl:hidden"
                        >
                            <div className="flex items-center justify-center gap-2 px-2 py-1 bg-orange-500 font-bold text-white rounded shadow-lg hover:bg-orange-400">
                                <GitHub className="h-6 w-6" />
                                <p>GITHUB REPO</p>
                            </div>
                        </a>
                        <a
                            href="https://crocodile-mk.netlify.app/"
                            rel="noreferrer"
                            target="_blank"
                            className="xl:hidden"
                        >
                            <div className="flex items-center justify-center gap-2 px-2 py-1 bg-orange-500 font-bold text-white rounded shadow-lg hover:bg-orange-400">
                                <Eye className="h-6 w-6" />
                                <p>LIVE DEMO</p>
                            </div>
                        </a>
                        <p className="md:pt-2 lg:pt-4">
                            <span className="font-semibold tracking-wide">CROCODILE </span>  
                            is the official mock website for Australia's newest and most 
                            exciting card game. This fully responsive site showcases the 
                            game's origin story, offers an interactive "How to Play" section 
                            with live animations, and simulates a seamless e-commerce experience 
                            through a modern front-end and a robust back-end architecture.
                        </p>
                        <p>
                            <span className="tracking-wide">CROCODILE</span> is a{" "}
                            <span className="font-bold text-orange-500">
                                full-stack project
                            </span>{" "}
                            utilising the following technologies:
                        </p>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <span className="font-bold">- Frontend:</span>{" "}
                                React and Tailwind CSS
                            </li>
                            <li>
                                <span className="font-bold">- Backend:</span>{" "}
                                ...
                            </li>
                            <li>
                                <span className="font-bold">- Deployment:</span>{" "}
                                ...
                            </li>
                            <li>
                                <span className="font-bold">
                                    - State Management:
                                </span>{" "}
                                ...
                            </li>
                            <li>
                                <span className="font-bold">
                                    - Mock Product Data:
                                </span>{" "}
                                REST API.
                            </li>
                        </ul>
                    </div>
                    <div className="hidden w-[45%] xl:flex flex-col items-center gap-4 m-auto">
                        <div className="group overflow-hidden rounded border-4 shadow-xl">
                            <a
                                href="https://crocodile-mk.netlify.app/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img
                                    src={Crocodile}
                                    alt=""
                                    className="transition-all duration-1000 ease-in-out group-hover:scale-125"
                                />
                            </a>
                        </div>
                        <a
                            href="https://github.com/maxkatilius/croc"
                            rel="noreferrer"
                            target="_blank"
                            className="w-72"
                        >
                            <div className="flex items-center justify-center gap-2 px-2 py-1 bg-orange-500 font-bold text-white rounded shadow-lg hover:bg-orange-400">
                                <GitHub className="h-6 w-6" />
                                <p>GITHUB REPO</p>
                            </div>
                        </a>
                        <a
                            href="https://crocodile-mk.netlify.app/"
                            rel="noreferrer"
                            target="_blank"
                            className="w-72"
                        >
                            <div className="flex items-center justify-center gap-2 px-2 py-1 bg-orange-500 font-bold text-white rounded shadow-lg hover:bg-orange-400">
                                <Eye className="h-6 w-6" />
                                <p>LIVE DEMO</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
