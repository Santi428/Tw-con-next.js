import ExploreTrending from "@/components/explore/ExploreTrending"
import Menu from "@/components/menu/Menu"
import { FC, PropsWithChildren } from "react"


const layout: FC<PropsWithChildren>  = ({children}) => {
  return <>
        <div className="w-full h-full grid grid-cols-12">
          <div className="col-span-3">
            <Menu />
          </div>
          <main className="col-span-6">{children}</main>
          <footer className="col-span-3"><ExploreTrending hashes={[{hash: 'Hola HOla', count: 3}, {hash: 'Chau Chau', count: 1}]} /></footer>
        </div>
    </>
  
}

export default layout