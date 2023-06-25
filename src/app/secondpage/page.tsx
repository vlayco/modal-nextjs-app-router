"use client"

import React from 'react'
import Modal from '@/components/Modal'
import { useModalContext } from '../context/modal-store';

const SecondPage = () => {
  const {openModal, handleOpenModal} = useModalContext();
  
  return (
    <main className='flex min-h-screen flex-col items-center justify-around bg-cyan-950'>
      <div className='flex flex-col space-y-3 text-center p-6'>
        <p className='font-bold text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-700'>Really awesome stuff here, I swear!</p>
        <p className='text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae? Nulla, laudantium? Adipisci molestias sed exercitationem! Optio ab magni laboriosam praesentium necessitatibus aperiam voluptate sit.</p>
      </div>

      <div className='flex flex-row items-center space-x-3'>
        <p className='text-blue-300'>Open the second page modal &gt;&gt;&gt;</p>

        <button className='text-blue-300 text-xl hover:bg-blue-300 hover:text-emerald-950 transition-colors border rounded-md px-3 py-1.5 border-blue-300' onClick={handleOpenModal}>Open</button>
      </div>
      <Modal visible={openModal} close={handleOpenModal}>
        <p className='text-5xl'>A modal!</p>
        <p className='text=2xl'>Page two</p>
      </Modal>
    </main>
  )
}

export default SecondPage
