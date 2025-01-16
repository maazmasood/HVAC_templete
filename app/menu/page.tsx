'use client'

import { useState } from "react"
import Image from "next/image"
import { Coffee, IceCream, UtensilsCrossed, Wine } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const menuData = {
  food: [
    {
      category: "Antipasti",
      items: [
        { name: "Bruschetta", description: "Toasted white bread with diced tomatoes, olive oil, and herbs", price: "€6.50" },
        { name: "Caprese", description: "Fresh tomatoes with mozzarella and basil", price: "€8.50" },
        { name: "Carpaccio", description: "Wafer-thin slices of beef fillet with arugula and parmesan", price: "€12.50" },
      ],
    },
    {
      category: "Pasta",
      items: [
        { name: "Spaghetti Carbonara", description: "Ham, cream sauce, and garlic", price: "€13.50" },
        { name: "Penne All'Arrabbiata", description: "Tomato sauce, peperoncino, and ham [spicy]", price: "€11.50" },
        { name: "Tagliatelle ai Funghi", description: "Light cream sauce with fresh mushrooms", price: "€14.50" },
      ],
    },
    {
      category: "Pizza",
      items: [
        { name: "Margherita", description: "Tomato sauce, oregano, and cheese", price: "€10.50" },
        { name: "Diavolo", description: "Tomato sauce, salami, mushrooms, black olives, peperoncino, and cheese [spicy]", price: "€13.50" },
        { name: "Quattro Formaggi", description: "Four cheese pizza", price: "€12.50" },
      ],
    },
    {
      category: "Secondi",
      items: [
        { name: "Osso Buco", description: "Braised veal shanks with gremolata and risotto alla milanese", price: "€22.50" },
        { name: "Pollo al Marsala", description: "Chicken breast in Marsala wine sauce with mushrooms", price: "€18.50" },
        { name: "Branzino al Forno", description: "Oven-baked sea bass with herbs and lemon", price: "€24.50" },
      ],
    },
  ],
  drinks: [
    {
      category: "Wine",
      items: [
        { name: "House Red Wine", description: "Glass / Bottle", price: "€5.50 / €22" },
        { name: "House White Wine", description: "Glass / Bottle", price: "€5.50 / €22" },
        { name: "Prosecco", description: "Glass / Bottle", price: "€6.50 / €26" },
      ],
    },
    {
      category: "Cocktails",
      items: [
        { name: "Aperol Spritz", description: "Aperol, prosecco, soda", price: "€8.50" },
        { name: "Negroni", description: "Gin, campari, vermouth", price: "€9.50" },
        { name: "Bellini", description: "Prosecco, peach purée", price: "€8.50" },
      ],
    },
    {
      category: "Coffee & Tea",
      items: [
        { name: "Espresso", description: "Single shot", price: "€2.50" },
        { name: "Cappuccino", description: "Espresso with steamed milk and foam", price: "€3.50" },
        { name: "Assorted Teas", description: "Selection of fine teas", price: "€3.00" },
      ],
    },
  ],
  desserts: [
    {
      category: "Dolci",
      items: [
        { name: "Tiramisu", description: "Classic Italian coffee-flavored dessert", price: "€6.50" },
        { name: "Panna Cotta", description: "With berry compote", price: "€6.00" },
        { name: "Gelato Selection", description: "Choice of 3 scoops", price: "€6.50" },
      ],
    },
  ],
}

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("food")

  return (
    <main className="min-h-screen bg-[#FDF5F0]">
      <div className="container py-12 px-5 md:px-0 md:pl-16 ">
        <h1 className="mb-8 text-center font-serif text-4xl font-bold italic text-[#B31B1B] md:text-5xl">Our Menu</h1>
        <Tabs defaultValue="food" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="mb-8 grid w-full grid-cols-3 bg-white/50 p-1 lg:w-[400px]">
            <TabsTrigger value="food" className="flex items-center gap-2 data-[state=active]:bg-[#B31B1B] data-[state=active]:text-white">
              <UtensilsCrossed className="h-4 w-4" />
              <span className="hidden sm:inline">Food</span>
            </TabsTrigger>
            <TabsTrigger value="drinks" className="flex items-center gap-2 data-[state=active]:bg-[#B31B1B] data-[state=active]:text-white">
              <Wine className="h-4 w-4" />
              <span className="hidden sm:inline">Drinks</span>
            </TabsTrigger>
            <TabsTrigger value="desserts" className="flex items-center gap-2 data-[state=active]:bg-[#B31B1B] data-[state=active]:text-white">
              <IceCream className="h-4 w-4" />
              <span className="hidden sm:inline">Desserts</span>
            </TabsTrigger>
          </TabsList>
          <div className="relative">
            <div className="absolute inset-0 z-0">
              <Image
                src={`/placeholder.svg?height=800&width=1200&text=${activeTab === 'food' ? 'Italian Cuisine' : activeTab === 'drinks' ? 'Italian Drinks' : 'Italian Desserts'}`}
                alt="Menu background"
                layout="fill"
                objectFit="cover"
                className="opacity-10"
              />
            </div>
            {Object.entries(menuData).map(([key, categories]) => (
              <TabsContent key={key} value={key} className="relative z-10">
                <div className="grid gap-8 md:grid-cols-2">
                  {categories.map((category) => (
                    <Card key={category.category} className="overflow-hidden bg-white/80 backdrop-blur-sm">
                      <CardHeader className="border-b border-[#B31B1B]/20 bg-[#B31B1B]/5">
                        <CardTitle className="font-serif text-2xl font-semibold text-[#B31B1B]">{category.category}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        {category.items.map((item) => (
                          <div key={item.name} className="mb-4 flex flex-col justify-between gap-2 border-b border-[#B31B1B]/10 pb-4 last:border-0 last:pb-0 sm:flex-row">
                            <div>
                              <h3 className="font-serif text-lg font-semibold">{item.name}</h3>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                            <p className="font-serif text-lg font-semibold text-[#B31B1B]">{item.price}</p>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </main>
  )
}
