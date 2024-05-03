export interface IJob {
    id: number
    image: string;
    company: string;
    new: boolean;
    featured: boolean;
    position: string;
    postedAt: Date;
    contract: string;
    location: string;
    role: string;
    level: string;
    languages: Array<string>; 
}