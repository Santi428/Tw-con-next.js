import ExploreTabs from "@/components/explore/ExploreTabs"
import exploreApi from "@/services/explore/explore.service"


const ExplorePage = async ({searchParams}: {searchParams?: {[key: string]: string | undefined}}) => {


    const hashesPromise = await exploreApi.getTrendingHashtags(0, 10)
    const usersPromise = await exploreApi.getFollowRecomendationsPrueba(0, 5)

    const [hashes, users] = await Promise.all([hashesPromise, usersPromise])

  return (
    <>
        <main className="flex flex-col bg-gray-100 p-8">
            <section className="flex flex-col mb-8">
                <ExploreTabs hashtags={hashes} users={users} initialTab={searchParams?.type} />
            </section>
        </main>
    </>
  )
}

export default ExplorePage