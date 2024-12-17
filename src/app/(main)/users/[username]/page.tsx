import UserPageContainer from "@/components/users/UserPageContainer"





const page = async ({params}: {params: {username: string}}) => {

  return (
    <UserPageContainer username={params.username}/>
  )
}

export default page