
import express from "express";
import helmet from "helmet";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <!doctype html>
    <html lang="fr">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Eli Praise Academy</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #101014;
          color: white;
          text-align: center;
          padding: 40px 20px;
        }
        main {
          max-width: 480px;
          margin: 40px auto;
          padding: 28px;
          border: 1px solid #b99b55;
          border-radius: 18px;
        }
        h1 { color: #e6c77a; }
        input, button {
          box-sizing: border-box;
          width: 100%;
          padding: 14px;
          margin-top: 12px;
          border-radius: 8px;
          font-size: 16px;
        }
        button {
          background: #e6c77a;
          border: 0;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <main>
        <h1>Eli Praise Academy</h1>
        <p>Formation professionnelle de guitare</p>
        <p>Bienvenue dans ton espace musical.</p>
        <p>La plateforme de départ est prête à être configurée.</p>
      </main>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Eli Praise Academy écoute sur le port ${PORT}`);
});
