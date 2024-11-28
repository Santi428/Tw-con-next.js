
type PostCounterProps = {
  count: number
  onclick?: () => void
}

const RepliesCounter = ({count, onclick}: PostCounterProps) => {

    if(count === 0){
      return <div className="link-primary" onClick={onclick}>Se el primero en responder</div>
    }

    const label = count > 1 ? "Respuestas" : 'Respuesta'

  return (
    <div className="link-primary" onClick={onclick}>
        {count} {label}
    </div>
  )
}

export default RepliesCounter