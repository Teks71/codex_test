import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import {
  getAppByIdRequestSchema,
  appResponseSchema,
} from '@/schemas/app-schema';
import { appRepository } from '@/repositories/app-repository';

export default async function appGetByIdEndpoint(server: FastifyInstance) {
  server.withTypeProvider<ZodTypeProvider>().post(
    '/af9e0c79-bf4e-4db6-92b9-595ba044babe/api/app/get-by-id',
    {
      schema: {
        body: getAppByIdRequestSchema,
        response: {
          200: appResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const app = appRepository.findById(request.body.id);
      if (!app) {
        return reply.code(404).send();
      }
      return app;
    }
  );
}
