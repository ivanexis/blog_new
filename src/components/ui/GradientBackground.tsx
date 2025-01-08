"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { ShootingStars } from "./ShootingStars";
import { StarsBackground } from "./StarsBackground";

interface GradientBackgroundProps {
  className?: string;
  fromColor?: string;      // 開始顏色
  viaColor?: string;       // 中間顏色
  toColor?: string;        // 結束顏色
  children?: React.ReactNode;
  enabled?: boolean;       // 是否啟用背景效果
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  className,
  fromColor = "black",           // 預設黑色
  viaColor = "blue-950/20",      // 預設深藍色20%透明度
  toColor = "black",             // 預設黑色
  children,
  enabled = true                 // 預設啟用
}) => {
  if (!enabled) return null;     // 如果禁用，則不渲染任何內容

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className={cn(
        "absolute inset-0",
        `bg-gradient-to-b from-${fromColor} via-${viaColor} to-${toColor}`,
        className
      )}>
        {/* 星空背景設置 */}
        <StarsBackground 
          className="z-0"
          starDensity={0.0003}        // 星星密度：數值越大，星星越多
          allStarsTwinkle={true}      // 是否所有星星都閃爍
          twinkleProbability={0.85}    // 星星閃爍機率：0-1之間
          minTwinkleSpeed={0.4}       // 最小閃爍速度：數值越小，閃爍越慢
          maxTwinkleSpeed={0.8}       // 最大閃爍速度：數值越大，閃爍越快
        />
        
        {/* 流星效果設置 */}
        <ShootingStars 
          className="z-10" 
          starColor="#4f85a6"         // 流星顏色：可使用色碼
          trailColor="#ffffff"        // 流星尾跡顏色：可使用色碼
          minDelay={600}              // 最小延遲時間：數值越小，流星出現越頻繁
          maxDelay={2000}             // 最大延遲時間：數值越大，流星出現間隔越長
          minSpeed={20}               // 最小速度：數值越大，流星最慢速度越快
          maxSpeed={40}               // 最大速度：數值越大，流星最快速度越快
          starWidth={15}              // 流星寬度：越大流星越粗
          starHeight={2}              // 流星高度：越大流星越高
        />
        {children}
      </div>
    </div>
  );
}; 