import { TrendingUserType } from "@/types/user.types"
import Image from "next/image"
import Link from "next/link"
import UserCard, { UserCardLayout } from "../users/UserCard"

type ExploreUsersProps = {
    users: TrendingUserType[]
}


const ExploreUsers = ({users}: ExploreUsersProps) => {

    if (!users || users.length === 0) <></>


  return (
    <>
        <div className="bg-gray-200 rounded-lg px-8 py-4" style={{minWidth: 250}}>
            <h2 className="mb-2">A quien seguir</h2>
            {users.slice(0, 4).map((i, index) => 
                <UserCard key={index} user={i} layout={UserCardLayout.VERTICAL}/>
            )}

            {users.length > 4 && 
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

export default ExploreUsers