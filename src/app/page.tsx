import Layout from '@/components/layout/Layout';
import { Card3D } from '@/components/ui/Card3D';
import { HeroParallaxDemo } from '@/components/ui/hero-parallax-demo';
import Image from 'next/image';
import { Lens } from '@/components/ui/Lens';
import Link from 'next/link';

interface BlogPost {
  title: string;
  content: string;
  // ... 其他属性
}

const blogPosts: BlogPost[] = [
  // ... 你的博客文章数据
];

export default function Home() {
  return (
    <Layout>
      <div className="relative min-h-screen">
        <div className="relative z-20 container mx-auto px-4 py-8">
          {/* Content */}
          <div className="relative z-20 space-y-16">
            {/* Hero Section */}
            <div className="relative">
              <div className="absolute inset-0 -z-10">
                <Image
                  src="/mememe.png"
                  alt="Background"
                  fill
                  className="rounded-lg object-cover opacity-40 blur-[1px]"
                  priority
                />
              </div>

              <div className="min-h-[700px] flex items-center justify-center">
                <Card3D className="relative w-[700px] h-[400px] bg-black/30 backdrop-blur-sm rounded-xl">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-[#4f85a6] mt-1 transition-colors duration-500 hover:text-blue-500">
                      Full-stack Developer
                    </h2>
                    <h1 className="text-[108px] leading-none font-bold text-[#4f85a6] tracking-tight transition-colors duration-500 hover:text-blue-500">
                      Ivan Zhao
                    </h1>
                    <Link 
                      href="/uiux/page.tsx" 
                      className="inline-block text-[48px] font-bold text-[#4f85a6] mt-2 transition-all duration-500 hover:text-blue-500 hover:scale-105 cursor-pointer"
                    >
                      UI/UX   
                    </Link>
                    <h2 className="text-[48px] font-bold text-[#4f85a6] mt-2">
                      Front-end
                    </h2>
                    <h2 className="text-[48px] font-bold text-[#4f85a6] mt-2">
                      Back-end
                    </h2>
                  </div>
                </Card3D>
              </div>
            </div>

            {/* Lens */}
            <div className="flex justify-center gap-12 mt-16 px-8">
              <Link href="/uiux" className="block">
                <div className="w-[400px] bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-[300px] p-4">
                    <Lens lensSize={200} zoomFactor={1.5}>
                      <div className="relative w-full h-full rounded-lg overflow-hidden" style={{ minHeight: '300px' }}>
                        <Image
                          src="/UIUX.jpg"
                          alt="UI/UX Project"
                          fill
                          className="object-cover"
                          sizes="(max-width: 400px) 100vw, 400px"
                          priority
                        />
                      </div>
                    </Lens>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800">UI/UX</h3>
                    <p className="text-gray-600 mt-2">Focused on creating intuitive and user-friendly interfaces to enhance user experience and product value.</p>
                  </div>
                </div>
              </Link>

              <div className="w-[400px] bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-[300px] p-4">
                  <Lens lensSize={200} zoomFactor={1.5}>
                    <div className="relative w-full h-full rounded-lg overflow-hidden" style={{ minHeight: '300px' }}>
                      <Image
                        src="/WEB.jpg"
                        alt="Front-end Project"
                        fill
                        className="object-cover"
                        sizes="(max-width: 400px) 100vw, 400px"
                        priority
                      />
                    </div>
                  </Lens>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">Front-end</h3>
                  <p className="text-gray-600 mt-2">Front-end development encompasses the complete web layout and interaction from design to implementation.</p>
                </div>
              </div>

              <div className="w-[400px] bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-[300px] p-4">
                  <Lens lensSize={200} zoomFactor={1.5}>
                    <div className="relative w-full h-full rounded-lg overflow-hidden" style={{ minHeight: '300px' }}>
                      <Image
                        src="/github.jpg"
                        alt="Back-end Project"
                        fill
                        className="object-cover"
                        sizes="(max-width: 400px) 100vw, 400px"
                        priority
                      />
                    </div>
                  </Lens>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">Back-end</h3>
                  <p className="text-gray-600 mt-2">Back-end development showcases my skills in server-side programming and database management.</p>
                </div>
              </div>
            </div>

            {/* Parallax Section */}
            <div className="-mx-4">
              <HeroParallaxDemo />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
