'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Wind, Droplets, Thermometer, Sun, Leaf, BarChart, Building, LucideCircleDivide } from 'lucide-react';
import Image from 'next/image';

const themeColors = {
  primary: '#EE7F01',
  secondary: '#A9331E',
  background: '#f9f9f9',
  accent: '#2B2D42',
};

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef([]);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const pageTop = window.scrollY;
      const pageBottom = pageTop + window.innerHeight;
      const tags = sectionsRef.current;

      for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        if (tag) {
          const tagTop = tag.offsetTop;
          const tagBottom = tagTop + tag.clientHeight;

          if (tagTop < pageBottom && tagBottom > pageTop) {
            setActiveSection(tag.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'hero', title: 'CLEARLY Efficient', icon: Wind },
    { id: 'about', title: 'About Us', icon: Leaf },
    { id: 'LEITBILD', title: 'LEITBILD', icon: Sun },
    { id: 'KOMPETENZEN', title: 'KOMPETENZEN ', icon: BarChart },
    { id: 'PROJEKTE', title: 'PROJEKTE', icon: Thermometer },
    { id: 'angebot', title: 'Angebot', icon: Building },
    { id: 'contact', title: 'Contact Us', icon: Droplets },
  ];



  const AnimatedWord = ({ children }) => (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );

  const competencies = [
    {
      title: "KLIMA",
      description: [
        "Erstellen von Klimabilanzen (Corporate Carbon Footprint – CCF & Product Carbon Footprint - PCF)",
        "Aufstellen und Nachverfolgung von Klimazielen",
        "Erarbeitung von Klimastrategien",
        "Einführung Klimamanagement, Einbetten in SDGs",
      ],
    },
    {
      title: "ENERGIEEFFIZIENZ",
      description: [
        "Energieanalysen, Energieaudits, Initialberatungen & Energiekonzepte",
        "Wärmequellen-/Senken-/ Pinch-Analysen",
        "Maßnahmenberechnung",
        "Auswertung und Modellbildung für wesentliche Energieverbraucher (Significant Energy User - SEU)",
      ],
    },
    {
      title: "GEBÄUDE",
      description: [
        "Gebäudeplanung",
        "Ganzheitliche & nachhaltige Unterstützung bei der Entwicklung von Gebäuden und Liegenschaften (interdisziplinär)",
        "Planung Heizungs-, Lüftungs- & Klimaanlagen",
        "Koordination Design-Teams & technische Gewerke",
      ],
    },
    {
      title: "LEHRE",
      description: [
        "Wissensvermittlung & Lehre in den Bereichen Klima-bilanzen und –management, Energieeffizienz, Energiemanagement",
        "Moderation von: Seminaren, Workshops, Netzwerktreffen",
        "Vorlesungen",
      ],
    },
    {
      title: "MANAGEMENT",
      description: [
        "Klima- & Energiemanagement",
        "Nachhaltigkeitsmanagement",
        "Strategische Prozesse",
        "Prozessaufbau (Top-Down)",
      ],
    },
  ];

  return (
    
    <div className="min-h-screen" >
     <nav className="sticky top-0 left-0 w-100 bg-white bg-opacity-80 backdrop-blur-md shadow-lg z-50 p-4">
  <motion.div
    className="flex justify-between space-x-6"
    initial={{ x: 0 }}
    animate={{ x: 0 }}
    transition={{ duration: 0.5 }}
  >
    {sections.map((section) => (
      <a
        key={section.id}
        href={`#${section.id}`}
        className={`flex items-center p-2 rounded-lg transition-all duration-300 ${
          activeSection === section.id
            ? `bg-[${themeColors.primary}] text-white`
            : `text-[${themeColors.secondary}] hover:bg-orange-100`
        }`}
      >
        <section.icon className="mr-2" size={20} />
         <span className="hidden lg:inline">{section.title}</span>
      </a>
    ))}
  </motion.div>
</nav>


     

      {/* Hero Section */}
      <div
      suppressHydrationWarning={true}
  id="hero"
  ref={(el) => (sectionsRef.current[0] = el)}
  className="min-h-screen p-8 flex flex-col items-center justify-center bg-gray-100 section"
>
  <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#A9331E] mb-4"
  >
    <AnimatedWord>CLEARLY</AnimatedWord> <AnimatedWord>Efficient</AnimatedWord>
  </motion.h1>
  <motion.p
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="text-lg sm:text-xl text-[#EE7F01]"
  >
    Advancing sustainability, climate strategy, and energy efficiency
  </motion.p>

  {/* Downward pointing arrow */}
  <div className="mt-8">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-[#A9331E] animate-bounce"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </div>
</div>


<div
suppressHydrationWarning={true}
      id="about"
      ref={(el) => (sectionsRef.current[1] = el)}
      className="min-h-screen bg-[#F4F4F4] flex flex-col md:flex-row items-center justify-center py-16 px-16"
    >
      {/* Left Side with Image or Icon */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 pt-32">
        <motion.img
          src="/img.png"
          alt="About image"
          initial={{ opacity: 0, x: -50 }} // Slide from left
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }} // Added easing
          className="max-w-xs rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side with Text */}
      <div className="w-full md:w-1/2 text-center md:text-left px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-4xl font-bold text-[#A9331E] mb-8" // Increased font size and added bold
        >
          Wer wir sind
        </motion.h2>

        <div className="prose prose-lg max-w-none">
          <p>
            CLEARLY efficient ist Ihr Partner für alle Aspekte der
            Nachhaltigkeits-,
            Klimastrategie- & Energieeffizienz-Beratung. Wir verbinden die
            Management-Ebenen mit unserer individuellen & ganzheitlichen
            Strategieberatung.
          </p>
          <br />
          <p>
            Unsere Kunden sind national und international agierende
            produzierende Unternehmen und Immobilienunternehmen - vom KMU bis
            zum Konzern.
          </p>
          <br />
          <p>
            Schwerpunkte unserer Kompetenzen sind Nachhaltigkeit (SDG), CO2 &
            Energie, Technologie & Reduktions-Know-How, Targets & Offsetting.
          </p>
          <br />
          <p>
            CLEARLY efficient wurde von Dipl.-Ing. Carsten Ernst gegründet. Er
            ist international führender Experte und berät Sie individuell oder
            in Zusammenarbeit mit seinem Netzwerk.
          </p>
        </div>
      </div>
    </div>







      {/* Our Vision Section */}
      <div 
      suppressHydrationWarning={true} 
        ref={(el) => (sectionsRef.current[2] = el)}
      className="min-h-screen bg-[#F4F4F4] flex flex-col md:flex-row items-center justify-center py-16 px-6 " id='LEITBILD'>
      <div className="max-w-screen-xl mx-auto px-6 ">
       

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* First Column with 3 Boxes */}
          <div className="space-y-6 pt-32">
           
          {/* First Box (VISION) */}
          <motion.div
            className="p-6 bg-grey shadow-lg rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-gray-100"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-semibold text-[#A9331E] mb-4">VISION</h3>
            <p className="text-lg text-gray-600">
              Unternehmen agieren für kommende Generation klimaneutral, um das Leben auf der Erde zu sichern.
            </p>
            <a href="#" className="text-[#EE7F01] hover:underline">Learn more..</a>
          </motion.div>

          {/* Second Box (MISSION) */}
          <motion.div
            className="p-6 bg-grey shadow-lg rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-gray-100"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-semibold text-[#A9331E] mb-4">MISSION</h3>
            <p className="text-lg text-gray-600">
              Wir entwickeln die Maßnahmen, die Unternehmen - mit mindestens gleicher Produktivität - klimaneutral sein lassen.
            </p>
            <a href="#" className="text-[#EE7F01] hover:underline">Learn more..</a>
          </motion.div>

          {/* Third Box (WERTE) */}
          <motion.div
            className="p-6 bg-grey shadow-lg rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-gray-100"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-semibold text-[#A9331E] mb-4">WERTE</h3>
            <p className="text-lg text-gray-600">
              Zentrale Normen & Werte leiten und begleiten unser Handeln.
            </p>
            <a href="#" className="text-[#EE7F01] hover:underline">Learn more..</a>
          </motion.div>
          </div>

          {/* Second Column with PNG Images */}
          <div className="flex flex-col justify-center content-center space-y-6">
            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src="/wind.png"
                alt="Image 1"
                className="w-100 h-auto rounded-lg px-20"
              />
            </motion.div>

            
            
          </div>
        </div>
      </div>
    </div>
    

      {/* Our Services Section */}
      <div suppressHydrationWarning={true} id="KOMPETENZEN" ref={(el) => (sectionsRef.current[3] = el)} direction="left"  className="min-h-screen bg-[#F4F4F4] flex flex-col md:flex-row items-center justify-center py-16 px-6 ">
      <div className=" w-max-4xl mx-auto text-center ">
      <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-[#A9331E] mb-6 pt-32"
          >
            Our KOMPETENZEN 
          </motion.h2>
      <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg px-12 text-center text-gray-700"
          >
           Unser Team ist auf Klimarisikomanagement, Energieeffizienz und nachhaltige Unternehmenspraktiken spezialisiert und unterstützt Unternehmen dabei, ihre Nachhaltigkeitsziele mit maßgeschneiderten Lösungen in Treibhausgas-Bilanzierung, Energieoptimierung und Energiemanagement zu erreichen.
            </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6"
        >
          
          {competencies.map((competency, index) => (
            
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-100">
                <h3 className="text-xl font-semibold text-[#EE7F01] mb-2">{competency.title}</h3>
                {competency.description.map((item, idx) => (
                  <p className="mb-2">{item}</p>
                ))}
              </div>
              
            

            
          ))}
        </motion.div>
      </div>
    </div>

      {/* Our Competencies Section */}
      <div suppressHydrationWarning={true} id="PROJEKTE" ref={(el) => (sectionsRef.current[4] = el)} direction="right" className="min-h-screen bg-[#F4F4F4] flex flex-col md:flex-row items-center justify-center py-16 px-6 ">
  <div className="max-w-6xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-6xl font-bold text-[#A9331E] mb-6 pt-32"
    >
      Unsere Projekte
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-lg text-gray-700 mb-16"
    >
      Mit Expertise in den Bereichen Klimarisikomanagement, Energieeffizienz und nachhaltige Unternehmenspraktiken ist unser Team bestens gerüstet, Sie durch die herausforderndsten Nachhaltigkeitsziele zu führen.
    </motion.p>
<div className='block md:hidden'>
<div className="flex flex-col md:flex-row justify-center gap-8">
      <div className="text-left">
        <h3 className="text-2xl font-semibold text-[#A9331E] mb-4">KLIMA</h3>
        <ul className="text-lg text-gray-700 list-disc pl-6">
          <li>Erstellung von Treibhausgas-Bilanzen (CCF)</li>
          <li>Erarbeitung von CO2-Zielpfaden</li>
        </ul>
      </div>
      <div className="text-left">
        <h3 className="text-2xl font-semibold text-[#A9331E] mb-4">ENERGIEEFFIZIENZ</h3>
        <ul className="text-lg text-gray-700 list-disc pl-6">
          <li>Energieanalysen</li>
          <li>Energiekonzepte</li>
          <li>Netzwerke für Energieeffizienz</li>
        </ul>
      </div>
      <div className="text-left">
        <h3 className="text-2xl font-semibold text-[#A9331E] mb-4">GEBÄUDE</h3>
        <ul className="text-lg text-gray-700 list-disc pl-6">
          <li>Konzeptionierung und technische & nachhaltige Planung von Gebäuden</li>
        </ul>
      </div>
      <div className="text-left">
        <h3 className="text-2xl font-semibold text-[#A9331E] mb-4">LEHRE</h3>
        <ul className="text-lg text-gray-700 list-disc pl-6">
        <li>Workshops</li>
    <li>Seminar</li>
    <li>Webinare</li>
    <li>Vorlesungen</li>
        </ul>
      </div>
      <div className="text-left">
        <h3 className="text-2xl font-semibold text-[#A9331E] mb-4">MANAGEMENT</h3>
        <ul className="text-lg text-gray-700 list-disc pl-6">
        <li>Energie-Management</li>
        <li>Klima- und Nachhaltigkeitsmanagement</li>
        </ul>
      </div>
    </div>
</div>


    <div className="overflow-x-auto hidden md:block pb-8">
  <table className="min-w-full table-auto border-collapse border border-gray-300">
    <thead>
      <tr>
        <th className="px-4 py-2 text-left text-[#A9331E] text-2xl font-semibold border border-gray-300">KLIMA</th>
        <th className="px-4 py-2 text-left text-[#A9331E] text-2xl font-semibold border border-gray-300">ENERGIEEFFIZIENZ</th>
        <th className="px-4 py-2 text-left text-[#A9331E] text-2xl font-semibold border border-gray-300">GEBÄUDE</th>
        <th className="px-4 py-2 text-left text-[#A9331E] text-2xl font-semibold border border-gray-300">LEHRE</th>
        <th className="px-4 py-2 text-left text-[#A9331E] text-2xl font-semibold border border-gray-300">MANAGEMENT</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-4 py-2 text-lg text-gray-700 border border-gray-300">Erstellung von Treibhausgasilanzen (CCF)</td>
        <td className="px-4 py-2 text-lg text-gray-700 border border-gray-300">Energieanalysen</td>
        <td className="px-4 py-2 text-lg text-gray-700 border border-gray-300">Konzeptionierung und technische & nachhaltige Planung von Gebäuden</td>
        <td className="px-4 py-2 text-lg text-gray-700 border border-gray-300">Workshops</td>
        <td className="px-4 py-2 text-lg text-gray-700 border border-gray-300">Energie-Management</td>
      </tr>
      <tr>
        <td className="px-4 py-2 text-lg text-gray-700 border border-gray-300">Erarbeitung von CO2-Zielpfaden</td>
        <td className="px-4 py-2 text-lg text-gray-700 border border-gray-300">Energiekonzepte</td>
        <td className="px-4 py-2 text-lg text-gray-700 border border-gray-300"></td>
        <td className="px-4 py-2 text-lg text-gray-700 border border-gray-300">Seminar</td>
        <td className="px-4 py-2 text-lg text-gray-700 border border-gray-300">Klima- und Nachhaltigkeitsmanagement</td>
      </tr>
      <tr>
        <td className="px-4 py-2 text-lg text-gray-700 border border-gray-300"></td>
        <td className="px-4 py-2 text-lg text-gray-700 border border-gray-300">Netzwerke für Energieeffizienz</td>
        <td className="px-4 py-2 text-lg text-gray-700 border border-gray-300"></td>
        <td className="px-4 py-2 text-lg text-gray-700 border border-gray-300">Webinare</td>
        <td className="px-4 py-2 text-lg text-gray-700 border border-gray-300"></td>
      </tr>
      <tr>
        <td className="px-4 py-2 text-lg text-gray-700 border border-gray-300"></td>
        <td className="px-4 py-2 text-lg text-gray-700 border border-gray-300"></td>
        <td className="px-4 py-2 text-lg text-gray-700 border border-gray-300"></td>
        <td className="px-4 py-2 text-lg text-gray-700 border border-gray-300">Vorlesungen</td>
        <td className="px-4 py-2 text-lg text-gray-700 border border-gray-300"></td>
      </tr>
    </tbody>
  </table>
</div>


  </div>
</div>



      {/* Our Projects Section */}
      <div suppressHydrationWarning={true} id="angebot" ref={(el) => (sectionsRef.current[5] = el)} direction="left"
      className="min-h-screen bg-[#F4F4F4] flex flex-col md:flex-row items-center justify-center  px-6 ">
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-[#A9331E] mb-6 pt-32"
          >
          Angebot
          </motion.h2>
          <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-lg text-gray-700 mb-16"
    >
      Wir bieten maßgeschneiderte Lösungen in den Bereichen Klima, Energieeffizienz, Gebäudeplanung, Lehre und Management. Unsere Dienstleistungen umfassen unter anderem</motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >

           <div className='block md:hidden'>
  <div className="flex flex-col md:flex-row justify-center gap-8">
    <div className="text-left">
      <h3 className="text-2xl font-semibold text-[#A9331E] mb-4">KLIMA</h3>
      <ul className="text-lg text-gray-700 list-disc pl-6">
        <li>Erstellung von Treibhausgas (THG)- Klimabilanzen (Scopes 1, 2 & 3)</li>
        <li>Entwicklung von Klimastrategien für Unternehmen</li>
        <li>Klimanetzwerke (branchenbezogen & branchenübergreifend)</li>
      </ul>
    </div>
    <div className="text-left">
      <h3 className="text-2xl font-semibold text-[#A9331E] mb-4">ENERGIEEFFIZIENZ</h3>
      <ul className="text-lg text-gray-700 list-disc pl-6">
        <li>Energieeffizienz Beratung für Industrie & Gewerbe</li>
        <li>EnMS: Energetische Bewertung, Aus- & Bewertung wesentliche Verbraucher</li>
      </ul>
    </div>
    <div className="text-left">
      <h3 className="text-2xl font-semibold text-[#A9331E] mb-4">GEBÄUDE</h3>
      <ul className="text-lg text-gray-700 list-disc pl-6">
        <li>Konzeptionierung nachhaltige Gebäude (Neubauten, Bestandsgebäude & Liegenschaften)</li>
      </ul>
    </div>
    <div className="text-left">
      <h3 className="text-2xl font-semibold text-[#A9331E] mb-4">LEHRE</h3>
      <ul className="text-lg text-gray-700 list-disc pl-6">
        <li>Workshops & Seminare</li>
        <li>Industrie- & Gewerbekunden, Universitäten, Akademien</li>
        <li>Themenbewusstsein vermitteln, Grundlagenvermittlung, Methoden- und Detail-Know-How trainieren</li>
      </ul>
    </div>
    <div className="text-left">
      <h3 className="text-2xl font-semibold text-[#A9331E] mb-4">MANAGEMENT</h3>
      <ul className="text-lg text-gray-700 list-disc pl-6">
        <li>Klimamanagement</li>
        <li>Industrie- & Gewerbekunden</li>
        <li>Entwicklung einer klaren Klimabilanz und -Strategie</li>
        <li>Implementieren der Strategie in die Unternehmensprozesse</li>
      </ul>
    </div>
  </div>
</div>

<div className=" hidden md:block pb-8">
  <table className="w-full table-auto border-collapse border border-gray-300">
    <thead>
      <tr>
        <th className="px-4 py-2 text-left text-[#A9331E] text-md font-semibold border border-gray-300">KLIMA</th>
        <th className="px-4 py-2 text-left text-[#A9331E] text-md font-semibold border border-gray-300">ENERGIEEFFIZIENZ</th>
        <th className="px-4 py-2 text-left text-[#A9331E] text-md font-semibold border border-gray-300">GEBÄUDE</th>
        <th className="px-4 py-2 text-left text-[#A9331E] text-md font-semibold border border-gray-300">LEHRE</th>
        <th className="px-4 py-2 text-left text-[#A9331E] text-md font-semibold border border-gray-300">MANAGEMENT</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">Erstellung von Treibhausgas (THG)- Klimabilanzen (Scopes 1, 2 & 3)</td>
        <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">Energieeffizienz Beratung für Industrie & Gewerbe</td>
        <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">Konzeptionierung nachhaltige Gebäude (Neubauten, Bestandsgebäude & Liegenschaften)</td>
        <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">Workshops & Seminare</td>
        <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">Klimamanagement</td>
      </tr>
      <tr>
        <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">Entwicklung von Klimastrategien für Unternehmen</td>
        <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">EnMS: Energetische Bewertung, Aus- & Bewertung wesentliche Verbraucher</td>
        <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
        <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">Industrie- & Gewerbekunden, Universitäten, Akademien</td>
        <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">Industrie- & Gewerbekunden</td>
      </tr>
      <tr>
        <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">Klimanetzwerke (branchenbezogen & branchenübergreifend)</td>
        <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
        <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
        <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">Themenbewusstsein vermitteln, Grundlagenvermittlung, Methoden- und Detail-Know-How trainieren</td>
        <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">Entwicklung einer klaren Klimabilanz und -Strategie</td>
      </tr>
      <tr>
        <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
        <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
        <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
        <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
        <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">Implementieren der Strategie in die Unternehmensprozesse</td>
      </tr>
    </tbody>
  </table>
</div>

          </motion.div>
        </div>
 </div>

      {/* Contact Us Section */}
      <div suppressHydrationWarning={true} id="contact" ref={(el) => (sectionsRef.current[6] = el)} direction="right"
         className="min-h-screen bg-[#F4F4F4]  flex flex-col md:flex-row items-center justify-center  px-6 ">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-[#A9331E] mb-6"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700"
          >
            Reach out to us to discuss how we can assist you in creating a sustainable future for your organization.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700"
          >
          kontakt@clearly-efficient.de</motion.p>


          
        </div>
      </div>

      
    </div>
  );
}
