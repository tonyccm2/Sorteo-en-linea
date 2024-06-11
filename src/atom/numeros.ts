
import { atomWithStorage } from "jotai/utils";
const savedValue = localStorage.getItem('tabNumeros');
export const numerosAtom = atomWithStorage<boolean>('tabNumeros', savedValue !== null ? JSON.parse(savedValue) : true)