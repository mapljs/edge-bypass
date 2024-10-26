import { router } from '@mapl/app';

const app = router()
  .get('/', () => 'Hi');

export default app;
