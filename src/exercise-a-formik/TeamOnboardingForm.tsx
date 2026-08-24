import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { teamOnboardingSchema, type TeamOnboardingValues } from './schema';

const initialValues: TeamOnboardingValues = {
  fullName: '',
  email: '',
  role: 'engineer',
  isContractor: false,
  startDate: '',
  endDate: '',
  teammates: [{ name: '', email: '' }],
};

export function TeamOnboardingForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={teamOnboardingSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log('Submitted:', values);
        alert('Submitted! Check the console for the payload.');
        setSubmitting(false);
      }}
    >
      {({ values, isSubmitting }) => (
        <Form className="form">
          <h2>Team Onboarding (Formik)</h2>

          <label>
            Full name
            <Field name="fullName" />
            <ErrorMessage name="fullName" component="div" className="error" />
          </label>

          <label>
            Email
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </label>

          <label>
            Role
            <Field name="role" as="select">
              <option value="engineer">Engineer</option>
              <option value="designer">Designer</option>
              <option value="pm">Product Manager</option>
            </Field>
            <ErrorMessage name="role" component="div" className="error" />
          </label>

          <label className="checkbox">
            <Field name="isContractor" type="checkbox" />
            Contractor (fixed-term)
          </label>

          <label>
            Start date
            <Field name="startDate" type="date" />
            <ErrorMessage name="startDate" component="div" className="error" />
          </label>

          {values.isContractor && (
            <label>
              End date
              <Field name="endDate" type="date" />
              <ErrorMessage name="endDate" component="div" className="error" />
            </label>
          )}

          <fieldset>
            <legend>Teammates</legend>
            <FieldArray name="teammates">
              {({ push, remove }) => (
                <>
                  {values.teammates.map((_, index) => (
                    <div className="teammate-row" key={index}>
                      <Field name={`teammates.${index}.name`} placeholder="Name" />
                      <ErrorMessage name={`teammates.${index}.name`} component="div" className="error" />
                      <Field name={`teammates.${index}.email`} placeholder="Email" />
                      <ErrorMessage name={`teammates.${index}.email`} component="div" className="error" />
                      <button type="button" onClick={() => remove(index)}>
                        Remove
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={() => push({ name: '', email: '' })}>
                    Add teammate
                  </button>
                  <ErrorMessage name="teammates" component="div" className="error" />
                </>
              )}
            </FieldArray>
          </fieldset>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
