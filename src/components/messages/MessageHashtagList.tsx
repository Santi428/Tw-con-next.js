'use client'
import exploreApi from "@/services/explore/explore.service"
import { TrendingHashtag, TrendingRes } from "@/types/hash.types"
import { PaginationType } from "@/types/pagination.types"
import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import MessageHashtag from "./MessageHashtag"

type MessageHashtagListProps = {
    initialHashtags: TrendingRes
}

const MessageHashtagList = ({initialHashtags}: MessageHashtagListProps) => {

    const [page, setPage] = useState<PaginationType>(initialHashtags.pagination)

    const [hashtags, setHashtags] = useState<TrendingHashtag[]>(initialHashtags.content)


    const fetchData = async () => {
        const pageNumber = page.page + 1
        const response = await exploreApi.getTrendingHashtags(pageNumber, 10)
        // setHashtags([...hashtags, response.content])
        setHashtags(response.content)
        setPage(response.pagination)
    }

    const refresh = async () => {
        const response = await exploreApi.getTrendingHashtags(0, 10)
        // setHashtags([...hashtags, response.content])
        setHashtags(response.content)
        setPage(response.pagination)
    }

  return(
    <InfiniteScroll
        dataLength={hashtags.length} 
        next={fetchData}
        hasMore={!page.last}
        loader={<h4>Cargando mas mensajes...</h4>}
        endMessage={
            <p style={{ textAlign: 'center' }}>
                <b>Llegaste al final de las Tendencias!</b>
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
        {hashtags.map((i, index) => <MessageHashtag key={index} hash={i}/>)} 
    </InfiniteScroll>
  )
}

export default MessageHashtagList