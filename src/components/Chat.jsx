import React from 'react'
import Tick from "../images/Tick.png"
import bag from "../images/bag-image.png";
import arrow from "../images/arrow-img.png"
 import Filter from '../images/Filter-img.png'
 import cross from '../images/cross-square.png'
const Chat = () => {
  return (
    <div>
      <div>
        Hi Sam! I am your personal shopping assistant , how can i help you today
        ?
      </div>
      <div className="mt-1.5 text-xs text-zinc-800">4:45 PM</div>
      <div className="justify-center self-end px-4 py-2.5 max-w-full text-sm bg-lime-100 rounded-2xl border border-white border-solid w-[213px]">
        I am looking for a hand bag, with long strap .
      </div>
      <div className="mt-1.5 text-xs text-right">4:46 PM</div>
      <div className="mt-5 text-sm text-neutral-400">
        Popular tags for handbag
      </div>
      <div className="flex flex-1 gap-2.5">
        <div className="justify-center px-2.5 py-1.5 whitespace-nowrap bg-sky-50 rounded-md border border-blue-500 border-solid">
          Clutch
        </div>
        <div className="justify-center px-2.5 py-1.5 bg-sky-50 rounded-md border border-blue-500 border-solid">
          Fabric lining
        </div>
        <div className="justify-center px-2.5 py-1.5 bg-sky-50 rounded-md border border-blue-500 border-solid">
          Baggit
        </div>
        <div className="justify-center items-start px-2.5 py-1.5 bg-sky-50 rounded-md border border-blue-500 border-solid">
          Multi Compartment
        </div>
      </div>
      <div className="flex flex-col bg-blue-50 justify-center p-2.5 mt-5 w-full rounded-3xl">
        <div className="flex gap-3 justify-center p-2.5 bg-white rounded-xl">
          <img
            loading="lazy"
            alt=""
            src={bag}
            className="shrink-0 self-start aspect-[1.41] w-[70px]"
          />
          <div className="flex flex-col px-1.5">
            <div className="flex gap-1.5 justify-between px-1.5 text-sm font-medium text-zinc-800">
              <div>
                Bags on <span className="font-semibold">Timpu</span>
              </div>
              <img
                loading="lazy"
                alt=""
                src={Tick}
                className="shrink-0 my-auto w-3.5 border border-yellow-400 border-solid aspect-[0.93] stroke-[1px] stroke-yellow-400"
              />
            </div>
            <div className="flex gap-1.5 justify-between pr-3.5 mt-2 text-xs text-neutral-400">
              <div>1123 products </div>
              
               <img
                loading="lazy"
                alt=""
                 src={arrow} 
                className="shrink-0 w-6 aspect-square"
              />
            </div>
          </div>
        </div>
        <div className="mt-2.5 text-sm text-zinc-800">
          Or set filter and help us choose the best bag for you.
        </div>
      </div>
      <div className="mt-1.5 text-xs text-zinc-800">4:48 PM</div>
      <div className="flex gap-2.5 justify-between mt-2.5 w-full text-sm">
        <div className="text-neutral-400">Select filters</div>
        <div className="flex gap-0.5 justify-center px-1 whitespace-nowrap leading-[154%] text-stone-500">
          <img src={Filter} alt="" />
        </div>
      </div>
      <div className="flex flex-wrap gap-2.5 content-start mt-2.5 text-sm leading-5 whitespace-nowrap">
        <div className="flex flex-col">
          <div className="flex gap-2.5">
            <div className="flex gap-1.5 justify-center px-2.5 py-0.5 text-blue-500 rounded-md border border-blue-500 border-solid bg-slate-50">
              <div className="flex gap-1.5 justify-center">
                <div>Strap</div>
                <div>-</div>
                <div className="font-medium">Long</div>
              </div>
              <img
                loading="lazy"
                alt=""
                src={cross}
                className="shrink-0 my-auto w-2.5 aspect-[0.91]"
              />
            </div>
            <div className="flex gap-1.5 justify-center px-2.5 py-0.5 rounded-md bg-zinc-100 text-neutral-500">
              <div>Colour</div>
              <img
                loading="lazy"
                alt=""
                src={cross}
                className="shrink-0 my-auto w-2.5 aspect-[0.91]"
              />
            </div>
          </div>
          <div className="flex gap-2.5 mt-2.5 text-neutral-500">
            <div className="flex gap-1.5 justify-center px-2.5 py-0.5 rounded-md">
              <div>Brand</div>
              <img
                loading="lazy"
                alt=""
                src={cross}
                className="shrink-0 my-auto w-2.5 aspect-[0.91]"
              />
            </div>
            <div className="flex gap-1.5 justify-center px-2.5 py-0.5 rounded-md">
              <div>Material</div>
              <img
                loading="lazy"
                src={cross}
                alt=""
                className="shrink-0 my-auto w-2.5 aspect-[0.91]"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-1.5 justify-center self-start px-2.5 py-0.5 rounded-md bg-zinc-100 text-neutral-500">
          <div>Size</div>
          <img
            loading="lazy"
            alt=""
            src={cross}
            className="shrink-0 my-auto w-2.5 aspect-[0.91]"
          />
        </div>
      </div>
    </div>
  );
}

export default Chat
