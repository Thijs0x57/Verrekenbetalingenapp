import { KasboekItem } from "./kasboekItem";

export class Kasboek {
    constructor(
        public totaal: number,
        public items: KasboekItem[] = []
    ){}
}