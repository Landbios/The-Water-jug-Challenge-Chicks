

const Error = ({Errorbool,ErrorMessage}) => {
  return (
    <div className='Errorcont' style={{display: Errorbool ? 'flex' : 'none' }}>
            <p className='ErrorMessage'>{ErrorMessage}</p>
    </div>
  )
}

export default Error