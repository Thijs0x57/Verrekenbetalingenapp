import { Deelnemer } from "../models/deelnemer";
import { Kasboek } from "../models/kasboek";
import { KasboekItem } from "../models/kasboekItem";

export class VerrekenCalculator{
    constructor(){ }

    verreken(deelnemers: Deelnemer[]){

        let kasboekItem = new KasboekItem('Sam', 'Thijs', 10000);
        let kasboekItem2 = new KasboekItem('Je moeder', 'Thijs', 4.20);
        let items: KasboekItem[] = [];
        
        items.push(kasboekItem, kasboekItem2);

        let kasboek = new Kasboek(40, items);

        return kasboek;
    }
}