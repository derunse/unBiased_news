import Image from 'next/image'
import { Header } from '@/components/Header'
import { DiscussionSection } from '@/components/DiscussionSection'
import { newsData } from '@/lib/data'
import { notFound } from 'next/navigation'

export default function NewsDetail({ params }: { params: { id: string } }) {
  const news = newsData.find((item) => item.id === params.id)

  if (!news) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#E8ECD7]">
      <Header />
      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <article className="bg-[#E8ECD7] shadow-lg rounded-lg overflow-hidden border border-[#47663B]">
          <div className="w-full overflow-hidden rounded-lg mb-6">
            <Image
              src={news.imageUrl}
              alt={news.title}
              width={800}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold text-[#1F4529] mb-6">{news.title}</h1>
          
            <div className="bg-[#47663B]/10 p-4 rounded-lg mb-6">
              <h2 className="text-xl font-semibold text-[#1F4529] mb-3">Fact 코너</h2>
              <ul className="list-disc pl-5 space-y-2">
                {news.facts.map((fact, index) => (
                  <li key={index} className="text-[#47663B]">{fact}</li>
                ))}
              </ul>
            </div>
          
            <DiscussionSection left={news.discussionLeft} right={news.discussionRight} />
          </div>
        </article>
      </main>
    </div>
  )
}

