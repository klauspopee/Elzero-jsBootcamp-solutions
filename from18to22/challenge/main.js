// Challenge One

let a = 10;
let b ="20";
let c = 80;

console.log (++a + +b++ + +c++ - +a++);//ONE
console.log (++a + -b + +c++ -a++ + +a);//TWO
console.log (--c + +b + --a * +b++ - +b * a + --a - +true);//THREE

/*
-----ONE-----
[++a] = 11 exp:postincr |  [+] add operator | [+b++] = 20 exp:unaryplus and postincer
| [+] add operator | [+c++] = 80 exp: unary plus(do nothing) and postincer | [-] mince operator
[+a++] = 11

-----TWO-----
[++a] = 13 exp preincer | [+] add operator | [-b] = -21 exp:unary negation | [+] 
[+c++] = 81 exp:unaryplus and postincr | [-a++] = -13 exp unarynegation and postincer |
[+] add operator | [+a]=14 unary plus do nothing just make him  positive

-----THREE-----
[--c] = 81 exp:preincr | [+] plus operator | [+b] = 21 exp unaryplus | [+] plus operator
[--a] =13 exp:predecrement | [*] Multiplication sign | [+b++] =21 exp:unaryplus and postincrement
[-] Minus sign | [+b] =22 exp unaryplus |[*] multiply sign | [a] =13 | [+] add operator 
[--a] =12 exp:predecrement | [-] minus operator | [+true] =1 exp:unarypl
 
*/