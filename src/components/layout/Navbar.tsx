'use client'
import authApi from "@/services/auth/auth.service"
import Link from "next/link"
import { useRouter } from "next/navigation"

type NavbarProps = {
  loggedUsername?: string
}


const Navbar = ({loggedUsername}: NavbarProps) => {

  const router = useRouter()

  const logout = async () => {
    await authApi.logout()
    location.reload()
  }

  const redirect = (href: string) => {
    router.push('/' + href)
  }


  return (
    <header className="w-full">
        <nav className="flex justify-between w-full bg-blue-500 text-white p-2 mb-2">
            <Link href='/'>
                <div className="px-4 py-4">
                    Logo
                </div>
            </Link>

            
            {loggedUsername ? <div className="py-3">
                <button className="button-secondary" onClick={() => logout()}>Cerrar Sesión</button>
              </div>  : 
              <div className="py-3">
                <button className="button-secondary " onClick={() => redirect('login')}>Acceder</button>
                <button className="button-secondary" onClick={() => redirect('register')}>Registrarse</button>
              </div>
            }
            
        </nav>
    </header>
  )
}

export default Navbar