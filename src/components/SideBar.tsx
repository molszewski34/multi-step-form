import React from 'react';

interface Stage {
  stage: number;
}

export const SideBar: React.FC<Stage> = ({ stage }) => {
  return (
    <section className="bg-Purplish-blue h-[20vh]  bg-bg-sidebar-mobile bg-cover">
      <div className="w-full flex gap-2 justify-center pt-8">
        <span
          className={`text-lg text-White px-3 py-1  border border-White rounded-full ${
            stage === 1 ? 'bg-Light-blue  text-[#000] font-bold' : ''
          } `}
        >
          1
        </span>
        <span
          className={`text-lg text-White px-3 py-1  border border-White rounded-full ${
            stage === 2 ? 'bg-Light-blue  text-[#000] font-bold' : ''
          } `}
        >
          2
        </span>
        <span
          className={`text-lg text-White px-3 py-1  border border-White rounded-full ${
            stage === 3 ? 'bg-Light-blue  text-[#000] font-bold' : ''
          } `}
        >
          3
        </span>
        <span
          className={`text-lg text-White px-3 py-1  border border-White rounded-full ${
            stage === 4 ? 'bg-Light-blue  text-[#000] font-bold' : ''
          } `}
        >
          4
        </span>
      </div>
    </section>
  );
};

export default SideBar;
