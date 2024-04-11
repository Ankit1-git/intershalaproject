import React from 'react'
import Logo from '../images/Logo.png'
import Tick from '../images/Tick.png'
const Header = () => {
  return (
    <div className="flex gap-2.5 justify-between px-5 py-2.5 w-full text-blue-500 bg-indigo-50 rounded-3xl shadow-sm">
      <div className="flex gap-2.5">
        <img
          loading="lazy"
          alt=""
          src={Logo}
          className="shrink-0 my-auto aspect-square w-[50px]"
        />
        <div className="flex flex-col justify-center py-1.5">
          <div className="flex gap-2.5 pr-2.5 text-lg font-semibold">
            <div>Timpu </div>
             <img
              loading="lazy"
              alt=""
              src={Tick}
              className="shrink-0 my-auto w-3.5 border border-yellow-400 border-solid aspect-[0.93] stroke-[1px] stroke-yellow-400"
            /> 
          
          </div>
          <div className="text-base font-medium">Chat assistant</div>
        </div>
      </div>
      <div className="flex gap-1.5 justify-center items-start py-4 text-base font-medium leading-3 whitespace-nowrap">
        <div className="shrink-0 w-2 h-2 bg-green-500 rounded-full" />
        <div>Online</div>
      </div>
    </div>
  );
}

export default Header
