"use server";
import { desc } from "drizzle-orm";
import { db } from "@/db/drizzle";
import { hello } from "@/db/schema";

// List all
export const getData = async () => {
  try {
    const data = await db.select().from(hello).orderBy(desc(hello.id));
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
