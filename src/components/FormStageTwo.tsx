import Header from './Header';
import Arcade from '../assets/images/icon-arcade.svg';
import Advanced from '../assets/images/icon-advanced.svg';
import Pro from '../assets/images/icon-pro.svg';

interface FormStageThreeProps {
  register: any;
  handleSubmit: any;
  goBack: () => void;
  setStage: React.Dispatch<React.SetStateAction<number>>;
  arcade: number;
  setArcade: React.Dispatch<React.SetStateAction<number>>;
  advanced: number;
  setAdvanced: React.Dispatch<React.SetStateAction<number>>;
  pro: number;
  setPro: React.Dispatch<React.SetStateAction<number>>;
  isYearly: boolean;
  onlineServices: number;
  setOnlineServices: React.Dispatch<React.SetStateAction<number>>;
  largerStorage: number;
  setLargerStorage: React.Dispatch<React.SetStateAction<number>>;
  customizableProfile: number;
  setCustomizableProfile: React.Dispatch<React.SetStateAction<number>>;
  setIsYearly: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPlan: string;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string>>;
  selectedPlanPrice: number;
  setSelectedPlanPrice: React.Dispatch<React.SetStateAction<number>>;
}

export const FormStageTwo: React.FC<FormStageThreeProps> = ({
  goBack,
  setStage,
  register,
  handleSubmit,
  arcade,
  setArcade,
  advanced,
  setAdvanced,
  pro,
  setPro,
  isYearly,
  setIsYearly,
  selectedPlan,
  setSelectedPlan,
  selectedPlanPrice,
  setSelectedPlanPrice,
}) => {
  const handleSwitchChange = () => {
    setIsYearly((prevIsYearly) => !prevIsYearly);
    if (!isYearly) {
      setArcade(90);
      setAdvanced(120);
      setPro(150);
    } else {
      setArcade(9);
      setAdvanced(12);
      setPro(15);
    }
  };

  return (
    <div className="">
      <Header
        title="Select your plan"
        subtitle="You have the option of monthly or yearly billing."
      />
      <form className=" flex flex-col gap-3" onSubmit={handleSubmit}>
        <label
          className={`button_label flex  gap-2 button-label p-4  border border-Light-gray rounded-lg text-Marine-blue font-semibold  ${
            selectedPlan === 'Arcade' ? 'border-Purplish-blue bg-Alabaster' : ''
          }`}
        >
          <img src={Arcade} className="flex place-self-start" alt="" />
          <div className="flex ">
            <input
              className="hidden "
              type="radio"
              value="Arcade"
              // {...register('selectedButton', { required: 'Select an option' })}
              onChange={(event) => {
                setSelectedPlan(event.target.value);
                setSelectedPlanPrice(arcade);
              }}
            />
            <div className="flex flex-col justify-between">
              Arcade
              <p className="text-sm font-semibold text-Cool-gray">
                ${arcade}/{isYearly ? 'yr' : 'mo'}
              </p>
              {isYearly && <p>2 months free</p>}
            </div>
          </div>
        </label>

        <label
          className={`button_label flex  gap-2 button-label p-4  border border-Light-gray rounded-lg text-Marine-blue font-semibold  ${
            selectedPlan === 'Advanced'
              ? 'border-Purplish-blue bg-Alabaster'
              : ''
          }`}
        >
          <img src={Advanced} className="flex place-self-start" alt="" />
          <div className="flex ">
            <input
              className="hidden "
              type="radio"
              value="Advanced"
              // {...register('selectedButton', { required: 'Select an option' })}
              onChange={(event) => {
                setSelectedPlan(event.target.value);
                setSelectedPlanPrice(advanced);
              }}
            />
            <div className="flex flex-col justify-between">
              Arcade
              <p className="text-sm font-semibold text-Cool-gray">
                ${arcade}/{isYearly ? 'yr' : 'mo'}
              </p>
              {isYearly && <p>2 months free</p>}
            </div>
          </div>
        </label>

        <label
          className={`button_label flex  gap-2 button-label p-4  border border-Light-gray rounded-lg text-Marine-blue font-semibold  ${
            selectedPlan === 'Pro' ? 'border-Purplish-blue bg-Alabaster' : ''
          }`}
        >
          <img src={Pro} className="flex place-self-start" alt="" />
          <div className="flex ">
            <input
              className="hidden "
              type="radio"
              value="Pro"
              // {...register('selectedButton', { required: 'Select an option' })}
              onChange={(event) => {
                setSelectedPlan(event.target.value);
                setSelectedPlanPrice(arcade);
              }}
            />
            <div className="flex flex-col justify-between">
              Pro
              <p className="text-sm font-semibold text-Cool-gray">
                ${pro}/{isYearly ? 'yr' : 'mo'}
              </p>
              {isYearly && <p>2 months free</p>}
            </div>
          </div>
        </label>

        <label
          htmlFor="toggleTwo"
          className="flex items-center justify-between cursor-pointer select-none bg-Alabaster py-4 px-8 rounded-lg"
        >
          <p className="text-Marine-blue font-semibold">Monthly</p>
          <div className="relative">
            <input
              type="checkbox"
              id="toggleTwo"
              className="peer sr-only"
              checked={isYearly}
              onChange={handleSwitchChange}
            />
            <div className="block h-6 rounded-full bg-Marine-blue w-[2.5rem]"></div>
            <div className="absolute w-4 h-4 transition bg-White rounded-full   left-1 top-1 peer-checked:translate-x-full "></div>
          </div>
          <p className="text-Cool-gray font-semibold">Yearly</p>
        </label>
      </form>
    </div>
  );
};
