import { Kasboek } from "./../models/kasboek";
import { Deelnemer } from "../models/deelnemer";
import { KasboekItem } from "../models/kasboekItem";

export class VerrekenCalculator {
  constructor() {}

  verreken(deelnemers: Deelnemer[]): Kasboek {
    const kasboek = new Kasboek();

    kasboek.totaal = deelnemers
      .map(item => item.inleg)
      .reduce((acc, val) => acc + val);
    console.log('kasboek totaal: ', kasboek.totaal);

    const dn: Deelnemer[] = deelnemers.filter(
      item => Math.abs(item.inleg * deelnemers.length - kasboek.totaal) >= 0.001
    );

    for (const idx of dn) {
      for (const idy of dn) {
        if (idx !== idy) {
          const betaling = idx.inleg / dn.length - idy.inleg / dn.length;
          if (betaling > 0) {
            const kasboekItem = new KasboekItem(idy.name, idx.name, parseFloat(betaling.toFixed(2)));
            kasboek.items.push(kasboekItem);
          }
        }
      }
    }

    return kasboek;
  }
}
