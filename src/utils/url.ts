import { config } from "@/config";

export function solve(url: string){
    return config.basePath + url
}