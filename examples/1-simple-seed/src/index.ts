import 'reflect-metadata';

import { getApp } from './app';

async function bootstrap() {
  const app = getApp();
  await app.start();
}

bootstrap().catch((error: Error) => {
  console.error(error);
  if (error.stack) {
    console.error(error.stack!.split('\n'));
  }
  process.exit(1);
});
