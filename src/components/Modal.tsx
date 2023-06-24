"use client"

import React from 'react'

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({visible, onClose, children}: ModalProps) => {
  if (!visible) return null;

  return (
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm' onClick={onClose}>
      <div className='flex flex-col w-fit'>
        <button className='place-self-end text-white' onClick={onClose}>close</button>
        <div className='bg-white py-4 px-8 rounded-md'>{children}</div>
      </div>
    </div>
  )
}

export default Modal
