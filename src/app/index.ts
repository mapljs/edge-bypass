import { aotc, router } from '@mapl/app';

const app = router()
  .get('/', {
    type: 'text',
    fn: () => 'Hi'
  });

export default aotc(app);
