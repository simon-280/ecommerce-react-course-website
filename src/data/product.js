const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    description: "Premium wireless headphones with noise cancellation and rich, balanced sound."
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    description: "Feature-rich smartwatch with fitness tracking, heart-rate monitoring, and notifications."
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    description: "Lightweight running shoes designed for comfort, grip, and everyday training."
  },
  {
    id: 4,
    name: "Classic Backpack",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    description: "A versatile everyday backpack with roomy storage and comfortable shoulder straps."
  },
  {
    id: 5,
    name: "Digital Camera",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    description: "A digital camera for capturing sharp photographs and memorable moments."
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
    description: "Portable Bluetooth speaker with clear audio and powerful sound."
  },
  {
    id: 7,
    name: "Laptop",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    description: "A modern laptop suitable for work, study, browsing, and everyday productivity."
  },
  {
    id: 8,
    name: "Mechanical Keyboard",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1585226566748-8f4b6e5f2f9c?auto=format&fit=crop&w=800&q=80",
    description: "Responsive mechanical keyboard designed for comfortable typing and gaming."
  },
  {
    id: 9,
    name: "Wireless Mouse",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
    description: "Ergonomic wireless mouse with smooth tracking for work and everyday computing."
  },
  {
    id: 10,
    name: "Tablet",
    price: 329.99,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    description: "A slim tablet for reading, streaming, browsing, and taking notes on the go."
  },
  {
    id: 11,
    name: "Smartphone",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    description: "A sleek smartphone for photography, communication, entertainment, and everyday apps."
  },
  {
    id: 12,
    name: "Gaming Controller",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=800&q=80",
    description: "Comfortable gaming controller with responsive buttons for immersive gameplay."
  },
  {
    id: 13,
    name: "Computer Monitor",
    price: 219.99,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    description: "A desktop monitor for multitasking, studying, office work, and entertainment."
  },
  {
    id: 14,
    name: "Portable Power Bank",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1609592806596-b43bada2f0e3?auto=format&fit=crop&w=800&q=80",
    description: "Compact power bank that helps keep compatible devices charged while travelling."
  },
  {
    id: 15,
    name: "USB-C Hub",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=80",
    description: "Multi-port USB-C hub for connecting accessories and expanding laptop connectivity."
  },
  {
    id: 16,
    name: "Desk Lamp",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    description: "Modern desk lamp that provides focused lighting for reading and working."
  },
  {
    id: 17,
    name: "Travel Mug",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80",
    description: "Reusable travel mug for carrying your favourite hot or cold drinks."
  },
  {
    id: 18,
    name: "Water Bottle",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
    description: "Reusable water bottle for staying hydrated at work, school, or during exercise."
  },
  {
    id: 19,
    name: "Sunglasses",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    description: "Classic sunglasses with a versatile design for everyday outdoor wear."
  },
  {
    id: 20,
    name: "Classic Wristwatch",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
    description: "A timeless wristwatch with a clean design suitable for casual or formal outfits."
  },
  {
    id: 21,
    name: "Leather Wallet",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    description: "A compact wallet designed to organise cards, cash, and everyday essentials."
  },
  {
    id: 22,
    name: "Casual T-Shirt",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    description: "A soft everyday T-shirt with a simple style that pairs easily with casual outfits."
  },
  {
    id: 23,
    name: "Denim Jacket",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&w=800&q=80",
    description: "A classic denim jacket for layering through changing weather and seasons."
  },
  {
    id: 24,
    name: "Sports Cap",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
    description: "A lightweight cap with an adjustable fit for outdoor activities and casual wear."
  },
  {
    id: 25,
    name: "Travel Backpack",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?auto=format&fit=crop&w=800&q=80",
    description: "A practical backpack with organised storage for commuting, travel, and day trips."
  },
  {
    id: 26,
    name: "Coffee Maker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    description: "A convenient coffee maker for preparing fresh coffee at home or in the office."
  },
  {
    id: 27,
    name: "Modern Table Lamp",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    description: "A stylish table lamp that adds warm lighting to a bedside table or living space."
  },
  {
    id: 28,
    name: "Headphone Stand",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=800&q=80",
    description: "A neat stand for storing headphones and keeping your desk organised."
  },
  {
    id: 29,
    name: "Wireless Earbuds",
    price: 74.99,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80",
    description: "Compact wireless earbuds for music, calls, podcasts, and listening while travelling."
  },
  {
    id: 30,
    name: "Action Camera",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80",
    description: "A portable action camera for documenting adventures, outdoor activities, and trips."
  }
];

export function getProducts() {
  return products;
}