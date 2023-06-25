"use client"

import React from 'react'

type ModalProps = {
  visible: boolean;
  close: () => void;
  children: React.ReactNode;
}

const Modal = ({visible, close, children}: ModalProps) => {
  if (!visible) return null;

  const closeModal = (event: any) => {
    if(event.target.id === 'backdrop') close();
  }

  return (
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm' id='backdrop' onClick={closeModal}>
      <div className='flex flex-col w-fit'>
        <button className='place-self-end text-white' onClick={close}>close</button>
        <div className='bg-white py-4 px-8 rounded-md pointer-events-none'>{children}</div>
      </div>
    </div>
  )
}

export default Modal
