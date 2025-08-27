import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/pages/Index";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  console.log("ProductCard rendered for product:", product.name);
  
  const handleAddToCart = () => {
    console.log("Add to cart clicked for product:", product.name);
    onAddToCart(product);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded-full text-sm font-semibold">
            ${product.price.toFixed(2)}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <CardTitle className="text-lg font-bold text-green-800 mb-2">
          {product.name}
        </CardTitle>
        <p className="text-gray-600 text-sm mb-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Peso: {product.weight}</span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
            Fresco
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-green-600 hover:bg-green-700 text-white"
        >
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
};