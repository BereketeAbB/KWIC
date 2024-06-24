import { Alphabetizer } from "./alphabetizer";
import { CircularShifter } from "./circular-shift";
import { InputModule } from "./input-module";
import { LineStorage } from "./line-storage";
import { OutputModule } from "./output";

const storage = new LineStorage();
const inputModule = new InputModule(storage);

inputModule.readLines()

const shifter = new CircularShifter(storage);
shifter.CSSETUP();

const alphabetizer = new Alphabetizer(shifter);
alphabetizer.ALPH();


const outputModule = new OutputModule(storage, shifter, alphabetizer);
outputModule.printAlphabetizedShifts()
// outputModule.printCircularShifts()
// outputModule.printLines()
