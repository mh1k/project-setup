import app from './app';
import config from './app/config';

import mongoose from 'mongoose';

async function main() {
  // await mongoose.connect(process.env.DATABASE_URL);
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
