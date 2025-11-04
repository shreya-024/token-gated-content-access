import express from "express";
import { exec } from "child_process";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const CONTRACT_ID = "CDVBQS4QEX3Z3RHIMGG3JDKL2SRPG7WXOP4YOKAGTEHMA2YSFJSEKQDT";

// check token ownership
app.get("/api/has-access/:addr", (req, res) => {
  const addr = req.params.addr;
  const cmd = `soroban contract invoke --id ${CONTRACT_ID} --source admin --network-passphrase "Test SDF Network ; September 2015" --rpc-url https://soroban-testnet.stellar.org -- has_access --who ${addr}`;
  console.log("Running command:", cmd);

  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      console.error("stderr:", stderr || err);
      return res.status(500).json({ error: stderr || err.message });
    }

    const result = stdout.trim().toLowerCase() === "true";
    console.log(`Access for ${addr}: ${result}`);
    res.json({ address: addr, hasAccess: result });
  });
});

// content routes
app.get("/pdf", (req, res) => {
  res.send("This is the protected PDF content endpoint.");
});

app.get("/link", (req, res) => {
  res.send("This is the protected Link content endpoint.");
});

app.get("/video", (req, res) => {
  res.send("This is the protected Video content endpoint.");
});

app.get("/image", (req, res) => {
  res.send("This is the protected Image content endpoint.");
});

app.get("/api", (req, res) => {
  res.send("This is the protected API content endpoint.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
