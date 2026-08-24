import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { teamOnboardingSchema, type TeamOnboardingValues } from './schema';
import { RoleSelect } from './RoleSelect';

const defaultValues: TeamOnboardingValues = {
  fullName: '',
  email: '',
  role: 'engineer',
  isContractor: false,
  startDate: '',
  endDate: '',
  teammates: [{ name: '', email: '' }],
};

export function TeamOnboardingForm() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<TeamOnboardingValues>({
    resolver: zodResolver(teamOnboardingSchema),
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({ control, name: 'teammates' });
  const isContractor = watch('isContractor');

  const onSubmit = (values: TeamOnboardingValues) => {
    console.log('Submitted:', values);
    alert('Submitted! Check the console for the payload.');
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Team Onboarding (React Hook Form — in progress)</h2>

      <label>
        Full name
        <input {...register('fullName')} />
        {errors.fullName && <div className="error">{errors.fullName.message}</div>}
      </label>

      <label>
        Email
        <input type="email" {...register('email')} />
        {errors.email && <div className="error">{errors.email.message}</div>}
      </label>

      <label>
        Role
        <RoleSelect
          value={watch('role')}
          onChange={(value) => {
            // TODO: this doesn't actually update the form value yet.
            console.log('role changed to', value);
          }}
          error={errors.role?.message}
        />
      </label>

      <label className="checkbox">
        <input type="checkbox" {...register('isContractor')} />
        Contractor (fixed-term)
      </label>

      <label>
        Start date
        <input type="date" {...register('startDate')} />
        {errors.startDate && <div className="error">{errors.startDate.message}</div>}
      </label>

      {isContractor && (
        <label>
          End date
          <input type="date" {...register('endDate')} />
          {errors.endDate && <div className="error">{errors.endDate.message}</div>}
        </label>
      )}

      <fieldset>
        <legend>Teammates</legend>
        {fields.map((_field, index) => (
          <div className="teammate-row" key={index}>
            <input placeholder="Name" {...register(`teammates.${index}.name` as const)} />
            {errors.teammates?.[index]?.name && (
              <div className="error">{errors.teammates[index]?.name?.message}</div>
            )}
            <input placeholder="Email" {...register(`teammates.${index}.email` as const)} />
            {errors.teammates?.[index]?.email && (
              <div className="error">{errors.teammates[index]?.email?.message}</div>
            )}
            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => append({ name: '', email: '' })}>
          Add teammate
        </button>
        {errors.teammates?.message && <div className="error">{errors.teammates.message}</div>}
      </fieldset>

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
}
