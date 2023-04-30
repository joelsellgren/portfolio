
const Navbar = () => {
  return (
    <div className="m-1 flex justify-evenly w-1/3">
        <a className="group transition duration-300" href="/">About
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-sky-50"></span>
        </a>
        <a className="group transition duration-300" href="/">Projects
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-sky-50"></span>
        </a>
        <a className="group transition duration-300" href="/">Contact
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-sky-50"></span>
        </a>
    </div>
  )
}

export default Navbar