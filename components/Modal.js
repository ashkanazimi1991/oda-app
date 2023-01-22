import React from 'react'

export const Modal = ({isVisible,onclose, children}) => {
    if (!isVisible) return null;

    const handleClose =(e) => {
        if(e.target.id === 'wrapper') onclose();
    }
  return (
    <div className='fixed md:pl-[20%] inset-0 z-20 bg-black bg-opacity-25 backdrop-blur-sm 
    flex justify-center items-center' id="wrapper" onClick={handleClose}>
        <div className='md:w-[800px] w-[100%] mx-auto flex flex-col '>
            <button className='text-white text-xl place-self-end' 
            onClick={() => onclose()}>X</button>

        <div className='bg-white p-2 rounded'>
            {children}
        </div>
        </div>

    </div>
  )
}

export default Modal
