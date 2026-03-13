import { Mood, Occasion, Weather, Outfit } from './types';

export const MOODS: { value: Mood; label: string; emoji: string }[] = [
  { value: 'happy', label: 'Happy', emoji: '😊' },
  { value: 'confident', label: 'Confident', emoji: '😎' },
  { value: 'relaxed', label: 'Relaxed', emoji: '🧘' },
  { value: 'party mood', label: 'Party Mood', emoji: '🥳' },
];

export const OCCASIONS: { value: Occasion; label: string; emoji: string }[] = [
  { value: 'college', label: 'College', emoji: '🎓' },
  { value: 'casual outing', label: 'Casual Outing', emoji: '🚶' },
  { value: 'party', label: 'Party', emoji: '🎉' },
  { value: 'traditional event', label: 'Traditional Event', emoji: '🏮' },
];

export const WEATHERS: { value: Weather; label: string; emoji: string }[] = [
  { value: 'sunny', label: 'Sunny', emoji: '☀️' },
  { value: 'rainy', label: 'Rainy', emoji: '🌧️' },
  { value: 'cold', label: 'Cold', emoji: '❄️' },
  { value: 'hot', label: 'Hot', emoji: '🔥' },
];

export const FASHION_TIPS = [
  "Confidence is the best accessory you can wear.",
  "When in doubt, wear red.",
  "Invest in basics; they never go out of style.",
  "Fashion is what you buy, style is what you do with it.",
  "Accessories can make or break an outfit.",
  "Always dress like you're going to see your worst enemy.",
  "Comfort is key, but style is the lock.",
];

// A simple logic-based outfit generator or a lookup table
export const getOutfitSuggestion = (mood: Mood, occasion: Occasion, weather: Weather): Outfit => {
  if (occasion === 'traditional event') {
    return {
      top: 'Embroidered Kurta or Silk Shirt',
      bottom: 'Chinos or Dhoti Pants',
      footwear: 'Juttis or Leather Sandals',
      accessories: 'Traditional Watch & Pocket Square',
      tip: 'Traditional wear looks best with well-groomed hair and a smile.',
      vibe: 'Heritage Elegance',
      colors: ['#8B4513', '#FFD700', '#F5F5DC'],
      imageUrl: 'https://images.unsplash.com/photo-1597935214944-15844421be2c?auto=format&fit=crop&q=80&w=800'
    };
  }

  if (occasion === 'party') {
    const isCold = weather === 'cold';
    return {
      top: isCold ? 'Velvet Blazer or Leather Jacket' : 'Sequin Top or Crisp Button-down',
      bottom: 'Slim-fit Trousers or Leather Skirt',
      footwear: 'Heels or Polished Boots',
      accessories: 'Statement Necklace or Bold Watch',
      tip: 'Parties are for standing out! Don\'t be afraid of a little shimmer.',
      vibe: 'Midnight Glamour',
      colors: ['#000000', '#C0C0C0', '#4B0082'],
      imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800'
    };
  }

  if (weather === 'rainy') {
    return {
      top: 'Water-resistant Windbreaker or Trench Coat',
      bottom: 'Quick-dry Joggers or Cropped Jeans',
      footwear: 'Waterproof Boots or Sneakers',
      accessories: 'Stylish Umbrella & Waterproof Watch',
      tip: 'Darker colors hide splashes better on rainy days.',
      vibe: 'Urban Storm-Chaser',
      colors: ['#2F4F4F', '#708090', '#000080'],
      imageUrl: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&q=80&w=800'
    };
  }

  if (weather === 'hot') {
    return {
      top: 'Linen Shirt or Cotton Tank',
      bottom: 'Breathable Shorts or Flowy Skirt',
      footwear: 'Open-toe Sandals or Espadrilles',
      accessories: 'Sunglasses & Straw Hat',
      tip: 'Light colors and natural fabrics like linen are your best friends in the heat.',
      vibe: 'Tropical Breeze',
      colors: ['#FFFFFF', '#87CEEB', '#F0E68C'],
      imageUrl: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800'
    };
  }

  if (weather === 'cold') {
    return {
      top: 'Oversized Sweater or Wool Coat',
      bottom: 'Thermal Leggings or Heavy Denim',
      footwear: 'Insulated Boots',
      accessories: 'Beanie & Scarf',
      tip: 'Layering is not just functional; it\'s a style statement.',
      vibe: 'Cozy Minimalist',
      colors: ['#D2B48C', '#F5F5F5', '#808080'],
      imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800'
    };
  }

  // Default / Sunny / Casual
  return {
    top: mood === 'happy' ? 'Bright Graphic Tee' : 'Classic White Polo',
    bottom: 'Comfortable Jeans or Chinos',
    footwear: 'Clean White Sneakers',
    accessories: 'Minimalist Watch & Cap',
    tip: 'Light colors look great in sunny weather and boost your mood!',
    vibe: 'Sun-Kissed Casual',
    colors: ['#FF6347', '#4682B4', '#FFFFFF'],
    imageUrl: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&q=80&w=800'
  };
};
