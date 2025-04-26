export interface IsWork {
  id: number;
  company: string;
  location: string;
  year: string;
  title: string;
  role: string;
  description: string;
  languages: string[];
  icons: string[];
  img?: string;
  link?: string;
}
export interface IsContact {
  id:number;
  name: string;
  icon:string;
  link: string;
  downloadable: boolean
}
