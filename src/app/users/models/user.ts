import { Address } from "./address";
import { Phone } from "./phone";
import { Role } from "./role";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    name: string;
    phone: Phone;
    address: Address;
    created_at: string;
    updated_at: string;
    roles: Role[];
  }