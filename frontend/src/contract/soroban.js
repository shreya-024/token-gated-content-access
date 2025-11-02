import express from "express";
import { exec } from "child_process";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const CONTRACT_ID =
  process.env.CONTRACT_ID ||
  "CCRB4X7KAVVK2U3TW6TCKGUMQ6XLSS2UBGZV3VTV5HUNIBEREO5CHWZD";

app.get("/api/has-access/:addr", async (req, res) => {
  const addr = req.params.addr;

  const cmd = `soroban --% contract invoke --id ${CONTRACT_ID} \
--source-account ${addr} \
--network-passphrase "Test SDF Network ; September 2015" \
--rpc-url https://soroban-testnet.stellar.org \
-- has_access who=${addr}`;

  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      console.error("stderr:", stderr || err);
      return res.status(500).json({ error: stderr || err.message });
    }
    console.log("stdout:", stdout);
    const hasAccess = stdout.includes("true");
    return res.json({ address: addr, hasAccess });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
