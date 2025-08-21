import { Flower, Award, Clock, Truck } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="heading-lg mb-6">Our Floral Story</h2>
            <p className="body-base mb-6">
              At Flower Shop, we believe in the power of flowers to transform
              moments into memories. Our journey began with a simple passion for
              botanical beauty and has blossomed into a beloved floral
              destination.
            </p>
            <p className="body-base mb-8">
              Every arrangement is thoughtfully designed and handcrafted with
              fresh, seasonal blooms sourced from local growers whenever
              possible. We take pride in our attention to detail and commitment
              to quality, ensuring that each creation reflects the beauty and
              uniqueness of nature.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Flower className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <h3 className="heading-sm mb-2">Fresh Blooms</h3>
                <p className="body-sm text-muted-foreground">
                  Handpicked daily for maximum freshness
                </p>
              </div>

              <div className="glass-card p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Award className="h-6 w-6 text-secondary-600" />
                  </div>
                </div>
                <h3 className="heading-sm mb-2">Expert Design</h3>
                <p className="body-sm text-muted-foreground">
                  Crafted by skilled floral artists
                </p>
              </div>

              <div className="glass-card p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-accent-600" />
                  </div>
                </div>
                <h3 className="heading-sm mb-2">Same Day</h3>
                <p className="body-sm text-muted-foreground">
                  Quick delivery for last-minute gifts
                </p>
              </div>

              <div className="glass-card p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Truck className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <h3 className="heading-sm mb-2">Free Delivery</h3>
                <p className="body-sm text-muted-foreground">
                  On orders over $75 within city limits
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-primary/10 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-accent/10 rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                alt="Flower shop owner arranging flowers"
                className="rounded-lg w-full h-auto relative z-10 glass-card p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
