import * as React from "react";

function MyComponent() {
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-white max-w-[568px] max-md:px-5">
      <div className="flex flex-col items-center mt-14 max-w-full w-[331px] max-md:mt-10">
        <div className="text-4xl font-semibold tracking-tighter leading-10 text-zinc-900">
          Primary CTA
        </div>
        <div className="mt-20 text-xl font-medium tracking-tight leading-6 text-zinc-900 max-md:mt-10">
          Default State
        </div>
        <div className="flex gap-4 justify-center self-stretch px-10 py-8 mt-5 text-xl font-semibold text-center text-white capitalize rounded-[100px] max-md:px-5">
          <div>Meet your Candidates</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5dd013e82f62f4777d9a36a1528294d7ff56b4f973d6f4ab0c9d6fd8f7d9b82?apiKey=03b709cbd0bb43d185c9782bb4c80379&"
            className="shrink-0 self-start w-6 aspect-square"
          />
        </div>
        <div className="mt-12 text-xl font-medium tracking-tight leading-6 text-zinc-900 max-md:mt-10">
          Hover State
        </div>
        <div className="flex gap-4 justify-center self-stretch px-10 py-8 mt-3 text-xl font-semibold text-center text-white capitalize rounded-[100px] max-md:px-5">
          <div>Meet your Candidates</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5dd013e82f62f4777d9a36a1528294d7ff56b4f973d6f4ab0c9d6fd8f7d9b82?apiKey=03b709cbd0bb43d185c9782bb4c80379&"
            className="shrink-0 self-start w-6 aspect-square"
          />
        </div>
        <div className="mt-20 text-4xl font-semibold tracking-tighter leading-10 text-zinc-900 max-md:mt-10">
          Secondary CTA
        </div>
        <div className="mt-10 text-xl font-medium tracking-tight leading-6 text-zinc-900">
          Default State
        </div>
        <div className="justify-center px-11 py-7 mt-4 text-lg font-medium text-center capitalize border border-gray-200 border-solid rounded-[107.056px] text-zinc-900 max-md:px-5">
          Get projects
        </div>
        <div className="mt-8 text-xl font-medium tracking-tight leading-6 text-zinc-900">
          Hover State
        </div>
        <div className="justify-center px-11 py-7 mt-4 text-lg font-medium text-center capitalize border border-gray-200 border-solid bg-zinc-100 rounded-[107.056px] text-zinc-900 max-md:px-5">
          Get projects
        </div>
        <div className="mt-16 text-4xl font-semibold tracking-tighter leading-10 text-zinc-900 max-md:mt-10">
          Carousel
        </div>
        <div className="mt-12 text-xl font-medium tracking-tight leading-6 text-zinc-900 max-md:mt-10">
          Normal State
        </div>
        <div className="flex gap-3 mt-3.5">
          <div className="shrink-0 bg-green-600 rounded-full h-[11px] w-[11px]" />
          <div className="shrink-0 rounded-full bg-neutral-200 h-[11px] w-[11px]" />
          <div className="shrink-0 w-2.5 rounded-full bg-neutral-200 h-[11px]" />
        </div>
        <div className="mt-12 text-xl font-medium tracking-tight leading-6 text-zinc-900 max-md:mt-10">
          Hover State
        </div>
        <div className="flex gap-3 mt-4">
          <div className="shrink-0 bg-green-600 rounded-full h-[11px] w-[11px]" />
          <div className="shrink-0 rounded-full bg-stone-300 h-[11px] w-[11px]" />
          <div className="shrink-0 w-2.5 rounded-full bg-neutral-200 h-[11px]" />
        </div>
      </div>
    </div>
  );
}


