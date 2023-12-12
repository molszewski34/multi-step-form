import React from 'react';

interface FormStageThreeProps {
  checkedCheckboxes: { name: string; price: number }[];
  setCheckedCheckboxes: React.Dispatch<
    React.SetStateAction<{ name: string; price: number }[]>
  >;
  goBack: () => void;
  setStage: React.Dispatch<React.SetStateAction<number>>;
  addons: Addons[];

  onlineServices: number;
  setOnlineServices: React.Dispatch<React.SetStateAction<number>>;
  largerStorage: number;
  setLargerStorage: React.Dispatch<React.SetStateAction<number>>;
  customizableProfile: number;
  setCustomizableProfile: React.Dispatch<React.SetStateAction<number>>;
}

interface Addons {
  name: string;
  desc: string;
  price: number;
}

export const FormStageThree: React.FC<FormStageThreeProps> = ({
  checkedCheckboxes,
  setCheckedCheckboxes,
  goBack,
  setStage,
  addons,
}) => {
  const handleCheckboxChange = (name: string, price: number) => {
    if (checkedCheckboxes.some((checkbox) => checkbox.name === name)) {
      setCheckedCheckboxes((prev) =>
        prev.filter((checkbox) => checkbox.name !== name)
      );
    } else {
      setCheckedCheckboxes((prev) => [...prev, { name, price }]);
    }
  };

  console.log(checkedCheckboxes);

  return (
    <div>
      {addons.map((addon) => (
        <div key={addon.name}>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange(addon.name, addon.price)}
            checked={checkedCheckboxes.some(
              (checkbox) => checkbox.name === addon.name
            )}
          />
          {`${addon.name} - $${addon.price}`}
        </div>
      ))}

      <div>Selected Checkboxes: {JSON.stringify(checkedCheckboxes)}</div>
      {/* <div className="">
        <button onClick={goBack}>Go Back</button>
        <button onClick={() => setStage(4)}>Next</button>
      </div> */}
    </div>
  );
};
