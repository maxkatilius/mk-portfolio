import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <footer 
      className="
        flex items-center justify-center gap-[0.5rem]
        p-[1.6em] 2xl:p-[1.3em]
        text-[0.8rem] sm:text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] tracking-wide text-center text-white
      bg-gray-900"
    >
      <p>
        max.katilius@gmail.com
      </p>
      <div className="flex justify-center items-center 2xl:items-baseline gap-[0.3em] sm:gap-[0.3em] text-[1.3rem] sm:text-[1.8rem] lg:text-[2rem] 2xl:text-[2.7rem]">
        <a 
          className="hidden sm:inline-block"
          href="https://www.linkedin.com/in/max-katilius/">
          <TiSocialLinkedin />
        </a>
        <a
          className="hidden sm:inline-block" 
          href="https://github.com/maxkatilius">
          <IoLogoGithub />
        </a>
        <div className="ml-1">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 sm:h-8 sm:w-8 2xl:h-10 2xl:w-10"
          >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
            </svg>
          </div>
        </div>
        <p>
          +61 411 318 897
        </p>
    </footer>
  )
}

export default Footer