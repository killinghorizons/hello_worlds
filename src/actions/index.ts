"use server";
import { desc, count, sql, ilike } from "drizzle-orm";
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

export const getCount = async () => {
  try {
    const data = await db.select({ count: count() }).from(hello);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getCategory = async (category: string) => {
  try {
    const data = await db
      .select()
      .from(hello)
      .where(ilike(hello.name, `${category}%`))
      .orderBy(hello.name);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
