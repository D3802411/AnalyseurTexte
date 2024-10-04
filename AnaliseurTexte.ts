// Créer un programme qui analyse un texte donné et affiche des statistiques 
//(nombre de mots, de caractères, de phrases, etc.) + Détecter les mots les plus u6lisés. + Afficher les résultats sous forme de résumé dans la console.

function wordCount(livre: string): number 
{ 
    return livre.split(" ").length;
     }
     wordCount ("A ne pas manquer aujourd'hui à Paris");
const texte: number = wordCount ("A ne pas manquer aujourd'hui à Paris");
console.log(texte)

//détecter la fréquence des mots
const wordFrequency: { [key: string]: number } = {};   //Count the occurrences of each word using a dictionary or map.
function sameWord (livre: string): { [key: string]: number }
{for (const mots of livre)       //pour chaque mot compter la fréquence, loop through mots
    { if (mots)   //Character Check
        {wordFrequency[mots] = (wordFrequency[mots] || 0) + 1;} }
   
   return wordFrequency
}
let motsPlusUtilises = sameWord("A ne pas manquer aujourd'hui à Paris")
console.log (motsPlusUtilises)

//parameters: sentence (string type). Expected result: number
//function to count letters in a phrase/string/... 
//vriable frequency must be set with an imprecised value

function manyletters (livre: string):  number
{   const frequency: Record<string, number> = {}   //variable for frequency, since frequency os not known. 
//Record<string, number> object type where the keys are of type string and the values are of type number.
//This means that frequency can have any number of properties
    livre.toLowerCase()
    for (const char of livre)    //loop Through Characters: The function iterates through each character in the phrase.
{   if (/[a-z]/.test(char))   //Character Check: It checks if the character is a letter (between 'a' and 'z').
         {frequency[char] = (frequency[char] || 0) + 1;} }
    
    return frequency
}
let lettersResult = manyletters ("A ne pas manquer aujourd'hui à Paris")
console.log(lettersResult) 
    

// Détecter les mots les plus utlisés
function sameWord (livre: string): string
//count words, i did it already with wordCount, i must use the variable texte already created + count each word frequency
{   const wordFrequency: Record<string, number> = {}   //variable for frequency, since frequency is not known. 
//wordfrequency can have any number of properties
        for (const mots of livre)    //loop Through Characters: The function iterates through each character in the phrase.
{   if (mot>=1)   //Character Check: It checks if the character is a letter (between 'a' and 'z').
         {frequency[mots] = (frequency[mots] || 0) + 1;} }
    
    return wordFrequency
}


