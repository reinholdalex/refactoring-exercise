import * as Yup from 'yup';

export type Role = 'engineer' | 'designer' | 'pm';

export interface Teammate {
  name: string;
  email: string;
}

export interface TeamOnboardingValues {
  fullName: string;
  email: string;
  role: Role;
  isContractor: boolean;
  startDate: string;
  endDate: string;
  teammates: Teammate[];
}

export const teamOnboardingSchema = Yup.object({
  fullName: Yup.string().trim().required('Full name is required'),
  email: Yup.string().email('Enter a valid email').required('Email is required'),
  role: Yup.string().oneOf(['engineer', 'designer', 'pm']).required('Role is required'),
  isContractor: Yup.boolean().required(),
  startDate: Yup.string().required('Start date is required'),
  endDate: Yup.string()
    .when('isContractor', {
      is: true,
      then: (schema) => schema.required('End date is required for contractors'),
      otherwise: (schema) => schema.notRequired(),
    })
    .test('is-after-start', 'End date must be after start date', function (value) {
      const { startDate } = this.parent as { startDate?: string };
      if (!value || !startDate) return true;
      return new Date(value) > new Date(startDate);
    }),
  teammates: Yup.array()
    .of(
      Yup.object({
        name: Yup.string().required('Teammate name is required'),
        email: Yup.string().email('Enter a valid email').required('Teammate email is required'),
      })
    )
    .min(1, 'Add at least one teammate')
    .test('unique-emails', 'Teammate emails must be unique', (teammates) => {
      if (!teammates) return true;
      const emails = teammates.map((t) => t?.email).filter(Boolean);
      return new Set(emails).size === emails.length;
    }),
});
