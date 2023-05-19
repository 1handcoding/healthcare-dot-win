import { Provider } from "./provider";

export const PROVIDERS: Provider[] = [
    { id: 1, firstName: 'Stan', lastName: 'Katz', location: 'Dallas', zipCode: 72243, specialty: 'nephrology',
     isPrimary: true, numVisits: 2, visitFreq: 'annually' }, 
    { id: 2, firstName: 'Jennifer', lastName: 'Chou', zipCode: 72243, specialty: 'dermatology',
     isPrimary: false }
]