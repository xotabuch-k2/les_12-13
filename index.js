import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import fs, {promises} from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const PORT = process.env.PORT || 3000;
const app = express();

if (process.env.NODE_ENV == "development") {
    console.log("development nodemon");
} else if (process.env.NODE_ENV == "production") {
    console.log("production nodemon");
} else {
    console.log("start nodemon");
}

app.get("/", (req, res) => {
    res.write("<h1>Wellcome to study node.js</h1>");
    res.write("<h2>Json text</h2>");
    fs.readFile(path.join(__dirname, "./package.json"), (err, content) => {
        if (err) {
            console.error(err);
            res.status(500).send("Intervall Server Error");
        } else {
            const contentColumn = JSON.stringify(JSON.parse(content), null, 2);
            res.write("<pre>"+ contentColumn + "</pre>" );
            res.send();
        }
    })
})

//--------------hw-4
// app.get("/", async (req, res) => {
//     try {
//         res.write("<h1>Welcome to study async in node.js</h1>");
//         res.write("<h2>Json text</h2>")
//         const content = await promises.readFile(path.join(__dirname, "/package.json"));
//         const contentColumn = JSON.stringify(JSON.parse(content), null, 2);
//         res.write("<pre>" + contentColumn + "</pre>");
//         res.send();
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Interval Server Error");
//     }
// });


app.listen(PORT, () => {
    console.log(`Server satrted on http://localhost:${PORT}`);
})
