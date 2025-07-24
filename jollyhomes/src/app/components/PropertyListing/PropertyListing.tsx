'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Property } from './types';
import PropertyListingHeader from './PropertyListingHeader';
import PropertyStats from './PropertyStats';
import PropertyFilters from './PropertyFilters';
import PropertyCard from './PropertyCard';
import PropertyPagination from './PropertyPagination';
import PropertyLoadingSkeleton from './PropertyLoadingSkeleton';

interface FilterState {
  search: string;
  location: string;
  minPrice: string;
  maxPrice: string;
  beds: string;
  status: string;
}

interface PropertyListingProps {
  properties?: Property[];
  title?: string;
  className?: string;
  onViewDetails?: (property: Property) => void;
  onToggleFavorite?: (propertyId: string) => void;
  favoriteProperties?: string[];
  isLoading?: boolean;
  itemsPerPage?: number;
}

const defaultProperties: Property[] = [
  {
    id: '1',
    title: 'The Leopard (3 BEDROOMS)',
    price: 110000,
    currency: '$',
    status: 'For Sale',
    beds: 3,
    baths: 4,
    sqft: 223,
    location: 'Greater Accra, Oyarifa',
    image: '/prop2.jpg',
    featured: true,
    description: 'Beautiful modern home with spacious rooms and premium finishes.'
  },
  {
    id: '2',
    title: 'The Lion (4 BEDROOMS)',
    price: 120000,
    currency: '$',
    status: 'For Sale',
    beds: 4,
    baths: 5,
    sqft: 223,
    location: 'Greater Accra, Oyarifa',
    image: '/prop6.jpg',
    description: 'Luxurious family home with modern amenities and elegant design.'
  },
  {
    id: '3',
    title: 'The Cheetah (2 BEDROOMS)',
    price: 85000,
    currency: '$',
    status: 'For Sale',
    beds: 2,
    baths: 3,
    sqft: 223,
    location: 'Greater Accra, Oyarifa',
    image: 'https://storage.googleapis.com/a1aa/image/6051b499-bd76-46c7-22ec-1de59323324e.jpg',
    description: 'Cozy and affordable home perfect for young families or couples.'
  },
  {
    id: '4',
    title: 'The Eagle (5 BEDROOMS)',
    price: 180000,
    currency: '$',
    status: 'For Sale',
    beds: 5,
    baths: 6,
    sqft: 350,
    location: 'Kumasi',
    image: '/prop4.jpg',
    featured: true,
    description: 'Luxury estate with premium amenities and spacious layout.'
  },
  {
    id: '5',
    title: 'The Falcon (3 BEDROOMS)',
    price: 95000,
    currency: '$',
    status: 'For Rent',
    beds: 3,
    baths: 3,
    sqft: 200,
    location: 'Tema',
    image: '/prop5.jpg',
    description: 'Modern rental property in prime location.'
  },
  {
    id: '6',
    title: 'The Hawk (4 BEDROOMS)',
    price: 140000,
    currency: '$',
    status: 'Sold',
    beds: 4,
    baths: 4,
    sqft: 280,
    location: 'Greater Accra, Oyarifa',
    image: '/prop4.jpg',
    description: 'Recently sold premium family home.'
  }
];

const PropertyListing: React.FC<PropertyListingProps> = ({
  properties = defaultProperties,
  title = "JOLLY HOMES PROPERTIES FOR SALE",
  className = "",
  onViewDetails,
  onToggleFavorite,
  favoriteProperties = [],
  isLoading = false,
  itemsPerPage = 6
}) => {
  const router = useRouter();
  const [favorites, setFavorites] = useState<string[]>(favoriteProperties);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    location: '',
    minPrice: '',
    maxPrice: '',
    beds: '',
    status: ''
  });

  // Filter properties based on current filters
  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      const matchesSearch = !filters.search || 
        property.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        property.location.toLowerCase().includes(filters.search.toLowerCase());
      
      const matchesLocation = !filters.location || property.location === filters.location;
      
      const matchesMinPrice = !filters.minPrice || property.price >= parseInt(filters.minPrice);
      
      const matchesMaxPrice = !filters.maxPrice || property.price <= parseInt(filters.maxPrice);
      
      const matchesBeds = !filters.beds || property.beds >= parseInt(filters.beds);
      
      const matchesStatus = !filters.status || property.status === filters.status;

      return matchesSearch && matchesLocation && matchesMinPrice && 
             matchesMaxPrice && matchesBeds && matchesStatus;
    });
  }, [properties, filters]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProperties = filteredProperties.slice(startIndex, startIndex + itemsPerPage);

  // Reset to first page when filters change
  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleViewDetails = (property: Property) => {
    if (onViewDetails) {
      onViewDetails(property);
    } else {
      console.log('View details for:', property.title);
    }
  };

  const handleToggleFavorite = (propertyId: string) => {
    if (onToggleFavorite) {
      onToggleFavorite(propertyId);
    } else {
      setFavorites(prev => 
        prev.includes(propertyId)
          ? prev.filter(id => id !== propertyId)
          : [...prev, propertyId]
      );
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of property listing
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    router.push('/contact');
  };

  const handleBrowseAllClick = () => {
    router.push('/gallery');
  };

  // Calculate stats
  const averagePrice = filteredProperties.length > 0 
    ? filteredProperties.reduce((sum, prop) => sum + prop.price, 0) / filteredProperties.length 
    : 0;
  
  const uniqueLocations = new Set(properties.map(prop => prop.location)).size;

  return (
    <section className={`bg-gradient-to-br from-gray-50 via-white to-slate-50 py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <PropertyListingHeader 
          title={title}
          propertyCount={filteredProperties.length}
        />

        {/* Stats */}
        <PropertyStats 
          totalProperties={properties.length}
          averagePrice={averagePrice}
          locations={uniqueLocations}
          rating={4.8}
        />

        {/* Filters */}
        <PropertyFilters onFiltersChange={handleFiltersChange} />

        {/* Results Summary */}
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center mb-8"
          >
            <p className="text-slate-600">
              Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredProperties.length)} of {filteredProperties.length} properties
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-500">Sort by:</span>
              <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Bedrooms</option>
              </select>
            </div>
          </motion.div>
        )}
        
        {/* Property Grid */}
        {isLoading ? (
          <PropertyLoadingSkeleton count={itemsPerPage} />
        ) : filteredProperties.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h10M7 11h6m-6 4h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">No Properties Found</h3>
              <p className="text-slate-600 mb-6">
                We couldn&apos;t find any properties matching your criteria. Try adjusting your filters.
              </p>
              <motion.button
                onClick={() => handleFiltersChange({
                  search: '', location: '', minPrice: '', maxPrice: '', beds: '', status: ''
                })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors duration-200"
              >
                Clear All Filters
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {paginatedProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewDetails={handleViewDetails}
                onToggleFavorite={handleToggleFavorite}
                isFavorite={favorites.includes(property.id)}
              />
            ))}
          </motion.div>
        )}
        
          {/* Pagination */}
        {!isLoading && filteredProperties.length > itemsPerPage && (
          <PropertyPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            className="mt-12"
          />
        )}
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h3>
            <p className="text-slate-600 mb-6">
              Our team of experts is here to help you find the perfect property that matches your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-emerald-600 transition-colors duration-200 shadow-lg cursor-pointer"
                onClick={handleContactClick}
              >
                Contact Our Agents
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-emerald-500 text-emerald-600 font-semibold py-3 px-8 rounded-full hover:bg-emerald-50 transition-colors duration-200 cursor-pointer"
                onClick={handleBrowseAllClick}
              >
                Browse All Properties
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyListing;


// 'use client';

// import { motion, Variants } from 'framer-motion';
// import { PropertyListingProps, Property } from './types';
// import PropertyListingHeader from './PropertyListingHeader';
// import PropertyCard from './PropertyCard';
// import { useState } from 'react';

// const defaultProperties: Property[] = [
//   {
//     id: '1',
//     title: 'The Leopard (3 BEDROOMS)',
//     price: 110000,
//     currency: '$',
//     status: 'For Sale',
//     beds: 3,
//     baths: 4,
//     sqft: 223,
//     location: 'Greater Accra, Oyarifa',
//     image: 'https://storage.googleapis.com/a1aa/image/5f7eeb7a-4beb-4041-9fc8-6faf18c1b8aa.jpg',
//     featured: true,
//     description: 'Beautiful modern home with spacious rooms and premium finishes.'
//   },
//   {
//     id: '2',
//     title: 'The Lion (4 BEDROOMS)',
//     price: 120000,
//     currency: '$',
//     status: 'For Sale',
//     beds: 4,
//     baths: 5,
//     sqft: 223,
//     location: 'Greater Accra, Oyarifa',
//     image: 'https://storage.googleapis.com/a1aa/image/af1c6f19-1521-476b-4404-cefb81776363.jpg',
//     description: 'Luxurious family home with modern amenities and elegant design.'
//   },
//   {
//     id: '3',
//     title: 'The Cheetah (2 BEDROOMS)',
//     price: 85000,
//     currency: '$',
//     status: 'For Sale',
//     beds: 2,
//     baths: 3,
//     sqft: 223,
//     location: 'Greater Accra, Oyarifa',
//     image: 'https://storage.googleapis.com/a1aa/image/6051b499-bd76-46c7-22ec-1de59323324e.jpg',
//     description: 'Cozy and affordable home perfect for young families or couples.'
//   }
// ];

// const PropertyListing: React.FC<PropertyListingProps> = ({
//   properties = defaultProperties,
//   title = "JOLLY HOMES PROPERTIES FOR SALE",
//   className = "",
//   onViewDetails,
//   onToggleFavorite,
//   favoriteProperties = []
// }) => {
//   const [favorites, setFavorites] = useState<string[]>(favoriteProperties);

//   const handleViewDetails = (property: Property) => {
//     if (onViewDetails) {
//       onViewDetails(property);
//     } else {
//       console.log('View details for:', property.title);
//       // Default behavior - could navigate to property details page
//     }
//   };

//   const handleToggleFavorite = (propertyId: string) => {
//     if (onToggleFavorite) {
//       onToggleFavorite(propertyId);
//     } else {
//       // Default behavior
//       setFavorites(prev => 
//         prev.includes(propertyId)
//           ? prev.filter(id => id !== propertyId)
//           : [...prev, propertyId]
//       );
//     }
//   };

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   return (
//     <section className={`bg-gradient-to-br from-gray-50 via-white to-slate-50 py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
//       <div className="max-w-7xl mx-auto">
//         <PropertyListingHeader 
//           title={title}
//           propertyCount={properties.length}
//         />
        
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
//         >
//           {properties.map((property) => (
//             <PropertyCard
//               key={property.id}
//               property={property}
//               onViewDetails={handleViewDetails}
//               onToggleFavorite={handleToggleFavorite}
//               isFavorite={favorites.includes(property.id)}
//             />
//           ))}
//         </motion.div>
        
//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ 
//             duration: 0.8, 
//             delay: 0.5,
//             ease: [0.25, 0.46, 0.45, 0.94]
//           }}
//           viewport={{ once: true }}
//           className="text-center mt-16"
//         >
//           <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
//             <h3 className="text-2xl font-bold text-slate-800 mb-4">
//               Can't Find What You're Looking For?
//             </h3>
//             <p className="text-slate-600 mb-6">
//               Our team of experts is here to help you find the perfect property that matches your needs and budget.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <motion.button
//                 whileHover={{ 
//                   scale: 1.05,
//                   boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)"
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-emerald-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-emerald-600 transition-colors duration-200 shadow-lg"
//               >
//                 Contact Our Agents
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="border-2 border-emerald-500 text-emerald-600 font-semibold py-3 px-8 rounded-full hover:bg-emerald-50 transition-colors duration-200 curso"
//               >
//                 Browse All Properties
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default PropertyListing;
