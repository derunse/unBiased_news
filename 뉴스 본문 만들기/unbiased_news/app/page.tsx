import { Header } from '@/components/Header'
import { NewsCard } from '@/components/NewsCard'
import { newsData } from '@/lib/data'

export default function Home() {
  const sortedNews = newsData
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-[#E8ECD7]">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#1F4529] mb-6 flex items-baseline">
          최신 뉴스 
          <span className="text-lg font-normal text-[#47663B] ml-4">2024년 12월 06일</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </main>
    </div>
  )
}

