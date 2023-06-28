class Data {
    public method: string;
    public uri: string;
    public version: string;
    public message: string;
    public response: unknown;
    public fulfilled: boolean;

    constructor(method: string, uri: string, version: string, message: string) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

console.log(new Data('GET', 'http://google.com', 'HTTP/1.1', ''));