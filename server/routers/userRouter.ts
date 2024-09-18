import { db } from '@/db';
import { friendshipsTable, usersTable, type SelectUser } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export const userRouter = router({
  getUsers: publicProcedure.query(async (): Promise<SelectUser[]> => {
    const users = await db.query.usersTable.findMany();
    return users;
  }),
  getUserById: publicProcedure
    .input(
      z.object({
        userId: z.number(),
      })
    )
    .query(async ({ input }): Promise<SelectUser | null> => {
      const { userId } = input;
      const user = await db.query.usersTable.findFirst({
        where: (users, { eq }) => eq(users.id, userId),
      });
      return user || null;
    }),
  getUserFriends: publicProcedure
    .input(z.object({ userId: z.number() }))
    .query(async ({ input }): Promise<SelectUser[] | null> => {
      const { userId } = input;
      const friends = await db
        .select({
          id: usersTable.id,
          first_name: usersTable.first_name,
          last_name: usersTable.last_name,
          email: usersTable.email,
        })
        .from(usersTable)
        .innerJoin(
          friendshipsTable,
          eq(friendshipsTable.friendId, usersTable.id)
        )
        .where(eq(friendshipsTable.userId, userId));

      return friends || null;
    }),
});
