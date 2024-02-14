const choices = {
    1: {
      text: "Mi Amor, my celebration of love is not attached to today alone.\n\
      You know I love you now and always, to join today's celebration I'm taking you on an adventure. Where would you start from?",
      options: [
        { text: "Head out for a romantic picnic.", nextChoice: 3 },
        { text: "Plan a cozy movie night at home.", nextChoice: 4 },
      ],
    },
    2: {
      text: "Where would you like to go in the city?",
      input: true, // user needs to input the first clue
      nextChoice: 5,
    },
    3: {
      text: "We enjoy a delightful picnic under the sun. What would you most like to do next?",
      options: [
        { text: "Take a scenic stroll hand-in-hand.", nextChoice: 6 },
        { text: "Share a passionate kiss under the sunset.", nextChoice: 7 },
      ],
    },
    4: {
      text: "We cuddle up on the couch, watching your favorite movie together. What happens next?",
      options: [
        { text: "Fall asleep in each other's arms.", nextChoice: 8 },
        { text: "Live the movie and share sweet nothings.", nextChoice: 10 },
      ],
    },
    5: {
      text: "What would you like to do or be done to you there?",
      input: true, // user needs to input the surprise
      nextChoice: 7,
    },
    6: {
      text: "We walk through the park, sharing sweet conversations and laughter. How do you end the day?",
      options: [
        { text: "Whisper sweet nothings under the moonlight.", nextChoice: 10 },
        { text: "Go back into the house.", nextChoice: 4 },
      ],
    },
    7: {
      text: "The kiss leads to a night filled with love and passion. What do you do in the morning?",
      options: [
        { text: "Make a delicious breakfast together.", nextChoice: 9 },
        { text: "We share good memories afterwards.", nextChoice: 10 },
      ],
    },
    8: {
      text: "You wake up to a beautiful morning. What's the first thing you want?",
      options: [
        { text: "Breakfast in bed.", nextChoice: 9 },
        { text: "Plan a fun day out in the city.", nextChoice: 2 },
      ],
    },
    9: {
      text: "Few hours after feeding on my own food, we plan a fun day back home.",
    },
    10: {
      text: "We share sweet nothings to deepening our bond",
    },
};

// Function to display a choice section
function displayChoice(choiceNumber) {
  const currentChoice = choices[choiceNumber];
  const storyElement = document.getElementById("story");
  const choicesElement = document.getElementById("choices");

  storyElement.innerHTML = currentChoice.text;
  choicesElement.innerHTML = ""; // Clear previous choices

  if (currentChoice.options) {
    // Create list of options
    currentChoice.options.forEach((option) => {
      const choiceLink = document.createElement("a");
      choiceLink.textContent = option.text;
      choiceLink.href = "#";
      choiceLink.onclick = () => goToChoice(option.nextChoice);

      const choiceItem = document.createElement("li");
      choiceItem.appendChild(choiceLink);
      choicesElement.appendChild(choiceItem);
    });
  } else if (currentChoice.input) {
    // Create input field for user input
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "Enter your answer...";
    choicesElement.appendChild(inputField);

    // Add a button to submit the input
    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.onclick = () => {
      // Handle user input and proceed to the next choice
      const userInput = inputField.value;
      // (Add your logic to process user input here)
      goToChoice(currentChoice.nextChoice);
    };
    choicesElement.appendChild(submitButton);
  } else {
    // End of the story
    choicesElement.textContent = "The end of Valentine's adventure!";

    const storyBox = document.getElementById("story-ctn");
    const replayBtn = document.createElement("a");
    replayBtn.href = "/game.html";
    replayBtn.className = "love-btn";
    replayBtn.textContent = "Go again!";
    storyBox.appendChild(replayBtn);
  }

  choicesElement.style.display = "block";
}

// Function to navigate to a specific choice
function goToChoice(choiceNumber) {
  displayChoice(choiceNumber);
}

// Start the story with the initial choice
displayChoice(1);
