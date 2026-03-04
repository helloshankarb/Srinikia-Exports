"use client";

import { Quote, Star } from "lucide-react";
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
    text: "SBNB Global has been our primary spice and grain supplier for 7 years. Their quality consistency is unmatched in the market. The packaging is always professional and global-standard.",
    avatar: "https://picsum.photos/seed/person1/100/100"
  },
  {
    name: "Elena Rodriguez",
    role: "CEO, Gourmet Foods Spain",
    text: "The fresh vegetables and fruits we receive from India are handled with extreme care. Their logistics team ensures that perishables reach our European hubs in peak condition.",
    avatar: "https://picsum.photos/seed/person2/100/100"
  },
  {
    name: "Rajesh Malhotra",
    role: "Owner, Swagat Retail India",
    text: "Having worked with SBNB as one of their 100+ local partners, I can vouch for their honesty and fair pricing. They are the true bridge between Indian farms and the global market.",
    avatar: "https://picsum.photos/seed/person3/100/100"
  },
  {
    name: "Ahmed Al-Farsi",
    role: "Wholesaler, Dubai",
    text: "Authentic Indian flavors and brilliant aroma. SBNB spices have become a favorite in our region, and their commitment to 25+ global clients shows in their impeccable service.",
    avatar: "https://picsum.photos/seed/person4/100/100"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-bold uppercase tracking-[0.3em] mb-4 block">Client Success Stories</span>
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 uppercase tracking-tighter italic">Trusted Globally</h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto font-medium">Voices from our 25+ global partners and 100+ local Indian network who trust SBNB for excellence.</p>
        </div>

        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {reviews.map((review, i) => (
              <CarouselItem key={i}>
                <Card className="border-none shadow-none bg-transparent">
                  <CardContent className="flex flex-col items-center text-center p-8 md:p-16 bg-primary rounded-[3rem] text-white shadow-2xl">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-8 shadow-lg">
                      <Quote className="text-primary w-8 h-8" />
                    </div>
                    
                    <div className="flex gap-1 mb-8">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                      ))}
                    </div>

                    <p className="text-xl md:text-2xl italic text-white/90 mb-10 leading-relaxed font-medium">
                      "{review.text}"
                    </p>
                    
                    <div className="flex flex-col items-center">
                      <Avatar className="w-20 h-20 mb-4 border-4 border-secondary p-1 bg-white">
                        <AvatarImage src={review.avatar} />
                        <AvatarFallback className="bg-primary text-white font-bold">{review.name[0]}</AvatarFallback>
                      </Avatar>
                      <h4 className="font-black text-2xl text-white uppercase tracking-tight">{review.name}</h4>
                      <p className="text-secondary font-bold uppercase tracking-widest text-xs mt-1">{review.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-16 border-2 border-primary text-primary hover:bg-primary hover:text-white w-12 h-12" />
            <CarouselNext className="-right-16 border-2 border-primary text-primary hover:bg-primary hover:text-white w-12 h-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
