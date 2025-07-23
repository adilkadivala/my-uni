import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function InputHandler(
  e: React.ChangeEvent<HTMLInputElement>,
  setState: any
) {
  const { name, value } = e.target;

  setState((prev: any) => ({
    ...prev,
    [name]: value,
  }));
}

// password visibility handler

export function handleVisibleToggle(setState: any) {
  setState((prev: any) => !prev);
}

