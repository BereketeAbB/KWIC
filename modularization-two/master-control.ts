import { Alphabetizer } from "./alphabetizer";
import { CircularShifter } from "./circular-shift";
import { InputModule } from "./input-module";
import { LineStorage } from "./line-storage";
import { OutputModule } from "./output";

class MasterControl {
    private inputModule: InputModule;
    private circularShifter: CircularShifter;
    private alphabetizer: Alphabetizer;
    private outputModule: OutputModule;

    constructor(inputModule: InputModule, circularShifter: CircularShifter, alphabetizer: Alphabetizer, outputModule: OutputModule) {
        this.inputModule = inputModule;
        this.circularShifter = circularShifter;
        this.alphabetizer = alphabetizer;
        this.outputModule = outputModule;
    }

    // Function to run the whole process
    run(inputLines: string[]): void {
        try {
            this.inputModule.readLines();

            this.circularShifter.CSSETUP();

            this.alphabetizer.ALPH();

            console.log("Original Lines:");
            this.outputModule.printLines();
            console.log("\nCircular Shifts:");
            this.outputModule.printCircularShifts();
            console.log("\nAlphabetized Circular Shifts:");
            this.outputModule.printAlphabetizedShifts();
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }
}

const storage = new LineStorage();
const inputModule = new InputModule(storage);
const shifter = new CircularShifter(storage);
const alphabetizer = new Alphabetizer(shifter);
const outputModule = new OutputModule(storage, shifter, alphabetizer);
const masterControl = new MasterControl(inputModule, shifter, alphabetizer, outputModule);

// masterControl.run