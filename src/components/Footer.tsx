import React from 'react';

interface FooterProps {
  goBack: () => void;
  setStage: React.Dispatch<React.SetStateAction<number>>;
  stage: number;
}

const Footer: React.FC<FooterProps> = ({ goBack, stage, setStage }) => {
  return (
    <div className="flex justify-between  bg-White fixed bottom-0 right-0 left-0 p-4">
      <button className={`${stage === 1 ? 'invisible' : ''}`} onClick={goBack}>
        Go Back
      </button>
      <button
        className="flex justify-self-end py-2 px-3 bg-Marine-blue text-White font-semibold rounded"
        onClick={() => setStage(stage++)}
      >
        Next Step
      </button>
    </div>
  );
};

export default Footer;
