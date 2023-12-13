import Header from './Header';

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
}) => {
  const totalPrice = checkedCheckboxes.reduce(
    (accumulator, addon) => accumulator + addon.price,
    selectedPlanPrice
  );
  return (
    <div className="flex flex-col gap-2">
      <Header
        title="Finishing up"
        subtitle="  Double-check everything looks OK before confirming."
      />
      <div className="flex flex-col bg-Alabaster py-6 px-4">
        <div className="flex justify-between ">
          <div className="">
            <p className="text-Marine-blue font-semibold">
              {`${selectedPlan} ${isYearly ? '(Yearly)' : '(Montly)'}`}
            </p>
            <span
              className="text-Cool-gray underline"
              onClick={() => setStage(1)}
            >
              Change
            </span>
          </div>
          <div className="text-Marine-blue font-bold">
            ${selectedPlanPrice}/{isYearly ? 'yr' : 'mo'}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {checkedCheckboxes.map((addon, index) => (
            <div key={index} className="flex justify-between">
              <p className="text-Cool-gray font-semibold">{addon.name}</p>
              <span className="text-Marine-blue ">
                ${addon.price}/{isYearly ? 'yr' : 'mo'}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between px-4">
        <p className="text-Cool-gray">
          Total {isYearly ? '(per year)' : '(per month)'}
        </p>
        <p className="text-Purplish-blue font-semibold">{`$${totalPrice}/${
          isYearly ? 'yr' : 'mo'
        }`}</p>
      </div>
    </div>
  );
};
