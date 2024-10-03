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
//Letter Count Object: An object letterCount is used to store the frequency of each letter.
    for (const char of phrase)    //loop Through Characters: The function iterates through each character in the phrase.
        {
        const lowerChar = char.toLowerCase();     
        if (lowerChar >= 'a' && lowerChar <= 'z')   //Character Check: It checks if the character is a letter (between 'a' and 'z').
             {
            if (letterCount[lowerChar]) //Counting: If it is a letter, it increments its count in the letterCount object.
                 {
                letterCount[lowerChar]++;
            } else {
                letterCount[lowerChar] = 1;
            }
        }
    }

    return letterCount;   //Return Result: Finally, it returns the object containing the counts of each letter.


function texteAn (nombreMots: number, nombreCar: number, nombrePh: number) //pourrait-on faire un tableau, a t il du sens ?
{  
   