import { LineStorage } from "./line-storage";

export class CircularShifter {
    private lineStorage: LineStorage;
    private circularShifts: string[][];

    constructor(lineStorage: LineStorage) {
        this.lineStorage = lineStorage;
        this.circularShifts = [];
    }

    CSSETUP(): void {
        const lines = this.lineStorage.getAllLines();
        this.circularShifts = [];

        for (const line of lines) {
            const words = [...line];
            for (let i = 0; i < words.length; i++) {
                const shift = [...words.slice(i), ...words.slice(0, i)];
                this.circularShifts.push(shift);
            }
        }
    }

    CSCHAR(l: number, w: number, c: number): number | null {
        if (this.circularShifts[l] && this.circularShifts[l][w] && this.circularShifts[l][w][c]) {
            return this.circularShifts[l][w].charCodeAt(c);
        }
        return null;
    }

    getNumShifts(): number {
        return this.circularShifts.length;
    }

    getShift(l: number): string | null {
        if (this.circularShifts[l]) {
            return this.circularShifts[l].join(' ');
        }
        return null;
    }

   getAllShifts(): string[][] {
        return this.circularShifts;
    }
}