const fs = require("fs"); // 用于 createWriteStream
const fsPromises = require("fs").promises; // 用于异步文件操作
const path = require("path");
const https = require("https");

// 配置
const SOURCE_DIR = "./src"; // 源代码目录
const OUTPUT_DIR = "./public"; // 下载图片的目标目录

// 下载图片并返回本地文件名
async function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        const contentType = response.headers["content-type"];
        let ext = "png"; // 默认扩展名
        if (contentType.includes("svg")) ext = "svg";
        else if (contentType.includes("jpeg") || contentType.includes("jpg"))
          ext = "jpg";

        // 使用 URL 的唯一部分生成文件名
        const fileName =
          url.split("/").pop().split("?")[0] || `image-${Date.now()}.${ext}`;
        const filePath = path.join(OUTPUT_DIR, fileName);

        const file = fs.createWriteStream(filePath); // 使用 fs 的同步方法
        response.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve(fileName);
        });
        file.on("error", (err) => {
          reject(err);
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

// 处理单个文件
async function processFile(filePath) {
  let content = await fsPromises.readFile(filePath, "utf-8"); // 使用 fs.promises

  const downloads = new Map(); // 存储 URL 和本地文件名的映射

  // 1. 处理 bg-[url()]
  const bgUrlRegex = /bg-\[url\((.*?)\)\]/g;
  let match;
  while ((match = bgUrlRegex.exec(content)) !== null) {
    const url = match[1]; // URL 部分，例如 https://...
    if (!downloads.has(url)) {
      try {
        const localFileName = await downloadImage(url);
        downloads.set(url, localFileName);
      } catch (err) {
        console.error(`Failed to download bg-url ${url}: ${err.message}`);
      }
    }
  }

  // 2. 处理 <img src="...">
  const imgSrcRegex = /<img\s+[^>]*src=["'](.*?)["']/g;
  while ((match = imgSrcRegex.exec(content)) !== null) {
    const url = match[1]; // src 中的 URL
    if (!downloads.has(url)) {
      try {
        const localFileName = await downloadImage(url);
        downloads.set(url, localFileName);
      } catch (err) {
        console.error(`Failed to download img-src ${url}: ${err.message}`);
      }
    }
  }

  // 替换所有 URL 为本地路径
  for (const [url, localFileName] of downloads) {
    // 替换 bg-[url()]
    const bgOriginal = `bg-[url(${url})]`;
    const bgReplacement = `bg-[url(/${localFileName})]`;
    content = content.replaceAll(bgOriginal, bgReplacement);

    // 替换 <img src>
    const imgOriginal = `src="${url}"`;
    const imgReplacement = `src="/${localFileName}"`;
    content = content.replaceAll(imgOriginal, imgReplacement);
  }

  // 写回文件
  await fsPromises.writeFile(filePath, content, "utf-8"); // 使用 fs.promises
  console.log(`Processed: ${filePath}`);
}

// 递归扫描目录
async function scanDirectory(dir) {
  const entries = await fsPromises.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await scanDirectory(fullPath); // 递归处理子目录
    } else if (entry.isFile() && fullPath.endsWith(".tsx")) {
      await processFile(fullPath); // 处理 .tsx 文件
    }
  }
}

// 主函数
async function main() {
  try {
    // 确保输出目录存在
    await fsPromises.mkdir(OUTPUT_DIR, { recursive: true });
    // 开始扫描和处理
    await scanDirectory(SOURCE_DIR);
    console.log("All images downloaded and updated successfully!");
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
