// app/page.tsx
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
    { id: '3', title: 'Reactフックの活用法', author: 'Jane Smith', excerpt: 'useStateとuseEffectの詳細な解説...' },
    { id: '4', title: 'Reactフックの活用法', author: 'Jane Smith', excerpt: 'useStateとuseEffectの詳細な解説...' },
    { id: '5', title: 'Reactフックの活用法', author: 'Jane Smith', excerpt: 'useStateとuseEffectの詳細な解説...' },
    { id: '6', title: 'Reactフックの活用法', author: 'Jane Smith', excerpt: 'useStateとuseEffectの詳細な解説...' },
    // ... 他の記事
  ];
}

export default async function Home() {
  const articles = await getArticles();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <header className="py-8">
          <div className="flex items-center space-x-4">
            <ZennLogo width={20} height={20} />
            <h1 className="text-2xl font-bold">Jenn</h1>
            <ContentTabs />
          </div>
        </header>
        
        {/* パンくずリスト
        <nav className="text-sm breadcrumbs mb-8">
          <ul className="flex space-x-2 text-gray-500">
            <li><Link href="/" className="hover:text-blue-600">ホーム</Link></li>
            <li className="before:content-['>'] before:mx-2">Tech</li>
          </ul>
        </nav> */}
      </div>

      <div className="bg-sky-50 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <main>
            <h2 className="text-3xl font-bold mb-8">Tech</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <div key={article.id} className="border rounded-lg p-4 shadow-md bg-white">
                  <Link href={`/articles/${article.id}`}>
                    <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  </Link>
                  <p className="text-gray-600 mb-2">著者: {article.author}</p>
                  <p className="text-gray-700">{article.excerpt}</p>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

