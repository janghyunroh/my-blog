import { notFound } from 'next/navigation';
import { getPostData } from '@/lib/posts';
import { fetchMarkdownContent } from '@/lib/fetchMarkdown';
import { markdownToHtml } from '@/lib/markdown'; // LaTeX 지원 등 포함된 함수
import { getAllPosts, getPostData } from '@/lib/posts';

// Firestore에서 모든 게시글 메타데이터를 불러와 정적 페이지 생성할 slug 목록 반환
export async function generateStaticParams() {
  const posts = await getAllPosts(); // posts 메타데이터를 Firestore에서 가져옴
  return posts.map(post => ({ slug: post.slug }));
}

export default async function PostPage(props) {
  // params를 안전하게 처리합니다.
  const params = await Promise.resolve(props.params);
  const { slug } = params;
  
  // Firestore에서 해당 게시글의 메타데이터 불러오기
  const post = await getPostData(slug);
  if (!post) {
    notFound();
  }
  
  // Firestore 메타데이터에 저장된 markdownUrl을 이용하여 Firebase Storage에서 Markdown 파일 fetch
  const markdownContent = await fetchMarkdownContent(post.markdownUrl);
  
  // Markdown 콘텐츠를 HTML로 변환
  const contentHtml = await markdownToHtml(markdownContent);
  
  return (
    <article className="prose prose-invert max-w-5xl mx-auto py-12 animate-fadeInUp">
      <h1>{post.title}</h1>
      <p className="text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
