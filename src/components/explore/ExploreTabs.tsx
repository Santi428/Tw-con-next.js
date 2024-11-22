"use client"
import { TrendingRes } from "@/types/hash.types"
import { UsuariosParaMostrarEnExplorar } from "@/types/userExplore.types"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import MessageHashtag from "../messages/MessageHashtag"
import UsersList from "../users/UsersList"
import MessageHashtagList from "../messages/MessageHashtagList"



type ExploreTabsProps = {
    hashtags: TrendingRes,
    users: UsuariosParaMostrarEnExplorar
    initialTab?: string
}

enum TabView {
    HASHTAGS, USERS
}

const ExploreTabs = ({hashtags, users, initialTab}: ExploreTabsProps) => {

    const searchParams = useSearchParams()

    const [tab, setTab] = useState<TabView>(initialTab ? TabView[initialTab as keyof typeof TabView] : TabView.HASHTAGS)

    useEffect(() => {
        const type = searchParams.get('type')
        
        setTab(type ? TabView[type as keyof typeof TabView] : tab)
    }, [searchParams, tab])

  return (
    <>
        <div className="flex justify-evenly mb-4">
            <Link href='/explore?type=HASHTAGS'>
                <div 
                    className={`cursor-pointer ${tab === TabView.HASHTAGS && 'border-b-4 border-blue-400'}`} 
                >
                    Hashtags
                </div>
            </Link>
            <Link href='/explore?type=USERS'>
                <div
                    className={`cursor-pointer ${tab === TabView.USERS && 'border-b-4 border-blue-400'}`}
                >
                
                    Usuarios
                </div>
            </Link>
        </div>
        <div>
            {tab === TabView.HASHTAGS && <MessageHashtagList initialHashtags={hashtags} />} 
            {tab === TabView.USERS && <UsersList initialUsers={users}/>}
        </div>
    </>
  )
}

export default ExploreTabs