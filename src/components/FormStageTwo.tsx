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

  console.log(selectedPlanPrice);

  return (
    <div className="">
      <h1>Select your plan</h1>
      <h2>You have the option of monthly or yearly billing.</h2>
      <form onSubmit={handleSubmit}>
        <h2>Stage Two</h2>

        <label className="button-label">
          <input
            type="radio"
            value="Arcade"
            {...register('selectedButton', { required: 'Select an option' })}
            onChange={(event) => {
              setSelectedPlan(event.target.value);
              setSelectedPlanPrice(arcade);
            }}
          />
          <div>
            Arcade
            {isYearly && <p>2 months free</p>}
            <p>${arcade}/</p>
          </div>
        </label>

        <label className="button-label">
          <input
            type="radio"
            value="Advanced"
            onChange={(event) => setSelectedPlan(event.target.value)}
            {...register('selectedButton', { required: 'Select an option' })}
          />
          <div>
            Advanced
            {isYearly && <p>2 months free</p>}
            <p>${advanced}/</p>
          </div>
        </label>

        <label className="button-label">
          <input
            type="radio"
            value="Pro"
            onChange={(event) => setSelectedPlan(event.target.value)}
            {...register('selectedButton', { required: 'Select an option' })}
          />
          <div>
            Pro
            {isYearly && <p>2 months free</p>}
            <p>${pro}/</p>
          </div>
        </label>

        <label>
          Yearly Subscription
          <input
            type="checkbox"
            checked={isYearly}
            onChange={handleSwitchChange}
          />
        </label>
      </form>
      <div className="">
        <button onClick={goBack}>Go Back</button>
        <button onClick={() => setStage(3)}>Next</button>
      </div>
    </div>
  );
};
