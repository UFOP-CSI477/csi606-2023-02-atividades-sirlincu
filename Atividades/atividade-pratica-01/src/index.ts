require("dotenv").config({ path: __dirname + "/.env" });

const express = require("express");
const bloodTypeRoutes = require("./routes/bloodRoutes.ts");
const peopleRoutes = require("./routes/peopleRoutes.ts");
const locationRoutes = require("./routes/collectLocationRoutes.ts");
const donationRoutes = require("./routes/donationRoutes.ts");

const app = express();

app.use(express.json());

app.use("/bloodTypes", bloodTypeRoutes);
app.use("/people", peopleRoutes);
app.use("/location", locationRoutes);
app.use("/donation", donationRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
