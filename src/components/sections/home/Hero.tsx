'use client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Hero() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/'); // Shop Now - main conversion action
  };

  const handleSecondaryAction = () => {
    router.push('/'); // Browse Collections - engagement action
  };
  // ACTION_PLACEHOLDER_END

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80',
      title: 'Handcrafted with',
      highlight: 'love & precision',
      description:
        'Each piece tells a unique story, meticulously crafted by skilled artisans using traditional techniques',
    },
    {
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1920&q=80',
      title: 'Timeless',
      highlight: 'elegance',
      description:
        'Discover jewelry that transcends trends, designed to be treasured for generations',
    },
    {
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1920&q=80',
      title: 'Your story,',
      highlight: 'beautifully told',
      description:
        "Custom designs that capture your personal journey and celebrate life's precious moments",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Image Carousel Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-background/60" />
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 z-20 p-2 rounded-full bg-background/20 backdrop-blur-sm border border-border/50 text-foreground hover:bg-background/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 z-20 p-2 rounded-full bg-background/20 backdrop-blur-sm border border-border/50 text-foreground hover:bg-background/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="size-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 bg-accent/80 backdrop-blur-sm">
            <Sparkles className="mr-2 size-4" />
            New Holiday Collection Available
          </Badge>

          {/* Dynamic Content */}
          <div className="mb-8">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentSlide
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform -translate-y-4 absolute'
                }`}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
                  {slide.title}
                  <span className="block text-primary">{slide.highlight}</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="group text-base px-8 bg-primary hover:bg-primary/90"
              onClick={handlePrimaryAction}
            >
              Shop Collection
              <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 bg-background/50 backdrop-blur-sm hover:bg-background/70 border-primary/30"
              onClick={handleSecondaryAction}
            >
              Custom Designs
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Free shipping over $150</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Lifetime craftsmanship guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Ethically sourced materials</span>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1 transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'w-12 bg-primary'
                    : 'w-4 bg-muted hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
