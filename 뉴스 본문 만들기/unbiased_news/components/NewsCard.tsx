import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NewsItem } from '@/lib/data'

export function NewsCard({ news }: { news: NewsItem }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#E8ECD7] border border-[#47663B]">
      <CardHeader className="p-0">
        <Image
          src={news.imageUrl}
          alt={news.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="mb-2">
          <Link href={`/${news.id}`} className="text-xl font-semibold hover:underline text-[#1F4529]">
            {news.title}
          </Link>
        </CardTitle>
        <p className="text-sm text-[#47663B] mb-2">{news.facts[0]}</p>
        <p className="text-xs text-[#47663B] opacity-70">{news.date}</p>
      </CardContent>
    </Card>
  )
}

