const Header = () => {
  return (
    <>
      <header className="fixed top-0 h-[5rem] w-full flex items-center bg-white z-100">
        <nav className="w-full h-full flex items-center p-6 shadow-xl">
          <ul className="w-full flex items-center justify-evenly sm:justify-center sm:gap-28 md:gap-12 font-semibold text-gray-800">
            <a
              className="hidden md:block text-2xl xl:text-[1.7rem] mr-auto xl:ml-[1%]"
              href=""
              >
              <li>MAX KATILIUS</li>
            </a>
            <a className="group relative xl:text-[1.2rem] cursor-pointer" href="#about">
              <li>
                ABOUT
                <span className="absolute -bottom-1 left-0 h-1 w-0 bg-orange-500 transition-all group-hover:w-full"></span>
              </li>
            </a>
            <a className="group relative xl:text-[1.2rem] cursor-pointer" href="#projects">
              <li>
                PROJECTS
                <span className="absolute -bottom-1 left-0 h-1 w-0 bg-orange-500 transition-all group-hover:w-full"></span>
              </li>
            </a>
            <a 
              href="/max-katilius-cv.pdf"
              target="_blank"
              className="cursor-pointer xl:text-[1.2rem] rounded bg-orange-600 px-2 py-1 text-white shadow-lg hover:bg-orange-500 sm:px-6 xl:mr-[1%]"
              >
              <li>MY CV</li>
            </a>
          </ul>
        </nav>
      </header>
      <div className="h-[5rem]" />
    </>
  )
}

export default Header