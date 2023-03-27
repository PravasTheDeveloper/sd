import React from 'react'
import {BsLightningCharge} from "react-icons/bs"

export default function AboutScreen() {
    return (
        <>
            <div className='w-full h-full mt-[300px] container mx-auto'>
                <div className='w-full h-full'>
                    <div className='flex flex-col items-center'>
                        <div className='bg-cyan-300 text-cyan-900 text-4xl w-12 h-12 flex justify-center items-center rounded-full mb-5'>
                            <BsLightningCharge />
                        </div>
                        <div className='text-cyan-900 text-3xl'>
                            About Us
                        </div>
                    </div>
                    <div className='text-center mt-10'>
                        <div className='text-xl'>
                            <h1>Soft Dimension</h1>
                            <h2>Web Component Build and Development Platform</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
