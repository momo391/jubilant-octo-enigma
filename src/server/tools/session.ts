import { sha256 } from "@oslojs/crypto/sha2";
import {
  encodeBase32LowerCaseNoPadding,
  encodeHexLowerCase,
} from "@oslojs/encoding";
import { eq } from "drizzle-orm";
import { Session, User } from "@/types";
import { db } from "@/server/db";
import { sessions, users } from "@/server/db/schema";

export function generateSessionToken(): string {
  const bytes = new Uint8Array(20);
  crypto.getRandomValues(bytes);
  const token = encodeBase32LowerCaseNoPadding(bytes);
  return token;
}

export async function createSession(
  token: string,
  user_id: number
): Promise<Session> {
  const session_id = encodeHexLowerCase(
    sha256(new TextEncoder().encode(token))
  );
  const session: Session = {
    id: session_id,
    user_id,
    expires_at: new Date(Date.now() + 1000 * 60 * 60 * 2),
  };
  await db.insert(sessions).values(session);
  return session;
}

export async function validateSessionToken(
  token: string
): Promise<SessionValidateResult> {
  const session_id = encodeHexLowerCase(
    sha256(new TextEncoder().encode(token))
  );

  const result: { session: Session; user: User }[] = await db
    .select({ session: sessions, user: users })
    .from(sessions)
    .innerJoin(users, eq(sessions.user_id, users.id))
    .where(eq(sessions.id, session_id));

  if (result.length < 1) {
    return { session: null, user: null };
  }

  const { user, session } = result[0];
  if (Date.now() >= session.expires_at.getTime()) {
    await db.delete(sessions).where(eq(sessions.id, session.id));
    return { session: null, user: null };
  }

  if (Date.now() >= session.expires_at.getTime() - 1000 * 60 * 60 * 1) {
    session.expires_at = new Date(Date.now() + 1000 * 60 * 60 * 2);

    await db
      .update(sessions)
      .set({
        expires_at: session.expires_at,
      })
      .where(eq(sessions.id, session_id));
  }

  return { session: session, user: user };
}

export async function invalidateSessionToken(
  session_id: string
): Promise<void> {
  await db.delete(sessions).where(eq(sessions.id, session_id));
}

export type SessionValidateResult =
  | { session: Session; user: User }
  | { session: null; user: null };
