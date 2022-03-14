import React from 'react'

function Button({children, isDisable, type, version}) {
  return (
    <button className={`style-button btn-disable-${version}`}  type={type} disabled={isDisable}>
      {children}
    </button>
  )
}

export default Button
