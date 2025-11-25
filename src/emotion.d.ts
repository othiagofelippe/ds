import { Theme as CustomTheme } from "@/tokens/themes";
import "@emotion/react";

declare module "@emotion/react" {
  export type Theme = CustomTheme;
}
