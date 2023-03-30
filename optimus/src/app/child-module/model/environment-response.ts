export class Environment {
    id!: number;
    name!: string;
    publicUrl!: string;
    uuid!: string;
    isValid!: boolean;
}

export class Response {
    errors!: Error[];
    warnings!: Warning[];
}

export class Error {
    constructor(
        public errorCode:string,
        public errorContext:string
    ) {}
}

export class Warning {
    constructor(
        public warningCode:string,
        public warningContext:string
    ) {}
}

export class EnvironmentResponse extends Response {
    environments!: Environment[];
}