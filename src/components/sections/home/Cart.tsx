'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Minus, Plus, X, ShoppingBag, ArrowLeft, Tag, Truck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Cart() {
  const router = useRouter();
  const [promoCode, setPromoCode] = useState('');

  // ACTION_PLACEHOLDER_START
  const handleCheckout = () => {
    router.push('/');
  };
  const handleContinueShopping = () => {
    router.push('/');
  };
  const handleApplyPromo = () => {
    // Apply promo code logic
    console.log('Applying promo code:', promoCode);
  };
  // ACTION_PLACEHOLDER_END

  const cartItems = [
    {
      id: 1,
      name: 'Moonstone Teardrop Earrings',
      price: 189.99,
      quantity: 1,
      image: '/api/placeholder/100/100',
      material: 'Sterling Silver',
    },
    {
      id: 2,
      name: 'Vintage Rose Gold Ring',
      price: 329.99,
      quantity: 1,
      image: '/api/placeholder/100/100',
      material: '14k Rose Gold',
    },
    {
      id: 3,
      name: 'Artisan Pearl Necklace',
      price: 249.99,
      quantity: 2,
      image: '/api/placeholder/100/100',
      material: 'Freshwater Pearls',
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <section className="py-16 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Your Jewelry Collection</h1>
          <p className="text-muted-foreground">
            {cartItems.length} handcrafted {cartItems.length === 1 ? 'piece' : 'pieces'} ready for
            checkout
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="size-24 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-foreground">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">Material: {item.material}</p>
                          <p className="text-xs text-primary">Handcrafted by Isabella Martinez</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-8 hover:text-destructive"
                        >
                          <X className="size-4" />
                        </Button>
                      </div>

                      <div className="flex justify-between items-center">
                        {/* Quantity Controls */}
                        <div className="flex items-center border rounded-lg">
                          <Button variant="ghost" size="icon" className="size-8 rounded-r-none">
                            <Minus className="size-3" />
                          </Button>
                          <span className="px-3 py-1 min-w-[40px] text-center text-sm">
                            {item.quantity}
                          </span>
                          <Button variant="ghost" size="icon" className="size-8 rounded-l-none">
                            <Plus className="size-3" />
                          </Button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="font-semibold text-foreground">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            ${item.price.toFixed(2)} each
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Continue Shopping */}
            <Button variant="outline" className="gap-2" onClick={handleContinueShopping}>
              <ArrowLeft className="size-4" />
              Explore More Treasures
            </Button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Promo Code */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Artisan Discount Code</label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={e => setPromoCode(e.target.value)}
                    />
                    <Button variant="outline" size="icon" onClick={handleApplyPromo}>
                      <Tag className="size-4" />
                    </Button>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2 border-t pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium text-green-600 dark:text-green-400">FREE</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between border-t pt-4">
                  <span className="font-semibold text-lg">Total</span>
                  <span className="font-bold text-lg text-primary">${total.toFixed(2)}</span>
                </div>

                {/* Shipping Info */}
                <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                  <Truck className="size-4 text-primary" />
                  <span className="text-sm">Free shipping on all handcrafted jewelry</span>
                </div>

                {/* Trust Indicators */}
                <div className="space-y-2 text-xs text-muted-foreground">
                  <p>✓ Lifetime craftsmanship guarantee</p>
                  <p>✓ Ethically sourced materials</p>
                  <p>✓ Gift wrapping included</p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Button className="w-full gap-2" size="lg" onClick={handleCheckout}>
                  <ShoppingBag className="size-5" />
                  Complete Your Collection
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Secure checkout with lifetime guarantee
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
