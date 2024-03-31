import dotenv from 'dotenv';
import { bool, cleanEnv, num, str } from 'envalid';
import * as path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export const env = cleanEnv(process.env, {
  PORT: num({ default: 8080 }),
  JWT_SECRET_KEY: str(),
});
