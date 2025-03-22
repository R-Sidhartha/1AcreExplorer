//for theme
export interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
  toggleTheme: () => void;
}

//for carousel
export interface ImageObject {
  id: number;
  image: string;
  media_type: string;
}

//  Represents a property with details on pricing, land size, images, and location information.
interface PriceData {
  crore?: number;
  lakh?: number;
}

interface LandSize {
  acres?: number;
  guntas?: number;
}

interface DivisionInfo {
  name: string;
}

interface Property {
  land_price?: {
    price_per_acre_crore?: PriceData;
  };
  land_size?: {
    total_land_size_in_acres?: LandSize;
  };
  land_media?: ImageObject[];
  division_info?: DivisionInfo[];
}
