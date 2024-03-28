import app from 'app';
import { env } from './config';

(async function () {
  try {
    app.listen(env.PORT, () => {
      console.log(`💸 Server listening on 👉 ${env.PORT} 💥`);
    });
  } catch (error) {
    console.log(error);
  }
})();
