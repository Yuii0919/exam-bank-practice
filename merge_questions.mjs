import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import NEW_J from "./newbatch-j.mjs";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const qPath = path.join(__dirname, "questions.js");
const norm = (s)=>String(s||"").replace(/^\s*\d+\.\s*/,"").replace(/\s+/g,"").replace(/[\u3000]/g,"").trim();
const raw = fs.readFileSync(qPath,"utf8");
const a = raw.indexOf("const QUESTIONS_RAW = [") + "const QUESTIONS_RAW = ".length;
const e = raw.lastIndexOf("];");
const old = JSON.parse(raw.slice(a,e+1));
const seen = new Set();
const out=[];
for(const q of [...NEW_J,...old]){ const k=norm(q.stem); if(!k||seen.has(k)) continue; seen.add(k); out.push({...q}); }
out.forEach((q,i)=>q.id="q"+String(i+1).padStart(3,"0"));
const header=`/* eslint-disable max-len */\n/**\n * 題庫來源：使用者匯入；題幹與選項維持原文。\n * 合併規則：新批次在前，題幹（略去開頭題號並去空白）相同者刪除重複、保留先出現者。\n * image：相對於本頁的 images/ 檔名。\n * referenceAnswer：參考用；若與課程標準不同請自行修改。\n */\n`;
fs.writeFileSync(qPath, header+"const QUESTIONS_RAW = "+JSON.stringify(out,null,2)+";\n","utf8");
console.log("NEW",NEW_J.length,"OLD",old.length,"MERGED",out.length,"REMOVED",NEW_J.length+old.length-out.length);
