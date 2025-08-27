import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/pages/Index";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (productId: number) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
}

export const Cart = ({ isOpen, onClose, items, onRemoveItem, onUpdateQuantity }: CartProps) => {
  console.log("Cart component rendered with items:", items);
  
  const getTotalPrice = () => {
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    console.log("Total price calculated:", total);
    return total;
  };

  const handleCheckout = () => {
    console.log("Checkout initiated with items:", items);
    alert("¡Gracias por tu compra! En una aplicación real, esto te llevaría al proceso de pago.");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold text-green-800 flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Carrito de Compras
            </h2>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🥑</div>
                <p className="text-gray-500">Tu carrito está vacío</p>
                <p className="text-sm text-gray-400 mt-2">
                  Agrega algunos aguacates deliciosos
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-medium text-sm text-green-800">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        ${item.price.toFixed(2)} c/u
                      </p>
                      
                      <div className="flex items-center space-x-2 mt-2">
                        <Button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          variant="outline"
                          size="sm"
                          className="h-6 w-6 p-0"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        
                        <span className="text-sm font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        
                        <Button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          variant="outline"
                          size="sm"
                          className="h-6 w-6 p-0"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-semibold text-green-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <Button
                        onClick={() => onRemoveItem(item.id)}
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700 p-0 h-auto"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-green-800">
                  Total:
                </span>
                <span className="text-xl font-bold text-green-600">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>
              
              <Button
                onClick={handleCheckout}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Proceder al Pago
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};