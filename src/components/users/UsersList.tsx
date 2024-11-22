'use client'
import exploreApi from "@/services/explore/explore.service"
import { PaginationType } from "@/types/pagination.types"
import { Content, UsuariosParaMostrarEnExplorar } from "@/types/userExplore.types"
import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import UserCard, { UserCardLayout } from "./UserCard"

type UsersListProps = {
    initialUsers: UsuariosParaMostrarEnExplorar
}

const UsersList = ({initialUsers}: UsersListProps) => {

    const [page, setPage] = useState<PaginationType>(initialUsers.pagination)

    const [users, setUsers] = useState<Content[]>(initialUsers.content)



    const fetchData = async () => {
        const pageNumber = page.page
        const response = await exploreApi.getFollowRecomendationsPrueba(pageNumber, 7)
        // setUsers([...users, response.content])
        setUsers(response.content)
        setPage(response.pagination)
    }

    const refresh = async () => {
        const response = await exploreApi.getFollowRecomendationsPrueba(0, 5)
        // setUsers([...users, response.content])
        setUsers(response.content)
        setPage(response.pagination)
    }

  return(
    <InfiniteScroll
        dataLength={users.length} 
        next={fetchData}
        hasMore={!page.last}
        loader={<h4>Cargando mas mensajes...</h4>}
        endMessage={
            <p style={{ textAlign: 'center' }}>
                <b>Llegaste al final de los usuarios!</b>
            </p>
        }
        refreshFunction={refresh}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
            <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
            <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        }
    > 
        {users.map((i, index) => <UserCard key={index} user={i} layout={UserCardLayout.HORIZONTAL}/>)} 
    </InfiniteScroll>
  )
}

export default UsersList