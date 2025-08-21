import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Blush Bouquet',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1594663653925-365bcbf7ef86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    category: 'Bouquets',
    isBestSeller: true,
  },
  {
    id: 2,
    name: 'Spring Meadow',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
    category: 'Arrangements',
    isNew: true,
  },
  {
    id: 3,
    name: 'Lavender Dreams',
    price: 64.99,
    image: 'https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
    category: 'Bouquets',
    isBestSeller: true,
  },
  {
    id: 4,
    name: 'Sunshine Basket',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
    category: 'Baskets',
    isBestSeller: true,
  },
  {
    id: 5,
    name: 'Elegant Roses',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Roses',
    isBestSeller: true,
  },
  {
    id: 6,
    name: 'Rustic Wildflowers',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1531120364508-a6b656c3e78d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    category: 'Wildflowers',
    isNew: true,
  },
];

const BestSellers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, products.length - (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1));
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  useEffect(() => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.scrollWidth / products.length * currentIndex;
      containerRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  }, [currentIndex]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="heading-lg mb-2">Best Sellers</h2>
            <p className="body-base text-muted-foreground">
              Our most popular arrangements loved by customers
            </p>
          </div>
          <div className="hidden md:flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="rounded-full border-primary hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="rounded-full border-primary hover:bg-primary hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
              >
                <Card className="glass-card overflow-hidden card-hover h-full">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <Button
                        variant="secondary"
                        size="icon"
                        className="rounded-full bg-white/80 hover:bg-white"
                      >
                        <Heart className="h-4 w-4 text-primary" />
                      </Button>
                    </div>
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.isNew && (
                        <Badge className="bg-accent text-white">
                          New
                        </Badge>
                      )}
                      {product.isBestSeller && (
                        <Badge className="bg-primary text-white">
                          Best Seller
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="heading-sm">{product.name}</h3>
                      <span className="font-semibold">${product.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {product.category}
                    </p>
                    <Link to={`/product/${product.id}`}>
                      <Button className="btn-primary w-full">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 md:hidden">
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="rounded-full border-primary hover:bg-primary hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
                className="rounded-full border-primary hover:bg-primary hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/shop">
            <Button className="btn-outline">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
