import Link from "next/link"
import PostsCounter from "../counters/PostsCounter"
import { TrendingHashtag } from "@/types/hash.types"


type ExploreTrendingProps = {
    hashes: TrendingHashtag[]
}

const ExploreTrending = ({hashes}: ExploreTrendingProps) => {

    if(!hashes || hashes.length === 0) return <></>

    


  return (
    <>
        <div className="bg-gray-200 rounded-lg px-8 py-4" style={{minWidth: 250}}>
            <h2 className="mb-2">Trending</h2>
            {hashes.slice(0,2).map((i, index) => 
                <div key={index} className="mb-4">
                    <Link href={`/mensajes?query=${i.hash}&type=hash`}>
                        <h4 className="font-semibold cursor-pointer p-1">{i.hash}</h4>
                    </Link>
                    <div className="px-1">
                        <PostsCounter count={i.count}/>
                    </div>
                </div>
            )}
            {hashes.length > 2 && 
            <Link href='/explorar?type=hash'>
                <div className="text-center link-primary">
                    Ver más
                </div>
            </Link>
            }
        </div>
    </>
  )
}

export default ExploreTrending