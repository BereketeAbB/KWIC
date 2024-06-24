import { CircularShifter } from "./circular-shift";

export class Alphabetizer {
    private circularShifter: CircularShifter;
    private sortedIndices: number[];

    constructor(circularShifter: CircularShifter) {
        this.circularShifter = circularShifter;
        this.sortedIndices = [];
    }

    ALPH(): void {
        const shifts = this.circularShifter.getAllShifts().map((shift, index) => ({
            shift: shift.join(' '),
            index
        }));
        shifts.sort((a, b) => a.shift.localeCompare(b.shift));
        this.sortedIndices = shifts.map(shift => shift.index);
    }

    ITH(i: number): number | null {
        if (i < this.sortedIndices.length) {
            return this.sortedIndices[i];
        }
        return null;
    }
}