import "reflect-metadata";
import Fastify from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import appCreateEndpoint from '@/endpoints/app/create';
import appGetByIdEndpoint from '@/endpoints/app/get-by-id';

export function buildServer() {
  const server = Fastify({ logger: true }).withTypeProvider<ZodTypeProvider>();
  server.register(appCreateEndpoint);
  server.register(appGetByIdEndpoint);
  return server;
}

if (require.main === module) {
  const server = buildServer();
  server
    .listen({ port: 3000, host: '0.0.0.0' })
    .then((address) => {
      server.log.info(`server listening on ${address}`);
    })
    .catch((err) => {
      server.log.error(err);
      process.exit(1);
    });
}
