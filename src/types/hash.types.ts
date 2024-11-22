import { PaginationType } from "./pagination.types"

export type TrendingHashtag = {
    hash: string
    count: number
}

export type TrendingRes = {
    pagination: PaginationType
    content: TrendingHashtag[]
}