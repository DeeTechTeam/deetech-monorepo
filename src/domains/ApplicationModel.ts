import { z } from "zod";

export const ApplicationModel = z.object({
    id: z.string().optional(),
    name: z.string().min(3).max(100),
    description: z.string().min(3).max(100),
    url: z.string().min(3).max(100).optional(),
    created_at: z.date().optional(),
    updated_at: z.date().optional(),
});

export const CreateApplicationModel = ApplicationModel.pick({
    name: true,
    description: true,
    url: true,
})

export const UpdateApplicationModel = ApplicationModel.pick({
    name: true,
    description: true,
    url: true,
})


export type CreateApplicationModel = z.infer<typeof CreateApplicationModel>
export type UpdateApplicationModel = z.infer<typeof UpdateApplicationModel>
export type ApplicationModel = z.infer<typeof ApplicationModel>

