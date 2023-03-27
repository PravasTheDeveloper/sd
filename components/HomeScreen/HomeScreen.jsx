import React from 'react'
import { MdOutlineDesignServices, MdOutlineSpeed } from "react-icons/md";
import { CiMonitor } from "react-icons/ci";
import { HiOutlinePencilSquare } from 'react-icons/hi2';

export default function HomeScreen() {
    return (
        <>
            <div className='HomeScreen w-full h-screen relative '>
                <div className='h-full container mx-auto w-[80%]'>
                    <div className='h-full flex w-[40%] flex-col justify-center text-white'>
                        <div className='group'>
                            <h1 className='text-2xl font-semibold group-hover:text-3xl duration-300'>Welcome To<br /><span className='text-4xl group-hover:text-2xl duration-300'>The Soft Dimension</span></h1>
                        </div>
                        <p className='my-10 font-light '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis dicta officia delectus aut earum quia expedita optio tempora? Ex nisi repudiandae eum enim, at sit odio soluta repellendus aperiam?</p>
                        <button className='w-20 bg-cyan-500 h-10 hover:w-28 hover:tracking-[5px] duration-500 rounded-lg'>Order</button>
                    </div>
                </div>
                <div className='w-[80%] h-[250px]  bg-white shadow-2xl rounded-tl-3xl rounded-bl-3xl absolute right-0 bottom-[-125px]'>
                    <div className='w-full h-full p-10 pt-5'>
                        <div className='w-full text-black'>
                            <div className='text-xl mb-5'>What we do ?</div>
                            <div className='w-[70%] text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis cupiditate aliquid reprehenderit beatae impedit eaque sunt repudiandae aperiam veniam aliquam alias nesciunt, aut adipisci dolorum molestiae maiores labore vero consequatur.</div>
                        </div>
                        <div className='flex justify-between mt-5 pr-16 text-white'>
                            <div className='bg-cyan-700 p-3 px-7 rounded-xl'><MdOutlineDesignServices className='text-3xl' />Web UI Design</div>
                            <div className='bg-cyan-700 p-3 px-7 rounded-xl'><CiMonitor className='text-3xl' />Web Development</div>
                            <div className='bg-cyan-700 p-3 px-7 rounded-xl'><HiOutlinePencilSquare className='text-3xl' />Logo Design</div>
                            <div className='bg-cyan-700 p-3 px-7 rounded-xl'><MdOutlineSpeed className='text-3xl' />SEO</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
