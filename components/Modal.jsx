import React from 'react'

export default function Modal({ visible, setVisible }) {


    if (!visible) return null;

    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop:blur-sm flex justify-center items-center z-50'>
            <div className='flex flex-col bg-white p-3 rounded-2xl'>
                <div className='bg-white p-3 flex'>
                    Your message has been sent successfully
                </div>
                <div className='text-center'>
                    <button className='p-3' onClick={() => setVisible(false)}>ok</button>
                </div>

            </div>
        </div>
    )
}
