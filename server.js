import express from "express";
import cors from "cors";
import axios from "axios";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/foods/:food", async function (req, res) {
  try {
    let { food } = req.params;
    let response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${food}`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () =>
  console.log(`Express server application is running on port ${PORT}`)
);