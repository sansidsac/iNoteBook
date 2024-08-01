import React from 'react'

const Alert = ({message="Alerting!!!"}) => {
  return (
    <div>
        <div className="alert alert-dark" role="alert">
  {message}
</div>
    </div>
  )
}

export default Alert