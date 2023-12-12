interface FormStageFourProps {
  selectedPlan: string;
  selectedPlanPrice: number;
  setStage: React.Dispatch<React.SetStateAction<number>>;
  isYearly: boolean;

  checkedCheckboxes: { name: string; price: number }[];
  goBack: () => void;
}

export const FormStageFour: React.FC<FormStageFourProps> = ({
  setStage,
  selectedPlan,
  selectedPlanPrice,
  isYearly,
  checkedCheckboxes,
  goBack,
}) => {
  return (
    <div className="">
      <h1> Finishing up</h1>
      <h2> Double-check everything looks OK before confirming.</h2>
      <div className="">
        <div className="">
          <p>{selectedPlan}</p>
          <span onClick={() => setStage(1)}>Change</span>
        </div>
        <div className="">
          ${selectedPlanPrice}/{isYearly ? 'mo' : 'yr'}
        </div>
      </div>
      <div className="">
        {checkedCheckboxes.map((addon, index) => (
          <div key={index} className="">
            <p>{addon.name}</p>
            <span>{addon.price}</span>
          </div>
        ))}
      </div>
      <div className="">
        <button onClick={goBack}>Go Back</button>
        <button onClick={() => setStage(4)}>Next</button>
      </div>
    </div>
  );
};
