import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Emily Johnson',
    role: 'Bride',
    content: "The wedding bouquets exceeded all my expectations! The attention to detail and the freshness of the flowers made our special day even more beautiful. I can't thank the Flower Shop team enough.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Regular Customer',
    content: "I've been ordering from Flower Shop for over a year now, and they never disappoint. The arrangements are always fresh, beautifully designed, and last much longer than flowers I've purchased elsewhere.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
  },
  {
    id: 3,
    name: 'Sophia Martinez',
    role: 'Event Planner',
    content: "As an event planner, I need reliable vendors who deliver quality consistently. Flower Shop has been my go-to florist for all my clients' events. Their creativity and professionalism are unmatched.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80',
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Gift Giver',
    content: "I ordered a surprise arrangement for my wife's birthday, and she was absolutely thrilled. The online ordering was easy, delivery was prompt, and the flowers were stunning. Will definitely order again!",
    rating: 4,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">What Our Customers Say</h2>
          <p className="body-base text-muted-foreground max-w-2xl mx-auto">
            We take pride in creating beautiful floral experiences that bring joy
            to our customers. Here's what they have to say about us.
          </p>
        </div>

        <div className="masonry-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="mb-6">
              <Card className="glass-card overflow-hidden h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="body-base">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
