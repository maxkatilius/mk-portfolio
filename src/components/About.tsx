import Down from "../assets/svgFunctions/Down"

const About = () => {
    return (
        <section
            id="about"
            className="
                sm:relative p-8 sm:px-14 lg:px-18
                min-h-[calc(100vh-5rem)] flex flex-col justify-between gap-12 sm:gap-14 lg:gap-18 xl:gap-10 2xl:gap-12
                bg-gray-900 text-gray-200
                scroll-mt-[5rem]
        ">
            <h2 className="mb-2 mx-auto lg:mt-2 xl:mt-4">
                <span className="border-b-8 border-orange-500 pb-2 text-center text-2xl md:text-[2rem] xl:text-[2.4rem] font-semibold tracking-wide">
                    ABOUT
                </span>
            </h2>
            <div className="flex flex-col items-center gap-6 text-[0.95rem] sm:text-[1.05rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.2rem] xl:max-w-[70%] xl:m-auto">
                <p>
                    As a self-taught developer, I have cultivated a strong
                    foundation in problem-solving and a keen interest in
                    expanding my knowledge.{" "}
                    <span className="text-orange-500">Working with React,</span>{" "}
                    I have gained valuable hands-on experience building projects
                    using this versatile framework.
                </p>
                <p>
                    Prepared to launch my professional career in the tech
                    sector, I am actively seeking opportunities that will
                    facilitate my growth and enable me to{" "}
                    <span className="text-orange-500">
                        make meaningful contributions
                    </span>{" "}
                    to the field of software development.
                </p>
                <p>
                    Equipped with a solid foundation in various technologies,
                    I'm enthusiastic about{" "}
                    <span className="text-orange-500">
                        embracing novel challenges
                    </span>{" "}
                    and staying ahead in the ever-changing landscape of software
                    development.
                </p>
            </div>
            <div className="flex flex-col md:items-center gap-4 sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.25rem] xl:text-[1.25rem]">
                <h3 className="font-semibold">
                    Technologies I Love Working With:
                </h3>
                <div className="flex gap-8">
                    <ul>
                        <li>- JavaScript</li>
                        <li>- TypeScript</li>
                        <li>- React</li>
                        <li>- HTML</li>
                        <li>- CSS</li>
                        <li>- Tailwind</li>
                    </ul>
                    <ul>
                        <li>- Sass</li>
                        <li>- Node.js</li>
                        <li>- Git</li>
                        <li>- Figma</li>
                        <li>- Worpress</li>
                        <li>- Ubuntu</li>
                    </ul>
                </div>
            </div>
            <a href="#projects" className="self-center">
                <Down color="stroke-orange-500" />
            </a>
        </section>
    )
}

export default About