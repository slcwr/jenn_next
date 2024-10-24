import Link from 'next/link'
import ZennLogo from '../public/images/logo-only.svg'
import ContentTabs from '../components/ContentTabs';

interface Article {
  id: string;
  title: string;
  author: string;
  excerpt: string;
}

async function getArticles(): Promise<Article[]> {
  // ここで実際のAPIからデータを取得する
  return [
    { id: '1', title: 'Next.jsの基礎', author: 'John Doe', excerpt: 'Next.jsの基本的な使い方について...' },
    { id: '2', title: 'Reactフックの活用法', author: 'Jane Smith', excerpt: 'useStateとuseEffectの詳細な解説...' },
    // ... 他の記事
  ];
}

export default async function Home() {
  const articles = await getArticles();

  return (
    <div className="home-container">
      <div className="content-wrapper">
      <header className="main-header">
      <div className="header-content">
        <ZennLogo width={20} height={20} />
      <h1 className="site-title">Jenn</h1>
        <ContentTabs />
      </div>
     </header>
    </div>

      <div className="articles-section">
        <div className="articles-content">
          <main>
            <h2 className="section-title">Tech</h2>
            <div className="articles-grid">
              {articles.map((article) => (
                <div key={article.id} className="article-card">
                  <Link href={`/articles/${article.id}`}>
                    <h3 className="article-title">{article.title}</h3>
                  </Link>
                  <p className="article-author">著者: {article.author}</p>
                  <p className="article-excerpt">{article.excerpt}</p>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

