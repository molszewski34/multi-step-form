import React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl text-Marine-blue font-bold">{title}</h1>
      <h2 className="font-semibold text-lg text-Cool-gray">{subtitle}</h2>
    </div>
  );
};

export default Header;
