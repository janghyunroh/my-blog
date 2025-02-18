// src/lib/markdown.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// 마크다운 파일이 저장되는 디렉토리 (예: 프로젝트 루트의 posts 폴더)
const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostData(fileName) {
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { data, content };
}

export async function markdownToHtml(markdownContent) {
  const processedContent = await remark()
    .use(html)
    .process(markdownContent);
  return processedContent.toString();
}
