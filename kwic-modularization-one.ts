const fs = require('fs');

export class KWIC {
    shifts : string[]= [];
    dataLines: string[][] = [];

        
    input(input: string){
        const lines = input.split(/\n|\./);
        const filteredLines = lines.flatMap(line => {
            const words = line.split(' ');
            const result :string[][]= []; 
            let currentLine :string[]= [];

            // store 4 words in each line
            for (let i = 0; i < words.length; i++) {
                if (currentLine.length === 4) { 
                    result.push(currentLine);
                    currentLine = [];
                }
                currentLine.push(words[i]);
            }
            if (currentLine.length > 0) {
                result.push(currentLine);
            }
            return result;
        })
        
        this.dataLines.push(...filteredLines);
        this.circularShift();
    }

    circularShift() {
        for (let i = 0; i < this.dataLines.length; i++) {
            const line = this.dataLines[i];
            for (let j = 0; j < line.length; j++) {
                const shift = line.slice(j).concat(line.slice(0, j));
                const shiftString = shift.join(' ');
                if (!this.shifts.includes(shiftString)) {
                    this.shifts.push(shiftString);
                }
            }
        }
        this.alphabetize();
    }


    alphabetize(){
        this.shifts.sort();
    }

    output(){
        this.shifts.forEach(shift => console.log('\x1b[36m%s\x1b[0m', shift));
        console.log('\x1b[31m%s\x1b[0m', 'KWIC Output: ', this.shifts.length); // Console log in red color
    }

}
const kwicInstance = new KWIC()

const lines = fs.readFileSync('./data-lines.txt', 'utf-8');
lines.split('\n').forEach((line) => {
    kwicInstance.input(line)
});

kwicInstance.output()

