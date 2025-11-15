// Constants for Tattoo AI Generator App

export const TATTOO_STYLES = [
  { id: 'realistic', name: 'Realistic', image: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=400&h=400&fit=crop' },
  { id: 'fineline', name: 'Fine Line', image: 'https://images.unsplash.com/photo-1598371611682-e5a8f2a7e1b8?w=400&h=400&fit=crop' },
  { id: 'oldschool', name: 'Old School', image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=400&fit=crop' },
  { id: 'minimalist', name: 'Minimalist', image: 'https://images.unsplash.com/photo-1590246814883-57c511a8c4b4?w=400&h=400&fit=crop' },
  { id: 'tribal', name: 'Tribal', image: 'https://images.unsplash.com/photo-1598371611682-e5a8f2a7e1b8?w=400&h=400&fit=crop', isPro: true },
  { id: 'watercolor', name: 'Watercolor', image: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=400&h=400&fit=crop', isPro: true },
  { id: 'geometric', name: 'Geometric', image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=400&fit=crop' },
  { id: 'japanese', name: 'Japanese', image: 'https://images.unsplash.com/photo-1590246814883-57c511a8c4b4?w=400&h=400&fit=crop', isPro: true },
];

export const DESIGN_PALETTES = [
  { id: 'blackAndGray', label: 'B&W', value: 'blackAndGray' },
  { id: 'color', label: 'Color', value: 'color' },
];

export const DETAIL_LEVELS = [
  { id: 'low', label: 'Simple', value: 'low' },
  { id: 'medium', label: 'Detailed', value: 'medium' },
  { id: 'high', label: 'Complex', value: 'high', isPro: true },
];

export const LINE_TYPES = [
  { id: 'fine', label: 'Fine', value: 'fine' },
  { id: 'bold', label: 'Bold', value: 'bold' },
  { id: 'mixed', label: 'Mixed', value: 'mixed', isPro: true },
];

export const EDITOR_TOOLS = [
  { id: 'resize', name: 'Resize', icon: 'Maximize2', isPro: false },
  { id: 'rotate', name: 'Rotate', icon: 'RotateCw', isPro: false },
  { id: 'color', name: 'Color', icon: 'Palette', isPro: false },
  { id: 'texture', name: 'Texture', icon: 'Layers', isPro: true },
  { id: 'stencil', name: 'Stencil', icon: 'FileText', isPro: true },
  { id: 'shadow', name: 'Shadow', icon: 'Sun', isPro: true },
  { id: 'opacity', name: 'Opacity', icon: 'Droplet', isPro: false },
  { id: 'merge', name: 'Merge', icon: 'Combine', isPro: true },
];

export const SURPRISE_PROMPTS = [
  'japanese dragon with cherry blossoms and waves',
  'minimalist mountain landscape with geometric sun',
  'realistic wolf portrait with forest background',
  'fine line constellation map with stars',
  'old school anchor with roses and banner',
  'watercolor phoenix rising from flames',
  'tribal polynesian sleeve design',
  'geometric mandala with sacred geometry',
  'japanese koi fish swimming in lotus pond',
  'realistic lion face with crown',
];

export const MOCK_GENERATED_TATTOOS = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&h=600&fit=crop',
    prompt: 'japanese house with flames, dragons, smoky details',
    style: 'japanese',
    isPro: false,
    timestamp: new Date(),
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1598371611682-e5a8f2a7e1b8?w=600&h=600&fit=crop',
    prompt: 'japanese house with flames, dragons, smoky details',
    style: 'japanese',
    isPro: false,
    timestamp: new Date(),
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&h=600&fit=crop',
    prompt: 'japanese house with flames, dragons, smoky details',
    style: 'japanese',
    isPro: true,
    timestamp: new Date(),
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1590246814883-57c511a8c4b4?w=600&h=600&fit=crop',
    prompt: 'japanese house with flames, dragons, smoky details',
    style: 'japanese',
    isPro: true,
    timestamp: new Date(),
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&h=600&fit=crop',
    prompt: 'japanese house with flames, dragons, smoky details',
    style: 'japanese',
    isPro: false,
    timestamp: new Date(),
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1598371611682-e5a8f2a7e1b8?w=600&h=600&fit=crop',
    prompt: 'japanese house with flames, dragons, smoky details',
    style: 'japanese',
    isPro: true,
    timestamp: new Date(),
  },
];
