'use client'

import Image from "next/image"
import { Coffee, Home, UtensilsCrossed } from 'lucide-react'

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const galleryData = {
  food: [
    {
      src: "https://www.la-piazza-dorsten.de/images/lecker-essen-dorsten.jpg",
      alt: "Pizza preparation",
      caption: "Wood-fired pizza making",
    },
    {
      src: "https://www.la-piazza-dorsten.de/images/milchcafe-la-piazza-dorsten.jpg",
      alt: "Pasta dish",
      caption: "Homemade pasta specialties",
    },
    {
      src: "https://www.la-piazza-dorsten.de/images/getraenke-la-piazza-dorsten.jpg",
      alt: "Dessert platter",
      caption: "Delicious desserts",
    },
  ],
  drinks: [
    {
      src: "https://www.la-piazza-dorsten.de/images/milchcafe-la-piazza-dorsten.jpg",
      alt: "Pasta dish",
      caption: "Homemade pasta specialties",
    },
    {
      src: "https://www.la-piazza-dorsten.de/images/getraenke-la-piazza-dorsten.jpg",
      alt: "Dessert platter",
      caption: "Delicious desserts",
    },
    {
      src: "https://www.la-piazza-dorsten.de/images/lecker-essen-dorsten.jpg",
      alt: "Pizza preparation",
      caption: "Wood-fired pizza making",
    },
  ],
  ambience: [
    {
      src: "https://www.la-piazza-dorsten.de/images/getraenke-la-piazza-dorsten.jpg",
      alt: "Dessert platter",
      caption: "Delicious desserts",
    },
    {
    src: "https://www.la-piazza-dorsten.de/images/lecker-essen-dorsten.jpg",
    alt: "Pizza preparation",
    caption: "Wood-fired pizza making",
  },
  {
    src: "https://www.la-piazza-dorsten.de/images/milchcafe-la-piazza-dorsten.jpg",
    alt: "Pasta dish",
    caption: "Homemade pasta specialties",
  },
  ],
}

export default function GalleryPage() {
  return (
    <main className="container py-12 px-5 md:px-0 md:pl-16">
      <h1 className="mb-8 text-center text-4xl font-bold">Gallery</h1>
      <Tabs defaultValue="food" className="w-full">
        <TabsList className="mb-8 grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="food" className="flex items-center gap-2">
            <UtensilsCrossed className="h-4 w-4" />
            <span className="hidden sm:inline">Food</span>
          </TabsTrigger>
          <TabsTrigger value="drinks" className="flex items-center gap-2">
            <Coffee className="h-4 w-4" />
            <span className="hidden sm:inline">Drinks</span>
          </TabsTrigger>
          <TabsTrigger value="ambience" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Ambience</span>
          </TabsTrigger>
        </TabsList>
        {Object.entries(galleryData).map(([key, images]) => (
          <TabsContent key={key} value={key}>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((image, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="group relative">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={400}
                        className="aspect-[3/2] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <p className="text-sm font-medium">{image.caption}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </main>
  )
}
