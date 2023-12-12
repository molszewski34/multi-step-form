import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormStageOne } from './components/FormStageOne';
import { FormStageTwo } from './components/FormStageTwo';
import { FormStageThree } from './components/FormStageThree';
import { FormStageFour } from './components/FormStageFour';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
interface MyFormData {
  name: string;
  email: string;
  phoneNumber: string;
  selectedButton: string;
}

interface Addon {
  name: string;
  desc: string;
  price: number;
}

const App: React.FC = () => {
  const [stage, setStage] = useState<number>(1);
  const [arcade, setArcade] = useState(9);
  const [advanced, setAdvanced] = useState(12);
  const [pro, setPro] = useState(15);
  const [isYearly, setIsYearly] = useState(false);
  const [checkedCheckboxes, setCheckedCheckboxes] = useState<
    { name: string; price: number }[]
  >([]);
  const [onlineServices, setOnlineServices] = useState<number>(1);
  const [largerStorage, setLargerStorage] = useState<number>(2);
  const [customizableProfile, setCustomizableProfile] = useState<number>(2);
  const [formData, setFormData] = useState<MyFormData>({
    name: '',
    email: '',
    phoneNumber: '',
    selectedButton: '',
  });
  const [addons, setAddons] = useState<Addon[]>([
    {
      name: 'Online service',
      desc: 'Access to multiplayer games',
      price: 1,
    },
    {
      name: 'Larger storage',
      desc: 'Extra 1TB of cloud save',
      price: 2,
    },
    {
      name: 'Customizable Profile',
      desc: 'Custom theme on your profile',
      price: 2,
    },
  ]);

  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedPlanPrice, setSelectedPlanPrice] = useState<number>(1);

  const calculateAddonPrice = (addon: Addon): number => {
    return isYearly ? addon.price * 10 : addon.price;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MyFormData>();

  const onSubmitStageOne: SubmitHandler<MyFormData> = (data) => {
    setFormData(data);
    setStage(stage + 1);
  };

  const onSubmitStageTwo: SubmitHandler<MyFormData> = (data) => {
    setFormData(data);
    setStage(stage + 1);
  };

  const goBack = () => {
    setStage(stage - 1);
  };

  return (
    <main className="bg-Magnolia h-screen">
      <SideBar stage={stage} />
      <section className="bg-White mx-4 mt-[-4.5em] border-none rounded-xl p-6">
        {stage === 1 && (
          <FormStageOne
            register={register}
            handleSubmit={handleSubmit(onSubmitStageOne)}
            errors={errors}
          />
        )}
        {stage === 2 && (
          <FormStageTwo
            goBack={goBack}
            setStage={setStage}
            register={register}
            handleSubmit={handleSubmit(onSubmitStageTwo)}
            arcade={arcade}
            setArcade={setArcade}
            advanced={advanced}
            setAdvanced={setAdvanced}
            pro={pro}
            setPro={setPro}
            isYearly={isYearly}
            setIsYearly={setIsYearly}
            onlineServices={onlineServices}
            setOnlineServices={setOnlineServices}
            largerStorage={largerStorage}
            setLargerStorage={setLargerStorage}
            customizableProfile={customizableProfile}
            setCustomizableProfile={setCustomizableProfile}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            selectedPlanPrice={selectedPlanPrice}
            setSelectedPlanPrice={setSelectedPlanPrice}
          />
        )}

        {stage === 3 && (
          <FormStageThree
            checkedCheckboxes={checkedCheckboxes}
            setCheckedCheckboxes={setCheckedCheckboxes}
            goBack={goBack}
            setStage={setStage}
            onlineServices={onlineServices}
            setOnlineServices={setOnlineServices}
            largerStorage={largerStorage}
            setLargerStorage={setLargerStorage}
            customizableProfile={customizableProfile}
            setCustomizableProfile={setCustomizableProfile}
            addons={addons.map((addon) => ({
              ...addon,
              price: calculateAddonPrice(addon),
            }))}
          />
        )}
        {stage === 4 && (
          <FormStageFour
            goBack={goBack}
            setStage={setStage}
            selectedPlan={selectedPlan}
            selectedPlanPrice={selectedPlanPrice}
            isYearly={isYearly}
            checkedCheckboxes={checkedCheckboxes}
          />
        )}
      </section>
      <Footer goBack={goBack} stage={stage} setStage={setStage} />
    </main>
  );
};

export default App;
