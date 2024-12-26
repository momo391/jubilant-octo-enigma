import {
  comments,
  likes,
  messages,
  posts,
  sessions,
  users,
} from "@/server/db/schema";
import { InferInsertModel } from "drizzle-orm";

export type User = InferInsertModel<typeof users>;
export type Post = InferInsertModel<typeof posts>;
export type Comment = InferInsertModel<typeof comments>;
export type Like = InferInsertModel<typeof likes>;
export type Message = InferInsertModel<typeof messages>;
export type Session = InferInsertModel<typeof sessions>;
