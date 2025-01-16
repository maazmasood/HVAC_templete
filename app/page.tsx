"use client";

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, MapPin, Phone, Utensils, Wine } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://www.la-piazza-dorsten.de/images/home-bg-la-piazza-dorsten.jpg"
            alt="Italian restaurant ambience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
        </div>
        <div className="container relative z-10 flex min-h-screen flex-col items-center justify-center text-center">
          <h1 className="mb-6 font-serif text-7xl font-bold italic text-white md:text-8xl lg:text-9xl">La Piazza</h1>
          <p className="mb-8 max-w-2xl text-xl text-white/90 md:text-2xl">
            Authentic Italian Cuisine in the Heart of Dorsten
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="bg-[#B31B1B] text-white hover:bg-[#8B1515]">
              <Link href="/menu">View Menu</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white/20 text-white backdrop-blur-sm">
              <Link href="/reservations">Make Reservation</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border border-white/20 text-white backdrop-blur-sm transition-transform hover:translate-y-1"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          >
            <ArrowRight className="h-5 w-5 -rotate-90" />
          </Button>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="bg-[#FDF5F0] py-24 px-5 md:px-0 md:pl-16 container">
        <div className="container">
          <h2 className="mb-12 text-center font-serif text-4xl font-bold italic text-[#B31B1B] md:text-5xl">
            Our Signature Dishes
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { name: "Margherita Pizza", description: "Classic Neapolitan pizza with fresh mozzarella and basil",image: 'https://www.la-piazza-dorsten.de/images/pizza-rucola-la-piazza-dorsten.jpg' },
              { name: "Osso Buco", description: "Tender veal shanks braised with vegetables, white wine and broth",image: 'https://www.la-piazza-dorsten.de/images/lecker-essen-dorsten.jpg' },
              { name: "Tiramisu", description: "Traditional coffee-flavored Italian dessert", image: 'https://www.la-piazza-dorsten.de/images/getraenke-la-piazza-dorsten.jpg' },
            ].map((dish, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 font-serif text-xl font-semibold">{dish.name}</h3>
                    <p className="text-sm text-muted-foreground">{dish.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://www.la-piazza-dorsten.de/images/dorsten-la-piazza.jpg"
            alt="Restaurant interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-serif text-4xl font-bold italic md:text-5xl">A Taste of Italy in Dorsten</h2>
            <p className="mb-8 text-lg text-white/80">
              Since 1995, La Piazza has been bringing the authentic flavors of Italy to Dorsten. Our recipes have been
              passed down through generations, each dish crafted with passion and tradition.
            </p>
            <Button asChild className="bg-white text-[#B31B1B] hover:bg-white/90">
              <Link href="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="bg-white py-24 px-5 md:px-0 md:pl-16 container">
        <div className="container">
          <h2 className="mb-12 text-center font-serif text-4xl font-bold italic text-[#B31B1B] md:text-5xl">
            Explore Our Menu
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Antipasti", icon: Utensils },
              { name: "Pasta", icon: Utensils },
              { name: "Secondi", icon: Utensils },
              { name: "Wines", icon: Wine },
            ].map((category, index) => (
              <Card key={index} className="group overflow-hidden transition-colors hover:bg-[#FDF5F0]">
                <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                  <div className="rounded-full bg-[#B31B1B]/10 p-3 text-[#B31B1B] transition-colors group-hover:bg-[#B31B1B] group-hover:text-white">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild className="bg-[#B31B1B] text-white hover:bg-[#8B1515]">
              <Link href="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#FDF5F0] py-24 px-5 md:px-0 md:pl-16 container">
        <div className="container">
          <h2 className="mb-12 text-center font-serif text-4xl font-bold italic text-[#B31B1B] md:text-5xl">
            What Our Guests Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                text: "The best Italian food I've had outside of Italy. Authentic flavors and great service!",
                author: "Maria S.",
              },
              {
                text: "Amazing atmosphere and delicious food. The homemade pasta is outstanding!",
                author: "Thomas K.",
              },
              {
                text: "A true gem in Dorsten. The wine selection perfectly complements their dishes.",
                author: "Anna M.",
              },
            ].map((review, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="flex flex-col gap-4 p-6">
                  <svg className="h-8 w-8 text-[#B31B1B]" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-muted-foreground">{review.text}</p>
                  <p className="font-serif font-semibold">{review.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact and Reservations */}
      <section className="bg-white py-24 px-5 md:px-0 md:pl-16 container">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold italic text-[#B31B1B] md:text-4xl">Visit Us</h2>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#B31B1B]" />
                  123 Restaurant Street, Dorsten, Germany
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-[#B31B1B]" />
                  (123) 456-7890
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#B31B1B]" />
                  Mon-Sat: 11:30 - 22:00, Sun: 12:00 - 21:00
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-[#B31B1B] text-white hover:bg-[#8B1515]">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold italic text-[#B31B1B] md:text-4xl">Make a Reservation</h2>
              <p className="mb-4 text-muted-foreground">
                Reserve your table now and experience the taste of authentic Italian cuisine.
              </p>
              <Button asChild className="bg-[#B31B1B] text-white hover:bg-[#8B1515]">
                <Link href="/reservations">Book a Table</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
