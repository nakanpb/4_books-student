export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  is_published: boolean;
  tailde: string;
  shortstory: string;
  group: string;
}

export interface Coffee{
  id: number;
  type: string;
  price: number;
}

export interface Order{
  id: number;
  coffee_id: number;
  user: string;
  count: number;
  other: string;
}