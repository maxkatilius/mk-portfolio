import Down from "../assets/svgFunctions/Down"
import Cat from "./Cat"

const Hero = () => {
    return (
        <section
            id="hero"
            className="
                min-h-[calc(100vh-5rem)]
                sm:relative flex flex-col sm:flex-row sm:justify-between items-center sm:items-stretch xl:gap-8
                pt-8 pb-4 px-10 sm:pb-14 md:px-14 xl:px-20
        ">
            <div
                className="
                    sm:w-[45%] grow sm:flex-none flex flex-col justify-between sm:justify-center items-center sm:gap-10 xl:gap-14
                    leading-relaxed text-gray-800
            ">
                <h1 className="text-center sm:self-start text-2xl lg:text-4xl 2xl:text-[3rem] text-gray-800">
                    <span className="border-b-8 border-orange-500 pb-2 font-semibold tracking-wide">
                        Hi, I'm Max 👋
                    </span>
                </h1>
                <div>
                    <Cat className="sm:hidden w-full h-auto mb-2" />
                    <p className="tracking-wide lg:text-xl 2xl:text-[1.7rem] lg:leading-8 xl:leading-loose">
                        I'm a Melbourne-based{" "}
                        <span className="text-orange-500">software developer</span>{" "}
                        who thrives on challenges and loves creating innovative
                        solutions. My portfolio reflects not only my skillset, but
                        also my{" "}
                        <span className="text-orange-500">
                            passion for continuous learning,
                        </span>{" "}
                        personal growth, and making a meaningful impact in the world
                        of software development.
                    </p>
                </div>
                <a href="#about" className="self-center sm:absolute sm:bottom-3 xl:bottom-5 sm:left-1/2 sm:-translate-x-1/2">
                    <Down color="stroke-orange-500"/>
                </a>
            </div>
            <Cat className="hidden sm:block w-[45%] xl:w-[40%] xl:pb-2 h-auto my-auto"/>
        </section>
    )
}

export default Hero
