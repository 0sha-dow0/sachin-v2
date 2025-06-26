
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const StudentTestimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Alex Johnson",
      course: "Music Production Diploma",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      quote: "Point Blank completely transformed my understanding of music production. The hands-on approach and industry connections opened doors I never knew existed.",
      outcome: "Now producing for major labels",
      rating: 5
    },
    {
      name: "Maya Patel",
      course: "DJ Performance Course",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b665",
      quote: "The DJ course at Point Blank gave me the confidence and technical skills to perform at major festivals. The instructors are world-class professionals.",
      outcome: "Resident DJ at top London clubs",
      rating: 5
    },
    {
      name: "Jordan Kim",
      course: "Audio Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      quote: "Learning on SSL consoles and industry-standard equipment prepared me for the real world. The career support was incredible.",
      outcome: "Sound engineer at Abbey Road",
      rating: 5
    },
    {
      name: "Sofia Rodriguez",
      course: "BA Music Production",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      quote: "The bachelor's program combined theory with practical experience perfectly. I graduated with a portfolio that landed me my dream job immediately.",
      outcome: "Producer at Universal Music",
      rating: 5
    },
    {
      name: "David Chen",
      course: "Online Courses",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      quote: "The online platform is incredibly interactive. Despite studying remotely, I felt connected to instructors and fellow students throughout my journey.",
      outcome: "Freelance producer & educator",
      rating: 5
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--pb-dark)] to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-6">
            Student <span className="pb-text-gradient">Success</span>
          </h2>
          <p className="text-xl text-[var(--pb-light-gray)] max-w-3xl mx-auto">
            Hear from our graduates who are now shaping the music industry worldwide
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                    <CardContent className="p-12">
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="text-center lg:text-left">
                          <div className="mb-6">
                            <div className="flex justify-center lg:justify-start mb-4">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <span key={i} className="text-[var(--pb-gold)] text-2xl">★</span>
                              ))}
                            </div>
                            <blockquote className="text-xl lg:text-2xl font-light leading-relaxed mb-6">
                              "{testimonial.quote}"
                            </blockquote>
                          </div>
                          
                          <div className="flex items-center justify-center lg:justify-start space-x-4">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-16 h-16 rounded-full object-cover"
                            />
                            <div className="text-left">
                              <h4 className="text-xl font-bold">{testimonial.name}</h4>
                              <p className="text-[var(--pb-gold)] font-semibold">{testimonial.course}</p>
                              <p className="text-[var(--pb-light-gray)] text-sm">{testimonial.outcome}</p>
                            </div>
                          </div>
                        </div>

                        <div className="hidden lg:block">
                          <div className="relative">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-96 object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-[var(--pb-gold)] w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-[var(--pb-light-gray)] hover:text-white"
            >
              {isAutoPlaying ? 'Pause' : 'Play'} Auto-scroll
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;
