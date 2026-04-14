type ClassValue = string | number | boolean | undefined | null | ClassValue[] | Record<string, unknown>;

export function cn(...inputs: ClassValue[]): string {
  let result = "";
  for (const input of inputs) {
    if (!input) continue;
    if (typeof input === "string") {
      result += (result ? " " : "") + input;
    } else if (typeof input === "number") {
      result += (result ? " " : "") + input;
    } else if (Array.isArray(input)) {
      const inner = cn(...input);
      if (inner) result += (result ? " " : "") + inner;
    } else if (typeof input === "object") {
      for (const [key, value] of Object.entries(input)) {
        if (value) result += (result ? " " : "") + key;
      }
    }
  }
  return result;
}
