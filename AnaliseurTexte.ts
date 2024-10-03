// Créer un programme qui analyse un texte donné et affiche des statistiques 
//(nombre de mots, de caractères, de phrases, etc.)

function wordCount(livre: string): number 
{ 
    return livre.split(" ").length;
     }
     wordCount ("Split the words, and return the second word");
const texte: number = wordCount ("Split the words, and return the second word");
console.log(texte)

//parameters: sentence (string type). Expected result: assoc array (string type) +index number
function manyletters (phrase: string): { [key: string]: number }  
{    const letterCount: { [key: string]: number } = {};

    for (const char of phrase) {
        const lowerChar = char.toLowerCase();
        if (lowerChar >= 'a' && lowerChar <= 'z') {
            if (letterCount[lowerChar]) {
                letterCount[lowerChar]++;
            } else {
                letterCount[lowerChar] = 1;
            }
        }
    }

    return letterCount;


function texteAn (nombreMots: number, nombreCar: number, nombrePh: number) //pourrait-on faire un tableau, a t il du sens ?
{  
   