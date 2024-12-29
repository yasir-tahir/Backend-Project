import * as z from 'zod';

export const schema = z.object({
    'product-name':  z.string().min(3, { message: 'Required'}).max(20),
     age: z.number().min(10),
})