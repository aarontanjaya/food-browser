import twMerge from './tw-merge.util';
import clsx, { type ClassValue } from 'clsx';

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
