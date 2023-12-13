import React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-3 mb-4">
      <h1 className="text-2xl text-Marine-blue font-bold">{title}</h1>
      <h2 className=" text-lg text-Cool-gray w-5/6">{subtitle}</h2>
    </div>
  );
};

export default Header;
