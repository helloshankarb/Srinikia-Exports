
"use client";

import { useEffect, useState, useRef } from "react";
import { Globe, Users, Award, Calendar } from "lucide-react";

const stats = [
  { label: "Countries Exported", value: 25, icon: Globe, suffix: "+" },
  { label: "Satisfied Clients", value: 150, icon: Users, suffix: "+" },
  { label: "Years Experience", value: 12, icon: Calendar, suffix: "+" },
  { label: "Certifications", value: 8, icon: Award, suffix: "" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-secondary group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-white/60 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
