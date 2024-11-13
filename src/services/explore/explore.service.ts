import { TrendingRes } from "@/types/hash.types";
import { TrendingUserType, UserType } from "@/types/user.types";
import { httpGet } from "../common/http.service";
import { PageType } from "@/types/pagination.types";

class ExploreApi {
    getTrendingHashtags = async (page: number, size: number): Promise<TrendingRes> => 
        httpGet(`/public/explore/trending`, new URLSearchParams({page: `${page}`, size: `${size}`}))


    getFollowRecomendations = async (page: number, size: number): Promise<PageType<TrendingUserType>> => 
        httpGet(`/public/explore/follow-recommendations`, new URLSearchParams({page: `${page}`, size: `${size}`}))
}

const exploreApi = new ExploreApi()

export default exploreApi