import React from 'react'
import { MdInsertDriveFile } from "react-icons/md";

const Home = () => {
  return (
    <>
    <div className='max-w-screen-2xl mx-auto container px-6 py-3 md:px-40'>
        <div className='flex h-screen items-center justify-center'>
            <div className='border-2 border-dashed px-4 py-2 md:px-8 md:py-6 border-indigo-500 rounded-lg shadow-lg h-18'>
                <h1 className='text-3xl font-bold text-center mb-4'>Convert Word File TO PDF</h1>
                <p className='text-sm text-center mb-5'>Easily convert Word documents to PDF format in a very easy way</p>
            
            <div className='flex flex-col items-center space-y-4'>
                <input type="file" accept='.doc,.docx' className='hidden' id="FileInput" />
                <label htmlFor='FileInput' className='w-full flex items-center justify-center px-4 py-6 bg-gray-200 text-gray-800 rounded-lg shadow-lg cursor-pointer border-blue-300 hover:bg-blue-800'><MdInsertDriveFile />Choose File</label>
                <button>Convert</button>

            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home