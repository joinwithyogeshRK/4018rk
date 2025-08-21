import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Beautiful flowers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/40 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-20 md:py-0">
        <div className="max-w-2xl float-up">
          <h1 className="heading-xl mb-6 text-primary-800">
            Bring Nature's Beauty to Your Home
          </h1>
          <p className="body-lg mb-8 text-gray-700">
            Discover exquisite floral arrangements crafted with care and
            creativity. From elegant bouquets to stunning centerpieces, we bring
            the beauty of flowers to every occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/shop">
              <Button className="btn-primary">
                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="btn-outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="absolute top-20 right-20 w-24 h-24 rounded-full bg-accent/20 blur-3xl"></div>
    </section>
  );
};

export default Hero;
