export const story = {
    "chapters": [
        {
            "chapter": 1,
            "image": "the_beginning.png",
            "title": "The Beginning",
            "story": [
                "You wake up to the sound of voices and the smell of fresh morning air. Blinking your eyes open, you see two humans standing in front of you. One is a woman with kind eyes and a warm smile, and the other is a man who looks just as excited. You sense that they are here for something special.",
                "[Wife]: Oh, look at this one! He's so adorable. I love his little legs and fluffy coat.",
                "[Husband]: Yeah, he’s perfect. What do you think, little guy? Would you like to come home with us?",
                "They crouch down to your level, and you can feel their warmth and kindness. Your tiny tail starts wagging uncontrollably. You let out a little bark of excitement. These humans seem nice, and you can't wait to explore a new world with them.",
                "[Wife]: I think he likes us. Look at that wagging tail! We're going to have so much fun together."
            ],
            "options": [
                {
                    "text": "Bite Them",
                    "requirements": [
                        {
                            "stat": "agility",
                            "value": 5
                        }
                    ],
                    "nextChapter": 2,
                    "stats": [
                        {
                            "stat": "intelligence",
                            "value": 5,
                            "reasoning": "Corgis are extremely smart. You could tell that this family was trouble and would have most likely put you into a dog fighting ring."
                        },
                        {
                            "stat": "happiness",
                            "value": -5,
                            "reasoning": "You lost the chance at a loving family and a warm home. Corgis are compasionate companions and you just lost that chance."
                        }
                    ]
                },
                {
                    "text": "Go Home With Them",
                    "nextChapter": 3,
                    "stats": [
                        {
                            "stat": "happiness",
                            "value": 5,
                            "reasoning": "Corgis are compasionate companions and you have found a home. Hopefully a loving one..."
                        }
                    ]
                }
            ]
        },
        {
            "chapter": 2,
            "image": "assets/images/bad_dog.jpg",
            "title": "Bad Dog",
            "story": [
                "You decide to bite the humans. You sink your sharp teeth into their hands, drawing blood and causing them to cry out in pain. They quickly pull away from you, looking shocked and hurt.",
                "[Husband]: What the hell? Why did he do that?",
                "[Wife]: I don't know. Maybe he's scared or something. But that was not okay.",
                "The humans look at you with a mix of fear and disappointment. You can sense that you've made a big mistake, and you feel a pang of guilt in your heart. Maybe biting them wasn't the best idea after all.",
                "The shelter staff, deciding you’re too much trouble, opens the gate and sends you out into the streets. The world outside is vast and unfamiliar. You wander through alleys and across busy streets, dodging cars and avoiding people. Hunger gnaws at your belly, and you’re unsure where to find food or shelter.",
                "As night falls, you find yourself in a dark alley. The shadows seem to move, and suddenly, you’re surrounded by a group of dogs. They eye you warily but don’t seem immediately hostile.",
                "[Leader Dog]: Well, well, what do we have here? A lost little pup?",
                "You stand your ground, trying not to show fear. The leader dog, a scruffy but strong-looking mutt, steps forward.",
                "[Leader Dog]: What’s your name, pup?",
                "You muster up some courage and respond, Coco.",
                "The other dogs murmur among themselves, but the leader raises a paw to silence them.",
                "[Leader Dog]: Alright, Coco. You’re in our territory now. If you want to stick around, you’ll have to prove yourself. We’re a pack, and everyone has to contribute. Are you up for the challenge?"
            ],
            "options": [
                {
                    "text": "Join the Pack",
                    "nextChapter": 4,
                    "stats": [
                        {
                            "stat": "happiness",
                            "value": -5,
                            "reasoning": "Corgis are compasionate companions and you have lost the chance at a loving family and a warm home."
                        }
                    ]
                },
                {
                    "text": "Run Away",
                    "nextChapter": 5,
                    "stats": [
                        {
                            "stat": "happiness",
                            "value": 5,
                            "reasoning": "Corgis are compasionate companions and you have found a home. Hopefully a loving one..."
                        }
                    ]
                }
            ]
        }
    ]
}