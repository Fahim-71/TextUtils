import React from 'react'

export default function Alert(props) {
  const getAlertMessage = () => {
    if (typeof props.alert === 'string') {
      return props.alert
    } else if (props.alert && props.alert.msg) {
      return props.alert.msg
    }
    return ''
  }

  const message = getAlertMessage()
  
  if (!message) {
    return null
  }

  return (
    <div className="container mt-3">
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Alert!</strong> {message}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  )
}
