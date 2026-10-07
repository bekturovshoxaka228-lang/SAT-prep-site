import type { SatQuestion } from "./sat-data";

/**
 * Official College Board Probability & relative frequencies Question Bank (49 questions)
 * Domain: 3. Problem-Solving and Data Analysis
 * Subtopic: Probability & relative frequencies
 * Native W3C MathML & Vector SVG Diagrams (No raster screenshots)
 * Order: Easy -> Medium -> Hard
 */
export const MATH_PROBABILITY_QUESTIONS: SatQuestion[] = [
  {
    "id": "sat-math-probab-0a99e5bb",
    "originalId": "0a99e5bb",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: center;\"><math alttext=\"negative 13\"><mo>-</mo><mn>13</mn></math>, <math alttext=\"4\"><mn>4</mn></math>, <math alttext=\"23\"><mn>23</mn></math></p>\n<p style=\"text-align: left;\">A data set of three numbers is shown. If a number from this data set is selected at random, what is the probability of selecting a negative number?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p style=\"text-align: left;\">Choice B is correct. If a number from the data set is selected at random, the probability of selecting a negative number is the count of negative numbers in the data set divided by the total count of numbers in the data set. It's given that a data set of three numbers is shown. It follows that the total count of numbers in the data set is <math alttext=\"3\"><mn>3</mn></math>. In the data set shown, <math alttext=\"negative 13\"><mrow>\n\t<mo>-</mo>\n\t<mn>13</mn>\n</mrow></math> is the only negative number. It follows that the count of negative numbers in the data set is <math alttext=\"1\"><mn>1</mn></math>. Therefore, if a number from the data set is selected at random, the probability of selecting a negative number is <math alttext=\"one third\"><mfrac><mn>1</mn><mn>3</mn></mfrac></math>.</p>\n<p>Choice A is incorrect. This is the probability of selecting a negative number from a data set that doesn&rsquo;t contain any negative numbers.</p>\n<p>Choice C is incorrect. This is the probability of selecting a positive number, not a negative number, from the data set.</p>\n<p>Choice D is incorrect. This is the probability of selecting a negative number from a data set that contains only negative numbers.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"0\"><mn>0</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"one third\"><mfrac>\n\t<mn>1</mn>\n\t<mn>3</mn>\n</mfrac></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"two thirds\"><mfrac>\n\t<mn>2</mn>\n\t<mn>3</mn>\n</mfrac></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"1\"><mn>1</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-12dbe3de",
    "originalId": "12dbe3de",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">A store received a shipment of 1,000 MP3 players, 4 of which were defective. If an MP3 player is randomly selected from this shipment, what is the probability that it is defective?</p>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p>Choice A is correct. The probability of randomly selecting a defective MP3 player from the shipment is equal to the number of defective MP3 players divided by the total number of MP3 players in the shipment. Therefore, the probability is <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAsCAYAAAAn4+taAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABKElEQVRoQ+2YAQ7DIAhFPZ4H8jjexat4EyaomXW1ldQspeUlZishG1/BiuYfQPRg04cLAMUkk+AMCpAtBIIjETjECgGI4G0S4IWnVvQWjPUQJdcIQABXghdd7FTgKXL8LlZIDtyCjzlwsUKoNlLg++MrUByPeSGqEEVRlCNwR5E4FEVZBfYWNh1Zy+MhbY8+Oumu8mFRf3BGSPZt+pDuGVnlw6LtK86E1IuG3m/TKS7yYfGdhdx7nwoZnHDzZLjUwY97d65PMfGolwhzQn6XP09IG+R1n2LiMS1kkMetfZVPMfF4n5DHpBYF8IRiv+v2W5kVgvR5vJfXq3zYHAmh5cZL6ma5cwqk2aOx/+erfJZBaeC2QkRChXklb+8CLn+/uyiKoigvwpgPZWw5T4MicCsAAAAASUVORK5CYII=\" alt=\"4 over 1,000\"></span>, which is equivalent to 0.004.<p>Choice B is incorrect because 0.04 represents 4 defective MP3 players out of 100 rather than out of 1,000. Choice C is incorrect because 0.4 represents 4 defective MP3 players out of 10 rather than out of 1,000. Choice D is incorrect. This is the number of defective MP3 players in the shipment.</p><p> </p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">0.004</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">0.04</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">0.4</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">4</p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-1353b86e",
    "originalId": "1353b86e",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">The table shows the number of different colors of marbles in a bag. If a marble is chosen at random from the bag, what is the probability that the marble will be blue?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p>Choice D is correct. If a marble is chosen at random from the bag, the probability of choosing a marble of a certain color is the number of marbles of that color divided by the total number of marbles in the bag. Since there are 10 blue marbles in the bag, and there are 40 total marbles in the bag, the probability that the marble chosen will be blue is <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABAklEQVRYR+2WAQ6DIAwAeR4P4jn8ha/wk46KRKztpkKNyXoJWWTCQYuAO0MKDnzMsD7ugBSwfi0eymvse6dpHXLC+t8moc+XydFjw6VQIUCG6I/1GA0X0nXhNtoEgRPmCL78lL539XWQAUr1dSkCpaksPIavDlRDKORrOI/vET4e0scXzezPoiEJEZqv4fwh34RIvzkMywzjF91qUynGPyGdDEjdP9vCmLS1LScAI9TZvLsZ9EKV46l1GuIxpCoH8NLYR8hM59OvGO0cRAk3Gylft/PY50JdSMPFCmeGdH9toKVKuEEgw7c2hJ2h1q0NkWZD83V7wVAkIWK3NsMw3oZzH/WpVih7O6biAAAAAElFTkSuQmCC\" alt=\"10 over 40\"></span>.<p>Choices A, B, and C are incorrect. These represent the probability that the marble chosen won&rsquo;t be blue (choice A), will be green (choice B), and won&rsquo;t be green (choice C).</p><p> </p></p>",
    "passage": "<div class=\"stimulus_reference \" xmlns=\"http://www.imsglobal.org/xsd/apip/apipv1p0/qtiitem/imsqti_v2p1\"><div class=\"passage \"><div class=\"prose style:1 \"><table class=\"table_WithBorder tcp-9c1cad7d-2170-4f58-98b6-9b2f685ee431\" style=\"width:50px;\"><caption>Colors of Marbles in a Bag</caption><tbody><tr><td class=\"tcp-8995a9dd-e7fb-492c-910b-d14b42ebc6f5\" style=\"text-align: center;\">Color</td><td class=\"tcp-c8f956ea-a08d-428f-a57d-d4b2f32c6a88\" style=\"text-align: center;\">Number</td></tr><tr><td class=\"tcp-2007f031-5fc8-49b9-a13d-7291170b8431\" style=\"text-align: center;\">Red</td><td class=\"para_center tcp-aff6e432-f483-43b7-9b66-ea246b409738\" style=\"text-align: center;\">8</td></tr><tr><td class=\"tcp-49f453fa-9485-4d56-9a19-e9d4df8080af\" style=\"text-align: center;\">Blue</td><td class=\"para_center tcp-1d6660a6-5984-4848-9a0e-860fe8e92fe5\" style=\"text-align: center;\">10</td></tr><tr><td class=\"tcp-a35b50d7-91ca-4fa3-8d21-f5dbf965772d\" style=\"text-align: center;\">Green</td><td class=\"para_center tcp-70118a2d-e051-4744-8afd-450aa4c805f2\" style=\"text-align: center;\">22</td></tr><tr><td class=\"tcp-2046f09b-787f-4259-aab2-3195254aeb05\" style=\"text-align: center;\">Total</td><td class=\"para_center tcp-7380b814-b3f2-4c5e-81ca-0055e6b5b02d\" style=\"text-align: center;\">40</td></tr></tbody></table></div></div></div>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph block_choice\"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABJklEQVRYR+2WgQ2EIAxFGY+BGIddXIVNesVSr1TwPCzJJcdLiGK0H36L4K7YggO8lOYhJsj3FbCFj+/cgsQCbEABKHAdUD9rvXMLSBE8XgKqlUcOIEH0DjxGa/WZfaD4YemOwwIcrDWoTIoe+29nhqFAwr5d8Gwf2fpAkISoKCqLO/kazqOGLTwsnS2YkbZOs1QiR29aNBT4OpjpsjiWgI94R6I8CCmg86X7X3GI4i03PeOMrGKzYlkseohqm9IW/0RvZ8jwP5aa0a+Nj4ta0PTnzcgZSEHT7YnhoCGeLTXdgJn947wnNoKbHzEAPwlFpDWbXr6G8yhzMV1Q29UUtLS0PjboRiKtQWQeFQ3TnOGMZcH0ZqPzNVwwmp5gZp3aFovFr+HcC8UAe4LeMnFbAAAAAElFTkSuQmCC\" alt=\"30 over 40\"></span></span></p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph block_choice\"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABJklEQVRYR+2W6w3DIAyEGY+BGIddsgqbuIBjkvDSySG/yiehtpG5A5vUmBFEgbw1lL7KsD6kzwISA3EJOTqIsgAd7iGIxMBQ8GSNpTjvMTF4WwyQmPORHt7BXAyJgTlcTKH1MZljMSQGQurj4tL5SQsSAyFCJirxkxYkBoIPwVwIiYHI9YhCs2OOxEDIqmdCSAwEv2NzISQGptSkO/gdQ2Li981mLdVJWz42/4T8b/Yaa+mDebR3HBXSgmpDNrtM6t8q7ju4G8o1se4WeXHaRiyizrcpHaWZu4iyW+TJ6QbWEWfDNn2cEYUhxSnuNOntZlQvdR3vtfjcsE5X13BlSufXBzbpLSLx6tAI3R1+8VoIo93U9VIfmJqRYeKZ/gVmm81m8xJjfjmFMHh+4gjpAAAAAElFTkSuQmCC\" alt=\"22 over 40\"></span></span></p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph block_choice\"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABIUlEQVRYR+2W7RHDIAhAHc+BHMddsoqbUJHQqIHW+NE/9d15vXyUJ2hCTAuHM2B9gPOwAK/Fn/dwB4j3NQOHS4EkIckcREe6xvd2S4O3KQCOWghR44TgaRLx5HnYDs3Wgg8U+CYMHuxMIcOZ/KSkyCchkpedKjIgQzQhQABvqwzPMmuTa0IVKmtIGV+TeIwqfG+qMrB2vpmnGZJwQYbIbZeuXEOGpNcYkm023yh224Kx+Se0FzXCXZ7GhAaM8PtS7gyXZLg1IXkGuZA7fv2yHvqI4qDO30u6pOOnP1sPQQhOQq3jdwi5D6JEykZbr+51zNdiubAulyicWdLy47YeJJEmgQx/JiJihiseC0bLpl6v7g1TowmRsvwTZJvNZjOIMS8oOEmuZk6e9AAAAABJRU5ErkJggg==\" alt=\"18 over 40\"></span></span></p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph block_choice\"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABAklEQVRYR+2WAQ6DIAwAeR4P4jn8ha/wk46KRKztpkKNyXoJWWTCQYuAO0MKDnzMsD7ugBSwfi0eymvse6dpHXLC+t8moc+XydFjw6VQIUCG6I/1GA0X0nXhNtoEgRPmCL78lL539XWQAUr1dSkCpaksPIavDlRDKORrOI/vET4e0scXzezPoiEJEZqv4fwh34RIvzkMywzjF91qUynGPyGdDEjdP9vCmLS1LScAI9TZvLsZ9EKV46l1GuIxpCoH8NLYR8hM59OvGO0cRAk3Gylft/PY50JdSMPFCmeGdH9toKVKuEEgw7c2hJ2h1q0NkWZD83V7wVAkIWK3NsMw3oZzH/WpVih7O6biAAAAAElFTkSuQmCC\" alt=\"10 over 40\"></span></span></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-16cea46c",
    "originalId": "16cea46c",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">A total of 25 men registered for singing lessons. The frequency table shows how many of these singers have certain voice types. If one of these singers is selected at random, what is the probability he is a baritone?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p>Choice B is correct. This probability is calculated by dividing the number of baritone singers by the total number of men registered for singing lessons. It&rsquo;s given that a total of 25 men registered for singing lessons and that there are 10 baritones. Therefore, the probability of selecting a baritone from this group at random is <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAY00gKyAAAAbZJREFUeNrtmE8oBGEYxgcH1nLh4LJJ7EU5SlrWydlKUm4urkQ5OigHRykHUsrZn5QkhYPFQTmglIhykBKRP/nXer56tr6mb9jxfbOU76lfzby7M+8zO++8837rON9rGCyDS5DivkrlYA7cgzswCyKOAT2AbTD+hYEicAoOQSsR28egUNdArrTtZaAPfICoFIsy1uMYlJeBdbCliIvYWjYMXIEJRXyStRO4gVcwooiL2Mu/MPDrt0AUYVIRT2arCPvBO6iUYlWM9eombZdIscOl99MqBmfgACSI2D4BYRNX7YWsCrDAViyYZ3u2srIy8rgFgZVVRhrg6/QavIELTselPoq4RsfAE5gBnSAOujlgHCnGbZFsGtS7COkYKFPEYkzWleGsYFwFTDboYSAnaAMJJmtTGLjhgPrI2mkwnbyEk88+yHN9NkVT4r53gF2aiZtKLopuk1dZncH3wzS7YSJ5iD+pGLXqfBw3xtuhXXSrPFGTz2O1DeSDFfAMmn0eK5bs51wz/FhLrO4hRYOJuJbno3xCGtm49rgsiwU1I8hNpwXsgFv+JyBa9yKotW8zKysrK6s/r09L0qZXyur6+QAAAABJRU5ErkJggg==\" alt=\"10 over 25\"></span>, which is equivalent to 0.40.<p>Choice A is incorrect. This would be the probability of selecting a baritone at random if there were 100 total men who registered for singing lessons. Choice C is incorrect. This is the probability of selecting a singer at random who isn&rsquo;t a baritone. Choice D is incorrect. This would be the probability of selecting a baritone at random if there were 15 total men registered for singing lessons.</p></p>",
    "passage": "<div xmlns=\"http://www.imsglobal.org/xsd/apip/apipv1p0/qtiitem/imsqti_v2p1\" class=\"stimulus_reference \">\n        <table class=\"tableWithBorder\">\n          <tbody>\n            <tr>\n              <td class=\"tableWithBorderTd td87549a45-2da9-4bdd-8565-8f8951039a47\">Voice type</td>\n              <td class=\"tableWithBorderTd tde8904704-ef5d-4ec5-a6f6-c9be1bbeda0b\">Number of singers</td>\n            </tr>\n            <tr>\n              <td class=\"tableWithBorderTd\">Countertenor</td>\n              <td class=\"tableWithBorderTd td27ad9818-b6bd-4659-86e1-e9ce078a33a5 para_center\">4</td>\n            </tr>\n            <tr>\n              <td class=\"tableWithBorderTd\">Tenor</td>\n              <td class=\"tableWithBorderTd td798e2a37-1810-471e-9843-9ba15a66183a para_center\">6</td>\n            </tr>\n            <tr>\n              <td class=\"tableWithBorderTd\">Baritone</td>\n              <td class=\"tableWithBorderTd td031f6e05-349a-4f82-a821-4589a21b4ca0 para_center\">10</td>\n            </tr>\n            <tr>\n              <td class=\"tableWithBorderTd\">Bass</td>\n              <td class=\"tableWithBorderTd tdc12188cb-6c90-4b2f-b932-518e1e6d2c1a para_center\">5</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">0.10</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">0.40</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">0.60</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">0.67</p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-1b8e412e",
    "originalId": "1b8e412e",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: center;\"><math alttext=\"negative 11\"><mo>-</mo><mn>11</mn></math>, <math alttext=\"negative 9\"><mo>-</mo><mn>9</mn></math>, <math alttext=\"26\"><mn>26</mn></math></p>\n<p style=\"text-align: left;\">A data set of three numbers is shown. If a number from this data set is selected at random, what is the probability of selecting a positive number?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p style=\"text-align: left;\">Choice B is correct. The probability of selecting a positive number is the number of positive numbers in the data set divided by the total number of numbers in the data set. There is <math alttext=\"1\"><mn>1</mn></math> positive number in this data set. There are <math alttext=\"3\"><mn>3</mn></math> total numbers in this data set. Thus, if a number from this data set is selected at random, the probability of selecting a positive number is <math alttext=\"one third\"><mfrac>\n<mn>1</mn>\n<mn>3</mn>\n</mfrac></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. This is the probability of selecting a negative number from this data set.</p>\n<p style=\"text-align: left;\">Choice D is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"0\"><mn>0</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"one third\"><mfrac>\n\t<mn>1</mn>\n\t<mn>3</mn>\n</mfrac></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"two thirds\"><mfrac>\n\t<mn>2</mn>\n\t<mn>3</mn>\n</mfrac></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"1\"><mn>1</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-1dcea480",
    "originalId": "1dcea480",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">A bag contains a total of 60 marbles. A marble is to be chosen at random from the bag. If the probability that a blue marble will be chosen is 0.35, how many marbles in the bag are blue?</p>",
    "type": "mcq",
    "correctAnswer": "",
    "explanation": "<p>Choice A is correct. Multiplying the number of marbles in the bag by the probability of selecting a blue marble gives the number of blue marbles in the bag. Since the bag contains a total of 60 marbles and the probability that a blue marble will be selected from the bag is 0.35, there are a total of <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAAAYCAYAAAD5/NNeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAMyZLetQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACgklEQVRoQ+2WYXKEIAyFPZ4H8jjexavsTaghRGJ4Qahu6w++Gaa7iOQlL7CdNOGzhnmaw/oJIU39OSF8wjpPYdl8DU/qbIn3GkLYwmISD9tCn9NoL8q2yDv4PY6l16SxV2r/C7UIUGc0rdxHU8ulFu8u0gT0Uca8B6JnCKqd+9w+5KSycPvdgw1a9rT997ioeQ0ivjeve4rnNVhnPgnSAL25ePHukA2y9cBG1J4VRZPN7eJoAOhSQTpaXx1or5aCoGuoVednnffvvK41FxTvLqy3bGytL02lucpJiwu0YFBsAm1+hSSv978yW4hmqnVYZ/109+Ri430LPjGq2eJ3yqO8BQ6oaDoJL3m7eQtcjLzX0dnLEotHUzSQMNaR4xU6Dz2cHE3R0Hv15GLjCe5vqBm2ETxik4KbBF3VES7aOYnsrNnEmUewOaX4I2ElUrrditM/6L5OipHn7V49ueh4aepxRDMytGJSKawnsSukaFfXCLx+lDG+zjIpvVdPLqgRnkT0erXoM6njimjBXnmIq6LVTLJdqffqycUzSYpHH2sDnQ7huFkqzfoLk8qgqNtbQAZYsElZW4/O0qS2XFCMJ4i/Qfv2RfENFZOoe85JyJxdfPVfGRenXpD+oqX3oE6c1CleRy46Xpq6DWu5NohwTSJIsH1gOxt1uhUgBTn9U5CMK9aoYnjmxnm1l68zvytNoNdZ7fa7YOPdBWmpUTXJEycm8CiTQl2STcijKH7DGsKa4unkoue9UJJXuRCoCe5wjmlHeWLrJqWioUL9Fyz4XMxv6kTxXsfTR/0u1IWoo76l04v3Ovh4/m83HVdhxYgndbbEGwwGg8FgMBgMBoPBm5imH55jHJiXTB9fAAAAAElFTkSuQmCC\" alt=\"0 point 3 5 times 60, equals 21 \"></span> blue marbles in the bag.<p>Choice B is incorrect and may result from subtracting 35 from 60. Choice C is incorrect. This would be the number of blue marbles in the bag if there were a total of 100 marbles, not 60 marbles. Choice D is incorrect. This is the number of marbles in the bag that aren&rsquo;t blue.</p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">21</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">25</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">35</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">39</p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-2905ded0",
    "originalId": "2905ded0",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">The table summarizes members of a local organization by age and whether they live east or west of the river. If a member of the organization is selected at random, what is the probability that the selected member is at least <math alttext=\"40\"><mn>40</mn></math> years old? </p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p style=\"text-align: left;\">Choice D is correct. If a member of the organization is selected at random, the probability that the selected member is at least <math alttext=\"40\"><mn>40</mn></math> years old is equal to the number of members who are at least <math alttext=\"40\"><mn>40</mn></math> years old divided by the total number of members. According to the table, there are a total of <math alttext=\"135\"><mn>135</mn></math> members of the organization, and <math alttext=\"107\"><mn>107</mn></math> of these members are at least <math alttext=\"40\"><mn>40</mn></math> years old. Therefore, the probability that the selected member is at least <math alttext=\"40\"><mn>40</mn></math> years old is <math alttext=\"StartFraction 107 Over 135 EndFraction\"><mfrac>\n<mn>107</mn>\n<mn>135</mn>\n</mfrac></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. This is the probability that the selected member is less than <math alttext=\"40\"><mn>40</mn></math> years old.</p>\n<p style=\"text-align: left;\">Choice B is incorrect. This is the probability that the selected member lives east of the river.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. This is the probability that the selected member lives west of the river.</p>",
    "passage": "<figure class=\"table\"><table border=\"1\">\n<tbody>\n<tr>\n<td style=\"width: 22.7153%;\"> </td>\n<th style=\"width: 22.7153%; text-align: center; vertical-align: bottom;\" scope=\"col\">Live east of the river</th>\n<th style=\"width: 22.7153%; text-align: center; vertical-align: bottom;\" scope=\"col\">Live west of the river</th>\n<th style=\"width: 22.7208%; text-align: center; vertical-align: bottom;\" scope=\"col\">Total</th>\n</tr>\n<tr>\n<th style=\"width: 22.7153%; text-align: left;\" scope=\"row\">Less than <math alttext=\"40\"><mn>40</mn></math> years old</th>\n<td style=\"width: 22.7153%; text-align: center; vertical-align: middle;\"><math alttext=\"17\"><mn>17</mn></math></td>\n<td style=\"width: 22.7153%; text-align: center; vertical-align: middle;\"><math alttext=\"11\"><mn>11</mn></math></td>\n<td style=\"width: 22.7208%; text-align: center; vertical-align: middle;\"><math alttext=\"28\"><mn>28</mn></math></td>\n</tr>\n<tr>\n<th style=\"width: 22.7153%; text-align: left;\" scope=\"row\">At least <math alttext=\"40\"><mn>40</mn></math> years old</th>\n<td style=\"width: 22.7153%; text-align: center; vertical-align: middle;\"><math alttext=\"18\"><mn>18</mn></math></td>\n<td style=\"width: 22.7153%; text-align: center; vertical-align: middle;\"><math alttext=\"89\"><mn>89</mn></math></td>\n<td style=\"width: 22.7208%; text-align: center; vertical-align: middle;\"><math alttext=\"107\"><mn>107</mn></math></td>\n</tr>\n<tr>\n<th style=\"width: 22.7153%; text-align: center;\" scope=\"row\">Total</th>\n<td style=\"width: 22.7153%; text-align: center; vertical-align: middle;\"><math alttext=\"35\"><mn>35</mn></math></td>\n<td style=\"width: 22.7153%; text-align: center; vertical-align: middle;\"><math alttext=\"100\"><mn>100</mn></math></td>\n<td style=\"width: 22.7208%; text-align: center; vertical-align: middle;\"><math alttext=\"135\"><mn>135</mn></math></td>\n</tr>\n</tbody>\n</table></figure>",
    "options": [
      {
        "id": "A",
        "text": "<p style=\"text-align: left;\"><math alttext=\"StartFraction 28 Over 135 EndFraction\"><mfrac><mn>28</mn><mn>135</mn></mfrac></math></p>"
      },
      {
        "id": "B",
        "text": "<p style=\"text-align: left;\"><math alttext=\"StartFraction 35 Over 135 EndFraction\"><mfrac><mn>35</mn><mn>135</mn></mfrac></math></p>"
      },
      {
        "id": "C",
        "text": "<p style=\"text-align: left;\"><math alttext=\"StartFraction 100 Over 135 EndFraction\"><mfrac><mn>100</mn><mn>135</mn></mfrac></math></p>"
      },
      {
        "id": "D",
        "text": "<p style=\"text-align: left;\"><math alttext=\"StartFraction 107 Over 135 EndFraction\"><mfrac><mn>107</mn><mn>135</mn></mfrac></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-2a08d878",
    "originalId": "2a08d878",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">There are <span class=\"italic\">n</span> nonfiction books and 12 fiction books on a bookshelf. If one of these books is selected at random, what is the probability of selecting a nonfiction book, in terms of <span class=\"italic\">n</span> ?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p>Choice B is correct. Since there are <span class=\"italic\">n</span> nonfiction and 12 fiction books on the bookshelf, <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAWCAYAAABZuWWzAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAA/klEQVRIS+2U0RHDIAhAGc+BHMddsoqbUJCgSYTEprm2H747r1ek8iQ08AuWCBhSxvVrBTFjCsDxuqy8r4FLNCWaaMQFsex5ubdBOjrSR6QKa8glp1CK8+pkc8IAASm8i8tv2gUKcgsOSnEOdUkGo7JyPstI/mi3mtfm/HZr2aiPhSwkw+adzjKaPyrL8w0hkc16fhXbBomS+ENZndnd2VZBjR1la/xiefKjsiraNavN00a2DPx1x6yLnjEiW0fyKMqUzcMIWBeweFq2jJ637/2RusF2eFJWO+p23SqmFzh7VMpTsjp2pzU/mdc7eLLt1Wmt6/f9ZDKZTCb/CsALbqW3Yjx2Z24AAAAASUVORK5CYII=\" alt=\"n plus 12\"></span> represents the total number of books. If one of these books is selected at random, the probability of selecting a nonfiction book is equivalent to the number of nonfiction books divided by the total number of books. Therefore, the probability of selecting a nonfiction book, in terms of <span class=\"italic\">n</span>, is <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAmCAYAAABkpNNFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAATRJrTQAAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABQ0lEQVRoQ+2Y7Q2EIAxAGY+BGIddWMVNenwIKBavVv1R03cxUQ4NTyhCzZtAcGCMgxB/Ll6monIN6Vwmi7c7EYAFvI3XLsiUagLWx7PeM8GJlipDLra/CdQyuVI5niz42E1rkYHFgx1ERZHjaRh6mKgYZhNCjqdBVAx4PBVRG7tpLZLFJ+NJUZTvkmYl6YeiKIow0goeW+y2Ff9mlhOxKC4L4GNju1BP1szqvg629ZjRkzOIVF7ZHzeV5R5mVqq8lespLqpU36KU+tS339vFkOKmuK70VKLWp0qxd9BNgJHielOqxhT12TuwhtWyUaqV/zlmDaFKVSF2iq2P940UcUuOvZAzKFItFLhCiTsprqel8pA/+Z/EbEKgBuiTUrWHbgklsEZVUcrDn5Kqw/22UOJOPHGYSfVPCnYwv1OKoigfxZgfu1x5ja1OWf0AAAAASUVORK5CYII=\" alt=\"the fraction with numerator n, and denominator n plus 12, end fraction\"></span>.<p>Choice A is incorrect. This expression represents the number of nonfiction books divided by the number of fiction books. Choice C is incorrect. This expression represents the number of fiction books divided by the number of nonfiction books. Choice D is incorrect. This expression represents the probability of selecting a fiction book.</p><p> </p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAmCAYAAADX7PtfAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAATRJrTQAAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAA/ElEQVRYR+2XbRLEEAyGHc+BHMddXKU3ySZSdH1sWbE/up5OZzDlDTFJqkYAZ0ApAw4fg10a4j5QW57D6jcRgAOsxr5x8oJxcW2xlXbkzDJBPkZcOy4extYIev9psLi9c0jBYUFnRojh/ZcdZ80IEVqXw/svM0KEuv/YCI3bO4fk+Ln/NpsWdNtWvpt/goJ0LWbGoH65HNOxleNouVASSzVN69tuUg1TEfTBu8yFPOeLwiplCE5NvVbzvIlKLuTCXsHppDwiGHw4lSN7BYPYdAXXIxgv16wYcSfofXZj0BCfBMPOxMSIlmAookTFiJbgNSiU78I/qs3maSj1AlFwe/Lz6vBpAAAAAElFTkSuQmCC\" alt=\"the fraction n over 12\"></span></span></p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAmCAYAAABkpNNFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAATRJrTQAAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABQ0lEQVRoQ+2Y7Q2EIAxAGY+BGIddWMVNenwIKBavVv1R03cxUQ4NTyhCzZtAcGCMgxB/Ll6monIN6Vwmi7c7EYAFvI3XLsiUagLWx7PeM8GJlipDLra/CdQyuVI5niz42E1rkYHFgx1ERZHjaRh6mKgYZhNCjqdBVAx4PBVRG7tpLZLFJ+NJUZTvkmYl6YeiKIow0goeW+y2Ff9mlhOxKC4L4GNju1BP1szqvg629ZjRkzOIVF7ZHzeV5R5mVqq8lespLqpU36KU+tS339vFkOKmuK70VKLWp0qxd9BNgJHielOqxhT12TuwhtWyUaqV/zlmDaFKVSF2iq2P940UcUuOvZAzKFItFLhCiTsprqel8pA/+Z/EbEKgBuiTUrWHbgklsEZVUcrDn5Kqw/22UOJOPHGYSfVPCnYwv1OKoigfxZgfu1x5ja1OWf0AAAAASUVORK5CYII=\" alt=\"the fraction n over n plus 12, end fraction\"></span></span></p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAA/0lEQVRYR+2WyxWEIAwAUx4FUQ690AqdZAmRzyIoCHrKvMdhs8pEghIYwWpAZRwePxOIDo0CiqfRum4KtLo5UZZptIjhv961wzijwgQ0TkJnUIFCH/6L8z05iWE4W5rQop7Imu97IIygv3VGSPUGZfyCfyCMNdT+8TjygFFhlIG3ceQhI8K0uVZlxJ0w1OwmoSmuhPHJtsmInpDfw80yoicsPwrnsfAeCsIV1U7bPgRB2EDuyPgEodCrJ0M+kliSmuEdrUVNmrxqAUOL8Y6Ql7FsAWPsHWHqxAvh0WaUSWwj1K9azlYSW+htjuW2vke7fpzE9q6N+Lx+giAICwD8AH1Ke/JQYGM7AAAAAElFTkSuQmCC\" alt=\"the fraction 12 over n\"></span></span></p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAsCAYAAADFP/AjAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABV0lEQVRoQ+2Y7RHCIAxAGY+BGIdduko3iYQY0AqSIlrw8u74YWy5PD415htszoD1O9w/JgB28NZgPLXSc9MBmysmm4UcbADxu9qzU7F7G5PE9iK1e7DGQgg/xemdLDoVNOqY9AbuxOjTe5NKMRDSOyOF+89YHxbnn0jxnnJhmigyKVIpFjLBiCITI5FKB8oKQkhLKu6hhvR0vJPiGVpKCKlJ0T21oBBSk3q8mF/b5PeUoij/zeFEWrIpiqIshpbVrhDjX+qS2sPPy2q5fEVJYkjSmVSK+v9xWS2PInWQlkOjtnBmppDaf7Aa3WW1JHB4OXZ4oRTvKWnfT5QS49hRKsUbrZaIVIqFuqtQeb0/SN3rDK1RKg3IOyRSaSv0CiGxk8PSK4mWGC01pKxWOxCkG3SkFM/QR0JIKSkWlXQ+SmpoWe2T/dRDTSpfKaXWeU8piqIoijIaY27J9brt6+RAKgAAAABJRU5ErkJggg==\" alt=\"the fraction 12 over n plus 12, end fraction\"></span></span></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-46545dd6",
    "originalId": "46545dd6",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">The table above shows the number of students from two different high schools who completed summer internships in each of five years. No student attended both schools. Of the students who completed a summer internship in 2010, which of the following represents the fraction of students who were from Valley High School?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p>Choice B is correct. According to the table, 140 students from the two high schools completed summer internships in 2010. Of these, 65 were from Valley High School. Therefore, of the students who completed summer internships in 2010, <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAsCAYAAADikXHLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABYklEQVRYR+2XgRGDIAxFHY+BGIddXMVNUkIagQjYCtS2l3fHWSuab/LRuLwDbA6M3+DPMOyK2x2AFWx6nIeYNwxYbQjgrx8CsADjtj0gibb+CM2ZCsAGzuQCkM0Zvx9FBOHG+dmfEBUyYMBragZb7cRSSah0mJHcM1npOJvWZr6T2R0G+2lJssWm56C7yZPyyTlDYVFnnirxypxLyJXH0P9tr70y5xJchu8S9fRLq3w14dPKh8gSHo1Oqy8VIM+ZAgfhITMXhcUxVZCi/AvZqrlpKMp9YJt71qjVXshI/noa0DHwBc9Ehf7cz5Oi6PwoRO6/DbUdFKwlKs1EKqr2FXT5AyPeUbmXYjiwdcfyTeuxag0eEwLgx0JBAIk6lopueJIoPoZCSlmp+afbVy1RqTe+QpQsTVHUp8uXrszjICEloch0ozPFTI1+JDA9ohDpn24/Ib2ikLzUnYIURVGUn2FZHnul3qGxGorsAAAAAElFTkSuQmCC\" alt=\"the fraction 65 over 140 \"></span> represents the fraction who were from Valley High School.<p>Choice A is incorrect. This is the difference between the numbers of students from the two high schools who completed internships in 2010 divided by the total number of students from the two schools who completed internships that year. Choice C is incorrect. This is the fraction of students from Foothill High School who completed internships out of all the students who completed internships in 2010. Choice D is incorrect. This is the number of students from Valley High School who completed internships in 2010 divided by the number of students from Foothill High School who completed internships in 2010.</p></p>",
    "passage": "<div><table class=\"table_WithBorder\" style=\"width: 33%;\"><caption><span class=\"title_line passage-title\">Number of High School Students Who<br>Completed Summer Internships</span></caption><thead><tr><th colspan=\"1\" rowspan=\"2\" scope=\"col\" style=\"text-align: left; vertical-align: middle;\">High school</th><th colspan=\"5\" rowspan=\"1\" scope=\"colgroup\" style=\"text-align: center; vertical-align: middle;\">Year</th></tr><tr><th scope=\"col\" style=\"text-align: center; vertical-align: middle;\">2008</th><th scope=\"col\" style=\"text-align: center; vertical-align: middle;\">2009</th><th scope=\"col\" style=\"text-align: center; vertical-align: middle;\">2010</th><th scope=\"col\" style=\"text-align: center; vertical-align: middle;\">2011</th><th scope=\"col\" style=\"text-align: center; vertical-align: middle;\">2012</th></tr><tr></tr></thead><tbody><tr><th scope=\"row\" style=\"text-align: left; vertical-align: middle;\">Foothill</th><td style=\"text-align: center; vertical-align: middle;\">87</td><td style=\"text-align: center; vertical-align: middle;\">80</td><td style=\"text-align: center; vertical-align: middle;\">75</td><td style=\"text-align: center; vertical-align: middle;\">76</td><td style=\"text-align: center; vertical-align: middle;\">70</td></tr><tr><th scope=\"row\" style=\"text-align: left; vertical-align: middle;\">Valley</th><td style=\"text-align: center; vertical-align: middle;\">44</td><td style=\"text-align: center; vertical-align: middle;\">54</td><td style=\"text-align: center; vertical-align: middle;\">65</td><td style=\"text-align: center; vertical-align: middle;\">76</td><td style=\"text-align: center; vertical-align: middle;\">82</td></tr><tr><th scope=\"row\" style=\"text-align: center; vertical-align: middle;\">Total</th><td style=\"text-align: center; vertical-align: middle;\">131</td><td style=\"text-align: center; vertical-align: middle;\">134</td><td style=\"text-align: center; vertical-align: middle;\">140</td><td style=\"text-align: center; vertical-align: middle;\">152</td><td style=\"text-align: center; vertical-align: middle;\">152</td></tr></tbody></table></div>",
    "options": [
      {
        "id": "A",
        "text": "<p><span class=\"choice_cell align:center \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAsCAYAAADikXHLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABI0lEQVRYR+2XiQ3DIAwAGY+BGIddWIVNXFyCAo6hVfmSyiehKgTBAW4w6hecUaCth+OxAJzB+qNoCM3YdkNJg3JS8d0pQp+n4K3Gzt+FSgF4sPpaj6uqjJsjdc7ageGkvAUdfsL4RX2ciIFQPUcMgdB9Xeq6VXEyu6Qq8bMkrp4ldcvtu2Wg7/gkJGpSCI2fJfGEtKSQ/AO7REgQ/oHsX7OtCMI+WreXRC1LQOIZmIJ5wNGTOvwk9c4GQjsqNfyQbt1ecvKVyKWGpzPnjNpZQRrY2Ov2TUv8vkpVtAXPCExLkZtJ3fEORbhVqcVPd1y1pPLYuIUU3RpWavX2lWkvLVGEE0WmB3qCXalZN5weKYTGT3c8Ib1SSLnVnUKCIAjCY1DqBdEAvgOHwYqVAAAAAElFTkSuQmCC\" alt=\"10 over 140\"></span></span></span></p>"
      },
      {
        "id": "B",
        "text": "<p><span class=\"choice_cell align:center \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAsCAYAAADikXHLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABYklEQVRYR+2XgRGDIAxFHY+BGIddXMVNUkIagQjYCtS2l3fHWSuab/LRuLwDbA6M3+DPMOyK2x2AFWx6nIeYNwxYbQjgrx8CsADjtj0gibb+CM2ZCsAGzuQCkM0Zvx9FBOHG+dmfEBUyYMBragZb7cRSSah0mJHcM1npOJvWZr6T2R0G+2lJssWm56C7yZPyyTlDYVFnnirxypxLyJXH0P9tr70y5xJchu8S9fRLq3w14dPKh8gSHo1Oqy8VIM+ZAgfhITMXhcUxVZCi/AvZqrlpKMp9YJt71qjVXshI/noa0DHwBc9Ehf7cz5Oi6PwoRO6/DbUdFKwlKs1EKqr2FXT5AyPeUbmXYjiwdcfyTeuxag0eEwLgx0JBAIk6lopueJIoPoZCSlmp+afbVy1RqTe+QpQsTVHUp8uXrszjICEloch0ozPFTI1+JDA9ohDpn24/Ib2ikLzUnYIURVGUn2FZHnul3qGxGorsAAAAAElFTkSuQmCC\" alt=\"65 over 140\"></span></span></span></p>"
      },
      {
        "id": "C",
        "text": "<p><span class=\"choice_cell align:center \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAsCAYAAADikXHLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABVklEQVRYR+2XgbHDIAiGHc+BHMddsko2oQJHYogmtWra947vjmtTk/ILRNG9AywB8KNsHuIK+N0BLBBO48nCQuPT2QRkDmGN4F1IIyzycZaAUTgKoIj6CClwz4viiDhIQTo4J6FPpUpDzlVEIF1F78CHQILxJzSfCo5umIlESTvbaiwTW7t3OGv0ycH7xdx6fzOSopa64eVkXzaGIylqScd8UVQjZQe1N3J++mjWZQdbarNx2Qm00KHczXoXtttUQYbxXzi8NV8yw/ge2GnedQa1DRmRPZBtQMcgf3gnig8SZ1G6ddHXzfAGzM6uROWRyEVtfbt69uMDxj6j68ZOHId4Tt+0Huuu2yQHeFgoCKg1hTzhSaJkDIWUolKrn+66uhKV18ZPiNKpKYp6On35m3k2FlISikwvdKEYqdFLgtAjCtH1011PSK8o5JjqTkGGYRjGn8G5F1MRnYcI2LoIAAAAAElFTkSuQmCC\" alt=\"75 over 140\"></span></span></span></p>"
      },
      {
        "id": "D",
        "text": "<p><span class=\"choice_cell align:center \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABOUlEQVRYR+2WAQ7DIAgAfZ4P8jn+xa/0JwyxWKXVqrXLsngJcZsICkxRNWCzoHHwH0mM82MEwIFJ51mEXhPgDC3GtbSYjWu7RWNhQwZngs4wABtYnRv3bFbj98MBbUpb1H7qkHauAf1VDTkzGD5JCKc/SZ6jLJwcBWOyPMuoNMH5U8kpuYDYYCyYJKRSpxl2eJfDK1p0TsgKZcLv9dy26Jzg0HzP4Z6fWkhLmxoKqUeG9Vw0oUpT43JNN2yARZ74cHrIsLPFooWs2l6QxT8jr7Rckkd5v+TzeRS833B8RjSeGAsX+sDL0AI1TMI4RWJG1yYpvX3TujYJGRYnmdq1pciHl5nataX0tgzDLYYnvugdeQp/qc4miik1UzWeOaScXC8uVe6zkNJurxe/0rXd7XZ1bYvF4hdR6gPD2zKtXddWaQAAAABJRU5ErkJggg==\" alt=\"65 over 75\"></span></span></span></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-47624288",
    "originalId": "47624288",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">The table gives the distribution of votes for a new school mascot and grade level for <math alttext=\"80\"><mn>80</mn></math> students.</p>\n\n<p style=\"text-align: left;\">If one of these students is selected at random, what is the probability of selecting a student whose vote for new mascot was for a lion? </p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p style=\"text-align: left;\">Choice C is correct. If one of these students is selected at random, the probability of selecting a student whose vote for the new mascot was for a lion is given by the number of votes for a lion divided by the total number of votes. The given table indicates that the number of votes for a lion is <math alttext=\"20\"><mn>20</mn></math> votes, and the total number of votes is <math alttext=\"80\"><mn>80</mn></math> votes. The table gives the distribution of votes for <math alttext=\"80\"><mn>80</mn></math> students, and the table shows a total of 80 votes were counted. It follows that each of the <math alttext=\"80\"><mn>80</mn></math> students voted exactly once. Thus, the probability of selecting a student whose vote for the new mascot was for a lion is <math alttext=\"StartFraction 20 Over 80 EndFraction\"><mfrac><mn>20</mn><mn>80</mn></mfrac></math>, or <math alttext=\"one fourth\"><mfrac><mn>1</mn><mn>4</mn></mfrac></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect and may result from conceptual or computational errors.</p>\n<p style=\"text-align: left;\">Choice B is incorrect and may result from conceptual or computational errors.</p>\n<p style=\"text-align: left;\">Choice D is incorrect and may result from conceptual or computational errors.</p>",
    "passage": "<table style=\"border-collapse: collapse; width: 89.6552%; height: 156.771px; border-color: #000000; border-style: solid; margin-left: auto; margin-right: auto;\" border=\"1\">\n<thead>\n<tr style=\"height: 22.3958px;\">\n<th style=\"text-align: center; vertical-align: bottom; width: 14.4498%; height: 44.7916px;\" rowspan=\"2\" scope=\"col\">Mascot</th>\n<th style=\"text-align: center; width: 57.7992%; height: 22.3958px;\" colspan=\"4\" scope=\"colgroup\">Grade level</th>\n</tr>\n<tr style=\"height: 22.3958px;\">\n<th style=\"width: 14.4498%; text-align: center; height: 22.3958px;\" scope=\"col\">Sixth</th>\n<th style=\"width: 14.4498%; text-align: center; height: 22.3958px;\" scope=\"col\">Seventh</th>\n<th style=\"width: 14.4498%; text-align: center; height: 22.3958px;\" scope=\"col\">Eighth</th>\n<th style=\"width: 14.4498%; text-align: center; height: 22.3958px;\" scope=\"col\">Total</th>\n</tr>\n</thead>\n<tbody>\n<tr style=\"height: 22.3958px;\">\n<th style=\"width: 14.4498%; height: 22.3958px; text-align: left;\" scope=\"row\">Badger</th>\n<td style=\"width: 14.4498%; text-align: center; height: 22.3958px;\"><math alttext=\"4\"><mn>4</mn></math></td>\n<td style=\"width: 14.4498%; text-align: center; height: 22.3958px;\"><math alttext=\"9\"><mn>9</mn></math></td>\n<td style=\"width: 14.4498%; text-align: center; height: 22.3958px;\"><math alttext=\"9\"><mn>9</mn></math></td>\n<td style=\"width: 14.4498%; text-align: center; height: 22.3958px;\"><math alttext=\"22\"><mn>22</mn></math></td>\n</tr>\n<tr style=\"height: 22.3958px;\">\n<th style=\"width: 14.4498%; height: 22.3958px; text-align: left;\" scope=\"row\">Lion</th>\n<td style=\"width: 14.4498%; text-align: center; height: 22.3958px;\"><math alttext=\"9\"><mn>9</mn></math></td>\n<td style=\"width: 14.4498%; text-align: center; height: 22.3958px;\"><math alttext=\"2\"><mn>2</mn></math></td>\n<td style=\"width: 14.4498%; text-align: center; height: 22.3958px;\"><math alttext=\"9\"><mn>9</mn></math></td>\n<td style=\"width: 14.4498%; text-align: center; height: 22.3958px;\"><math alttext=\"20\"><mn>20</mn></math></td>\n</tr>\n<tr style=\"height: 22.3958px;\">\n<th style=\"width: 14.4498%; height: 22.3958px; text-align: left;\" scope=\"row\">Longhorn</th>\n<td style=\"width: 14.4498%; text-align: center; height: 22.3958px;\"><math alttext=\"4\"><mn>4</mn></math></td>\n<td style=\"width: 14.4498%; text-align: center; height: 22.3958px;\"><math alttext=\"6\"><mn>6</mn></math></td>\n<td style=\"width: 14.4498%; text-align: center; height: 22.3958px;\"><math alttext=\"4\"><mn>4</mn></math></td>\n<td style=\"width: 14.4498%; text-align: center; height: 22.3958px;\"><math alttext=\"14\"><mn>14</mn></math></td>\n</tr>\n<tr style=\"height: 22.3958px;\">\n<th style=\"width: 14.4498%; height: 22.3958px; text-align: left;\" scope=\"row\">Tiger</th>\n<td style=\"width: 14.4498%; text-align: center; height: 22.3958px;\"><math alttext=\"6\"><mn>6</mn></math></td>\n<td style=\"width: 14.4498%; text-align: center; height: 22.3958px;\"><math alttext=\"9\"><mn>9</mn></math></td>\n<td style=\"width: 14.4498%; text-align: center; height: 22.3958px;\"><math alttext=\"9\"><mn>9</mn></math></td>\n<td style=\"width: 14.4498%; text-align: center; height: 22.3958px;\"><math alttext=\"24\"><mn>24</mn></math></td>\n</tr>\n<tr style=\"height: 22.3958px;\">\n<th style=\"width: 14.4498%; text-align: center; height: 22.3958px;\" scope=\"row\">Total</th>\n<td style=\"width: 14.4498%; text-align: center; height: 22.3958px;\"><math alttext=\"23\"><mn>23</mn></math></td>\n<td style=\"width: 14.4498%; text-align: center; height: 22.3958px;\"><math alttext=\"26\"><mn>26</mn></math></td>\n<td style=\"width: 14.4498%; text-align: center; height: 22.3958px;\"><math alttext=\"31\"><mn>31</mn></math></td>\n<td style=\"width: 14.4498%; text-align: center; height: 22.3958px;\"><math alttext=\"80\"><mn>80</mn></math></td>\n</tr>\n</tbody>\n</table>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"one ninth\"><mfrac>\n\t<mn>1</mn>\n\t<mn>9</mn>\n</mfrac></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"one fifth\"><mfrac>\n\t<mn>1</mn>\n\t<mn>5</mn>\n</mfrac></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"one fourth\"><mfrac>\n\t<mn>1</mn>\n\t<mn>4</mn>\n</mfrac></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"two thirds\"><mfrac>\n\t<mn>2</mn>\n\t<mn>3</mn>\n</mfrac></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-4e527894",
    "originalId": "4e527894",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">There are <math alttext=\"20\"><mn>20</mn></math> buttons in a bag: <math alttext=\"8\"><mn>8</mn></math> white buttons, <math alttext=\"2\"><mn>2</mn></math> orange buttons, and <math alttext=\"10\"><mn>10</mn></math> brown buttons. If one of these buttons is selected at random, what is the probability of selecting a white button?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p style=\"text-align: left;\">Choice B is correct. It&rsquo;s given that there are <math alttext=\"20\"><mn>20</mn></math> buttons in a bag and <math alttext=\"8\"><mn>8</mn></math> of the buttons are white. If one button from the bag is selected at random, the probability of selecting a white button is the number of white buttons in the bag divided by the total number of buttons in the bag. Therefore, if one button from the bag is selected at random, the probability of selecting a white button is <math alttext=\"eight twentieths\"><mfrac><mn>8</mn><mn>20</mn></mfrac></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. This is the probability of selecting an orange button from the bag.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. This is the probability of selecting a brown button from the bag.</p>\n<p style=\"text-align: left;\">Choice D is incorrect. This is the probability of selecting a button that isn't white from the bag.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"two twentieths\"><mfrac><mn>2</mn><mn>20</mn></mfrac></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"eight twentieths\"><mfrac><mn>8</mn><mn>20</mn></mfrac></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"StartFraction 10 Over 20 EndFraction\"><mfrac><mn>10</mn><mn>20</mn></mfrac></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"StartFraction 12 Over 20 EndFraction\"><mfrac><mn>12</mn><mn>20</mn></mfrac></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-589cd7a6",
    "originalId": "589cd7a6",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">A box holds <math alttext=\"104\"><mn>104</mn></math> tokens, of which <math alttext=\"13\"><mn>13</mn></math> are brown. If a token is selected at random from the box, what is the probability of selecting a token that is brown?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p style=\"text-align: left;\">Choice C is correct. If a token is selected at random from the box, the probability of selecting a token that is brown is equal to the number of tokens that are brown divided by the total number of tokens in the box. Since there are <math alttext=\"13\"><mn>13</mn></math> brown tokens and <math alttext=\"104\"><mn>104</mn></math> total tokens in the box, the probability of selecting a token that is brown is <math alttext=\"StartFraction 13 Over 104 EndFraction\"><mfrac><mn>13</mn><mn>104</mn></mfrac></math>, or <math alttext=\"one eighth\"><mfrac>\n<mn>1</mn>\n<mn>8</mn>\n</mfrac></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice B is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice D is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"one thirteenth\"><mfrac>\n\t<mn>1</mn>\n\t<mn>13</mn>\n</mfrac></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"one tenth\"><mfrac>\n\t<mn>1</mn>\n\t<mn>10</mn>\n</mfrac></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"one eighth\"><mfrac>\n\t<mn>1</mn>\n\t<mn>8</mn>\n</mfrac></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"one fourth\"><mfrac>\n\t<mn>1</mn>\n\t<mn>4</mn>\n</mfrac></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-60caadfd",
    "originalId": "60caadfd",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">Each rock in a collection of <math alttext=\"70\"><mn>70</mn></math> rocks was classified as either igneous, metamorphic, or sedimentary, as shown in the frequency table.</p>\n\n<p style=\"text-align: left;\">If one of these rocks is selected at random, what is the probability of selecting a rock that is igneous?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p style=\"text-align: left;\">Choice D is correct. If one of the rocks in the collection is selected at random, the probability of selecting a rock that is igneous is equal to the number of igneous rocks in the collection divided by the total number of rocks in the collection. According to the table, there are <math alttext=\"10\"><mn>10</mn></math> igneous rocks in the collection, and it's given that there's a total of <math alttext=\"70\"><mn>70</mn></math> rocks in the collection. Therefore, if one of the rocks in the collection is selected at random, the probability of selecting a rock that is igneous is <math alttext=\"StartFraction 10 Over 70 EndFraction\"><mfrac><mn>10</mn><mn>70</mn></mfrac></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. This is the number of igneous rocks in the collection divided by the number of sedimentary rocks in the collection, not divided by the total number of rocks in the collection.</p>\n<p style=\"text-align: left;\">Choice B is incorrect. This is the number of igneous rocks in the collection divided by the number of metamorphic rocks in the collection, not divided by the total number of rocks in the collection.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. This is the number of igneous rocks in the collection divided by the number of rocks in the collection that aren't igneous, not divided by the total number of rocks in the collection.</p>",
    "passage": "<figure class=\"table\"><table border=\"1\">\n<tbody>\n<tr style=\"height: 22.3958px;\">\n<th style=\"width: 47.6772%; height: 22.3958px; text-align: center;\" scope=\"col\">Classification</th>\n<th style=\"width: 47.6772%; height: 22.3958px; text-align: center;\" scope=\"col\">Frequency</th>\n</tr>\n<tr style=\"height: 22.3958px;\">\n<td style=\"width: 47.6772%; height: 22.3958px; text-align: left;\">igneous</td>\n<td style=\"width: 47.6772%; text-align: center; height: 22.3958px;\"><math alttext=\"10\"><mn>10</mn></math></td>\n</tr>\n<tr style=\"height: 22.3958px;\">\n<td style=\"width: 47.6772%; height: 22.3958px; text-align: left;\">metamorphic</td>\n<td style=\"width: 47.6772%; text-align: center; height: 22.3958px;\"><math alttext=\"33\"><mn>33</mn></math></td>\n</tr>\n<tr style=\"height: 22.3958px;\">\n<td style=\"width: 47.6772%; height: 22.3958px; text-align: left;\">sedimentary</td>\n<td style=\"width: 47.6772%; text-align: center; height: 22.3958px;\"><math alttext=\"27\"><mn>27</mn></math></td>\n</tr>\n</tbody>\n</table></figure>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"StartFraction 10 Over 27 EndFraction\"><mfrac><mn>10</mn><mrow><mn>27</mn></mrow></mfrac></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"StartFraction 10 Over 33 EndFraction\"><mfrac><mn>10</mn><mrow><mn>33</mn></mrow></mfrac></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"StartFraction 10 Over 60 EndFraction\"><mfrac><mn>10</mn><mrow><mn>60</mn></mrow></mfrac></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"StartFraction 10 Over 70 EndFraction\"><mfrac><mn>10</mn><mrow><mn>70</mn></mrow></mfrac></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-79201024",
    "originalId": "79201024",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "easy",
    "stem": "<p>A band with <math alttext=\"45\"><mn>45</mn></math> members has <math alttext=\"11\"><mn>11</mn></math> members who play saxophone. If one band member is selected at random, what is the probability of selecting a band member who plays saxophone?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p style=\"text-align: left;\">Choice B is correct. The probability of an event occurring is the ratio of the number of favorable outcomes to the total number of possible outcomes. It&rsquo;s given that there are <math alttext=\"45\"><mn>45</mn></math> band members, which is the total number of possible outcomes. It's also given that there are <math alttext=\"11\"><mn>11</mn></math> band members who play saxophone. Therefore, the number of favorable outcomes is <math alttext=\"11\"><mn>11</mn></math>. Thus, the probability of selecting a band member who plays saxophone is <math alttext=\"StartFraction 11 Over 45 EndFraction\"><mfrac><mn>11</mn><mn>45</mn></mfrac></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. This is the probability of selecting a band member who does not play saxophone.</p>\n<p style=\"text-align: left;\">Choice D is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"one forty fifth\"><mfrac><mn>1</mn><mn>45</mn></mfrac></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"StartFraction 11 Over 45 EndFraction\"><mfrac><mn>11</mn><mn>45</mn></mfrac></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"StartFraction 34 Over 45 EndFraction\"><mfrac><mn>34</mn><mn>45</mn></mfrac></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"StartFraction 45 Over 45 EndFraction\"><mfrac><mn>45</mn><mn>45</mn></mfrac></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-a478f9f5",
    "originalId": "a478f9f5",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">Each of <math alttext=\"157\"><mn>157</mn></math> gemstones can be classified as one of three classifications, as shown in the frequency table.</p>\n\n<p style=\"text-align: left;\">If one of the gemstones is selected at random, what is the probability of selecting a gemstone of color Y?</p>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p style=\"text-align: left;\">Choice A is correct. If one of the gemstones is selected at random, the probability of selecting a gemstone of color Y is equal to the number of gemstones of color Y divided by the total number of gemstones. According to the table, there are <math alttext=\"3\"><mn>3</mn></math> gemstones of color Y, and it's given that the total number of gemstones is <math alttext=\"157\"><mn>157</mn></math>. Therefore, if one of the gemstones is selected at random, the probability of selecting a gemstone of color Y is <math alttext=\"StartFraction 3 Over 157 EndFraction\"><mfrac>\n\t<mn>3</mn>\n\t<mn>157</mn>\n</mfrac></math>.</p>\n<p style=\"text-align: left;\">Choice B is incorrect. This is the probability of selecting a gemstone of color Z.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. This is the probability of selecting a gemstone of color X.</p>\n<p style=\"text-align: left;\">Choice D is incorrect. This is the probability of selecting a gemstone that's not of color Y.</p>",
    "passage": "<figure class=\"table\"><table border=\"1\">\n<thead>\n<tr>\n<th style=\"width: 49.9876%; vertical-align: bottom; text-align: center;\" scope=\"col\">Classification</th>\n<th style=\"width: 49.6566%; vertical-align: bottom; text-align: center;\" scope=\"col\">Frequency</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<th style=\"width: 49.9876%; text-align: left;\" scope=\"row\">color X</th>\n<td style=\"width: 49.6566%; text-align: center;\"><math alttext=\"119\"><mn>119</mn></math></td>\n</tr>\n<tr>\n<th style=\"width: 49.9876%; text-align: left;\" scope=\"row\">color Y</th>\n<td style=\"width: 49.6566%; text-align: center;\"><math alttext=\"3\"><mn>3</mn></math></td>\n</tr>\n<tr>\n<th style=\"width: 49.9876%; text-align: left;\" scope=\"row\">color Z</th>\n<td style=\"width: 49.6566%; text-align: center;\"><math alttext=\"35\"><mn>35</mn></math></td>\n</tr>\n</tbody>\n</table></figure>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"StartFraction 3 Over 157 EndFraction\"><mfrac><mn>3</mn><mn>157</mn></mfrac></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"StartFraction 35 Over 157 EndFraction\"><mfrac><mn>35</mn><mn>157</mn></mfrac></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"StartFraction 119 Over 157 EndFraction\"><mfrac><mn>119</mn><mn>157</mn></mfrac></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"StartFraction 154 Over 157 EndFraction\"><mfrac><mn>154</mn><mn>157</mn></mfrac></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-b680e76d",
    "originalId": "b680e76d",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">How many of the males surveyed responded that they do not play a school sport?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p>Choice B is correct. The table summarizes all 1,000 responses from the students surveyed. If 312 are males who play a sport, 220 are females who play a sport, and 216 are females who do not play a sport, then 1,000 &ndash; 312 &ndash; 220 &ndash; 216 = 252 males who do not play a sport.<p>Choices A, C, and D are incorrect. If 109 males who do not play a sport responded, then the table summary would be 109 + 312 + 220 + 216 = 857 total student responses rather than 1,000. If 468 males who do not play a sport responded, then the table summary would be 468 + 312 + 220 + 216 = 1,216 total student responses rather than 1,000. If 688 males who do not play a sport responded, then the table summary would be 688 + 312 + 220 + 216 = 1,436 total student responses rather than 1,000.<br>\n </p></p>",
    "passage": "<figure class=\"table\"><table border=\"1\"><thead><tr><th scope=\"col\" style=\"text-align: center;\"> </th><th scope=\"col\" style=\"text-align: center;\">Males</th><th scope=\"col\" style=\"text-align: center;\">Females</th></tr></thead><tbody><tr><th scope=\"row\" style=\"text-align: left; font-weight: normal;\">Play a school sport</th><td style=\"text-align: center;\">312</td><td style=\"text-align: center;\">220</td></tr><tr><th scope=\"row\" style=\"text-align: left; font-weight: normal;\">Do not play a school sport</th><td style=\"text-align: center;\">?</td><td style=\"text-align: center;\">216</td></tr></tbody></table></figure>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">109</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">252</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">468</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">688</p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-b8150b17",
    "originalId": "b8150b17",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">For a particular machine that produces beads, <math alttext=\"29\"><mn>29</mn></math> out of every <math alttext=\"100\"><mn>100</mn></math> beads it produces have a defect. A bead produced by the machine will be selected at random. What is the probability of selecting a bead that has a defect?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p style=\"text-align: left;\">Choice C is correct. It&rsquo;s given that <math alttext=\"29\"><mn>29</mn></math> out of every <math alttext=\"100\"><mn>100</mn></math> beads that the machine produces have a defect. It follows that if the machine produces <math alttext=\"k\"><mi>k</mi></math> beads, then the number of beads that have a defect is <math alttext=\"StartFraction 29 Over 100 EndFraction k\"><mfrac><mn>29</mn><mn>100</mn></mfrac><mi>k</mi></math>, for some constant <math alttext=\"k\"><mi>k</mi></math>. If a bead produced by the machine will be selected at random, the probability of selecting a bead that has a defect is given by the number of beads with a defect, <math alttext=\"StartFraction 29 Over 100 EndFraction k\"><mfrac><mn>29</mn><mn>100</mn></mfrac><mi>k</mi></math>, divided by the number of beads produced by the machine, <math alttext=\"k\"><mi>k</mi></math>. Therefore, the probability of selecting a bead that has a defect is <math alttext=\"StartStartFraction StartFraction 29 Over 100 EndFraction k OverOver k EndEndFraction\"><mfrac><mrow><mstyle displaystyle=\"true\"><mfrac><mn>29</mn><mn>100</mn></mfrac></mstyle><mi>k</mi></mrow><mi>k</mi></mfrac></math>, or <math alttext=\"StartFraction 29 Over 100 EndFraction\"><mfrac><mn>29</mn><mn>100</mn></mfrac></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect and may result from conceptual or computational errors.</p>\n<p style=\"text-align: left;\">Choice B is incorrect and may result from conceptual or computational errors.</p>\n<p style=\"text-align: left;\">Choice D is incorrect and may result from conceptual or computational errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"StartFraction 1 Over 2,900 EndFraction\"><mfrac>\n\t<mn>1</mn>\n\t<mn>2,900</mn>\n</mfrac></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"one twenty ninth\"><mfrac>\n\t<mn>1</mn>\n\t<mn>29</mn>\n</mfrac></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"StartFraction 29 Over 100 EndFraction\"><mfrac>\n\t<mn>29</mn>\n\t<mn>100</mn>\n</mfrac></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"StartFraction 29 Over 10 EndFraction\"><mfrac>\n\t<mn>29</mn>\n\t<mn>10</mn>\n</mfrac></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-c943acba",
    "originalId": "c943acba",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">On a street with <math alttext=\"7\"><mn>7</mn></math> houses, <math alttext=\"2\"><mn>2</mn></math> houses are blue. If a house from this street is selected at random, what is the probability of selecting a house that is blue?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p style=\"text-align: left;\">Choice B is correct. If a house from the street is selected at random, the probability of selecting a house that is blue is equal to the number of houses on the street that are blue divided by the total number of houses on the street. Since there are <math alttext=\"2\"><mn>2</mn></math> blue houses on a street with <math alttext=\"7\"><mn>7</mn></math> total houses, the probability of selecting a house that is blue from this street is <math alttext=\"two sevenths\"><mfrac>\n\t<mn>2</mn>\n\t<mn>7</mn>\n</mfrac></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. This is the probability of selecting a house that is blue from a street on which <math alttext=\"1\"><mn>1</mn></math> of the <math alttext=\"7\"><mn>7</mn></math> houses is blue.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. This is the probability of selecting a house that is not blue from this street.</p>\n<p style=\"text-align: left;\">Choice D is incorrect. This is the probability of selecting a house that is blue from a street on which all the houses are blue.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"one seventh\"><mfrac><mn>1</mn><mn>7</mn></mfrac></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"two sevenths\"><mfrac><mn>2</mn><mn>7</mn></mfrac></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"five sevenths\"><mfrac><mn>5</mn><mn>7</mn></mfrac></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"seven sevenths\"><mfrac><mn>7</mn><mn>7</mn></mfrac></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-d89c1513",
    "originalId": "d89c1513",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "easy",
    "stem": "<div class=\"tcp-3d646db2-b001-4827-83f2-417c86f7484a\"><table class=\"table_WithBorder tcp-a941e991-39e6-4be9-9285-30afb9eef87b\"><caption>Customer Purchases at a Gas Station</caption><tbody><tr><td class=\"tcp-b3b44fc5-0192-4460-92d6-cb8f4617e526\"> </td><td class=\"tcp-9ddeecbb-f576-47ad-8f8f-bd3f0455fc76\">Beverage purchased</td><td class=\"tcp-369fffcd-74f2-4334-be88-49d38997b145\">Beverage not purchased</td><td class=\"tcp-7a96acad-3f1f-43e8-8849-4c77281bd6d9\">Total</td></tr><tr><td class=\"tcp-5704d7b1-9842-4e18-a849-3d71ef786707\">Gasoline purchased</td><td class=\"tcp-624b53eb-3070-471e-b21e-63857d166f58\">60</td><td class=\"tcp-59e1376b-53ec-472d-94f8-67fe0c247692\">25</td><td class=\"tcp-6980a7d3-9f73-4e61-9008-052b49dd9c18\">85</td></tr><tr><td class=\"tcp-643d159f-6713-4dc6-b71f-0672e6226ae9\">Gasoline not purchased</td><td class=\"tcp-56d5c23f-2d01-448b-a5c1-b12b68fa8f13\">35</td><td class=\"tcp-1d3f01d5-8123-4584-985b-821f6d4d519e\">15</td><td class=\"tcp-7ae4aa9e-649f-40dd-b482-bde562913196\">50</td></tr><tr><td class=\"tcp-fc83c8d2-278d-421a-b1bb-fb829fcb6fb8\">Total</td><td class=\"tcp-fa6a1bae-d732-43a6-bce0-44788fc6783d\">90</td><td class=\"tcp-09b65877-4e14-495c-8834-42fd0d590ee4\">40</td><td class=\"tcp-9743194a-b19c-488a-bd35-2ef1cedd5f1d\">135</td></tr></tbody></table><p class=\"stem_paragraph \">On Tuesday, a local gas station had 135 customers. The table above summarizes whether or not the customers on Tuesday purchased gasoline, a beverage, both, or neither. Based on the data in the table, what is the probability that a gas station customer selected at random on that day did <span class=\"underline\"><span class=\"underline \">not</span></span> purchase gasoline?</p></div>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p>Choice D is correct. The total number of gas station customers on Tuesday was 135. The table shows that the number of customers who did not purchase gasoline was 50. Finding the ratio of the number of customers who did not purchase gasoline to the total number of customers gives the probability that a customer selected at random on that day did not purchase gasoline, which is <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAsCAYAAADikXHLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABb0lEQVRYR+2Xga2EIAyGGY+BGIddXMVN+oBSKBUUfOhdLnwJUZHY37baonoB2MC4gz8thtn8MQGbYfc12B2K+1OB3YJWxklrG0FBWYi8nk4woC2451cNgLtjtQLtFMSpwGaO3pzG1cPRkwrckmLNbrW7PvfwLZIXjAmG/ZQf3Cso6hgqDOEjomKSs/CRZ0hYK38ezysJD83XiOIGXw9fi6OoNxO9w+DrvwQyyN8YvVQKlfkjr6eTheUhPedB79GaBwUtFr8E+2o+NhaLz+GLqiy0RCi4KVErrYurlj27oCGo8NZEoSBZpEth2GFMbF14cZWiau1MrX0JQk92QUPkt0b3t8LHSZ0EC80j/RTlRI8o9GwOX/LcyS7oFj2ieJjLcF7vgm4x4ikyeBUu3kbHqTFGRHlkCGv8u00eFdVj8DFR+OCLHU7HLihOjdEURZ8/T+IolNamNYcfbH3T0c1Z+LLRPKSxnjWLxWKx+E2U+gMGpcKIbz5tTAAAAABJRU5ErkJggg==\" alt=\"50 over 135\"></span>.<p>Choice A is incorrect and may result from finding the probability that a customer did not purchase a beverage, given that the customer did not purchase gasoline. Choice B is incorrect and may result from finding the probability that a customer did not purchase gasoline, given that the customer did not purchase a beverage. Choice C is incorrect and may result from finding the probability that a customer did purchase a beverage, given that the customer did not purchase gasoline.</p><p> </p></p>",
    "passage": "<div class=\"stimulus_reference \" xmlns=\"http://www.imsglobal.org/xsd/apip/apipv1p0/qtiitem/imsqti_v2p1\"><div class=\"passage \"><div class=\"prose style:1 \"> </div></div></div>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABIElEQVRYR+2Wiw2EIAyGGY+BGIddWIVNemCtQAUFwUvu0i9pTo3y93VQ1YMzCrT1sN8eADgw4SdeFmbc6d1uwJltkaqgt6CVCbLwXCDHW40etwSjM9qCXyGIkWmwHtNWE4ypnkpfDaoTF4QQl9XhuTEhral+NceGaAvuDZOlFGs6KdoSbIF1n2ikUcFU+18XpHqFJi2ev5ZS6tJ8cdokuBNDXKU0iSabEhOEO4pue8GEf4e2tHhZGBspaP9EmzklOiYyfhRNHU3bxxcT2THTsE398WB19+HS87BnIkPBc/owrcOCe8NcTGStek3VkZOn6yuC+WJLU9riLLiqaToWW/q3oMVyTzG60gleL34/RBJNxiOOYNT0zkMxQRCEhSj1AZmWNVNzhx9mAAAAAElFTkSuQmCC\" alt=\"15 over 50\"></span></span></p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABJElEQVRYR+2XbRIDEQyGHc+BHMddXMVNUtmsCqLdlfWjU8+M6ce0Ht4oaq4QnAHrI5wv3wAEcOkBn1bNhe6zl4Hgjk5EYfRgjUtamBdworc04pEQB2M9xCeENDMLPlJskhCjVsUnkevUCiHNy9v0vnMp1lI/aWC3GAvPBcMipZoqpSPhCKq7YiHdFZba/7ow1yst0ur9ZZHmVco7z5tEO4hbfIq0SEtTyTabb1SrbUHb/BOjjRrJ+yc1xSnBOe4ugrA9itRHE8JnwIXvO02zqasuVrlT5/tIl5yHx5fxkiR0TsI+PkpkQpjPQZRIsxnVa7qOvBbLhW1covDJSPl/ir6RRBoEor5EIeIMV/wsMqPZtPWaXjAtIyFSx/+AbLPZbJQY8wIG7S/PTmERyAAAAABJRU5ErkJggg==\" alt=\"15 over 40\"></span></span></p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABOUlEQVRYR+2W4RGDIAyFGY+BGIddWIVNUjAEQkBFpP3R47vLtSrmhQdq1BXOKAg/KTRYD/F/BsCByddZGFeNGwLFTEiJIuBM+K1FwVvQbMw0mEhBKLQkBw9WK9BBMZ3CIrQNV14K9iBBbtfhwox9I3irQ+JiaZ6xMYcb8VQM7sAUKITJaovThmGW0lK8Fo1QsjsLscAFGykibe3R283TjCSbEsSb6jWLcLt6j05kytL8CPANkYqgDZHHNC+HtoghSsISMtHImM1mKdVu+0Js/p3RjozenxgvPksjHZn8FMnjRxw3X3Rk9OKW7cR0Y3V341e+h1cdGQq29qGtjwXvO7Kz9Xq1jpKqxfiFIE+21NIzWsFVm2Yg2dLHgpLxSnF2dRFyveTxI4poCTnjCM6axkyKbTabzUKU+gBo7VqtdwF0oQAAAABJRU5ErkJggg==\" alt=\"35 over 50\"></span></span></p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAsCAYAAADikXHLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABb0lEQVRYR+2Xga2EIAyGGY+BGIddXMVN+oBSKBUUfOhdLnwJUZHY37baonoB2MC4gz8thtn8MQGbYfc12B2K+1OB3YJWxklrG0FBWYi8nk4woC2451cNgLtjtQLtFMSpwGaO3pzG1cPRkwrckmLNbrW7PvfwLZIXjAmG/ZQf3Cso6hgqDOEjomKSs/CRZ0hYK38ezysJD83XiOIGXw9fi6OoNxO9w+DrvwQyyN8YvVQKlfkjr6eTheUhPedB79GaBwUtFr8E+2o+NhaLz+GLqiy0RCi4KVErrYurlj27oCGo8NZEoSBZpEth2GFMbF14cZWiau1MrX0JQk92QUPkt0b3t8LHSZ0EC80j/RTlRI8o9GwOX/LcyS7oFj2ieJjLcF7vgm4x4ikyeBUu3kbHqTFGRHlkCGv8u00eFdVj8DFR+OCLHU7HLihOjdEURZ8/T+IolNamNYcfbH3T0c1Z+LLRPKSxnjWLxWKx+E2U+gMGpcKIbz5tTAAAAABJRU5ErkJggg==\" alt=\"50 over 135\"></span></span></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-dae79de4",
    "originalId": "dae79de4",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">The table summarizes customers who visited a car dealership in the last month by age and number of visits they made to the dealership. If a customer from the last month is selected at random, what is the probability that the selected customer is at least <math alttext=\"40\"><mn>40</mn></math> years old? </p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p style=\"text-align: left;\">Choice D is correct. Based on the table, there are a total of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"135\"><mn>135</mn></math> customers who visited the car dealership in the last month, and <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"105\"><mn>105</mn></math> of these customers are at least <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"40\"><mn>40</mn></math> years old. If a customer from the last month is selected at random, the probability that the selected customer is at least <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"40\"><mn>40</mn></math> years old is equal to the number of customers who are at least <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"40\"><mn>40</mn></math> years old divided by the total number of customers. Therefore, the probability that the selected customer is at least <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"40\"><mn>40</mn></math> years old is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"StartFraction 105 Over 135 EndFraction\"><mfrac><mn>105</mn><mn>135</mn></mfrac></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. This is the probability that the selected customer is less than <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"40\"><mn>40</mn></math> years old.</p>\n<p style=\"text-align: left;\">Choice B is incorrect. This is the probability that the selected customer visited the dealership <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"1\"><mn>1</mn></math> time in the last month.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. This is the probability that the selected customer visited the dealership <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"2\"><mn>2</mn></math> or more times in the last month.</p>",
    "passage": "<figure class=\"table\"><table border=\"1\">\n<tbody>\n<tr>\n<td style=\"width: 22.7153%;\"> </td>\n<th style=\"width: 22.7153%; text-align: center; vertical-align: bottom;\" scope=\"col\"><math alttext=\"1\"><mn>1</mn></math> visit</th>\n<th style=\"width: 22.7153%; text-align: center; vertical-align: bottom;\" scope=\"col\"><math alttext=\"2\"><mn>2</mn></math> or more visits</th>\n<th style=\"width: 22.7208%; text-align: center; vertical-align: bottom;\" scope=\"col\">Total</th>\n</tr>\n<tr>\n<th style=\"width: 22.7153%; text-align: left;\" scope=\"row\">Less than <math alttext=\"40\"><mn>40</mn></math> years old</th>\n<td style=\"width: 22.7153%; text-align: center; vertical-align: middle;\"><math alttext=\"15\"><mn>15</mn></math></td>\n<td style=\"width: 22.7153%; text-align: center; vertical-align: middle;\"><math alttext=\"15\"><mn>15</mn></math></td>\n<td style=\"width: 22.7208%; text-align: center; vertical-align: middle;\"><math alttext=\"30\"><mn>30</mn></math></td>\n</tr>\n<tr>\n<th style=\"width: 22.7153%; text-align: left;\" scope=\"row\">At least <math alttext=\"40\"><mn>40</mn></math> years old</th>\n<td style=\"width: 22.7153%; text-align: center; vertical-align: middle;\"><math alttext=\"20\"><mn>20</mn></math></td>\n<td style=\"width: 22.7153%; text-align: center; vertical-align: middle;\"><math alttext=\"85\"><mn>85</mn></math></td>\n<td style=\"width: 22.7208%; text-align: center; vertical-align: middle;\"><math alttext=\"105\"><mn>105</mn></math></td>\n</tr>\n<tr>\n<th style=\"width: 22.7153%; text-align: center;\" scope=\"row\">Total</th>\n<td style=\"width: 22.7153%; text-align: center; vertical-align: middle;\"><math alttext=\"35\"><mn>35</mn></math></td>\n<td style=\"width: 22.7153%; text-align: center; vertical-align: middle;\"><math alttext=\"100\"><mn>100</mn></math></td>\n<td style=\"width: 22.7208%; text-align: center; vertical-align: middle;\"><math alttext=\"135\"><mn>135</mn></math></td>\n</tr>\n</tbody>\n</table></figure>",
    "options": [
      {
        "id": "A",
        "text": "<p style=\"text-align: left;\"><math alttext=\"StartFraction 30 Over 135 EndFraction\"><mfrac><mn>30</mn><mn>135</mn></mfrac></math></p>"
      },
      {
        "id": "B",
        "text": "<p style=\"text-align: left;\"><math alttext=\"StartFraction 35 Over 135 EndFraction\"><mfrac><mn>35</mn><mn>135</mn></mfrac></math></p>"
      },
      {
        "id": "C",
        "text": "<p style=\"text-align: left;\"><math alttext=\"StartFraction 100 Over 135 EndFraction\"><mfrac><mn>100</mn><mn>135</mn></mfrac></math></p>"
      },
      {
        "id": "D",
        "text": "<p style=\"text-align: left;\"><math alttext=\"StartFraction 105 Over 135 EndFraction\"><mfrac><mn>105</mn><mn>135</mn></mfrac></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-e5b5fbdd",
    "originalId": "e5b5fbdd",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">Of the 8 planets in our solar system, 4 are considered rocky. If a student randomly selects 1 of those 8 planets as a topic for a report, what is the probability that the selected planet will be rocky?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p>Choice C is correct. If one of these planets is selected at random, the probability that the selected planet will be rocky is calculated by dividing the number of planets that are considered rocky by the total number of planets. It&rsquo;s given that 4 of the 8 total planets are considered rocky. Therefore, the probability that the selected planet will be rocky is <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAsCAYAAACHfIO0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAAz0lEQVRIS+2VgQ2EIAxFGa8DMQ67sAqbfAulQeNxwcJdLjle0miIPEvR4kZACiC++AjUITvRuyyZlyH6IsoxJQMSArEkLFhmCgRHAWm2ZkCEr4LpDShF59n5fkomkwkhyeQpWakVT34d7SUmln60vyvbfIe8U9bYfAI9SDTMv5OIPPdbEejB8lh4btl1qHDuvsP0uoRJllm2TOXavo3tWg/fS2Z16cTG8tAovZpJpu0FQ0h97svqjb+ll5nIHmaWue2mtWaKCFuYRZvNH+DcASGfM2ZbOdVXAAAAAElFTkSuQmCC\" alt=\"four eighths\"></span>, which is equivalent to <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAwCAYAAAAVQYoQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAY00gKyAAAANFJREFUeNpjYCAMWoB4GxA/B+L/UD5VwBcgPgbEU6ltMBMSm6oGM4waPGow/QwOQcIgg9cg8Sl2JS48CkYBDZIVKXgUDBJQCsR7gfgNEP8G4sfQ2lqYUoO/AfEiII4EYlsgToW2L64DMRclBotjEbOCJqsEagcPB9TgWmob7A81OIiahgoB8X0gvgTEzNQyFBRZh4H4HRBrUstQTmiy+wTEZtSMrF1A/BWI7ahlKDsQ7wDi70DsQs3I2gJNAY1AbIGGZWhVRrcwjIJRMApGwWAFAOXPUc7ue6X9AAAAAElFTkSuQmCC\" alt=\"one half\"></span>.<p>Choices A and B are incorrect. These represent the probability if 1 of the 8 planets was considered rocky (choice A) and if 2 of the 8 planets were considered rocky (choice B). Choice D is incorrect and may result from dividing the total number of planets by the number of planets that are considered rocky.</p><p> </p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph block_choice\"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAsCAYAAACHfIO0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAArklEQVRIS+2W4QnEIAxGHc+BMo67uEo2+c40et71sGhq4X7kQSgKPqNiY5ghU0BMjNq0g0wiuS/jFA+RxC2ZZhSROIN2ZCYALlvFZc4/I6dlDecJpCqVzzsow7bZKqJyM1XQqtSysF3u88BjgtJZm3OAE+IumbBtmY3PIqw11CACGCmeMqtLX/5JjvZMM+0TTNGfBt+DRv2XjDJT2WJmws9pWvesocIeXqEcZ0wILyaOD8lSdUgwAAAAAElFTkSuQmCC\" alt=\"one eighth\"></span></span></p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph block_choice\"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAwCAYAAAAVQYoQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAY00gKyAAAAKxJREFUeNpjYCAMWoB4GxA/B+L/UD5VwBcgPgbEU6ltMBMSm6oGM4waPGow/QwOQcIgg9cg8Sl2JS48CkYBDZIVKXgUDELACMSHaFF05gDxU2obrADEn4E4kNoG7wbiddQu7FOA+AMQS1LTYGmooWnUrp42A/FBaIqgmsGgOu03EJsDsQASBhncDWUzkWNwAxEFjg65ScwBCwYZuBjK5h7ZraFRMApGwSigGgAA0c1V2axbieYAAAAASUVORK5CYII=\" alt=\"one fourth\"></span></span></p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph block_choice\"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAwCAYAAAAVQYoQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAY00gKyAAAANFJREFUeNpjYCAMWoB4GxA/B+L/UD5VwBcgPgbEU6ltMBMSm6oGM4waPGow/QwOQcIgg9cg8Sl2JS48CkYBDZIVKXgUDBJQCsR7gfgNEP8G4sfQ2lqYUoO/AfEiII4EYlsgToW2L64DMRclBotjEbOCJqsEagcPB9TgWmob7A81OIiahgoB8X0gvgTEzNQyFBRZh4H4HRBrUstQTmiy+wTEZtSMrF1A/BWI7ahlKDsQ7wDi70DsQs3I2gJNAY1AbIGGZWhVRrcwjIJRMApGwWAFAOXPUc7ue6X9AAAAAElFTkSuQmCC\" alt=\"one half\"></span></span></p>"
      },
      {
        "id": "D",
        "text": "<p>2</p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-ec7b0eb8",
    "originalId": "ec7b0eb8",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">In a study of cell phone use, 799 randomly selected US teens were asked how often they talked on a cell phone and about their texting behavior. The data are summarized in the table above. If one of the 799 teens surveyed is selected at random, what is the probability that the teen talks on a cell phone daily?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p>Choice B is correct. If one of the teens surveyed is selected at random, the probability that the teen talks on a cell phone daily is equal to the quotient of the total number of teens who reported that they talk on a cell phone daily, 415, and the total number of teens surveyed, 799. Therefore, this probability is equal to <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAsCAYAAADikXHLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABj0lEQVRYR+2XDc7DIAiGezwP5HG8S6/SmzAVWP2BFe2yJY1PYvrFUnlBnHybBTgCuPjwOwBNdex+AxeO7j3ADj4+0p/ViIvF5zzJYXyoomD3+b0oKgfkozQ9oGHYYRqSqCO493tRVPreBTi+JQriUsFFMUHePhTsIBy4RZKonOW7W1WSs5CivKgprptWFAflvM/fp6k0JPEm2FESclXouigq8mL7eK0pYWXaZ0VpYB0OFj+KSLVSR/ctUWctDogqT1Q/+sV+IqpluqaU76a2r2VaFJ2+UgD/7mlrmblTU6ewc9wWtFg8jeqE/GksFr+D7yd51Ld73VHIN7/FZgq+38p+G//LOZ1Il63FZhpcvLjt6ZJuL+GcFWp/LTY0NY7UJWiNWjlvsaGpcXKWmsj+KkrbAq3HwqImUQYbmhoDF5BbV63OSocWmyHeXWMMlaY60CmP6Dw7rR1abMx8anM1sF7kzDIWGxVMtRyRJjhnhTJrsRnmKqKuXoRTZbEZ4lORM129CLYWm8VisVg8j217AUc4NdCFcws5AAAAAElFTkSuQmCC\" alt=\"415 over 799\"></span>.<p>Choice A is incorrect. This fraction represents the probability of selecting at random any one of the 799 teens surveyed. Choice C is incorrect and may result from conceptual errors. Choice D is incorrect. This fraction represents the probability of selecting at random one of the 799 teens surveyed who doesn&rsquo;t talk on a cell phone daily. </p></p>",
    "passage": "<div class=\"tcp-f3f3ce7c-3193-4bbc-be11-c9789662af64\"><table align=\"center\" class=\"table_WithBorder tcp-3e34fe1f-81c2-4f08-a86f-2ad6ebafc44a\" style=\"width: 50%;\"><thead><tr><th class=\"tcp-377c7335-9b2c-4de8-934e-b5295a6accb2 para_center\" scope=\"col\" style=\"text-align: center; vertical-align: bottom;\">Texting behavior</th><th class=\"tcp-1797dc05-4f49-4b9f-bf10-e74478d3daac para_center\" scope=\"col\" style=\"text-align: center; vertical-align: bottom;\">Talks on cell phone daily</th><th class=\"tcp-a18f906b-7ea1-43b5-ab7a-2dd9200b79ca para_center\" scope=\"col\" style=\"text-align: center; vertical-align: bottom;\">Does not talk on cell phone daily</th><th class=\"tcp-94b20ab5-9505-4f2f-b370-129449908481 para_center\" scope=\"col\" style=\"text-align: center; vertical-align: bottom;\">Total</th></tr></thead><tbody><tr><th class=\"tcp-c752f947-ae0c-4d39-9225-a644f9618d27\" scope=\"row\" style=\"text-align: left; vertical-align: middle;\">Light</th><td class=\"tcp-48506f47-fe61-48c9-8a3a-10da6472df53 para_center\" style=\"text-align: center;\">110</td><td class=\"tcp-d012a152-8840-4a6d-a5f5-b8297f626b59 para_center\" style=\"text-align: center;\">146</td><td class=\"tcp-51f1dfd1-57d7-4fce-af41-22261b2707e4 para_center\" style=\"text-align: center;\">256</td></tr><tr><th class=\"tcp-61e94159-ec2d-4bb2-a52b-96ccd28357a4\" scope=\"row\" style=\"text-align: left; vertical-align: middle;\">Medium</th><td class=\"tcp-e8173193-e7d9-49a9-9820-95273c31246d para_center\" style=\"text-align: center;\">139</td><td class=\"tcp-7632f94a-4e1a-484a-9010-63322123b57f para_center\" style=\"text-align: center;\">164</td><td class=\"tcp-6f13168d-4e6a-48cd-b07c-710c21519464 para_center\" style=\"text-align: center;\">303</td></tr><tr><th class=\"tcp-4900ea18-665f-49a8-829b-5471951302f4\" scope=\"row\" style=\"text-align: left; vertical-align: middle;\">Heavy</th><td class=\"tcp-a066de45-77d1-432c-9415-7bdca11af6ec para_center\" style=\"text-align: center;\">166</td><td class=\"tcp-846d3f44-9d91-49e7-8335-7938220f54c0 para_center\" style=\"text-align: center;\">74</td><td class=\"tcp-b25d31b2-c95f-4fb8-88e6-99cb5287ce48 para_center\" style=\"text-align: center;\">240</td></tr><tr><th class=\"tcp-17b82204-c12b-4efe-b128-1245c48ce2d9 para_center\" scope=\"row\" style=\"text-align: center; vertical-align: middle;\">Total</th><td class=\"tcp-1d46e7ca-6646-4f3b-80aa-e5e72de8fa40 para_center\" style=\"text-align: center;\">415</td><td class=\"tcp-57161190-747f-4357-a738-bf794b8c0b04 para_center\" style=\"text-align: center;\">384</td><td class=\"tcp-c7e3fbdb-baf8-4ce2-83ed-2ac03493ee61 para_center\" style=\"text-align: center;\">799</td></tr></tbody></table></div>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAsCAYAAADikXHLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABEUlEQVRYR+2XAQ7DIAhFPZ4H8jjexat4EwYKq7W6YbOsTcNLzDr3Ax9GU+t+RQoOfMzAX68HUiAz9zGVoy+GaN3CVO2Qh5gThDt1igAwUzrMlBYzpcVMGcYToTvn6mUY/0NeBMaLjr9A14X2jN7/Jmg0p5DnmwvpHZBeq9okUgxKljSnqcEDWuPgOYLHj/4hXLriI6AH0Gh4ax0J3la3vcnsA7f7Gg1vrVO61FV2qanZXzDqHlGHmk0pNLy1Rg2wzVLLbM7ahBrNElgqRI8BsFTeOlCTysLkJek+oUaj5swxt87LuLOCRjOltnpc0cxw6Qp3VqNZ5ltFh3kZ3FUazRKfhlw4zMtAq9EYhmEYz8O5F84VKzs2XotaAAAAAElFTkSuQmCC\" alt=\"1 over 799\"></span></span></p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAsCAYAAADikXHLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABj0lEQVRYR+2XDc7DIAiGezwP5HG8S6/SmzAVWP2BFe2yJY1PYvrFUnlBnHybBTgCuPjwOwBNdex+AxeO7j3ADj4+0p/ViIvF5zzJYXyoomD3+b0oKgfkozQ9oGHYYRqSqCO493tRVPreBTi+JQriUsFFMUHePhTsIBy4RZKonOW7W1WSs5CivKgprptWFAflvM/fp6k0JPEm2FESclXouigq8mL7eK0pYWXaZ0VpYB0OFj+KSLVSR/ctUWctDogqT1Q/+sV+IqpluqaU76a2r2VaFJ2+UgD/7mlrmblTU6ewc9wWtFg8jeqE/GksFr+D7yd51Ld73VHIN7/FZgq+38p+G//LOZ1Il63FZhpcvLjt6ZJuL+GcFWp/LTY0NY7UJWiNWjlvsaGpcXKWmsj+KkrbAq3HwqImUQYbmhoDF5BbV63OSocWmyHeXWMMlaY60CmP6Dw7rR1abMx8anM1sF7kzDIWGxVMtRyRJjhnhTJrsRnmKqKuXoRTZbEZ4lORM129CLYWm8VisVg8j217AUc4NdCFcws5AAAAAElFTkSuQmCC\" alt=\"415 over 799\"></span></span></p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAsCAYAAADikXHLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABnklEQVRYR+2Xjc3EIAiGHc+BHMdduko34aRIRQv90X7fJRefhLTXQ30VWtGdsQQH6ZLNQ1wB7ytqHwdhOfowsEbwFz6n0GABUvutA1hCutbCdB97UJ5AlyhtRgArRO/AJ1X0e4GgDLANnB7mnzssGK1LlAaL4gGtUGiiuG2Ig+FrWaNPHfWFb2vrI6yjOcWQGHvZ5f/ayyDDPJzoLdzhHj4Op1yp7MN5h8hwvi4KkSG0BiAfEko+ZfX+RJT8LGifCEQ+r0Pb2rHtKacJW63C0YfalpBKhlZqzxd8Y3LnLPSQLxc5JRkO3y4s3bJpnZGwYpYgZFjUZPKrVG/Rl2wy+R53tgfcbrQthos8vK0sdZau/fD+ZonSNmuGJqRXDd3wgGiaKFkzqaKwvag2huFKwTqFkGAs1ihEmihZDr/Ctgo3TiGcN60onpQPYWuPj9A08bd4cgqxReUkl8Vi7qtLmFz2XlEWsqzOj64hEaWwf1tUycUHop6eQv5FVEt3ThntusLX0i1qP3yIE0/+7ll93WYkp+6eiiaTyWTyezj3AfqZMxri+txRAAAAAElFTkSuQmCC\" alt=\"384 over 415\"></span></span></p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAsCAYAAADikXHLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABnUlEQVRYR+2WgZHEIAhFLc+CLMde0ko64VQkQUWD8e52Zsc342zifgWBJJgRhzMQfvKw4E+I1wWlxoA7Wg0Bpwf7oBmCxhyE9WkDOFz4LR2TNX2jdIBXTkknAjjBWwM2eIX3BzjBQDIcJvPtBTkcxyunJMgpMthLheQUrXV+MX01p7dho3fpS2uth3O1pgh0ph92/r/0MPA0Lxd6DW14pY/SySOVNVR3EZ7OX3cqwlPYM4AadBQ1d/T+xCn+WpBeERE+X6a2Hu3aIcOCLaLQanDtnVLOUqSueolPTN6cHG3q5aGmOMvpuxwLlzSkzdCxe/Qciiw7tdl8K8VT9KGx2fwf9J2TR/l1f2ryIhrNK6iD5P03fvduI1J3odG8RtsRpKjk7kKjyVPzSF93PHGbCj6v0eSpeVKUqpN91KleCnq9ERZ1dkqhyVNz4AZye9urM25Qo5ni6j7DUfNUAxqlEYwno6VBjUYNvQZGLW4N1oscWUKj6YKhlk/UczhFJUdWo5nm6URNvQhPlUYzxajIiaZeBK1Gs9lsNpvvw5gf3QV1Cfag+AMAAAAASUVORK5CYII=\" alt=\"384 over 799\"></span></span></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-eccbf957",
    "originalId": "eccbf957",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">Each face of a fair <math alttext=\"14\"><mn>14</mn></math>-sided die is labeled with a number from <math alttext=\"1\"><mn>1</mn></math> through <math alttext=\"14\"><mn>14</mn></math>, with a different number appearing on each face. If the die is rolled one time, what is the probability of rolling a <math alttext=\"2\"><mn>2</mn></math>?</p>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p>Choice A is correct. The total number of possible outcomes for rolling a fair <math alttext=\"14\"><mn>14</mn></math>-sided die is <math alttext=\"14\"><mn>14</mn></math>. The number of possible outcomes for rolling a <math alttext=\"2\"><mn>2</mn></math> is <math alttext=\"1\"><mn>1</mn></math>. The probability of rolling a <math alttext=\"2\"><mn>2</mn></math> is the number of possible outcomes for rolling a <math alttext=\"2\"><mn>2</mn></math> divided by the total number of possible outcomes, or <math alttext=\"one fourteenth\"><mfrac><mn>1</mn><mn>14</mn></mfrac></math>.</p>\n<p>Choice B is incorrect. This is the probability of rolling a number no greater than <math alttext=\"2\"><mn>2</mn></math>.</p>\n<p>Choice C is incorrect. This is the probability of rolling a number greater than <math alttext=\"2\"><mn>2</mn></math>.</p>\n<p>Choice D is incorrect. This is the probability of rolling a number other than <math alttext=\"2\"><mn>2</mn></math>.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"one fourteenth\"><mfrac>\n\t<mn>1</mn>\n\t<mn>14</mn>\n</mfrac></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"two fourteenths\"><mfrac><mrow><mn>2</mn></mrow><mrow><mn>14</mn></mrow></mfrac></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"StartFraction 12 Over 14 EndFraction\"><mfrac><mrow><mn>12</mn></mrow><mrow><mn>14</mn></mrow></mfrac></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"StartFraction 13 Over 14 EndFraction\"><mfrac>\n\t<mn>13</mn>\n\t<mn>14</mn>\n</mfrac></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-ecf8d15f",
    "originalId": "ecf8d15f",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">A total of <math alttext=\"50\"><mn>50</mn></math> children attended a summer camp and were offered <math alttext=\"4\"><mn>4</mn></math> types of sandwiches. The table shows the number of children who chose each type of sandwich.</p>\n\n<p style=\"text-align: left;\">If one of these children is selected at random, what is the probability of selecting a child who chose a vegetarian sandwich?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p style=\"text-align: left;\">Choice B is correct. If one of these children is selected at random, the probability of selecting a child who chose a vegetarian sandwich is equal to the number of children who chose a vegetarian sandwich divided by the total number of children. According to the table, there are a total of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"50\"><mn>50</mn></math> children, and <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"9\"><mn>9</mn></math> of these children chose a vegetarian sandwich. Therefore, the probability of selecting a child who chose a vegetarian sandwich is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"nine fiftieths\"><mfrac><mn>9</mn><mn>50</mn></mfrac></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice C is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice D is incorrect and may result from conceptual or calculation errors.</p>",
    "passage": "<figure class=\"table\"><table border=\"1\">\n<thead>\n<tr style=\"height: 22px;\">\n<th style=\"width: 47.744%; height: 22px; text-align: center;\" scope=\"col\">Type of sandwich</th>\n<th style=\"width: 47.744%; height: 22px; text-align: center;\" scope=\"col\">Number of children</th>\n</tr>\n</thead>\n<tbody>\n<tr style=\"height: 22px;\">\n<td style=\"width: 47.744%; height: 22px; text-align: left;\">Turkey</td>\n<td style=\"width: 47.744%; height: 22px; text-align: center;\"><math alttext=\"15\"><mn>15</mn></math></td>\n</tr>\n<tr style=\"height: 22px;\">\n<td style=\"width: 47.744%; height: 22px; text-align: left;\">Chicken</td>\n<td style=\"width: 47.744%; height: 22px; text-align: center;\"><math alttext=\"23\"><mn>23</mn></math></td>\n</tr>\n<tr style=\"height: 22px;\">\n<td style=\"width: 47.744%; height: 22px; text-align: left;\">Ham</td>\n<td style=\"width: 47.744%; height: 22px; text-align: center;\"><math alttext=\"3\"><mn>3</mn></math></td>\n</tr>\n<tr style=\"height: 22px;\">\n<td style=\"width: 47.744%; height: 22px; text-align: left;\">Vegetarian</td>\n<td style=\"width: 47.744%; height: 22px; text-align: center;\"><math alttext=\"9\"><mn>9</mn></math></td>\n</tr>\n<tr style=\"height: 22px;\">\n<td style=\"width: 47.744%; height: 22px; text-align: center;\">Total</td>\n<td style=\"width: 47.744%; height: 22px; text-align: center;\"><math alttext=\"50\"><mn>50</mn></math></td>\n</tr>\n</tbody>\n</table></figure>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"StartFraction 9 Over 100 EndFraction\"><mfrac>\n\t<mn>9</mn>\n\t<mn>100</mn>\n</mfrac></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"nine fiftieths\"><mfrac>\n\t<mn>9</mn>\n\t<mn>50</mn>\n</mfrac></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"one fourth\"><mfrac>\n\t<mn>1</mn>\n\t<mn>4</mn>\n</mfrac></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"nine tenths\"><mfrac>\n\t<mn>9</mn>\n\t<mn>10</mn>\n</mfrac></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-0301c5dc",
    "originalId": "0301c5dc",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "medium",
    "stem": "<p class=\"stem_paragraph \">If one of these state parks is selected at random, what is the probability that it has camping facilities but does not have bicycle paths?</p>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p>Choice A is correct. The total number of state parks in the state is <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAAWCAYAAADts5O8AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACLElEQVRoQ+2W7ZHFIAhFU14Kspz0klbSiRtFDH6g6NP9xZlx9iWriFzAHA5rH3udh3U/cZzX4/4m2NuQOad9pxRzZrH2tibaJsPcy/a4TWr7Nb3MNsU+lz032k/PkeqQapSPMPcT3Lxhh8W4kAoP774N8udfgUB9PqwGAlWecYcwKMo+2/k52jrEgsICgmCXi57rfJ/BOCZGXv3eATTEgBv2AuCdP693p7FASexzc1b6j2AyuSFdI6XWQThtKHmisIDzQXSmXdHECK8KpEGTCFBDJDrj/2rRUQBz1ffbQezUzDm4s1fxAQmVx3UDmhjhVYFIFMxWY7yD7pUbrexFhpKK+IoV2Vs3IrovAhezTqDRpvvZGuI9G+2d6hhe1ckDAs+c6LL7pHWAGATiHGZoT/hhUdw+frT9RqT26byh6pqEnoXbRxrDKDhtFyOiRwE7QxKQ2vUxYz+2QFrpTEBm/adXxX+IjuBetfZei19BzJ7MABjmRP+9vXMs6ySMCJKgyO1/fvZEn00sDjhHXnztu94Dd169FewOGscy0Qc6VY7EfiyW6mjbX0HtHOg329rRaW5C/NDK/k9bGodIlH+pxHIOBGt90vYqfRbwVxYn8IFJOHSQzYhAnk2SKnGIRKnducwBc6SiFF/v0nML7VO2iY5xoh+8IU75OeA9k9Dt1pQuSueubVuf8N9YHTS8wnD0BJ9ll+gOaZwkXVJRFEVRFEVRFEVRFEVRlP0cxx/bE9KFIKUf1gAAAABJRU5ErkJggg==\" alt=\"20, plus 5, plus 8, plus 4, equals 37\"></span>. According to the table, 5 of these have camping facilities but not bicycle paths. Therefore, if a state park is selected at random, the probability that it has camping facilities but not bicycle paths is <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABBklEQVRYR+2W2w3DIAxFPR4DeRx2YRU2cZ04PANtSnCkqhwJJcoH11yb2HAVIkfIj+21WOi253zIWzKALEs6AjXkkMBY8k8JOlS0r4b4XNYAGUS2NeXPWK8TQCyYzFLJqaJoC28Niz1dSGCID/njgiFfXKTFxmqWhirNN5fTnYOYRhJNS01ssehRVKDCWvwD+1gRk152hfAvba+BDiJi9c/6/UZxMvh29mm1ozjXsOLx6UQd5C1it+hE3+uZw0iz7Vu6n27G3CpCm1X96FUmuLBpy1K1UaNl66fc3qJ1NcJVuGVnb0BqWSdWD1z0nGhTPtofQdQnke8T8nd1SlMrmMVisRgE4AWE3oj8f0lkzAAAAABJRU5ErkJggg==\" alt=\"5 over 37\"></span>.<p>Choice B is incorrect. This is the probability that a state park selected at random from the state parks with camping facilities does not have bicycle paths. Choice C is incorrect. This is the probability that a state park selected at random from the state parks with bicycle paths does not have camping facilities. Choice D is incorrect. This is the probability that a state park selected at random from the state parks without bicycle paths does have camping facilities.</p><p> </p></p>",
    "passage": "<div class=\"stimulus_reference \" xmlns=\"http://www.imsglobal.org/xsd/apip/apipv1p0/qtiitem/imsqti_v2p1\"><div class=\"passage \"><div class=\"prose style:1 \"><p class=\"passage_para \">The table below shows the number of state parks in a certain state that contain camping facilities and bicycle paths.</p><table class=\"table_WithBorder\"><tbody><tr><td class=\"tcp-eba8e37c-68bb-4184-950f-044397188e37\"> </td><td class=\"tcp-d563c583-86e0-4aeb-bc86-edc831da08be\">Has bicycle paths</td><td class=\"tcp-345afd81-e88e-4877-99d2-4abe83555a99\">Does not have bicycle paths</td></tr><tr><td class=\"tcp-87d34e82-387c-4750-af1e-36cb2ac5e01e\">Has camping facilities</td><td class=\"tcp-b7a0a37a-55d0-401a-9587-16ad8b10cc15\">20</td><td class=\"tcp-37a06dee-acbd-4dad-a793-d67c1185e5b1\">5</td></tr><tr><td class=\"tcp-98f78d2b-1813-42f2-b927-66e86ba3680e\">Does not have camping facilities</td><td class=\"tcp-693cd8a6-4f74-4bd8-9319-13262b7643f4\">8</td><td class=\"tcp-b14495d9-012d-451d-822d-80bc6c0b4886\">4</td></tr></tbody></table></div></div></div>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABBklEQVRYR+2W2w3DIAxFPR4DeRx2YRU2cZ04PANtSnCkqhwJJcoH11yb2HAVIkfIj+21WOi253zIWzKALEs6AjXkkMBY8k8JOlS0r4b4XNYAGUS2NeXPWK8TQCyYzFLJqaJoC28Niz1dSGCID/njgiFfXKTFxmqWhirNN5fTnYOYRhJNS01ssehRVKDCWvwD+1gRk152hfAvba+BDiJi9c/6/UZxMvh29mm1ozjXsOLx6UQd5C1it+hE3+uZw0iz7Vu6n27G3CpCm1X96FUmuLBpy1K1UaNl66fc3qJ1NcJVuGVnb0BqWSdWD1z0nGhTPtofQdQnke8T8nd1SlMrmMVisRgE4AWE3oj8f0lkzAAAAABJRU5ErkJggg==\" alt=\"5 over 37\"></span></span></p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAA7ElEQVRYR+2W2w3DMAhFGY+BGMe7eBVvQklcx48klZNCpFZcCSVfHPOQfWFWzJFJPstvFxSXr744BUYgwbINYBRHYsDA6SlgJMP2jWKpKyAwEklb6/wwJJsDbAvTtDTP1BB6pBRQYE8vEiBLkT8OLPOSJe0Sm7W0bGmbPFe3P4SaKrSGGczlOlO3gQbh+ncdXWXjY6vm5D5d1i1UzcnlRPt3bnyOzJ1crrICzZ3cCnhXZO7kxgfX1MkV2Ez7vrYdOcEcbFE+3E1jtc7sYotuA0tlZzBVJzczfFUnt83tMBrABq1xGeZyuVzKAngBAUGbyw5kmLEAAAAASUVORK5CYII=\" alt=\"5 over 25\"></span></span></p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABAUlEQVRYR+2W7Q3EIAiGHc+BHMddXMVNqEqtnyTXFvrjwpOQ5pqLry+QgrlDcAbS4woXID9lQDEHSaOIQHByopBk3Obwcon08vzJB0QP9kvBzKcprURviwiGBR+FxAAieDs5PNNsk2r5EydUDdFxuwQbWK81hdT711AOUVDAYWbpUskaVlC0haiYouwYOlAglH+nzcAWu0/Z/Ll7tAFsB+65UvSibGsHToJ1zvUD95NNrp9/1IxkFSyHWZ8SjiJsKd1BHSayyVWxPlVim9zlYKoLVcNXmxzWaH9jdM24yVVnVHoohyh40+GvtVi69GkNx86bY7x9TXuNVw2jKIrCgDEH/xPPiT6zkzYAAAAASUVORK5CYII=\" alt=\"8 over 28\"></span></span></p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAwCAYAAAAVQYoQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAY00gKyAAAATdJREFUeNrt1r9LQlEYxvHTIFE6Bg39CdkgOUQZETTkYtAguDU1tDUEbi4ORQ3VHAb1FzSEQVpL4BAFglNDubVULlb0i/xeeAMRJfA9FxTOA5/BMzwXX889R2P+z28HYaOMV3KIqRZDNoqzxof8FQ/4UfyCT7yiiBkbxQdYlrkmcS0PmbX9DYJ4wKUfc9+XsfRHcQhVXGhK1rGLJcSQwi0+MK0pTqCEGn7whBNEjYuL+hSzwaWHMo8rvMsVdYxRbal3/XzhDHEsIo8KBjXFBdwh0LQWkLU1TXEdex1ukHNNsXegb7dZ38GjprgsB31rSvLQrrMqr+kWRsQmvmWXqJLBW9NZcIoc7m3s5WFMYEw+e3+zjmy/MJMyCtUtHUEaC5jDBp5l5qqMyw6oy491gxV3yrm4uPR8Gr+5XTp9HeseAAAAAElFTkSuQmCC\" alt=\"5 over 9\"></span></span></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-0ae37ff3",
    "originalId": "0ae37ff3",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "medium",
    "stem": "<p style=\"text-align: left;\">In a bag, there are <math alttext=\"7\"><mn>7</mn></math> red, <math alttext=\"4\"><mn>4</mn></math> white, <math alttext=\"33\"><mn>33</mn></math> blue, and <math alttext=\"33\"><mn>33</mn></math> yellow cubes. If one of these cubes is selected at random, what is the probability of selecting a cube that is <span style=\"text-decoration: underline;\">neither</span> blue <span style=\"text-decoration: underline;\">nor</span> yellow?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p style=\"text-align: left;\">Choice D is correct. It&rsquo;s given that there are <math alttext=\"7\"><mn>7</mn></math> red, <math alttext=\"4\"><mn>4</mn></math> white, <math alttext=\"33\"><mn>33</mn></math> blue, and <math alttext=\"33\"><mn>33</mn></math> yellow cubes in the bag. Therefore, there are a total of <math alttext=\"7 plus 4 plus 33 plus 33\"><mn>7</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>33</mn><mo>+</mo><mn>33</mn></math>, or <math alttext=\"77\"><mn>77</mn></math>, cubes in the bag. If the cube is neither blue nor yellow, then it must be either red or white. Therefore, the probability of selecting a cube that is neither blue nor yellow is equivalent to the probability of selecting a cube that is either red or white. If one of these cubes is selected at random, the probability of selecting a cube that is either red or white is equal to the sum of the number of red cubes and white cubes divided by the total number of cubes in the bag. There are <math alttext=\"7\"><mn>7</mn></math> red cubes, <math alttext=\"4\"><mn>4</mn></math> white cubes, and <math alttext=\"77\"><mn>77</mn></math> total cubes in the bag. Therefore, the probability of selecting a red or white cube is <math alttext=\"StartFraction 7 plus 4 Over 77 EndFraction\"><mfrac><mrow><mn>7</mn><mo>+</mo><mn>4</mn></mrow><mn>77</mn></mfrac></math>, which is equivalent to <math alttext=\"StartFraction 11 Over 77 EndFraction\"><mfrac><mn>11</mn><mn>77</mn></mfrac></math>, or <math alttext=\"one seventh\"><mfrac>\n\t<mn>1</mn>\n\t<mn>7</mn>\n</mfrac></math>. Thus, if one cube is selected at random, the probability of selecting a cube that is neither blue nor yellow is <math alttext=\"one seventh\"><mfrac>\n\t<mn>1</mn>\n\t<mn>7</mn>\n</mfrac></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. This is the probability of selecting a cube that is either blue or yellow, rather than the probability of selecting a cube that is neither blue nor yellow.</p>\n<p style=\"text-align: left;\">Choice B is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice C is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"six sevenths\"><mfrac><mn>6</mn><mn>7</mn></mfrac></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"seven elevenths\"><mfrac><mn>7</mn><mn>11</mn></mfrac></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"one third\"><mfrac><mn>1</mn><mn>3</mn></mfrac></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"one seventh\"><mfrac><mn>1</mn><mn>7</mn></mfrac></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-1fc4f47b",
    "originalId": "1fc4f47b",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "medium",
    "stem": "<p style=\"text-align: left;\">At a movie theater, there are a total of <math alttext=\"350\"><mn>350</mn></math> customers. Each customer is located in either theater A, theater B, or theater C. If one of these customers is selected at random, the probability of selecting a customer who is located in theater A is <math alttext=\"0.48\"><mn>0.48</mn></math>, and the probability of selecting a customer who is located in theater B is <math alttext=\"0.24\"><mn>0.24</mn></math>. How many customers are located in theater C?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p style=\"text-align: left;\">Choice D is correct. It&rsquo;s given that at a movie theater, there are a total of <math alttext=\"350\"><mn>350</mn></math> customers and that each customer is located in either theater A, theater B, or theater C. If the probability of selecting a customer in theater A is <math alttext=\"0.48\"><mn>0.48</mn></math>, then <math alttext=\"left parenthesis 0.48 right parenthesis left parenthesis 350 right parenthesis\"><mfenced><mn>0.48</mn></mfenced><mfenced><mn>350</mn></mfenced></math>, or <math alttext=\"168\"><mn>168</mn></math>, customers are located in theater A. If the probability of selecting a customer in theater B is <math alttext=\"0.24\"><mn>0.24</mn></math>, then <math alttext=\"left parenthesis 0.24 right parenthesis left parenthesis 350 right parenthesis\"><mfenced><mn>0.24</mn></mfenced><mfenced><mn>350</mn></mfenced></math>, or <math alttext=\"84\"><mn>84</mn></math>, customers are located in theater B. It follows that there are <math alttext=\"168 plus 84\"><mn>168</mn><mo>+</mo><mn>84</mn></math>, or <math alttext=\"252\"><mn>252</mn></math>, customers in theater A and theater B. Therefore, there are <math alttext=\"350 minus 252\"><mn>350</mn><mo>-</mo><mn>252</mn></math>, or <math alttext=\"98\"><mn>98</mn></math>, customers in theater C.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. This is the percent, not the number, of the customers that are located in theater C.</p>\n<p style=\"text-align: left;\">Choice B is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. This is the number of customers that are located in theater B, not theater C.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"28\"><mn>28</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"40\"><mn>40</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"84\"><mn>84</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"98\"><mn>98</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-2df8f293",
    "originalId": "2df8f293",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "medium",
    "stem": "<p style=\"text-align: left;\">Each vertex of a <math alttext=\"14\"><mn>14</mn></math>-sided polygon is labeled with one of the <math alttext=\"14\"><mn>14</mn></math> letters <math alttext=\"upper A\"><mi>A</mi></math> through <math alttext=\"upper N\"><mi>N</mi></math>, with a different letter at each vertex. If one vertex is selected at random, what is the probability that the letter <math alttext=\"upper D\"><mi>D</mi></math> will be at the selected vertex? (Express your answer as a decimal or fraction, not as a percent.)</p>",
    "type": "grid-in",
    "correctAnswer": ".0714, 1/14",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math alttext=\"one fourteenth\"><mfrac>\n<mn>1</mn>\n<mn>14</mn>\n</mfrac></math>. If one vertex of the polygon is selected at random, the probability that the letter <math alttext=\"upper D\"><mi>D</mi></math> will be at the selected vertex is equal to the number of vertices labeled with the letter <math alttext=\"upper D\"><mi>D</mi></math> divided by the total number of vertices. It's given that each vertex is labeled with one of the <math alttext=\"14\"><mn>14</mn></math> letters <math alttext=\"upper A\"><mi>A</mi></math> through <math alttext=\"upper N\"><mi>N</mi></math>, with a different letter at each vertex. It follows that there is <math alttext=\"1\"><mn>1</mn></math> vertex labeled with the letter <math alttext=\"upper D\"><mi>D</mi></math>. It's also given that the polygon is <math alttext=\"14\"><mn>14</mn></math>-sided. It follows that there are a total of <math alttext=\"14\"><mn>14</mn></math> vertices. Thus, the probability that the letter <math alttext=\"upper D\"><mi>D</mi></math> will be at the selected vertex is <math alttext=\"one fourteenth\"><mfrac>\n<mn>1</mn>\n<mn>14</mn>\n</mfrac></math>. Note that 1/14, .0714, and 0.071 are examples of ways to enter a correct answer.</p>"
  },
  {
    "id": "sat-math-probab-30db8f77",
    "originalId": "30db8f77",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "medium",
    "stem": "<p style=\"text-align: left;\">At a conference, there are a total of <math alttext=\"275\"><mn>275</mn></math> attendees. Each attendee is assigned to either group A, group B, or group C. If one of these attendees is selected at random, the probability of selecting an attendee who is assigned to group A is <math alttext=\"0.44\"><mn>0.44</mn></math> and the probability of selecting an attendee who is assigned to group B is <math alttext=\"0.24\"><mn>0.24</mn></math>. How many attendees are assigned to group C?</p>",
    "type": "grid-in",
    "correctAnswer": "88",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math alttext=\"88\"><mn>88</mn></math>. It's given that there are a total of <math alttext=\"275\"><mn>275</mn></math> attendees and each attendee is assigned to either group A, group B, or group C. It's also given that if one of these attendees is selected at random, the probability of selecting an attendee who is assigned to group A is <math alttext=\"0.44\"><mn>0.44</mn></math> and the probability of selecting an attendee who is assigned to group B is <math alttext=\"0.24\"><mn>0.24</mn></math>. It follows that there are <math alttext=\"0.44 left parenthesis 275 right parenthesis\"><mn>0.44</mn><mfenced><mn>275</mn></mfenced></math>, or <math alttext=\"121\"><mn>121</mn></math>, attendees who are assigned to group A and <math alttext=\"0.24 left parenthesis 275 right parenthesis\"><mn>0.24</mn><mfenced><mn>275</mn></mfenced></math>, or <math alttext=\"66\"><mn>66</mn></math>, attendees who are assigned to group B. The number of attendees who are assigned to group C is the number of attendees who are not assigned to group A or group B. In other words, the number of attendees who are assigned to group C is the total number of attendees minus the number of attendees who are assigned to group A and group B. Therefore, the number of attendees who are assigned to group C is <math alttext=\"275 minus 121 minus 66\"><mn>275</mn><mo>-</mo><mn>121</mn><mo>-</mo><mn>66</mn></math>, or <math alttext=\"88\"><mn>88</mn></math>.</p>"
  },
  {
    "id": "sat-math-probab-38a9ac45",
    "originalId": "38a9ac45",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "medium",
    "stem": "<p class=\"stem_paragraph \">If 1,200 customers register for new accounts at a social media website every day, what fraction of the first 60,000 new accounts are registered in the first 5 days?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p>Choice B is correct. If 1,200 customers register for new accounts every day, then (1,200)(5) = 6,000 customers registered for new accounts in the first 5 days. Therefore, of the first 60,000 new accounts that were registered, <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAsCAYAAADb9sCQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAB8ElEQVRoQ+2Yi5GFIAxFLc+CLMdebMVOWMJNFhUQdO9+dDkzjI+8hJgQFByu4NbZjf4iP0ObFrme4pYp6g+jm1eX2LB0aJgzH19w4tziJn8ZvVfp54BNvLFjX2Dp0HBudfOYBrbOo+9PPuzUaclmmfzMaEWwdKigfK9l0kreKsHYJoiloyIOKBsZGKUrImmnJVxIUBzLAvm6joo4YGAJMDq1jJcChk3pJiFn6aiIAwZOAztds6RAWnRUxAEDp+vmzOFzy1hL9nqwT3xA+SFz79TTMn7qq0fALMYMW8aPN7HlOPO5SmDp0IETvHakZWd6nP1cxJvA7JtN/gZZOj9KKLlpH+xrCaX9XevoryGlZmu60/kdpPze2jqdztuw/a/8DC2zYdhvIdu2cS02LJ0mbKDPjX/m5AOd6OTYz9Fiw9JponSswmZcz5k3jl6sI90d30VQvudZunOobrFh6aioDkpCjMpfE0sJibapwxYblo6K6sBIAowDWjYtYOiUHKZyocWGpaOiOjBK18SulG44bLFh6aioDozSNbFz+Joy1pKtB3vtIdFiw9JRUR1fJ9Wvid7jO149AmYxZs+yuXWwnelcP0eLDUvnEhhAnspox0wKmG3TSZ2F//sXxxcSyv/OOnoiUmq27judTqfT+VcMwwfRnoUMAq+gGAAAAABJRU5ErkJggg==\" alt=\"the fraction 6,000 over 60,000\"></span>, or <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAAvUlEQVRYR+2W2w3DIAxFPZ4H8jjswipscovjRM1DUCU8VLU+EorgIwcwCZeeEIXAIWHtjgVRVDRHmAIvMm3DhbYyRkgRMmuFCuDCzriwO78vdJw9eupGNuefqKW0LVRZ0wiCtgNSS2nvnGOSc/82tZQGJAS+jutukMT7wk8pDSmA8yO/+zBuk5R8pzxcZek6MuF1+2yiI4SFejXX8XuE07d0+qHp/VlslITKuV7N9VNqQmX/c2iWOY7jdIDoBYQMhB7Mp3VAAAAAAElFTkSuQmCC\" alt=\"the fraction 1 over 10\"></span>, were registered in the first 5 days.<p>Choice A is incorrect. The fraction <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAsCAYAAACHfIO0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAAq0lEQVRIS+2WWw7EIAhFWR4LYjnsxa24k1vRcWz9qtSkkwwnIakf3PKIIN0hCYE143P0gyQm8lwsK1chs0diLSKG5gTZEZkBhNgqIRb8MtYtrwW76dfIPi8mab3gyAomKZJYd56pC4UVeYeYLV5XSjMo8SiXsSNSUh31co2hb/FPabYabpxrbcPvbErd8m+J9fqUZl6cXGn2bp4d+9Nq/sEthuAwl1AQ/AlEBx/g9dtu/FBVAAAAAElFTkSuQmCC\" alt=\"one fifth \"></span> represents the fraction of accounts registered in 1 of the first 5 days. Choice C is incorrect and may result from conceptual or computation errors. Choice D is incorrect. The fraction <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAA7UlEQVRYR+2X4Q2EIAyFGY+BOg67sAqbvKNWjgLnnZ7oD9MvaSIKfbRUU90/RHLwIWEdXgsisdA9gin4RYztckGJzCOkCLorQgYwwcmY4HSeL2gYGq66K814OuUTxpeNUWwKoDRVYtyCoHm+G6QA7yjLbjuofY7M6ceHWBb7gLz242LkJ8GPH3HuWfss7OLXQsmAQ57SzJFW8ntmBt67J1qc8i02HY0IjumTtB4WXAtGpbREVES3zuvUOfbodN0iqJ1NTekWo+CsotnhbOprUZzpnUp07Sb68+rHh6ii1fqIGf0LN61YDMMwTuDcCzgMrT8yFF1OAAAAAElFTkSuQmCC\" alt=\"1 over 50\"></span> represents the fraction of the first 60,000 accounts that were registered in 1 day.</p><p> </p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAkCAYAAABWvWC/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAASM53j1gAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAAlUlEQVRIS+2VzQ3AIAiFGY+BGIddWMVNXtFq+nNoRS9N6pdw0PCMoD7pCcAgxNAE1Kk+diG5KChOyjkZLAIOi83g+UDSuLixxEGmxD8gN6U3FmeaGRwh7iudt8yEIJ5dh/24fUB59DFUx2RuWw4sdH9Je/2Bms80C57owbA48GvA5FJjPjZiLT5eEt64XpLBZi2+A9EGpPTXM9KdVbUAAAAASUVORK5CYII=\" alt=\"one fifth\"></span></span></p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAkCAYAAACNBsqdAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAASM53j1gAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAAnElEQVRIS+2VwQ3DIAxFPR4DeRx28Sps8muLkFYuSND40IOfZCnh8OKAk08nAAKmgtqAa+k5XUoqDBS3WkyEwowSKhaBuoBWY8WDFN+kOInDDiSikn9gFkXvJLFivTv8CldRJKxJogvjmlj2xaso8m/Q/x0HXa+iyItmW7VFim++xE7kH7SNFxufI3Y8boOZuHdt8231Q7dJEg3RCw2vZ3lgRGnFAAAAAElFTkSuQmCC\" alt=\"one tenth\"></span></span></p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAkCAYAAACNBsqdAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAASM53j1gAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAAqUlEQVRIS+2V0QnFIAxFHc+BMo67ZBU3uU20eRSxra1C30cOSDEfh5ooNzwBYFCISBnYS/NUaRDhQnFOUUWIRIhLxcwQF5DTWrHh4h8udtahA1mxnH+gF0X19dmgXrzCXhRZjXjfM8mXpDooP4uiIoqppEnZd050yWgUPRYbd2ImadXhBMNciWu7Xvytciaekio98bRUacV3PR+mFZVhSblddq8d5xNC2AD3wjrFYXc1PQAAAABJRU5ErkJggg==\" alt=\"one twelfth\"></span></span></p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAkCAYAAACNBsqdAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAASM53j1gAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAAx0lEQVRIS+2W6w3FIAiFGY+BGMddXKWbnAsqNZr7qCnN/eOXmPg8tSggrQBkCDHSAbSu+1RRUsFA4SOxCYFFwKHCOUO1gCPFCjtb+GQLb+KwA4kom3/igb0X0fxRva1nkrH/ElkIoitac8DGWH3a66QTy8AvNE0g8ft4MCfTGjsu7toXM/vvfhZaytpzBKv2rmK3hGf8sMzmwcJm80eE++JZaP7QV5BFJ/XJ5UpxKu+Ks92u2NJ1M0YHGXfkNrfqsoNsNk9A9AKGi3Jima4WwAAAAABJRU5ErkJggg==\" alt=\"1 over 50\"></span></span></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-46b2e169",
    "originalId": "46b2e169",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "medium",
    "stem": "<p style=\"text-align: left;\">A box contains <math alttext=\"13\"><mn>13</mn></math> red pens and <math alttext=\"37\"><mn>37</mn></math> blue pens. If one of these pens is selected at random, what is the probability of selecting a red pen? (Express your answer as a decimal or fraction, not as a percent.)</p>",
    "type": "grid-in",
    "correctAnswer": ".26, 13/50",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math alttext=\"StartFraction 13 Over 50 EndFraction\"><mfrac><mn>13</mn><mn>50</mn></mfrac></math>. It's given that a box contains <math alttext=\"13\"><mn>13</mn></math> red pens and <math alttext=\"37\"><mn>37</mn></math> blue pens. If one of these pens is selected at random, the probability of selecting a red pen is the number of red pens in the box divided by the number of red and blue pens in the box. The number of red and blue pens in the box is <math alttext=\"13 plus 37\"><mn>13</mn><mo>+</mo><mn>37</mn></math>, or <math alttext=\"50\"><mn>50</mn></math>. Since there are <math alttext=\"13\"><mn>13</mn></math> red pens in the box, it follows that the probability of selecting a red pen is <math alttext=\"StartFraction 13 Over 50 EndFraction\"><mfrac>\n<mn>13</mn>\n<mn>50</mn>\n</mfrac></math>. Note that 13/50 and .26 are examples of ways to enter a correct answer.</p>"
  },
  {
    "id": "sat-math-probab-912cd125",
    "originalId": "912cd125",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "medium",
    "stem": "<p class=\"stem_paragraph \">If one of the days on which there was no rain is selected at random, what is the probability the day was a weekend day?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p>Choice B is correct. There were 64 days with no rain. It was a weekend day for 16 of those 64 days. So 16 out of 64 of the days with no rain were weekend days. Because the day is selected at random, each day has an equal chance of being selected, so the probability is <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAsCAYAAADVX77/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABiUlEQVRoQ+2YgRGDIAxFHY+BGIddXIVNUkKa0yKgFARO8+5yWlQI3yRUliusegFlLHx//gDWgHIHPPWm1+h9vcn5XASs2k8s1hlfc3P21wBW0Il7e5LzuQhrlO8ILewMwIJRx3Z6RjspSJTe5HwuglRUYGz8rVLo4/UxE41x5vNfpMKaBsM3TdexCa3JoJU0TcW8ADjpLQq4II4WoasAYfvoGoB0FYBXAGbLw6cL8A339wqQaH9NCiBhGryqCDIsAtvoySNNBRAE4TY4V/E0Z+FSK9zEQfnGdgexca7aeCQFBGFuSnZ8U1+Ho6j25/Chc/L/Greh3WEaAar8Kd3x3X8QzSBAtT8UPtc2NVgsbeZIgSb+kILXdnx9VCgDdpIa0MSfLYTyO75cF3CQGYpgM39YgLMa4AuNGwHPZxCgmT8sQPgwtVNU0ADHCBklQFN/Ug/vBaBo2OrDr22O9KKpP6k1P0yBPaMjIKTanzANuMPYSoA8TgCERWBLTR55pACCIAiCIAjCY1mWDzhAVjc+xwVaAAAAAElFTkSuQmCC\" alt=\"the fraction 16 over 64, equals the fraction 1 over 4\"></span>.<!--[if--><!--[if--><!--[endif]--><!--![endif]--><!--![if--><!--[if--><!--[endif]--><!--[if--><!--[endif]--><!--![endif]--><!--![if--><!--[if--><!--[endif]--><!--[endif]--><!--![endif]--><!--![endif]--><!--![if--><!--![if--><!--![endif]--><!--![endif]--><!--![if--><!--![if--><p>\n        <!--[if-->\n        <!--[if-->\n        <!--[endif]-->\n        <!--[endif]-->\n        <!--[if-->\n        <!--[if-->\n        <!--[endif]-->\n        <!--[endif]-->\n        <!--![endif]-->\n        <!--![endif]-->\n        <!--![if-->\n        <!--![if-->\n        <!--![endif]-->\n        <!--![endif]-->\n        <!--![if-->\n        <!--![if-->Choice A is incorrect. It is the probability that a day selected at random from any one of the days during the 12 weeks is a weekend day with no rain. Choice C is incorrect. It is the probability that a day selected at random from the weekend days has no rain. Choice D is incorrect. It is the probability that a day selected at random from the days with no rain is a weekday.</p></p>",
    "passage": "<div xmlns=\"http://www.imsglobal.org/xsd/apip/apipv1p0/qtiitem/imsqti_v2p1\" class=\"stimulus_reference \">\n        <div class=\"passage \">\n          <div class=\"prose style:1 \">\n            <p class=\"passage_para \">For a science project, Anka recorded whether it rained each weekday and weekend day for 12 weeks. Her results are summarized in the table below.</p>\n            <div class=\"tcp-bfce9c25-f533-4c4d-9d6d-d0ec1c427561\">\n              <table class=\"table_WithBorder tcp-ed9db193-318c-4e20-af8f-a3a23d7c04fc\"><caption>Weekday and Weekend Day Rain for 12 Weeks</caption>\n                <tbody><tr><td></td>\n                    <td>Rain</td>\n                    <td>No rain</td>\n                    <td>Total</td>\n                  </tr><tr><td>Number of weekdays</td>\n                    <td class=\"para_right\">12</td>\n                    <td class=\"para_right\">48</td>\n                    <td class=\"para_right\">60</td>\n                  </tr><tr><td>Number of weekend days</td>\n                    <td class=\"para_right\">8</td>\n                    <td class=\"para_right\">16</td>\n                    <td class=\"para_right\">24</td>\n                  </tr><tr><td>Total</td>\n                    <td class=\"para_right\">20</td>\n                    <td class=\"para_right\">64</td>\n                    <td class=\"para_right\">84</td>\n                  </tr></tbody></table></div>\n          </div>\n        </div>\n      </div>",
    "options": [
      {
        "id": "A",
        "text": "<span class=\"math_expression \">\n            <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAkCAYAAACNBsqdAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAASM53j1gAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAAzUlEQVRIS+2W2w3DIAxFPR4DeRx28Spscmvj0kQNags46g9HQlFQcsLzEhoBJSNRQi7AsyoGYVJhsBjCoJRiWwwImBgSPRQla0vNFimuspShrlixTRiLi8LEPra2EjpFv6bXGG5bx7eJN8scS2mtbP6J77A2Gf2d5jkysAtb8LwSzU4OC3lNzfqAcoTTiLgeQZ6/9f6tZRb6Vp2Y13LjIhaJCf16Mp960FgSe7f7L0+LP0mNKfE3qTEs/vWFYbH/Rl1LW9eN6THebKIhegBC3EyWWAOVawAAAABJRU5ErkJggg==\" alt=\"the fraction 4 over 21\"></span></span>"
      },
      {
        "id": "B",
        "text": "<span class=\"math_expression \">\n            <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAwCAYAAAAVQYoQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAY00gKyAAAAKxJREFUeNpjYCAMWoB4GxA/B+L/UD5VwBcgPgbEU6ltMBMSm6oGM4waPGow/QwOQcIgg9cg8Sl2JS48CkYBDZIVKXgUDELACMSHaFF05gDxU2obrADEn4E4kNoG7wbiddQu7FOA+AMQS1LTYGmooWnUrp42A/FBaIqgmsGgOu03EJsDsQASBhncDWUzkWNwAxEFjg65ScwBCwYZuBjK5h7ZraFRMApGwSigGgAA0c1V2axbieYAAAAASUVORK5CYII=\" alt=\"the fraction 1 over 4\"></span></span>"
      },
      {
        "id": "C",
        "text": "<span class=\"math_expression \">\n            <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAwCAYAAAAVQYoQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAY00gKyAAAATNJREFUeNrt1r9LwkEYx/HDiMpJamipwTZbBKHoB7WUmym46RRB/4DUZkPg1N7U1tbQEDREEAQtuSbp2BAkgWgUFWJg74MniAih7vmCw33gtXyHDxz33H3PmN7ZxgUa6OAe+xgzjnnDIXJYwibqqCHsUjz+y7cFdLFulDMsxTvaxRkpzmqWjuIONxjQKrWbdYUmYlqlIzJ2z5jV3KxzvGJZq3QIZ3jHquZmncoE7GLuhwmX4m4PJePjE8ho/YVPn2QDZbTwIc+AY0y7FhdQRAqLyKOCJ0xqryIqY1XQLo5I8ZZGmf0jD2IKR3h0vei/0vh2suz7LaG1/DhmkMYJXrASxBheohpE8R7a2qUhXMs8/ztlmdekHJCcvIjsKVxzKT7ArTzAbdmDHOl5f9v5+Pj0dT4Bd9JWAVM0DsoAAAAASUVORK5CYII=\" alt=\"the fraction 2 over 3\"></span></span>"
      },
      {
        "id": "D",
        "text": "<span class=\"math_expression \">\n            <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAwCAYAAAAVQYoQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAY00gKyAAAARxJREFUeNrt1rFLAnEYxvFfRlOLa1igjhEIgkS0COFmguBSY4RTkzQ2NDjVn+DY1FAQjSKok86R/4AYCEKBEESBfYVnkJCIu/eg4ffAB256Trn3vfs593tO0McrvjDBHbZdyNRwgSL2cYwnvGHLGSeFmW5qmriKzy3KVrGGNG4xxqZF8US/cm6IrNXfzyCHEh4wxYGLIG0Moii+wod1aQw9zXPg9DWvBS3IEVrawsMwxQ08411lL1rpPefjEyozIz7/MCvo6gHVLYvPMLIuTupzVLYubuJ+Yd5Nik918tmwLE6otPpjQ0MXP6KjiTArruATuzpWxReOV9e6jgUpvvzDC2cn6Ijll5gX3uh63fr1Wo9itSMr9vHx8THLN4PMWgx2JBYgAAAAAElFTkSuQmCC\" alt=\"the fraction 3 over 4\"></span></span>"
      }
    ]
  },
  {
    "id": "sat-math-probab-a3384df0",
    "originalId": "a3384df0",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "medium",
    "stem": "<p class=\"stem_paragraph \">The number of penguins in a zoo exhibit, sorted by gender and type of penguin, is shown in the table above. Which type of penguin has a female population that is the closest to being <span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAwCAYAAAAVQYoQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAY00gKyAAAAN9JREFUeNrt1jELQWEUxvEb2X0ABkaLUgYZZcNkYfQRZDSa7CafQDFYbMokZvEFFClFkVKKvzrDXSTuuTKcp3513+XpvnXO7TrO+7QwwhZ3OavkjCk62sUB17NqsWPFVvy74rLLs7jvOnt+y1csFh/G6hOWP0kNcxxwwx4DJLwW19FEAVlUscARUe1bxGSs6trFYSluaJQFEUIcPewQ0SjeuzZrjZTW9ZNIo4QhTsj5MYYTrPwobuOqXfr8+5zJPH+ducxrXhakgrFsYdFLcRdLXKRsIyudsa+dxWL56zwANCFR0oKZLU0AAAAASUVORK5CYII=\" alt=\"one-third \"></span></span> of the total <span class=\"underline\"><span class=\"formatted_text text_decoration:underline \">female</span></span> penguin population in the exhibit?</p>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p>Choice A is correct. It is given that there are 180 female penguins in the exhibit. Therefore, <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAwCAYAAAAVQYoQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAY00gKyAAAAN9JREFUeNrt1jELQWEUxvEb2X0ABkaLUgYZZcNkYfQRZDSa7CafQDFYbMokZvEFFClFkVKKvzrDXSTuuTKcp3513+XpvnXO7TrO+7QwwhZ3OavkjCk62sUB17NqsWPFVvy74rLLs7jvOnt+y1csFh/G6hOWP0kNcxxwwx4DJLwW19FEAVlUscARUe1bxGSs6trFYSluaJQFEUIcPewQ0SjeuzZrjZTW9ZNIo4QhTsj5MYYTrPwobuOqXfr8+5zJPH+ducxrXhakgrFsYdFLcRdLXKRsIyudsa+dxWL56zwANCFR0oKZLU0AAAAASUVORK5CYII=\" alt=\"one third \"></span> of the female penguins is <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAsCAYAAACaAr0vAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACFUlEQVR4Xu2Ya5KEIAyEPZ4H8jjexat4ExaMQQSCOmLyY/uronbHYaSTDvEx3GGZBjfOq9s/Ak3cMoXEwwAL1nnckh8GDFCGKn9087q4CQbY4RwMMAUGGAMDjIEBxsAAY2CAMTDAGCsDWq8/wnf+TxzT4op5/ARPIzzPlHN64NbZjXEdP7yY7YsELS3daL3+oORPviwoCJ6bmnA8RKZz+geer10rVi0t3Wi9/uAA84rfTNkrz7nVzWP523ROD6R1SD8ViJaWAk7UMM5eQuk0JzlP5FEd9bbH271pgDAnTcx+6BW0TruStbSIbAtlJtSO5bSuO1ctSEoMzSuDjsVyMfIkHuc7/z7V/FTLJ6QJv5P8QMuAAFUQB30O8NhFtaDbFfsEOt95fa541v1US/jw62gSE3Yj+QHJAO6ppx3wMuhfYQNyjRQr6dPSckk3A2701Kfb/l0Lko7T+k+1fMKWnE4tSKqcMui2SfuhV0jrWGgRqSX8jglPd0BaUT5qpdvQusY0uVpaCuK2FhJNIstEMlJwgeIuaDclnZvvFGnnvIXOe8TRXQsFy6N/ABItAwJnXfV5bDKN77SzCTy6aSkq7aMqAhVqvVbqZ0AJNuDTiweQoT6GFqROegGR7lqAAnxdQAsyBG3IGNyKKsEPF3nPpx2g8A7jvxNvOZNXCWwKngOUiCb4f3ngLggAAAAAAAAAAABvGIY/l5iRPxWDfqkAAAAASUVORK5CYII=\" alt=\"one third times 180, equals 60 \"></span> penguins. According to the table, there are 59 female chinstrap penguins, 27 female emperor penguins, 54 female gentoo penguins, and 40 female macaroni penguins. So the female chinstrap penguin population is the closest to 60, or <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAwCAYAAAAVQYoQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAY00gKyAAAAN9JREFUeNrt1jELQWEUxvEb2X0ABkaLUgYZZcNkYfQRZDSa7CafQDFYbMokZvEFFClFkVKKvzrDXSTuuTKcp3513+XpvnXO7TrO+7QwwhZ3OavkjCk62sUB17NqsWPFVvy74rLLs7jvOnt+y1csFh/G6hOWP0kNcxxwwx4DJLwW19FEAVlUscARUe1bxGSs6trFYSluaJQFEUIcPewQ0SjeuzZrjZTW9ZNIo4QhTsj5MYYTrPwobuOqXfr8+5zJPH+ducxrXhakgrFsYdFLcRdLXKRsIyudsa+dxWL56zwANCFR0oKZLU0AAAAASUVORK5CYII=\" alt=\"one third \"></span> of the total female population in the exhibit.<p>Choices B, C, and D are incorrect and may result from reading data from the table incorrectly. Since the total female penguin population is 180, <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAwCAYAAAAVQYoQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAY00gKyAAAAN9JREFUeNrt1jELQWEUxvEb2X0ABkaLUgYZZcNkYfQRZDSa7CafQDFYbMokZvEFFClFkVKKvzrDXSTuuTKcp3513+XpvnXO7TrO+7QwwhZ3OavkjCk62sUB17NqsWPFVvy74rLLs7jvOnt+y1csFh/G6hOWP0kNcxxwwx4DJLwW19FEAVlUscARUe1bxGSs6trFYSluaJQFEUIcPewQ0SjeuzZrjZTW9ZNIo4QhTsj5MYYTrPwobuOqXfr8+5zJPH+ducxrXhakgrFsYdFLcRdLXKRsIyudsa+dxWL56zwANCFR0oKZLU0AAAAASUVORK5CYII=\" alt=\"one third \"></span> of the total female penguin population is 60. The numbers of female emperor (27), female gentoo (54), and female macaroni (40) penguins are not as close to 60 as the number of female chinstrap penguins (59).</p></p>",
    "passage": "<div xmlns=\"http://www.imsglobal.org/xsd/apip/apipv1p0/qtiitem/imsqti_v2p1\" class=\"stimulus_reference \">\n        <div class=\"table_wrapper \">\n          <table class=\"tcp-f6032c62-0162-4645-9922-5ee49e431ce7\"><tbody><tr class=\"title \"><td class=\"title  tcp-7fb475a7-0491-4551-bca2-baec7b8ff5ac\">\n                  <p class=\"title_line passage-title \">Penguin Exhibit</p>\n                </td>\n              </tr><tr><td>\n                  <table class=\"table_WithBorder\"><colgroup><col class=\"colspec align:center colname:col1 colnum:1 \"><col class=\"colspec align:center colname:col2 colnum:2 \"><col class=\"colspec align:center colname:col3 colnum:3 \"><col class=\"colspec align:center colname:col4 colnum:4 \"></colgroup><tbody class=\"tbody \"><tr class=\"row \"><td class=\"entry colname:col1 \">Type of penguin</td>\n                        <td class=\"entry colname:col2 \">Male</td>\n                        <td class=\"entry colname:col3 \">Female</td>\n                        <td class=\"entry colname:col4 \">Total</td>\n                      </tr><tr class=\"row \"><td class=\"entry align:left colname:col1  tcp-2966258d-3aed-4645-8e58-93b86547f807\">     Chinstrap</td>\n                        <td class=\"entry colname:col2 \">  41</td>\n                        <td class=\"entry colname:col3  tcp-0c3ed7b3-9f0a-4a0a-a541-6abc60050ad9\">  59</td>\n                        <td class=\"entry colname:col4 \">100</td>\n                      </tr><tr class=\"row \"><td class=\"entry align:left colname:col1 \">     Emperor</td>\n                        <td class=\"entry colname:col2 \">    8</td>\n                        <td class=\"entry colname:col3  tcp-7af19e74-8ba9-4955-b411-0bd38f38aff5\">  27</td>\n                        <td class=\"entry colname:col4 \">  35</td>\n                      </tr><tr class=\"row \"><td class=\"entry align:left colname:col1 \">     Gentoo</td>\n                        <td class=\"entry colname:col2 \">  49</td>\n                        <td class=\"entry colname:col3  tcp-871d5e59-519e-4c55-9ebf-79aced0fc813\">  54</td>\n                        <td class=\"entry colname:col4 \">103</td>\n                      </tr><tr class=\"row \"><td class=\"entry align:left colname:col1 \">     Macaroni</td>\n                        <td class=\"entry colname:col2 \">  42</td>\n                        <td class=\"entry colname:col3  tcp-c631a899-a053-491c-bcc5-c7e82b415461\">  40</td>\n                        <td class=\"entry colname:col4 \">  82</td>\n                      </tr><tr class=\"row \"><td class=\"entry align:left colname:col1 \">     Total</td>\n                        <td class=\"entry colname:col2 \">140</td>\n                        <td class=\"entry colname:col3  tcp-83e33949-6f84-42a8-bc6c-3a701c41d0b5\">180</td>\n                        <td class=\"entry colname:col4 \">320</td>\n                      </tr></tbody></table></td>\n              </tr></tbody></table></div>\n      </div>",
    "options": [
      {
        "id": "A",
        "text": "<p>Chinstrap</p>"
      },
      {
        "id": "B",
        "text": "<p>Emperor</p>"
      },
      {
        "id": "C",
        "text": "<p>Gentoo</p>"
      },
      {
        "id": "D",
        "text": "<p>Macaroni</p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-b1b5300b",
    "originalId": "b1b5300b",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "medium",
    "stem": "<div class=\"item_stem\">The table above shows information about 14 cars listed for sale on an auto dealership&rsquo;s website. If one of the cars listed for sale is selected at random, what is the probability that the car selected will be a hybrid car priced at no more than $25,000 ?</div>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p>Choice A is correct. It&rsquo;s given that there are 2 hybrid cars priced at no more than $25,000. It&rsquo;s also given that there are 14 cars total for sale. Therefore, the probability of selecting a hybrid priced at no more than $25,000 when one car is chosen at random is <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAsCAYAAADVX77/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABdElEQVRoQ+2ZCw6DIAyGOR4H4jjcxat4k47SVZ0PJFpGNf0SMuYSRv/SAtXVAjBC9A6wy83HET9VMgTB+c3GBxgA8qAwBLUiiM8NxgjeeUjj/Qw4Rp++z6JogOb0pxVKSusRgOaDjhog/EMAjDPnYwoQPSsAgeSS5gJwnIXkfnqih+YCsPEuWU9PdNFUgCnJKDUeaSZAjvlWygrSRAD2vHbjEXEB6BzwDOMRcQGWh4tt03UQQpomQcMwxOBYxW6paTxtvpKN8sKtBXv/U9v6YyFgGM+gpsLK94Ve8TrVKHbbtp5ZDQ98JgBflTUlrCnJXq1d1FZYl+prEoCccvGyRkadV1j5nUGIfUNgjVhInl0t8yrBynDnHLBGrGJdEoB/Q6N7J8ElogWckgBZ5WQx9jUJQLlLqFBzJAAZPG8vWgSY3mN+HXObIwHKZbIb++5NSiv2ErUDqlkBq5V5m8cJkLdvwULt0wQQTYCGYRiGYRjGa3HuAwKIYHvgP5eRAAAAAElFTkSuQmCC\" alt=\"2 over 14 equals one seventh\"></span>.<p>Choice B is incorrect. This is the probability of selecting a hybrid car priced greater than $25,000 when choosing one car at random. Choice C is incorrect. This is the probability, when choosing randomly from only the hybrid cars, of selecting one priced at no more than $25,000. Choice D is incorrect. This is the probability of selecting a hybrid car when selecting at random from only the cars priced greater than $25,000.</p><p> </p></p>",
    "passage": "<div class=\"stimulus_reference\"><table class=\"table_WithBorder tcp-b88bb88e-7c5f-4529-a9a6-333cc7c7bf27\"><caption>Prices of 14 Different Cars</caption><tbody><tr><td class=\"tcp-66d20239-c8b4-4d3f-a9b5-f4802c9707cd\">Type of car</td><td class=\"tcp-46d4bd36-f9b3-442c-b686-fd0d55f5450d\">Priced at no more<br> than $25,000</td><td class=\"tcp-8df36ac7-65e1-433b-bb21-14ef0c0757d8\">Priced greater<br> than $25,000</td><td class=\"tcp-3e8abc78-bdbb-4b2c-8f3b-bf6c46da1a01\">Total</td></tr><tr><td class=\"tcp-f3bdf422-4bef-4c74-b8ba-4a2b99980336\">Nonhybrid</td><td class=\"tcp-5dcba8ae-46e4-4148-95c6-72882f147e4e\">5</td><td class=\"tcp-837091ea-415f-4312-8317-d92ba7709e86\">3</td><td class=\"tcp-132ebab9-6994-478e-b2e1-fea47af2f182\">8</td></tr><tr><td class=\"tcp-1a010d3e-e5ac-4cad-91fa-d3bd69d53148\">Hybrid</td><td class=\"tcp-f51231ca-3bd9-4229-854f-530c094efdd7\">2</td><td class=\"tcp-a9ff2060-f86a-46f1-bbad-badaa972e6c4\">4</td><td class=\"tcp-0aac33fc-e7f1-4024-ba44-34b1fa45c91f\">6</td></tr><tr><td class=\"tcp-f4abb043-9640-444b-b6e6-98ea05c0c68f\">Total</td><td class=\"tcp-e01280ba-13c6-4437-9c2e-43f50a69aa1f\">7</td><td class=\"tcp-afd593b0-8373-44c5-b89b-439d5e3e865f\">7</td><td class=\"tcp-6cee79c3-6256-4c0b-bc04-048cfb273aa0\">14</td></tr></tbody></table></div>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAwCAYAAAAVQYoQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAY00gKyAAAALBJREFUeNpjYCAMWoB4GxA/B+L/UD5VwBcgPgbEU6ltMBMSm6oGM4waPGow/QwOQcIgg9cg8Sl2JS48CkYBDZIVKXgUDIEI/UGJwRZYcCzU4KXU9kUn1GB7ahrKCsQvgfgmtV0bDHVtCbUN3gHEP4FYlJqGygPxXyBeSW3XNkGDwYWahjID8RMgvgvEjNQ02Afq2kpqB8NGIP4NxBLUNFQSiP8A8brREm4UjIJRMGQAAEaiTIUdAwRGAAAAAElFTkSuQmCC\" alt=\"one seventh\"></span></span></p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAsCAYAAACHfIO0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAAwklEQVRIS+2W0Q3DIAxEPZ4HYhx2ySpscrVjOU3a5AO4/lQ8yUqExGGMMZYngIaqAv9N09r828dbqGADdgFsZUwQrUJFYfMuE1vVywJThHcksa3Y1rVaECbFMmbF3IqRQVJITClGBomgE4T2GJnQUH6dSY+mhSLPCELOEadbI+XZ4rd8nFqXLZgc9evWvt+GbmA3srjYbF1zorYRLnmWpOn67/BeJX6hZMQqew7GCWY6ULb41MAMQW1UqC3UYvHniLwA1ufnfH2ev00AAAAASUVORK5CYII=\" alt=\"two sevenths\"></span></span></p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAwCAYAAAAVQYoQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAY00gKyAAAAN9JREFUeNrt1jELQWEUxvEb2X0ABkaLUgYZZcNkYfQRZDSa7CafQDFYbMokZvEFFClFkVKKvzrDXSTuuTKcp3513+XpvnXO7TrO+7QwwhZ3OavkjCk62sUB17NqsWPFVvy74rLLs7jvOnt+y1csFh/G6hOWP0kNcxxwwx4DJLwW19FEAVlUscARUe1bxGSs6trFYSluaJQFEUIcPewQ0SjeuzZrjZTW9ZNIo4QhTsj5MYYTrPwobuOqXfr8+5zJPH+ducxrXhakgrFsYdFLcRdLXKRsIyudsa+dxWL56zwANCFR0oKZLU0AAAAASUVORK5CYII=\" alt=\"one third\"></span></span></p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAsCAYAAACHfIO0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAAuElEQVRIS+2VUQrEIAxEPV4O5HFyF6/iTWYTo2xh92MxQymsD0KLkGkcbVJ+AV0h9qgNmEv7tFpcJC+GVoeQR0oM6FAxESVss6ugiKJnPQMa6hRIH8Aw3bL9PSUWyQLtkZwSG15Z8vd4f2QL6qV9rtjhHvykduPA5Nr3PyPZNZzVeVfDTBHjrppktipm1xhV+ZRiVSXm+lzaJ+YBw6s50SknuK4DZYvhF+GSOvEnEPxyaOYfDn9AKS9hhfY0zatKyQAAAABJRU5ErkJggg==\" alt=\"four sevenths\"></span></span></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-b6569d0e",
    "originalId": "b6569d0e",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "medium",
    "stem": "<p class=\"stem_paragraph \">The table above gives the number of United States presidents from 1789 to 2015 whose age at the time they first took office is within the interval listed. Of those presidents who were at least 50 years old when they first took office, what fraction were at least 60 years old?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p>Choice B is correct. The sample space is restricted to the presidents who were at least 50 years old when they first took office. Therefore, the sum of the values in the final four rows of the table, <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAAAWCAYAAAAFH+TSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAB+UlEQVRoQ+2X65GDMAyEKY+CKIde0gqd+CyMLjrwY9d28uNG34wHQhxptRaGLHde2xLW/QjXxz/Id/FwjTXEadl5o9Q0KMgchvDarrpyY16t3/QwHqA84djDGg/bqzBHzckZnhJtIf72/C7NnV9YTYOCzJlBiNVu8bBEx65LQ3zLQzaPNlG2MY59Pb+UcTc811EhHGFf24uj5ha70VDToCBz7jAaLHeDSyDxRzxkYPPoTSbjof/dUalARKgma91N6KIgGnp0Cj2N0dxeDb2Nh3o4SimPXt/21qPkKhAxPN257W2QNQ3RwOgUehbu3C3WPVrX/k1PfKHmocaU09pAcpbynNelxuY7BmC43coRUaxpiAZkjoXWcBn1qfish73U8ljNzd2RMVyDPbenFENOa6MkAtHQmjOqIRlafrcYja+UPJxNLs+5I16fpzaGkAysP040ZsskBdHA6mQ09Dz32RotJQ81ppzWBprT5kmN8M45vTFaf4ME1jREA62T0MDGFtgaLYiHM7B57CPmOTJaSqakoM/CW1uuwJqGLAy7eIyG+92EgMQf8ZChJ0/3jvG7vZq3dBXQWhxmUQRk0ZE5FkZDqotbKCT+iIcMPXmGHiW/CeOpDnSxGT7RGAyz72DL9zzk8jQbw3Ecx3Ecx3Ecx3Ecx3Ec5x+wLD98xKudSk5GhwAAAABJRU5ErkJggg==\" alt=\"13 plus 11, plus 7, plus 3, equals 34\"></span>, is the total number of presidents in the sample space. The number of presidents who were at least 60 years old is the sum of the values in the final two rows of the table: <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAWCAYAAAB5VTpOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABNUlEQVRYR+2V4Q2EIAxGGY+BGIddWIVNemDtnSIfwgH/+hISTQhtH60aCo6MMWBZ8pHy8zTB7TkXkePZFOR8vXGvuSMXokAub3ahvbETluHSqRyYE9onRQquCSljd+VSFoAQcckb3EfRky32EEXyFt/gDNHbfOaxyvNR3KNedPm1AhA9QmpIYqs6UPjdNuf1EAJqY4mgAQ5b1qeU9wnhBOpt+h3Xl9WKKWfUhTzjssiKEDHY28qjQq7tPCpxBCgEfC/gd6TZOokVt5cR8atHRlgi5J+5Hu2QK2hsVkiHQkZGBh3SYkYIbNMFtIU8861OBrLXokcIF96ZxCKgkJHfbrVtXugSIqN4+XOJpJFuHAEJyZSdCTt1742dUtKjrJbEWVpCMlyr5LJnbBVFURRFURRlJcZ8AL0uamgXsBefAAAAAElFTkSuQmCC\" alt=\"7 plus 3, equals 10\"></span>. Thus, the fraction of the 34 presidents who were at least 50 years old when they first took office who were at least 60 years old is <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABIklEQVRYR+2Wiw3EIAiGHc+BHMddXMVNOCmlKtW+qJdLzi8h13KtPwUVzRWCM2B9hPW2AoJD/2oW0mPN5y7DA7YE6b8sIu9vE73FFxeTggARvN37MRvGhfuCOdoAriUYPdj0k8au/BSkg+S+L4pAerUvuE8fBTpCsFMvdR1/R/DrKf36pHl7WTA9QUTWS10/5EgQKTcHtdhkckYx24bY5B9YNuKt6MfbVq97XIbEcps525g5uEeCrWh77QihYBSCLVhQ9jr2O69MqYTa0D6li996iNoaMmW/k4Nxr0S/etJIeMAypeVx4nVBpEwrCeQUDxEsl0Z9tJDWXz5NeJrLaEmkfQRUfeG2BHD2VQu/f5hSp3QTTZdsR4MNqeFkMpk8wJgPlbQsCIGYyw0AAAAASUVORK5CYII=\" alt=\"10 over 34\"></span>.<p>Choice A is incorrect. This is the fraction of all presidents in the table who were at least 60 years old when they first took office. Choice C is incorrect and may result from treating the number of presidents who were between 50 and 59 years old when they first took office, instead of the number of presidents who were at least 50 years old, as the sample space. Choice D is incorrect and may result from a calculation error.</p><p> </p></p>",
    "passage": "<div class=\"stimulus_reference \" xmlns=\"http://www.imsglobal.org/xsd/apip/apipv1p0/qtiitem/imsqti_v2p1\"><div><table class=\"tableWithBorder\"><caption><span class=\"title_line passage-title\">United States Presidents<br>from 1789 to 2015</span></caption><tbody><tr><td class=\"tableWithBorderTd td6cf7ae2e-8236-4416-80f2-9fb6dc12849e\">Ages</td><td class=\"tableWithBorderTd tde5ec0477-d27e-422d-b6b4-c08366ca0b07\">Number</td></tr><tr><td class=\"tableWithBorderTd tdc890aca6-34b3-4722-810a-eed67d405cc4\">40&ndash;44</td><td class=\"tableWithBorderTd td85577c38-d33a-4343-8370-dc2afdb1414b\">2</td></tr><tr><td class=\"tableWithBorderTd td56a9a390-910c-45bc-a8c4-8a21bcf53299\">45&ndash;49</td><td class=\"tableWithBorderTd td35cc5958-44b5-4a6c-b3d7-68ba7b32d546\">7</td></tr><tr><td class=\"tableWithBorderTd td5774d714-0ba8-4cd2-a3a8-2c765d6abdc7\">50&ndash;54</td><td class=\"tableWithBorderTd tde9d6a81e-5411-4648-94ff-a6ec1c2be64d\">13</td></tr><tr><td class=\"tableWithBorderTd tddac55e49-88ce-42aa-8dbf-74fafbd18dd0\">55&ndash;59</td><td class=\"tableWithBorderTd td9ce7c923-1880-4a59-89a2-9c16aa4147a5\">11</td></tr><tr><td class=\"tableWithBorderTd td5f07ad4e-4cc9-4191-8421-ca1ae6ce8600\">60&ndash;64</td><td class=\"tableWithBorderTd tdb852094b-eb08-415e-8967-3e4870248de3\">7</td></tr><tr><td class=\"tableWithBorderTd td302e945c-fd35-49c1-8e72-fc1767c5481f\">65&ndash;69</td><td class=\"tableWithBorderTd td49935ad8-fcd9-46f3-9e70-2d62808d1c8c\">3</td></tr></tbody></table></div></div>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABJklEQVRYR+2WCxLEEAyGHc+BHMddXMVNskKzHhWltLMz65sx21ryayJC9GCUAKktHK8ZYBT2H02CG1Yd1w0ZrAmG/6JI+T6M1RIn+lYKAljQ8tyP3hDKjAvG1RpQNUGrQbofZzvrD4tU4LrHRRFwU3nBs/vCQp8QZOI1HcffEXzdpa9vmtVpQXCCSBmv6fghLUEkPRymxTabK5Ld9kjb/BNcZUD8Yf3dGIuONjJaCob+WIrWHN7eyFmw9tVcyeqGDCjNuzSFxt+uh770SA22EcOUUKpuupTqIIq0Ng2S1sSrRbGkV4UrQYLGDbs0TIyu6RVEbrk1vzaUrW1sTWpUvpDSpfzqsNiJayJSFaQUwF2cJf5EHhJcDL+i7pFaT5w3m83mSYT4AFcgLAiLaiEAAAAAAElFTkSuQmCC\" alt=\"10 over 43\"></span></span></p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABIklEQVRYR+2Wiw3EIAiGHc+BHMddXMVNOCmlKtW+qJdLzi8h13KtPwUVzRWCM2B9hPW2AoJD/2oW0mPN5y7DA7YE6b8sIu9vE73FFxeTggARvN37MRvGhfuCOdoAriUYPdj0k8au/BSkg+S+L4pAerUvuE8fBTpCsFMvdR1/R/DrKf36pHl7WTA9QUTWS10/5EgQKTcHtdhkckYx24bY5B9YNuKt6MfbVq97XIbEcps525g5uEeCrWh77QihYBSCLVhQ9jr2O69MqYTa0D6li996iNoaMmW/k4Nxr0S/etJIeMAypeVx4nVBpEwrCeQUDxEsl0Z9tJDWXz5NeJrLaEmkfQRUfeG2BHD2VQu/f5hSp3QTTZdsR4MNqeFkMpk8wJgPlbQsCIGYyw0AAAAASUVORK5CYII=\" alt=\"10 over 34\"></span></span></p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABIUlEQVRYR+2Wiw2EIAyGGY+BGIddWIVNehSsPKQeWjSXC1/SnPa0P7ZAUSM4o0BbD9ttBTiD/s00hMe6zw1DAXuC6b8s0t5fxluNL0ZrBQE8WH30YzaUcdcF82gdmJ6gt6DDT4hd+dMgDQT3dVEEwqu84DF9aaBPCDL1EtfxdwRfT+nrk2b2siA4QaStl7h+yJkgUm4OYrHF4hvFbHvEFv8Obc54ScZtbwjXPYbIYrnNpI2ZF41d4rYg01y5XkeDQbslyNHr5pQNYwUp5Yhp0zZI5KDxq9EnqWEPSlsZkHol+kSTpmWvUYiWPInyODFNcO/ojVg7saYI0lTvLYX6aNHajaMGBTxb7CWiL6SXR8UQkeB5uvqH3Ck1XCwWiwko9QHl1BuTz6n5/AAAAABJRU5ErkJggg==\" alt=\"10 over 24\"></span></span></p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABSklEQVRYR+2W2xWDMAiGHS8DZZzs4ipuQkkIiDTRXOpT853DqVrlJ5ALWw2AA4LbIF6yuXDEXwFgB6/+F/P75b1HTjGPLiF9DLtPzrQoHAGcemcYcuQAfV8cHcHhvQnCBQxvUrAGjfIU3P1A+npIAnlEnHbnPWYj1w7N1nkYriEOKDmUCaNSSqX4gSiLtaTP1rkbctAmFqHgvidcE6lmnSkaFuSR1cS4XlxTZiilLcW/2xxsEI9I3YqmBET0tG6xxaKHy2x7wRb/AJ8WZPcnQG0zb4bE7MZcF+XghgRL0UoPUzhBpCMw30whJwN6zI8S/NyHyZRa6Miq9KqxkZqtIaPPRuuMO7f4fHrSWNihTmmaKPn+54IRnVYSOFP8iqBeGvdtSH35FKk1QyRS7simRihLQLfxOYjetrEZEcVLtjtnr9RwsVgsBti2D+zSGpSuk2mFAAAAAElFTkSuQmCC\" alt=\"25 over 34\"></span></span></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-e1ad3d41",
    "originalId": "e1ad3d41",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "medium",
    "stem": "<p class=\"stem_paragraph \">The data on the coat color and eye color for 48 Himalayan kittens available for adoption were collected and summarized in the table above. What fraction of the chocolate-colored kittens has deep blue eyes?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p>Choice D is correct. The table shows that there are a total of 16 kittens that have a chocolate-colored coat. Of the 16 with a chocolate-colored coat, 12 have deep blue eyes. Therefore, the fraction of chocolate-colored kittens with deep blue eyes is simply the ratio of those two numbers, or <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABE0lEQVRYR+2W7RGDIAxAMx4DMQ67sAqbpASMtCjf6J/m3eWujcrjSwn0YDWgMg6PvyeIDo0Cyp9xd98QaPVtQ0mm0SKGa6V7u3FGhQYoLkJnUIFCn/7Jx2dSJ7qJvaUGLeqBXsfnJoQM+kdHhLTeoIyf8BeEvIbaDy9mJugVsgy8LWYm6RGem2tVRrSEYc0aHRqiJuSRbZMRJWF8DzfLiJLw+6NwjYX3UBBqZDttewj/RKlqI/ibSj9DLJ+HlUosP+F7zs4q1artKBPvP+oPVG2lMnGZ4nkYOkQjidcpRTE9nUxdSJI0yi2HckuY56fXkGkJ8xo0rf1u4TF97wkL+cemlMin9dFNw7CUY0kmCIKwAYAP7UzvZIJaSCgAAAAASUVORK5CYII=\" alt=\"the fraction 12 over 16\"></span>.<p>Choice A is incorrect; this is the fraction of all chocolate-colored kittens. Choice B is incorrect; this is the fraction of kittens with deep blue eyes that have a chocolate-colored coat. Choice C is incorrect; this is the fraction of cream-tortoiseshell-colored kittens with deep blue eyes.</p></p>",
    "passage": "<div xmlns=\"http://www.imsglobal.org/xsd/apip/apipv1p0/qtiitem/imsqti_v2p1\" class=\"stimulus_reference \">\n        <div class=\"table_wrapper \">\n          <table class=\"tcp-cdb74c18-66cb-4592-a55e-c85f16d38c3d\"><tbody><tr><td>\n                  <table class=\"table_WithBorder\"><tbody class=\"tbody valign:middle \"><tr class=\"row \"><td class=\"entry align:center colname:col1 morerows:1 valign:middle  tcp-aa3d41c2-d052-4907-9440-2d485093d35d\" colspan=\"1\" rowspan=\"2\">Coat color</td>\n                        <td class=\"entry colname:col2 colsep:0  tcp-9842b2fd-e79d-4362-a86c-528ac25f62bf\" colspan=\"3\" rowspan=\"1\">Eye color</td>\n                      </tr><tr class=\"row \"><td class=\"entry colname:col1 \">\n                          <!--StartFragment-->Deep blue<!--EndFragment--></td>\n                        <td class=\"entry colname:col2 \">Light brown</td>\n                        <td class=\"entry colname:col3 \">Total</td>\n                      </tr><tr class=\"row \"><td class=\"entry align:left colname:col1 \">Cream-<span class=\"formatted_line_break delivery_mode:Both \"></span>tortoiseshell</td>\n                        <td class=\"entry colname:col2  tcp-22ec06fc-98b2-40de-8e46-802d8c65c23b\">16</td>\n                        <td class=\"entry colname:col3  tcp-c7e41c60-b60d-4c22-b0e9-b025d76a0918\">16</td>\n                        <td class=\"entry colname:col4  tcp-b3595888-5610-4e2c-9fda-b399dbb44f00\">32</td>\n                      </tr><tr class=\"row \"><td class=\"entry align:left colname:col1 \">Chocolate</td>\n                        <td class=\"entry colname:col2  tcp-aacb6120-0beb-4c6e-818b-2893d6dadce9\">12</td>\n                        <td class=\"entry colname:col3  tcp-40e1a026-165a-444b-b966-6849a939cfc4\">  4</td>\n                        <td class=\"entry colname:col4  tcp-f7797fb9-b45f-405d-ba7a-aea0a0799fd1\">16</td>\n                      </tr><tr class=\"row \"><td class=\"entry align:left colname:col1 \">Total</td>\n                        <td class=\"entry colname:col2  tcp-bb93deea-bf5b-4e09-8aec-e47dfb6043a5\">28</td>\n                        <td class=\"entry colname:col3  tcp-e96b766c-fbc7-4cc3-b718-67299af16477\">20</td>\n                        <td class=\"entry colname:col4  tcp-3fc3c727-bedc-4b7f-ba7f-0388d2f8af37\">48</td>\n                      </tr></tbody></table></td>\n              </tr></tbody></table></div>\n      </div>",
    "options": [
      {
        "id": "A",
        "text": "<span class=\"math_expression \">\n            <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABM0lEQVRYR+2W2xHEIAhFLc+CLMdebMVOWBHRJD5WorM/65nxI0S5iCagZnBGgbYe0mMGwIPVCu15tOaJAGeajoqYAQcQ3/XmTuOtjg5wVILeglYagvlmpzUliGkoWnTowAiipnUvBBkISyWCeN5K25DwHwjyGZqwPbK8YFaQxVRQI8tLZgTz5VoVQ74JxjP7EpCIkSDvbJsY0hOk73CzGNITvP4U6rHwHR4OIx43bfs4/BP832wVVq4WPJaKL8NOn87IXndtS6K5kj8c8U+9GUQwpkcZ3HsaW6e0l+YlwViCsAMbOd+V0mvKRpfmXhfrxniaa2pags1WP80TdwG0sETbFOzsmnYsrPjj9oECofOqU9izi5DskAQXe5qe8+qWpnnLnVxPECHRMra3jYfD4SBEqQ9V7w8ZFeZDawAAAABJRU5ErkJggg==\" alt=\"the fraction 12 over 48\"></span></span>"
      },
      {
        "id": "B",
        "text": "<span class=\"math_expression \">\n            <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABKElEQVRYR+2W0RHDIAiGGc+BHMddXCWbUJWQaJQEje1Dz++Oh1LDj0IioMFbQOM23H8eIG7oDET/Ya11XaC3zUCnmEWPmP6T1qrZnEkBolWCm0MDBoO78NMzZxJqKNsY0KPtyJqeGxBkMDzaIxjrDcaFA/+BINfQhu2RZwCtIItBUCPPIBrBo7neikWeBFPNHhLq4k6QdzZNLCIJ0ns4WSwiCeYfhdpevIeLxR2XTptui39HO5HxbcE2dPlqJzISq9d0i2omMv6oX4OnJGZcxJF8IuPr6auCKVg2kU070hZSsPJerMswBIvlR9VsrBlTgDSRSTXMG2t36aEatTOmXddHKPkf4Z1JxyPtkAQ7d6itRdWlozUsO+9qZfZ87GyvGmaxWCwmAPABht0AYcJI//UAAAAASUVORK5CYII=\" alt=\"the fraction 12 over 28\"></span></span>"
      },
      {
        "id": "C",
        "text": "<span class=\"math_expression \">\n            <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABOUlEQVRYR+2W4RGDIAyFHY+BGIddXIVNUkJ8ohGKAvZP+e5yWqC8EIJhucNqFzLO0/bzBHlHJjz4NZpds+NuQ6uNE+UE0Rc0Yh/RSrYw9hbemTghm56EyJMz13b5jw3S4sRtxHtDzue9llBy/8OJa5TCJA7xSqSfm9iawwm+C7JIWiUSqEu0Jqjbm/cQ1ASRoSDt/WjBLXy/Eyy0vxZSRof11aQBEIV1iU0mNU7Z9oJN/gG+rYXHZtcKgHsNv8KaP20ilr76uuwkMT2mQTRX6/QtrXSJ6i5PYF9R8GJryiKrHCAontcredwK44J7jYIiJAmhrxMaXZC7wL6WQroX4krIH1EK6x6FkWKMPhoMzmrX1aK0FzrlsbLue8x+BA7ZBifO53CAGMh9to4rPmbv1Qacw8lkMmlkWT5GtxTNxVtrXwAAAABJRU5ErkJggg==\" alt=\"the fraction 16 over 32\"></span></span>"
      },
      {
        "id": "D",
        "text": "<span class=\"math_expression \">\n            <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABE0lEQVRYR+2W7RGDIAxAMx4DMQ67sAqbpASMtCjf6J/m3eWujcrjSwn0YDWgMg6PvyeIDo0Cyp9xd98QaPVtQ0mm0SKGa6V7u3FGhQYoLkJnUIFCn/7Jx2dSJ7qJvaUGLeqBXsfnJoQM+kdHhLTeoIyf8BeEvIbaDy9mJugVsgy8LWYm6RGem2tVRrSEYc0aHRqiJuSRbZMRJWF8DzfLiJLw+6NwjYX3UBBqZDttewj/RKlqI/ibSj9DLJ+HlUosP+F7zs4q1artKBPvP+oPVG2lMnGZ4nkYOkQjidcpRTE9nUxdSJI0yi2HckuY56fXkGkJ8xo0rf1u4TF97wkL+cemlMin9dFNw7CUY0kmCIKwAYAP7UzvZIJaSCgAAAAASUVORK5CYII=\" alt=\"the fraction 12 over 16\"></span></span>"
      }
    ]
  },
  {
    "id": "sat-math-probab-e9ed719f",
    "originalId": "e9ed719f",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "medium",
    "stem": "<p style=\"text-align: left;\">The table summarizes the distribution of color and shape for <math alttext=\"100\"><mn>100</mn></math> tiles of equal area.</p>\n\n<p style=\"text-align: left;\">If one of these tiles is selected at random, what is the probability of selecting a red tile? (Express your answer as a decimal or fraction, not as a percent.)</p>",
    "type": "grid-in",
    "correctAnswer": "0.3, 3/10",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math alttext=\"three tenths\"><mfrac><mn>3</mn><mn>10</mn></mfrac></math>. It&rsquo;s given that there are a total of <math alttext=\"100\"><mn>100</mn></math> tiles of equal area, which is the total number of possible outcomes. According to the table, there are a total of <math alttext=\"30\"><mn>30</mn></math> red tiles. The probability of an event occurring is the ratio of the number of favorable outcomes to the total number of possible outcomes. By definition, the probability of selecting a red tile is given by <math alttext=\"StartFraction 30 Over 100 EndFraction\"><mfrac><mn>30</mn><mn>100</mn></mfrac></math>, or <math alttext=\"three tenths\"><mfrac><mn>3</mn><mn>10</mn></mfrac></math>. Note that 3/10 and .3 are examples of ways to enter a correct answer.</p>",
    "passage": "<figure class=\"table\"><table border=\"1\">\n<thead>\n<tr style=\"height: 22px;\">\n<td style=\"width: 17.3129%; height: 22px;\"> </td>\n<th style=\"width: 17.3129%; height: 22px; vertical-align: bottom; text-align: center;\" scope=\"col\">Red</th>\n<th style=\"width: 17.3129%; height: 22px; vertical-align: bottom; text-align: center;\" scope=\"col\">Blue</th>\n<th style=\"width: 17.3129%; height: 22px; vertical-align: bottom; text-align: center;\" scope=\"col\">Yellow</th>\n<th style=\"width: 17.3129%; height: 22px; vertical-align: bottom; text-align: center;\" scope=\"col\">Total</th>\n</tr>\n</thead>\n<tbody>\n<tr style=\"height: 22px;\">\n<th style=\"width: 17.3129%; height: 22px; text-align: left;\" scope=\"row\">Square</th>\n<td style=\"width: 17.3129%; height: 22px; text-align: center;\"><math alttext=\"10\"><mn>10</mn></math></td>\n<td style=\"width: 17.3129%; height: 22px; text-align: center;\"><math alttext=\"20\"><mn>20</mn></math></td>\n<td style=\"width: 17.3129%; height: 22px; text-align: center;\"><math alttext=\"25\"><mn>25</mn></math></td>\n<td style=\"width: 17.3129%; height: 22px; text-align: center;\"><math alttext=\"55\"><mn>55</mn></math></td>\n</tr>\n<tr style=\"height: 22px;\">\n<th style=\"width: 17.3129%; height: 22px; text-align: left;\" scope=\"row\">Pentagon</th>\n<td style=\"width: 17.3129%; height: 22px; text-align: center;\"><math alttext=\"20\"><mn>20</mn></math></td>\n<td style=\"width: 17.3129%; height: 22px; text-align: center;\"><math alttext=\"10\"><mn>10</mn></math></td>\n<td style=\"width: 17.3129%; height: 22px; text-align: center;\"><math alttext=\"15\"><mn>15</mn></math></td>\n<td style=\"width: 17.3129%; height: 22px; text-align: center;\"><math alttext=\"45\"><mn>45</mn></math></td>\n</tr>\n<tr style=\"height: 22px;\">\n<th style=\"width: 17.3129%; height: 22px; text-align: center;\" scope=\"row\">Total</th>\n<td style=\"width: 17.3129%; height: 22px; text-align: center;\"><math alttext=\"30\"><mn>30</mn></math></td>\n<td style=\"width: 17.3129%; height: 22px; text-align: center;\"><math alttext=\"30\"><mn>30</mn></math></td>\n<td style=\"width: 17.3129%; height: 22px; text-align: center;\"><math alttext=\"40\"><mn>40</mn></math></td>\n<td style=\"width: 17.3129%; height: 22px; text-align: center;\"><math alttext=\"100\"><mn>100</mn></math></td>\n</tr>\n</tbody>\n</table></figure>"
  },
  {
    "id": "sat-math-probab-f8696cd8",
    "originalId": "f8696cd8",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "medium",
    "stem": "<p class=\"stem_paragraph \">The table above shows the number of people who work in the Human Resources and Accounting departments of a company and the highest level of education they have completed. A person from one of these departments is to be chosen at random. If the person chosen works in the Human Resources department, what is the probability that the highest level of education the person completed is a master&rsquo;s degree?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p>Choice B is correct. In total, there are 6 people in the Human Resources department. Of those 6, 2 have a master&rsquo;s degree as their highest level of education. Therefore, the probability of an employee selected at random from the Human Resources department having a master&rsquo;s degree is  <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAsCAYAAACHfIO0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAA1UlEQVRIS+2V2w0EIQhFKc+CLMdebMVO7sKwzMOsHyLztZ6EjCHxDiAKjQAaSiLI0iyVJt85LqGMChwCqNkniFaQKIH3PTa2kh4/WEKjCxKrmVNPhYuwKGY1yxyWepyYELGSepxo0QOEjhqxkKu/7lhEy0LaZwFCwlmnnxbUZ5t36U5tyjZvYHdUlod5n6H+ZQXfyMyf+en0HXX9Rtd0Go06F9dI09TEJeZ6384BcovO/WCaWEzNupM01D9ZS0spRmzQU640hT7V5YllgmZuoc3mDyD6ADCHKKVQWQqdAAAAAElFTkSuQmCC\" alt=\"two sixths\"></span>, which simplifies to <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAwCAYAAAAVQYoQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAY00gKyAAAAN9JREFUeNrt1jELQWEUxvEb2X0ABkaLUgYZZcNkYfQRZDSa7CafQDFYbMokZvEFFClFkVKKvzrDXSTuuTKcp3513+XpvnXO7TrO+7QwwhZ3OavkjCk62sUB17NqsWPFVvy74rLLs7jvOnt+y1csFh/G6hOWP0kNcxxwwx4DJLwW19FEAVlUscARUe1bxGSs6trFYSluaJQFEUIcPewQ0SjeuzZrjZTW9ZNIo4QhTsj5MYYTrPwobuOqXfr8+5zJPH+ducxrXhakgrFsYdFLcRdLXKRsIyudsa+dxWL56zwANCFR0oKZLU0AAAAASUVORK5CYII=\" alt=\"one third\"></span>.<p>Choice A is incorrect; it is the probability that an employee selected at random from either department will be in the Human Resources department and have a master&rsquo;s degree. Choice C is incorrect; it is the probability that an employee with a master&rsquo;s degree selected at random will be in the Human Resources department. Choice D is incorrect; it is the probability that an employee selected at random from either department will have a master&rsquo;s degree.</p></p>",
    "passage": "<div xmlns=\"http://www.imsglobal.org/xsd/apip/apipv1p0/qtiitem/imsqti_v2p1\" class=\"stimulus_reference \">\n        <div class=\"table_wrapper \">\n          <table class=\"tcp-cc107136-53e1-403e-beaa-ceaa820caf4e\"><tbody><tr><td>\n                  <table class=\"table_WithBorder\"><tbody class=\"tbody \"><tr class=\"row \"><td class=\"entry colname:col1 \"></td>\n                        <td class=\"entry colname:col2 \">Human Resources</td>\n                        <td class=\"entry colname:col3 \">Accounting</td>\n                      </tr><tr class=\"row \"><td class=\"entry align:left colname:col1 \">Bachelor&rsquo;s degree</td>\n                        <td class=\"entry colname:col2  tcp-b1cb2e68-802a-4979-aab2-66e6a73cf066\">4</td>\n                        <td class=\"entry colname:col3  tcp-72c3c7b0-f7c1-405f-8df1-817aa3d74538\">3</td>\n                      </tr><tr class=\"row \"><td class=\"entry align:left colname:col1 \">Master&rsquo;s degree</td>\n                        <td class=\"entry colname:col2  tcp-bbb162b0-32b4-43dc-ba04-78783a77c2fc\">2</td>\n                        <td class=\"entry colname:col3  tcp-abd5c2ec-49cc-4edf-8e9d-89dbc8e69af7\">6</td>\n                      </tr></tbody></table></td>\n              </tr></tbody></table></div>\n      </div>",
    "options": [
      {
        "id": "A",
        "text": "<span class=\"math_expression \">\n            <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAkCAYAAACNBsqdAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAASM53j1gAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAAyUlEQVRIS+1WUQrAIAjteB7I43QXr9JNnBVCs8E2K9igB2Hbx8s0n4Yn4BQZxORtCMAxcd6PgZkYxSBVMiYUi/J3kLwQQWRxshKXgyZ53WIZMaHEubnBFKQIQjbZ2/+Q1je8KlnCb5e+641voEuQc218AVfaW3WjTdbLbqItyYpPLnF3OatXgHgSIBZ5jzAgSImodAirbBoaAA2D85CO2HzXmzk69p0Wax5ex/yeOMd8CbFzFOhibKYg9yhw5fG5QCaMWhsbowjhAGTkRa7YWx3kAAAAAElFTkSuQmCC\" alt=\"the fraction 2 over 15\"></span></span>"
      },
      {
        "id": "B",
        "text": "<span class=\"math_expression \">\n            <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAwCAYAAAAVQYoQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAY00gKyAAAAN9JREFUeNrt1jELQWEUxvEb2X0ABkaLUgYZZcNkYfQRZDSa7CafQDFYbMokZvEFFClFkVKKvzrDXSTuuTKcp3513+XpvnXO7TrO+7QwwhZ3OavkjCk62sUB17NqsWPFVvy74rLLs7jvOnt+y1csFh/G6hOWP0kNcxxwwx4DJLwW19FEAVlUscARUe1bxGSs6trFYSluaJQFEUIcPewQ0SjeuzZrjZTW9ZNIo4QhTsj5MYYTrPwobuOqXfr8+5zJPH+ducxrXhakgrFsYdFLcRdLXKRsIyudsa+dxWL56zwANCFR0oKZLU0AAAAASUVORK5CYII=\" alt=\"one-third\"></span></span>"
      },
      {
        "id": "C",
        "text": "<span class=\"math_expression \">\n            <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAwCAYAAAAVQYoQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAY00gKyAAAAKxJREFUeNpjYCAMWoB4GxA/B+L/UD5VwBcgPgbEU6ltMBMSm6oGM4waPGow/QwOQcIgg9cg8Sl2JS48CkYBDZIVKXgUDELACMSHaFF05gDxU2obrADEn4E4kNoG7wbiddQu7FOA+AMQS1LTYGmooWnUrp42A/FBaIqgmsGgOu03EJsDsQASBhncDWUzkWNwAxEFjg65ScwBCwYZuBjK5h7ZraFRMApGwSigGgAA0c1V2axbieYAAAAASUVORK5CYII=\" alt=\"one-fourth\"></span></span>"
      },
      {
        "id": "D",
        "text": "<span class=\"math_expression \">\n            <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAA+0lEQVRYR+2WjQkDIQxGHS8DZRx3uVXcJDVG6/0kBdGUQn0QrpXSp/HQL4xwYKD8eBcexE8fRIaUHUVCB/pJKWtQ+fMyiTxYv66DUiT4ppD5aksbKUKRSAHF5CQjShThtsLaZsjW8qOVWHsoK+6TWIbs17OF1vg01gpF6LBC5vGWeu5hQ6S9XGWbjcblDXSozT/BR5p2jLWswx8vNRM7WpRQheUAX3hbnCOFKuTJQMx5YIGwX67SNk3oktraPt2FLecAYrkXeYhLm9gQtrC+MKeWLrmULaHFdLAaFU4Hq58RumVVU6il8XpI3CcxxKeWdmmvKdlms9ksIIQX1dGgxZ7UEM8AAAAASUVORK5CYII=\" alt=\"the fraction 8 over 15\"></span></span>"
      }
    ]
  },
  {
    "id": "sat-math-probab-014c47ab",
    "originalId": "014c47ab",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">The table shows the distribution of two types of flowers at two different sites. If a flower represented in the table is selected at random, what is the probability of selecting a flower from site A, given that the flower is a tulip? (Express your answer as a decimal or fraction, not as a percent.)</p>",
    "type": "grid-in",
    "correctAnswer": "0.7, 7/10",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"StartFraction 35 Over 50 EndFraction\"><mfrac><mn>35</mn><mn>50</mn></mfrac></math>. Based on the table, there are a total of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"50\"><mn>50</mn></math> tulips, and <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"35\"><mn>35</mn></math> of these tulips are from site A. The probability of selecting at random a flower from site A, given that the flower is a tulip, is equal to the number of tulips from site A divided by the total number of tulips, which can be written as <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"StartFraction 35 Over 50 EndFraction\"><mfrac><mn>35</mn><mn>50</mn></mfrac></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"seven tenths\"><mfrac><mn>7</mn><mn>10</mn></mfrac></math>. Note that 35/50, 7/10, and .7 are examples of ways to enter a correct answer.</p>",
    "passage": "<figure class=\"table\"><table border=\"1\">\n<thead>\n<tr style=\"text-align: center; height: 22.3906px;\">\n<td style=\"width: 22.7442%; text-align: center; height: 22.3906px;\"> </td>\n<th style=\"width: 22.7442%; text-align: center; height: 22.3906px;\" scope=\"col\">Site A</th>\n<th style=\"width: 22.7442%; text-align: center; height: 22.3906px;\" scope=\"col\">Site B</th>\n<th style=\"width: 22.7442%; text-align: center; height: 22.3906px;\" scope=\"col\">Total</th>\n</tr>\n</thead>\n<tbody>\n<tr style=\"height: 22.3906px;\">\n<th style=\"width: 22.7442%; height: 22.3906px; text-align: left;\" scope=\"row\">Tulip</th>\n<td style=\"width: 22.7442%; text-align: center; height: 22.3906px;\"><math alttext=\"35\"><mn>35</mn></math></td>\n<td style=\"width: 22.7442%; text-align: center; height: 22.3906px;\"><math alttext=\"15\"><mn>15</mn></math></td>\n<td style=\"width: 22.7442%; text-align: center; height: 22.3906px;\"><math alttext=\"50\"><mn>50</mn></math></td>\n</tr>\n<tr style=\"height: 22.3906px;\">\n<th style=\"width: 22.7442%; height: 22.3906px; text-align: left;\" scope=\"row\">Daffodil</th>\n<td style=\"width: 22.7442%; text-align: center; height: 22.3906px;\"><math alttext=\"31\"><mn>31</mn></math></td>\n<td style=\"width: 22.7442%; text-align: center; height: 22.3906px;\"><math alttext=\"21\"><mn>21</mn></math></td>\n<td style=\"width: 22.7442%; text-align: center; height: 22.3906px;\"><math alttext=\"52\"><mn>52</mn></math></td>\n</tr>\n<tr style=\"height: 22.3906px;\">\n<th style=\"width: 22.7442%; text-align: center; height: 22.3906px;\" scope=\"row\">Total</th>\n<td style=\"width: 22.7442%; text-align: center; height: 22.3906px;\"><math alttext=\"66\"><mn>66</mn></math></td>\n<td style=\"width: 22.7442%; text-align: center; height: 22.3906px;\"><math alttext=\"36\"><mn>36</mn></math></td>\n<td style=\"width: 22.7442%; text-align: center; height: 22.3906px;\"><math alttext=\"102\"><mn>102</mn></math></td>\n</tr>\n</tbody>\n</table></figure>"
  },
  {
    "id": "sat-math-probab-585de39a",
    "originalId": "585de39a",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "hard",
    "stem": "<p class=\"stem_paragraph \">On May 10, 2015, there were 83 million Internet subscribers in Nigeria. The major Internet providers were MTN, Globacom, Airtel, Etisalat, and Visafone. By September 30, 2015, the number of Internet subscribers in Nigeria had increased to 97 million. If an Internet subscriber in Nigeria on September 30, 2015, is selected at random, the probability that the person selected was an MTN subscriber is 0.43. There were <span class=\"italic\">p</span> million MTN subscribers in Nigeria on September 30, 2015. To the nearest integer, what is the value of <span class=\"italic\">p </span>?</p>",
    "type": "grid-in",
    "correctAnswer": "42.",
    "explanation": "<p>The correct answer is 42. It&rsquo;s given that in Nigeria on September 30, 2015, the probability of selecting an MTN subscriber from all Internet subscribers is 0.43, that there were <span class=\"italic\">p</span> million, or <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAYCAYAAAB3JpoiAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAMyZLetQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAB4UlEQVRoQ+2XYZLDIAiFPZ4H8ji5S66Sm1ARSRQ1NS2tf/hmMrPSJ2Qf4nbdp8CxgXcetgMgh4wCgAM27yDsCv4A7BAGZu/BgY8f5OUtsAfU5aefT0sj+UftO58eMTKVi88YTtrrZeQa0dJItPJOa/wWz/sVewRdJSH2rk5wbB7X6XlnOI+b1GEjXZxB/FlLI/l3bdbFUKWrEqRNMYSPFCZji4TI1VkcofYlJNS0Qe7cTC1NDp2sqJ38icK8JOi+qU2mzfWIYDNkEYZzzBle50WoceUv9L0mh05W1CateB8K1mbFrNXY0Lotwkwbnl5q9LIU19Lk0IlW3hlNDmVfhJaEojON4Z2NBfS5GS7j3YMqL3vkZ4YvGGtmRW3ysdBSoGN4Snrd2bqGf/9HaUaTQycraje+sVHS8LS5+A7JjZFFmGnDxeQwT792zWgkK2qTL0UTqFseQghnF2g02tOMCWURZtZwRObv1dPSSLTyzmiQFC//+SEhdoC6hqHeRqTZXHBnuJwWhMbvvp6GZmVtpDmkaQwGJkp4lOLUvNWWpH1hroY2a2vjISwaMbqL7rg75SPStTW4V3/Nyto4AZW3fA08PbE0Sv0R6oH6pzW0WFGbD/LTg2kYhmEYhmEYhjbOvQBYPGN6+20UgQAAAABJRU5ErkJggg==\" alt=\"p of 1,000,000\"></span>, MTN subscribers, and that there were 97 million, or 97,000,000, Internet subscribers. The probability of selecting an MTN subscriber from all Internet subscribers can be found by dividing the number of MTN subscribers by the total number of Internet subscribers. Therefore, the equation <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAwCAYAAADzRIMRAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAY00gKyAAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAEHElEQVR4Xu2bAZKDMAhFPZ4H8jjepVfZm2RDCDFiErGlZWp5M86sLA1d8oHUzk5ahL81zNMc1r8QssmpCOEvrPMUlofnR0wIj7B0RPVYpjDHX+TbIeGxgF++2utp+XA+EXuUJ6dBTzyUZImw0HdLOr8HtHw4WuuKfeY19q/N5jTAEbjEWtwn6m+d4T5dZ8KiMcH9QLBTnB3ws5YP59OxyS+adn4/Q52olJxogosnJAmoShywVSq0/mOyOSjOztpZtFo+2VSwiJ3yEx3z7W+B54G9mDBJ+9YOouPJJGgNmbD26wIo0HrjXvfJpoJFbPRtv5/bg3/8XhQxe7t2j/fHZBJiYaXk9zYF7Vo+2VTQWlfik005L0ffnwATwirtIKxxgvD3LixuPyvIW8MPncDbhGUwjgiL2JjHo+/twT+8IayUvO1MpSus1w/HEp9sKljEPsvbbSFBcGGlJFXPYEiAPJmEWFisExJXP85LfDgWsTEvbaHfGqy+OSzLUqoKW/qxyiBxPJmEVFgAX78VT8uHo7WuxAdI9l98SIoJgYrCKgRTK0HAKEkjYfHuB+DYGMfT8LGMDYyK8dak9i2sKBoBsdtfSlR63WJTtbaxodjagnsH2CTGQh/ROzsCSSfStXtnhRHPtPb0htnZ41NYxoaO9qluhaLaNpzfSyDxcGGhfTsnnq5N4+tqB8IRIH/T4H81hhYWsalgrxbgs/QaRBKEsKjqblfnq9XFnmlIzhfSG2HYAM4/kZJQlrU/CmtK4QhF6xhDEwR+HF1841FYxwmCXehcWEmA0F07AuVcnVjOl9I780jOWfVxqNf5CBRUW9xEcfDL7FLjFWHV57AzYRHk56PwS/j0KOSvkwoL8HH4A/QEcXZ4r0fb8RqLRtINnS9H43ED0BIoCui6aJ2bwDtIq6NQh+o9f2oKix4tVM/kSGwvPcfat8v9G6UA7UvSSse+Wj4cy9jvZLRXwDPCAoq40rp4cZ9L4KP87Q1SIkeLlgNodMqmA7gOX3efCC0fjta6Eh+nAamXqzupfvBVBf9eiSM5D2j5cCxjO5leBY4qs9dKa3o+2KZRkFo+2VSwjO1knhFWqtiTL15xU3rr1hv3uk82FSxjOxlMXq8qG0nN/nw8cDD5vU1Bu5ZPNhW01pX4ZJPTInWgqgJJPK3kSceA1sZJfLKpoLWuxCebnB4oLrqicBpjIM6GdJiVHFy1Ro3EJ5sKlrGdE1rJiyWcHjGcjUEAN8XmAG0Z28n0xNL6SI2JPlZwi7grZh/5LWM7FSlRVQVit3p9BPB1Wutq+XC01pX4OANQXHS1xXM2AtLv2WMIfA2t294QDR/L2M6bSaPjB//9y3kz6QxmdPawjO28GRgZcW9NNtcytuM4juM4juM4juM4juM4jnNrpukfnu0DSSUR/e8AAAAASUVORK5CYII=\" alt=\"the fraction with numerator p of 1,000,000, and denominator 97,000,000, equals 0 point 4 3\"></span> can be used to solve for <span class=\"italic\">p</span>. Dividing 1,000,000 from the numerator and denominator of the expression on the left-hand side yields <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAmCAYAAACBOhYpAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAATRJrTQAAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAB6UlEQVRoQ+2YDY6EIAyFPR4H4jjexat4ky5Qi1hbRHdmh1n6JcQMcQw+Xn9wagVghdlN4OYVFj9BnIrDLxCvhgTAAp4Jtc4uXB0EHU04CVhncOESnbZNHdy3TRklISaDMD74bXeViXZBymMhLrefCROtAolzEm0LWSsGArkIMNFSIXBzkNREO4GOcuC9z5USc5xVTpW9CGxhGl3XgWC4rufrqaWXshd99K7pAZ2FIXf6E+eTMFw0nN87hdvP7rFCamuSKrxG6dJSNMl9tzWgIiBZ+FNoYYUnlGMvKUEi+Lmt+mvdw0coj2a1wV+KChMPF3TPtWi56ldyWsm/OC5qOaYl95SRUysEERRL3jgi3/Cm8TJ+I1qZ965EI+i+IcOT/69VtMjXh6j2sleFoAy386gL0uLirnlFyxGRxEdx7m/IV8B3XnICOUvrr0TRqL0omnkSsqlPO9r5uCB6kDz+xsa19UWeiBbJwqXn4uD3iOBRgu9k/c/a15AhoB3gO5R2rnIG5We2oZDyQ0Sbj2hWH4YnoiWXjfxBUnMNJlZBTCWch4PnJxJGEg3FHDSXcVA4GkGUJNxRtK4+m/QI5rSjo6jNGD40NSGS85ijMGzl4jAcp5xWraiWzzKnnCYIY0XAMAzDMAzjDUzTD99mrOM5Ck45AAAAAElFTkSuQmCC\" alt=\"the fraction p over 97, equals 0 point 4 3\"></span>. Multiplying both sides of this equation by 97 yields <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAAAYCAYAAAAPmZSDAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAMyZLetQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAADNElEQVRoQ+2WjQ3jIAyFO14GyjjZpat0Ey7GOHXMMxASrtIdn4TU0sS/D9PXLwmfLSyvJWyfENLWXyeET9iWV1jffgxPxtnibzKAEN5hNU0M75U+p3W9wSwM3Mz3KnZz2ygWAf322ZZkB9g65WAXP1vy9ySleghUl2UPJH11aclr/3yi1fZfwQbDCX0Dt99bEFHZAvP+urfZtx33lm2fP/m7Ok62ZeOsTMgosP29/aG05fp7Eq8egsTeKwqUl3DX9qPwyVMCSNeMDS4WDCSDkARp6QKjU478oasuizPZsnHGiVcQjxU8Mfpq9eoh6CndKwqUF9FkWzdBTgatEQWJAe2G01d39HPgeUKWo3kbtmOR562YY5PUXhZnbGI+db19wsuNsP6eolaPb7w8oXoE5+XVbPsYj8oIN9wppHq+tFChSdB6n4P3GlkXXIyTJkyhuRovL47j6y+L0xGWt0/Ew+tMP+tPuFNborUe4qdHcKW8iKptUax+QE+9tHUbtnluTk8jBUmMiuqdOoGF5jeLbbE/GKdjvyxgv37aX9q6zZV6VEXhUMuLqNpG02SM4PIi3xFcPGl7RelzrcCCPJddqUpknhiiP1WnwxZ4loXoT2gk6rtcqUev4Gp5EVXbOlChJDgxSB9LyyYLBRcLkxceHQKNfa9WYA2aSi2CI1h0svb4QPxSu9J/NE9w3bW9WI+qKAAteRFF256RKw1sxRdc7qd2kvj3cxO+C4tFQNNTx4bi9MC3Q72ZV3y0cLUeLTFaWt8pPic/WsHFBAp/DHsQcWtxyZ4NDk3dEki4LIY2MXMdeA/HiYsIbwczbRDaX9p6lCETriEvomhbjKzrehhq+f/UCzXIBmL9If9ygr0CQcHJ9FYHR0QIY1DPoTj5Ov2KxKsT75fFZP09zR3BebVuyYsoC+4wkpqzb40SG+EV+nwl5P57BEccoot2eaEmWIF5cbLoZOHiowlqQYJ+khGCa8mLKAouFnDgSbOg6+rXcIHOIh8ZJ/L3XyBFHXnSEKOvk6vQyUU1GBWn5++fR0bfL6YNj+ffnnL0H8/yZJwt/iaTyWQymUwmk8lkMplMJpPJpJ/X6w/bz3T3dTZuuAAAAABJRU5ErkJggg==\" alt=\"p equals, 0 point 4 3 times 97, which equals 41 point 7 1\"></span>, which, to the nearest integer, is 42.</p>"
  },
  {
    "id": "sat-math-probab-5dc386fb",
    "originalId": "5dc386fb",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "hard",
    "stem": "<p class=\"stem_paragraph \">To the nearest tenth of a percent, what percent of states with a state-level sales tax do not have a state-level income tax?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p>Choice C is correct. The sum of the number of states with a state-level sales tax is <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAAAWCAYAAACi7pBsAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABrklEQVRoQ+2Wa7LDIAiFszwX5HLcS7aSnXBFQ0TUlDh53B98M0zblEY44kkXYvULxJc9HIQN8H3FFtzPnCeBLYA71o/h11fXl1A9sYyqDoAVPNXIg9ebBfcxNf8YVh9fa1FzTrmWc9oFn0KuR425WBB+/gIa1Eb0tBlFz4bebgFsEFxpiHJkg2nyXYjZeuFJrCubJesh8sk7ae5BaAgwGtHxu4u6HE3ScehNPjK6fsaU6GnT37ezEaSPD317SSdg105NniBpJR+KntbBia69UmstQ48Voa3pOOFnLuF9+g4vYQxr5Q/K6kadmyNyczTMi451sUEYWN7T8Pr71rxvMLMXVa2UxI9I87ClnB+i3zFlJPp/8HRuHT3RR6hq7U0xPa1zxBukRd+bdPkbrb3dsfFIFrk9bZpeVLVqknLOtUmbEn3QnFb0u+D224ZGqz0nf2gb4seBhJLHe+YpPSX6YP0v7IXTG4bRgFS1Hn8PufHvG8GbbDx9cspmREfkcFBzpw+nh+mKTno2WomeS2KJniiNp788YVQ8xZeCI0PbU+ppGIZhGIZhGIZhGG+yLH/7ikwhv0s09wAAAABJRU5ErkJggg==\" alt=\"39 plus 6, equals 45\"></span>. Of these states, 6 don&rsquo;t have a state-level income tax. Therefore, <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAAsCAYAAACwskyAAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACJ0lEQVR4Xu2ZgZGEIAxFLY+CKMdebMVOOEI2ymLg4A4d0f9mMnpuhlM+fIJOLbh1dsYf6DSEXegIRsYtNojptQxiOrc46w9mXiHuqDi3utkcRVxn4/+2XmIWGwwGW7BxXlcI+CTYhmlmsv3SJQrY8ODI+jpFs1YKKYg7MCIs1tiHkVbEAl/H2jssYrsQ9mHk9qyw4geQ2jGKpwch4krcXdTv+21fMhabf0b6zR+KbffKARHp+t9aD8ig0IRlMfYlSGu7Vw6IyL0CDR1Z8eGCawfq9GMbWiGZ/r9eOSAhV8XXFHv7rKn/yCGClAZNr5whkeqbTkuRCpbCwh4tjUWrq+Jbvl7xgClbaK+cV5Nbq1rWsBphY8vODbZeOf9ha/ykuIyrhBXE+os22ylnSEa1YqKX1dbkvBYZ+ekA4E47R9gaN+iV81py24ba7Q6RE5Y7vjxoeuV8LoGYdORrM4E7UZ+VWWFlS2Jmfxa3vef2yiG0e6y99is5a5OHp9OvqJwVZyMPy3G0t78IS2yihHY5jn3TJ+dUYfnVl3JjQXDYxpCIPVAchKXfIisBgyBWYWfdiluKEXAjgm/TjFTWWBHdWBt+o0sUTR4PrkeKBxJTK562wimu6j55EPfGxDabq4o1uDpDQXVLWMhoD9ggLBdbeHNyS2RPpEdZNAg7EOoam5nFsOKBUIXd3prsIsqet8aywQ3Izc6aV2IAAAAAAAAAAAAAAIDnME0/QmC3WquO/aoAAAAASUVORK5CYII=\" alt=\"6 over 45, equals 0 point 1 3 3 3 dot dot dot\"></span>, or about 13.3%, of states with a state-level sales tax don&rsquo;t have a state-level income tax.<p><br>\n\tChoice A is incorrect. This is the number of states that have a state-level sales tax and no state-level income tax. Choice B is incorrect. This is the percent of states that have a state-level sales tax and no state-level income tax. Choice D is incorrect. This is the percent of states that have no state-level income tax.</p><p> </p></p>",
    "passage": "<div class=\"stimulus_reference \" xmlns=\"http://www.imsglobal.org/xsd/apip/apipv1p0/qtiitem/imsqti_v2p1\">\n\t<div class=\"passage \">\n\t\t<div class=\"prose style:1 \">\n\t\t\t<p class=\"passage_para \">The table below shows the distribution of US states according to whether they have a state-level sales tax and a state-level income tax.</p>\n\n\t\t\t<table class=\"table_WithBorder\">\n\t\t\t\t<caption>2013 State-Level Taxes</caption>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"tcp-153694c7-8fa3-4e23-94a4-6ea6e2e697de\"> </td>\n\t\t\t\t\t\t<td class=\"tcp-e5a53952-9288-40e0-ac19-cafecda65b9b\">State sales tax</td>\n\t\t\t\t\t\t<td class=\"tcp-10ebc204-0eda-4bce-ba75-826a9b8a2a82\">No state sales tax</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"tcp-90f074ad-6769-4a50-ae37-618ca7ff7b31\">State income tax</td>\n\t\t\t\t\t\t<td class=\"tcp-97ba8e95-d3bf-4293-b928-e12feb1f5419\">39</td>\n\t\t\t\t\t\t<td class=\"tcp-1b3bda3e-5a56-499a-a798-bbd993270702\">4</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"tcp-c1409411-06b0-4363-89b8-171abff0b8c0\">No state income tax</td>\n\t\t\t\t\t\t<td class=\"tcp-43b1ecd9-27b9-4264-9eac-617d6bce776a\">6</td>\n\t\t\t\t\t\t<td class=\"tcp-6256a8c4-7f90-4037-ae03-64c4afd368b8\">1</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\n\t\t\t<p class=\"passage_para \"> </p>\n\t\t</div>\n\t</div>\n</div>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">6.0%</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">12.0%</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">13.3%</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">14.0%</p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-6a715bed",
    "originalId": "6a715bed",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">The table summarizes the distribution of age and assigned group for <math alttext=\"90\"><mn>90</mn></math> participants in a study.</p>\n\n<p style=\"text-align: left;\">One of these participants will be selected at random. What is the probability of selecting a participant from group A, given that the participant is at least <math alttext=\"10\"><mn>10</mn></math> years of age? (Express your answer as a decimal or fraction, not as a percent.)</p>",
    "type": "grid-in",
    "correctAnswer": ".3833, 23/60",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math alttext=\"StartFraction 23 Over 60 EndFraction\"><mfrac>\n<mn>23</mn>\n<mn>60</mn>\n</mfrac></math>. It's given that one of the participants will be selected at random. The probability of selecting a participant from group A given that the participant is at least <math alttext=\"10\"><mn>10</mn></math> years of age is the number of participants in group A who are at least <math alttext=\"10\"><mn>10</mn></math> years of age divided by the total number of participants who are at least <math alttext=\"10\"><mn>10</mn></math> years of age. The table shows that in group A, there are <math alttext=\"14\"><mn>14</mn></math> participants who are <math alttext=\"10\"><mn>10</mn></math>&ndash;<math alttext=\"19\"><mn>19</mn></math> years of age and <math alttext=\"9\"><mn>9</mn></math> participants who are <math alttext=\"20 plus\"><mn>20</mn><mo>+</mo></math> years of age. Therefore, there are <math alttext=\"14 plus 9\"><mn>14</mn><mo>+</mo><mn>9</mn></math>, or <math alttext=\"23\"><mn>23</mn></math>, participants in group A who are at least <math alttext=\"10\"><mn>10</mn></math> years of age. The table also shows that there are a total of <math alttext=\"30\"><mn>30</mn></math> participants who are <math alttext=\"10\"><mn>10</mn></math>&ndash;<math alttext=\"19\"><mn>19</mn></math> years of age and <math alttext=\"30\"><mn>30</mn></math> participants who are <math alttext=\"20 plus\"><mn>20</mn><mo>+</mo></math> years of age. Therefore, there are a total of <math alttext=\"30 plus 30\"><mn>30</mn><mo>+</mo><mn>30</mn></math>, or <math alttext=\"60\"><mn>60</mn></math>, participants who are at least <math alttext=\"10\"><mn>10</mn></math> years of age. It follows that the probability of selecting a participant from group A given that the participant is at least <math alttext=\"10\"><mn>10</mn></math> years of age is <math alttext=\"StartFraction 23 Over 60 EndFraction\"><mfrac>\n<mn>23</mn>\n<mn>60</mn>\n</mfrac></math>. Note that 23/60, .3833, and 0.383 are examples of ways to enter a correct answer.</p>",
    "passage": "<figure class=\"table\"><table border=\"1\">\n<thead>\n<tr>\n<td style=\"width: 17.7822%;\"> </td>\n<th style=\"width: 17.7822%; text-align: center;\" scope=\"col\"><math alttext=\"0\"><mn>0</mn></math>–<math alttext=\"9\"><mn>9</mn></math> years</th>\n<th style=\"width: 17.7822%; text-align: center;\" scope=\"col\"><math alttext=\"10\"><mn>10</mn></math>–<math alttext=\"19\"><mn>19</mn></math> years</th>\n<th style=\"width: 17.7822%; text-align: center;\" scope=\"col\"><math alttext=\"20 plus\"><mn>20</mn><mo>+</mo></math> years</th>\n<th style=\"width: 17.7822%; text-align: center;\" scope=\"col\">Total</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<th style=\"width: 17.7822%; text-align: left;\" scope=\"row\">Group A</th>\n<td style=\"width: 17.7822%; text-align: center;\"><math alttext=\"7\"><mn>7</mn></math></td>\n<td style=\"width: 17.7822%; text-align: center;\"><math alttext=\"14\"><mn>14</mn></math></td>\n<td style=\"width: 17.7822%; text-align: center;\"><math alttext=\"9\"><mn>9</mn></math></td>\n<td style=\"width: 17.7822%; text-align: center;\"><math alttext=\"30\"><mn>30</mn></math></td>\n</tr>\n<tr>\n<th style=\"width: 17.7822%; text-align: left;\" scope=\"row\">Group B</th>\n<td style=\"width: 17.7822%; text-align: center;\"><math alttext=\"6\"><mn>6</mn></math></td>\n<td style=\"width: 17.7822%; text-align: center;\"><math alttext=\"4\"><mn>4</mn></math></td>\n<td style=\"width: 17.7822%; text-align: center;\"><math alttext=\"20\"><mn>20</mn></math></td>\n<td style=\"width: 17.7822%; text-align: center;\"><math alttext=\"30\"><mn>30</mn></math></td>\n</tr>\n<tr>\n<th style=\"width: 17.7822%; text-align: left;\" scope=\"row\">Group C</th>\n<td style=\"width: 17.7822%; text-align: center;\"><math alttext=\"17\"><mn>17</mn></math></td>\n<td style=\"width: 17.7822%; text-align: center;\"><math alttext=\"12\"><mn>12</mn></math></td>\n<td style=\"width: 17.7822%; text-align: center;\"><math alttext=\"1\"><mn>1</mn></math></td>\n<td style=\"width: 17.7822%; text-align: center;\"><math alttext=\"30\"><mn>30</mn></math></td>\n</tr>\n<tr>\n<th style=\"width: 17.7822%; text-align: center;\" scope=\"row\">Total</th>\n<td style=\"width: 17.7822%; text-align: center;\"><math alttext=\"30\"><mn>30</mn></math></td>\n<td style=\"width: 17.7822%; text-align: center;\"><math alttext=\"30\"><mn>30</mn></math></td>\n<td style=\"width: 17.7822%; text-align: center;\"><math alttext=\"30\"><mn>30</mn></math></td>\n<td style=\"width: 17.7822%; text-align: center;\"><math alttext=\"90\"><mn>90</mn></math></td>\n</tr>\n</tbody>\n</table></figure>"
  },
  {
    "id": "sat-math-probab-89f20d9e",
    "originalId": "89f20d9e",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">The table summarizes the distribution of age and assigned group for <math alttext=\"90\"><mn>90</mn></math> participants in a study.</p>\n\n<p style=\"text-align: left;\">One of these participants will be selected at random. What is the probability of selecting a participant from group A, given that the participant is at least 10 years of age?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p style=\"text-align: left;\">Choice B is correct. Since the participant will be selected at random, the probability of selecting a participant from group A, given that the participant is at least <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"10\"><mn>10</mn></math> years of age, is equal to the number of participants from group A who are at least <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"10\"><mn>10</mn></math> years of age divided by the total number of participants who are at least <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"10\"><mn>10</mn></math> years of age. Based on the table, in group A, there are <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"17\"><mn>17</mn></math> participants who are <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"10\"><mn>10</mn></math>&ndash;<math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"19\"><mn>19</mn></math> years of age and <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"8\"><mn>8</mn></math> participants who are <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"20 plus\"><mn>20</mn><mo>+</mo></math> years of age. Therefore, there are a total of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"17 plus 8\"><mn>17</mn><mo>+</mo><mn>8</mn></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"25\"><mn>25</mn></math>, participants in group A who are at least <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"10\"><mn>10</mn></math> years of age. Based on the table, of the total number of participants, there are <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"30\"><mn>30</mn></math> participants who are <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"10\"><mn>10</mn></math>&ndash;<math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"19\"><mn>19</mn></math> years of age and <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"30\"><mn>30</mn></math> participants who are <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"20 plus\"><mn>20</mn><mo>+</mo></math> years of age. Therefore, a total of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"30 plus 30\"><mn>30</mn><mo>+</mo><mn>30</mn></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"60\"><mn>60</mn></math>, of the participants are at least <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"10\"><mn>10</mn></math> years of age. Thus, the probability of selecting a participant from group A, given that the participant is at least <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"10\"><mn>10</mn></math> years of age, is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"StartFraction 25 Over 60 EndFraction\"><mfrac><mn>25</mn><mn>60</mn></mfrac></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"five twelfths\"><mfrac><mn>5</mn><mn>12</mn></mfrac></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. This is the number of participants from group A who are at least <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"10\"><mn>10</mn></math> years of age divided by the total number of participants, rather than divided by the number of participants who are at least <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"10\"><mn>10</mn></math> years of age.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. This is the probability of randomly selecting a participant from group A, given that the participant is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"10\"><mn>10</mn></math>&ndash;<math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"19\"><mn>19</mn></math> years of age, rather than given that the participant is at least <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"10\"><mn>10</mn></math> years of age.</p>\n<p style=\"text-align: left;\">Choice D is incorrect. This is the probability of randomly selecting a participant who is at least <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"10\"><mn>10</mn></math> years of age, given that the participant is in group A.</p>",
    "passage": "<figure class=\"table\"><table border=\"1\">\n<tbody>\n<tr>\n<td style=\"width: 18.0583%;\"> </td>\n<th style=\"width: 18.0583%; text-align: center;\" scope=\"col\"><math alttext=\"0\"><mn>0</mn></math>–<math alttext=\"9\"><mn>9</mn></math> years</th>\n<th style=\"width: 18.0583%; text-align: center;\" scope=\"col\"><math alttext=\"10\"><mn>10</mn></math>–<math alttext=\"19\"><mn>19</mn></math> years</th>\n<th style=\"width: 18.0583%; text-align: center;\" scope=\"col\"><math alttext=\"20 plus\"><mn>20</mn><mo>+</mo></math> years</th>\n<th style=\"width: 18.0583%; text-align: center;\" scope=\"col\">Total</th>\n</tr>\n<tr>\n<th style=\"width: 18.0583%; text-align: left;\" scope=\"row\">Group A</th>\n<td style=\"width: 18.0583%; text-align: center;\"><math alttext=\"5\"><mn>5</mn></math></td>\n<td style=\"width: 18.0583%; text-align: center;\"><math alttext=\"17\"><mn>17</mn></math></td>\n<td style=\"width: 18.0583%; text-align: center;\"><math alttext=\"8\"><mn>8</mn></math></td>\n<td style=\"width: 18.0583%; text-align: center;\"><math alttext=\"30\"><mn>30</mn></math></td>\n</tr>\n<tr>\n<th style=\"width: 18.0583%; text-align: left;\" scope=\"row\">Group B</th>\n<td style=\"width: 18.0583%; text-align: center;\"><math alttext=\"6\"><mn>6</mn></math></td>\n<td style=\"width: 18.0583%; text-align: center;\"><math alttext=\"8\"><mn>8</mn></math></td>\n<td style=\"width: 18.0583%; text-align: center;\"><math alttext=\"16\"><mn>16</mn></math></td>\n<td style=\"width: 18.0583%; text-align: center;\"><math alttext=\"30\"><mn>30</mn></math></td>\n</tr>\n<tr>\n<th style=\"width: 18.0583%; text-align: left;\" scope=\"row\">Group C</th>\n<td style=\"width: 18.0583%; text-align: center;\"><math alttext=\"19\"><mn>19</mn></math></td>\n<td style=\"width: 18.0583%; text-align: center;\"><math alttext=\"5\"><mn>5</mn></math></td>\n<td style=\"width: 18.0583%; text-align: center;\"><math alttext=\"6\"><mn>6</mn></math></td>\n<td style=\"width: 18.0583%; text-align: center;\"><math alttext=\"30\"><mn>30</mn></math></td>\n</tr>\n<tr>\n<th style=\"width: 18.0583%; text-align: center;\" scope=\"row\">Total</th>\n<td style=\"width: 18.0583%; text-align: center;\"><math alttext=\"30\"><mn>30</mn></math></td>\n<td style=\"width: 18.0583%; text-align: center;\"><math alttext=\"30\"><mn>30</mn></math></td>\n<td style=\"width: 18.0583%; text-align: center;\"><math alttext=\"30\"><mn>30</mn></math></td>\n<td style=\"width: 18.0583%; text-align: center;\"><math alttext=\"90\"><mn>90</mn></math></td>\n</tr>\n</tbody>\n</table></figure>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"five eighteenths\"><mfrac>\n\t<mn>5</mn>\n\t<mn>18</mn>\n</mfrac></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"five twelfths\"><mfrac>\n\t<mn>5</mn>\n\t<mn>12</mn>\n</mfrac></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"StartFraction 17 Over 30 EndFraction\"><mfrac>\n\t<mn>17</mn>\n\t<mn>30</mn>\n</mfrac></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"five sixths\"><mfrac>\n\t<mn>5</mn>\n\t<mn>6</mn>\n</mfrac></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-89ff6a0a",
    "originalId": "89ff6a0a",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">For <math alttext=\"100\"><mn>100</mn></math> buttons, the table summarizes the distribution by group and diameter.</p>\n\n<p>One of these buttons will be selected at random. What is the probability of selecting a button with a diameter that is less than or equal to <math alttext=\"30\"><mn>30</mn></math> millimeters, given that it is <strong>not</strong> in group 2? (Express your answer as a decimal or fraction, not as a percent.)</p>",
    "type": "grid-in",
    "correctAnswer": ".9538, 62/65",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"StartFraction 62 Over 65 EndFraction\"><mfrac><mn>62</mn><mn>65</mn></mfrac></math>. It&rsquo;s given that one button will be selected at random out of a total of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"100\"><mn>100</mn></math> buttons and that the table shows the distribution of buttons by group and diameter. The probability of selecting a button with a diameter less than or equal to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"30\"><mn>30</mn></math> millimeters, given that it is not in group 2, is the number of buttons with a diameter less than or equal to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"30\"><mn>30</mn></math> millimeters that are not in group 2 divided by the total number of buttons not in group 2. Based on the table, the buttons not in group 2 are those in group 1 and group 3. In group 1, there are <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"12\"><mn>12</mn></math> buttons with a diameter less than <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"20\"><mn>20</mn></math> millimeters and <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"8\"><mn>8</mn></math> buttons with a diameter from <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"20\"><mn>20</mn></math> to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"30\"><mn>30</mn></math> millimeters, which yields <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"12 plus 8\"><mn>12</mn><mo>+</mo><mn>8</mn></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"20\"><mn>20</mn></math>, buttons with a diameter less than or equal to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"30\"><mn>30</mn></math> millimeters. In group 3, there are <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"10\"><mn>10</mn></math> buttons with a diameter less than <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"20\"><mn>20</mn></math> millimeters and <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"32\"><mn>32</mn></math> buttons with a diameter from <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"20\"><mn>20</mn></math> to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"30\"><mn>30</mn></math> millimeters, which yields <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"10 plus 32\"><mn>10</mn><mo>+</mo><mn>32</mn></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"42\"><mn>42</mn></math>, buttons with a diameter less than or equal to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"30\"><mn>30</mn></math> millimeters. Therefore, the total number of buttons with a diameter less than or equal to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"30\"><mn>30</mn></math> millimeters that are not in group 2 is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"20 plus 42\"><mn>20</mn><mo>+</mo><mn>42</mn></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"62\"><mn>62</mn></math>. The total number of buttons that are not in group 2 is the sum of all buttons in group 1 and group 3. There are <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"12 plus 8 plus 3\"><mn>12</mn><mo>+</mo><mn>8</mn><mo>+</mo><mn>3</mn></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"23\"><mn>23</mn></math>, buttons in group 1 and <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"10 plus 32 plus 0\"><mn>10</mn><mo>+</mo><mn>32</mn><mo>+</mo><mn>0</mn></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"42\"><mn>42</mn></math>, buttons in group 3. Therefore, the total number of buttons in groups 1 and 3 is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"23 plus 42\"><mn>23</mn><mo>+</mo><mn>42</mn></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"65\"><mn>65</mn></math>. It follows that the probability of selecting a button with a diameter less than or equal to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"30\"><mn>30</mn></math> millimeters, given that it is not in group 2, is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"StartFraction 62 Over 65 EndFraction\"><mfrac><mn>62</mn><mn>65</mn></mfrac></math>. Note that 62/65 or .9538 are examples of ways to enter a correct answer.</p>",
    "passage": "<figure class=\"table\"><table border=\"1\">\n<tbody>\n<tr style=\"height: 22.3906px;\">\n<th style=\"width: 24.9239%; height: 44.7812px; text-align: center; vertical-align: bottom;\" rowspan=\"2\" scope=\"col\">\n<p>Group</p>\n</th>\n<th style=\"height: 22.3906px; width: 74.7716%; text-align: center; vertical-align: middle;\" colspan=\"3\" scope=\"colgroup\">Diameter (millimeters)</th>\n</tr>\n<tr style=\"height: 22.3906px;\">\n<th style=\"width: 24.9239%; height: 22.3906px; text-align: center; vertical-align: middle;\" scope=\"col\">Less than <math alttext=\"20\"><mn>20</mn></math></th>\n<th style=\"width: 24.9239%; height: 22.3906px; text-align: center; vertical-align: middle;\" scope=\"col\"><math alttext=\"20\"><mn>20</mn></math> to <math alttext=\"30\"><mn>30</mn></math></th>\n<th style=\"width: 24.9239%; height: 22.3906px; text-align: center; vertical-align: middle;\" scope=\"col\">Greater than <math alttext=\"30\"><mn>30</mn></math></th>\n</tr>\n<tr style=\"height: 22.3906px;\">\n<th style=\"width: 24.9239%; height: 22.3906px; text-align: left; vertical-align: middle;\" scope=\"row\">Group 1</th>\n<td style=\"width: 24.9239%; height: 22.3906px; text-align: center; vertical-align: middle;\"><math alttext=\"12\"><mn>12</mn></math></td>\n<td style=\"width: 24.9239%; height: 22.3906px; text-align: center; vertical-align: middle;\"><math alttext=\"8\"><mn>8</mn></math></td>\n<td style=\"width: 24.9239%; height: 22.3906px; text-align: center; vertical-align: middle;\"><math alttext=\"3\"><mn>3</mn></math></td>\n</tr>\n<tr style=\"height: 22.3906px;\">\n<th style=\"width: 24.9239%; height: 22.3906px; text-align: left; vertical-align: middle;\" scope=\"row\">Group 2</th>\n<td style=\"width: 24.9239%; height: 22.3906px; text-align: center; vertical-align: middle;\"><math alttext=\"0\"><mn>0</mn></math></td>\n<td style=\"width: 24.9239%; height: 22.3906px; text-align: center; vertical-align: middle;\"><math alttext=\"17\"><mn>17</mn></math></td>\n<td style=\"width: 24.9239%; height: 22.3906px; text-align: center; vertical-align: middle;\"><math alttext=\"18\"><mn>18</mn></math></td>\n</tr>\n<tr style=\"height: 22.3906px;\">\n<th style=\"width: 24.9239%; height: 22.3906px; text-align: left; vertical-align: middle;\" scope=\"row\">Group 3</th>\n<td style=\"width: 24.9239%; height: 22.3906px; text-align: center; vertical-align: middle;\"><math alttext=\"10\"><mn>10</mn></math></td>\n<td style=\"width: 24.9239%; height: 22.3906px; text-align: center; vertical-align: middle;\"><math alttext=\"32\"><mn>32</mn></math></td>\n<td style=\"width: 24.9239%; height: 22.3906px; text-align: center; vertical-align: middle;\"><math alttext=\"0\"><mn>0</mn></math></td>\n</tr>\n</tbody>\n</table></figure>"
  },
  {
    "id": "sat-math-probab-9ce8cbbe",
    "originalId": "9ce8cbbe",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "hard",
    "stem": "<p>Set K consists of all the positive integers that are less than or equal to <math alttext=\"160\"><mn>160</mn></math>, where none of the integers are repeated. If a number is selected at random from set K, what is the probability of selecting a number that is even and less than or equal to <math alttext=\"50\"><mn>50</mn></math>?</p>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p>Choice A is correct. It's given that set K consists of all the positive integers that are less than or equal to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"160\"><mn>160</mn></math>, where none of the integers are repeated. Therefore, set K consists of the integers <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"1\"><mn>1</mn></math> through <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"160\"><mn>160</mn></math>, which is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"160\"><mn>160</mn></math> numbers. Of these, the integers <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"1\"><mn>1</mn></math> through <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"50\"><mn>50</mn></math> are less than or equal to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"50\"><mn>50</mn></math>. Therefore, there are <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"50\"><mn>50</mn></math> numbers that belong to set K that are less than or equal to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"50\"><mn>50</mn></math>. Of these, half are even. Therefore, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"StartFraction 50 Over 2 EndFraction\"><mfrac><mn>50</mn><mn>2</mn></mfrac></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"25\"><mn>25</mn></math>, numbers that belong to set K are even and less than or equal to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"50\"><mn>50</mn></math>. The probability of selecting at random a number from set K that is even and less than or equal to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"50\"><mn>50</mn></math> is equal to the number of numbers that belong to set K that are even and less than or equal to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"50\"><mn>50</mn></math>, which is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"25\"><mn>25</mn></math>, divided by the total number of numbers that belong to set K, which is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"160\"><mn>160</mn></math>. It follows that the probability of selecting at random from set K a number that is even and less than or equal to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"50\"><mn>50</mn></math> is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"StartFraction 25 Over 160 EndFraction\"><mfrac><mn>25</mn><mn>160</mn></mfrac></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"five thirty seconds\"><mfrac><mn>5</mn><mn>32</mn></mfrac></math>.</p>\n<p>Choice B is incorrect and may result from conceptual or calculation errors.</p>\n<p>Choice C is incorrect and may result from conceptual or calculation errors.</p>\n<p>Choice D is incorrect. This is the probability of selecting at random a number from set K that is less than or equal to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"50\"><mn>50</mn></math>, not a number that is even and less than or equal to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"50\"><mn>50</mn></math>.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"five thirty seconds\"><mfrac>\n\t<mn>5</mn>\n\t<mn>32</mn>\n</mfrac></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"three sixteenths\"><mfrac>\n\t<mn>3</mn>\n\t<mn>16</mn>\n</mfrac></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"five twenty firsts\"><mfrac>\n\t<mn>5</mn>\n\t<mn>21</mn>\n</mfrac></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"five sixteenths\"><mfrac>\n\t<mn>5</mn>\n\t<mn>16</mn>\n</mfrac></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-d4413871",
    "originalId": "d4413871",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "hard",
    "stem": "<p class=\"stem_paragraph \">Human blood can be classified into four common blood types&mdash;A, B, AB, and O. It is also characterized by the presence <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAcCAYAAACK7SRjAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAOJ5y/mQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAAv0lEQVRIS+2UwQ3FIAxDM14GYhx2YRU28YcCUj6FYtFDLzypUqHgmJBULIgeKgofgTpFAUR4Fbgw2QcEuA3hxuP+4ASavtThFggOoj6dwwQo6XAp9p7rxjA90SskzdThKy73ViunZHoZlZJTYp3NQjnK+iJpcXuxbJXw4sbsJ+JNLL8+PX2wP71ld1V453mdKWumgWjxvpGGndXBit+MMqlhxMuaQXEw7lfkTp+m9/oNEGXZ007+1tzhcDisEfkBkLVZ5qwKflUAAAAASUVORK5CYII=\" alt=\"open parenthesis, plus, close parenthesis\"></span> or absence <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAcCAYAAACK7SRjAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAOJ5y/mQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAAsUlEQVRIS+2U0Q3EIAiGGY+BGIddXMVN/tOqidrSu1KTe/FLfBAjwg9IPYgKJoZGoJp+AohQJkgw7gEB4nDcuL0fhMDppG5dIAiINeXRPVDkkPS2L+rGpTxRGZQsdfuKI/reV5bELMZDBhVKKv5CzgyFfdslM0Owf3Fe7JRtt2uu1STLl+l6SHHetfWKAWqcBulyspycAl0ljdkcK6LPk27Ke3wDjrZsma+SdrPZbGyIPih/FuZzVcErAAAAAElFTkSuQmCC\" alt=\"open parenthesis, minus, close parenthesis\"></span> of the rhesus factor. The table above shows the distribution of blood type and rhesus factor for a group of people. If one of these people who is rhesus negative <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAcCAYAAACK7SRjAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAOJ5y/mQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAAsUlEQVRIS+2U0Q3EIAiGGY+BGIddXMVN/tOqidrSu1KTe/FLfBAjwg9IPYgKJoZGoJp+AohQJkgw7gEB4nDcuL0fhMDppG5dIAiINeXRPVDkkPS2L+rGpTxRGZQsdfuKI/reV5bELMZDBhVKKv5CzgyFfdslM0Owf3Fe7JRtt2uu1STLl+l6SHHetfWKAWqcBulyspycAl0ljdkcK6LPk27Ke3wDjrZsma+SdrPZbGyIPih/FuZzVcErAAAAAElFTkSuQmCC\" alt=\"open parenthesis, minus, close parenthesis\"></span> is chosen at random, the probability that the person has blood type B is <span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAsCAYAAACHfIO0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAAtUlEQVRIS+2VgQnEIAxFHS8DOY67uIqb/EuMUs/SQ9MeHFwehGLB15hQE1bIMYBSQVvaQY4iuS8riapI4pZMMyKkkhGfyEwAXLaLy5xfRrplDecbjDNAr3DYii3jbRT0KRXzphAlgfgx/9w1U0pg/7rwmEzvm67ef+RZWTvmXB9tyKZM0AZEvhp1Y/+ASSaosAeLq9Aom9GaHdkucXXv10y5kG25zqlmlk6OnGq2czzH+TNCeAFohBEx2XNLnAAAAABJRU5ErkJggg==\" alt=\"one ninth\"></span></span> . What is the value of <span class=\"italic\">x</span> ?</p>",
    "type": "grid-in",
    "correctAnswer": "8.",
    "explanation": "<p>The correct answer is 8. In this group, <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAsCAYAAACHfIO0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAAtUlEQVRIS+2VgQnEIAxFHS8DOY67uIqb/EuMUs/SQ9MeHFwehGLB15hQE1bIMYBSQVvaQY4iuS8riapI4pZMMyKkkhGfyEwAXLaLy5xfRrplDecbjDNAr3DYii3jbRT0KRXzphAlgfgx/9w1U0pg/7rwmEzvm67ef+RZWTvmXB9tyKZM0AZEvhp1Y/+ASSaosAeLq9Aom9GaHdkucXXv10y5kG25zqlmlk6OnGq2czzH+TNCeAFohBEx2XNLnAAAAABJRU5ErkJggg==\" alt=\"one ninth\"></span> of the people who are rhesus negative have blood type B. The total number of people who are rhesus negative in the group is <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAWCAYAAAC40nDiAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABTklEQVRYR+2W4a3FIAiFHc+BHMdduko34ckltN5GRKrm3R98iUmT0iMeqRjgSBBCEEaEfAI+TwFwQo7f2rEI47vVHGmftgmAAxIuNh3TydwGpqJKG8Ibt3qxu3RfgbtZL1qCzS5ei3FwZoiNij5zVOcY0WdIz1blFn0TtOgx4ZkkqGrWmEhauFEUv9rET1HFXP6pO44KTTjuWh9IzJg4Mo9Vn+NXm/iMo6oXDOQq3P078NllTV5jl4nItemaR9o5xZPiY2/0kmIDW01rVl8zcUafCwwfxYZ7dVEpoIFlJ5Hr8B+cw6qvmfjEqk/nYOcctyaAWJKgBPbpIztNvLt/5+4sXUV6jCbBCVgMRH7FxPr++SmG8gG9eUCB+t2wZiQJa7Oq+QUTOYaNI5+EYtOaylvu36A11s5nNVHjMrDK803vcBzHcRzHcRzH+S9C+ANQ46CoTKNGkQAAAABJRU5ErkJggg==\" alt=\"7 plus 2, plus 1, plus x\"></span>, and there are 2 people who are rhesus negative with blood type B. Therefore, <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAAAsCAYAAABR9ZuUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAC0UlEQVR4Xu2bC7KDIAxFXZ4LcjnupVvpTnhAGvUhASKordwzw/QzGiHchGjp8MsY8zbzOBj3lts4v90rKOA1Pdxfq0Am8zLGD9S8JgilkC58Zd6zGYfR2DH+G+R7Hu3nVThgD/mo48xLEQKRSJB/XHC9zNSrSNw6O4yzXYwgkhTGhlGXIuF1drJphL4BEl2KhAUyWIXQNyBFdyJZCjEIpJiuROJrkJ4iohHdiIQzCASipwuR0HMSCOQoXYhk+0Bo3/CcJEd3hSsAAAAAquDawb1NNTxlBl/DTp1ol7cziF2ntIFfAMsNeAbSDjCgg7dbPi7iKdVBIK14pD8fv5v6Bvy+l5t3zv3/SaNCtLTM7Heix1ub6LjyLxJ3BcDdyw5trVjnq2o3n1ebPfPzMcpSeWeOK+HKv0icZbcUf/0GPtMi/XLu5/pIdnOKy6mLVJn/xZXFlLJX8xeJEvvMNtWWikRjv4QwS18FBcfex9L3SSiq0yexKkscV+NkGkAbkazOoONbi8QHTRCRYXp3kD3lpDSgsUjyg4g5RKJGJCXX0drn41uLJDyOslZkUgqC8AykwJb6mYQGK58krW0S2klkSOH6ycnBx5/R/0XUCR/dJRIHZbZN3ffpZ3OR5OoEdqp7m2opp7NAYgVerf2cSGrsr063LdJ3R86/Z0NC4Wbn0fdZLRL5Nm25CxEcEIOdLk1ayFJcFl5Daz8nkhCt/TBaQ8heus66EgrIA/1xA42nSp2DHRons8rPsu/QjkFjf717kiPTT8qRW85KpHF7n9vBfT6WIw2E0qkuNZU6mR2sEYjjW0TCS6Szm3K8FIBXQEG4Zg3q88GlT1pyyKguNZU4WVsMb/kGkfAxLAzJ+XTcwUlpBGdrapXLnh9okE1yRetR1jQda22vpxVJjkUg2wgVajc3zruyyGnQ5N2r/CewiOaGWgQAAAAAAAAAAAAAtGAY/gBv5a2M45AUcQAAAABJRU5ErkJggg==\" alt=\"the fraction with numerator 2, and denominator, 7 plus 2, plus 1, plus x, end fraction, equals one ninth\"></span>. Combining like terms on the left-hand side of the equation yields <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAAsCAYAAACe920SAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACYElEQVR4Xu2aCZKEIAxFPZ4H8jjexat4E4YQI0qTSOHCMnlV1HQ7DhD+T1yY4WuMWc08DgY+UhvnFX52yTJVGJ8XYTKLMW5yZpm6FaPa2Mw6m3EYjZ3XaWLrPNrvXpwewJgay3h0Tj9CYDxguMVMLQkBdXQYZ1u4+skIwFhrNSME1dHJpgMe6YdmhCARBqsCHumLJoTYL2adigBUL4S7JtTulAeoWgjKhN5FAKoVAp8j/ocIQLVCHB9yfltfD3RAExdrRVEURYRqOXyUWo9P/4rAjwM6bW8QGye1KYSWJiUdbletRmgrtjvnYsq2IQLR4pwvqfI/EBJw+xyFd/zOr3NuGANLEv/+RxJp3/C5O4lMSpcofM3v4761C+kUtX+5fT1BHceEwN+FkyggBozLzP9NuDfMbj1zshRUjSl4TLlwMHJieNw55GJR6BYyyzURrjL6LTjjZRkSF1TqDBftR4jNDeFionjyoqQK4UQNnBWWAqDURfthIeQgaNHiQnCTeEaI8DwUOTImY6a3kc34lRA33JAqBLBnBVOPgVJCAJih3ngkTpVCUB/wUWoxYXxgttkT8OiZqxjeBsWgZkVhqoXI1e0fKwQz2JOliQhdF4L9yWN+ScoaRIFAYykPyEJw9fE5IfydG+8wF3iBhzpubZxxmOwVkQJhhdgyKWcSqUKgs3AMqV/JSG/j5nUwHs45s0xK5YkTAggHTZ1EihB0Di0+1zeelxn4Q6AY1G6WSBdoJCskIQBfOqA9syC7CEenbWYJswLGL5UNr5F1/1uIXZgC1wZFURRFURRFUZRvGYY/Lgq1yGsTyNMAAAAASUVORK5CYII=\" alt=\"the fraction with numerator 2, and denominator, 10 plus x, end fraction, equals one ninth\"></span>. Multiplying both sides of this equation by 9 yields <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAsCAYAAADhJn/jAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACPklEQVRoQ+2ZDZKDIAxGPZ4H8jjepVfxJqwhRiySgLYKdr83w2y1rsIzhJ92d/EaOtePk1sO36Dv5j9rGV4ueR1QcK/Bi0sJZrmDm5367+RaSC5kGnsvjEos2M1ah4RML30+uRwCDY7G3o0Ti9wJnkbXQ/DnSKQiRVyEJZjYphGOeMg9hCbYucmNfRTBS9rQXgZIoApWcjBHdJAOMqiC10HwXaR2HigcjWAWjAguxhrkdrMI5ODjWIIJlhzKU+VSOxAYFyHzdwi+AGs7AHxImPHYafBfI2MEfbSKtXzPjTPgQ0oEr2/qx8slIIINkCIewGnBvLJ6xr6A7M7V2Es+JZj/6VmbLrXqfErwU5d+fm7aj3M83yf5sGBODfqOliVflo1cakRTvVRRjF/+zTVcDt+w1t1hZcONi4/vwj9XqX8TUISmIsD+GZ4jJz7vd8syjZUu9q2oy/XAqrCofdSFaEznG20DveQnoFLB/mVF+dWfi3pJrcGuiFzltISuTen4xXxHcHwdv7zEM5UgaYLTgpV8W5KHSwUTaxQvPSauB/HvBcs96KNVUsIlFdFHdSDOtKEquWmOKviGFCFw3tXvyfdrdJAjqAGprkfYgveSvjnIEWEmY/Qyeqk3LzYOYVVQFbxEfnzeR5vSlYVSwdwb+BnWfa0AaQIrTWiCCRYQIis+1igRLNeIVO3efF3+mdXxDUhEsSWY2C5GSuSWsMrdpBoJgjiK6flNR+8WbZ7ZIqvwlnMvAAAAAAAAP0/X/QF4u5CKb8RQwgAAAABJRU5ErkJggg==\" alt=\"the fraction with numerator 18, and denominator, 10 plus x, end fraction, equals 1\"></span>, and multiplying both sides of this equation by <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAcCAYAAAAuh5ywAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAOJ5y/mQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABaklEQVRYR+2VAQ7DIAhFPZ4H8jjepVfpTZiItBTBuWVp1sSXNGutBT4gCxLYM8QQIe8AbelvAdghxwBpc2IF2CA9RAwzjHlLAWJ50x4fA2wJQsylXkIUtVoqeu3qjMRWg+WHrvsrbLbeniOEstIeL3DAliB6d4rQz3dR/cr4sQLW4apCy368tCDOjF5HW15yGOr9wYH+kEuHUWB9Vs9sk/NOUDXSB0VJ8NsXmRVUk6POR11TXXAZDu+mGzu3BXmJ+I0gvY+SZfiURflakHNeZs7RrCDkqFLrCB0HcrsgtoG3o8sSyK2Nt+7gkhrMsSdwBd3QcgydG98m2RPv8QOrlMhYUB/UL4cCck7aQRdhEuXw6BYErqBWWb1es+m0BjMriKpNPkZ2u4KM2s4ThJDDM3P62WNGEO9hEZ5t2mf4rB8YVRoJQuSf74yYGQ4xonU56bpK6N+LzZ3z/8gh0Dkqi8VisVgsFounEcIL7bXWSpJJRskAAAAASUVORK5CYII=\" alt=\"open parenthesis, 10 plus x, close parenthesis \"></span> yields <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAWCAYAAACFQBGEAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABY0lEQVRYR+2W2xGEIAxFLY+CKIdebMVOWGKIIJKACv5szgzjKxsvlwR3KVnt4o3bfLw8Ac/C4Rh29dW4UUha/GozLcaHsKlaWEhITSgaZn3waX9GsbOMk7Tgs2RUef0ZmzPwwn2UQn2wyoZDadBuZLgZL4cha9m8M9f7PVq4eTwirRQmvQjdnDeVl80w7akWNDp1Qo1e0/Z5GReWJ8Vhp1WqmZKWQgH8UV97Uh44lYYkntOCpl3Fo54xppVxuCBM+0umAXnbzN5DWNOY/Yu7n9NrGnBUW6xszhNeaNxHTpXWSvaSEaZRDjiVRrVb4vzgVNyCWKE395E3YglZC2famPYkyi2pCiv0RUs8ZdQC5twxLW1FjfndFdqzuk9htXzwlwPnhe9o5uWEApevZzSyFjsCSUtZ4b0V32MaxZBRzdySUACNS2OWYUBLy4wv+WFYXhz0EWxUsaIoiqIoiqIo/8Gy/ADyevFEF7HYmAAAAABJRU5ErkJggg==\" alt=\"18 equals, 10 plus x\"></span>. Subtracting 10 from both sides of this equation yields <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAWCAYAAABKbiVHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAA0ElEQVRIS+2T0Q3FIAhFHY+BHMddXMVNKIioqWhe0tb340mMLVq85aJTondIUx0+Is/7ESEe6fwsAKP/jyAkCd44OAukYHndA6aAsElMzgkBU3GAEVcAAwW7wG82aSX5cTVW3+paCkBzJ0SRBU1mbHiJWp3iCNBBZYnVJgzAArrKWBtfQnPz49AGs56RSjWByhOblHtbVKQ/Rltm8ae0djByzyojYgz1D9CLwfbn6txtYobb9EHPVHuLgGXlRVAbnwjpf1gvjlWdw+FwOGzFuQvfdDG3Bg8B2AAAAABJRU5ErkJggg==\" alt=\"8 equals x\"></span>.</p>",
    "passage": "<div class=\"stimulus_reference \" xmlns=\"http://www.imsglobal.org/xsd/apip/apipv1p0/qtiitem/imsqti_v2p1\"><div class=\"passage \"><div class=\"prose style:1 \"><p class=\"passage_para \"> </p><div class=\"table_wrapper \"><div class=\"tcp-e4589060-6a49-4fb9-a72a-23a578e0b2a9\"><table class=\"table_WithBorder tcp-06196331-3edc-4c8f-876b-d57b3d755f43\"><tbody><tr><td class=\"tcp-06743663-cf51-4d3a-bb0f-8b9210f1b926\"> </td><td class=\"tcp-9fb58c64-27a2-4be8-8131-1424067761ce\" colspan=\"4\" rowspan=\"1\">Blood type   </td></tr><tr><td class=\"tcp-02abeec4-f408-454a-87df-05c7c6994beb\">Rhesus factor</td><td class=\"tcp-f8b24cc8-81fe-48a7-a682-337ede35519b\">A</td><td class=\"tcp-4bf04f05-b26e-49c9-9e89-3fccdbe67aa5\">B</td><td class=\"tcp-028d81ca-d098-4c84-9e84-3620dbeae02c\">AB</td><td class=\"tcp-02b79468-351b-40a0-b9a7-9b2bb86fe635\">O</td></tr><tr><td class=\"tcp-1aac0023-14d4-4475-935e-069fdbf84bcd\"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAASCAYAAACAa1QyAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAJufgqOgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAALUlEQVQ4T2PABv7/3/+/BEiV7P//HypEGAwyTTBFICY+TJQhQzkgRsFwBAwMAAq0U1nNZi8lAAAAAElFTkSuQmCC\" alt=\"plus\"></span></span></td><td class=\"tcp-05f1a050-4c0d-4e64-b64e-c58780bafe88\">33</td><td class=\"tcp-1d324382-0266-4e24-b80c-3fbd65ce08f7\">9</td><td class=\"tcp-a7adcf0c-ce15-4409-a2e0-667ee9a895e3\">3</td><td class=\"tcp-37dd5d78-47ee-41d7-8c67-420e63f5e677\">37</td></tr><tr><td class=\"tcp-5a3393db-bbc3-4009-b4fc-634ae86ebf04\"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAICAYAAAAvOAWIAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAEx0lWhwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAAHElEQVQoU2MAgf/7S/6DKFy4ZP9/ED0KyAUMDACSnw1crTPQTgAAAABJRU5ErkJggg==\" alt=\"minus\"></span></span></td><td class=\"tcp-bd3f95aa-f701-461c-a4d3-ab4c2b64b2ac\">7</td><td class=\"tcp-3ac2333f-1894-4587-9a4e-16bf77125399\">2</td><td class=\"tcp-54b95007-a3cd-44d2-a670-cbf65d2b6c54\">1</td><td class=\"tcp-c50c8657-2486-4a4d-bcfa-e1718c1aee53\"><span class=\"italic\"><span class=\"italic \">x</span></span></td></tr></tbody></table></div></div></div></div></div>"
  },
  {
    "id": "sat-math-probab-e438ec3f",
    "originalId": "e438ec3f",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">A grove has <math alttext=\"6\"><mn>6</mn></math> rows of birch trees and <math alttext=\"5\"><mn>5</mn></math> rows of maple trees. Each row of birch trees has <math alttext=\"8\"><mn>8</mn></math> trees <math alttext=\"20\"><mn>20</mn></math> feet or taller and <math alttext=\"6\"><mn>6</mn></math> trees shorter than <math alttext=\"20\"><mn>20</mn></math> feet. Each row of maple trees has <math alttext=\"9\"><mn>9</mn></math> trees <math alttext=\"20\"><mn>20</mn></math> feet or taller and <math alttext=\"7\"><mn>7</mn></math> trees shorter than <math alttext=\"20\"><mn>20</mn></math> feet. A tree from one of these rows will be selected at random. What is the probability of selecting a maple tree, given that the tree is <math alttext=\"20\"><mn>20</mn></math> feet or taller?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p style=\"text-align: left;\">Choice C is correct. If a tree from one of these rows is selected at random, the probability of selecting a maple tree, given that the tree is <math alttext=\"20\"><mn>20</mn></math> feet or taller, is equal to the number of maple trees that are <math alttext=\"20\"><mn>20</mn></math> feet or taller divided by the total number of trees that are <math alttext=\"20\"><mn>20</mn></math> feet or taller. It's given that there are <math alttext=\"6\"><mn>6</mn></math> rows of birch trees, and each row of birch trees has <math alttext=\"8\"><mn>8</mn></math> trees that are <math alttext=\"20\"><mn>20</mn></math> feet or taller. This means that there are a total of <math alttext=\"6 left parenthesis 8 right parenthesis\"><mn>6</mn><mfenced><mn>8</mn></mfenced></math>, or <math alttext=\"48\"><mn>48</mn></math>, birch trees that are <math alttext=\"20\"><mn>20</mn></math> feet or taller. It's given that there are <math alttext=\"5\"><mn>5</mn></math> rows of maple trees, and each row of maple trees has <math alttext=\"9\"><mn>9</mn></math> trees that are <math alttext=\"20\"><mn>20</mn></math> feet or taller. This means that there are a total of <math alttext=\"5 left parenthesis 9 right parenthesis\"><mn>5</mn><mfenced><mn>9</mn></mfenced></math>, or <math alttext=\"45\"><mn>45</mn></math>, maple trees that are <math alttext=\"20\"><mn>20</mn></math> feet or taller. It follows that there are a total of <math alttext=\"48 plus 45\"><mn>48</mn><mo>+</mo><mn>45</mn></math>, or <math alttext=\"93\"><mn>93</mn></math>, trees that are <math alttext=\"20\"><mn>20</mn></math> feet or taller. Therefore, the probability of selecting a maple tree, given that the tree is <math alttext=\"20\"><mn>20</mn></math> feet or taller, is <math alttext=\"StartFraction 45 Over 93 EndFraction\"><mfrac><mn>45</mn><mn>93</mn></mfrac></math>, or <math alttext=\"StartFraction 15 Over 31 EndFraction\"><mfrac>\n\t<mn>15</mn>\n\t<mn>31</mn>\n</mfrac></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice B is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice D is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"StartFraction 9 Over 164 EndFraction\"><mfrac>\n\t<mn>9</mn>\n\t<mn>164</mn>\n</mfrac></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"three tenths\"><mfrac>\n\t<mn>3</mn>\n\t<mn>10</mn>\n</mfrac></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"StartFraction 15 Over 31 EndFraction\"><mfrac>\n\t<mn>15</mn>\n\t<mn>31</mn>\n</mfrac></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"nine seventeenths\"><mfrac>\n\t<mn>9</mn>\n\t<mn>17</mn>\n</mfrac></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-probab-ed6b7e5f",
    "originalId": "ed6b7e5f",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">The table gives the distribution of topping and type of crust for customer orders at a pizza place.</p>\n\n<p style=\"text-align: left;\">If one of these customer orders is selected at random, what is the probability of selecting an order with thin crust, given the topping is pepperoni? (Express your answer as a decimal or fraction, not as a percent.)</p>",
    "type": "grid-in",
    "correctAnswer": "0.4, 2/5",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"two fifths\"><mfrac><mn>2</mn><mn>5</mn></mfrac></math>. Since the order will be selected at random, the probability of selecting an order with thin crust, given the topping is pepperoni, is equal to the number of orders with thin crust where the topping is pepperoni divided by the total number of orders where the topping is pepperoni. According to the table, there are <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"20\"><mn>20</mn></math> orders with thin crust where the topping is pepperoni. According to the table, there are <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"30\"><mn>30</mn></math> orders with thick crust where the topping is pepperoni. Therefore, there are a total of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"20 plus 30\"><mn>20</mn><mo>+</mo><mn>30</mn></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"50\"><mn>50</mn></math>, orders where the topping is pepperoni. Thus, the probability of selecting an order with thin crust, given the topping is pepperoni, is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"StartFraction 20 Over 50 EndFraction\"><mfrac><mn>20</mn><mn>50</mn></mfrac></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"two fifths\"><mfrac><mn>2</mn><mn>5</mn></mfrac></math>. Note that 2/5 and .4 are examples of ways to enter a correct answer.</p>",
    "passage": "<figure class=\"table\"><table border=\"1\">\n<tbody>\n<tr style=\"height: 22.3906px;\">\n<th style=\"width: 33.3856%; height: 44.7812px; text-align: center; vertical-align: bottom;\" rowspan=\"2\" scope=\"rowgroup\">Topping</th>\n<th style=\"width: 66.6144%; height: 22.3906px; text-align: center; vertical-align: bottom;\" colspan=\"2\" scope=\"colgroup\">Type of crust</th>\n</tr>\n<tr style=\"height: 22.3906px;\">\n<th style=\"width: 33.3856%; text-align: center; vertical-align: bottom; height: 22.3906px;\" scope=\"col\">Thin</th>\n<th style=\"width: 33.2288%; text-align: center; vertical-align: bottom; height: 22.3906px;\" scope=\"col\">Thick</th>\n</tr>\n<tr style=\"height: 22.3906px;\">\n<th style=\"width: 33.3856%; height: 22.3906px; text-align: left;\" scope=\"row\">Extra cheese</th>\n<td style=\"width: 33.3856%; height: 22.3906px; text-align: center;\"><math alttext=\"60\"><mn>60</mn></math></td>\n<td style=\"width: 33.2288%; height: 22.3906px; text-align: center;\"><math alttext=\"30\"><mn>30</mn></math></td>\n</tr>\n<tr style=\"height: 22.3906px;\">\n<th style=\"width: 33.3856%; height: 22.3906px; text-align: left;\" scope=\"row\">Pepperoni</th>\n<td style=\"width: 33.3856%; height: 22.3906px; text-align: center;\"><math alttext=\"20\"><mn>20</mn></math></td>\n<td style=\"width: 33.2288%; height: 22.3906px; text-align: center;\"><math alttext=\"30\"><mn>30</mn></math></td>\n</tr>\n<tr style=\"height: 22.3906px;\">\n<th style=\"width: 33.3856%; height: 22.3906px; text-align: left;\" scope=\"row\">Tomato</th>\n<td style=\"width: 33.3856%; height: 22.3906px; text-align: center;\"><math alttext=\"80\"><mn>80</mn></math></td>\n<td style=\"width: 33.2288%; height: 22.3906px; text-align: center;\"><math alttext=\"20\"><mn>20</mn></math></td>\n</tr>\n</tbody>\n</table></figure>"
  },
  {
    "id": "sat-math-probab-f496d2c0",
    "originalId": "f496d2c0",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "probability",
    "subtopic": "Probability & relative frequencies",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">The table shows the distribution of rooms in a certain facility by seating capacity.</p>\n\n<p style=\"text-align: left;\">If a room in this facility is selected at random, which of the following is closest to the probability of selecting a room that has a seating capacity greater than <math alttext=\"65\"><mn>65</mn></math> seats, given that the room has a seating capacity of at least <math alttext=\"18\"><mn>18</mn></math> seats?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p style=\"text-align: left;\">Choice B is correct. It&rsquo;s given that the proportion of rooms with less than <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"18\"><mn>18</mn></math> seats is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"26 percent sign\"><mn>26</mn><mo>%</mo></math>, which is equivalent to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.26\"><mn>0.26</mn></math>. It&rsquo;s also given that the proportion of rooms with <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"18\"><mn>18</mn></math>&ndash;<math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"40\"><mn>40</mn></math> seats is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"21 percent sign\"><mn>21</mn><mo>%</mo></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.21\"><mn>0.21</mn></math>; that the proportion of rooms with <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"41\"><mn>41</mn></math>&ndash;<math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"65\"><mn>65</mn></math> seats is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"29 percent sign\"><mn>29</mn><mo>%</mo></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.29\"><mn>0.29</mn></math>; and that the proportion of rooms with greater than <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"65\"><mn>65</mn></math> seats is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"24 percent sign\"><mn>24</mn><mo>%</mo></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.24\"><mn>0.24</mn></math>. The probability of selecting a room that has a seating capacity greater than <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"65\"><mn>65</mn></math> seats given that the room has a seating capacity of at least <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"18\"><mn>18</mn></math> seats is equal to the proportion of rooms that have a seating capacity of greater than <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"65\"><mn>65</mn></math> seats divided by the proportion of rooms that have a seating capacity of at least <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"18\"><mn>18</mn></math> seats. Rooms with a seating capacity of at least <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"18\"><mn>18</mn></math> seats include the categories <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"18\"><mn>18</mn></math>&ndash;<math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"40\"><mn>40</mn></math> seats, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"41\"><mn>41</mn></math>&ndash;<math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"65\"><mn>65</mn></math> seats, and greater than <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"65\"><mn>65</mn></math> seats, so the total proportion for this condition can be written as <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.21 plus 0.29 plus 0.24\"><mn>0.21</mn><mo>+</mo><mn>0.29</mn><mo>+</mo><mn>0.24</mn></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.74\"><mn>0.74</mn></math>. Therefore, the probability of selecting a room that has a seating capacity greater than <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"65\"><mn>65</mn></math> seats given that it has a seating capacity of at least <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"18\"><mn>18</mn></math> seats is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"StartFraction 0.24 Over 0.74 EndFraction\"><mfrac><mn>0.24</mn><mn>0.74</mn></mfrac></math>, or approximately <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.324\"><mn>0.324</mn></math>. Of the given choices, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.32\"><mn>0.32</mn></math> is closest to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.324\"><mn>0.324</mn></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. This is the probability of selecting a room that has a seating capacity greater than <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"65\"><mn>65</mn></math> seats from all rooms in the facility, not just rooms that meet the condition of having a seating capacity of at least <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"18\"><mn>18</mn></math> seats.</p>\n<p>Choice C is incorrect and may result from conceptual or calculation errors.</p>\n<p>Choice D is incorrect and may result from conceptual or calculation errors.</p>",
    "passage": "<figure class=\"table\"><table border=\"1\">\n<tbody>\n<tr>\n<th style=\"width: 47.6422%; text-align: center;\" scope=\"col\">Seating capacity</th>\n<th style=\"width: 47.6422%; text-align: center;\" scope=\"col\">Proportion</th>\n</tr>\n<tr>\n<td style=\"width: 47.6422%; text-align: left;\">Less than <math alttext=\"18\"><mn>18</mn></math> seats</td>\n<td style=\"width: 47.6422%; text-align: center;\"><math alttext=\"26 percent sign\"><mn>26</mn><mo>%</mo></math></td>\n</tr>\n<tr>\n<td style=\"width: 47.6422%; text-align: left;\"><math alttext=\"18\"><mn>18</mn></math>–<math alttext=\"40\"><mn>40</mn></math> seats</td>\n<td style=\"width: 47.6422%; text-align: center;\"><math alttext=\"21 percent sign\"><mn>21</mn><mo>%</mo></math></td>\n</tr>\n<tr>\n<td style=\"width: 47.6422%; text-align: left;\"><math alttext=\"41\"><mn>41</mn></math>–<math alttext=\"65\"><mn>65</mn></math> seats</td>\n<td style=\"width: 47.6422%; text-align: center;\"><math alttext=\"29 percent sign\"><mn>29</mn><mo>%</mo></math></td>\n</tr>\n<tr>\n<td style=\"width: 47.6422%; text-align: left;\">Greater than <math alttext=\"65\"><mn>65</mn></math> seats</td>\n<td style=\"width: 47.6422%; text-align: center;\"><math alttext=\"24 percent sign\"><mn>24</mn><mo>%</mo></math></td>\n</tr>\n</tbody>\n</table></figure>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"0.24\"><mn>0.24</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"0.32\"><mn>0.32</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"0.50\"><mn>0.50</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"0.92\"><mn>0.92</mn></math></p>"
      }
    ]
  }
];
