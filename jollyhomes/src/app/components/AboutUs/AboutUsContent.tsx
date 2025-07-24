'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '@/app/components/ui/Card';
import { Badge } from '@/app/components/ui/Badge';
import { fadeInUp, slideInFromLeft, slideInFromRight } from '@/app/lib/animations';

const AboutUsContent: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Section Title */}
      <motion.div 
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        <Badge variant="outline" className="mb-4">
          Our Story
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Building Dreams, Creating Communities
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto"></div>
      </motion.div>

      {/* Main Content Section */}
      <section className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Section */}
        <motion.div
          variants={slideInFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
            <Image
              src="https://storage.googleapis.com/a1aa/image/65770afe-fdc6-40de-97af-6aa713f1e9d5.jpg"
              alt="Modern street view with white houses on both sides, cars parked along the street, blue sky with clouds and birds flying"
              width={600}
              height={400}
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Floating badge */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-blue-600 font-semibold text-sm">Premium Location</span>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full opacity-15 blur-2xl" />
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={slideInFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <div>
            <Badge className="mb-3 bg-gradient-to-r from-blue-600 to-emerald-500">
              Featured Community
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Oyarifa Cottage
            </h3>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              The community offers expansive vistas of the{' '}
              <span className="font-semibold text-blue-600">Aburi mountains</span>{' '}
              along with a great selection including luxury features all in an award-worthy community. 
              With a brand-new offering of single story and 2-story homes for sale and with unique, 
              well-built home designs, <em className="text-emerald-600 font-medium">Oyarifa Cottage</em>{' '}
              is an ideal place to live at an attainable price.
            </p>

            <Card className="p-6 bg-gradient-to-br from-blue-50 to-emerald-50 border-none">
              <p className="text-gray-700">
                <span className="font-semibold text-blue-600">Jolly B Homes</span> prides itself on being 
                one of the finest homebuilders in the region, and it&apos;s easy to see why: Jolly B Homes 
                thoughtfully designs each house with living spaces to be enjoyed by residents of every 
                age and stage of life. Homebuyers love simple but classy architecture designed with 
                your comfort in mind.
              </p>
            </Card>

            <p>
              Residents at <span className="font-semibold text-emerald-600">Oyarifa Cottage</span> will 
              enjoy a wonderful community, with spring-like warm weather. It&apos;s easy to make new friends 
              at the community&apos;s indoor games centre and playground.
            </p>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 gap-4 pt-6">
            <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-blue-600">Premium</div>
              <div className="text-sm text-gray-600">Quality Homes</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-emerald-600">Mountain</div>
              <div className="text-sm text-gray-600">Views</div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUsContent;
