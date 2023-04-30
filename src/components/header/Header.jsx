import Navbar from "./navbar"
import Logo  from "./Logo"
import Branding from "./branding"


const Header = () => {
  return (
    <div className="bg-sky-950 h-20 flex justify-between items-center">
        <Logo />
        <Branding />
        <Navbar />
    </div>
  )
}

export default Header