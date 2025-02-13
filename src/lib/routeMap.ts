import { RouteDefinition, RouteKey, ValidatedRoute } from "@/utils/types";

//NOTE: The en route is always required. The other routes are optional and must be removed if they are the same as the en route.

export function createRouteMap<T extends Record<RouteKey, RouteDefinition>>(map: {
  [K in keyof T]: ValidatedRoute<T[K] & RouteDefinition>;
}): T {
  return map as T;
}

export const routeMap = createRouteMap({
  home: {
    en: ""
  },
  hospitals: {
    en: "hospitals",
    "de-DE": "krankenhauser",
    "fr-BE": "krankenhausers"
  },
  nemt: {
    en: "nemt"
  },
  "contact-us": {
    en: "contact-us"
  }
} as const);
