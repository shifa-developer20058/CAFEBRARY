/** Editable proposed menu prices are in Indian rupees. */
export const MENU_CATEGORIES = [
  { id: 'espresso-hot-coffee', name: 'Espresso & Hot Coffee' },
  { id: 'cold-coffee', name: 'Cold Coffee' },
  { id: 'tea-non-coffee', name: 'Tea & Non-Coffee' },
  { id: 'signature-beverages', name: 'Signature Beverages' },
  { id: 'milkshakes', name: 'Milkshakes' },
  { id: 'bakery', name: 'Bakery' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'seasonal-specials', name: 'Seasonal Specials' },
]

export const MENU_ITEMS = {
  'espresso-hot-coffee': [
    { id: 'espresso', name: 'Espresso', category: 'espresso-hot-coffee', description: 'A concentrated shot of freshly brewed coffee with a rich flavour and intense aroma.', price: 160 },
    { id: 'cappuccino', name: 'Cappuccino', category: 'espresso-hot-coffee', description: 'Espresso combined with steamed milk and a generous layer of soft milk foam', price: 220 },
    { id: 'cafe-latte', name: 'Café Latte', category: 'espresso-hot-coffee', description: 'Espresso blended with silky steamed milk for a smooth, comforting coffee', price: 230 },
    { id: 'cafe-mocha', name: 'Café Mocha', category: 'espresso-hot-coffee', description: 'Espresso, chocolate and steamed milk combined into a rich, chocolatey coffee', price: 260 },
  ],

  'cold-coffee': [
    { id: 'iced-latte', name: 'Iced Latte', category: 'cold-coffee', description: 'Espresso and chilled milk poured over ice for a smooth, refreshing drink', price: 250 },
    { id: 'classic-cold-coffee', name: 'Classic Cold Coffee', category: 'cold-coffee', description: 'Chilled coffee blended with milk for a creamy, lightly frothy beverage', price: 260 },
    { id: 'cold-brew', name: 'Cold Brew', category: 'cold-coffee', description: 'Coffee slowly steeped in cold water for a smooth taste with a naturally mellow character', price: 240 },
    { id: 'iced-mocha', name: 'Iced Mocha', category: 'cold-coffee', description: 'Chilled espresso, chocolate and milk served over ice for a refreshing chocolate coffee', price: 280 },
  ],

  'tea-non-coffee': [
    { id: 'english-breakfast-tea', name: 'English Breakfast Tea', category: 'tea-non-coffee', description: 'A classic black tea with a full-bodied flavour, served warm', price: 180 },
    { id: 'green-tea', name: 'Green Tea', category: 'tea-non-coffee', description: 'A light, delicate tea with a clean and refreshing taste', price: 180 },
    { id: 'masala-chai', name: 'Masala Chai', category: 'tea-non-coffee', description: 'Traditional Indian tea brewed with milk and aromatic spices', price: 160 },
    { id: 'hot-chocolate', name: 'Hot Chocolate', category: 'tea-non-coffee', description: 'A comforting chocolate drink prepared with warm milk and rich cocoa', price: 230 },
  ],

  'signature-beverages': [
    { id: 'vanilla-cinnamon-latte', name: 'Vanilla Cinnamon Latte', category: 'signature-beverages', description: 'A smooth latte with sweet vanilla and a gentle touch of cinnamon', price: 280 },
    { id: 'honey-lavender-tea', name: 'Honey Lavender Tea', category: 'signature-beverages', description: 'A fragrant floral tea balanced with the natural sweetness of honey', price: 240 },
    { id: 'rose-milk-latte', name: 'Rose Milk Latte', category: 'signature-beverages', description: 'A delicate milk-based beverage with a subtle rose flavour and a soft floral character', price: 270 },
    { id: 'iced-caramel-latte', name: 'Iced Caramel Latte', category: 'signature-beverages', description: 'Espresso and chilled milk sweetened with caramel, served over ice', price: 280 },
  ],

  milkshakes: [
    { id: 'classic-vanilla', name: 'Classic Vanilla', category: 'milkshakes', description: 'A creamy vanilla milkshake with a smooth, comforting flavour', price: 260 },
    { id: 'chocolate-milkshake', name: 'Chocolate', category: 'milkshakes', description: 'Rich chocolate blended with chilled milk and ice cream', price: 280 },
    { id: 'strawberry-milkshake', name: 'Strawberry', category: 'milkshakes', description: 'A sweet strawberry milkshake with a fruity, refreshing taste', price: 280 },
    { id: 'cookies-cream', name: 'Cookies & Cream', category: 'milkshakes', description: 'A vanilla milkshake blended with chocolate cookie pieces', price: 300 },
  ],

  bakery: [
    { id: 'croissant', name: 'Croissant', category: 'bakery', description: 'A buttery, golden pastry with delicate layers and a crisp exterior', price: 180 },
    { id: 'pain-au-chocolat', name: 'Pain au Chocolat', category: 'bakery', description: 'A flaky French pastry filled with rich chocolate', price: 220 },
    { id: 'chocolate-muffin', name: 'Chocolate Muffin', category: 'bakery', description: 'A soft, tender muffin with chocolate throughout', price: 190 },
    { id: 'cinnamon-roll', name: 'Cinnamon Roll', category: 'bakery', description: 'A soft, spiral-shaped pastry filled with cinnamon sugar and finished with a delicate icing', price: 240 },
  ],

  desserts: [
    { id: 'chocolate-brownie', name: 'Chocolate Brownie', category: 'desserts', description: 'A rich chocolate dessert with a soft, fudgy centre and deep cocoa flavour', price: 220 },
    { id: 'cheesecake', name: 'Cheesecake', category: 'desserts', description: 'A creamy, smooth cheesecake resting on a buttery biscuit base', price: 280 },
    { id: 'chocolate-cake', name: 'Chocolate Cake', category: 'desserts', description: 'A soft chocolate cake layered with rich chocolate cream', price: 300 },
    { id: 'tiramisu', name: 'Tiramisu', category: 'desserts', description: 'A classic Italian dessert layered with coffee-soaked sponge, creamy filling and a dusting of cocoa', price: 320 },
  ],

  'seasonal-specials': [
    { id: 'seasonal-beverage', name: 'Seasonal Special I · Beverage', category: 'seasonal-specials', description: 'A limited-edition drink inspired by the season, introduced periodically', price: 300 },
    { id: 'seasonal-dessert', name: 'Seasonal Special II · Dessert', category: 'seasonal-specials', description: 'A rotating dessert featuring seasonal flavours or ingredients', price: 320 },
  ],
}
