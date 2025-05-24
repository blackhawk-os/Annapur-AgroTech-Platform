import  HeaderText  from './HeaderText';
import { ArticleCard } from './ArticleCard';

export const Article = () => {
  const article = [
    {
      title: "Reviving Agriculture Through Technology: How Digital Markets Empower Local Farmers",
      date: "22 Sep 2024",
      excerpt: "In an age where agriculture is facing countless challenges, digital marketplaces like Annapur are helping to bridge the gap between traditional farming and modern commerce by directly connecting farmers to buyers. We’re not just enabling better profits, we’re helping sustain local communities and build a more resilient food system for the future.",
      image: "/image/explore-image-1.jpg",
      variant: 'featured' as const,
      category: "Farmers voice"
    },
    {
      title: "Why Organic Matters: The Growing Demand for Clean Food",
      date: "3 Jun 2025",
      excerpt:"Organic farming is more than a trend. It's a commitment to health and sustainability. Discover how choosing organic benefits both your body and the planet."
    },
    {
      title: "A Farmer’s Story: From Struggles to Self-Sufficiency",
      date: "14 Dec 2024",
      excerpt: "Meet farmers who transformed their lives by embracing local marketplaces. Their journeys prove that small-scale efforts can make a big impact."
    },
    {
      title: "The Power of Buying Local: Freshness you can trust",
      date: "7 May 2025",
      excerpt: "Supporting local farms means enjoying food at its freshest. Learn how farm-to-table practices benefit your health and your community."
    },
    {
      title: "Understanding Farm Bidding: A transparent way to trade",
      date: "11 Feb 2025",
      excerpt: "Bidding isn't just for auctions. It's a fair and competitive way for buyers and farmers to agree on the right price- directly and transparently."
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
      <HeaderText 
        text="Latest Articles"
        text2="From our blog posts"
        className="mb-12 text-center"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {article.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            date={article.date}
            excerpt={article.excerpt}
            category={article.category}
            image={article.image}
            variant={article.variant}
            className={index === 0 ? 'md:col-span-2' : ''}
          />
        ))}
      </div>
    </section>
  );
};