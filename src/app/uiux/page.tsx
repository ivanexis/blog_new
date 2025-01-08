'use client';

import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import React from "react";
import { Timeline } from "@/components/ui/timeline";

// 時間軸數據
const timelineData = [
  {
    title: "2024",
    content: (
      <div>
        <h3 className="font-semibold">UI/UX 設計專案</h3>
        <p>完成多個使用者介面設計和使用者體驗優化專案</p>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <h3 className="font-semibold">網頁設計專案</h3>
        <p>設計並實現響應式網頁介面</p>
      </div>
    ),
  },
];

// 作品集數據
const portfolioItems = [
  {
    id: 1,
    title: "使用者介面設計",
    description: "專注於創造直觀且美觀的使用者介面，結合現代設計趨勢和使用者體驗原則。",
    image: "/UIUX.jpg",
    alt: "UI/UX Project 1"
  },
  {
    id: 2,
    title: "使用者體驗優化",
    description: "透過用戶研究和反饋優化設計，確保每個互動環節都能帶來良好的使用體驗。",
    image: "/WEB.jpg",
    alt: "UI/UX Project 2"
  }
];

// 設計理念列表
const designPrinciples = [
  "直觀的操作流程",
  "清晰的視覺層級",
  "一致的設計語言",
  "適當的視覺反饋"
];

export default function UIUXPage() {
  return (
    <Layout>
      <div className="relative min-h-screen">
        <div className="relative z-20 container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* 頁面標題 */}
            <h1 className="text-4xl font-bold text-gray-800">UI/UX 作品集</h1>
           
            {/* 作品展示區 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-[300px]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-800">{item.title}</h2>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 設計理念區塊 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">設計理念</h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  在設計過程中，我始終堅持以用戶為中心的設計理念，注重：
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  {designPrinciples.map((principle, index) => (
                    <li key={index}>{principle}</li>
                  ))}
                </ul>
                <p>
                  每個專案都經過深入的用戶研究和多輪測試，確保最終產品不僅美觀，
                  更重要的是能夠真正解決用戶的需求。
                </p>
              </div>
            </div>

            {/* 時間軸區塊 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">專案時間軸</h2>
              <Timeline data={timelineData} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}