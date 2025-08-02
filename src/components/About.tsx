import Down from "../assets/svgFunctions/Down"

const About = () => {
    return (
        <section
            id="about"
            className="
                sm:relative px-8 py-6 sm:px-14 lg:px-18
                 min-h-[calc(100dvh-5rem)] xl:min-h-[calc(100dvh-6rem] flex flex-col justify-between gap-12 sm:gap-14 lg:gap-18 xl:gap-10 2xl:gap-12
                bg-gray-900 text-gray-200
                scroll-mt-[5rem] xl:scroll-mt-[6rem]
        ">
            <h2 className="mx-auto lg:mt-2 xl:mt-4">
                <span className="border-b-8 border-orange-500 pb-2 text-center text-2xl md:text-[2rem] xl:text-[2.4rem] font-semibold tracking-wide">
                    ABOUT
                </span>
            </h2>
            <div className="flex flex-col items-center gap-6 text-[0.95rem] sm:text-[1.05rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.2rem] xl:max-w-[70%] xl:m-auto">
                <p>
                    As a former structural engineer, I developed a strong
                    aptitude for problem-solving and developing practical, 
                    real-world solutions.
                </p>
                <p>
                    Over the past few years, I have independently 
                    upskilled in software development through hands-on projects 
                    and online courses — a journey driven by curiosity and 
                    a deep interest in technology.
                </p>
                <p>
                    I’m now studying a Master's in Information Technology with
                     a specialisation in Artificial Intelligence, combining my 
                     self-directed learning with formal study to strengthen 
                     my technical foundation.
                </p>
                <p>
                    <span className="text-orange-500">My focus lies in frontend 
                    development,</span> {" "} where I enjoy creating responsive, 
                    accessible web applications that deliver a smooth user
                    experience and feature polished, intuitive interfaces built 
                    with <span className="text-orange-500">React.</span>
                </p>
                <p>
                    Equipped with a solid foundation in various technologies,
                    I'm excited to apply my skills in real-world projects. I am 
                    eagerly seeking opportunities where I can grow as a developer 
                    and make<span className="text-orange-500">{" "}meaningful 
                    contributions</span> {" "} to innovative digital experiences.
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
                        <li>- CSS</li>
                        <li>- Sass</li>
                        <li>- Tailwind</li>
                    </ul>
                    <ul>
                        <li>- Python</li>
                        <li>- Node.js</li>
                        <li>- SQL</li>
                        <li>- Git</li>
                        <li>- Figma</li>
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