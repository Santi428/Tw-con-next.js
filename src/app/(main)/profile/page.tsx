import UserPageContainer from "@/components/users/UserPageContainer";
import authApi from "@/services/auth/auth.service";
import userApi from "@/services/users/users.service";
import { cookies, headers } from 'next/headers';



const ProfilePage = async () => {

  const accessToken = (await headers()).get('x-social-access-token') ?? ''

  const me = await userApi.getMe(accessToken)

  return <UserPageContainer username={me.username}/>
}

export default ProfilePage