import * as express from 'express';

const app = express();

// TODO: return HTML, instead.
app.get('/', (req, res) => {
  res.json({});
});

app.listen(3000 || process.env.PORT, function () {
  console.log(this.address());
});
