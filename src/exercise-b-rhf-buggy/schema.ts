import { z } from 'zod';

export const teamOnboardingSchema = z
  .object({
    fullName: z.string().trim().min(1, 'Full name is required'),
    email: z.string().email('Enter a valid email'),
    role: z.enum(['engineer', 'designer', 'pm']),
    isContractor: z.boolean(),
    startDate: z.string().min(1, 'Start date is required'),
    endDate: z.string().optional().default(''),
    teammates: z
      .array(
        z.object({
          name: z.string().min(1, 'Teammate name is required'),
          email: z.string().email('Enter a valid email'),
        })
      )
      .min(1, 'Add at least one teammate')
      .refine(
        (teammates) => {
          const emails = teammates.map((t) => t.email).filter(Boolean);
          return new Set(emails).size === emails.length;
        },
        { message: 'Teammate emails must be unique' }
      ),
  })
  // Ported from the old Yup `.when('isContractor', ...)` + date-order `.test(...)`.
  // This should require `endDate` (and check it's after `startDate`) only when
  // `isContractor` is true.
  .refine((data) => !data.isContractor && data.endDate === '', {
    message: 'End date is required for contractors and must be after the start date',
    path: ['endDate'],
  });

export type TeamOnboardingValues = z.infer<typeof teamOnboardingSchema>;
