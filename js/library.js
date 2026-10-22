export let message = "es6 module";

export function user(name)
{
    console.log(`Hello ${name}`);
}

export class text
{
    constructor()
    {
        console.log("I am using module contructor calling");
    }
}