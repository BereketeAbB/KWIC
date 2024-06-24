export class LineStorage {
    private lines: string[][];

    constructor() {
        this.lines = [];
    }

    CHAR(r: number, w: number, c: number): number | null {
        if (this.lines[r] && this.lines[r][w] && this.lines[r][w][c]) {
            return this.lines[r][w].charCodeAt(c);
        }
        return null;
    }

    SETCHAR(r: number, w: number, c: number, d: number): void {
        if (this.lines[r] && this.lines[r][w] && (c < this.lines[r][w].length)) {
            let wordArray = this.lines[r][w].split('');
            wordArray[c] = String.fromCharCode(d);
            this.lines[r][w] = wordArray.join('');
        } else {
            throw new Error("Invalid indices for SETCHAR");
        }
    }

    WORDS(r: number): number {
        if (this.lines[r]) {
            return this.lines[r].length;
        }
        return 0;
    }

    addLine(line: string): void {
        this.lines.push(line.split(' '));
    }

    getLine(r: number): string | null {
        if (this.lines[r]) {
            return this.lines[r].join(' ');
        }
        return null;
    }

    getAllLines(): string[][] {
        return this.lines;
    }
}