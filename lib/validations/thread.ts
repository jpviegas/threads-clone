import * as z from 'zod';

export const ThreadValidation = z.object({
  thread: z
    .string()
    .nonempty()
    .min(3, { message: 'THREAD MUST BE MORE THAN 3 CHARACTERS' })
    .max(30),
  accountId: z.string(),
});

export const CommentValidation = z.object({
  thread: z
    .string()
    .nonempty()
    .min(3, { message: 'COMMENT MUST BE MORE THAN 3 CHARACTERS' })
    .max(30),
});
