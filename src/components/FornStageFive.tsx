import IconThankYou from '../assets/images/icon-thank-you.svg';

export const FormStageFive = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center py-12 gap-4">
        <img className="w-14" src={IconThankYou} alt="" />
        <h1 className="text-2xl text-Marine-blue font-bold">Thank you!</h1>
        <div className="flex flex-col items-center">
          <p className="text-[17px] text-center text-Cool-gray">
            Thanks for confirming your subscription!
          </p>
          <p className="text-[17px] text-center text-Cool-gray w-4/5">
            We hope you have fun using our platform. If you ever need support,
            please feel free to email us at support@loremgaming.com.
          </p>
        </div>
      </div>
    </section>
  );
};
