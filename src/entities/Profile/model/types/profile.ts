import { ECountry } from "@/entities/Country";
import { ECurrency } from "@/entities/Currency";

export interface IProfile {
  id?: string;
  first?: string;
  lastname?: string;
  age?: number;
  currency?: ECurrency;
  country?: ECountry;
  city?: string;
  username?: string;
  avatar?: string;
}
