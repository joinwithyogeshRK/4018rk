import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

interface Collection {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const collections: Collection[] = [
  {
    id: 1,
    title: 'Wedding Bouquets',
    description: 'Elegant arrangements for your special day',
    image: 'https://images.unsplash.com/photo-1525510579144-4844ac0aa1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
    link: '/shop?category=wedding',
  },
  {
    id: 2,
    title: 'Seasonal Blooms',
    description: 'Fresh picks that celebrate the time of year',
    image: 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    link: '/shop?category=seasonal',
  },
  {
    id: 3,
    title: 'Luxury Arrangements',
    description: 'Premium designs for discerning tastes',
    image: 'https://images.unsplash.com/photo-1561181286-d5c73485a0e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    link: '/shop?category=luxury',
  },
];

const FeaturedCollections = () => {
  return (
    <section id="collections" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Our Collections</h2>
          <p className="body-base text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections, designed to bring joy and
            beauty to every moment of your life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link to={collection.link} key={collection.id}>
              <Card className="group glass-card overflow-hidden card-hover h-full">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="heading-sm mb-2 group-hover:text-primary-600 transition-colors">
                    {collection.title}
                  </h3>
                  <p className="body-base text-muted-foreground">
                    {collection.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
