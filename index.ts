import{question} from 'readline-sync';

function main():void {
    const firstStr: string = question('Enter firt number:\n');
    const operator: string = question('Enter operator\n');
    const secondStr: string = question('Enter second number\n');

    console.log(firstStr, operator, secondStr)

    const firstNum = isnumber(firstStr)
    console.log(firstNum)
}

function isnumber(str: string):boolean {
    const maybeNum = parseInt(str); //33 NaN
    const isnum:boolean = !isNaN(maybeNum);
    return isnum;
}

main();