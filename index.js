/**Membuat kata "Javascript" menjadi terbakik dalam urutannya
Outputnya akan menjadi "tpircsavaJ" */

let kata = "Javascript";
let tampung = "";
for(let i = kata.length - 1; i >= 0; i--){
    tampung += kata[i]; 
}
console.log(tampung);