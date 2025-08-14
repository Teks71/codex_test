import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { randomUUID } from 'crypto';
import {
  createAppRequestSchema,
  appResponseSchema,
  AppResponse,
} from '@/schemas/app-schema';
import { appRepository } from '@/repositories/app-repository';

export default async function appCreateEndpoint(server: FastifyInstance) {
  server.withTypeProvider<ZodTypeProvider>().post(
    '/af9e0c79-bf4e-4db6-92b9-595ba044babe/api/app/create',
    {
      schema: {
        body: createAppRequestSchema,
        response: {
          200: appResponseSchema,
        },
      },
    },
    async (request) => {
      const now = new Date().toISOString();
      const app: AppResponse = {
        id: randomUUID(),
        createdAt: now,
        updatedAt: now,
        logo: request.body.logo,
        name: request.body.name,
        description: request.body.description,
        appstoreLink: request.body.appstoreLink,
        isNew: request.body.isNew,
        isUpdated: request.body.isUpdated,
        categoryId: request.body.categoryId,
        screens: request.body.screens,
        screensCount: 0,
        scenariosCount: 0,
        videosCount: 0,
        category: {
          id: request.body.categoryId,
          createdAt: now,
          updatedAt: now,
          name: 'category',
          appCount: 0,
        },
      };

      appRepository.save(app);
      return app;
    }
  );
}
