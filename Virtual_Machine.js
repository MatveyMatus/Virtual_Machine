let fs = require('fs');
let ip = 0, counter = 0;
let ram = new Array();
let arg = process.argv;

let progText = fs.readFileSync(arg[2]).toString();

ram =  progText.split(/\s+/);
let readline = require('readline-sync');
let longProg = ram.length;

while (ip < longProg){
	switch (ram[ip]){
		case 'input':
			ram[ram[ip+1]] = parseInt(readline.question());
			ip += 2;
			break;
		case 'add':
			ram[ram[ip + 3]] = ram[ram[ip + 1]] + ram[ram[ip + 2]];
			ip += 4;
			break;
		case 'Del':
			if (ram[ram[ip + 2]] != 0){
				ram[ram[ip + 3]] = ram[ram[ip + 1]] / ram[ram[ip + 2]];
				ip += 4;
			}else{
				console.log('неправильный ввод даных')
				ip = longProg+1;
				break;
			}
			break;
		case 'mult':
			ram[ram[ip + 3]] = ram[ram[ip + 1]] * ram[ram[ip + 2]];
			ip += 4;
			break;
		case 'sub':
			ram[ram[ip + 3]] = ram[ram[ip + 1]] - ram[ram[ip + 2]];
			ip += 4;
			break;
		case 'print':
			console.log(ram[ram[ip + 1]]);
			ip += 2;
			break;
		case 'resDel':
			ram[ram[ip + 3]] = ram[ram[ip + 1]] % ram[ram[ip + 2]];
			ip += 4;
			break;
		case 'ifint':
			if (ram[ram[ip+1]] === ram[ram[ip+2]]){
				ip += 7;
			}
			else{
				ip += 13;
			}
			break;
		case 'exit':
			console.log(ram[ram[ip+1]]);
			console.log('выполнен выход из программы');
			ip = longProg+1;
			break;
		case 'ifleft>':
			if(ram[ram[ip+1]] > ram[ram[ip+2]]){
				ip += 3;
			}
			else{
				ram[ram[ip+2]] = [ram[ram[ip+1]], ram[ram[ip+1]] = ram[ram[ip+2]]][0];
				ip += 11;
			}
			break;
		case 'ifright>':
			if(ram[ram[ip+1]] < ram[ram[ip+2]]){
				ip += 3;
			}
			else{
				ip += 11;
			}
			break;
		case 'return':
			for (let cont = 0; cont < longProg; ++cont){
				if (ram[cont] == ">")
					ip = cont;
			}
			break;
		case '++':
			ram[ram[ip+1]] = ram[ram[ip+1]] + 1;
			ip += 2;
			break;
		case '>':
			ip += 1;
			break;
		case '%':
			ip += 1;
			break;
		default:
			console.log('ERROR');
			ip += 1;
	}
}