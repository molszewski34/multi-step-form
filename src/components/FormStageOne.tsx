import Header from './Header';
import { formData } from '../data/formData';

export function FormStageOne({
  register,
  handleSubmit,
  errors,
  formInputValue,
}: {
  register: any;
  handleSubmit: any;
  errors: any;
  formInputValue: any;
}) {
  console.log(errors);

  return (
    <div>
      <Header
        title="Personal info"
        subtitle="Please provide your name, email address, and phone number."
      />
      <form className="flex flex-col gap-2 " onSubmit={handleSubmit}>
        {formData.map((data, index) => (
          <label
            key={index}
            className="flex flex-col text-sm font-semibold text-Marine-blue"
          >
            {data.label}
            <input
              className="p-2 pl-4 border border-Light-gray rounded placeholder:font-semibold text-base mt-1"
              type={data.type}
              {...register(data.field, {
                required: `The ${data.label} field is required`,
                // Add other validation rules as needed
              })}
              value={formInputValue}
              placeholder={data.placeholder}
            />
            {errors[data.field] && <span>{errors[data.field].message}</span>}
          </label>
        ))}

        <button type="submit">Next</button>
      </form>
    </div>
  );
}
