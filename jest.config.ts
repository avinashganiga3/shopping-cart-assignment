import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  transformIgnorePatterns: ["/node_modules/(?!(swiper)/)"],
};
export default config;
