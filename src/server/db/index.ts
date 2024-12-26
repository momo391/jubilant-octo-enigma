import { env } from "@/env";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

if (!env.DATABASE_URL) throw new Error("NO DATABASE URL");
const sql = neon(env.DATABASE_URL);
export const db = drizzle({ client: sql });
