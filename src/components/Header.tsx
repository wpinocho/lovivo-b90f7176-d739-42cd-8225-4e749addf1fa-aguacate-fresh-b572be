import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  console.log("Header rendered with cart items count:", cartItemsCount);
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🥑</span>
          <h1 className="text-2xl font-bold text-green-800">AguacateShop</h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-green-700 hover:text-green-900 transition-colors">
            Inicio
          </a>
          <a href="#" className="text-green-700 hover:text-green-900 transition-colors">
            Productos
          </a>
          <a href="#" className="text-green-700 hover:text-green-900 transition-colors">
            Sobre Nosotros
          </a>
          <a href="#" className="text-green-700 hover:text-green-900 transition-colors">
            Contacto
          </a>
        </nav>

        <Button
          onClick={onCartClick}
          variant="outline"
          size="sm"
          className="relative border-green-600 text-green-600 hover:bg-green-50"
        >
          <ShoppingCart className="h-5 w-5" />
          {cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItemsCount}
            </span>
          )}
        </Button>
      </div>
    </header>
  );
};