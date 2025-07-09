const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-2 p-2">
        <a
          className="mr-auto hidden text-2xl lg:block xl:ml-[5%]"
          href=""
        >
          <li>MAX KATILIUS</li>
        </a>
        <a>
          <li>ABOUT</li>
        </a>
        <a>
          <li>PROJECTS</li>
        </a>
        <a>
          <li>MY CV</li>
        </a>
      </ul>
    </nav>
  )
}

export default Navbar