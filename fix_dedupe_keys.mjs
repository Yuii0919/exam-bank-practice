/**
 * 以「去掉開頭題號」後的題幹做去重，保留先出現的一題。
 * node fix_dedupe_keys.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const qPath = path.join(__dirname, "questions.js");

function normStem(s) {
  return String(s || "")
    .replace(/\s+/g, "")
    .replace(/[\u3000]/g, "")
    .trim();
}

/** 去重鍵：移除開頭「數字.」題號後再正規化 */
function dedupeKey(stem) {
  const body = String(stem || "").replace(/^\s*\d+\.[\s]*/, "");
  return normStem(body);
}

const raw = fs.readFileSync(qPath, "utf8");
const a = raw.indexOf("const QUESTIONS_RAW = [") + "const QUESTIONS_RAW = ".length;
const end = raw.lastIndexOf("];");
const arr = new Function("return " + raw.slice(a, end + 2))();

const seen = new Set();
const out = [];
for (const q of arr) {
  const k = dedupeKey(q.stem);
  if (!k) continue;
  if (seen.has(k)) continue;
  seen.add(k);
  out.push({ ...q });
}

out.forEach((q, i) => {
  q.id = "q" + String(i + 1).padStart(3, "0");
});

const header = raw.slice(0, raw.indexOf("const QUESTIONS_RAW = ["));
const body = "const QUESTIONS_RAW = " + JSON.stringify(out, null, 2) + ";\n";
fs.writeFileSync(qPath, header + body, "utf8");

console.log("before", arr.length, "after", out.length, "removed", arr.length - out.length);
