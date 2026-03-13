export type Mood = 'happy' | 'confident' | 'relaxed' | 'party mood';
export type Occasion = 'college' | 'casual outing' | 'party' | 'traditional event';
export type Weather = 'sunny' | 'rainy' | 'cold' | 'hot';

export interface Outfit {
  top: string;
  bottom: string;
  footwear: string;
  accessories: string;
  tip: string;
  vibe: string;
  colors: string[];
  imageUrl: string;
}
