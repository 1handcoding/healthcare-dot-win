export interface Provider {
    id: number;
    firstName?: string;
    lastName: string;
    location?: string;
    zipCode: number;
    specialty?: string;
    isPrimary: boolean;
    numVisits?: number;
    visitFreq?: string;
    isInNetwork?: boolean;
}