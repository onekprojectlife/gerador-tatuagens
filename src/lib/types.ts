// Types for Tattoo AI Generator App

export interface TattooStyle {
  id: string;
  name: string;
  image: string;
  isPro?: boolean;
}

export interface DesignChoice {
  id: string;
  label: string;
  value: string;
  icon?: string;
}

export interface GeneratedTattoo {
  id: string;
  image: string;
  prompt: string;
  style: string;
  isPro: boolean;
  timestamp: Date;
}

export interface UserGallery {
  id: string;
  name: string;
  tattoos: GeneratedTattoo[];
  createdAt: Date;
}

export interface FilterOptions {
  style: string;
  palette: 'blackAndGray' | 'color';
  detailLevel: 'low' | 'medium' | 'high';
  lineType: 'fine' | 'bold' | 'mixed';
}

export interface SkinPreview {
  id: string;
  tattooId: string;
  bodyPartImage: string;
  position: { x: number; y: number };
  scale: number;
  rotation: number;
  opacity: number;
}

export interface EditorTool {
  id: string;
  name: string;
  icon: string;
  isPro: boolean;
}
