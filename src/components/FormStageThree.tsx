import React from 'react';
import Header from './Header';
interface FormStageThreeProps {
  checkedCheckboxes: { name: string; price: number }[];
  setCheckedCheckboxes: React.Dispatch<
    React.SetStateAction<{ name: string; price: number }[]>
  >;
  goBack: () => void;
  setStage: React.Dispatch<React.SetStateAction<number>>;
  addons: Addons[];
  isYearly: boolean;
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
  isYearly,
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
      <Header
        title="Pick add-ons"
        subtitle="Add-ons help enhance your gaming experience."
      />
      <div className="flex flex-col gap-4">
        {addons.map((addon) => (
          <div
            className="flex justify-around border items-center border-Light-gray py-3 rounded-lg"
            key={addon.name}
          >
            <label
              className="relative flex items-center rounded-full cursor-pointer"
              htmlFor="check"
            >
              <input
                type="checkbox"
                className=" before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-Light-gray transition-all  checked:border-gray-900 checked:bg-Purplish-blue checked:before:bg-gray-900 hover:before:opacity-10"
                id="check"
                onChange={() => handleCheckboxChange(addon.name, addon.price)}
                checked={checkedCheckboxes.some(
                  (checkbox) => checkbox.name === addon.name
                )}
              />

              <span className="absolute text-White transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <div className="flex ">
              <div className="flex flex-col">
                <span className="font-semibold text-Marine-blue">
                  {addon.name}
                </span>
                <span className="text-sm text-Cool-gray font-semibold">
                  {addon.desc}
                </span>
              </div>
            </div>
            <span className="text-sm font-semibold text-Purplish-blue">{`$${
              addon.price
            }/${isYearly ? 'yr' : 'mo'}`}</span>
            {/* {`${addon.name} - $${addon.price}`} */}
          </div>
        ))}
      </div>

      {/* <div>Selected Checkboxes: {JSON.stringify(checkedCheckboxes)}</div> */}
      {/* <div className="">
        <button onClick={goBack}>Go Back</button>
        <button onClick={() => setStage(4)}>Next</button>
      </div> */}
    </div>
  );
};
