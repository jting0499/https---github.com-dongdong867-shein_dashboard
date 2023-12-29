import { z } from "zod"

export const Factory = z.object({
	id: z.string(),
	name: z.string(),
	phone: z.string(),
    address: z.string(),
	ability: z.number(),
	status: z.enum(["working", "idle"]),
    schedule: z.array(
        z.object({
            orderId: z.string(),
            index: z.number(),
    })),
})

export type Factory = z.infer<typeof Factory>
