import { isProduction } from "./utils/environment";

export const config = {
    basePath: isProduction ? '/ai-toolbox' : ''
}