import * as express from 'express';

const app = express();
const PORT = 3466;

app
  .get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
  )
  .listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
