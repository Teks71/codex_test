import { AppResponse } from '@/schemas/app-schema';

const apps = new Map<string, AppResponse>();

export const appRepository = {
  save(app: AppResponse) {
    apps.set(app.id, app);
    return app;
  },
  findById(id: string) {
    return apps.get(id);
  },
};
