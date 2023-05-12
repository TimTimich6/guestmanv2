import * as React from "react";

export interface IAppProps {
  name: string;
  time: Date;
  onClick(name: string): void;
}

export default function Guest(props: IAppProps) {
  return (
    <div className="shadow-xl bg-sky-700 p-4 w-full h-max lg:w-[50rem] lg:h-24 rounded-md flex items-center lg:justify-between justify-center flex-col lg:flex-row ">
      <div className="flex lg:gap-8 justify-between items-center flex-col lg:flex-row">
        <h1 className="lg:text-2xl font-bold uppercase">{props.name}</h1>
        <p className="text- font-normal">{props.time.toISOString()}</p>
      </div>
      <button
        className="justify-between rounded-md font-extrabold lg:text-2xl text-red-200 transition-all hover:text-red-300 mt-3 lg:mt-0"
        onClick={() => props.onClick(props.name)}
      >
        Remove
      </button>
    </div>
  );
}
