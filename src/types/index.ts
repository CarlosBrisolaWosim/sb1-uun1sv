export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

export interface ServicePlan {
  name: string;
  price: string;
  features: string[];
  recommended: boolean;
}

export interface Activity {
  id: string;
  type: string;
  client: string;
  date: string;
  status: 'pending' | 'scheduled' | 'completed';
}