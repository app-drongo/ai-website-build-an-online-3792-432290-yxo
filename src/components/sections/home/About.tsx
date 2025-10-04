'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb,
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Handcrafted with Love',
      description:
        'Every piece is meticulously crafted by skilled artisans who pour their passion and expertise into creating unique, beautiful jewelry.',
    },
    {
      icon: Lightbulb,
      title: 'Unique Designs',
      description:
        "We create one-of-a-kind pieces that tell your story. No mass production - just authentic, original designs you won't find anywhere else.",
    },
    {
      icon: Award,
      title: 'Premium Materials',
      description:
        'We use only the finest materials - sterling silver, genuine gemstones, and ethically sourced metals to ensure lasting beauty and quality.',
    },
    {
      icon: Globe,
      title: 'Sustainable Crafting',
      description:
        'Our commitment to the environment means using recycled metals and ethically sourced stones while supporting local artisan communities.',
    },
  ];

  const stats = [
    { value: '2018', label: 'Established', icon: Award },
    { value: '3,200+', label: 'Happy Customers', icon: Users },
    { value: '850+', label: 'Unique Pieces Created', icon: TrendingUp },
    { value: '15+', label: 'Countries Shipped', icon: Globe },
  ];

  const team = [
    {
      name: 'Isabella Martinez',
      role: 'Master Jeweler & Founder',
      image: 'IM',
      bio: '20+ years crafting heirloom jewelry. Trained in traditional European techniques.',
    },
    {
      name: 'Elena Rossi',
      role: 'Design Director',
      image: 'ER',
      bio: 'Award-winning designer specializing in contemporary and vintage-inspired pieces.',
    },
    {
      name: 'Marcus Chen',
      role: 'Gemstone Specialist',
      image: 'MC',
      bio: 'Certified gemologist with expertise in rare stones and ethical sourcing.',
    },
    {
      name: 'Sophia Williams',
      role: 'Custom Design Lead',
      image: 'SW',
      bio: 'Transforms your vision into reality with personalized, bespoke jewelry creations.',
    },
  ];

  const handleShopNow = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewCollection = () => {
    const collectionsSection = document.getElementById('collections');
    collectionsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCustomDesign = () => {
    window.open('mailto:custom@handmadejewelry.com?subject=Custom Design Inquiry', '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Story
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Crafting Timeless Beauty
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              One Piece at a Time
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're passionate artisans dedicated to creating exquisite handmade jewelry that
            celebrates life's precious moments and expresses your unique style.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Artisan Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2018 by master jeweler Isabella Martinez, our atelier began as a small
                workshop where traditional craftsmanship met contemporary design vision.
              </p>
              <p>
                After years of working with mass-produced jewelry, Isabella yearned to return to the
                authentic art of handcrafting - where each piece tells a story and carries the
                maker's soul.
              </p>
              <p>
                Today, our collection features over 850 unique pieces, each one carefully crafted
                using time-honored techniques passed down through generations of skilled artisans.
              </p>
            </div>
            <Button onClick={handleViewCollection} className="group">
              Explore Our Collections
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Every piece we create is meant to become a cherished heirloom, passed down
                      through generations."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      - Isabella Martinez, Master Jeweler
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-border/50 hover:border-primary/20 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Craftsmanship Values</h3>
            <p className="text-muted-foreground">
              The principles that guide every piece we create and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Artisans</h3>
            <p className="text-muted-foreground">
              The talented craftspeople who bring passion, skill, and artistry to every piece we
              create.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button onClick={handleCustomDesign} variant="outline" className="group">
              Commission Custom Piece
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "My engagement ring from this atelier is absolutely breathtaking. The attention to
                detail and craftsmanship is unmatched - it's truly a work of art I'll treasure
                forever."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  AR
                </div>
                <div className="text-left">
                  <div className="font-semibold">Amanda Richardson</div>
                  <div className="text-sm text-muted-foreground">Verified Customer, New York</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
