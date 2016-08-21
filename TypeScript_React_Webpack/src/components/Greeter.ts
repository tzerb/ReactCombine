class Greeter {
    greeting: string;
    public constructor(message: string) {
        this.greeting = message;
        debugger;
    }
    public greet() {
        return "Hello, " + this.greeting;
    }
}

export { Greeter };
//let greeter = new Greeter("world");