const userSentence = [{id: "1-am", text: "am"}];
const availableWords = [{id: "0-I", text: "I"}];
let firstWrongIndex = -1;
for (let i = 0; i < userSentence.length; i++) {
    if (!userSentence[i].id.startsWith(`${i}-`)) {
        firstWrongIndex = i;
        break;
    }
}
if (firstWrongIndex === -1) firstWrongIndex = userSentence.length;
const totalWords = userSentence.length + availableWords.length;
if (firstWrongIndex >= totalWords) process.exit(0);

const targetIdPrefix = `${firstWrongIndex}-`;
const allWords = [...userSentence, ...availableWords];
const nextWordObj = allWords.find(w => w.id.startsWith(targetIdPrefix));

console.log("firstWrongIndex", firstWrongIndex);
console.log("targetIdPrefix", targetIdPrefix);
console.log("nextWordObj", nextWordObj);

if (nextWordObj) {
    const newCorrectUserSentence = [...userSentence.slice(0, firstWrongIndex), nextWordObj];
    const newAvailableWords = allWords.filter(w => !newCorrectUserSentence.some(cw => cw.id === w.id));
    console.log("newCorrect", newCorrectUserSentence);
    console.log("newAvail", newAvailableWords);
}
