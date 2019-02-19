import { Deelnemer } from './deelnemer';
import { KasboekItem } from './kasboekItem';

export class Kasboek {
    constructor(
        public totaal: number = 0,
        public items: KasboekItem[] = []
    ) {}
}
