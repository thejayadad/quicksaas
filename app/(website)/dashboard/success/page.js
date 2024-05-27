import React from 'react'
import Box from '../../_components/box'
import Link from 'next/link'

const SuccessPage = () => {
  return (
    <section className='py-4'>
        <Box>
            <div className='flex mt-24  justify-center h-screen'>
               <div className='flex flex-col space-y-4'>
               <p>Thanks For Joining!!</p>
                <Link href={'/dashboard'}>Back To Dashboard</Link>
               </div>
            </div>
        </Box>
    </section>
  )
}

export default SuccessPage