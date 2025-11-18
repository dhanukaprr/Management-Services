
export interface NewsArticle {
  id: number;
  title: string;
  content: string;
  date: string;
  districtId?: number; // Optional: If null/undefined, it's a general news item
  imageUrl: string;
}

export interface ApplicationForm {
  id: number;
  name: string;
  url: string; // A dummy URL to the form file
}

export interface District {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  forms: ApplicationForm[];
}
