"use client";
import HeaderText from "@/components/HeaderText";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="min-h-screen p-8 bg-cover bg-center flex flex-col items-center"
        style={{ 
        backgroundImage: "url('/image/banner/banner-bg.png')",
        backgroundRepeat: "no-repeat",
        }}
       >
      <HeaderText 
         text="About Us" 
         text2="Empowering Nepali Farmers" 
         className="mb-8 text-center"
          />
      
      <div className="max-w-4xl bg-white p-6 rounded-lg shadow-md space-y-6 text-gray-800 text-justify">

        <section>
          <h2 className="text-xl font-semibold mb-2">Who We Are</h2>
          <p>
            The core idea behind our platform is to empower local Nepali farmers by providing a direct
            farmer-to-consumer digital marketplace that eliminates the need for middlemen. Farmers often 
            struggle to get fair prices for their produce due to intermediaries who take a large share of profits. 
            Our platform solves this by allowing farmers to list their products, such as fruits, vegetables,
            and grains online, where buyers like households, restaurants, and local markets can directly 
            view, bid on, and purchase them. With features like location-based listings using Google Maps
            and a built-in bidding system, we aim to ensure transparency, fair pricing, and improved 
            accessibility, ultimately supporting both the agricultural community and the end consumers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p>
            Farmers in Nepal often face significant challenges in accessing fair markets. The dominance of
            middlemen means they are forced to sell their produce at lower prices, while intermediaries take
            a large share of the profits. This results in farmers receiving far less than they deserve for their
            hard work. Our mission is to revolutionize the agricultural supply chain by providing a digital platform 
            that empowers farmers to connect directly with buyers, whether individuals, restaurants, or businesses. 
            By removing unnecessary intermediaries, we aim to ensure transparency, fair pricing, and better 
            income for the farming community.
         </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">What We Offer</h2>
          <p>Our platform is a local online marketplace designed to connect farmers directly with buyers, 
            streamlining the agricultural supply chain in Nepal. Key features include:
        </p>
        <ul className="list-disc list-inside space-y-1">
            <li><strong>Online Marketplace for Fresh Produce:</strong> Farmers can easily list vegetables,
                fruits, grains, and more for local buyers to browse and purchase.
            </li>
            <li><strong>GoogleMaps Integration:</strong> Buyers can discover products available near
                them through location-based listings, promoting convenience and reducing transportation costs.
            </li>
            <li><strong>Bidding System:</strong> A fair and transparent bidding system allows farmers to receive
                competitive prices for their goods.
            </li>
            <li><strong>Direct Messaging:</strong> Built-in chat functionality enables direct communication between
             farmers and buyers, fostering trust and quick negotiation.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p>
            Our vision is to revolutionize agricultural marketing in Nepal by making it digital, fair, and
            farmer-focused. We aim to eliminate exploitative middlemen, ensuring that farmers receive the 
            value they truly deserve. By building a sustainable and transparent platform, we empower 
            local communities, promote economic independence, and encourage youth participation in agriculture. 
            In the long run, we envision a nationwide digital ecosystem where technology bridges the gap between 
            rural producers and urban consumers, driving inclusive growth and food security across the country 
            </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Why It Matters</h2>
          <p>
            When you buy directly from farmers, you're not just purchasing fresh produce but you're supporting 
            local families, honoring their hard work, and helping uplift entire communities. Every transaction 
            becomes a step toward fair income for those who feed the nation. You're investing in trust, transparency, 
            and the dream of a better, self-reliant Nepal. Together, we can create a future where agriculture is 
            respected, local produce is valued, and no farmer is left behind.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Get Involved</h2>
          <p>
            This platform is more than just a marketplace. It’s a community. Whether you're a farmer, a buyer, 
            a restaurant owner, or someone who believes in local sustainability, there's a role for you here. 
            By working together, we can build a system that benefits everyone - fair prices for farmers, 
            fresh produce for buyers, and a stronger local economy. Join us in reshaping the future of agriculture 
            in Nepal - one connection at a time. To collaborate or support our mission.
            <Link 
            href="/contact" 
            className="text-[#88B04B] hover:underline"
            >   Contact Us
            </Link> to reach out.
          </p>
        </section>

      </div>
    </div>
  );
}
