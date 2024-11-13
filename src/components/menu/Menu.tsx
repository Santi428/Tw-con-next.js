import Link from "next/link"

const Menu = () => {


  return (
    <nav className="flex flex-col w-full">
        <ul className="mb-4 w-full">
            <li className="text-2xl w-full hover:bg-blue-400 hover:text-white">
                <Link href='/users' className="p-2 w-full flex">Inicio</Link>
            </li>
            <li className="text-2xl w-full hover:bg-blue-400 hover:text-white">
                <Link href={''} className="p-2 w-full flex">Explorar</Link>
            </li>
            <li className="text-2xl w-full hover:bg-blue-400 hover:text-white">
                <Link href={''} className="p-2 w-full flex">Perfil</Link>
            </li>
        </ul>
        <button className="button-primary uppercase font-semibold">Postear</button>
    </nav>
  )
}

export default Menu