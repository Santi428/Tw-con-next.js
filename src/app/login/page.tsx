import LoginForm from "@/components/auth/LoginForm"



const Page = () => {

  
    return (
      <div className="flex items-center w-full flex-col pt-4">
        <h2 className="mb-4 text-xl">Iniciar sesión en la red social</h2>
        <LoginForm />
      </div>
  )
}


export default Page