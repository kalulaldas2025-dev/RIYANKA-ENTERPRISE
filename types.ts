
export interface Product {
  id: string;
  name: string;
  category: 'Phone' | 'Accessory';
  description: string;
  price: string;
  image: string;
  tag?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
