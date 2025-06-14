import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Raleway,
  Dancing_Script,
  Playfair_Display,
} from "next/font/google"; import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/providers/query-provider";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frontend Verse - Master Frontend Development in 90 Days | React, JavaScript, CSS",
  description: "Transform into a frontend developer in just 90 days. Learn HTML, CSS, JavaScript, React with 500+ interview questions, real projects, and guaranteed job placement support.",
  openGraph: {
    title: "Frontend Verse - Master Frontend Development Fast",
    description: "Join 2,500+ developers who landed frontend jobs. 90-day program with React, JavaScript, interview prep & portfolio projects. Start your coding career today!",
    images: [
      {
        url: "./image.png",
        width: 1200,
        height: 630,
        alt: "Frontend Verse - Learn Frontend Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Verse - 90-Day Frontend Developer Bootcamp",
    description: "Master React, JavaScript & CSS in 90 days. 500+ interview questions, real projects, 95% job placement rate. Start free trial!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="./image.png" />

        <title>Frontend Verse - Master Frontend Development in 90 Days | React, JavaScript, CSS</title>
        <meta name="title" content="Frontend Verse - Master Frontend Development in 90 Days | React, JavaScript, CSS" />
        <meta name="description" content="Transform into a frontend developer in just 90 days. Learn HTML, CSS, JavaScript, React with 500+ interview questions, real projects, and guaranteed job placement support." />

        <meta name="keywords" content="frontend development course, learn react online, javascript bootcamp, css tutorial, web development training, frontend developer jobs, coding interview prep, react developer course, html css javascript, frontend bootcamp, web developer certification, programming course online, javascript interview questions, react projects, frontend portfolio, coding career change, learn to code, web development for beginners, frontend skills, react hooks tutorial, javascript es6, css grid flexbox, responsive web design, frontend frameworks, modern javascript, react state management, frontend job placement, coding bootcamp online, web developer salary, frontend interview preparation, javascript fundamentals, react component development, css animations, frontend best practices, web development roadmap, coding mentorship, frontend developer portfolio, javascript projects, react redux, frontend testing, web performance optimization, mobile responsive design, frontend development tools, git version control, api integration, frontend deployment, coding career guidance, web development internship, frontend developer resume, javascript debugging, react context api, css preprocessors, frontend accessibility, web standards, coding interview questions, frontend system design, javascript algorithms, react native development, frontend security, web development trends, coding bootcamp reviews, frontend developer skills, javascript frameworks comparison, react vs angular vs vue, frontend development books, coding practice problems, web development resources, frontend developer roadmap, javascript cheat sheet, react documentation, css best practices, frontend development tips, coding community, web development blog, frontend tutorials, javascript tutorial, react tutorial, css tutorial, html tutorial, frontend development guide, coding exercises, web development projects, frontend challenges, javascript projects for beginners, react projects for portfolio, css projects, html projects, web development examples, frontend code examples, coding best practices, web development standards, frontend performance, javascript optimization, react performance optimization, css optimization, web accessibility guidelines, frontend SEO, web development SEO, coding career advice, frontend job search, web developer interview, coding interview tips, frontend salary expectations, web development market trends, coding bootcamp comparison, online coding courses, frontend development certification, web development degree alternatives, coding self-taught resources, frontend learning path, web development curriculum, coding skill assessment, frontend developer hiring, web development job market, coding career prospects, frontend technology stack, web development tools and frameworks, coding environment setup, frontend development workflow, web development best practices, coding project management, frontend code review, web development collaboration, coding version control, frontend continuous integration, web development deployment strategies, coding documentation, frontend code organization, web development testing strategies, coding quality assurance, frontend debugging techniques, web development troubleshooting, coding problem solving, frontend architecture patterns, web development design patterns, coding clean code principles, frontend code refactoring, web development maintenance, coding technical debt management, frontend scalability considerations, web development performance monitoring, coding analytics and metrics, frontend user experience optimization, web development conversion rate optimization, coding A/B testing, frontend analytics implementation, web development growth hacking, coding marketing automation, frontend lead generation, web development customer acquisition, coding retention strategies, frontend monetization techniques, web development business models, coding entrepreneurship, frontend freelancing tips, web development consulting, coding passive income streams, frontend digital products, web development online courses creation, coding content marketing, frontend social media marketing, web development email marketing, coding influencer marketing, frontend affiliate marketing, web development partnership opportunities, coding collaboration strategies, frontend networking tips, web development conference attendance, coding meetup participation, frontend open source contributions, web development portfolio showcase, coding personal branding, frontend thought leadership, web development speaking opportunities, coding workshop facilitation, frontend mentoring programs, web development coaching services, coding career transitions, frontend skill development, web development continuous learning, coding industry updates, frontend technology trends, web development future predictions, coding innovation opportunities, frontend research and development, web development experimentation, coding prototype development, frontend minimum viable products, web development lean startup methodology, coding agile development practices, frontend scrum implementation, web development kanban workflows, coding project estimation, frontend time management, web development productivity hacks, coding work-life balance, frontend remote work strategies, web development distributed team management, coding communication skills, frontend presentation techniques, web development technical writing, coding documentation standards, frontend knowledge sharing, web development team building, coding leadership development, frontend management skills, web development executive presence, coding strategic thinking, frontend business acumen, web development financial literacy, coding investment strategies, frontend retirement planning, web development wealth building, coding passive income, frontend financial independence, web development early retirement, coding lifestyle design, frontend location independence, web development digital nomad, coding travel opportunities, frontend international experience, web development cultural awareness, coding global perspective, frontend diversity and inclusion, web development social responsibility, coding environmental impact, frontend sustainability practices, web development ethical considerations, coding social impact, frontend community building, web development advocacy, coding education reform, frontend accessibility improvements, web development digital divide, coding equal opportunity, frontend underrepresented groups, web development mentorship programs, coding scholarship opportunities, frontend bootcamp scholarships, web development financial aid, coding income share agreements, frontend deferred tuition, web development employer partnerships, coding apprenticeship programs, frontend internship opportunities, web development job guarantee programs, coding career services" />

        <meta name="author" content="Frontend Verse" />
        <meta name="publisher" content="Frontend Verse" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />

        <meta name="geo.region" content="IN" />
        <meta name="geo.country" content="India" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://frontendverse.xyz/" />
        <meta property="og:title" content="Frontend Verse - Master Frontend Development Fast" />
        <meta property="og:description" content="Join 2,500+ developers who landed frontend jobs. 90-day program with React, JavaScript, interview prep & portfolio projects. Start your coding career today!" />
        <meta property="og:image" content="https://frontendverse.xyz/image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Frontend Verse - Learn Frontend Development" />
        <meta property="og:site_name" content="Frontend Verse" />
        <meta property="og:locale" content="en_US" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://frontendverse.xyz/" />
        <meta property="twitter:title" content="Frontend Verse - 90-Day Frontend Developer Bootcamp" />
        <meta property="twitter:description" content="Master React, JavaScript & CSS in 90 days. 500+ interview questions, real projects, 95% job placement rate. Start free trial!" />
        <meta property="twitter:image" content="https://frontendverse.xyz/image.png" />
        <meta property="twitter:image:alt" content="Frontend Verse - Frontend Development Course" />
        <meta property="twitter:creator" content="@frontendverse" />
        <meta property="twitter:site" content="@frontendverse" />

        <meta name="theme-color" content="#6366f1" />
        <meta name="msapplication-TileColor" content="#6366f1" />
        <meta name="application-name" content="Frontend Verse" />
        <meta name="apple-mobile-web-app-title" content="Frontend Verse" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Frontend Verse",
              "description": "Master frontend development in 90 days with React, JavaScript, CSS training and job placement support",
              "url": "https://frontendverse.xyz",
              "logo": "https://frontendverse.xyz/image.png",
              "sameAs": [
                "https://twitter.com/frontendverse",
                "https://linkedin.com/company/frontendverse",
                "https://github.com/frontendverse"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-111111111",
                "contactType": "customer service"
              }
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Frontend Development Bootcamp",
              "description": "90-day intensive frontend development course covering React, JavaScript, CSS with job placement support",
              "provider": {
                "@type": "EducationalOrganization",
                "name": "Frontend Verse"
              },
              "courseMode": "online",
              "educationalLevel": "Beginner to Advanced",
              "timeRequired": "P90D",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "2500"
              },
              "offers": {
                "@type": "Offer",
                "category": "Education",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link rel="canonical" href="https://frontendverse.xyz/" />


        <link rel="alternate" type="application/rss+xml" title="Frontend Verse Blog" href="https://frontendverse.com/feed.xml" />

        <meta name="google-site-verification" content="t-DtNw3Zow5BBSMzlRyNA5gGShGYgd2S-shJ9Vn6Ho0" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} ${dancingScript.variable} ${playfairDisplay.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <Suspense>{children}</Suspense>
          </QueryProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
