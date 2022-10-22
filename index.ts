const isFatching: boolean = true
const isLoading: boolean = false

const inf: number = 42
const float: number = 4.2
const num: number = 3e10
const message: string = "Hello Typescript"

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const world: string[] = ["Hello", "TypeScript"]


//Tuple
const contact: [string, number] = [ "Anastasiia", 122445]

//Any
let variable: any = 42 

//==========
function sayMyName(name: string): void {
  console.log(name);
} 
sayMyName('Хайзенберг')