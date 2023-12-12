import Header from './Header';
import { formData } from '../data/formData';
export function FormStageOne({
  register,
  handleSubmit,
  errors,
}: {
  register: any;
  handleSubmit: any;
  errors: any;
}) {
  return (
    // <div className="bg-White p-4">
    <div>
      <Header
        title="Personal info"
        subtitle="Please provide your name, email address, and phone number."
      />
      <form className="flex flex-col gap-2 mt-4" onSubmit={handleSubmit}>
        {formData.map((data) => (
          <label className="flex flex-col text-sm font-semibold text-Marine-blue">
            {data.label}
            <input
              className="p-2 pl-4 border border-Light-gray rounded placeholder:font-semibold text-base"
              type={data.type}
              {...register(data.field, { required: 'This field is required' })}
              placeholder={data.placeholder}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </label>
        ))}

        {/* <button type="submit">Next</button> */}
      </form>
    </div>
  );
}
