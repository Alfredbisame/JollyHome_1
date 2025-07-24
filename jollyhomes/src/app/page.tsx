"use client";
import HeroCarousel from '@/app/components/Hero/HeroCarousel';
import { VideoPlayer } from './components/VideoPlayer';
import PropertySlider from './components/PropertySlider/PropertySlider';
import { sampleProperties } from './components/PropertySlider/data';
import { HowItWorks } from './components/HowItworks';
import { PropertyListing } from './components/PropertyListing';
import { CommunityShowcase } from './components/CommunityShowcase';
import { oyarifaCottageData } from './components/CommunityShowcase/data/communities';
import AgentSignupBanner from './components/AgentSignup/AgentSignupBanner';
import AddToWishListButton from './components/WishList/AddToWishListButton';
import Image from 'next/image';

const HomePage = () => {
  const handleLearnMore = () => {
    console.log('Learn more about Oyarifa Cottage clicked');
  };

  const handleViewProperties = () => {
    console.log('View properties clicked');
  };
  
  //   const handleAgentSignup = () => {
  //   // Handle signup logic here
  //   // Could open a modal, navigate to signup page, etc.
  //   console.log('Opening agent signup form...');
  // };
  
  return (
    <div>
      <HeroCarousel />
      
      <PropertySlider
        properties={sampleProperties}
        autoPlay={true}
        autoPlayInterval={6000}
      />
      
      <VideoPlayer src={'./rvw.mp4'} />
      
      <HowItWorks />
      
      <PropertyListing />
      
      <VideoPlayer src={'./verifex.mp4'} />
      
      <CommunityShowcase
        community={oyarifaCottageData}
        onLearnMore={handleLearnMore}
        onViewProperties={handleViewProperties}
      />

      <AgentSignupBanner />
      
      {/* Test Wishlist Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-green-700 text-center mb-8">Test Wishlist Functionality</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: "1",
                title: "Modern Villa",
                image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400",
                price: 250000
              },
              {
                id: "2", 
                title: "Luxury Apartment",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400",
                price: 180000
              },
              {
                id: "3",
                title: "Family Home",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400", 
                price: 320000
              }
            ].map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-md p-4">
                <div className="relative mb-4">
                  <Image 
                    src={property.image} 
                    alt={property.title}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover rounded-lg"
                    priority={property.id === "1"}
                  />
                  <div className="absolute top-2 right-2">
                    <AddToWishListButton item={property} />
                  </div>
                </div>
                <h3 className="text-gray-600 font-semibold text-lg mb-2">{property.title}</h3>
                <p className="text-green-600 font-bold">GHS {property.price?.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
