import React from 'react'
import vector from '../images/Vector.png'
import footerlogo from '../images/Brand-logo.png'
import clip from '../images/paperclip.png'
const Footer = () => {
  return (
    <div className="flex flex-col justify-center px-2.5 py-1.5 w-full border-2 border-white border-solid">
      <div className="flex gap-1.5 justify-center">
        <div className="flex flex-auto gap-0 py-2.5 pr-2.5 pl-5 text-sm bg-white rounded-xl border border-indigo-100 border-solid text-neutral-400">
          <div className="flex-1">Type your message</div>
          <img
            loading="lazy"
            alt=""
            src={clip}
            className="shrink-0 w-5 aspect-square"
          />
        </div>
        <div className="flex justify-center items-center px-8 py-2 bg-blue-500 rounded-xl">
          <img
            loading="lazy"
            alt=""
            src={vector}
            className="text-blue-50 text-sm"/>
        </div>
      </div>
      <div className="flex gap-1.5 justify-center px-20 mt-2.5 text-sm">
        <div className="text-zinc-400">Powered by </div>
        <div className="font-semibold text-gray-500">Krunk.ai</div>
        <img
          loading="lazy"
          alt=""
          src={footerlogo}
          className="shrink-0 self-start aspect-square w-[18px]"
        />
      </div>
    </div>
  );
}

export default Footer
