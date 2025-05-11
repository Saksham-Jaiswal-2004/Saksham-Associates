"use client"
import Head from "next/head";

const Seo = ({
  title = "Saksham Associates | Interior Design Experts in Kolkata",
  description = "Transform your space with Saksham Associates. Residential, commercial, and luxury interior design in Kolkata. Personalized, sustainable, and innovative solutions.",
  url = "https://sakshamassociates.in",
  image = "/images/SALOGO.svg",
  keywords = "interior design, Kolkata, residential, commercial, luxury, sustainable, Saksham Associates, best interior designers, home design, office design",
  canonical = "",
  children,
}) => {
  const canonicalUrl = canonical || url;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywords}/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="robots" content="index, follow"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:url" content={canonicalUrl}/>
      <meta property="og:image" content={image}/>
      <meta property="og:site_name" content="Saksham Associates"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>
      <meta name="twitter:image" content={image}/>
      <link rel="canonical" href={canonicalUrl}/>
      <link rel="icon" href="/images/SALOGO.svg"/>
      {/* Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Saksham Associates",
            "url": url,
            "logo": image,
            "sameAs": [
              "https://www.instagram.com/sakshamassociates/",
              "https://www.houzz.com/pro/sakshamassociates",
              "https://in.pinterest.com/saksham_associates/"
            ]
          }),
        }}
      />
      {children}
    </Head>
  );
};

export default Seo;
