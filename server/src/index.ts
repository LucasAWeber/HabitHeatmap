import express from 'express'

const app = express();
const port = 3001;

// Hello world endpoint
app.get('/api/hello', (_req, res) => {
    res.json({message: 'Hello from backend!'});
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});