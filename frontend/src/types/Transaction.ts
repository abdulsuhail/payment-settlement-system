export interface Transaction {
    id?: number;
    sender: string;
    recipient: string;
    amount: number;
    description: string;
    status: string;
    createdAt?: string;
  }