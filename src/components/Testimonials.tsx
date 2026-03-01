
"use client";

import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const reviews = [
  {
    name: "Michael Chen",
    role: "Import Director, UK",
    text: "SBNB Global Foods has been our primary spice supplier for 5 years. Their quality consistency is unmatched in the market. The packaging is always professional.",
    avatar: "https://picsum.photos/seed/person1/100/100"
  },
  {
    name: "Elena Rodriguez",
    role: "CEO, Gourmet Foods Spain",
    text: "The fresh vegetables we receive are handled with extreme care. Their logistics team ensures that perishables reach us in peak condition every single time.",
    avatar: "https://picsum.photos/seed/person2/100/100"
  },
  {
    name: "Ahmed Al-Farsi",
    role: "Wholesaler, Dubai",
    text: "Their Masala powders have become a favorite in our region. Authentic taste and brilliant aroma that consumers truly appreciate.",
    avatar: "https://picsum.photos/seed/person3/100/100"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Voices from across the globe who trust SBNB for their food export needs.</p>
        </div>

        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {reviews.map((review, i) => (
              <CarouselItem key={i}>
                <Card className="border-none shadow-none bg-transparent">
                  <CardContent className="flex flex-col items-center text-center p-12 bg-primary/5 rounded-[3rem]">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-8">
                      <Quote className="text-primary w-8 h-8" />
                    </div>
                    <p className="text-2xl italic text-primary/80 mb-10 leading-relaxed">
                      "{review.text}"
                    </p>
                    <Avatar className="w-16 h-16 mb-4 border-2 border-secondary p-1">
                      <AvatarImage src={review.avatar} />
                      <AvatarFallback>{review.name[0]}</AvatarFallback>
                    </Avatar>
                    <h4 className="font-bold text-xl text-primary">{review.name}</h4>
                    <p className="text-secondary font-medium">{review.role}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-12 border-primary text-primary hover:bg-primary hover:text-white" />
            <CarouselNext className="-right-12 border-primary text-primary hover:bg-primary hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
