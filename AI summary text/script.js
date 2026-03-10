function generateNotes() {

let topic = document.getElementById("topic").value;

let notes = `
Study Notes on ${topic}

• Definition of ${topic}
• Key concepts of ${topic}
• Important examples of ${topic}
• Applications of ${topic}
`;

document.getElementById("result").innerText = notes;

}