export interface ResourceLink {
  title: string;
  url: string;
}

export interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  content?: string;
  links?: ResourceLink[];
}