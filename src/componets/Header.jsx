// // import React from 'react'
// import logo from '../assets/images/logo.png'
// import { HiHome, 
//         HiMagnifyingGlass,
//         HiStar,
//         HiPlayCircle,
//         HiTv } from "react-icons/hi2";
//         import { HiPlus, HiDotsVertical } from "react-icons/hi";
// import HeaderItems from './HeaderItems';
// import avater from '../assets/images/wire.png'
// import './box.css'
// import { useState } from 'react';

// // import './box.css'

// function Header() {
//   const [toogle, setToogle]=useState(false);
//   const menu = [
//     {
//       name:'HOME',
//       icon:HiHome
//     },
//     {
//       name:'SEARCH',
//       icon:HiMagnifyingGlass
//     },
//     {
//       name:'WATCH LIST',
//       icon:HiPlus
//     },
//     {
//       name:'ORIGINALS',
//       icon:HiStar
//     },
//     {
//       name:'MOVIES',
//       icon:HiPlayCircle
//     },
//     {
//       name:'SERIES',
//       icon:HiTv
//     },

//   ]
//   return (
//     <div className='flex items-center gap-8 justify-between head'>
//       <div className='flex gap-8 items-center'>
//         <img src={logo} className='w-[100px] md:w[115px] object-cover' />
//         <div className='navigation hidden md:flex gap-8'>
//         {menu.map((item, index) =>(
//         <HeaderItems name={item.name} Icon={item.icon} key={index} />
//       ))}
//         </div>
//         <div className='flex md:hidden gap-5'>
//         {menu.map((item,index) => index<3&&(
//         <HeaderItems name={''} Icon={item.icon} key={index} />
//       ))}
//         </div>
//           <div className='md:hidden' onClick={()=> setToogle(!toogle)}>
//           <HeaderItems name={''} Icon={HiDotsVertical} />
//          {toogle? <div className='abso'>
//             {menu.map((item,index) => index>2&&(
//         <HeaderItems name={item.name} Icon={item.icon} />
//       ))} 
//           </div>:null}
//         </div>
//       </div>
//       <img src={avater} className='w-[50px] rounded-full' />
//     </div>
//   )
// }
// // https://ps.w.org/user-avater-reload/assets/icon-256x256.png?rev=2540745

// export default Header;

import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItems';
function Header() {
    const [toggle, setToggle] = useState(false);
    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        }
    ]
    return (
        <div className='flex items-center justify-between p-5 relative z-50'>
            <div className='flex  gap-8 items-center'>
                <img src={logo} className='w-[80px] 
        md:w-[115px] object-cover' />
                <div className='hidden md:flex gap-8'>
                    {menu.map((item) => (
                        <HeaderItem name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className='flex md:hidden gap-5'>
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItem name={''} Icon={item.icon} />
                    ))}
                    <div className='md:hidden relative' onClick={() => setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiDotsVertical} />
                        {toggle ? <div className='absolute right-0 top-full mt-3 z-50 w-56 rounded-xl border border-white/10 bg-[#0b0b0c]/95 backdrop-blur-md shadow-2xl shadow-black/40 ring-1 ring-white/10 overflow-hidden animate-fade-in'>
                            <div className='py-2 divide-y divide-white/10'>
                                {menu.map((item, index) => index > 2 && (
                                    <div key={item.name} className='flex items-center gap-3 px-4 py-2 hover:bg-white/5 transition-colors'>
                                        <item.icon className='text-white/80 text-lg' />
                                        <HeaderItem name={item.name} Icon={null} className='mb-0' compact />
                                    </div>
                                ))}
                            </div>
                        </div> : null}
                    </div>
                </div>
            </div>
            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                className='w-[40px] rounded-full' />
        </div>
    )
}

export default Header