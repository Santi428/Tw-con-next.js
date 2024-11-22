import ExploreTrending from "@/components/explore/ExploreTrending"
import ExploreUsers from "@/components/explore/ExploreUsers"
import Menu from "@/components/menu/Menu"
import exploreApi from "@/services/explore/explore.service"
import Link from "next/link"
import { FC, PropsWithChildren } from "react"


const layout: FC<PropsWithChildren> = async ({children}) => {

  const hashesPromise = await exploreApi.getTrendingHashtags(0, 3)
  const usersPromise = await exploreApi.getFollowRecomendations(0, 4)

  const [hashes, users] = await Promise.all([hashesPromise, usersPromise])


  return <>
        <div className="w-full h-full grid grid-cols-12 gap-4 px-4">
          <div className="col-span-2">
            <Menu />
          </div>
          <main className="col-span-6">{children}</main>
          <footer className="col-span-4">
            <div className="mb-4">
              <ExploreTrending hashes={hashes.content} />
            </div>
            <ExploreUsers users={users.content}/>          
            <Link href='/faq/1'>
              <div className="link-primary mt-12 text-center">
                Preguntas Frecuentes
              </div>
            </Link>
          </footer>
        </div>
    </>
  
}

export default layout