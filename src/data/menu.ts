export interface MenuItem {
  id: string;
  name: string;
  price: string;
  tagline: string;
  image: string;
  description: string;
  dietary: ('V' | 'GF' | 'VGF')[];
  allergens: string;
  pairsWellWith: string;
  category: 'Mains' | 'Starters' | 'Desserts' | 'Cocktails';
}

export const menuItems: MenuItem[] = [
  {
    id: 'ember-ribeye',
    name: 'Ember-Roasted Ribeye',
    price: 'Rp 685k',
    tagline: 'smoked bone marrow · shallot jus',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1200&q=80',
    description:
      'A 45-day dry-aged ribeye seared over ironbark embers until the fat renders into a crisp, caramelised crust. Served with a quenelle of smoked bone marrow butter and a deep shallot jus reduced with Balinese palm sugar. Finished with charred shallot rings and a pinch of Maldon salt.',
    dietary: ['GF'],
    allergens: 'Contains no gluten. May contain traces of dairy from the marrow butter.',
    pairsWellWith: '2019 Penfolds Bin 28 Kalimna Shiraz — bold dark fruit stands up to the smoke.',
    category: 'Mains',
  },
  {
    id: 'coastal-catch',
    name: 'Coastal Catch',
    price: 'Rp 395k',
    tagline: 'fennel · citrus beure blanc',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80',
    description:
      'Day-boat line-caught snapper from the Lombok Strait, pan-seared to a crisp skin and rested on a bed of shaved fennel and blood orange. Finished with a citrus beurre blanc infused with kaffir lime and a scattering of dill flowers. A bright, clean plate that tastes of the sea.',
    dietary: ['GF'],
    allergens: 'Contains fish, dairy (butter), and citrus. No gluten.',
    pairsWellWith: 'Sancerre Blanc 2021 — flinty minerality and citrus zest echo the beurre blanc.',
    category: 'Mains',
  },
  {
    id: 'garden-fire',
    name: 'Garden on Fire',
    price: 'Rp 245k',
    tagline: 'heirloom vegetables · burnt leek',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
    description:
      'Heirloom carrots, beets, and baby turnips slow-roasted over smouldering vine cuttings until their sugars caramelise. Plated on a smear of burnt leek ash puree with a drizzle of aged balsamic and toasted hazelnuts. A celebration of what the garden offered this morning.',
    dietary: ['V', 'VGF'],
    allergens: 'Contains tree nuts (hazelnuts). Vegan and gluten-free.',
    pairsWellWith: 'Garden Highball — the cucumber and basil cut through the smoky sweetness.',
    category: 'Starters',
  },
  {
    id: 'truffle-flatbread',
    name: 'Truffle Flatbread',
    price: 'Rp 225k',
    tagline: 'wild mushroom · aged pecorino',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',
    description:
      'A thin, blistered sourdough flatbread topped with foraged oyster mushrooms sautéed in truffle oil, shaved aged pecorino, and wild arugula. Finished with a generous shaving of black winter truffle and a thread of cold-pressed olive oil.',
    dietary: ['V'],
    allergens: 'Contains gluten and dairy. May contain traces of nuts from the truffle oil.',
    pairsWellWith: 'Pinot Noir 2020 — earthy mushroom notes harmonise with the truffle.',
    category: 'Starters',
  },
  {
    id: 'cacao-sea-salt',
    name: 'Cacao & Sea Salt',
    price: 'Rp 165k',
    tagline: 'dark chocolate · malted cream',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',
    description:
      'Single-origin Madagascan dark chocolate (72%) tempered into a glossy ganache, layered with malted cream and a delicate cocoa sablé. Finished with flaked sea salt from Bali and a quenelle of smoked milk sorbet. Rich, bittersweet, and deeply satisfying.',
    dietary: ['V', 'VGF'],
    allergens: 'Contains dairy and gluten-free oats. No wheat gluten.',
    pairsWellWith: 'Portuguese Tawny Port — caramel and dried fruit notes complement the dark cacao.',
    category: 'Desserts',
  },
  {
    id: 'golden-hour',
    name: 'Golden Hour',
    price: 'Rp 185k',
    tagline: 'passion fruit · citrus · smoked honey',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85',
    description:
      'A chilled dessert of passion fruit curd set on a buttery shortbread base, crowned with citrus sorbet and a drizzle of smoked honey. Garnished with candied lime zest and edible gold leaf. Tropical, bright, and just sweet enough.',
    dietary: ['V', 'VGF'],
    allergens: 'Contains dairy and eggs. Gluten-free.',
    pairsWellWith: 'Muscat de Beaumes-de-Venise — floral sweetness mirrors the passion fruit.',
    category: 'Desserts',
  },
  {
    id: 'garden-highball',
    name: 'Garden Highball',
    price: 'Rp 95k',
    tagline: 'cucumber · basil · sparkling lime',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=85',
    description:
      'A garden-forward non-alcoholic highball: muddled cucumber and Thai basil shaken with fresh lime, topped with artisanal tonic and a sprig of basil. Crisp, herbaceous, and endlessly refreshing — a palate cleanser between courses or a standalone aperitif.',
    dietary: ['V', 'VGF'],
    allergens: 'No major allergens. Non-alcoholic.',
    pairsWellWith: 'Garden on Fire — the herbal freshness echoes the roasted vegetables.',
    category: 'Cocktails',
  },
];
