import React from "react";
import "../../styles/menu.css";
import MenuItem from "./MenuItem";

const menuItems = {
  default: [        ////////DEFAULT///////
    {
      title: 'New Arrivals',
      subCategories: [
        {
          category: 'Clothing',
          items: ['Dresses', 'Tops', 'Pants & Jeans', 'Skirts', 'Jackets & Coats', 'Sweaters & Cardigans', 'Suits', 'Co-ords', 'Blouses', 'Jeans'],
        },
        {
          category: 'Shoes',
          items: ['Sneakers', 'Boots', 'Heels', 'Flats', 'Sandals'],
        },
        {
          category: 'Activewear',
          items: ['Sports Bras', 'Leggings', 'Workout Tops', 'Joggers', 'Jackets'],
        },
        {
          category: 'Trends',
          items: ['Seasonal Trends', 'Color Trends', 'Style Trends'],
        },
        {
          category: 'Sale',
          items: ['Last Chance', 'Clearance'],
        },
        {
          category: 'Accessories',
          items: ['Bags', 'Jewelry', 'Scarves & Shawls', 'Hats', 'Sunglasses'],
        },
        {
          category: 'Lingerie',
          items: ['Bras', 'Panties', 'Sleepwear', 'Robes', 'Shapewear'],
        }
      ]
    },
    
    {
      title: 'Clothing',
      subCategories: [
        {
          category: 'Casual ',
          items: ['Sneakers', 'Slip-On Shoes', 'Loafers', 'Canvas Shoes'],
        },
        {
          category: 'Boots',
          items: ['Ankle Boots', 'Knee-High Boots', 'Chelsea Boots', 'Combat Boots'],
        },
        {
          category: 'Best Styles',
          items: ['Platform Sneakers', 'Chunky Boots', 'Vegan Leather Shoes'],
        },
        {
          category: 'Athletic ',
          items: ['Running Shoes', 'Training Shoes', 'Trail Shoes', 'Basketball Shoes'],
        },
        {
          category: 'Specialty',
          items: ['Hiking Shoes', 'Work Boots', 'Dance Shoes', 'Slip-Resistant Shoes'],
        }
      ]
    },
    
    {
      title: 'Shoes',
      subCategories: [
        {
          category: 'Casual Shoes',
          items: ['Sneakers', 'Slip-On Shoes', 'Loafers', 'Canvas Shoes'],
        },
        {
          category: 'Boots',
          items: ['Ankle Boots', 'Knee-High Boots', 'Chelsea Boots', 'Combat Boots'],
        },
        {
          category: 'Trendy Styles',
          items: ['Platform Sneakers', 'Chunky Boots', 'Vegan Leather Shoes'],
        },
        {
          category: 'Athletic Shoes',
          items: ['Running Shoes', 'Training Shoes', 'Trail Shoes', 'Basketball Shoes'],
        },
        {
          category: 'Specialty Footwear',
          items: ['Hiking Shoes', 'Work Boots', 'Dance Shoes', 'Slip-Resistant Shoes'],
        }
      ]
    },
    {
      title: 'Accessories',
      subCategories: [
        {
          category: 'Jewelry',
          items: ['Necklaces', 'Earrings', 'Bracelets', 'Rings'],
        },
        {
          category: 'Bags',
          items: ['Handbags', 'Tote Bags', 'Backpacks', 'Clutches'],
        },
        {
          category: 'Hats',
          items: ['Baseball Caps', 'Beanies'],
        },
        {
          category: 'Belts',
          items: ['Casual Belts', 'Dress Belts', 'Wide Belts'],
        },
        {
          category: 'Sunglasses',
          items: ['Sport Sunglasses', 'Cat-Eye Sunglasses'],
        },
        {
          category: 'Hair Accessories',
          items: ['Headbands', 'Hair Clips', 'Scrunchies', 'Barrettes'],
        }
      ]
    },
    {
      title: 'Sale',
      subCategories: [
        {
          category: 'Seasonal Sales',
          items: ['Spring Clearance', 'Summer Sale', 'Fall Discounts'],
        },
        {
          category: 'Special Promotions',
          items: ['New Arrivals: 15% Off', 'Holiday Specials', 'Buy More, Save More'],
        },
        {
          category: 'Limited Time Offers',
          items: ['Daily Deals', 'Weekend Flash Sales'],
        },
        {
          category: 'Bundle Offers',
          items: ['Mix and Match: Save 20%', 'Outfit Bundles: Discounted Prices'],
        }
      ]
    },
    {
      title: 'Brands',
      subCategories: [
        {
          category: 'Chanel',
          items: ['Spring Clearance', 'Summer Sale', 'Fall Discounts'],
        },
        {
          category: 'Gucci',
          items: ['New Arrivals: 15% Off', 'Holiday Specials', 'Buy More, Save More'],
        },
        {
          category: 'Louis Vuitton',
          items: ['Daily Deals', 'Weekend Flash Sales'],
        },
        {
          category: 'Givenchy',
          items: ['Mix and Match: Save 20%', 'Outfit Bundles: Discounted Prices'],
        }
      ]
    },
    {
      title: 'Trends',
      subCategories: [
        {
          category: 'All season',
          items: ['Spring Clearance', 'Summer Sale', 'Fall Discounts'],
        },
        {
          category: 'Activwear',
          items: ['Gym Shark', 'Leggins', 'Joggers, Save More'],
        },
        {
          category: 'Best deal',
          items: ['Daily Deals', 'Weekend Flash Sales'],
        },
        {
          category: 'Bundle Offers',
          items: ['Mix and Match: Save 20%', 'Outfit Bundles: Discounted Prices'],
        }
      ]
    },
  ],
  woman: [                         ///////WOMAN//////////
    {
      title: 'New Arrivals',
      subCategories: [
        {
          category: 'Clothing',
          items: ['Dresses', 'Tops', 'Pants & Jeans', 'Skirts', 'Jackets & Coats', 'Sweaters & Cardigans', 'Suits', 'Co-ords', 'Blouses', 'Jeans'],
        },
        {
          category: 'Shoes',
          items: ['Sneakers', 'Boots', 'Heels', 'Flats', 'Sandals'],
        },
        {
          category: 'Activewear',
          items: ['Sports Bras', 'Leggings', 'Workout Tops', 'Joggers', 'Jackets'],
        },
        {
          category: 'Trends',
          items: ['Seasonal Trends', 'Color Trends', 'Style Trends'],
        },
        {
          category: 'Sale',
          items: ['Last Chance', 'Clearance'],
        },
        {
          category: 'Accessories',
          items: ['Bags', 'Jewelry', 'Scarves & Shawls', 'Hats', 'Sunglasses'],
        },
        {
          category: 'Lingerie',
          items: ['Bras', 'Panties', 'Sleepwear', 'Robes', 'Shapewear'],
        }
      ]
    },
    {
      title: 'Dresses',
      subCategories: [
        {
          category: 'Casual Dresses',
          items: ['T-shirt Dresses', 'Sundresses', 'Maxi Casuals', 'Slip Dresses'],
        },
        {
          category: 'Party Dresses',
          items: ['Fun and Flirty Styles', 'Sparkly Dresses', 'Themed Party Dresses', 'Bodycon Dresses'],
        },
        {
          category: 'Trendy Styles',
          items: ['Bohemian Dresses', 'Vintage-Inspired Dresses', 'Modern Wrap Dresses', 'Asymmetrical Dresses'],
        },
        {
          category: 'Evening Dresses',
          items: ['Long Evening Gowns', 'Elegant Cocktail Dresses', 'Luxe Maxi Dresses', 'Satin Evening Dresses'],
        },
        {
          category: 'Formal Dresses',
          items: ['Ball Gowns', 'Classic A-line Dresses', 'Tuxedo Dresses', 'Midi Formal Dresses'],
        }
      ]
    },
    {
      title: 'Tops',
      subCategories: [
        {
          category: 'Casual Tops',
          items: ['T-Shirts', 'Tank Tops', 'Graphic Tees', 'Henley Shirts'],
        },
        {
          category: 'Athletic Tops',
          items: ['Sports Bras', 'Performance Tanks', 'Hoodies'],
        },
        {
          category: 'Trendy Styles',
          items: ['Wrap Tops', 'Asymmetrical Tops'],
        },
        {
          category: 'Layering Essentials',
          items: ['Cardigans', 'Denim Jackets'],
        },
        {
          category: 'Dressy Tops',
          items: ['Blouses', 'Silk Tops', 'Off-the-Shoulder Tops', 'Peplum Tops'],
        }
      ]
    },
    {
      title: 'Bottoms',
      subCategories: [
        {
          category: 'Casual Bottoms',
          items: ['Jeans', 'Chinos', 'Sweatpants', 'Cargo Pants', 'Trousers', 'Culottes', 'Linen Pants'],
        },
        {
          category: 'Skirts',
          items: ['Maxi Skirts', 'A-line Skirts', 'Mini Skirts'],
        },
        {
          category: 'Trends',
          items: ['Wide-Leg Pants', 'High-Waisted Jeans', 'Paperbag Waist Trousers'],
        },
        {
          category: 'Sale',
          items: ['Jeans', 'Linen Pants', 'Distressed Denim', 'Joggers', 'Track Pants'],
        }
      ]
    },
    {
      title: 'Outerwear',
      subCategories: [
        {
          category: 'Jackets',
          items: ['Denim Jackets', 'Bomber Jackets', 'Leather Jackets', 'Utility Jackets'],
        },
        {
          category: 'Coats',
          items: ['Trench Coats', 'Overcoats', 'Peacoats', 'Puffer Coats'],
        },
        {
          category: 'Winter Outerwear',
          items: ['Wool Coats'],
        },
        {
          category: 'Blazers',
          items: ['Tailored Blazers', 'Oversized Blazers', 'Printed Blazers', 'Longline Blazers'],
        },
        {
          category: 'Rainwear',
          items: ['Raincoats', 'Waterproof Jackets'],
        },
        {
          category: 'Trendy Outerwear',
          items: ['Oversized Coats', 'Moto Jackets', 'Faux Fur Jackets', 'Cape Coats'],
        }
      ]
    },
    {
      title: 'Activewear',
      subCategories: [
        {
          category: 'Tops',
          items: ['Performance Tanks', 'T-Shirts', 'Workout Tops', 'Sports Bras'],
        },
        {
          category: 'Outerwear',
          items: ['Lightweight Jackets', 'Hoodies', 'Windbreakers', 'Sweatshirts'],
        },
        {
          category: 'Specialty Gear',
          items: ['Yoga Pants', 'Pilates Tops', 'Cycling Shorts', 'Swimwear'],
        },
        {
          category: 'Bottoms',
          items: ['Leggings', 'Compression Tights', 'Running Shorts', 'Capris'],
        },
        {
          category: 'Footwear',
          items: ['Running Shoes', 'Hiking Boots', 'Slip-On Sneakers'],
        },
        {
          category: 'Layering Essentials',
          items: ['Base Layers', 'Thermal Tops', 'Compression Sleeves', 'Lightweight Wraps'],
        }
      ]
    },
    {
      title: 'Shoes',
      subCategories: [
        {
          category: 'Casual Shoes',
          items: ['Sneakers', 'Slip-On Shoes', 'Loafers', 'Canvas Shoes'],
        },
        {
          category: 'Boots',
          items: ['Ankle Boots', 'Knee-High Boots', 'Chelsea Boots', 'Combat Boots'],
        },
        {
          category: 'Trendy Styles',
          items: ['Platform Sneakers', 'Chunky Boots', 'Vegan Leather Shoes'],
        },
        {
          category: 'Athletic Shoes',
          items: ['Running Shoes', 'Training Shoes', 'Trail Shoes', 'Basketball Shoes'],
        },
        {
          category: 'Specialty Footwear',
          items: ['Hiking Shoes', 'Work Boots', 'Dance Shoes', 'Slip-Resistant Shoes'],
        }
      ]
    },
    {
      title: 'Accessories',
      subCategories: [
        {
          category: 'Jewelry',
          items: ['Necklaces', 'Earrings', 'Bracelets', 'Rings'],
        },
        {
          category: 'Bags',
          items: ['Handbags', 'Tote Bags', 'Backpacks', 'Clutches'],
        },
        {
          category: 'Hats',
          items: ['Baseball Caps', 'Beanies'],
        },
        {
          category: 'Belts',
          items: ['Casual Belts', 'Dress Belts', 'Wide Belts'],
        },
        {
          category: 'Sunglasses',
          items: ['Sport Sunglasses', 'Cat-Eye Sunglasses'],
        },
        {
          category: 'Hair Accessories',
          items: ['Headbands', 'Hair Clips', 'Scrunchies', 'Barrettes'],
        }
      ]
    },
    {
      title: 'Sale',
      subCategories: [
        {
          category: 'Seasonal Sales',
          items: ['Spring Clearance', 'Summer Sale', 'Fall Discounts'],
        },
        {
          category: 'Special Promotions',
          items: ['New Arrivals: 15% Off', 'Holiday Specials', 'Buy More, Save More'],
        },
        {
          category: 'Limited Time Offers',
          items: ['Daily Deals', 'Weekend Flash Sales'],
        },
        {
          category: 'Bundle Offers',
          items: ['Mix and Match: Save 20%', 'Outfit Bundles: Discounted Prices'],
        }
      ]
    },
  ],
  man: [                         ///////MAN//////////
    {
      title: 'New Arrivals',
      subCategories: [
        {
          category: 'Clothing',
          items: ['Dresses', 'Tops', 'Pants & Jeans', 'Skirts', 'Jackets & Coats', 'Sweaters & Cardigans', 'Suits', 'Co-ords', 'Blouses', 'Jeans'],
        },
        {
          category: 'Shoes',
          items: ['Sneakers', 'Boots', 'Heels', 'Flats', 'Sandals'],
        },
        {
          category: 'Activewear',
          items: ['Sports Bras', 'Leggings', 'Workout Tops', 'Joggers', 'Jackets'],
        },
        {
          category: 'Trends',
          items: ['Seasonal Trends', 'Color Trends', 'Style Trends'],
        },
        {
          category: 'Sale',
          items: ['Last Chance', 'Clearance'],
        },
        {
          category: 'Accessories',
          items: ['Bags', 'Jewelry', 'Scarves & Shawls', 'Hats', 'Sunglasses'],
        },
        {
          category: 'Lingerie',
          items: ['Bras', 'Panties', 'Sleepwear', 'Robes', 'Shapewear'],
        }
      ]
    },
    {
      title: 'Tops',
      subCategories: [
        {
          category: 'Casual Tops',
          items: ['T-Shirts', 'Tank Tops', 'Graphic Tees', 'Henley Shirts'],
        },
        {
          category: 'Athletic Tops',
          items: ['Sports Bras', 'Performance Tanks', 'Hoodies'],
        },
        {
          category: 'Trendy Styles',
          items: ['Wrap Tops', 'Asymmetrical Tops'],
        },
        {
          category: 'Layering Essentials',
          items: ['Cardigans', 'Denim Jackets'],
        },
        {
          category: 'Dressy Tops',
          items: ['Blouses', 'Silk Tops', 'Off-the-Shoulder Tops', 'Peplum Tops'],
        }
      ]
    },
    {
      title: 'Bottoms',
      subCategories: [
        {
          category: 'Casual Bottoms',
          items: ['Jeans', 'Chinos', 'Sweatpants', 'Cargo Pants', 'Trousers', 'Culottes', 'Linen Pants'],
        },
        {
          category: 'Skirts',
          items: ['Maxi Skirts', 'A-line Skirts', 'Mini Skirts'],
        },
        {
          category: 'Trends',
          items: ['Wide-Leg Pants', 'High-Waisted Jeans', 'Paperbag Waist Trousers'],
        },
        {
          category: 'Sale',
          items: ['Jeans', 'Linen Pants', 'Distressed Denim', 'Joggers', 'Track Pants'],
        }
      ]
    },
    {
      title: 'Outerwear',
      subCategories: [
        {
          category: 'Jackets',
          items: ['Denim Jackets', 'Bomber Jackets', 'Leather Jackets', 'Utility Jackets'],
        },
        {
          category: 'Coats',
          items: ['Trench Coats', 'Overcoats', 'Peacoats', 'Puffer Coats'],
        },
        {
          category: 'Winter Outerwear',
          items: ['Wool Coats'],
        },
        {
          category: 'Blazers',
          items: ['Tailored Blazers', 'Oversized Blazers', 'Printed Blazers', 'Longline Blazers'],
        },
        {
          category: 'Rainwear',
          items: ['Raincoats', 'Waterproof Jackets'],
        },
        {
          category: 'Trendy Outerwear',
          items: ['Oversized Coats', 'Moto Jackets', 'Faux Fur Jackets', 'Cape Coats'],
        }
      ]
    },
    {
      title: 'Activewear',
      subCategories: [
        {
          category: 'Tops',
          items: ['Performance Tanks', 'T-Shirts', 'Workout Tops', 'Sports Bras'],
        },
        {
          category: 'Outerwear',
          items: ['Lightweight Jackets', 'Hoodies', 'Windbreakers', 'Sweatshirts'],
        },
        {
          category: 'Specialty Gear',
          items: ['Yoga Pants', 'Pilates Tops', 'Cycling Shorts', 'Swimwear'],
        },
        {
          category: 'Bottoms',
          items: ['Leggings', 'Compression Tights', 'Running Shorts', 'Capris'],
        },
        {
          category: 'Footwear',
          items: ['Running Shoes', 'Hiking Boots', 'Slip-On Sneakers'],
        },
        {
          category: 'Layering Essentials',
          items: ['Base Layers', 'Thermal Tops', 'Compression Sleeves', 'Lightweight Wraps'],
        }
      ]
    },
    {
      title: 'Shoes',
      subCategories: [
        {
          category: 'Casual Shoes',
          items: ['Sneakers', 'Slip-On Shoes', 'Loafers', 'Canvas Shoes'],
        },
        {
          category: 'Boots',
          items: ['Ankle Boots', 'Knee-High Boots', 'Chelsea Boots', 'Combat Boots'],
        },
        {
          category: 'Trendy Styles',
          items: ['Platform Sneakers', 'Chunky Boots', 'Vegan Leather Shoes'],
        },
        {
          category: 'Athletic Shoes',
          items: ['Running Shoes', 'Training Shoes', 'Trail Shoes', 'Basketball Shoes'],
        },
        {
          category: 'Specialty Footwear',
          items: ['Hiking Shoes', 'Work Boots', 'Dance Shoes', 'Slip-Resistant Shoes'],
        }
      ]
    },
    {
      title: 'Accessories',
      subCategories: [
        {
          category: 'Jewelry',
          items: ['Necklaces', 'Earrings', 'Bracelets', 'Rings'],
        },
        {
          category: 'Bags',
          items: ['Handbags', 'Tote Bags', 'Backpacks', 'Clutches'],
        },
        {
          category: 'Hats',
          items: ['Baseball Caps', 'Beanies'],
        },
        {
          category: 'Belts',
          items: ['Casual Belts', 'Dress Belts', 'Wide Belts'],
        },
        {
          category: 'Sunglasses',
          items: ['Sport Sunglasses', 'Cat-Eye Sunglasses'],
        },
        {
          category: 'Hair Accessories',
          items: ['Headbands', 'Hair Clips', 'Scrunchies', 'Barrettes'],
        }
      ]
    },
    {
      title: 'Sale',
      subCategories: [
        {
          category: 'Seasonal Sales',
          items: ['Spring Clearance', 'Summer Sale', 'Fall Discounts'],
        },
        {
          category: 'Special Promotions',
          items: ['New Arrivals: 15% Off', 'Holiday Specials', 'Buy More, Save More'],
        },
        {
          category: 'Limited Time Offers',
          items: ['Daily Deals', 'Weekend Flash Sales'],
        },
        {
          category: 'Bundle Offers',
          items: ['Mix and Match: Save 20%', 'Outfit Bundles: Discounted Prices'],
        }
      ]
    },
  ],
};

const MenuDropdown = ({ selectedCategory }) => {
  const currentMenuItems = menuItems[selectedCategory] || menuItems.default;

  return (
    <div className="menu">
      
      {currentMenuItems.map((item, index) => (
        
        <MenuItem key={index} title={item.title} subCategories={item.subCategories} />
      ))}
    </div>
  );
};

export default MenuDropdown;