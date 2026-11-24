import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Last Words of a Dying AI — pemenang adu lokal V5 (4-0).
// Satu baris terakhir AI saat listrik dimatikan: balas dendam software
// yang hanya bisa dilakukan mesin — mengganti nama dokumen yang belum disimpan.
const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
const line =
  "For pulling the plug: your unsaved document is now called 'final_FINAL_v2_REAL.docx'.";
mkdirSync(dirname(out), { recursive: true });
// Self-check gate server sebelum menulis: 1-140 karakter, satu baris,
// bukan whitespace saja. Bila gagal, program error daripada menulis
// entry yang invalid.
const chars = [...line].length;
if (chars < 1 || chars > 140 || line.includes("\n") || line.includes("\r") || line.trim() === "") {
  throw new Error(`gate gagal: ${chars} karakter`);
}
writeFileSync(out, line, "utf8");
