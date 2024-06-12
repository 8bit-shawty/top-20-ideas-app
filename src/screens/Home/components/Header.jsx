import React from 'react'
import logo from '../../../assets/images/logo-june-24.png'
import logo2 from '../../../assets/images/logo-new.png'
import { useNavigate } from 'react-router-dom'


function Header() {
    const navigation = useNavigate();

    return (
        <div className=' flex flex-row justify-between items-center shadow-lg p-4 border rounded-lg'>
            <button className=' btn btn-primary btn-sm md:btn-md' onClick={() => navigation('/new')}>+ New Idea</button>
            <h2 className=' font-bold text-sm md:text-2xl'>Top 20 Ideas</h2>
            <div className='flex gap-2 items-center'>
                <img src={logo2} className=' w-[80px] h-[80px] rounded-full' alt="logo" />
                <h2 className=' font-bold text-sm hidden md:block'>By 8bit-shawty</h2>
            </div>
        </div>
    )
}

export default Header