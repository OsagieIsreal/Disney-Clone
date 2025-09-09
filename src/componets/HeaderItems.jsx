// import React from 'react'

function HeaderItems({ name, Icon }) {
  return (
    <div className='text-white flex items-center gap-3 font-semibold cursor-pointer mb-3'>
      <div className='flex md:hidden gap-5'>{Icon && <Icon />}</div>
      <span className='relative text-[1.2em] ml-10 drop-shadow hover:after:scale-x-100 after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px] after:bg-white after:rounded after:origin-left after:scale-x-0 after:transition-transform'>
        {name}
      </span>
    </div>
  )
}

export default HeaderItems
