const PORT = process.env.PORT || 5000;
import express, { Request, Response, Express } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀.`);
});