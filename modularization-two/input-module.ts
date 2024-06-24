import { LineStorage } from "./line-storage";
import fs from 'fs';

export class InputModule {
    private lineStorage: LineStorage;

    constructor(lineStorage: LineStorage) {
        this.lineStorage = lineStorage;
    }

    readLines(): void {
        const input = fs.readFileSync('../data-lines.txt', 'utf8').split('\n');
        for (const line of input) {
            this.lineStorage.addLine(line);
        }
    }
}