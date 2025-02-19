// src/app/portfolio/page.js
export default function PortfolioPage() {
    return (
      <div className="py-12 animate-fadeInUp"> {/* 네비게이션 바 아래로 충분한 여백 추가 */}
        <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
        <div className="space-y-6">
          {Array.from({ length: 30 }).map((_, idx) => (
            <p key={idx}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Phasellus nec iaculis mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          ))}
        </div>
      </div>
    );
  }
  