import { z } from 'zod';

export const appScreensSchema = z.object({
  frontSrc: z.string().optional(),
  backSrc: z.string().optional(),
});

export const appCategorySchema = z.object({
  id: z.string().max(64),
  createdAt: z.string(),
  updatedAt: z.string(),
  name: z.string().min(1).max(100),
  appCount: z.number(),
});

export const createAppRequestSchema = z.object({
  logo: z.string().optional(),
  name: z.string().min(1).max(200),
  description: z.string().min(1).max(1000).optional(),
  appstoreLink: z.string().url().optional(),
  isNew: z.boolean().optional(),
  isUpdated: z.boolean().optional(),
  categoryId: z.string().max(64),
  screens: appScreensSchema.optional(),
});

export const getAppByIdRequestSchema = z.object({
  id: z.string().max(64),
});

export const appResponseSchema = z.object({
  id: z.string().max(64),
  createdAt: z.string(),
  updatedAt: z.string(),
  logo: z.string().optional(),
  name: z.string().min(1).max(200),
  description: z.string().min(1).max(1000).optional(),
  appstoreLink: z.string().url().optional(),
  isNew: z.boolean().optional(),
  isUpdated: z.boolean().optional(),
  categoryId: z.string().max(64),
  screens: appScreensSchema.optional(),
  screensCount: z.number().optional(),
  scenariosCount: z.number().optional(),
  videosCount: z.number().optional(),
  category: appCategorySchema.optional(),
});

export type CreateAppRequest = z.infer<typeof createAppRequestSchema>;
export type AppResponse = z.infer<typeof appResponseSchema>;
export type GetAppByIdRequest = z.infer<typeof getAppByIdRequestSchema>;
