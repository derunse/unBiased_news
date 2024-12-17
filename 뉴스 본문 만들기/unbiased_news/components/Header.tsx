import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="bg-[#47663B] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-8">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%96%B8%EB%B0%94%EC%9D%B4%EC%96%B4%EC%8A%A4%EB%93%9C%20%EB%A1%9C%EA%B3%A0-u9UR83gVVFHw685tkVP5tW8hQDwhFu.png"
              alt="언바이어스드 뉴스"
              width={750}
              height={225}
              className="h-48 w-auto"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}

