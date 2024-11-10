import {z} from 'zod';

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, {message: "Le mot de passe doit être d'un minimum de 6 characteres."})
})

export type LoginSchema = z.infer<typeof loginSchema>