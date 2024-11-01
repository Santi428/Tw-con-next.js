import Link from "next/link"
import { FC, PropsWithChildren } from "react"


const layout: FC<PropsWithChildren>  = ({children}) => {
  return <>
        <header className="flex justify-between mb-4 px-8 py-4 bg-gray-500">
          <div>
            logo
          </div>
          <div className="flex ">
            <div>
              <Link href='/users'>Usuarios</Link>
            </div>
            <div className="ml-4">
              <Link href='/users/messages'>Mensajes</Link>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer>Footer</footer>
    </>
  
}

export default layout