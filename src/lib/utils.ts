import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const DOWNLOAD_ANCHOR = "#download";
export const APP_STORE_URL = "https://apps.apple.com/app/id6760585108";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.masterbrain.groomupapp";
