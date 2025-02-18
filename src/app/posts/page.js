// src/app/posts/page.js
export default function PostsPage() {
    return (
      <div className="flex py-10">
        {/* 좌측 사이드바: 게시글 트리 구조 */}
        <aside className="w-1/4 p-4 border-r">
          <h2 className="text-xl font-bold mb-4">게시글 목록</h2>
          {/* 게시글 목록(트리 구조) 구성 */}
        </aside>
        {/* 메인 콘텐츠 영역: 선택된 게시글 내용 */}
        <section className="w-3/4 p-4">
          <p>게시글을 선택해 주세요.</p>
        </section>
      </div>
    );
  }
  