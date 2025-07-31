import Eye from "../assets/svgFunctions/Eye"
import GitHub from "../assets/svgFunctions/GitHub"
import Palatable from "../assets/palatable.png"
import Crocodile from "../assets/crocodile.png"
import Clockwise from "../assets/clockwise.png"

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
            <div className="flex flex-col items-center gap-4 xl:gap-16">
                <div className="flex flex-col gap-7">
                    <h2 className="mb-2 xl:mb-6 mx-auto lg:mt-2 xl:mt-5">
                        <span className="border-b-8 border-orange-500 pb-2 text-center text-2xl md:text-[2rem] xl:text-[2.4rem] font-semibold tracking-wide">
                            PROJECTS
                        </span>
                    </h2>
                    <p className="text-[0.95rem] sm:text-[1.05rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.35rem]">
                        Here is a selection of my recent projects, where I've
                        applied my ever-growing skillset to create practical and
                        engaging solutions.
                    </p>
                </div>
                <div className="mb-10 flex items-start justify-center gap-10">
                    <div className="flex flex-col gap-4 xl:gap--8 xl:w-1/2 md:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.35rem]">
                        <h3 className="text-center font-[500] text-[1.5rem] md:text-[1.8rem] lg:text-[1.9rem] xl:text-[2rem] tracking-wide py-1">
                            <a 
                                href="https://crocodile-mk.netlify.app/"
                                rel="noreferrer"
                                target="_blank"
                                className="relative group inline-block font-[Quicksand] tracking-widest hover:text-[#0B6E4F] transition-all duration-500"
                            >
                                CROCODILE
                                <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#0B6E4F] transition-all duration-600 ease-in-out group-hover:w-full"></span>
                                <span className="absolute -top-1 left-0 h-1 w-0 bg-[#0B6E4F] transition-all duration-600 ease-in-out group-hover:w-full"></span>
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
                                    className="transition-all duration-1000 ease-in-out group-hover:scale-110"
                                />
                            </a>
                        </div>
                        <a
                            href="https://github.com/maxkatilius/croc"
                            rel="noreferrer"
                            target="_blank"
                            className="xl:hidden"
                        >
                            <div className="flex items-center justify-center gap-2 px-2 py-2 bg-orange-500 font-bold text-white rounded shadow-lg hover:bg-orange-400">
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
                            <div className="flex items-center justify-center gap-2 px-2 py-2 bg-orange-500 font-bold text-white rounded shadow-lg hover:bg-orange-400">
                                <Eye className="h-6 w-6" />
                                <p>LIVE DEMO</p>
                            </div>
                        </a>
                        <p className="md:pt-2 lg:pt-4">
                            <span className="font-[500] font-[Quicksand] tracking-widest">CROCODILE </span>  
                            is the official mock website for Australia's newest and most 
                            exciting card game. This fully responsive site offers a user-friendly 
                            interface that highlights the game’s key features, origin story, 
                            rules and gameplay, while providing a seamless browsing experience.
                            Built with a modern frontend and robust backend architecture, 
                            it simulates an e-commerce platform showcasing product details 
                            and facilitates intuitive navigation for visitors.
                        </p>
                        <p className="">
                            <span className="font-[Quicksand] font-[500] tracking-widest">CROCODILE</span> is a{" "}
                            <span className="font-bold text-orange-500">
                                full-stack project
                            </span>{" "}
                            utilising the following technologies:
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <ul className="flex flex-col gap-4 w-[45%]">
                                <li>
                                    <span className="font-bold">Frontend</span>{" "}
                                    <ul>
                                        <li>
                                            React and Sass
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-bold">Backend</span>{" "}
                                    <ul>
                                        <li>
                                            Node.js with Express Server
                                        </li>
                                        <li>
                                            PostgreSQL Database
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="flex flex-col gap-4 w-[50%]">
                                <li>
                                    <span className="font-bold">Deployment</span>{" "}
                                    <ul>
                                        <li>
                                            Frontend: Netlify
                                        </li>
                                        <li>
                                            Server: Render
                                        </li>
                                        <li>
                                            Database: Supabase
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-bold">
                                        Mock Product Data
                                    </span>
                                    <ul>
                                        <li>
                                            REST API
                                        </li>
                                    </ul>
                                </li>
                            </ul>   
                        </div>
                    </div>
                    <div className="hidden w-[45%] xl:flex flex-col items-center gap-5 m-auto">
                        <div className="group overflow-hidden rounded border-4 shadow-xl">
                            <a
                                href="https://crocodile-mk.netlify.app/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img
                                    src={Crocodile}
                                    alt=""
                                    className="transition-all duration-1000 ease-in-out group-hover:scale-110"
                                />
                            </a>
                        </div>
                        <a
                            href="https://github.com/maxkatilius/croc"
                            rel="noreferrer"
                            target="_blank"
                            className="w-72"
                        >
                            <div className="flex items-center justify-center gap-2 px-2 py-2 mt-2 bg-orange-500 font-bold text-white rounded shadow-lg hover:bg-orange-400">
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
                            <div className="flex items-center justify-center gap-2 px-2 py-2 bg-orange-500 font-bold text-white rounded shadow-lg hover:bg-orange-400">
                                <Eye className="h-6 w-6" />
                                <p>LIVE DEMO</p>
                            </div>
                        </a>
                    </div>
                </div>
                <hr className="hidden xl:block w-full border-4 border-orange-500 -mb-4" />
                <div className="flex items-start justify-center gap-10">
                    <div className="flex flex-col gap-4 xl:gap-8 xl:w-1/2 md:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.35rem]">
                        <h3 className="text-center font-bold text-[1.5rem] md:text-[1.8rem] lg:text-[1.9rem] xl:text-[2rem]">
                        <a 
                            href="https://palatable.netlify.app/"
                            rel="noreferrer"
                            target="_blank"
                            className="relative group inline-block font-['M_PLUS_Rounded_1c'] font-[400] tracking-widest transition-colors duration-300"
                        >
                            <span className="relative z-10 bg-[linear-gradient(to_right,_#257DD0,_#ED5FC2,_#EFAD72,_#22C3A3)] bg-clip-text hover:text-transparent transition-all duration-500 ease-in-out">
                                palatable
                            </span>
                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[linear-gradient(to_right,_#257DD0,_#ED5FC2,_#EFAD72,_#22C3A3)] transition-all duration-700 ease-in-out group-hover:w-full"></span>
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
                                    className="transition-all duration-1000 ease-in-out group-hover:scale-110"
                                />
                            </a>
                        </div>
                        <a
                            href="https://github.com/maxkatilius/palatable"
                            rel="noreferrer"
                            target="_blank"
                            className="xl:hidden"
                        >
                            <div className="flex items-center justify-center gap-2 px-2 py-2 bg-orange-500 font-bold text-white rounded shadow-lg hover:bg-orange-400">
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
                            <div className="flex items-center justify-center gap-2 px-2 py-2 bg-orange-500 font-bold text-white rounded shadow-lg hover:bg-orange-400">
                                <Eye className="h-6 w-6" />
                                <p>LIVE DEMO</p>
                            </div>
                        </a>
                        <p className="md:pt-2 lg:pt-4 xl:pt-0">
                            <span className="font-semibold font-['M_PLUS_Rounded_1c'] tracking-widest">palatable </span> 
                            is an interactive color palette generator designed for designers 
                            and developers who want creative control over their colour schemes. 
                            With support for multiple colour modes, customizable generation logic, 
                            and persistent local storage, <span className="font-['M_PLUS_Rounded_1c'] tracking-widest">palatable </span>
                            offers a visually engaging and technically rich experience.
                        </p>
                        <p className="mt-1 xl:-mb-3">
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
                    <div className="hidden w-[45%] xl:flex flex-col items-center gap-5 m-auto">
                        <div className="group overflow-hidden rounded border-4 shadow-xl">
                            <a
                                href="https://palatable.netlify.app/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img
                                    src={Palatable}
                                    alt=""
                                    className="transition-all duration-1000 ease-in-out group-hover:scale-110"
                                />
                            </a>
                        </div>
                        <a
                            href="https://github.com/maxkatilius/palatable"
                            rel="noreferrer"
                            target="_blank"
                            className="w-72"
                        >
                            <div className="flex items-center justify-center gap-2 px-2 py-2 mt-2 bg-orange-500 font-bold text-white rounded shadow-lg hover:bg-orange-400">
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
                            <div className="flex items-center justify-center gap-2 px-2 py-2 bg-orange-500 font-bold text-white rounded shadow-lg hover:bg-orange-400">
                                <Eye className="h-6 w-6" />
                                <p>LIVE DEMO</p>
                            </div>
                        </a>
                    </div>
                </div>
                <hr className="hidden xl:block w-full border-4 border-orange-500 -mb-4" />
                <div className="flex items-start justify-center gap-10">
                    <div className="flex flex-col gap-4 xl:w-1/2 xl:gap-8 md:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.35rem]">
                        <h3 className="text-center font-bold text-[1.5rem] md:text-[1.8rem] lg:text-[1.9rem] xl:text-[2rem] py-1">
                        <a 
                                href="https://clockwise-mk.netlify.app/"
                                rel="noreferrer"
                                target="_blank"
                                className="relative group inline-block font-[Lato] font-[300] tracking-wide transition-all duration-500"
                            >
                                <span className="transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent">
                                    CLOCK<span className="font-bold">WISE</span>
                                </span>
                                <span className="absolute -bottom-1 left-0 h-1 w-0 bg-linear-to-r from-sky-200 to-blue-400 transition-all duration-600 ease-in-out group-hover:w-full"></span>
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
                                    className="transition-all duration-1000 ease-in-out group-hover:scale-110"
                                />
                            </a>
                        </div>
                        <a
                            href="https://github.com/maxkatilius/clockwise"
                            rel="noreferrer"
                            target="_blank"
                            className="xl:hidden"
                        >
                            <div className="flex items-center justify-center gap-2 px-2 py-2 bg-orange-500 font-bold text-white rounded shadow-lg hover:bg-orange-400">
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
                            <div className="flex items-center justify-center gap-2 px-2 py-2 bg-orange-500 font-bold text-white rounded shadow-lg hover:bg-orange-400">
                                <Eye className="h-6 w-6" />
                                <p>LIVE DEMO</p>
                            </div>
                        </a>
                        <p className="md:pt-2 lg:pt-4">
                            <span className="font-[Lato] tracking-wide">CLOCK<span className="font-bold">WISE </span></span> 
                            is a modern time zone converter designed to help users easily 
                            view and compare times across multiple global locations. 
                            Whether you're coordinating international business meetings 
                            or simply trying to stay connected with loved ones abroad, 
                            <span className="font-[Lato] tracking-wide"> CLOCK<span className="font-bold">WISE </span></span>
                            provides a streamlined solution for managing time across time 
                            zones — anytime, anywhere.
                        </p>
                        <p className="mt-1 xl:-mb-3">
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
                    <div className="hidden w-[45%] xl:flex flex-col items-center gap-5 m-auto">
                        <div className="group overflow-hidden rounded border-4 shadow-xl">
                            <a
                                href="https://clockwise-mk.netlify.app/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img
                                    src={Clockwise}
                                    alt=""
                                    className="transition-all duration-1000 ease-in-out group-hover:scale-110"
                                />
                            </a>
                        </div>
                        <a
                            href="https://github.com/maxkatilius/clockwise"
                            rel="noreferrer"
                            target="_blank"
                            className="w-72"
                        >
                            <div className="flex items-center justify-center gap-2 px-2 py-2 mt-2 bg-orange-500 font-bold text-white rounded shadow-lg hover:bg-orange-400">
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
                            <div className="flex items-center justify-center gap-2 px-2 py-2 bg-orange-500 font-bold text-white rounded shadow-lg hover:bg-orange-400">
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
