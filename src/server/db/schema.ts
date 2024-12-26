import {
  boolean,
  integer,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username").notNull(),
  email: varchar("email").notNull().unique(),
  password: varchar("password").notNull(),
  bio: text("bio"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export const sessions = pgTable("sessions", {
  id: text("id").primaryKey(),
  user_id: integer("user_id")
    .references(() => users.id)
    .notNull()
    .unique(),
  expires_at: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  content: text("content"),
  user_id: integer("user_id")
    .references(() => users.id)
    .notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  content: text("content"),
  user_id: integer("user_id")
    .references(() => users.id)
    .notNull(),
  post_id: integer("post_id")
    .references(() => posts.id)
    .notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export const likes = pgTable(
  "likes",
  {
    user_id: integer("user_id").references(() => users.id),
    post_id: integer("post_id").references(() => posts.id),
    like: boolean("like"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at")
      .notNull()
      .$onUpdate(() => new Date()),
  },
  (table) => {
    return [
      {
        pk: primaryKey({ columns: [table.user_id, table.post_id] }),
      },
    ];
  }
);

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  content: varchar("content"),
  sender_id: integer("sender_id").references(() => users.id),
  receiver_id: integer("receiver_id").references(() => users.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});
