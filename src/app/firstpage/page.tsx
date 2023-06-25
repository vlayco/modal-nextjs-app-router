"use client"

import React from 'react'
import Modal from '@/components/Modal';
import useModal from '@/hooks/useModal';

const FirstPage = () => {
  const {openModal, handleOpenModal} = useModal();
  return (
      <main className='flex min-h-screen flex-col items-center justify-around bg-cyan-950'>
        <div className='flex flex-col space-y-3 text-center p-6'>
          <p className='font-bold text-7xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-blue-600'>Some really nice header text</p>
          <p className='text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-yellow-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae? Nulla, laudantium? Adipisci molestias sed exercitationem! Optio ab magni laboriosam praesentium necessitatibus aperiam voluptate sit.</p>
        </div>
  
        <div className='flex flex-row items-center space-x-3'>
          <p className='text-yellow-600'>Open the first page modal &gt;&gt;&gt;</p>
  
          <button className='text-yellow-600 text-xl hover:bg-yellow-600 hover:text-emerald-950 transition-colors border rounded-md px-3 py-1.5 border-yellow-600' onClick={handleOpenModal}>Open</button>
        </div>
        <Modal visible={openModal} close={handleOpenModal}>
          <p className='text-5xl'>This is a modal component</p>
        </Modal>
      </main>
  )
}

export default FirstPage
