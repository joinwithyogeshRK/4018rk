import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    isNew?: boolean;
    isBestSeller?: boolean;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success(`${product.name} added to cart`);
  };

  const addToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success(`${product.name} added to wishlist`);
  };

  return (
    <Link to={`/product/${product.id}`}>
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
              onClick={addToWishlist}
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
            <span className="font-semibold">${product.price.toFixed(2)}</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            {product.category}
          </p>
          <Button
            className="btn-primary w-full flex items-center justify-center gap-2"
            onClick={addToCart}
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
