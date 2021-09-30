// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { z } from 'zod';

const privateKeySchema = z.string();
export const privateKey = privateKeySchema.parse(process.env.PRIVATE_KEY);
