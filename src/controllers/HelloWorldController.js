class HelloWorldController {
    async helloWorld(req, res) {
        res.send("Hello World!");
    }
}

export default new HelloWorldController();