
import { writable } from "svelte/store";

interface Toast {
  level: "success" | "error" ;
  content: any;
  id: string;
  deltaDelay?: number;
}

export const toasts = writable<Toast[]>([]);

export const removeToast = (id: string) => {
  toasts.update(pv => pv.filter((item) => item.id !== id))
};

export const addToast = (
  level: Toast["level"],
  { content, deltaDelay = 0 }: Omit<Toast, "level" | "id">,
) => {
  toasts.update(pv => [...pv, { content, deltaDelay, level, id: String(Date.now() / Math.random()) }])
};