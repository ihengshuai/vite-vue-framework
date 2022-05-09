// web worker
import { fibonacci } from '@utils';

const analysisWorker = () => {
  const count = fibonacci(1000);
  postMessage(count);
};

analysisWorker();
