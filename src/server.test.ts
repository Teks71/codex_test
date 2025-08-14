import { describe, it, expect } from 'vitest';
import { buildServer } from './server';

describe('server', () => {
  it('builds', () => {
    const server = buildServer();
    expect(server).toBeTruthy();
  });
});
