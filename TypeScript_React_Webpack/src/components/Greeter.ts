
class Greeter {
    greeting: string;
    public constructor(message: string) {
        this.greeting = message;
    }
    public greet() {
        return "Hello, " + this.greeting;
    }
}

export { Greeter };
//let greeter = new Greeter("world");