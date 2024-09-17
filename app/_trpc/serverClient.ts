import { appRouter } from '@/server';
import { createCallerFactory } from '../../server/trpc';

export const createCaller = createCallerFactory(appRouter);

// 2. create a caller using your `Context`
export const caller = createCaller({});
