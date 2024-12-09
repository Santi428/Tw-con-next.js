import Link from "next/link"

const Navbar = () => {
  return (
    <header className="w-full">
        <nav className="w-full bg-blue-500 text-white p-2 mb-2">
            <Link href='/'>
                <div className="px-4 py-4">
                    Logo
                </div>
            </Link>
        </nav>
    </header>
  )
}

export default Navbar