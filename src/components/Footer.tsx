import React from 'react';

interface FooterProps {
  goBack: () => void;
  setStage: React.Dispatch<React.SetStateAction<number>>;
  stage: number;
  isConfirmed: boolean;
  setIsConfirmed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer: React.FC<FooterProps> = ({
  goBack,
  stage,
  setStage,
  isConfirmed,
  setIsConfirmed,
}) => {
  console.log(isConfirmed);
  return (
    <>
      {!isConfirmed && (
        <div className="flex justify-between  bg-White fixed bottom-0 right-0 left-0 p-4">
          <button
            className={`text-Cool-gray font-semibold ${
              stage === 1 ? 'invisible' : ''
            }`}
            onClick={goBack}
          >
            Go Back
          </button>
          {stage != 4 ? (
            <button
              type="submit"
              className="flex justify-self-end text-sm py-2 px-3 bg-Marine-blue text-White font-semibold rounded"
              onClick={() => setStage(stage++)}
            >
              Next Step
            </button>
          ) : (
            <button
              type="submit"
              className="flex justify-self-end text-sm py-2 px-3 bg-Purplish-blue text-White font-semibold rounded"
              onClick={() => setIsConfirmed(true)}
            >
              Confirm
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Footer;
