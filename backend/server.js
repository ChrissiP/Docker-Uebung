import express from "express";
import mongodb from "mongodb";

const app = express();
const port = 3000;

const mongoHost = process.env.MONGODB_HOST || "localhost";
const mongoPort = process.env.MONGODB_PORT || 27017;
const mongoDbName = process.env.MONGODB_DB || "TestDB";

const mongoUrl = `mongodb://${mongoHost}:${mongoPort}/${mongoDbName}`;

app.get("/", async (req, res) => {
    try {
        const client = await mongodb.MongoClient.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const db = client.db(mongoDbName);
        const collection = db.collection("countries");
        const data = await collection.find().toArray();
        res.send(
            data
                .map(
                    (land) =>
                        `<h3>${land.name}</h3>
            <p>Gold: ${land.gold}</p>
            <p>Silber: ${land.silber}</p>
            <p>Bronze: ${land.bronze}</p>
            <p>Gesamt: ${land.gesamt}</p>`
                )
                .join("")
        );
        client.close();
    } catch (error) {
        console.log("Error getting Data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});