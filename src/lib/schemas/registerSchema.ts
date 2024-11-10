import {z} from 'zod';

export const registerSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6, {message: "Le mot de passe doit être d'un minimum de 6 characteres."})
})

export type RegisterSchema = z.infer<typeof registerSchema>