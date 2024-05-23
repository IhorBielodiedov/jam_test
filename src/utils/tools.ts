import { TFilter } from "./types";

export const filterIconHandler = (filter: TFilter) => {
  switch (filter) {
    case "donut":
      return "🍩";
    case "croissant":
      return "🥐";
    case "cake":
      return "🍰";
  }
};
