import { Alphabetizer } from "./alphabetizer";
import { CircularShifter } from "./circular-shift";
import { LineStorage } from "./line-storage";

export class OutputModule {
    private lineStorage: LineStorage;
    private circularShifter: CircularShifter;
    private alphabetizer: Alphabetizer;

    constructor(lineStorage: LineStorage, circularShifter: CircularShifter, alphabetizer: Alphabetizer) {
        this.lineStorage = lineStorage;
        this.circularShifter = circularShifter;
        this.alphabetizer = alphabetizer;
    }

    printLines(): string[] {
        const lines = this.lineStorage.getAllLines();
        return lines.map((line, index) => {
            console.log(`Line ${index}: ${line.join(' ')}`)
            return `Line ${index}: ${line.join(' ')}`
        });
    }

    printCircularShifts(): string[] {
        const shifts = this.circularShifter.getAllShifts();
        return shifts.map((shift, index) => {
            console.log(`Shift ${index}: ${shift.join(' ')}`);
            return (`Shift ${index}: ${shift.join(' ')}`);
        });
    }

    printAlphabetizedShifts(): void {
        const numShifts = this.circularShifter.getNumShifts();
        for (let i = 0; i < numShifts; i++) {
            const shiftIndex = this.alphabetizer.ITH(i);
            if (shiftIndex !== null) {
                const ind = this.circularShifter.getShift(shiftIndex)
                console.log(ind);
            }
        }
    }
}