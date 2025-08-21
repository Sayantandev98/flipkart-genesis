import { X, Star, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Product } from "./ProductCard";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductModal = ({ product, isOpen, onClose, onAddToCart }: ProductModalProps) => {
  if (!isOpen || !product) return null;

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardContent className="p-0">
          <div className="flex">
            {/* Image Section */}
            <div className="w-1/2 p-6">
              <div className="aspect-[3/4] mb-4 overflow-hidden rounded-lg bg-muted">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Details Section */}
            <div className="w-1/2 p-6 space-y-4">
              <div className="flex justify-between items-start">
                <Badge variant="outline">
                  {product.category}
                </Badge>
                <Button variant="ghost" size="sm" onClick={onClose}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div>
                <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
                <p className="text-lg text-muted-foreground mb-4">by {product.author}</p>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="font-medium">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">
                  ({product.reviews} reviews)
                </span>
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-primary">
                  ₹{product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">
                      ₹{product.originalPrice}
                    </span>
                    <Badge variant="destructive">
                      {discount}% off
                    </Badge>
                  </>
                )}
              </div>
              
              <p className="text-muted-foreground mb-6">
                {product.description}
              </p>
              
              <Separator />
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Truck className="h-4 w-4 text-success" />
                  <span>Free delivery on orders above ₹499</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Shield className="h-4 w-4 text-success" />
                  <span>Cash on Delivery available</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <RotateCcw className="h-4 w-4 text-success" />
                  <span>7-day easy return policy</span>
                </div>
              </div>
              
              <Separator />
              
              <div className="bg-success/10 p-4 rounded-lg">
                <p className="font-medium text-success mb-1">
                  ✓ In Stock - Ready to ship
                </p>
                <p className="text-sm text-muted-foreground">
                  Usually delivered in 2-4 business days
                </p>
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button 
                  size="lg" 
                  className="flex-1"
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductModal;