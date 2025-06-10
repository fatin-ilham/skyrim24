const questions = [
  {
    text: "You find a group of bandits harassing a traveler. What do you do?",
    choices: [
      {
        text: "Fight the bandits honorably to protect the innocent.",
        effects: { companions: 25 },
        response: "Your bravery is like the Companions."
      },
      {
        text: "Sneak away and avoid the conflict entirely.",
        effects: { thieves: 20 },
        response: "A cautious soul, valuing stealth and discretion."
      },
      {
        text: "Offer to help... but only for a price.",
        effects: { thieves: 15, darkBrotherhood: 10 },
        response: "You walk the gray line of morality."
      }
    ]
  },
  {
    text: "Magic is gaining influence. How do you feel about it?",
    choices: [
      {
        text: "Magic is the key to knowledge and power — embrace it.",
        effects: { college: 30 },
        response: "A true scholar at heart."
      },
      {
        text: "Magic is dangerous and should be controlled.",
        effects: { imperial: 20 },
        response: "You prefer order and control."
      },
      {
        text: "Magic is a tool — use it or shun it as you will.",
        effects: { companions: 10, darkBrotherhood: 15 },
        response: "Pragmatic and adaptable."
      }
    ]
  },
  {
    text: "A political uprising threatens the stability of Skyrim. You...",
    choices: [
      {
        text: "Support the Stormcloaks and fight for freedom.",
        effects: { stormcloaks: 30 },
        response: "You value freedom and rebellion."
      },
      {
        text: "Stand with the Imperial Legion to maintain order.",
        effects: { imperial: 30 },
        response: "Loyalty to law and empire guides you."
      },
      {
        text: "Stay in the shadows, waiting for the right moment.",
        effects: { darkBrotherhood: 25 },
        response: "A patient predator."
      }
    ]
  },
  {
    text: "You discover a wealthy noble is corrupt. What’s your move?",
    choices: [
      {
        text: "Expose them and fight for justice.",
        effects: { companions: 20, stormcloaks: 15 },
        response: "Champion of the people."
      },
      {
        text: "Blackmail them for personal gain.",
        effects: { thieves: 25, darkBrotherhood: 20 },
        response: "Master of secrets and shadows."
      },
      {
        text: "Ignore it; politics is not your concern.",
        effects: { neutral: 20 },
        response: "Detached but pragmatic."
      }
    ]
  },
  {
    text: "What motivates your adventuring spirit?",
    choices: [
      {
        text: "Honor and glory.",
        effects: { companions: 30 },
        response: "A warrior’s heart."
      },
      {
        text: "Wealth and power.",
        effects: { thieves: 30 },
        response: "Ambition fuels you."
      },
      {
        text: "Knowledge and mystery.",
        effects: { college: 30 },
        response: "Curiosity drives you."
      }
    ]
  }
];
