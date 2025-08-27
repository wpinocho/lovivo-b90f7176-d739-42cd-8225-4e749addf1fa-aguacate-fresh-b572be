import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Cart } from "@/components/Cart";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  weight: string;
}

export interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Aguacate Hass Premium",
    price: 2.50,
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=300&fit=crop",
    description: "Aguacates Hass de primera calidad, cremosos y perfectos para cualquier ocasión.",
    weight: "200-250g"
  },
  {
    id: 2,
    name: "Aguacate Orgánico",
    price: 3.20,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop",
    description: "Aguacates cultivados orgánicamente, sin pesticidas ni químicos.",
    weight: "180-220g"
  },
  {
    id: 3,
    name: "Aguacate Jumbo",
    price: 4.00,
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=400&h=300&fit=crop",
    description: "Aguacates de tamaño extra grande, ideales para familias.",
    weight: "300-400g"
  },
  {
    id: 4,
    name: "Pack Aguacates (6 unidades)",
    price: 12.00,
    image: "https://images.unsplash.com/photo-1601039641847-7857b994d704?w=400&h=300&fit=crop",
    description: "Pack económico de 6 aguacates frescos y maduros.",
    weight: "1.2-1.5kg"
  },
  {
    id: 5,
    name: "Aguacate Baby",
    price: 1.80,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop",
    description: "Aguacates pequeños, perfectos para snacks individuales.",
    weight: "100-150g"
  },
  {
    id: 6,
    name: "Aguacate Maduro Listo",
    price: 2.80,
    image: "https://images.unsplash.com/photo-1583306756825-2d1d2d3a7b4e?w=400&h=300&fit=crop",
    description: "Aguacates en punto perfecto de maduración, listos para consumir.",
    weight: "200-250g"
  }
];

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  console.log("Index component rendered with cart items:", cartItems);

  const addToCart = (product: Product) => {
    console.log("Adding product to cart:", product);
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        const updatedItems = prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        console.log("Updated cart items (existing item):", updatedItems);
        return updatedItems;
      } else {
        const newItems = [...prevItems, { ...product, quantity: 1 }];
        console.log("Updated cart items (new item):", newItems);
        return newItems;
      }
    });
  };

  const removeFromCart = (productId: number) => {
    console.log("Removing product from cart:", productId);
    setCartItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.id !== productId);
      console.log("Updated cart items after removal:", updatedItems);
      return updatedItems;
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    console.log("Updating quantity for product:", productId, "to:", quantity);
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      );
      console.log("Updated cart items after quantity change:", updatedItems);
      return updatedItems;
    });
  };

  const getTotalItems = () => {
    const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    console.log("Total items in cart:", total);
    return total;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <Header 
        cartItemsCount={getTotalItems()} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <Hero />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
            Nuestros Aguacates Frescos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
};

export default Index;