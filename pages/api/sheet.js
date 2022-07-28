import key from "../../key.json";
const { GoogleSpreadsheet } = require("google-spreadsheet");

export const getData = async () => {
  const doc = new GoogleSpreadsheet(
    "10wlsEzk6kMadGNM2PRJXnFKvVwzQV_D74Hp43YRuowQ"
  );

  await doc.useServiceAccountAuth({
    client_email: key.client_email,
    private_key: key.private_key,
  });

  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  const organizare = rows.map((row) => {
    return { name: row["Nume Invitat"], table: row.Masa };
  });

  return organizare;
};

export default async function handler(req, res) {
  try {
    const doc = new GoogleSpreadsheet(
      "10wlsEzk6kMadGNM2PRJXnFKvVwzQV_D74Hp43YRuowQ"
    );

    await doc.useServiceAccountAuth({
      client_email: key.client_email,
      private_key: key.private_key,
    });

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    const organizare = rows.map((row) => {
      return { name: row["Nume Invitat"], table: row.Masa };
    });

    return res.status(200).send(JSON.stringify({ data: organizare }));
  } catch (e) {
    return res
      .status(400)
      .send(JSON.stringify({ error: true, message: e.message }));
  }
}
