import { string } from "prop-types"
import {z} from "zod"

const schema = z.object({
    name: z.string().min(3),
    price: z.number().min(2).max(100)
})

export default schema