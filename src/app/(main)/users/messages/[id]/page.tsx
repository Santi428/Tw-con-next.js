

const page = ({params}: {params: {id: String}}) => {
  return (
    <div>Mesasage N°{params.id}</div>
  )
}

export default page