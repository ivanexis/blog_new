"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end end"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);

  return (
    <div className="w-full" ref={containerRef}>
      <div ref={ref} className="relative">
        {data.map((item, index) => (
          <div key={index} className="mb-8 relative">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-bold">{item.title}</span>
              </div>
              <div className="ml-4 flex-1">
                <div className="bg-white p-4 rounded-lg shadow">
                  {item.content}
                </div>
              </div>
            </div>
            {index < data.length - 1 && (
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200" />
            )}
          </div>
        ))}
        <motion.div
          className="absolute left-6 top-0 w-0.5 bg-blue-500 origin-top"
          style={{ height: heightTransform }}
        />
      </div>
    </div>
  );
}; 