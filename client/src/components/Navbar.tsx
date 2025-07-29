import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-6">
      <div className="flex justify-center gap-10 text-3xl font-bold  text-blue-700 mb-4">
        <Link to="/">EventApp</Link>
        <Link to="/events">Events</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}

export default Navbar
