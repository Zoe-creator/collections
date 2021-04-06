import React from 'react'

export default function Modal(props) {
  const { open, handleOpen, handleDelete } = props;
  return (
    <div className='modal-container' onClick={(e) => handleOpen(false)}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <button classname="cancel-delete" onClick={() => handleOpen(false)}>❎</button>
        <div className="delete-confirmed">
          <p className="delete-confirm-message">Are you sure?</p>
          <button onClick={() => {
            handleDelete(open)
            handleOpen(false)
          }}>✅</button>
        </div>

      </div>
    </div>
  )
}
