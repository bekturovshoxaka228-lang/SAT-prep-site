import type { SatQuestion } from "./sat-data";

/**
 * Official College Board Percentages, ratios & rates Question Bank (84 questions)
 * Domain: 3. Problem-Solving and Data Analysis
 * Subtopic: Percentages, ratios & rates
 * Native W3C MathML & Vector SVG Diagrams (No raster screenshots)
 * Order: Easy -> Medium -> Hard
 */
export const MATH_PERCENTAGES_QUESTIONS: SatQuestion[] = [
  {
    "id": "sat-math-percen-58a71e06",
    "originalId": "58a71e06",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">Of <math alttext=\"300,000\"><mn>300,000</mn></math> paper clips, <math alttext=\"234,000\"><mn>234,000</mn></math> are size large. What percentage of the paper clips are size large?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p style=\"text-align: left;\">Choice D is correct. The proportion of the paper clips that are size large can be written as <math alttext=\"StartFraction 234,000 Over 300,000 EndFraction\"><mfrac><mn>234,000</mn><mn>300,000</mn></mfrac></math>, or <math alttext=\"0.78\"><mn>0.78</mn></math>. Therefore, the percentage of the paper clips that are size large is <math alttext=\"0.78 left parenthesis 100 right parenthesis\"><mn>0.78</mn><mfenced><mn>100</mn></mfenced></math>, or <math alttext=\"78 percent sign\"><mn>78</mn><mo>%</mo></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. This is the percentage of the paper clips that are not size large.</p>\n<p style=\"text-align: left;\">Choice B is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice C is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"22 percent sign\"><mn>22</mn>\n<mo>%</mo></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"33 percent sign\"><mn>33</mn>\n<mo>%</mo></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"66 percent sign\"><mn>66</mn>\n<mo>%</mo></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"78 percent sign\"><mn>78</mn>\n<mo>%</mo></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-bd90f87e",
    "originalId": "bd90f87e",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">What was the percent increase of the minimum wage from 1960 to 1970?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p>Choice B is correct. According to the table, the minimum wage in 1960 was $1.00 per hour, and in 1970 it was $1.60 per hour. The percentage change is therefore <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAAsCAYAAAAjOvkiAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAEh0lEQVR4Xu2ZjXXrIAyFs1R3yEDZIwtkl6ySTXgWoPBjBBLGNn7Rdw5tjGVHtS4XcG9nYz4vc7+/zMcY47tI3o+bub8+zTjE3nv5BR9te7xX15r3I5y/3c1y+1XMCMS5M/KS5C55zsoGjHmbx+2x/Gw/aCwgVxgYv+jYxrvvSq93MUEM+fEo+nKv59WTu40pDGxlEGbxjNc9iK7G53WHGNs4wsB757HuPm4QUTHgqCMLPyr3OK8tuUtnDEWAdQ3GdBgcaO20FG7Z0XAtvzTJB1UsfN/VTX/u9by25M55NkoHuBTIi1KjtHygcGKC4rproAtafC1V3HDtuKKLcmfktTX30bORsmAfvnDTIhc1CDkUHt0Nr3cxlDDW/VuQ517Pa2vu6taDodaDLXpEnccmU7hAGPjd8LHWqJlnOlF31kAh6HWJHlHnIkuEsXEKlyDKnZHXiNztANdXfGPoFY1cGBxR9222pIzIfdRGEdlj8P4sdpPS4RAiYRCxiTCIKXiPTZQs931f6SGYUz4wFCFYjB7R1IThxJqec04Uiobuto4J03h+PIq+3Ot5bc1dMtAuD4x26g91D24RpW3lB1iLoRyGg1QYQJpL/VrX+KKQ0JM7J68tuW+pRQs0EPhoW8HEWFqK71OY3Wta/YJfVAp058KX58dAK+an3OEC7LLU8hr6zpCFmrO0lA26PFcr+NYyNh71ueg4azhezNP8Lb/+npVElMMYLWpKA05bsr1Mvhm294hEDPF4rkgYKWUnzb8ASZLlxPhRW01GOYzhorYaSB03h6MTOK6J2p7jvmyglgdUsm4wxKJuxKiop4ISNdYJPtZaXsdQ6/T6WE8cndjjzNHjXJsuHUOK+uvkpURcPyvG319FPQfDndrWGoQcdICOi5ri6MR3fa+Fj10uDUwiajinbWwrspeoc/0kS1CGTnxXkfcDteScfOmqX0eKmrO04MToRnEq9ll+UP1ejAyd+K4VNsbnm6yxa9fWRb1ONhmBnBh//zxGOYfhTk1oYC3quk58V4JzZn8PdGmfOzVQLKSo/U3y/vih8GJU1DMxXNSEflJja+ukROzS+T26RA3Eo610DLRiVNRzMVrUgKt5qDE6c6wpjpZinIjT85uXH4gbccuDsK2cRC1GRT0Xe4gaQGFjK+mJoyXExmZ5olvDx9b1uzL7RhGKTA3oEmnxyg+WE3MWz78lp6UY/lDpYWanRvFxRe3ig0jzY4ATcyZ7OfVPQW0SziaeCjm5cTY7nJgzmbUWl+O7DprIHYJ71vcTMZzXUr2vro6itX9SBFinkvyb8yAkRaZeIbkBEou6HuO7ToEadEoHsxQ1RyRqYm0c93NifNcpzFqHS0I52Nn8mqjtMmjCGfOSzLpB+aXlx6w1uDS2sJO5hFzU190ozjpbXhoU0EybFJGoCae7yiu9WV4r/nfM5tY1UTt3Tc/la+P8GODEHI269I6gk83i1lJRA9jvWlkonJgjAZcu/Y3KIJyQ9LXSUdiZQpcd+2OnQ321tDv6nBVFURRFURRFURRFURRFmZLb7R+jDhEJ728vjQAAAABJRU5ErkJggg==\" alt=\"100 times open parenthesis, the fraction with numerator 1 point 6 0 minus 1 point 0 0, and denominator 1 point 0 0, close parenthesis, equals 60 percent\"></span>.<p>Choice A is incorrect and may result from averaging the two wages before calculating the percentage change. Choice C is incorrect. This is the 1960 wage expressed as a percentage of the 1970 wage, not the percentage change between the two. Choice D is incorrect and may result from a calculation error.</p></p>",
    "passage": "<p class=\"passage_para \">A table of the US minimum wage for 6 different years is shown below.<table class=\"table_WithBorder\" style=\"width: 25%;\"><thead><tr><th class=\"tcp-385d1b75-7cec-4a88-92d3-4d9541965a7c\" scope=\"col\" style=\"text-align: center;\">Year</th><th class=\"tcp-095f510b-b654-43a3-8317-c983d5384fa4\" scope=\"col\" style=\"text-align: center;\">US minimum wage<br><span class=\"formatted_line_break delivery_mode:Both \">  (dollars per hour)</span></th></tr></thead><tbody><tr><td class=\"tcp-01412390-83b9-4881-ab04-b3eea0924608 para_center\" style=\"text-align: center;\">1960</td><td class=\"tcp-0d9b9541-1223-4644-9a6a-923e53068073 para_center\" style=\"text-align: center;\">1.00</td></tr><tr><td class=\"tcp-8169ba68-bd49-4c89-931b-830915c900f0 para_center\" style=\"text-align: center;\">1970</td><td class=\"tcp-cf31cc37-5bbb-4afb-ac2b-34b717ec63dc para_center\" style=\"text-align: center;\">1.60</td></tr><tr><td class=\"tcp-abc74275-3268-43d2-bfbc-d8a1ca440d0f para_center\" style=\"text-align: center;\">1980</td><td class=\"tcp-c2dce779-63a0-4e25-85a0-e34e4f270a44 para_center\" style=\"text-align: center;\">3.10</td></tr><tr><td class=\"tcp-54bc71e6-d21e-41b6-ba09-c2d0dd12b135 para_center\" style=\"text-align: center;\">1990</td><td class=\"tcp-8a6ef208-3656-4f63-804a-f31bc169cf94 para_center\" style=\"text-align: center;\">3.80</td></tr><tr><td class=\"tcp-f848174c-6405-445c-9b16-2b2ecea94271 para_center\" style=\"text-align: center;\">2000</td><td class=\"tcp-3f9e41dc-f831-4ecd-9f13-0ce587c11986 para_center\" style=\"text-align: center;\">5.15</td></tr><tr><td class=\"tcp-4cbbd5c9-0d9b-4559-9240-bdcd4fe00423 para_center\" style=\"text-align: center;\">2010</td><td class=\"tcp-c422270c-d900-40b8-8eec-3111d78efe41 para_center\" style=\"text-align: center;\">7.25</td></tr></tbody></table></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">30%</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">60%</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">62.5%</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">120%</p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-e9fb7774",
    "originalId": "e9fb7774",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p>What percentage of <math alttext=\"300\"><mn>300</mn></math> is <math alttext=\"75\"><mn>75</mn></math>?</p>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p style=\"text-align: left;\">Choice A is correct. Let <math alttext=\"x\"><mi>x</mi></math> represent the percentage of <math alttext=\"300\"><mn>300</mn></math> that is <math alttext=\"75\"><mn>75</mn></math>. This can be written as <math alttext=\"StartFraction x Over 100 EndFraction left parenthesis 300 right parenthesis equals 75\"><mfrac><mi>x</mi><mn>100</mn></mfrac><mfenced><mn>300</mn></mfenced><mo>=</mo><mn>75</mn></math>, or <math alttext=\"3 x equals 75\"><mrow>\n\t<mrow>\n\t\t<mn>3</mn>\n\t\t<mi>x</mi>\n\t</mrow>\n\t<mo>=</mo>\n\t<mn>75</mn>\n</mrow></math>. Dividing both sides of this equation by <math alttext=\"3\"><mn>3</mn></math> yields <math alttext=\"x equals 25\"><mrow>\n\t<mi>x</mi>\n\t<mo>=</mo>\n\t<mn>25</mn>\n</mrow></math>. Therefore, <math alttext=\"25 percent sign\"><mn>25</mn><mo>%</mo></math> of <math alttext=\"300\"><mn>300</mn></math> is <math alttext=\"75\"><mn>75</mn></math>.</p>\n<p style=\"text-align: left;\">Choice B is incorrect. <math alttext=\"50 percent sign\"><mn>50</mn><mo>%</mo></math> of <math alttext=\"300\"><mn>300</mn></math> is <math alttext=\"150\"><mn>150</mn></math>, not <math alttext=\"75\"><mn>75</mn></math>.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. <math alttext=\"75 percent sign\"><mn>75</mn><mo>%</mo></math> of <math alttext=\"300\"><mn>300</mn></math> is <math alttext=\"225\"><mn>225</mn></math>, not <math alttext=\"75\"><mn>75</mn></math>.</p>\n<p style=\"text-align: left;\">Choice D is incorrect. <math alttext=\"225 percent sign\"><mn>225</mn><mo>%</mo></math> of <math alttext=\"300\"><mn>300</mn></math> is <math alttext=\"675\"><mn>675</mn></math>, not <math alttext=\"75\"><mn>75</mn></math>.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"25 percent sign\"><mn>25</mn>\n<mo>%</mo></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"50 percent sign\"><mn>50</mn>\n<mo>%</mo></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"75 percent sign\"><mn>75</mn>\n<mo>%</mo></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"225 percent sign\"><mn>225</mn>\n<mo>%</mo></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-8705ecba",
    "originalId": "8705ecba",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">The cost of a certain shirt is $20 before a 5% sales tax is added. What is the total cost, including sales tax, to purchase the shirt?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p>Choice C is correct. The total cost to purchase the shirt is the $20 cost of the shirt plus the 5% sales tax. The value of the 5% sales tax on the $20 shirt is equivalent to<span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAaCAYAAADL5WCkAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAANvpXuIwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACWklEQVRoQ+2VjW3EIAyFM14GyjjZJatkE4r/DtuYAFXvTqr4JNQLwc7zM9BNk+4z7duezjslnvo4Kd3p3Ld0XG0N39bZ1ZjSlY4vGyk8aenpxPf7mct9bx2POq5jS3t+w49Iug545jFudC+OhMh7NXKr818EcwSmRDoB2S3wU0Zr50Rrw5y9OiKNdGyOXGKZpEQlgX9uMRIXfc8THaWnODCZCuOdiWtrQ4uRJQ9ptIYO1RFo3O5zt7uCF/luoWC1zjMah8IGjiKuU3Fep0AmU1H6mEd6W/ct5maDZ+r3GnERCOFHI46nEP1BnjKMxvWaIvid6HUKLTP59RC089jMifqNRupCdAzr7ukP8pRhJO7V9eNAwfAaRnhn5Qi55COdwusO1sc8R/DrIbDBHDdTv9ZoHxgKaiWLCwJG4mzhtE52gjdUGxjp1EgO+Akjak4L0ld24kz9psmfNpOnKsIjNGGm4E2NrgUNactr80KakbmxOvpmTmxzzW/jgFho0TZsJqzjXY9H9+G71EBrJDBTh9FFztoOSnd9V//qH1BE20yKi3RGaDOjnAIZ3birJ+rQGnECEuukItx/CAXkL/BjxUjclFAwQ92tXqegTdNmtppI83EuYKZ+r7GeyPiu+mcgEtWLE6G6SFpTG1w1GdY5nQDtjpwT34mZNOcNkWa2jBR6dQhVg6XAeLdA4TDqRK0O9+KKoWX4b5NBNralE4hyRoZZbX7YXdyvo9aItLr+LaCQyIyeTn3MeepttDQi1InA6Q/y2mEPhnxb54jGxWKxWCwWi8VisfjPbNsPJer8wTSIR/UAAAAASUVORK5CYII=\" alt=\"0 point 0 5 times 20 dollars\"></span>, or $1. Therefore, the total cost to purchase the shirt is <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAYCAYAAABDX1s+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAMyZLetQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABh0lEQVRYR+2Vga2FIAxFHY+BHIddXMVN+im0UqAI9ZuXmHASkifW9nJbfZsGwAG783ACAG19gtd1Q0jl3YbJrrUfenIt1vmziYVjFzEOQkgT818suiXHrmu+wIAtOkxOnx6ckjwL2ENkuscHlwXSXjahvn6LWd0STW8BiCRy9GKxsElhkRTbHuz0Llwnk9i0uqCWrybWJy201cWim0k6saEPDKHbUyTXyZBOl6RptNXwhiF0uyFPaarRN4REFKN3k1gjj26gM0XSNNpqMBnyUDc/1zUEYbfxJ67b4Ip00HyI3AnNkPvviMUQ5InuKUOYusBIGJsh31mLIVeXB2uow6DbZggG0+jF1+BmxK8PlDAD+dUrI7Ho5hpmQ3qdRlJRPSl3qz7U2x9VyaxuhGt0DZEJZOLeAXgyegl/9rdr1M2MDaGA8mutP8Td7yYj6i6NusaYDDHolgwNQbir+JOX9sD13VBX2ZUydmzGE2Z1S6YMYWIwjR5tfYKv6l4sFovFYrFYLEZs2x/cd4ufEMqX7wAAAABJRU5ErkJggg==\" alt=\"20 dollars plus 1 dollar\"></span>, or $21.<p>Choice A is incorrect and may result from neglecting to multiply by $20 when finding the value of the sales tax. Choice B is incorrect and may result from dividing by 10, instead of by 100, and then neglecting to multiply by $20 when finding the sales tax. Choice D is incorrect and may result from interpreting the sales tax of 5% as $5.</p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">$20.05</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">$20.50</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">$21.00</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">$25.00</p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-191d167b",
    "originalId": "191d167b",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p>Last year, <math alttext=\"200\"><mn>200</mn></math> students enrolled in an interior design program. This year, the number of students enrolled is <math alttext=\"147 percent sign\"><mn>147</mn><mo>%</mo></math> of last year&rsquo;s number. How many students are enrolled in the interior design program this year?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p>Choice B is correct. It's given that the number of students enrolled in an interior design program this year is <math alttext=\"147 percent sign\"><mn>147</mn><mo>%</mo></math> of last year's number, which is <math alttext=\"200\"><mn>200</mn></math>. <math alttext=\"147 percent sign\"><mn>147</mn><mo>%</mo></math> of <math alttext=\"200\"><mn>200</mn></math> can be expressed as <math alttext=\"left parenthesis StartFraction 147 Over 100 EndFraction right parenthesis left parenthesis 200 right parenthesis\"><mfenced><mfrac><mn>147</mn><mn>100</mn></mfrac></mfenced><mfenced><mn>200</mn></mfenced></math>, or <math alttext=\"left parenthesis 1.47 right parenthesis left parenthesis 200 right parenthesis\"><mfenced><mn>1.47</mn></mfenced><mfenced><mn>200</mn></mfenced></math>, which is equivalent to <math alttext=\"294\"><mn>294</mn></math>. Therefore, <math alttext=\"294\"><mn>294</mn></math> students are enrolled in the interior design program this year.</p>\n<p>Choice A is incorrect and may result from conceptual or calculation errors.</p>\n<p>Choice C is incorrect and may result from conceptual or calculation errors.</p>\n<p>Choice D is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"247\"><mn>247</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"294\"><mn>294</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"347\"><mn>347</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"394\"><mn>394</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-93724cc6",
    "originalId": "93724cc6",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\"><math alttext=\"21\"><mn>21</mn></math> is <math alttext=\"21 percent sign\"><mrow><mn>21</mn></mrow><mo>%</mo></math> of what number?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p style=\"text-align: left;\">Choice D is correct. Let <math alttext=\"x\"><mi>x</mi></math> represent the number that <math alttext=\"21\"><mn>21</mn></math> is <math alttext=\"21 percent sign\"><mn>21</mn><mo>%</mo></math> of. It follows that <math alttext=\"StartFraction 21 Over x EndFraction equals StartFraction 21 Over 100 EndFraction\"><mrow>\n\t<mrow>\n\t\t<mfrac>\n\t\t\t<mn>21</mn>\n\t\t\t<mi>x</mi>\n\t\t</mfrac>\n\t</mrow>\n\t<mo>=</mo>\n\t<mfrac>\n\t\t<mn>21</mn>\n\t\t<mn>100</mn>\n\t</mfrac>\n</mrow></math>. Multiplying each side of this equation by <math alttext=\"x\"><mi>x</mi></math> yields <math alttext=\"21 equals StartFraction 21 x Over 100 EndFraction\"><mrow>\n\t<mn>21</mn>\n\t<mo>=</mo>\n\t<mrow>\n\t\t<mfrac>\n\t\t\t<mrow>\n\t\t\t\t<mn>21</mn>\n\t\t\t\t<mi>x</mi>\n\t\t\t</mrow>\n\t\t\t<mn>100</mn>\n\t\t</mfrac>\n\t</mrow>\n</mrow></math>. Multiplying each side of this equation by <math alttext=\"100\"><mn>100</mn></math> yields <math alttext=\"2,100 equals 21 x\"><mrow>\n\t<mn>2,100</mn>\n\t<mo>=</mo>\n\t<mrow>\n\t\t<mn>21</mn>\n\t\t<mi>x</mi>\n\t</mrow>\n</mrow></math>. Dividing each side of this equation by <math alttext=\"21\"><mn>21</mn></math> yields <math alttext=\"100 equals x\"><mrow>\n\t<mn>100</mn>\n\t<mo>=</mo>\n\t<mi>x</mi>\n</mrow></math>. Therefore, <math alttext=\"21\"><mn>21</mn></math> is <math alttext=\"21 percent sign\"><mn>21</mn><mo>%</mo></math> of <math alttext=\"100\"><mn>100</mn></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. <math alttext=\"21 percent sign\"><mn>21</mn><mo>%</mo></math> of <math alttext=\"0\"><mn>0</mn></math> is <math alttext=\"0\"><mn>0</mn></math>, not <math alttext=\"21\"><mn>21</mn></math>.</p>\n<p style=\"text-align: left;\">Choice B is incorrect. <math alttext=\"21 percent sign\"><mn>21</mn><mo>%</mo></math> of <math alttext=\"1\"><mn>1</mn></math> is <math alttext=\"0.21\"><mn>0.21</mn></math>, not <math alttext=\"21\"><mn>21</mn></math>.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. <math alttext=\"21 percent sign\"><mn>21</mn><mo>%</mo></math> of <math alttext=\"42\"><mn>42</mn></math> is <math alttext=\"8.82\"><mn>8.82</mn></math>, not <math alttext=\"21\"><mn>21</mn></math>.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"0\"><mn>0</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"1\"><mn>1</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"42\"><mn>42</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"100\"><mn>100</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-bb7c8186",
    "originalId": "bb7c8186",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">What is <math alttext=\"23 percent sign\"><mrow><mn>23</mn></mrow><mo>%</mo></math> of <math alttext=\"100\"><mn>100</mn></math>?</p>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p style=\"text-align: left;\">Choice A is correct. <math alttext=\"23 percent sign\"><mn>23</mn><mo>%</mo></math> of <math alttext=\"100\"><mn>100</mn></math> can be calculated by multiplying <math alttext=\"StartFraction 23 Over 100 EndFraction\"><mfrac><mn>23</mn><mn>100</mn></mfrac></math> by <math alttext=\"100\"><mn>100</mn></math>, which yields <math alttext=\"left parenthesis StartFraction 23 Over 100 EndFraction right parenthesis 100\"><mfenced><mfrac><mn>23</mn><mn>100</mn></mfrac></mfenced><mn>100</mn></math>, or <math alttext=\"23\"><mn>23</mn></math>.</p>\n<p style=\"text-align: left;\">Choice B is incorrect. This is <math alttext=\"46 percent sign\"><mn>46</mn><mo>%</mo></math>, not <math alttext=\"23 percent sign\"><mn>23</mn><mo>%</mo></math>, of <math alttext=\"100\"><mn>100</mn></math>.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. This is <math alttext=\"23 percent sign\"><mn>23</mn><mo>%</mo></math> less than <math alttext=\"100\"><mn>100</mn></math>, not <math alttext=\"23 percent sign\"><mn>23</mn><mo>%</mo></math> of <math alttext=\"100\"><mn>100</mn></math>.</p>\n<p style=\"text-align: left;\">Choice D is incorrect. This is <math alttext=\"23 percent sign\"><mn>23</mn><mo>%</mo></math> greater than <math alttext=\"100\"><mn>100</mn></math>, not <math alttext=\"23 percent sign\"><mn>23</mn><mo>%</mo></math> of <math alttext=\"100\"><mn>100</mn></math>.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"23\"><mn>23</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"46\"><mn>46</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"77\"><mn>77</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"123\"><mn>123</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-29c177e6",
    "originalId": "29c177e6",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">What is <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> of <math alttext=\"470\"><mn>470</mn></math>?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p>Choice B is correct. <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> of a quantity means <math alttext=\"StartFraction 10 Over 100 EndFraction\"><mfrac><mn>10</mn><mn>100</mn></mfrac></math> times the quantity. Therefore, <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> of <math alttext=\"470\"><mn>470</mn></math> can be represented as <math alttext=\"StartFraction 10 Over 100 EndFraction left parenthesis 470 right parenthesis\"><mfrac><mn>10</mn><mn>100</mn></mfrac><mfenced><mn>470</mn></mfenced></math>, which is equivalent to <math alttext=\"0.10 left parenthesis 470 right parenthesis\"><mn>0.10</mn><mfenced><mn>470</mn></mfenced></math>, or <math alttext=\"47\"><mn>47</mn></math>. Therefore, <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> of <math alttext=\"470\"><mn>470</mn></math> is <math alttext=\"47\"><mn>47</mn></math>.</p>\n<p>Choice A is incorrect. This is <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> of <math alttext=\"370\"><mn>370</mn></math>, not <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> of <math alttext=\"470\"><mn>470</mn></math>.</p>\n<p>Choice C is incorrect. This is <math alttext=\"90 percent sign\"><mn>90</mn><mo>%</mo></math> of <math alttext=\"470\"><mn>470</mn></math>, not <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> of <math alttext=\"470\"><mn>470</mn></math>.</p>\n<p>Choice D is incorrect. This is <math alttext=\"470 minus 10\"><mn>470</mn><mo>-</mo><mn>10</mn></math>, not <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> of <math alttext=\"470\"><mn>470</mn></math>.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"37\"><mn>37</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"47\"><mn>47</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"423\"><mn>423</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"460\"><mn>460</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-8784bc84",
    "originalId": "8784bc84",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">What is <math alttext=\"20 percent sign\"><mn>20</mn><mo>%</mo></math> of <math alttext=\"440\"><mn>440</mn></math>?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p style=\"text-align: left;\">Choice B is correct. <math alttext=\"20 percent sign\"><mn>20</mn><mo>%</mo></math> of <math alttext=\"440\"><mn>440</mn></math> can be calculated as <math alttext=\"left parenthesis StartFraction 20 Over 100 EndFraction right parenthesis left parenthesis 440 right parenthesis\"><mfenced><mfrac><mn>20</mn><mn>100</mn></mfrac></mfenced><mfenced><mn>440</mn></mfenced></math>, which is equivalent to <math alttext=\"StartFraction 8,800 Over 100 EndFraction\"><mfrac><mn>8,800</mn><mn>100</mn></mfrac></math>, or <math alttext=\"88\"><mn>88</mn></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. This is <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math>, not <math alttext=\"20 percent sign\"><mn>20</mn><mo>%</mo></math>, of <math alttext=\"440\"><mn>440</mn></math>.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. This is <math alttext=\"200 percent sign\"><mn>200</mn><mo>%</mo></math>, not <math alttext=\"20 percent sign\"><mn>20</mn><mo>%</mo></math>, of <math alttext=\"440\"><mn>440</mn></math>.</p>\n<p style=\"text-align: left;\">Choice D is incorrect. This is <math alttext=\"400 percent sign\"><mn>400</mn><mo>%</mo></math>, not <math alttext=\"20 percent sign\"><mn>20</mn><mo>%</mo></math>, of <math alttext=\"440\"><mn>440</mn></math>.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"44\"><mn>44</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"88\"><mn>88</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"880\"><mn>880</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"1,760\"><mn>1,760</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-949cd96b",
    "originalId": "949cd96b",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">The length of the base of a certain parallelogram is <math alttext=\"89 percent sign\"><mrow><mn>89</mn></mrow><mo>%</mo></math> of the height of the parallelogram. Which expression represents the length of the base of the parallelogram, where <math alttext=\"h\"><mi>h</mi></math> is the height of the parallelogram?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p style=\"text-align: left;\">Choice D is correct. It's given that the length of the base of the parallelogram is <math alttext=\"89 percent sign\"><mn>89</mn><mo>%</mo></math> of the height of the parallelogram. Since <math alttext=\"h\"><mi>h</mi></math> is the height of the parallelogram, it follows that the length of the base of the parallelogram can be represented by the expression <math alttext=\"StartFraction 89 Over 100 EndFraction h\"><mfrac><mn>89</mn><mn>100</mn></mfrac><mi>h</mi></math>, or <math alttext=\"0.89 h\"><mrow>\n\t<mn>0.89</mn>\n\t<mi>h</mi>\n</mrow></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. This expression represents <math alttext=\"8,900 percent sign\"><mn>8,900</mn><mo>%</mo></math>, not <math alttext=\"89 percent sign\"><mn>89</mn><mo>%</mo></math>, of the height of the parallelogram.</p>\n<p style=\"text-align: left;\">Choice B is incorrect. This expression represents <math alttext=\"8.9 percent sign\"><mn>8.9</mn><mo>%</mo></math>, not <math alttext=\"89 percent sign\"><mn>89</mn><mo>%</mo></math>, of the height of the parallelogram.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. This expression represents <math alttext=\"890 percent sign\"><mn>890</mn><mo>%</mo></math>, not <math alttext=\"89 percent sign\"><mn>89</mn><mo>%</mo></math>, of the height of the parallelogram.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"89 h\"><mrow>\n\t<mn>89</mn>\n\t<mi>h</mi>\n</mrow></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"0.089 h\"><mrow>\n\t<mn>0.089</mn>\n\t<mi>h</mi>\n</mrow></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"8.9 h\"><mrow>\n\t<mn>8.9</mn>\n\t<mi>h</mi>\n</mrow></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"0.89 h\"><mrow>\n\t<mn>0.89</mn>\n\t<mi>h</mi>\n</mrow></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-28c6bd8c",
    "originalId": "28c6bd8c",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">The table above shows a summary of 1,200 responses to a survey question. Based on the table, how many of those surveyed get most of their medical information from either a doctor or the Internet?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p>Choice C is correct. According to the table, 63% of survey respondents get most of their medical information from a doctor and 13% get most of their medical information from the Internet. Therefore, 76% of the 1,200 survey respondents get their information from either a doctor or the Internet, and 76% of 1,200 is 912.<p>Choices A, B, and D are incorrect. According to the table, 76% of survey respondents get their information from either a doctor or the Internet. Choice A is incorrect because 865 is about 72% (the percent of survey respondents who get most of their medical information from a doctor or from magazines/brochures), not 76%, of 1,200. Choice B is incorrect because 887 is about 74%, not 76%, of 1,200. Choice D is incorrect because 926 is about 77%, not 76%, of 1,200.</p></p>",
    "passage": "<div class=\"table-container text-center\"><p class=\"table-title font-semibold mb-2\">Where Do People Get Most of<br/>Their Medical Information?</p><figure class=\"table\"><table border=\"1\"><thead><tr><th scope=\"col\" style=\"text-align: center;\">Source</th><th scope=\"col\" style=\"text-align: center;\">Percent of those surveyed</th></tr></thead><tbody><tr><td style=\"text-align: left;\">Doctor</td><td style=\"text-align: center;\">63%</td></tr><tr><td style=\"text-align: left;\">Internet</td><td style=\"text-align: center;\">13%</td></tr><tr><td style=\"text-align: left;\">Magazines/brochures</td><td style=\"text-align: center;\">9%</td></tr><tr><td style=\"text-align: left;\">Pharmacy</td><td style=\"text-align: center;\">6%</td></tr><tr><td style=\"text-align: left;\">Television</td><td style=\"text-align: center;\">2%</td></tr><tr><td style=\"text-align: left;\">Other/none of the above</td><td style=\"text-align: center;\">7%</td></tr></tbody></table></figure></div>",
    "options": [
      {
        "id": "A",
        "text": "<p>865</p>"
      },
      {
        "id": "B",
        "text": "<p>887</p>"
      },
      {
        "id": "C",
        "text": "<p>912</p>"
      },
      {
        "id": "D",
        "text": "<p>926</p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-3a6ed720",
    "originalId": "3a6ed720",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">Of <math alttext=\"900,000\"><mn>900,000</mn></math> beads, <math alttext=\"828,000\"><mn>828,000</mn></math> are silver. What percentage of the beads are silver?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p>Choice D is correct. The proportion of the beads that are silver can be written as <math alttext=\"StartFraction 828,000 Over 900,000 EndFraction\"><mfrac><mn>828,000</mn><mn>900,000</mn></mfrac></math>, or <math alttext=\"0.92\"><mn>0.92</mn></math>. Therefore, the percentage of the beads that are silver is <math alttext=\"0.92 left parenthesis 100 right parenthesis\"><mn>0.92</mn><mfenced><mn>100</mn></mfenced></math>, or <math alttext=\"92 percent sign\"><mn>92</mn><mo>%</mo></math>.</p>\n<p>Choice A is incorrect. This is the percentage of the beads that are not silver.</p>\n<p>Choice B is incorrect and may result from conceptual or calculation errors.</p>\n<p>Choice C is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"8 percent sign\"><mn>8</mn>\n<mo>%</mo></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"36 percent sign\"><mn>36</mn>\n<mo>%</mo></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"72 percent sign\"><mn>72</mn>\n<mo>%</mo></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"92 percent sign\"><mn>92</mn>\n<mo>%</mo></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-284303f1",
    "originalId": "284303f1",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">There are <math alttext=\"250\"><mn>250</mn></math> trees in a park. Of these trees, <math alttext=\"6 percent sign\"><mn>6</mn><mo>%</mo></math> are birch trees. How many birch trees are in the park?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p style=\"text-align: left;\">Choice B is correct. It's given that there are <math alttext=\"250\"><mn>250</mn></math> trees in a park and of these trees, <math alttext=\"6 percent sign\"><mn>6</mn><mo>%</mo></math> are birch trees. The number of birch trees in the park can be calculated by multiplying the number of trees in the park by <math alttext=\"StartFraction 6 Over 100 EndFraction\"><mfrac><mn>6</mn><mn>100</mn></mfrac></math>. Therefore, the number of birch trees in the park is <math alttext=\"250 left parenthesis StartFraction 6 Over 100 EndFraction right parenthesis\"><mn>250</mn><mfenced><mfrac><mn>6</mn><mn>100</mn></mfrac></mfenced></math>, or <math alttext=\"15\"><mn>15</mn></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. This is the percentage of trees in the park that are birch trees, not the number of birch trees in the park.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. This is <math alttext=\"30 percent sign\"><mn>30</mn><mo>%</mo></math>, not <math alttext=\"6 percent sign\"><mn>6</mn><mo>%</mo></math>, of <math alttext=\"250\"><mn>250</mn></math>.</p>\n<p style=\"text-align: left;\">Choice D is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"6\"><mn>6</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"15\"><mn>15</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"75\"><mn>75</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"244\"><mn>244</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-9c44f828",
    "originalId": "9c44f828",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">There are a total of <math alttext=\"840\"><mn>840</mn></math> seats in a school auditorium. During an assembly, students occupied <math alttext=\"50 percent sign\"><mn>50</mn><mo>%</mo></math> of the seats in the auditorium. How many seats did the students occupy during this assembly?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p style=\"text-align: left;\">Choice C is correct. It's given that during an assembly, students occupied <math alttext=\"50 percent sign\"><mn>50</mn><mo>%</mo></math> of the <math alttext=\"840\"><mn>840</mn></math> seats in the school auditorium. Therefore, the number of seats that the students occupied during this assembly can be calculated by multiplying the number of seats in the school auditorium by <math alttext=\"StartFraction 50 Over 100 EndFraction\"><mfrac><mn>50</mn><mn>100</mn></mfrac></math>. Thus, the students occupied <math alttext=\"840 left parenthesis StartFraction 50 Over 100 EndFraction right parenthesis\"><mn>840</mn><mfenced><mfrac><mn>50</mn><mn>100</mn></mfrac></mfenced></math>, or <math alttext=\"420\"><mn>420</mn></math>, seats during this assembly.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. This is approximately <math alttext=\"3 percent sign\"><mn>3</mn><mo>%</mo></math>, not <math alttext=\"50 percent sign\"><mn>50</mn><mo>%</mo></math>, of <math alttext=\"840\"><mn>840</mn></math>.</p>\n<p style=\"text-align: left;\">Choice B is incorrect. This is approximately <math alttext=\"6 percent sign\"><mn>6</mn><mo>%</mo></math>, not <math alttext=\"50 percent sign\"><mn>50</mn><mo>%</mo></math>, of <math alttext=\"840\"><mn>840</mn></math>.</p>\n<p style=\"text-align: left;\">Choice D is incorrect. This is approximately <math alttext=\"94 percent sign\"><mn>94</mn><mo>%</mo></math>, not <math alttext=\"50 percent sign\"><mn>50</mn><mo>%</mo></math>, of <math alttext=\"840\"><mn>840</mn></math>.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"25\"><mn>25</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"50\"><mn>50</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"420\"><mn>420</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"790\"><mn>790</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-273b7f37",
    "originalId": "273b7f37",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">Isabel grows potatoes in her garden. This year, she harvested <math alttext=\"760\"><mn>760</mn></math> potatoes and saved <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> of them to plant next year. How many of the harvested potatoes did Isabel save to plant next year?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p style=\"text-align: left;\">Choice B is correct. The number of harvested potatoes Isabel saved to plant next year can be calculated by multiplying the total number of potatoes Isabel harvested, <math alttext=\"760\"><mn>760</mn></math>, by the proportion of potatoes she saved. Since she saved <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> of the potatoes she harvested, the proportion of potatoes she saved is <math alttext=\"StartFraction 10 Over 100 EndFraction\"><mfrac><mn>10</mn><mn>100</mn></mfrac></math>, or <math alttext=\"0.1\"><mn>0.1</mn></math>. Multiplying <math alttext=\"760\"><mn>760</mn></math> by this proportion gives <math alttext=\"760 left parenthesis 0.1 right parenthesis\"><mn>760</mn><mfenced><mn>0.1</mn></mfenced></math>, or <math alttext=\"76\"><mn>76</mn></math>, potatoes that she saved to plant next year.</p>\n<p style=\"text-align: left;\">Choice A is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice C is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice D is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p style=\"text-align: left;\"><math alttext=\"66\"><mn>66</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p style=\"text-align: left;\"><math alttext=\"76\"><mn>76</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p style=\"text-align: left;\"><math alttext=\"84\"><mn>84</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p style=\"text-align: left;\"><math alttext=\"86\"><mn>86</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-7ed0d098",
    "originalId": "7ed0d098",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">Lani spent 15% of her 8-hour workday in meetings. How many <u><span class=\"underline\"><span class=\"underline \">minutes</span></span></u> of her workday did she spend in meetings?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p>Choice D is correct. There are 60 minutes in one hour, so an 8-hour workday has <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAAaCAYAAADYMiBQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAANvpXuIwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACU0lEQVRoQ+1XAXLsIAj1eDlQjpO75Cp7ExtAKiIYuuu2sx3fjPO7xPAeDzTzk0R+HHlLWz4eOZfQ08j5kY8t5f30c0X5Irk+CjmfeZ9kNGOU86d879D3Zzj3lLerkvITQZOXIEbrGi18IJDPvT43zMDn23HNZhu3+CB2/fO99CR7uWaCa7ZO0Z0+wJ0fhWC/Zqc+4Jc4IU1WaxDtqQn1b4B1BVh8VEiNaX7Ab1wnbKjmCOkL+JEex9ZMLRelJw/3FUJvD4oSuQBIKmI9HzVSCgdEcs0EGwhLaonoC/sBgSZ54MPlHTfZkBLqJtnmGxfDsE7FDHyfmqPXEtEX8oNI1NHHDsMG6iiEYDVXCCbvG1LfFfkwD+21+AAoXLzHU6bFex9Knj74c7R0PgaaAt+DkbEDfSE/LPGcqLl/igg2nPZ4yVU+YbBnFoCmgI2x93jNegXcKDDOm1DASF/Ij5HZwzt7otn0HAoQk6Oay3iH2XfXQUTfy2br7soXicxLXkUBJIfJ50xTc98VWO8DKM5T56+uJlWHaXZAX8gP7lokeW/2WEAJFSOKKItP5C0hhBWXuUroJbRXg16l1oC+sB9wjJqPHxZ0c40U0/QeeSQZKEr8Z6TjGzZXNU7lmg1LS0Rf2A+rAEpUCZiwMQn31I7r34zOXIMPRQljLT6AzjUbnrERfSE/rKMNoM1AQssqsj2GvdF0Stq4x0cF+XxWrtnwzAbc6QPc+YGwpm0GgNwS9Qyfl+sjQV2ZMzk8vSNDo3yRXAsLCwsLCwsLCwsLCwsL/wUpfQEra/bYKH0FxwAAAABJRU5ErkJggg==\" alt=\"60 times 8, equals 480\"></span> minutes. To calculate 15% of 480, multiply 0.15 by 480: <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAAcCAYAAAC9I+tXAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAOJ5y/mQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACzklEQVRoQ+2Vi5GDMAxEKY+CKIde0ko68SHLMrKQ/EkIJHN6M54cHLal3TVMnPBcwzzNYX2GkG5dTgjPsM5TWB731fDThPAIy80mEq1arg7cT4XrsUxh3pRJl7cTHkuY5nWTsBTvrsB9U9BNMOHLVqoQDcTcfnCMN2GFA0WhddnYIr/9RqxTUAsc9qGfHJi3/eShPdPq1wrXO5R7yrHXQHrw/x90eK5zISKAG7CFxHULKlA10giOJK7BzW3MI7M08yc2j2rjz/X0e9UrNgc99b6beOyh0BcaLZpKE6UJUZC0eI0YDChEbpSIRXQkWxqnBY6gxmCUvaAo/B7AexnpN+5j1HAWh+BFHY6HCHVOz2ETInnGK6qYaLAnGQXUjOwNhPwuwTxZE5BPynqs2+qlMHKgXxmus7Fq0UCts5GlWAAudkxAMbEBnQRpZE7/ssSC4RYM9eSykGmBI6LgcMJrprG66fTScyP9anoB1C/8WRstg2Ktnd/h4lnVyHyqRLHGfQ3byNQwK5ZSqJuO+7UEBIFqacbTRYK+3m8tUO9i6aCBtbFerzbSQn2NsdosI1uvSBQezGMnUgj2LUb2fLoAMrH4PFGjRfOxUaux9kbAqJG6aLAG7qcZKetUjVTuAVy0kX6tQFG/8GdtyDqIHDhujkJ+s2jPQaq54D3Np1smpxgJ99IrWAtcbkoduJa2LsDvj/SLffVpMEKPXvitrzzDBYvXSTQ5gb/GWliFjYgmAyavJdra1n5oJO430q/U6iywzmPgCAptrf9sXCGASLK8BmqLm0amvbhpuLbYP84v92uJaJmGSWb7ped4bT39Aq0wvQrup590rV4TTaTy1XVs6hUjgd3MfUjxYW05VwscxzISQDP3odXV6lcL11ng3rqRZV1yKHNwwmcK7SWbbJy81qn8JFq4nDe4OnCtcDmO4ziO4ziO4ziO4ziO88+Zpj/o6nul7+/TygAAAABJRU5ErkJggg==\" alt=\"0 point 1 5 times 480, equals 72\"></span>. Therefore, Lani spent 72 minutes of her workday in meetings.<p>Choice A is incorrect because 1.2 is 15% of 8, which gives the time Lani spent of her workday in meetings in hours, not minutes. Choices B and C are incorrect and may be the result of computation errors.</p><p> </p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \"><span class=\"align align-16\">1</span>.2</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \"><span class=\"align align-16\">15</span></p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \"><span class=\"align align-16\">48</span></p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \"><span class=\"align align-16\">72</span></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-77cf4fa6",
    "originalId": "77cf4fa6",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">There are <math alttext=\"170\"><mn>170</mn></math> blocks in a container. Of these blocks, <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> are green. How many blocks in the container are green?</p>",
    "type": "grid-in",
    "correctAnswer": "17",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math alttext=\"17\"><mn>17</mn></math>. It's given that there are <math alttext=\"170\"><mn>170</mn></math> blocks in a container, and of these blocks, <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> are green. Since <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> can be rewritten as <math alttext=\"StartFraction 10 Over 100 EndFraction\"><mfrac><mn>10</mn><mn>100</mn></mfrac></math>, or <math alttext=\"0.1\"><mn>0.1</mn></math>, the number of green blocks in the container is <math alttext=\"0.1 left parenthesis 170 right parenthesis\"><mn>0.1</mn><mfenced><mn>170</mn></mfenced></math>, or <math alttext=\"17\"><mn>17</mn></math>.</p>"
  },
  {
    "id": "sat-math-percen-2d31caae",
    "originalId": "2d31caae",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<div class=\"tcp-66913da3-0be2-4ecf-9e4b-6c34149d9017\">\n                <table class=\"table_WithBorder tcp-30cd47ae-fde4-4459-af6c-94d9f62f49a0\">\n                  <caption>Call Ratings</caption>\n                  <tbody>\n                    <tr>\n                      <td class=\"tcp-3db1235c-179a-41e7-9188-055ce147ad87\"></td>\n                      <td class=\"tcp-b9ad067d-3e2b-4989-88ce-b72b53ac55ce\">1 Star</td>\n                      <td class=\"tcp-1062b92c-2d4e-48ff-a198-0501e28c648d\">2 Stars</td>\n                      <td class=\"tcp-a9eb2058-b69e-4949-9095-4967eac2641c\">3 Stars</td>\n                      <td class=\"tcp-6cb31ac8-9e49-4ef3-bc7c-2e3b846dc9f3\">4 Stars</td>\n                      <td class=\"tcp-b2c2d0b0-07f0-4cd7-b8d4-7bb7f05d3eac\">Total</td>\n                    </tr>\n                    <tr>\n                      <td class=\"tcp-66b49c55-c379-4f7e-8baf-10f0ee0c0e13\">Employee A </td>\n                      <td class=\"tcp-e1739c20-4624-4ba5-91d1-a951950dfcbf\">16</td>\n                      <td class=\"tcp-60749ccb-4178-4398-b7c9-ecc28b9f6ccb\">49</td>\n                      <td class=\"tcp-a2414920-a9a8-424d-ac49-16f61440c1e1\">72</td>\n                      <td class=\"tcp-075a5de7-2bb8-4b41-a310-95612eba68d6\">8</td>\n                      <td class=\"tcp-9b035400-b3cf-46de-9cab-ef20de310a56\">145</td>\n                    </tr>\n                    <tr>\n                      <td class=\"tcp-10abcfc1-d496-4521-b5f5-1e8cd6a6ed52\">Employee B</td>\n                      <td class=\"tcp-1a3bcce2-1e87-4f09-a1ed-349c515be350\">\n                        <p>4</p>\n                      </td>\n                      <td class=\"tcp-62620ca3-787a-42d3-b08b-f684bfc37283\">10</td>\n                      <td class=\"tcp-76ae6cfd-bba0-4e7d-9612-2b43d30e5673\">22</td>\n                      <td class=\"tcp-4eb40602-6733-45e9-a0bb-8c424301199b\">34</td>\n                      <td class=\"tcp-39ed7ed6-3cdf-4fe8-a66e-ca645f5243a6\">70</td>\n                    </tr>\n                    <tr>\n                      <td class=\"tcp-e05a4d3b-d239-464c-b4e2-f7ba0cc6f216\">Employee C</td>\n                      <td class=\"tcp-7e6423cf-2ac3-4245-929a-0087d435566e\">8</td>\n                      <td class=\"tcp-523dc2d7-7472-49c3-baeb-00de072af011\">56</td>\n                      <td class=\"tcp-ab9fdc8e-b79d-4850-bf9f-0a70df068cd7\">45</td>\n                      <td class=\"tcp-1ec25da8-92ac-4f33-8a5f-c1bda08ecd22\">16</td>\n                      <td class=\"tcp-2e3873a5-9df2-4939-9175-89f17a641571\">125</td>\n                    </tr>\n                    <tr>\n                      <td class=\"tcp-734e5f98-7818-4d8b-a841-83d8f3208017\">Employee D</td>\n                      <td class=\"tcp-f1822cec-3a26-487e-955c-1d3c02b646f0\">22</td>\n                      <td class=\"tcp-c6d0635f-6b76-4e61-b035-1858d4d85173\">42</td>\n                      <td class=\"tcp-24da28f5-8986-41da-b4a4-d37bc79ef99d\">84</td>\n                      <td class=\"tcp-87f8dd5d-fcb7-46b1-8366-28d8aa3fbc9a\">12</td>\n                      <td class=\"tcp-16abc0e7-eab5-48e4-a118-16c089fd1d71\">160</td>\n                    </tr>\n                    <tr>\n                      <td class=\"tcp-d71d147b-cd08-49be-8317-738eddd0424a\">Total</td>\n                      <td class=\"tcp-9ed36616-f4e1-449a-a5a8-dc845783194d\">50</td>\n                      <td class=\"tcp-9365ff2f-d6cf-470b-8096-75159d6dd1a4\">157</td>\n                      <td class=\"tcp-bd4212bb-c679-4c9e-863d-23f26a52d035\">223</td>\n                      <td class=\"tcp-7dd0ab79-08db-4bf9-81d8-917930011cfd\">70</td>\n                      <td class=\"tcp-9a56db65-2519-4d4a-a079-c77961aec943\">500</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <p></p>\n              <p class=\"stem_paragraph \">A supervisor at a call center reviewed 500 calls taken by four employees and rated the employees&rsquo; performance on each call on a scale from 1 star to 4 stars. The ratings for each employee are shown in the table above. According to the table, to the nearest whole percent, what percent of Employee A&rsquo;s calls received a rating of 1 star?</p></div>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p>Choice B is correct. The percent of Employee A&rsquo;s calls that received a rating of 1 star is the number of Employee A&rsquo;s 1-star calls divided by the total number of Employee A&rsquo;s calls. This quotient, <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAsCAYAAADikXHLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABXElEQVRYR+2XgY3DIAwAMx4DMQ67ZBU2cTHgQogNVQOi//JJVlJIxRWbBo5vOO0BxnnIHy+Ad2DCBW9j2JN9bipw2jgYJ0V9wSP2AZxghWen4Z2Jg2K0AwF4cObenr5jg14SnUqaBQPO878+pQ37Fww+QkpJksYZSf3YhLE0dURfCkXKbFHRLxcbSbXtS2uKGEnRyiNKLe6Qyqn6LSmhfWv6kDaF2wudIDGK5UKK8h+4rJpNoSj76J1eCHGXkF9LeHuJ8GC4fge9y0ZSKB4ud6koO3GX0Du91NQvYXY/ZVw460yQSgPJpxeCjlbW8emLM/gkVRyjrUqcTZwJpqbeZ0FrYx82YYxKYUh3U5f7UIQr9HeRV+mbsvHrSdWpkVYfx+MtsiSVJO5nvE+kSr1OlqpX5j36Ay6TamFrSpi9ZelrYaXy6qsF6D/tkzSLPJFCiliJR0KKoijKn+E4XshzjyePpC8YAAAAAElFTkSuQmCC\" alt=\"16 over 145\"></span>, is approximately equal to <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAWCAYAAACCAs+RAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABB0lEQVRYR+2U2xGEIAxFKY+CKIdeaIVOsokxIBgeK7Mf7nBmGIxeCBciRoDggDpuFnwEep4mOAMWB52hSk8zk5/GY9fW8CT5Qx2PkEX0jPQ0M/nZhIMADQ1ABG/vCY6BLhTvNKK3pDlay0hPM5MfogeLHYZJcxuniQhOnndAI+9KAIehZmSkeZpfjKTN5onKYyR4AX0jAqCqZURoaZ7mZ6PX0qpr7aT1XmPJyJf5r2VanOLbjAhSkq8vLaIoL3H25GcX1o2sXjZkZPH6JZaMzFy/x4InzNb1WMeE/GTaYleMEKP86aq1Hp+uGmU+WSi30gTxSyPEKH8ykzT3E9psNpvNZvMfGPMBCY6r67Sx22oAAAAASUVORK5CYII=\" alt=\"0 point 1 1 0 3\"></span>, or <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAWCAYAAAB64jRmAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABVklEQVRYR+2VAQ7DIAhFezwP5HG8i1fpTZioKCJa13RbsviSZrP9Ih+sPSTeHmDcCXmosqLhgLeozZeBMLWbizHDz1QDpwNDGuMgSBrNUl6UzEy4ouEkfU1ajpFk0ILPSWsaCJacqevGOdbX51gAxXjD6Qw+jNfIwIqGIxMjeILUnTAsGm2e1MVcmCmMyWN01Mp5sGGoGVjRSDQDSCpW7ZyETHadYrG4yaUuEhCWvTKwoiFSYu22Q1LBxiZTEda362UXOY+bVN4tZHSfvw5a0tRN/Huri8ivTRLFDNuuI7xNccoWx3mT2M+bvLldEW3LSmKcXIjmHZ3F/4zJ9w8e5LLbsXOii9nwqLiRx03mxaW2+YREMzdOYNZFuc5HTdLBwZ/JjnRj6gI7PMj4KA/exXzre9tVM4nQ/XT1FS5Gi2b+SYjxcheJNsagi5vNZrPZbDZ/ynG8AH7s/noUHcb/AAAAAElFTkSuQmCC\" alt=\"11 point 0 3 percent\"></span>. To the nearest whole percent, this is 11%.<br><br>\nChoice A is incorrect. This is the percent of all calls taken by Employee A that received a rating of 1 star. Choice C is incorrect and may result from a conceptual error. For example, 16 is the number, not the percent, of calls taken by Employee A that received a rating of 1 star. Choice D is incorrect. This is the percent of all calls that received a rating of 1 star that were taken by Employee A.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">3%</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">11%</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">16%</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">32%</p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-194ae3b1",
    "originalId": "194ae3b1",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">There were approximately 113,000 occupational therapy jobs in the United States in 2012. The Bureau of Labor Statistics has projected that this number will increase by 29% from 2012 to 2022. Of the following, which is closest to the number of occupational therapy jobs the bureau has projected for the United States in 2022?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p>Choice D is correct. The decimal equivalent of 29% is 0.29. It&rsquo;s given that the 113,000 occupational therapy jobs in the United States in 2012 are projected to increase by 29% by 2022. Increasing 113,000 by 29% can be expressed as <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAAAYCAYAAAA/FYWiAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAMyZLetQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAC20lEQVRoQ+2XAZKkIAxFPZ4H8jjepa/SN2EJIW2ICUSh261dXpU1Dkb4+YQ4s3DCew/rsob9HUIe+mcJ4R32dQnby871f/Cj6UMIr7AZJry2JazxQf5VpRYDz+KPfPmMDq+t+U5vTC3nXj/u4MlHQhsLt3Rp2t77ymL8PpjJktiaEbUYLIotLo2LYmw9aRmjvTM0Zt2jvccY0OPHHTxaJUdRSH9LfbgHcu6yS6Qx6QO2zGNygleZZUQtBucVAnIy1nzW85RcnAjuR8UAFFdo7PBDgqex8clyapVYnzrUifppD+TcKYYVguYDBgkBR8ViYpoRnhgJCbAS1ooJ0JLtjclDmAfTc9cPDVdhXNDqAbVmHz66yzm0celDqkxLOCVWM8ITQ2CyZ6EEmmQlwje9PyYPnTpErx8cf2H4tHpInSZ3A5zDmrscL3zAE3x+kRhVGFgQ2IarJjkSGRWTh7L+/N4APzgU35tzHmqC7xzr4Waf19cOKPeh/EXBY8QVs0io+SlxmDQqJg9F/Ucx9PpBz+G2dvGNuqK1BsbH+YW3qYOwzvPZg4oPOZH7RgCeGE7tc+Jpq6Ni8lBhyAg/OBQvTyznilaLT0c2DhwWB11xTmXNxwsDE9bXpGqWRmLifNP7Y/JQ4cEIPzgU3y4Mn1YN2nSvJkA/ICx3rBJbuMcIKwYXv5Yw6ZFzpeTjRHA/KoZA/bmgBvjBoXhrPuCKVgl6aeux9LZ8SAMQdHVijhVDCRf/L+diqc4nOorWYUbFAGmcaez1g0PxtcIAPFplEVCnaWlJRcA23OvDeYDRUxjApzjiLV3SpJSwWJ9MwOucBDAqRhZCrx93aWml57R2GS+vsiNjcejPiNOBaLXPb5PW3/SN+Da40eUmPO3HE2g+JGqn5Nuklii+d78CTp3a6R704wksHxLYmvR2+01g3V+fTu3vH8lTfvwSjw+TyWQymUwmk8lkMplMJn8vy/IH1Xb+D/fSTCsAAAAASUVORK5CYII=\" alt=\"113,000 times, open parenthesis, 1 plus 0 point 2 9, close parenthesis\"></span>, or <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAAYCAYAAAAbIMgnAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAMyZLetQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACg0lEQVRoQ+2XgZGEIAxFLc+CLMdebMVOOEIShZAgLrju3PBmnPMwwM8P5OamGLevbp5mt+7O0dC/xbndrfPkls3O9Rf8uNTp3OYWQ+S2TG72H+hXlVIMfPM/6Kkzwm3L5ZzWmFLOrX4wbDy88qPN3dc5iqnXaYrhxEtCSzFYtMVvjZtirCGCkDHanK4x8+rtPceAFj+Ys2gy/3Q+eiR1prdM1Ykt4VyciU+BJbQUg+sKAZSMtZ71PSTnF4L3XjEAxyUaG/yIsVotroPrs0dyvRATFUrTiUFRMgBWHTaFa6oLrYmRsAC5H6MVG9CSbY2hIcwj0vOpH7XgWqTzWDfVqY1LneEUygQZ7K9loTUxDBqXC2WsU5ok2ymGhrIb1urHFeHW023SCgRo44lOvAH5RKZX4bBg2GYsU4CaRHrF0BDpp3kd/CiB+58eYDGszmDrTH9RqBF6JxkWarbKTkWpiaEhr/8sVg8/LHDvPPdwA6Mbf3hU0ElC2oTeTabULlF0/g2Trm+DNTE0lBjyVOGOjmMcWCweP16fov/1wmmnnuHTpreOuCjtMTSUeNDDDwkX5c4c/YBF2rCKeYJMjVArBjevM49hPXKtkLxfCN57xTConwrewY8YvmlWvLXelc4wAEF3F46xYtiE5P8RKmZxPXEjtRvaKwYI45HGT/2QReJbX8oVCEWKClKrMx+IaCkccBTPv/IjT3NIWOzPJuCTJwH0ipGF+tQPWbh0b/mkHQeLp39jsgN11R6eJuy/6EY9DRYiLejbfmhoOgOlU/Y0oaWIfv4t4FaoneJFPzQsnQG82no7eRLY99unW/v7K3nLj5ganYPBYDAYDAaDwWAw+HWm6Q/qevxKzc5CNgAAAABJRU5ErkJggg==\" alt=\"113,000 times 1 point 2 9\"></span>. Evaluating this expression yields 145,770. The closest number is 145,800 in choice D.<p>Choice A is incorrect and may result from increasing 113,000 by 2,900 instead of by 29%. Choice B is incorrect and may result from increasing 113,000 by 2.9% instead of by 29%. Choice C is incorrect and may result from increasing 113,000 by 29,000 instead of by 29%.</p><p> </p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">115,900</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">116,300</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">142,000</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">145,800</p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-a8fabad0",
    "originalId": "a8fabad0",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">A waiter receives tips from each customer. On average, the tip is 15% of the customer&rsquo;s bill. At this rate, which of the following is closest to the tip the waiter can expect when a customer has a bill that is $78.20?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p>Choice C is correct. If the bill is $78.20, 15% of the bill can be found by multiplying 78.20 by the decimal conversion of 15%, 78.20 &times; 0.15 = $11.73. The exact amount $11.73 is closest in value to $12.00.<p>Choices A, B, and D are incorrect and may be the result of errors when calculating 15% of the total $78.20.</p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p>$8.00</p>"
      },
      {
        "id": "B",
        "text": "<p>$10.00</p>"
      },
      {
        "id": "C",
        "text": "<p>$12.00</p>"
      },
      {
        "id": "D",
        "text": "<p>$14.00</p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-1c2f50a6",
    "originalId": "1c2f50a6",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">During a sale, the original prices of all the items in a clothing store have been reduced by 20%. What is the sale price of a jacket with an original price of $50 ?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p>Choice D is correct. It&rsquo;s given that the original price of the jacket has been reduced by 20%. Multiplying the original price, $50, by 20% gives the amount, in dollars, that the price of the jacket is reduced by: <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAAWCAYAAACv8OArAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABqUlEQVRoQ+2WgY3DIAxFMx4DMU52ySrZxIdxHAwxDQQaqSc/CbUBan9/XNoFAdjAhxd8mw2/4esJbF6sO1h3yNZnA7DD6oSeMFxIimuSt3VtXteB3GqBfQW3+GB5XSQFSR8un2eTjE66uBBZ6Ou6FA1Mk5Y46dZQni6QCy8T4AmX3T8LaoCrafvqwjMdwNu6KDd1bZmzWcudOCp8gbAl2yMLP6bSlVQ5PBZcxmqFuuUwu0PXKKlLqb6L2S1azhPxPm4O63HIYLUuk4UfUycxSWG4NtdLbIwjRq+u6m9TMT41AsfQzb7RonUinxIHTKeqBbrOM9LcGUZTvmTGU10jVM0e0SLbfyQQxckP8wmUK8QJTtNMPX9TgQ/5itly05NrhJlh9hlDGI383DVS42p2/w9RXB+8RuIdrRSHPNU1wmezb7S0bApWdf/F0sztNZw06EYjT3SNUjW7RQtvkp1AXZ0fgOx07Zk5v6oVU9lA/XCTWG6CmtFMq65Z1MxGmrQkw9MozUDYEBpzCyrNznOVI78ivqmr5JPZyJtaDMMwDMMwDMMwjP/JsvwBWG4Oo4jzCasAAAAASUVORK5CYII=\" alt=\"50 times point 2 0, equals 10\"></span>. Subtracting this value from the original price results in the sale price of the jacket: <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAYCAYAAAC/SnD0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAMyZLetQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABnUlEQVRYR+2Vga2EIAxAGY+BGMddXMVN+mmhUpAq9Uh+THgJuROxfZaqrgfADsFvcABAnvoE/+INMd3mHSY8R9j7AiQo1p0jXhB/T2AP4ryHLd4RnZiIxVuyBwc+CuXDimFvDOJop/KOHRt4RQDoXIgrdbmUuCRsj2dh8Wa4KL2iDXunIqREss1JqOkehALlNXmqgne/ldLivcXqjRybx3karZ/JW0ueT194unkZL08RSfi+Qy1YvUvXxLXx8FI0izcljD9VmyvJz90IgRLgFA4pkJJfWzpJTyyawVvC1/WLZvDmKuNfHG1AphZNQfhavqbsaC955/3wA6PeErVob71bibZVNWQLW5Kfm/Awnjws3vOLhgFzF9G7a/BxkoHTDWjJ5z2eEou3WrS33jK5LEQ+rXIt2uALdRIW7/uijX4I5A2L5L3FI4FNn+4fsHhL1KJZvDlI/RW6DyylknxdyHa3n3b/DRZviVY0xORdilGGlri3tu08JO04r5lbMMbizdwVDTF7U8Dc5nnqE3zVe7FYLBaLxWKxWHwH5/4AFKoLSAD8ossAAAAASUVORK5CYII=\" alt=\"50 dollars minus 10 dollars\"></span>, or $40.<p>Choices A, B, and C are incorrect and may result from a conceptual or calculation error.</p><p> </p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">$12</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">$30</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">$36</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">$40</p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-73362607",
    "originalId": "73362607",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">Amara grows cherry tomatoes in her backyard. This year, she harvested <math alttext=\"750\"><mn>750</mn></math> cherry tomatoes and gave <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> of them to her neighbor. How many of the harvested cherry tomatoes did Amara give to her neighbor?</p>",
    "type": "grid-in",
    "correctAnswer": "75",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"75\"><mn>75</mn></math>. It&rsquo;s given that Amara harvested <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"750\"><mn>750</mn></math> cherry tomatoes and gave <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> of them to her neighbor. <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> can be written as <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"StartFraction 10 Over 100 EndFraction\"><mfrac><mn>10</mn><mn>100</mn></mfrac></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.1\"><mn>0.1</mn></math>. Therefore, the number of cherry tomatoes that Amara gave to her neighbor can be calculated by multiplying the total number of cherry tomatoes by <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.1\"><mn>0.1</mn></math>, which gives <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"left parenthesis 0.1 right parenthesis left parenthesis 750 right parenthesis\"><mo>(</mo><mn>0.1</mn><mo>)</mo><mo>(</mo><mn>750</mn><mo>)</mo></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"75\"><mn>75</mn></math>. </p>"
  },
  {
    "id": "sat-math-percen-34e18ce4",
    "originalId": "34e18ce4",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">There are <math alttext=\"350\"><mn>350</mn></math> objects in a box. Of these objects, <math alttext=\"4 percent sign\"><mn>4</mn><mo>%</mo></math> are balls. How many balls are in the box?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p>Choice B is correct. It&rsquo;s given that <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"4 percent sign\"><mn>4</mn><mo>%</mo></math> of the <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"350\"><mn>350</mn></math> objects in the box are balls. Therefore, the number of balls in the box can be found by calculating <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"4 percent sign\"><mn>4</mn><mo>%</mo></math> of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"350\"><mn>350</mn></math>, which is equal to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"350 left parenthesis StartFraction 4 Over 100 EndFraction right parenthesis\"><mn>350</mn><mfenced><mfrac><mn>4</mn><mn>100</mn></mfrac></mfenced></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"14\"><mn>14</mn></math>.</p>\n<p>Choice A is incorrect. This is the percentage of objects in the box that are balls, not the number of balls in the box.</p>\n<p>Choice C is incorrect and may result from conceptual or calculation errors.</p>\n<p>Choice D is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"4\"><mn>4</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"14\"><mn>14</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"70\"><mn>70</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"346\"><mn>346</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-048811bd",
    "originalId": "048811bd",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">What is <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> of <math alttext=\"370\"><mn>370</mn></math>?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p style=\"text-align: left;\">Choice B is correct. <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> of a quantity means <math alttext=\"StartFraction 10 Over 100 EndFraction\"><mfrac><mn>10</mn><mn>100</mn></mfrac></math> times the quantity. Therefore, <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> of <math alttext=\"370\"><mn>370</mn></math> can be represented as <math alttext=\"StartFraction 10 Over 100 EndFraction left parenthesis 370 right parenthesis\"><mfrac><mn>10</mn><mn>100</mn></mfrac><mfenced><mn>370</mn></mfenced></math>, which is equivalent to <math alttext=\"0.10 left parenthesis 370 right parenthesis\"><mn>0.10</mn><mfenced><mn>370</mn></mfenced></math>, or <math alttext=\"37\"><mn>37</mn></math>. Therefore, <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> of <math alttext=\"370\"><mn>370</mn></math> is <math alttext=\"37\"><mn>37</mn></math>.</p>\n<p>Choice A is incorrect. This is <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> of <math alttext=\"270\"><mn>270</mn></math>, not <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> of <math alttext=\"370\"><mn>370</mn></math>.</p>\n<p>Choice C is incorrect. This is <math alttext=\"90 percent sign\"><mn>90</mn><mo>%</mo></math> of <math alttext=\"370\"><mn>370</mn></math>, not <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> of <math alttext=\"370\"><mn>370</mn></math>.</p>\n<p>Choice D is incorrect. This is <math alttext=\"370 minus 10\"><mn>370</mn><mo>-</mo><mn>10</mn></math>, not <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> of <math alttext=\"370\"><mn>370</mn></math>.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"27\"><mn>27</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"37\"><mn>37</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"333\"><mn>333</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"360\"><mn>360</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-6e4a60dd",
    "originalId": "6e4a60dd",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">Rita&rsquo;s total bill at a restaurant was $25.00, including tax. If she left a tip of 20% of the total bill, what was the amount of the tip?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p>Choice D is correct. The total bill was $25.00. The percentage 20% is equivalent to the decimal 0.2. The tip is the product of the percentage and the total bill; therefore, <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAWCAYAAABT5cvhAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABf0lEQVRYR+2W2xHEIAhFU54FWY69pJV0wqqERIkPjO7uD2eGycMIcgUnGwG7hXBBM+AOCPdNAA5whuagGT8xjK1A4h9gB5uMX2b37LtZRHFQxFs8/lziTtL6EOm8NWJK/cPhwCTffItuHFowT363TG0GOn6KfTjjn+cTk/qP4hrns5iL16MbBxe8gdesuWApWDX5vKstKgvBWM81lOD+exu+im6c2s6XBJEQA7YEY2Oldy1S/1c3WRuLwQ9Hqx0t1XOOGd9QURwUrCZk+5zk4Jx2ZaXCjYrI/ZcqnTpsxTlNiOKsEpKSlLQZtfIbEeX+x7tplCzOita+hBEkGRgVctR/tTiosjpGFd8ji0MlyidLdzWeWX6+tJWi31PA9P4cfjDqP1ATcjW5kD6NN78/AaqUNyKer4rviJ7/2SKQIo7Dd7C0ozwpci4R8c3vj8Q/FUGaDK5d3p4ShuJQMmjPtuBC5t9zm68Gqf87ydtWikj8Ko6iKIqiKIqiKMq/2LYP7P5OwtmYFv0AAAAASUVORK5CYII=\" alt=\"0 point 2 times 25, equals 5\"></span>, so the tip was $5.00.<p>Choices A, B, and C are incorrect and may be the result of incorrectly converting the given percentage or a calculation error.</p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p>$3.50</p>"
      },
      {
        "id": "B",
        "text": "<p>$4.00</p>"
      },
      {
        "id": "C",
        "text": "<p>$4.50</p>"
      },
      {
        "id": "D",
        "text": "<p>$5.00</p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-41b71b4e",
    "originalId": "41b71b4e",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">What number is 20% greater than 60 ?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p>Choice B is correct. The decimal equivalent of 20% is 0.2. The number that is 20% greater than 60 is also 120% of 60. The decimal equivalent of 120% is 1.2, and <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAAYCAYAAABgBArrAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAMyZLetQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACBUlEQVRoQ+2XC46EIAyGOZ4H8jjexat4ky5QKqWUl4OTTJYvIRm09PFTcNd8C7gO2MwGxwUQHj0G4IJjM7Cfn/v6GuduYLPVh2kVKtD9pKGtBThhF6Ki0GytVcm/YMC5x/dyveJzBmlMOWK83to95LRH2Oh4tyWGYIX1crPIjjoORdJsWCFi7vDPtsNmEp+9AeVHmz9Su7mOzb9wo0vYwtFGPyygt2PzkJSMwdeVbNwG8c4mu7evBB83q6ldO+uGvHNGQV/RuQ/Gxei4a+makIJliVt8POZ/NqVcNGTtN9qRHMXvLjuebs6TisHD8QqDxyyJryWOtnkx9/FtjJZgsp4aRdtPhcXCY7J4VFOByCa5P0NXUFy0KQkr/Pmcc9sZyLxqyNoTPhH2Fsx6xifkTxdWxkju2CFh882bhXb1aGi1JzwVFhPIHdeElTvLRRu6CgrCUi3uZ22oHWahD2Pr/i7VnvBEWPxi6mtUYcPxagub26gfLyXGDHq0qNWeMCos7VbJnnadC1SKwUWjddLGFyI6A/21j+sopVNDtGpPqAkrHfVe7E4MaSOvA80X72BtTvjnL/yTgPH0Deut/WZEWJrrIyZUKhwTj2tqMXHo3aNt3Awwti5sb+2vol0Hs8BGmH+//gxvHVfXOW9060+Bx2dOd91/Cr2wWYvFYrFYLBaLxf/FmD8NGjPlCZRUHwAAAABJRU5ErkJggg==\" alt=\"1 point 2 times 60, equals 72\"></span>.<p>Alternate approach: 10% of 60 is 6, and 20% of 60 is double that amount, or 12. It follows that the number that is 20% greater than 60 is 12 more than 60, or <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAAWCAYAAABaDmubAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABmElEQVRYR+2W4RGDIAyFHY+BHMddXMVNUhAiIRCIFXv9ke+Os2rEl0eIXRA4NnD+EH6eY93DsQD2Nd9fHGwHVDEz2NcFnJ88nV4AHLA5otGPVtwTyhz5yDmrtOBk3svzBsAOKwuMMWRidj4L1MJF5kRWr45qmG8uB/3AYlNpwSAu7tjc9aAUEyqrVdkUFIWL1iO+s736cUfVC0l1pkvTOfOkJmq0SEEUbBPcHE1SWmPzDqh3S4/43HvGSrm3KLTkk1TuadDEJPM1Sd2p2ECrDfU4q8ltfk8xbSwfaYx0SfO3KGKjOeEl2ThcJUwuxkjGDqr9RWNRu3buu3AfelRa8AJ/uOixN4x9WilaY1H3qMc/Qdu/m1rwIk+UmvZvrSAm3Df1+QKnL3/nHQFRi9Sca2PrmJkfL2RkbPxC67bnEzQL3NUiTVC0gh/93Qr0EsLq6CU7C2mXIiotvB20mjat4Na5xCxjW5repNfmbmlBc3G0Hrr6yTnGpn5DfwdlfeUYf2DuQndsunTxay2GYRiGYRiGYRhGzbJ8AE1Cc6bX1ooKAAAAAElFTkSuQmCC\" alt=\"60 plus 12, equals 72\"></span>.</p><p>Choice A is incorrect and may result from dividing, instead of multiplying, 60 by 1.2. Choice C is incorrect because it&rsquo;s 25% greater than 60, rather than 20% greater than 60. Choice D is incorrect and may result from multiplying 60 by 2.2 instead of 1.2.</p><p> </p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">50</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">72</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">75</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">132</p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-eaab8bc1",
    "originalId": "eaab8bc1",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">Out of <math alttext=\"300\"><mn>300</mn></math> seeds that were planted, <math alttext=\"80 percent sign\"><mn>80</mn><mo>%</mo></math> sprouted. How many of these seeds sprouted?</p>",
    "type": "grid-in",
    "correctAnswer": "240",
    "explanation": "<p>The correct answer is <math alttext=\"240\"><mn>240</mn></math>. It&rsquo;s given that <math alttext=\"80 percent sign\"><mn>80</mn><mo>%</mo></math> of the <math alttext=\"300\"><mn>300</mn></math> seeds sprouted. Therefore, the number of seeds that sprouted can be calculated by multiplying the number of seeds that were planted by <math alttext=\"StartFraction 80 Over 100 EndFraction\"><mfrac><mn>80</mn><mn>100</mn></mfrac></math>, which gives <math alttext=\"300 left parenthesis StartFraction 80 Over 100 EndFraction right parenthesis\"><mn>300</mn><mfenced><mfrac><mn>80</mn><mn>100</mn></mfrac></mfenced></math>, or <math alttext=\"240\"><mn>240</mn></math>.</p>"
  },
  {
    "id": "sat-math-percen-771ee744",
    "originalId": "771ee744",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">There are <math alttext=\"320\"><mn>320</mn></math> marbles in a container. Of these marbles, <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> are red. How many marbles in the container are red?</p>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p>Choice A is correct. It's given that <math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math> of the <math alttext=\"320\"><mn>320</mn></math> marbles in a container are red. Therefore, the number of red marbles can be calculated by multiplying the number of marbles in the container by <math alttext=\"StartFraction 10 Over 100 EndFraction\"><mfrac><mn>10</mn><mn>100</mn></mfrac></math>, which gives <math alttext=\"320 left parenthesis StartFraction 10 Over 100 EndFraction right parenthesis\"><mn>320</mn><mfenced><mfrac><mn>10</mn><mn>100</mn></mfrac></mfenced></math>, or <math alttext=\"32\"><mn>32</mn></math>.</p>\n<p>Choice B is incorrect. This is the number of marbles in the container that aren't red.</p>\n<p>Choice C is incorrect. This is the total number of marbles in the container.</p>\n<p>Choice D is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"32\"><mn>32</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"288\"><mn>288</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"320\"><mn>320</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"352\"><mn>352</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-05195d8a",
    "originalId": "05195d8a",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "medium",
    "stem": "<p style=\"text-align: left;\">In a sample, <math alttext=\"80 percent sign\"><mn>80</mn><mo>%</mo></math> of the items are faulty. There are <math alttext=\"88\"><mn>88</mn></math> faulty items in the sample. How many total items are in the sample?</p>",
    "type": "grid-in",
    "correctAnswer": "110",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math alttext=\"110\"><mn>110</mn></math>. Let <math alttext=\"x\"><mi>x</mi></math> represent the total number of items in the sample. It&rsquo;s given that <math alttext=\"80 percent sign\"><mn>80</mn><mo>%</mo></math> of the items are faulty and that there are <math alttext=\"88\"><mn>88</mn></math> faulty items in the sample. Therefore, <math alttext=\"80 percent sign\"><mn>80</mn><mo>%</mo></math> of <math alttext=\"x\"><mi>x</mi></math> is <math alttext=\"88\"><mn>88</mn></math>. Since <math alttext=\"80 percent sign\"><mn>80</mn><mo>%</mo></math> can be rewritten as <math alttext=\"StartFraction 80 Over 100 EndFraction\"><mfrac><mn>80</mn><mn>100</mn></mfrac></math>, it follows that <math alttext=\"StartFraction 80 Over 100 EndFraction x equals 88\"><mfrac><mn>80</mn><mn>100</mn></mfrac><mi>x</mi><mo>=</mo><mn>88</mn></math>. Multiplying both sides of this equation by <math alttext=\"100\"><mn>100</mn></math> yields <math alttext=\"80 x equals 8,800\"><mrow>\n<mrow>\n<mn>80</mn>\n<mi>x</mi>\n</mrow>\n<mo>=</mo>\n<mn>8,800</mn>\n</mrow></math>. Dividing both sides of this equation by <math alttext=\"80\"><mn>80</mn></math> yields <math alttext=\"x equals 110\"><mrow>\n<mi>x</mi>\n<mo>=</mo>\n<mn>110</mn>\n</mrow></math>. Therefore, there are <math alttext=\"110\"><mn>110</mn></math> total items in the sample.</p>"
  },
  {
    "id": "sat-math-percen-022e9894",
    "originalId": "022e9894",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "medium",
    "stem": "<p>An insurance company offers a series of three information sessions. <math alttext=\"1,250\"><mn>1,250</mn></math> people attended the first information session. <math alttext=\"72 percent sign\"><mn>72</mn><mo>%</mo></math> of the people who attended the first information session attended the second information session, and <math alttext=\"36 percent sign\"><mn>36</mn><mo>%</mo></math> of the people who attended the first and second information sessions attended the third information session. How many people attended all three information sessions?</p>",
    "type": "grid-in",
    "correctAnswer": "324",
    "explanation": "<p>The correct answer is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"324\"><mn>324</mn></math>. It&rsquo;s given that <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"1,250\"><mn>1,250</mn></math> people attended the first information session, and that <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"72 percent sign\"><mn>72</mn><mo>%</mo></math> of the people who attended the first information session attended the second information session. Therefore, the number of people who attended the first and second information sessions can be found by calculating <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"72 percent sign\"><mn>72</mn><mo>%</mo></math> of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"1,250\"><mn>1,250</mn></math>, which is equal to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"1 comma 250 left parenthesis StartFraction 72 Over 100 EndFraction right parenthesis\"><mn>1</mn><mo>,</mo><mn>250</mn><mfenced><mfrac><mn>72</mn><mn>100</mn></mfrac></mfenced></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"900\"><mn>900</mn></math>. It&rsquo;s also given that <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"36 percent sign\"><mn>36</mn><mo>%</mo></math> of the people who attended the first and second information sessions attended the third information session. Since <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"900\"><mn>900</mn></math> people attended the first and second information sessions, the number of people who attended the first, second, and third information sessions can be found by calculating <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"36 percent sign\"><mn>36</mn><mo>%</mo></math> of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"900\"><mn>900</mn></math>, which is equal to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"900 left parenthesis StartFraction 36 Over 100 EndFraction right parenthesis\"><mn>900</mn><mfenced><mfrac><mn>36</mn><mn>100</mn></mfrac></mfenced></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"324\"><mn>324</mn></math>. Therefore, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"324\"><mn>324</mn></math> people attended all three information sessions.</p>"
  },
  {
    "id": "sat-math-percen-63573fea",
    "originalId": "63573fea",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "medium",
    "stem": "<p class=\"stem_paragraph \">During the first month of sales, a company sold 1,300,000 units of a certain type of smartphone. During the same month, 15% of the units sold were returned. If sales and the return rate remain the same for each of the next 5 months, about how many units of this smartphone will be returned to the company during this 6-month period?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p>Choice C is correct. Of the 1,300,000 units sold during the first month, 15% were returned, so <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAAAYCAYAAAChr4ICAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAMyZLetQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAADq0lEQVR4Xu2YAZLrIAiGc7wcKMfpXXqV3sRVkcQQULS02c7wzWTeCyUIP2Iyu9SE1yOsyxoerxCKyakI4RUe6xK2p6zPf9BQk6ejJIRn2ISGPrclrPGHctsk+cZ/ysXHC8/NxIdiFbfl09KJ+22mjhpJe1gL41ZXnIb4bzNPS1p74/VYj7yYXHo1SHyjzztiA8rDmsGAodhiubAAPHtekNpmfShWcdU+6yOey4ctQTXUxGoB/kJf8pvp0JpDytOKVn6wF2jt57eYpgYK1ZDeJ6x8xATrie8NBsQghZdXOj5L75Es4n7S9X0oVnG1a6NfNB02ouFMHTU97XMjO5uey9OKVn64F6g9P1PlrKmhxqqH6t7khEmzjgmC1x0NogET2BNihicBIsOm0vgU045V3JG1sz7RsdyCT3U/Uwei0V47YDRPC3r5Hb+fa6R2bQ3I1/ucEqROCH4HzgwGLHQIAQlJgtVJt32Kaccq7sja4HvYqIYzdVAk7WOicOJtW1wjbq5ycT2ieSLi9z25pH2REPPLNUq1g32kBsSqh6reQIJXJ2RmMGAgrsKqBFP4FNOOVVyNTzEVXcpzjIYjsSQk7dF++izJzZZ8deuNIuZXcuFPZNRMXwOi0dTKpyucVLwGLBRfl2ZJE6zianyKKepyDAOn4UgsiVHtL58Ckd7B9w6t/PJnUpXLvhc6tXM1IBpNrXxKcVcnZLQ5lNMpkcWREhp4zRGs4o6sXW84TsOZOiij2kNskocwGBg7/bd1zXxKITAceMWaBU1quBqQr/aZa2rNaHModaGQkPSKrZNu+xTTjlXckbVr3TgNZ+qgjGrPbapef99hLr927VwNyFf7HL3iiXJ1QrTFQ0GdhMpaNFb91wmND8Uq7sjaoMu5ruiy+8zUQZG0Hx/gs80KMT/BftJ64uD4ep+TgTohUpEUXOzyd2ryLD0RuBNC40OxiqvxSWR7VSunoSYWbAReX3njFa2rDQSxrxuN5mlJa2/kTXbJr9JioIaaSxxyn7DyAaMgXqv43NR6EPZij4srEjcDXCSZQs+Hrp2wiJvQ+NBBkDRU1RF/GxmMhFbr1qH3Lr1DE4YDr+tbQFND1ueuPmOCrUnlyM9t/EB9mnvXThviLOSshp+Ey/PXuLPPmdZbQyJ/J8adUG6/yp1rp5OGPcUnNPwkUp6/xJ193oFXi/6ESf53nZB3rI1vhdbmH9XwE2jy/BXu3GOO4ziO4ziO4ziO4ziO4ziO4zj/j2X5AyIIDWmB0T6TAAAAAElFTkSuQmCC\" alt=\"1,300,000 times 0 point 1 5, equals 195,000\"></span> units were returned during the first month. If the units were sold and returned at the same rate for the next 5 months, then a total of <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAAAYCAYAAACMXa24AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAMyZLetQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAADjElEQVR4Xu2Yi5HjMAiGXZ4LcjnpJa2kE50kwMYI9IiJPXujb8Zzuwog8YNw9hZO+LzCuqzh9QkBl/5bQviE17qE7W3n2qtHT6zJDwnhHTajUO9tCWv8AH898XmtaR2f0h/i0ufsiZWO/5qE98bs9XNdtanlrH0GzUyx4sNyqMXypFYLC83nrIt8RN4dOkvuqN+OJQo5a58lHx6QbPkEgoJvsbTKpgYQR8Y9H9zVZn3F2XmsJaQe4HvkRpeysFFieUFn0GphMeKzDxp+KbN/XUNJj4+XjdlgfKrK5GkKyfXswwqYNxwoKL2CZdx8UVBUL5uE9sqXelixQJ/SjsfyolYLi1EfGEbtvKWGnB4fL5tMTlIc5ujycsIk1FsQkeu1RDXoUkSXkw9vFC8bXIIzszNKPSBWmauGjOVBqxYaoz6aXiMaEl616d47NZg0IrTXY0I2KcHX99uzbfkg6eP01ISEQ1txeWLXbXAJ9zzWpB6HD75W8dHykLGI/ZXceKw6JKxa1Oj1yUNGvCFHNCS8atO1NzRYaUSYzZuDWzcD4u0F418j0M8SEw5nHRrjOtngEuaIfooe4JOa61i38uCxcMkN0tO7ec1cBjQkeny8bJpi15LPt5XdQBJB25RTfe04JdZjg0sxx6NhNT3Ap9RAy6M1DK5Qq4VFj49VjxENiR4fLxtMrjQiWslDA9MTBcgNbMdLWAdLwAWwDg0Ce9ng0qnhND3Ap3zLaHlYzUs6ph9rz91fG+C8ce+4MS7tjGhI3Fo/rVicUcFqiRFgo+8Jh7a+jvDErtvg0kkDTQ8rlpZHS88rjNYi0fKpfT6iIXFr/aJVvnnSiLCSs9bzJI7B0s9fJY/nqcZ1siEgFxRN0cPKVcuDx8IlN6xz1Gj5QI2MQTKgIXF7/dKCmVwl+RyIFUpOIjpAaWNflkQRR5twTjaJvM7+qNT0AN/j3HQxVbuB/9ce4SfNm/OyL5vUTP6u0ePjZQOLhuCt5KGB6SlFOBr4eGTj5gkm9oepRj7iwIiXjWxWSw8Qj2LpmtQGwVVqtdA0TLTqB/rU3xQtDbW9e3R3saEGq03DX5L33/TL82uguGdRvtVDi3UXz2r43N6Z2vT9NfkVHDsFf72VdLO1qfSNHlasO3hSwyf33oERff/kSPvePfVputYatFePnli/5gkNiSf3nkwmk8lkMplMJpPJZDKZTCaTyV9lWf4B8X2h3spVD4YAAAAASUVORK5CYII=\" alt=\"195,000 times 6, equals 1,170,000\"></span> smartphone units were returned during the 6-month period.<p>Choice A is incorrect. This is the number of units that were returned in 1 month. Choice B is incorrect. This is the number of units that were returned in 5 months. Choice D is incorrect. This is the number of units sold and not returned during the first 6 months.</p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">195,000</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">975,000</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">1,170,000</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">6,630,000</p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-d693f563",
    "originalId": "d693f563",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "medium",
    "stem": "<p>Last year, Cedric had <math alttext=\"35\"><mn>35</mn></math> plants in his garden. This year, the number of plants in Cedric&rsquo;s garden is <math alttext=\"60 percent sign\"><mn>60</mn>\n<mo>%</mo></math> greater than the number of plants in his garden last year. How many plants does Cedric have in his garden this year?</p>",
    "type": "grid-in",
    "correctAnswer": "56",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math alttext=\"56\"><mn>56</mn></math>. It&rsquo;s given that Cedric had <math alttext=\"35\"><mn>35</mn></math> plants in his garden last year and that the number of plants in Cedric's garden this year is <math alttext=\"60 percent sign\"><mn>60</mn><mo>%</mo></math> greater than the number of plants in his garden last year. It follows that the number of plants in Cedric&rsquo;s garden this year is <math alttext=\"35\"><mn>35</mn></math> plus <math alttext=\"60 percent sign\"><mn>60</mn><mo>%</mo></math> of <math alttext=\"35\"><mn>35</mn></math>, which is equal to <math alttext=\"35 plus 35 left parenthesis StartFraction 60 Over 100 EndFraction right parenthesis\"><mn>35</mn><mo>+</mo><mn>35</mn><mfenced><mfrac><mn>60</mn><mn>100</mn></mfrac></mfenced></math>, or <math alttext=\"35 plus 35 left parenthesis 0.6 right parenthesis\"><mn>35</mn><mo>+</mo><mn>35</mn><mfenced><mn>0.6</mn></mfenced></math>. This expression is equivalent to <math alttext=\"35 plus 21\"><mn>35</mn><mo>+</mo><mn>21</mn></math>, or <math alttext=\"56\"><mn>56</mn></math>. Therefore, Cedric has <math alttext=\"56\"><mn>56</mn></math> plants in his garden this year.</p>"
  },
  {
    "id": "sat-math-percen-7cab9fe1",
    "originalId": "7cab9fe1",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "medium",
    "stem": "<p style=\"text-align: left;\">Which expression represents the result of increasing a positive quantity <math alttext=\"w\"><mi>w</mi></math> by <math alttext=\"43 percent sign\"><mrow><mn>43</mn></mrow><mo>%</mo></math>?</p>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p style=\"text-align: left;\">Choice A is correct. The result of increasing a positive quantity <math alttext=\"w\"><mi>w</mi></math> by <math alttext=\"x percent sign\"><mi>x</mi><mo>%</mo></math> can be represented by the expression <math alttext=\"left parenthesis 1 plus StartFraction x Over 100 EndFraction right parenthesis w\"><mfenced><mrow><mn>1</mn><mo>+</mo><mfrac><mi>x</mi><mn>100</mn></mfrac></mrow></mfenced><mi>w</mi></math>. Therefore, the result of increasing a positive quantity <math alttext=\"w\"><mi>w</mi></math> by <math alttext=\"43 percent sign\"><mn>43</mn><mo>%</mo></math> can be found by substituting <math alttext=\"43\"><mn>43</mn></math> for <math alttext=\"x\"><mi>x</mi></math> in the expression <math alttext=\"left parenthesis 1 plus StartFraction x Over 100 EndFraction right parenthesis w\"><mfenced><mrow><mn>1</mn><mo>+</mo><mfrac><mi>x</mi><mn>100</mn></mfrac></mrow></mfenced><mi>w</mi></math>, which gives <math alttext=\"left parenthesis 1 plus StartFraction 43 Over 100 EndFraction right parenthesis w\"><mfenced><mrow><mn>1</mn><mo>+</mo><mfrac><mn>43</mn><mn>100</mn></mfrac></mrow></mfenced><mi>w</mi></math>, or <math alttext=\"1.43 w\"><mn>1.43</mn><mi>w</mi></math>. Thus, the expression <math alttext=\"1.43 w\"><mn>1.43</mn><mi>w</mi></math> represents the result of increasing a positive quantity <math alttext=\"w\"><mi>w</mi></math> by <math alttext=\"43 percent sign\"><mn>43</mn><mo>%</mo></math>.</p>\n<p style=\"text-align: left;\">Choice B is incorrect. This is the result of decreasing a positive quantity <math alttext=\"w\"><mi>w</mi></math> by <math alttext=\"43 percent sign\"><mn>43</mn><mo>%</mo></math>.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. This is the result of increasing a positive quantity <math alttext=\"w\"><mi>w</mi></math> by <math alttext=\"4,200 percent sign\"><mn>4,200</mn><mo>%</mo></math>.</p>\n<p style=\"text-align: left;\">Choice D is incorrect. This is the result of decreasing a positive quantity <math alttext=\"w\"><mi>w</mi></math> by <math alttext=\"57 percent sign\"><mn>57</mn><mo>%</mo></math>.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"1.43 w\"><mrow><mn>1.43</mn></mrow><mi>w</mi></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"0.57 w\"><mrow><mn>0.57</mn></mrow><mi>w</mi></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"43 w\"><mrow>\n\t<mn>43</mn>\n\t<mi>w</mi>\n</mrow></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"0.43 w\"><mrow><mn>0.43</mn></mrow><mi>w</mi></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-121dc44f",
    "originalId": "121dc44f",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "medium",
    "stem": "<p>The population of City A increased by <math alttext=\"7 percent sign\"><mrow><mn>7</mn></mrow><mo>%</mo></math> from <math alttext=\"2015\"><mn>2015</mn></math> to <math alttext=\"2016\"><mn>2016</mn></math>. If the <math alttext=\"2016\"><mn>2016</mn></math> population is <math alttext=\"k\"><mi>k</mi></math> times the <math alttext=\"2015\"><mn>2015</mn></math> population, what is the value of <math alttext=\"k\"><mi>k</mi></math>?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p style=\"text-align: left;\">Choice C is correct. It's given that the population of City A increased by <math alttext=\"7 percent sign\"><mn>7</mn><mo>%</mo></math> from <math alttext=\"20 15\"><mn>20</mn>\n<mn>15</mn></math> to <math alttext=\"20 16\"><mn>20</mn>\n<mn>16</mn></math>. Therefore, the population of City A in <math alttext=\"20 16\"><mn>20</mn>\n<mn>16</mn></math> includes <math alttext=\"100 percent sign\"><mn>100</mn><mo>%</mo></math> of the population of City A in <math alttext=\"20 15\"><mn>20</mn>\n<mn>15</mn></math> plus an additional <math alttext=\"7 percent sign\"><mn>7</mn><mo>%</mo></math> of the population of City A in <math alttext=\"20 15\"><mn>20</mn>\n<mn>15</mn></math>. This means that the population of City A in <math alttext=\"20 16\"><mn>20</mn>\n<mn>16</mn></math> is <math alttext=\"107 percent sign\"><mn>107</mn><mo>%</mo></math> of the population in <math alttext=\"20 15\"><mn>20</mn>\n<mn>15</mn></math>. Thus, the population of City A in <math alttext=\"20 16\"><mn>20</mn>\n<mn>16</mn></math> is <math alttext=\"StartFraction 107 Over 100 EndFraction\"><mfrac>\n\t<mn>107</mn>\n\t<mn>100</mn>\n</mfrac></math>, or <math alttext=\"1.07\"><mn>1.07</mn></math>, times the <math alttext=\"20 15\"><mn>20</mn>\n<mn>15</mn></math> population. Therefore, the value of <math alttext=\"k\"><mi>k</mi></math> is <math alttext=\"1.07\"><mn>1.07</mn></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. This would be the value of <math alttext=\"k\"><mi>k</mi></math> if the population in <math alttext=\"20 16\"><mn>20</mn>\n<mn>16</mn></math> was <math alttext=\"7 percent sign\"><mn>7</mn><mo>%</mo></math> of the population in <math alttext=\"20 15\"><mn>20</mn>\n<mn>15</mn></math>.</p>\n<p style=\"text-align: left;\">Choice B is incorrect. This would be the value of <math alttext=\"k\"><mi>k</mi></math> if the population in <math alttext=\"20 16\"><mn>20</mn>\n<mn>16</mn></math> was <math alttext=\"70 percent sign\"><mn>70</mn><mo>%</mo></math> of the population in <math alttext=\"20 15\"><mn>20</mn>\n<mn>15</mn></math>.</p>\n<p style=\"text-align: left;\">Choice D is incorrect. This would be the value of <math alttext=\"k\"><mi>k</mi></math> if the population increased by <math alttext=\"70 percent sign\"><mn>70</mn><mo>%</mo></math>, not <math alttext=\"7 percent sign\"><mn>7</mn><mo>%</mo></math>, from <math alttext=\"20 15\"><mn>20</mn>\n<mn>15</mn></math> to <math alttext=\"20 16\"><mn>20</mn>\n<mn>16</mn></math>.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"0.07\"><mrow><mn>0.07</mn></mrow></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"0.7\"><mrow><mn>0.7</mn></mrow></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"1.07\"><mrow><mn>1.07</mn></mrow></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"1.7\"><mrow><mn>1.7</mn></mrow></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-8a714fa1",
    "originalId": "8a714fa1",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "medium",
    "stem": "<p class=\"stem_paragraph \">Which of the following represents the result of increasing the quantity <span class=\"italic\">x</span> by 9%, where <span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAYCAYAAAB9ejRwAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAMyZLetQAAAThJREFUeNrt1c0rRFEYx/GJMsVY2VCSzKwtZG3DnpU1ZWci/gALpaasNfE3eFlZkjL8A5SSt4XSlA1S3vme+k3dbo90dG4WzlOfuve559zzdJ/Tubnc30QPNnCPO6yjO9TLy8h7zingHMcYE3d9itYQRV2LT3FzeEcpkSspN5Me7B68YjGVr+IBg8YCeRXkU9wuDoy8y+1YE6rqc4fuF/CMkR8W8imujlUjv4Yba0IXHrGMKX3ScY92Noq7xec3Y15QMfIVfQAzlvCEN0x77rHMiprQC/d/UUwm7RtWtYf4QH/AYpIbvWbka9ZGH9AmX0ELrrCdwZEwr63Rl8gVlZtNHwd1naxNyk2qjUOBD892XOIIo+Kuz9DWGNSJC+ylFmjGiVoZOnqxpc44m/r1xIgRI0aMGP8yvgB+iFiJ592c6QAAAABJRU5ErkJggg==\" alt=\"x is greater than 0\"></span></span> ?</p>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p>Choice A is correct. Increasing the positive quantity <span class=\"italic\">x</span> by 9% is the result of adding 9% of <span class=\"italic\">x</span> to <span class=\"italic\">x</span>. 9% of <span class=\"italic\">x</span> can be represented algebraically as <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAsCAYAAAAacYo8AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABZUlEQVRoQ+2YAa7DIAiGezwP5HG8S6/SmzAUmY6Whu25PFz8EtONkOUXf5Vu+ytHCoCPOgKkA/Jn3+zxVSzssUwg7o7Fw5Eg4COg6hoqlBUICXAuPsVTdc/W0OJumFd4tYr0M21Wx8IztDkjoPYikifjXniGxPPASRTxEwiXkMfbKrgDUFrEhzwOywqg8etXn5w87v1E6Tl53KtFFr9KsaDoeciWzvcQn1p8M09xIzPPqiudKJOD/z1eaC0EDu93g0TeFVPQXgsn6n3oFiZfl6rPYBU+UVjsx61EnrG6o2tlaFz/uCWHeYrueyA8zVPA2DtV75eMIg1ZiavKWHKG0/9nIoVzFWS896MlZzitMtd99/07Jy2zJaeGxqO9MJCo85LThHvh9zk1NB5VuOLVPm7JqaHx/J7waa1i2HiWnBoajyrc63HIaMIz0qtX3rXkfIU74Zn+ktIEWXIWi8VisVh8j217ACNl7v1/Zgl5AAAAAElFTkSuQmCC\" alt=\"the fraction, 9 over 100, end fraction, times x\"></span>, or <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAWCAYAAABdTLWOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABDklEQVRIS+1U2xHDIAzLeAzEOOySVdjEtTGGYF7uB3/ojktxLSHhtI8AXg/04OUgRKDPW1h4MbhtzxZ8UCXr/QwW3utbYxLKv2vtBgARgnvAoUouJSRxVMrbDhYexAAOH7on3awLqGA0KkI6GY/IA5aHQhbebCK6noIp080E+LCZ0M7kmmc1iY3g8SGBOeiHZxXSsPDWt91yy21mTvOKnDRJex5bnYgY19xax5Xf6YKT486lbFQWfjfh6kAF65HsTP7PI4yCMI9M9ubP/gWhDfpB7LTZNPdNz+WmmkDvCZL0e6CFp0fYcXKQEmygUVCvm1bfNDJJ2PEIbFTWx7AYbGo8odUULy4uLi4uTuB5fkYLfESK58JcAAAAAElFTkSuQmCC\" alt=\"0 point 0 9 x\"></span>. Adding this expression to <span class=\"italic\">x</span> yields <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAWCAYAAAB0S0oJAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABSklEQVRYR+2V6w3DIAyEMx4DMQ67ZJVs4mIMCXF4XNSm7Q9/EsqjnOEuRl2+Ca2e+CLDUdiI76cgui246Zy/QMwcG9TPPRDd6s/mS3B+Hdf+KEQr+cmiRBsFt5CLO82vEslAFObHC4iOtkAuXvSc1CEuxAo3w0jFlVAn3QIKIm9Wz5F29rFCW4voep2l38P+tCFZbBwCgwfR2+wsiLEODeKWvz21Tru1gIIAN6tBdOOuOWthf6Uo3/bObjHOt6NRb+zJIPhZWvzorMPHWYv429FFZ/z6aORXed9lxN86WsiftBNPvBbogQfRa99ZEPd1TCssyJ8I5dyk1Gatk4GCePLvM68/qw352899KZ5EWFcgQTC6ZmuN8sVqU4guGau+/kWD+Nsn1YXyl2im9gZHa/JQG4m0gmBmOkbCKKP28j1/hmEYhmEYhrEsL0+uPr72SGTPAAAAAElFTkSuQmCC\" alt=\"x plus 0 point 0 9 x\"></span>, or <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAWCAYAAABdTLWOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABEUlEQVRIS+2U0Q0DIQiGHc+BHMddXMVNqAieiuhp0775JyYVAT/Aq5EKzoD1EXj7KggOfXlZSKFDbPT21Wdb5cJdSPKvl8o9CosefQy48AVoW+0OJEAEb0ffDJUI8DdED1bJl++yPmU4AK0dCOB2IRlAdoSKdZDMoHUWJe25MAEtJ/AoZT2EnAGcQZZ7S8FUqAKIOoLcAFh3u499ujl5Io9+DYl7Ght1Np8zhIyt9rT4Tav69bjZxKBlpbNJrCxI1Tnk+sNh0yCtEIpDyBG+0xHkzl/QJF/rgyJo8pNng1aQpdL2TL4/uUfJEQ4xfOdTmJKj0ykkqo4Jl56cQMtqgAtgZ6MJLbt5dXV1dXX1BxnzAQ4SLMroYiofAAAAAElFTkSuQmCC\" alt=\"1 point 0 9 x\"></span>.<p>Choice B is incorrect. This represents 9% of <span class=\"italic\">x</span>. Choice C is incorrect. This represents increasing <span class=\"italic\">x</span> by 9, not by 9%. Choice D is incorrect. This represents increasing <span class=\"italic\">x</span> by 0.09, not by 9%.</p><p> </p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAWCAYAAABDhYU9AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABEElEQVRIS+2U7Q3EIAiGHc+BHMddXMVNOBGoFdHaS3/6JCYn8vGC9pwmBQc+ZuDtFEgBfXh5KCFDTI7+0WcbKfgkjvxaMb1HsMnRx0FIfwi8d7kSB5Ah+tGniimV8TfkCN7IU2v4WDK8ENg6TxCexHFhPQFqLkAxgzVJRNtrQ0qsnvhFybopblb4nTipJ41Sg4YwZEvcRuH1dPvYa3qTp3DxlTjc0/XQJOs5F9exzV4Wv1mTr66VTSxQVjmbxOpGTPbFrT8INg1YDVAcihtFd2yJ2/krmeS5+yAklvz02cAsqXQndv2+9B7RVzXEcK2rISNHx644pF0HLjspCZR1EyrCOhvdyHJ6h8PhcDgUnPsBL3wsyuw5t4UAAAAASUVORK5CYII=\" alt=\"1 point 0 9 x\"></span></span></p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAWCAYAAABDhYU9AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABC0lEQVRIS+1UyxHFIAi0PAuyHHtJK3ZCQMQP8cMlN3eG8clbYAEnTgBPADrYPMQE9HsJCz9Ff+QcwYVasL5rWPhPGAVJM+GZ55wCIEH0DjxmKa6MnBwzlWuFhQ8pgsdDc/IkfcQMRoGSSHfEKwmA7sFv4a8mr/25ISV2mDgXWyVaidvzreKQCAEPaZQb7OKsiQQW/366Y2ydXokZnsIf4ujO62mTF8E6tvnRyput+GOtxVUEiuF/i1jdSMV+BStxdn6PWQMcR+K+ov/5lGB5euinnCyWeat6n/ei79KdFDvxCXpVn5jSQG1okqOijZdsJGlxhB1fwALFOqEibPDxRqbTu7i4uLi46ODcC/MHfERcpEwnAAAAAElFTkSuQmCC\" alt=\"0 point 0 9 x\"></span></span></p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAWCAYAAAClrE55AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAA3UlEQVRIS+2U7Q3FIAhFHc+BHMddXMVNeAhaW8QnJk1/eRKjIQqXj9Z9SY4ecKvLQ8xQzt+SwjM4pECCQnpJDECCsHAIOYLHzaOKaiKoQj4Caut2UiyMMgsNkxDKfvSj2qVD7ue6j68LKVxVmZRSY6c18s402fagHB2+YuuTFrgc/y0ZlNsc8DXbe6xJ1eWDFZaKNNh3WxiDxChC+nc+UamwI0TCMyKSZiPPBSmftEZimpF6R87cEOfqezVOp1nBWpFhRmSMS8T9Ev5NordXxcowI8Y5PBwOh8M+zv0A7FVlx4QFf0UAAAAASUVORK5CYII=\" alt=\"x plus 9\"></span></span></p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAWCAYAAABkKwTVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABMklEQVRYR+2VwRHEIAhFU54FWY69pBU7YUVEExaRHLJ78c04UYKELzg5fgmcEfBBI0DKgPMpHv+cwtLndSjR8XG5lnj8z3gXxIcRTz3mYwBOiIuAABlSOCCULJqpUpMrG9uy4/GHnCCUh/SplQypRLjkUzcKozwZDZe4loj0oZaKJcLd7vGfVV61yyQpkC0M8YubJTITZ/s/Eof06k1KruES9zARj92uriKON+BUuwsIi8GpNa4ffUMcrunajMqP/BVxiNyw4l9t2UwtXx7l3WRvK6mhXMEvbtZCM3F+/yvqgZGR7lk9jRKZ3ti4xL3xK2jfXcbs94g3it628IhDZEy55q7hZFf+CLXkqNKXTxd2dWon562el9H2OO6JSnGI5c+QQB52y242m81ms9n8m+P4ABlTz5wfboT+AAAAAElFTkSuQmCC\" alt=\"x plus 0 point 0 9\"></span></span></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-8e2e424e",
    "originalId": "8e2e424e",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "medium",
    "stem": "<p class=\"stem_paragraph \">The number <span class=\"italic\">k</span> is 36% greater than 50. If <span class=\"italic\">k</span> is the product of 50 and <span class=\"italic\">r</span>, what is the value of <span class=\"italic\">r </span>?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p>Choice C is correct. It&rsquo;s given that the number <span class=\"italic\">k</span> is 36% greater than 50. Therefore, the value of <span class=\"italic\">k</span> is the number 50 plus 36% of 50. This can be rewritten as <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAAAuCAYAAAD3CoGcAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAXQ/cXWQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAEBElEQVR4Xu2YjZmzIAzHXep26EDucQt0l67STXiBEI2RIB+x9V7zex7uikXA5J8EO90d9366x+Pp3s65dOkSXHVft8S5l5un2f9tc8ZrnsL41B7u6b0ZvyBERy9jfJtfuzFHuNfcdZ+hiPOx+nxMzvuhyREgklVc0ZlMLHBtnRsEObmHHxT6LYT1eu4zlIjObEztmCWouFBw6EzeR97Ph++3Zy9YM5+1jJPBCG/NJjlQGFgiznBszGJpfuOD9GQTCcgUqzCg7ITMAWIMl0IbKR+WVb6AVBpaAYGACDalKJ1PNuJJJat3Ta09Gw1oRyeKYCk9SShaZxQk3m+vy59jLQ16BqflB4XCzz9wvV+gZ+zbKBAPhsqRSUWAGUZdKOnMw+c1ToC/obQiZQtaVqTfTEZLT+m3GM1yija6tSBHD4WL0EhGQvHQObmgRg+zAWnvICAdkSCHc579vo5RET5uGlsTDQ1NzwilqKxlEcuyv3z0bZ9hbE0k5x/+y62WjeP3uRKtYcQjILLK6RceYN0474/g3K/78f9+fsfn+gZcKDl7atlYLEGadU5CVGlCSq81mQ6FvnswQs2YK8PtEM89zC6aNo5zsWtJVasS4fDlb1Z8QzhyONZyP2QzpuYgeEehhD5/Fk0bZ7NTXCCJAkSTNygaO3wsNX7vouR5jhsNl0Lb1Fchq3ER57ibUMCe+XKhZWOwFxlL01FJJCMsAiMZCtWNDwJrSw+xv065n1CYEz3aNt6JESebvRJD95OGpCmv7SGSUQ4afZbKw+zm/i+1LEdCkei3MRdKHEQ2WjwMtTuoBN2glZ4yvULptfFujbgBnIhMGr88mf1D7B1ph1lgf0ape5ZeG4O90jVccKlhyZj0AKRBzQb5XhBqIIm7CSUQ+tRW2jaOAsPqkjNevKlQfnrADVLVgtK3a/OMxvsSdxTKxpGhr2zjjRBzgyRljrI+yNpya0AE4JhjkdQy+sssj2AKOgRafs81Y0r8/vj7/OZTd7HnRgRKNoag0rP9n2Iko6CTc0LhwZYNvooxRxyWB0WCkKSg+O/BaGs1AI0+fq80J3VqzZgjSnuH/elE/5KRThDfn2ExQqVzAmvkQzbaCaXmANnwpiGB2TAnFOMEYhR3RIvkKBDBPppBYFQo5THpkshZ50ZDoMU5FFEoS8bJiQCu14xJl0R69210IkX3Ed8WSixTdz43fJrSobDEN0tP756NQaKDGqOzLJRzD7O9WdAYBJ3ecjAUhSJEu+brcctrtKFMa1aRhBLgZw3eD9SMyWHZ5MtglNdmlZJQAlBGfOTHlndszRhOyCbSmsaHAOdf95UzZh0rOdcgpvYLvnZedV+GYRiGYRiGYRiGYRiGYQwzTf8AevCziPyMav0AAAAASUVORK5CYII=\" alt=\"k equals, 50 plus, the fraction 36 over 100, end fraction, times 50\"></span>. Multiplying the terms <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAAAuCAYAAABpnER5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAXQ/cXWQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAADOElEQVRoQ+2XgZWsIAxFbWp7sCD7mAaml2llOuETQhBigoA4+j3cc9hdGHTC4yWwk4T5vs08v83XGOOHbsFd4woY8zHLtNifdQF+lgnm+zabt12h+yDCLT7MsW35bObsYT5L03OnY+yevufJ2NiqgkPhVsHdApmAOLa+GzdpMrOdBP0a4PtanjsVt8DKtCA3xYLTJtACeZ/4vmfbr3c5fqfs7ksgJ9S6ToLEovQ6Y7HO7f79l9PiOg101CoWpiw4DDcIhqAdSb3buE9Lq1pQNBQmSWNf7xJBfbq3fmevmA/TexdJmJC2XrxeNY9wz199dVnTql8QceqSeLye4nj7pp0RdzWu+HbewVgYcmJ38XwN5e/9GfxkrEVzVZyS2p3uaNrm7oo9SxFptNmko4U3iB85lwSN38lFPnpgAFrsKGof4QjxnbndKyUIaP+kJqUSCUjtyHcS0n2P/wdCa4Q/k8aeS+Pbiu8+j8ubMS/zZ3/9vfrt0i/h4qGj01IgjXFQuFUw3gc26Uu7Ijnlf4CL5+qo5KjMgailv+Rq9y4ae5p40OdrkUSI0W4D0oGWuPhJ4qGD5FSbl8UJBEPQkproBFFqHBfP6eXnPku8aGEeWl9yG/BOIwGl+gbodS+IV3RgwGdXN5E98TSSe2i7eM92nkYszEhbC9W3krVsxds+Jx4YTq8HHhgA9LeHQV4YEr34qkL182niJYuDvhcmdhC6Ll1z7ESpTySbc/Q/DL7TMRQktm0gQMmcHK8/+5wN3neDWIkwQcC1SWZBN9KcbSxJvVsH2pxHC5fEK9nJkjl77KZWR0DcZK1avu8R7xJ/tqSGlMzZIxc7xle3ERrBuXxDwgeFAQOrQ9C1G/FKinTFCadBWSOJ9zPcbjfYXAu+5N5UMscPqWgb8FNqAo5RxQvOlITB8ZI5fkilNe6uaC7Y42rxXIqfcDBUkSu8Oa5M29aYT8EFXbmLefHOPTBas+UUSIia4quKp7ii51Wl5krzE2rdp4kH8NrF+0DJHIlbuY4gN5S6LycegCloHeKavNiSORxwnfadl4KCXHz8Z3DuvFO6clxaXH0FELhrXIPBYDAYDAaDwcAxTf8AlHlsQxANMMsAAAAASUVORK5CYII=\" alt=\"the fraction 36 over 100, end fraction, times 50\"></span> yields 18, so <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAWCAYAAACFQBGEAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABlElEQVRYR+2VAY7EIAhFPZ4H8ji9S68yN2FFRRHBtlsn2WR9iZnWOvL5YOs4Z3DgwgnldjkAJ4T4g5fdEDHhDOy5h+MD3fNVYL4+bl5uO5IXVYODKHFcRwlZm6wAPgd4F2Ik24RsWDNK3q+CCqPlmw1rOmntYFxO6HtVRVJwf0AMocaA+OTwYyJ3TgAVXe0IwefwuCYNGcvaR9WQ3Wzu1o0nST7lKvlcuFFw1nLRoTdNa52rnyxLg6o9TRaDzHaMkDi8nA3539pFISRROIWDi7a6XRZU40mnIbT+18eTH4uZYW+oZrPOpaqS8NYFfWxrnrPSNIQfYTV2bcnYBXi72rAZ/Og9Ma0W4WJYuVimUQN1nSaKm6DuqmP6sn4nVsIN+QvHszaQ2Gd4r+YzXIQb1f4Wo2k3BCssM83Iv5vn77P00NjsLXcMkVqIq68ussw0Q2fX7Vow/iUtU69R3xVJSB9bVtqqvGSVacjw9SxG1rWaKMvttzTj2tBiXH65FjAzDcnGtWGt22w2m81ms9lsNv8L534ASj1IHaxI1n8AAAAASUVORK5CYII=\" alt=\"k equals, 50 plus 18\"></span>, or <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAWCAYAAAC7ZX7KAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABFElEQVRYR+1UUQ4FEQx0PAdyHHdxFTfpK9VVlGzC/ryYRNZSOjNtGIngDBgXoPx+AogeLH7SNA8lX+YhYjBkiDEAARx+rI/j5iFAcA0BLSeRdbhTYrozD0i5BTzbbhwCQARvR0Oit/hPBFlAT06tPCmpyugiDLQeU+2LeGMIt8srwnmxkJuWAcEupOlq9GerIe353vFXLSHLtSK7A77XCJfZUb1NWJRSlacU7huyCUx43cNkXOOwJqqqL2PRt3stMVsnF2c9LEXlBeqbckhckDcPYUamITzJ3az3zw072JduF7N7m5ZYiioO80UySL4YZekIKHHNpfXn8Er0MVoZZkpPgEnz0CpJpNcxFxcXFxcX/whjfsXYBUoVwbpjAAAAAElFTkSuQmCC\" alt=\"k equals 68\"></span>. It&rsquo;s also given that <span class=\"italic\">k</span> is the product of 50 and <span class=\"italic\">r</span>, which can be rewritten as <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAWCAYAAABtwKSvAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABPElEQVRYR+2UbRLEEAyGHS8Hchx3cZXeJItQEaLt6v5az4xpicqbDzUcbw0a6zFPXwfRow2P+NoM4RO9ZXZAd2Bjv6Q4gvBlXnodPByCscGTLo4CqQHI+S3I0RdZeEASBg6Di6EPDBYHfUIfdwxloGbtcBCfU+dPuRJFCTUYtjR7SEvVxoNOZ0ad/Ny0mIVTYP2hEbXvxZDfngKsTYLjUhy8Clp3yESTBkAI53UaeaSzQFY4k8AqXSpRAiLfWjDsHonvGs7yhqzF6duBzOAtdDsYZV+CjLX080v6XZtpcGF32ywlQNNIlygfOIv6B/TB9IloqseuRDZXpLFkfrh5gRWh/C9Y9A0rPzLyP1teWqYIbf5Kub25b9kZ3VxpxcSorbQsrlIDqmPkg6pV9ghtSW9NyGaz2Ww2m//GmA9vyUXKLoghFwAAAABJRU5ErkJggg==\" alt=\"k equals 50 r\"></span>. Substituting 68 for <span class=\"italic\">k</span> yields <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAWCAYAAACcy/8iAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABdklEQVRYR+1VUbLDIAjM8TyQx/EuuUpuQlVEAcWkNe99uTNOa0XYXdEeBLgCuPiRvubhz/QpcHq2HkcM6WJWAXCCZzXqUHzg9GzdQbi+4EKbSQAVdTFLmiegWB9XSoza8xbQ+FZnBKzdROr5FAAXBCfFJVzBxTkWJgO0uGyCcn4VmbwLkdWYvMX3MRd0dO4Otft/CL7LaXHhB5Tm3BjszpIX2yEFyrszdPBhS5v3UA29t5L0XrwnnIt1QE0HCU4cHLiYT9Qh4uJOFBfHbU5EHt6ZL1CNYi2tuSBfS/C9hip4LI7uMDovHLQS/gEEl6eCjbgquGsvtoHE6Rh9bwi/trSFnosluHHJ3EaPnyVGFGHfy3KG9fvb6AXPza9vQdxQlhvoNKYtPTWlP+FfsSKGv+6kSeepQOItgArzpN0rPYhZBYkRdRS3BN1Z3Txzu+k8SkxjJKT+n01iVtFEtzE6KTx1ipHiUMt7nbexsbGxsbGxsXGP4/gA4YrwzVORj5IAAAAASUVORK5CYII=\" alt=\"68 equals 50 r\"></span>. Dividing both sides of this equation by 50 yields <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAWCAYAAABkKwTVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABMUlEQVRYR+2U7RHDIAiGHc+BHMddXMVNqITgt6mJtpcfPHdekxSEF1D1T5xRoK2H8/UraB9+zqUhuDa+4C3oaBOWcY3NzwFnjuCz4kiYAQckiPxLgbxn0EM2wdrciLEFb/WRBK6ZwNwNThoB8GB18q/fGYqVilIYxlHY1N5U8bWqco6cFxWgP6oF1E4NOjjn1WK43fh4tXq+zOrIUEeSGCoadqjMrdmfx+Bp4BmeistHuhjT87wVgns60uiMK7/KaufirchjeYqr92vO3PFB2zDVfXFvGEskH00WV8csGjW6dXazQ1yeeO9GRSpxFPSq6ju4I27UlXzkRvsVYzl9pS5yJY4SSv/Faz87Kiw496+L0FwoZJAdwB9xRxwSBYZHXr3pYoG8evsLgiAIgiC8BaU+RS4IshhUuHcAAAAASUVORK5CYII=\" alt=\"r equals 1 point 3 6\"></span>.<p>Choice A is incorrect. This is the percentage that <span class=\"italic\">k</span> is greater than 50. Choice B is incorrect and may result from a calculation error. Choice D is incorrect. This would be the value of <span class=\"italic\">r</span> if <span class=\"italic\">k</span> were 36% of 50, instead of 36% greater than 50.</p><p> </p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">36</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">3.6</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">1.36</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">0.36</p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-709e04de",
    "originalId": "709e04de",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "medium",
    "stem": "<p style=\"text-align: left;\">The value of <math alttext=\"z\"><mi>z</mi></math> is <math alttext=\"1.13\"><mn>1.13</mn></math> times <math alttext=\"100\"><mn>100</mn></math>. The value of <math alttext=\"z\"><mi>z</mi></math> is what percent greater than <math alttext=\"100\"><mn>100</mn></math>?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p style=\"text-align: left;\">Choice B is correct. It&rsquo;s given that the value of <math alttext=\"z\"><mi>z</mi></math> is <math alttext=\"1.13\"><mn>1.13</mn></math> times <math alttext=\"100\"><mn>100</mn></math>. This can be written as <math alttext=\"z equals left parenthesis 1.13 right parenthesis left parenthesis 100 right parenthesis\"><mi>z</mi><mo>=</mo><mfenced><mn>1.13</mn></mfenced><mfenced><mn>100</mn></mfenced></math>, which is equivalent to <math alttext=\"z equals left parenthesis 1 plus 0.13 right parenthesis left parenthesis 100 right parenthesis\"><mi>z</mi><mo>=</mo><mfenced><mrow><mn>1</mn><mo>+</mo><mn>0.13</mn></mrow></mfenced><mo>(</mo><mn>100</mn><mo>)</mo></math>, or <math alttext=\"z equals left parenthesis 1 plus StartFraction 13 Over 100 EndFraction right parenthesis left parenthesis 100 right parenthesis\"><mi>z</mi><mo>=</mo><mfenced><mrow><mn>1</mn><mo>+</mo><mfrac><mn>13</mn><mn>100</mn></mfrac></mrow></mfenced><mfenced><mn>100</mn></mfenced></math>. It follows that the value of <math alttext=\"z\"><mi>z</mi></math> is <math alttext=\"100 percent sign\"><mn>100</mn><mo>%</mo></math> of <math alttext=\"100\"><mn>100</mn></math> plus <math alttext=\"13 percent sign\"><mn>13</mn><mo>%</mo></math> of <math alttext=\"100\"><mn>100</mn></math>. Therefore, the value of <math alttext=\"z\"><mi>z</mi></math> is <math alttext=\"13 percent sign\"><mn>13</mn><mo>%</mo></math> greater than <math alttext=\"100\"><mn>100</mn></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. This gives a value of <math alttext=\"z\"><mi>z</mi></math> that is <math alttext=\"1.113\"><mn>1.113</mn></math>, not <math alttext=\"1.13\"><mn>1.13</mn></math>, times <math alttext=\"100\"><mn>100</mn></math>.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. This gives a value of <math alttext=\"z\"><mi>z</mi></math> that is <math alttext=\"2.30\"><mn>2.30</mn></math>, not <math alttext=\"1.13\"><mn>1.13</mn></math>, times <math alttext=\"100\"><mn>100</mn></math>.</p>\n<p style=\"text-align: left;\">Choice D is incorrect. This gives a value of <math alttext=\"z\"><mi>z</mi></math> that is <math alttext=\"3.13\"><mn>3.13</mn></math>, not <math alttext=\"1.13\"><mn>1.13</mn></math>, times <math alttext=\"100\"><mn>100</mn></math>.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"11.3\"><mn>11.3</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p style=\"text-align: left;\"><math alttext=\"13\"><mn>13</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"130\"><mn>130</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"213\"><mn>213</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-ba61d95f",
    "originalId": "ba61d95f",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "medium",
    "stem": "<p style=\"text-align: left;\">The population of Greenville increased by <math alttext=\"7 percent sign\"><mn>7</mn>\n<mo>%</mo></math> from <math alttext=\"2015\"><mn>2015</mn></math> to <math alttext=\"2016\"><mn>2016</mn></math>. If the <math alttext=\"2016\"><mn>2016</mn></math> population is <math alttext=\"k\"><mi>k</mi></math> times the <math alttext=\"2015\"><mn>2015</mn></math> population, what is the value of <math alttext=\"k\"><mi>k</mi></math>?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p>Choice C is correct. Let <math alttext=\"x\"><mi>x</mi></math> be the 2015 population of Greenville. It's given that the population increased by <math alttext=\"7 percent sign\"><mn>7</mn><mo>%</mo></math> from 2015 to 2016. The increase in population can be written as <math alttext=\"left parenthesis 0.07 right parenthesis x\"><mfenced><mn>0.07</mn></mfenced><mi>x</mi></math>. The 2016 population of Greenville is given as the sum of the 2015 population of Greenville and the increase in population from 2015 to 2016. This can be rewritten as <math alttext=\"x plus left parenthesis 0.07 right parenthesis x\"><mi>x</mi><mo>+</mo><mfenced><mn>0.07</mn></mfenced><mi>x</mi></math>, or <math alttext=\"1.07 x\"><mn>1.07</mn><mi>x</mi></math>. Therefore, the value of <math alttext=\"k\"><mi>k</mi></math> is <math alttext=\"1.07\"><mn>1.07</mn></math>.</p>\n<p>Choice A is incorrect. This is the percent, represented as a decimal, that the population increased from 2015 to 2016, not the value of <math alttext=\"k\"><mi>k</mi></math>.</p>\n<p>Choice B is incorrect and may result from conceptual or calculation errors.</p>\n<p>Choice D is incorrect. This is the value of <math alttext=\"k\"><mi>k</mi></math> if the population increased by <math alttext=\"70 percent sign\"><mn>70</mn><mo>%</mo></math>, not <math alttext=\"7 percent sign\"><mn>7</mn><mo>%</mo></math>, from 2015 to 2016.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"0.07\"><mn>0.07</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"0.7\"><mn>0.7</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"1.07\"><mn>1.07</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"1.7\"><mn>1.7</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-8cbf1415",
    "originalId": "8cbf1415",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "medium",
    "stem": "<p>In a group, <math><mn>40</mn></math>% of the items are red. Of all the red items in the group, <math><mn>30</mn></math>% also have stripes. What percentage of the items in the group are red with stripes?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p>Choice B is correct. It&rsquo;s given that in a group, <math alttext=\"40 percent sign\"><mn>40</mn><mo>%</mo></math> of the items are red. It follows that the number of red items in the group can be represented by <math alttext=\"0 period 4 x\"><mn>0</mn><mo>.</mo><mn>4</mn><mi>x</mi></math>, where <math alttext=\"x\"><mi>x</mi></math> represents the total number of items in the group. It&rsquo;s also given that of all the red items in the group, <math alttext=\"30 percent sign\"><mn>30</mn><mo>%</mo></math> also have stripes. It follows that the number of items in the group that are red and have stripes can be represented by <math alttext=\"0 period 3 left parenthesis 0 period 4 x right parenthesis\"><mn>0</mn><mo>.</mo><mn>3</mn><mfenced><mrow><mn>0</mn><mo>.</mo><mn>4</mn><mi>x</mi></mrow></mfenced></math>, or <math alttext=\"0 period 12 x\"><mn>0</mn><mo>.</mo><mn>12</mn><mi>x</mi></math>. The expression <math alttext=\"0 period 12 x\"><mn>0</mn><mo>.</mo><mn>12</mn><mi>x</mi></math> represents <math alttext=\"12 percent sign\"><mn>12</mn><mo>%</mo></math> of <math alttext=\"x\"><mi>x</mi></math>. Since <math alttext=\"x\"><mi>x</mi></math> represents the total number of items in the group, it follows that <math alttext=\"12 percent sign\"><mn>12</mn><mo>%</mo></math> of the items in the group are red and have stripes.</p>\n<p>Choice A is incorrect and may result from subtracting <math alttext=\"30 percent sign\"><mn>30</mn><mo>%</mo></math> from <math alttext=\"40 percent sign\"><mn>40</mn><mo>%</mo></math> rather than calculating <math alttext=\"30 percent sign\"><mn>30</mn><mo>%</mo></math> of <math alttext=\"40 percent sign\"><mn>40</mn><mo>%</mo></math>.</p>\n<p>Choice C is incorrect and may result from adding <math alttext=\"30 percent sign\"><mn>30</mn><mo>%</mo></math> and <math alttext=\"40 percent sign\"><mn>40</mn><mo>%</mo></math> rather than calculating <math alttext=\"30 percent sign\"><mn>30</mn><mo>%</mo></math> of <math alttext=\"40 percent sign\"><mn>40</mn><mo>%</mo></math>.</p>\n<p>Choice D is incorrect and may result from calculating the percentage that <math alttext=\"30 percent sign\"><mn>30</mn><mo>%</mo></math> is of <math alttext=\"40 percent sign\"><mn>40</mn><mo>%</mo></math> rather than calculating <math alttext=\"30 percent sign\"><mn>30</mn><mo>%</mo></math> of <math alttext=\"40 percent sign\"><mn>40</mn><mo>%</mo></math>.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math><mn>10</mn></math>%</p>"
      },
      {
        "id": "B",
        "text": "<p><math><mn>12</mn></math>%</p>"
      },
      {
        "id": "C",
        "text": "<p><math><mn>70</mn></math>%</p>"
      },
      {
        "id": "D",
        "text": "<p><math><mn>75</mn></math>%</p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-96a45430",
    "originalId": "96a45430",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "medium",
    "stem": "<p class=\"stem_paragraph \">A number <em class=\"inline_variable \">n</em> is increased 6%. If the result is 318, what is the value of <em class=\"inline_variable \">n</em> ?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p>Choice C is correct. The decimal equivalent of 6% is 0.06. Since increasing the number <span class=\"italic\">n</span> by 6% yields the number 318, this situation can be represented by the equation <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAYCAYAAAAxkDmIAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAMyZLetQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACp0lEQVRoQ+2YAW7DIAxFc7wcKMfJXXqV3oRhzA/E2A5t6VRFPAmtSwDb/xs6bXmH8NzDuqxhf4aQH92OEJ5hX5ewPe5bo0oIj7AZ5j62JazxRf51GOGx0Z559DdWzzpuVsyJIzqaXkS8WkdAesUfefhxPG3P+3zYlFYgiDnaYN63FC9/t+hZh5whCBt6riHNWfd4nv14r8KmbDGinR9Anpq2+j5vmszdXjYDz31Nm9LoNRhieongmpR7pqKqkybpWWfN4Voqwb5wVePWqPf089G1tTRU9WHnqTBeRI/qQokUTCwsndd2v0eXwYoQhDRB0rOO51zfBESqUQo2GBhcx7nS1qpTNbh0ShZACUgL5WZAu948+g1uTSjNaOTSsa585jzoNQ0tf96vjYca6KM3vBoB6683nKdtMrPKjesSMQ8zxXdNe6XZHf8Vg48OPs+xnoOedRCinocT0ZyUlKsd7xPKwXr/8NR7qLpoYuNZMdgv8iqJY7+LccrhHwyW+dbXeH4Uc/ebewRoruZqjVjaHgezPsFak2qCYCIE/9RgCebXhko4B8uo9soEPetgsIyvamEYjBrooze8Gmusa9rSVnoEmiZND8T1LAvlIG1wYCVhgfnXBncUIOhZZ83RDfZrH4UWmzANtubXz49jHivN7xPp+7cyHfMsQ75icI4p91T/SqzoWWflqzUPz7Ub6lXYgP7GNQ12mzTvowntCSSfASsJCy2uhuxSrWtZmHPsnnX8rOQAwRohad7Af3Ych6o+QDkXTT9P29S0VVM0NaiFe51hFPqqwa8AA3mccyU0g4mrdQSExbBEHF3XYXIV22r2K23Z5DLezhVJXZ26O8Hi6s1xS0ZfV78O3QKjT+/Pw1ffvbta+56cTCaTyWQymUwmk8lk8sssyx+k+/+qFH61MAAAAABJRU5ErkJggg==\" alt=\"n  times, open parenthesis, 1 plus 0 point 0 6, close parenthesis, equals 318\"></span>, or <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAYCAYAAAAF6fiUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAMyZLetQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACVUlEQVRoQ+1XC3LFIAjM8XKgHCd3yVXeTayIREQgP9u86bgzTl8NQZZdee10B+Gzhnmaw/oJIW/9OUL4hHWewrK9V8MrCGELi9H8bZnCHB/kXw8RtgVi89JzotgUE1fseHoQ4dXSA8An/sjLP8fjXud5aBrrIGrmWQEwvpCSvwMoJxWMDa/PSDHzGu/DA1IKsGlLPNGuj0B1atz1PDdFQDeWZITPOqeksM4IQONDxqZis8OtGDyLEfqFUUS3juf069G5k2FkbZznDlQGiOFLsMWJAtJh4sXijNadFjSCAN7cK98zqQZJqDNIgGoEHnC3eKoCFCVzA5QD4UWZjKCNBwtWc4sJIlRD6PkxX20WANUEH71lceLA/hgjKJ+j1XZqBO3NFrO0HQm2Iy8JsDunzsX3qVAeR45qnJbOtmt7Aj5i7pqP51BFpAT8ANorAvgkj4rguCKAzMfHVN6KZ/vm6AESvxkdERb33dj8Bmgm0hpCgSRKVwFSbksALJYEkK5TazUEoJrgo7fkGRasMWQKIHpIaEyUNsT4kUT7C+AXZsXoAvi19YJ2NsAUwIrn+/s1iUzz84Q0/5koFGe55ZIAOZeMrb9z9Hz6CILYeu8JsEEnnJthCuCaKOehl3mQ1yCrwZ4AWHj9TLpDc4tsBBFqiEJcx3/GdlNyA+ZaNH4e9+avIMlBJe4pZxC9KgCA9nG1VxVAxGlZJLX9J9hFYGfLfhA87gAUoazbtR6NoTeA5HXx/iV6X/engFvU2/1fDxwd77pOm9MDAwMDAwMDAwMDAwPfj2n6AUpb/eVWbVeIAAAAAElFTkSuQmCC\" alt=\"n times 1 point 0 6, equals 318\"></span>. Dividing both sides of this equation by 1.06 yields <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAWCAYAAACL6W/rAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABIUlEQVRYR+2UYRLEEAyFHc+BHMddXMVNsogQNlqztPvHN9OpZmKTF8+qf+CMgvDKjwbrIa4bwJktOa+Bogw4wCawubapPvZrzmuAt6DDywRVOaQAPFitQIeOpG8iDSRsjOuZnAIqjpN0YMJnDPHJPgU1WZoWxEe81aWfmZwcomAV0xfkQCN+/PSFJbAus1Rq+ttSdfCxtfscDJAIbcOqJotHu4k6yM6ag7vC4zM5GMgn0BSgU3lIGEG2KlbcKkxIHPk4stOKEW7HrVZMP9zZcDSVJ+C1RgNF8VzYdU69X9kKRLpfndhVUMBN07mf5b97+X7JG1cpQ2QDI7G8Vu8WyT23OeKmi/u1ShEXlvRIdfAUKaftj5jJORwOh8PhcHgapT7pDJMW1s8Y9wAAAABJRU5ErkJggg==\" alt=\"n equals 300\"></span>.<p>Choice A is incorrect. This is the result when <span class=\"italic\">n</span> is increased by 60%, not by 6%. Choice B is incorrect. This is the approximate result of decreasing 318 by 6%. Choice D is incorrect. This is the approximate result of increasing 318 by 6%.</p><p> </p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">199</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">299</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">300</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">337</p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-b2f6f17d",
    "originalId": "b2f6f17d",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "medium",
    "stem": "<p class=\"stem_paragraph \">A customer&rsquo;s monthly water bill was $75.74. Due to a rate increase, her monthly bill is now $79.86. To the nearest tenth of a percent, by what percent did the amount of the customer&rsquo;s water bill increase?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p>Choice D is correct. To find the percent increase of the customer&rsquo;s water bill, the absolute increase of the bill, in dollars, is divided by the original amount of the bill, and the result is multiplied by 100%, as follows: <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAAsCAYAAAAElHjKAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAEHklEQVR4Xu2bgZHjIAxFU14KcjnpJa2kE58FFpaFJGSv9y6X/DfDbGKDAugjYTx7s5if00x/7HKfH6+ZPhdej7t7L+I5SZu3eXr27ebXY76LOrelUrnxQ7Ljm+fnPHX3lxL048jcMTxOaw5AQHOQcEgVlnDi6pDR5NZ202LRb6ev8e/flx+j71djja+KZevnWSzbEl6go3kDik5I6+rWIimR8/6YF52aE8wO0g4o9lenzUvrx92xfYFILPT4iLIwgrFksWwzMrJClAew0kudzD4dedcZL1XtRFnq+DauJtOns3i2CV5808OvAxyKc1TEOCtKQkcOjhbslPqd7q9pby2/lbrN8XG0nqYiGLpE5WgfLNtMyyqBcIEBr3TtDC8C1BQ7jnLRAxKLVF73+vFT3PHxghCCOtqHqL7cxnhzCRyifVwX8dbJjUTJEchqx85jUWpnWn1p4hkUz+HR+CyO1B/O3dIp+gxRHqAJaJ08iypMLosDygQHonQcIB2o0zlTr4+jcJbM+DTZPkS26xz0WUCPFxhwFMqmK6I6zY8knlPldc9J14vy7PgyovRt1wUoF7Ms143vI9ErWuJNukxLFrHg1kjp2D6aakeE43P6me1DZFvj/RYwkEJZL+3o9pRGFOGoIAXm7UVlnWprc5RV56dE4zP3vqpPhDU+YjR3EojyAJmo0O0pVV3Paft2tthYBFyuFCQxGt8mzK3YkbPvW2bumH8hyv3c5rcMo3ac5ejjriyDW/52YEGCQhXWJij93SPTroostxgJDk4Q5RfD0d/MXE40I7LtilCdlwWaKmqI8uvx0uVwK5NsNxI3wyLHK9YPQ0aaTPolqrj6utXWSJRxuxZNE69mi5jxivWzqA8Um4jaQ5l8LarqEFVEnrh8YWfatYecwatZrkdC9CIwQxdR3rOkYSfTRyra2b8pyvVSR5TiR6IE/xlVECzAWBhMJg2vl3acbUdI4Wo7EOUHcTp9OyK46kHHQoqy1ueFpEsvevABsHjoIxUtIhbvbxwJnRGu1wZ8GTJyWd8Jjmi7B5RBuxatZQQvdXzRQZSgsU+jfdq0REmM2m3C3EokuLcVJa8mu8iVuB456LKMaPlrkrUtweoFJk2AQnBVLPGmOoNlW1L2Sct9iBLsqMLYC7BEveR71QjLNiMjK0QJGl76HD0hZohSM++H8D4WdBTxqYjYjiTwL6/gb8ORTIut7QPl4bBT1yOqz/ZJiFE0BV9IPXLIP8wcqR/VlVsDiBI02hnXKo4M9cHEPtqRRLarCMXRE0QJGE6hR/aJeVH6tvcHwrqMbYMPRkcsiRe9suk7sq1BpASNGvWc80NOv+I+nylK8XDU6x6UAtsaiBI0RlFvE+ZW7MjZizIbUQmIEgAAAAAAAAAAAAAAAAAAb8Tt9ge/72776mZIRAAAAABJRU5ErkJggg==\" alt=\"the fraction with numerator 79 point 8 6 minus 75 point 7 4, and denominator 75 point 7 4, is approximately equal to, 0 point 0 5 4;\"></span>; <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAAAWCAYAAADXT+6KAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACs0lEQVRoQ+2WAZKsIAxEPZ4H8jjexavMTfhEiIZMgBbcv1VbeVXUOEgwnQ7OLEw4tkAfaaxh/wS67tKLC+EI23VfjO0o1jHhs4c1fsTb5v1Zjm0Ja0wyfy1AagCtyRrocln3EJcUa1o5vMHTmlu0fJjSlwp4F05/r4HEpcS2KL+9F0OJxo8faTZuFKsQkBZkTSz9vt7POPUIk896GAa9ydOaW9R8mNKngxm9iQaNOw0Bi5vMs0XO8tnXa2+dM6IF1ptPPed/Plfop/Vva9M8qblFy4cpfTqYSebUTwcap82owWZuu70vcf08VArJDaVj7zdQiv9qNkALqrdlxnlvoglQ0Jpb9HyY0peCy58CIhnUa7Z2HCe+btuZIN2moc0mrqSVGAspME+ZcxpuVrvZOlrAOl2a8zOk8U/eatX/XWp8NcODmlv0fJjSd596tWllnkHirDdRMq0Uz+soUb7fTDoimwtpNKLabIgWYE2eujTSJed1zgE5zoLW3AL1YVjfkyJKRuOIsznE20CejpZITdqnLGyL/9VsFseW94mZ0pshTkFxb6FrbjHqAwHpS5t+i05FrCc3GkcUJqp9fqXZAC3TerOJ8i3ciuVc6bI10GaQNc9TBTM+wPpqm/ZOwmgcIYVfDWOOenGkKHmdb5u0m62tZbhOMat9TTrSddSVjUl71jW+Sa/ZRn14pI8XaAPkK9UCiRsxqBYjsZrLmtNUmw3RMloncer1Hj/RbCM1t0B8IB7r011vnQLufFnsXhw/XIpMa+oiWiKvn5ZKU3GO1b0rzUYgNUDWSJL+8r48FCkebwAEtOaWnxKk2Yb18cPT+C5gLble3C3+Hk0B4IkaodVsRE8LgaxhzrVRSP56UtajHT8KUvOanwziw2/pcxzHcRzHcRzHcRzHcRzHcRzn77As/wB5BuVQCwEaQAAAAABJRU5ErkJggg==\" alt=\"0 point 0 5 4 times 100 percent, equals 5 point 4 percent\"></span>.<p>Choice A is incorrect. This choice is the difference <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAAAWCAYAAADQIfLaAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACBklEQVRoQ+2V7bHEIAhFLS8FWU56SSvpxCcqhiCgyeb948w4s2sUL18a0hFTCEEZW9rPBL8L576p3yyOSG2GFI9xXzr3tJE1IS8qH35k1b+UjhSH73kYOp7EDkE/pRjc6IKIgBpIIroJmBmr+2K2qO/jc3j+lg+D/18j+VeDc+l8i2SbggU5i9sYuJY9HpTSGduecl5EgyiIH1jsN5Ep7943xfYHQZHg/gGlEAxfVpFsI7RzzCRI7VI3j+2lzSNa692SUNboNr5mRdNbNNsAFlvc9TWdIoZVxNskALwysBpQRP0P31sbt/FfV5HoH3ZjjCVAMAXjqQbJNtJvDSNRBcwkP1zLcL0y5lVsPeiYFDqv6fgV1T8sABLApxqs9fRa1mLZse7hoaKbMSsJWGHSPhSLSeDiJS09WJOhOWj5J/Fk/TR2WRT8NpPQA9YWS9RE4MgHFoNGEpQDqWB+PSF1ft5lq6z4x1nVYNmuMRi7nPtbwCpbbT+gitQrRXOCzmuivk/CW/9WkqDbrgVHi5cOZptnjKIdQttMwg5w6wTF9tOrY4bpn6JzVYNlm6OdVaCBaVM3hjdBqBLMOg2o9pbQNdXWJUxa8yuWf+LbxTQBkn/ALHYUMwkrWR/eBLZWE3nfJwcXncbxZQKAmX9XIq4hd8aobSV2iJkEx3Ecx3Ecx3Ecx3E6IfwBOI5OfbkrCCUAAAAASUVORK5CYII=\" alt=\"79 point 8 6, minus 75 point 7 4\"></span> rounded to the nearest tenth, which is the (absolute) increase of the bill&rsquo;s amount, not its percent increase. Choice B is incorrect and may be the result of some calculation errors. Choice C is incorrect and is the result of dividing the difference between the two bill amounts by the new bill amount instead of the original bill amount.</p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p>4.1%</p>"
      },
      {
        "id": "B",
        "text": "<p>5.1%</p>"
      },
      {
        "id": "C",
        "text": "<p>5.2%</p>"
      },
      {
        "id": "D",
        "text": "<p>5.4%</p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-c256b723",
    "originalId": "c256b723",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "medium",
    "stem": "<p style=\"text-align: left;\">The amount of Hanna's bill for a food order was <math alttext=\"dollar sign 50\"><mo>$</mo><mn>50</mn></math>. Hanna gave a tip of <math alttext=\"20 percent sign\"><mn>20</mn><mo>%</mo></math> of the amount of the bill. What is the amount, in dollars, of the tip Hanna gave?</p>",
    "type": "grid-in",
    "correctAnswer": "10",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math alttext=\"10\"><mn>10</mn></math>. It&rsquo;s given that the amount of Hanna's food order was <math alttext=\"dollar sign 50\"><mo>$</mo><mn>50</mn></math> and that Hanna gave a tip of <math alttext=\"20 percent sign\"><mn>20</mn><mo>%</mo></math> of the amount of the bill. <math alttext=\"20 percent sign\"><mn>20</mn><mo>%</mo></math> of <math alttext=\"50\"><mn>50</mn></math> can be calculated as <math alttext=\"left parenthesis StartFraction 20 Over 100 EndFraction right parenthesis left parenthesis 50 right parenthesis\"><mfenced><mfrac><mn>20</mn><mn>100</mn></mfrac></mfenced><mfenced><mn>50</mn></mfenced></math>, which yields <math alttext=\"StartFraction 1000 Over 100 EndFraction\"><mfrac><mn>1000</mn><mn>100</mn></mfrac></math>, or <math alttext=\"10\"><mn>10</mn></math>. Therefore, the amount, in dollars, of the tip Hanna gave is <math alttext=\"10\"><mn>10</mn></math>.</p>"
  },
  {
    "id": "sat-math-percen-7f84b136",
    "originalId": "7f84b136",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "medium",
    "stem": "<p style=\"text-align: left;\">The table summarizes the number of objects in each group.</p>\n\n<p style=\"text-align: left;\">The number of objects in group C is <math alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> of the number of objects in group A. What is the value of <math alttext=\"p\"><mi>p</mi></math>?</p>",
    "type": "grid-in",
    "correctAnswer": "184",
    "explanation": "<p>The correct answer is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"184\"><mn>184</mn></math>. It's given in the table that there are <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"375\"><mn>375</mn></math> objects in group A and <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"690\"><mn>690</mn></math> objects in group C. It&rsquo;s also given that the number of objects in group C is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> of the number of objects in group A. Therefore, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"690\"><mn>690</mn></math> is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"375\"><mn>375</mn></math>, which can be represented by <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"690 equals left parenthesis StartFraction p Over 100 EndFraction right parenthesis left parenthesis 375 right parenthesis\"><mn>690</mn><mo>=</mo><mfenced><mfrac><mi>p</mi><mn>100</mn></mfrac></mfenced><mfenced><mn>375</mn></mfenced></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"690 equals 3.75 p\"><mn>690</mn><mo>=</mo><mn>3.75</mn><mi>p</mi></math>. Dividing both sides of this equation by <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"3.75\"><mn>3.75</mn></math> yields <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"184 equals p\"><mn>184</mn><mo>=</mo><mi>p</mi></math>. Therefore, the value of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"p\"><mi>p</mi></math> is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"184\"><mn>184</mn></math>.</p>",
    "passage": "<figure class=\"table\"><table border=\"1\">\n<tbody>\n<tr style=\"height: 22.3958px;\">\n<th style=\"width: 47.6772%; height: 22.3958px; text-align: center;\" scope=\"col\">Group</th>\n<th style=\"width: 47.6772%; height: 22.3958px; text-align: center;\" scope=\"col\">Number of objects</th>\n</tr>\n<tr style=\"height: 22.3958px;\">\n<td style=\"width: 47.6772%; height: 22.3958px; text-align: center;\">A</td>\n<td style=\"width: 47.6772%; height: 22.3958px; text-align: center;\"><math alttext=\"375\"><mn>375</mn></math></td>\n</tr>\n<tr style=\"height: 22.3958px;\">\n<td style=\"width: 47.6772%; height: 22.3958px; text-align: center;\">B</td>\n<td style=\"width: 47.6772%; height: 22.3958px; text-align: center;\"><math alttext=\"54\"><mn>54</mn></math></td>\n</tr>\n<tr style=\"height: 22.3958px;\">\n<td style=\"width: 47.6772%; height: 22.3958px; text-align: center;\">C</td>\n<td style=\"width: 47.6772%; height: 22.3958px; text-align: center;\"><math alttext=\"690\"><mn>690</mn></math></td>\n</tr>\n<tr style=\"height: 22.3958px;\">\n<td style=\"width: 47.6772%; height: 22.3958px; text-align: center;\">D</td>\n<td style=\"width: 47.6772%; height: 22.3958px; text-align: center;\"><math alttext=\"81\"><mn>81</mn></math></td>\n</tr>\n<tr style=\"height: 22.3958px;\">\n<td style=\"width: 47.6772%; height: 22.3958px; text-align: center;\">Total</td>\n<td style=\"width: 47.6772%; height: 22.3958px; text-align: center;\"><math alttext=\"1,200\"><mn>1,200</mn></math></td>\n</tr>\n</tbody>\n</table></figure>"
  },
  {
    "id": "sat-math-percen-94c65646",
    "originalId": "94c65646",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "medium",
    "stem": "<p style=\"text-align: left;\"><math alttext=\"432\"><mn>432</mn></math> is <math alttext=\"96 percent sign\"><mn>96</mn>\n<mo>%</mo></math> of what number?</p>",
    "type": "grid-in",
    "correctAnswer": "450",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math alttext=\"450\"><mn>450</mn></math>. Let <math alttext=\"x\"><mi>x</mi></math> represent the number that <math alttext=\"432\"><mn>432</mn></math> is <math alttext=\"96 percent sign\"><mn>96</mn><mo>%</mo></math> of. This can be written as <math alttext=\"left parenthesis StartFraction 96 Over 100 EndFraction right parenthesis x equals 432\"><mfenced><mfrac><mn>96</mn><mn>100</mn></mfrac></mfenced><mi>x</mi><mo>=</mo><mn>432</mn></math>, or <math alttext=\"0.96 x equals 432\"><mn>0.96</mn><mi>x</mi><mo>=</mo><mn>432</mn></math>. Dividing both sides of this equation by <math alttext=\"0.96\"><mn>0.96</mn></math> yields <math alttext=\"x equals 450\"><mrow>\n\t<mi>x</mi>\n\t<mo>=</mo>\n\t<mn>450</mn>\n</mrow></math>. Therefore, <math alttext=\"432\"><mn>432</mn></math> is <math alttext=\"96 percent sign\"><mn>96</mn><mo>%</mo></math> of <math alttext=\"450\"><mn>450</mn></math>.</p>"
  },
  {
    "id": "sat-math-percen-7b731fc3",
    "originalId": "7b731fc3",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "medium",
    "stem": "<p style=\"text-align: left;\">What number is <math alttext=\"40 percent sign\"><mn>40</mn>\n<mo>%</mo></math> greater than <math alttext=\"115\"><mn>115</mn></math>?</p>",
    "type": "grid-in",
    "correctAnswer": "161",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math alttext=\"161\"><mn>161</mn></math>. For a number to be <math alttext=\"40 percent sign\"><mn>40</mn><mo>%</mo></math> greater than <math alttext=\"115\"><mn>115</mn></math>, it follows that the number is <math alttext=\"left parenthesis 100 percent sign of 115 right parenthesis plus left parenthesis 40 percent sign of 115 right parenthesis\"><mfenced><mrow><mn>100</mn><mo>%</mo><mo>&#160;</mo><mtext>of</mtext><mo>&#160;</mo><mn>115</mn></mrow></mfenced><mo>+</mo><mfenced><mrow><mn>40</mn><mo>%</mo><mo>&#160;</mo><mtext>of</mtext><mo>&#160;</mo><mn>115</mn></mrow></mfenced></math>, which can be written as <math alttext=\"StartFraction 100 Over 100 EndFraction left parenthesis 115 right parenthesis plus StartFraction 40 Over 100 EndFraction left parenthesis 115 right parenthesis\"><mfrac><mn>100</mn><mn>100</mn></mfrac><mfenced><mn>115</mn></mfenced><mo>+</mo><mfrac><mn>40</mn><mn>100</mn></mfrac><mfenced><mn>115</mn></mfenced></math>. This expression is equivalent to <math alttext=\"1 left parenthesis 115 right parenthesis plus 0.4 left parenthesis 115 right parenthesis\"><mn>1</mn><mfenced><mn>115</mn></mfenced><mo>+</mo><mn>0.4</mn><mfenced><mn>115</mn></mfenced></math>, or <math alttext=\"1.4 left parenthesis 115 right parenthesis\"><mn>1.4</mn><mfenced><mn>115</mn></mfenced></math>, which is equal to <math alttext=\"161\"><mn>161</mn></math>. Therefore, <math alttext=\"161\"><mn>161</mn></math> is <math alttext=\"40 percent sign\"><mn>40</mn><mo>%</mo></math> greater than <math alttext=\"115\"><mn>115</mn></math>.</p>"
  },
  {
    "id": "sat-math-percen-e9f4521a",
    "originalId": "e9f4521a",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "medium",
    "stem": "<p style=\"text-align: left;\"><math alttext=\"13\"><mn>13</mn></math> is <math alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> of <math alttext=\"25\"><mn>25</mn></math>. What is the value of <math alttext=\"p\"><mi>p</mi></math>?</p>",
    "type": "grid-in",
    "correctAnswer": "52",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math alttext=\"52\"><mn>52</mn></math>. It's given that <math alttext=\"13\"><mn>13</mn></math> is <math alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> of <math alttext=\"25\"><mn>25</mn></math>. It follows that <math alttext=\"StartFraction 13 Over 25 EndFraction equals StartFraction p Over 100 EndFraction\"><mrow>\n\t<mfrac>\n\t\t<mn>13</mn>\n\t\t<mn>25</mn>\n\t</mfrac>\n\t<mo>=</mo>\n\t<mfrac>\n\t\t\t<mi>p</mi>\n\t\t\t<mn>100</mn>\n\t\t</mfrac>\n</mrow></math>. Multiplying both sides of this equation by <math alttext=\"100\"><mn>100</mn></math> gives <math alttext=\"52 equals p\"><mrow>\n\t<mn>52</mn>\n\t<mo>=</mo>\n\t<mi>p</mi>\n</mrow></math>. Therefore, the value of <math alttext=\"p\"><mi>p</mi></math> is <math alttext=\"52\"><mn>52</mn></math>.</p>"
  },
  {
    "id": "sat-math-percen-dccdb20c",
    "originalId": "dccdb20c",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "medium",
    "stem": "<p style=\"text-align: left;\">There are <math alttext=\"450\"><mn>450</mn></math> tiles in a box. Of these tiles, <math alttext=\"6 percent sign\"><mn>6</mn><mo>%</mo></math> are black. How many black tiles are in the box?</p>",
    "type": "grid-in",
    "correctAnswer": "27",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math alttext=\"27\"><mn>27</mn></math>. It&rsquo;s given that <math alttext=\"6 percent sign\"><mn>6</mn><mo>%</mo></math> of the <math alttext=\"450\"><mn>450</mn></math> tiles in a box are black. Therefore, the number of black tiles in the box can be calculated by multiplying the number of tiles in the box by <math alttext=\"StartFraction 6 Over 100 EndFraction\"><mfrac><mn>6</mn><mn>100</mn></mfrac></math>, which is equivalent to <math alttext=\"450 left parenthesis StartFraction 6 Over 100 EndFraction right parenthesis\"><mn>450</mn><mfenced><mfrac><mn>6</mn><mn>100</mn></mfrac></mfenced></math>, or <math alttext=\"27\"><mn>27</mn></math>.</p>"
  },
  {
    "id": "sat-math-percen-566759ef",
    "originalId": "566759ef",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "medium",
    "stem": "<p class=\"stem_paragraph \">Thomas installed a new stove in his restaurant. At the time of installation, the stove had a value of $800. Thomas estimates that each year the value of the stove will depreciate by 20% of the previous year&rsquo;s estimated value. What is the estimated value of the stove exactly 2 years after Thomas installed it?</p>",
    "type": "mcq",
    "correctAnswer": "",
    "explanation": "<p>Choice B is correct. If the stove&rsquo;s value depreciates by 20% of the previous year&rsquo;s estimated value, then each year it retains 100% &ndash; 20% = 80%, or 0.80, of the previous year&rsquo;s estimated value. Since the stove&rsquo;s value was $800 when Thomas installed it, the estimated value after two years would be (0.80)(0.80)($800) = $512.<p>Choice A is incorrect. This is the value of the stove if each year it had depreciated by 20% of the original value rather than by 20% of the previous year&rsquo;s estimated value. Choice C is incorrect and may be the result of a computational error. Choice D is incorrect. This is the estimated value of the stove 1 year after Thomas installed it, not 2 years.</p><p> </p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">$480</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">$512</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">$556</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">$640</p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-ad1d6adb",
    "originalId": "ad1d6adb",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "medium",
    "stem": "<p style=\"text-align: left;\">The number of coins in a collection increased from <math alttext=\"9\"><mn>9</mn></math> to <math alttext=\"90\"><mn>90</mn></math>. What was the percent increase in the number of coins in this collection?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p style=\"text-align: left;\">Choice D is correct. It's given that the number of coins in the collection increased from <math alttext=\"9\"><mn>9</mn></math> to <math alttext=\"90\"><mn>90</mn></math>. It follows that the number of coins in the collection increased by <math alttext=\"90 minus 9\"><mn>90</mn><mo>-</mo><mn>9</mn></math>, or <math alttext=\"81\"><mn>81</mn></math>. Let <math alttext=\"x percent sign\"><mi>x</mi><mo>%</mo></math> represent the percentage that <math alttext=\"81\"><mn>81</mn></math> is of <math alttext=\"9\"><mn>9</mn></math>. The value of <math alttext=\"x\"><mi>x</mi></math> can be found using the proportion <math alttext=\"StartFraction 81 Over 9 EndFraction equals StartFraction x Over 100 EndFraction\"><mfrac><mn>81</mn><mn>9</mn></mfrac><mo>=</mo><mfrac><mi>x</mi><mn>100</mn></mfrac></math>, or <math alttext=\"9 equals StartFraction x Over 100 EndFraction\"><mn>9</mn><mo>=</mo><mfrac><mi>x</mi><mn>100</mn></mfrac></math>. Multiplying both sides of this equation by <math alttext=\"100\"><mn>100</mn></math> yields <math alttext=\"900 equals x\"><mn>900</mn><mo>=</mo><mi>x</mi></math>. Thus, when the number of coins in the collection increased from <math alttext=\"9\"><mn>9</mn></math> to <math alttext=\"90\"><mn>90</mn></math>, the percent increase was <math alttext=\"900 percent sign\"><mn>900</mn><mo>%</mo></math>.</p>\n<p>Choice A is incorrect and may result from conceptual or calculation errors.</p>\n<p>Choice B is incorrect and may result from conceptual or calculation errors.</p>\n<p>Choice C is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"10 percent sign\"><mn>10</mn><mo>%</mo></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"81 percent sign\"><mn>81</mn><mo>%</mo></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"90 percent sign\"><mn>90</mn><mo>%</mo></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"900 percent sign\"><mn>900</mn><mo>%</mo></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-d72a2b4d",
    "originalId": "d72a2b4d",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "medium",
    "stem": "<p style=\"text-align: left;\">In March, the price of a collectible card was <math alttext=\"dollar sign 15.50\"><mo>$</mo><mn>15.50</mn></math>. In April, the price of the collectible card was <math alttext=\"dollar sign 17.36\"><mo>$</mo><mn>17.36</mn></math>. The price of the collectible card in April was <math alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> of the price of the collectible card in March. What is the value of <math alttext=\"p\"><mi>p</mi></math>?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p style=\"text-align: left;\">Choice C is correct. It's given that the price of the collectible card was <math alttext=\"dollar sign 15.50\"><mo>$</mo><mn>15.50</mn></math> in March and <math alttext=\"dollar sign 17.36\"><mo>$</mo><mn>17.36</mn></math> in April. It's also given that the price of the collectible card in April was <math alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> of the price in March. It follows that <math alttext=\"dollar sign 17.36\"><mo>$</mo><mn>17.36</mn></math> is <math alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> of <math alttext=\"dollar sign 15.50\"><mo>$</mo><mn>15.50</mn></math>. Therefore, the value of <math alttext=\"p\"><mi>p</mi></math> can be calculated by solving the equation <math alttext=\"17.36 equals left parenthesis StartFraction p Over 100 EndFraction right parenthesis left parenthesis 15.50 right parenthesis\"><mn>17.36</mn><mo>=</mo><mfenced><mfrac><mi>p</mi><mn>100</mn></mfrac></mfenced><mfenced><mn>15.50</mn></mfenced></math>, or <math alttext=\"17.36 equals StartFraction 15.50 p Over 100 EndFraction\"><mn>17.36</mn><mo>=</mo><mfrac><mrow><mn>15.50</mn><mi>p</mi></mrow><mn>100</mn></mfrac></math>. Multiplying each side of this equation by <math alttext=\"100\"><mn>100</mn></math> yields <math alttext=\"1,736 equals 15.50 p\"><mn>1,736</mn><mo>=</mo><mn>15.50</mn><mi>p</mi></math>. Dividing each side of this equation by <math alttext=\"15.50\"><mn>15.50</mn></math> yields <math alttext=\"112 equals p\"><mrow>\n\t<mn>112</mn>\n\t<mo>=</mo>\n\t<mi>p</mi>\n</mrow></math>. Therefore, the value of <math alttext=\"p\"><mi>p</mi></math> is <math alttext=\"112\"><mn>112</mn></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. <math alttext=\"12 percent sign\"><mn>12</mn><mo>%</mo></math> is the percent increase in the price of the collectible card from March to April.</p>\n<p style=\"text-align: left;\">Choice B is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice D is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"12\"><mn>12</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"88\"><mn>88</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"112\"><mn>112</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"188\"><mn>188</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-954943a4",
    "originalId": "954943a4",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p class=\"stem_paragraph \">Jennifer bought a box of Crunchy Grain cereal. The nutrition facts on the box state that a serving size of the cereal is <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAwCAYAAAAVQYoQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAY00gKyAAAARxJREFUeNrt1rFLAnEYxvFfRlOLa1igjhEIgkS0COFmguBSY4RTkzQ2NDjVn+DY1FAQjSKok86R/4AYCEKBEESBfYVnkJCIu/eg4ffAB256Trn3vfs593tO0McrvjDBHbZdyNRwgSL2cYwnvGHLGSeFmW5qmriKzy3KVrGGNG4xxqZF8US/cm6IrNXfzyCHEh4wxYGLIG0Moii+wod1aQw9zXPg9DWvBS3IEVrawsMwxQ08411lL1rpPefjEyozIz7/MCvo6gHVLYvPMLIuTupzVLYubuJ+Yd5Nik918tmwLE6otPpjQ0MXP6KjiTArruATuzpWxReOV9e6jgUpvvzDC2cn6Ijll5gX3uh63fr1Wo9itSMr9vHx8THLN4PMWgx2JBYgAAAAAElFTkSuQmCC\" alt=\"three fourths\"></span> cup and provides 210 calories, 50 of which are calories from fat. In addition, each serving of the cereal provides 180 milligrams of potassium, which is 5% of the daily allowance for adults. If <span class=\"italic\">p</span> percent of an adult&rsquo;s daily allowance of potassium is provided by <span class=\"italic\">x</span> servings of Crunchy Grain cereal per day, which of the following expresses <span class=\"italic\">p</span> in terms of <span class=\"italic\">x</span> ?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p>Choice B is correct. It&rsquo;s given that each serving of Crunchy Grain cereal provides 5% of an adult&rsquo;s daily allowance of potassium, so <span class=\"italic\">x</span> servings would provide <span class=\"italic\">x</span> times 5%. The percentage of an adult&rsquo;s daily allowance of potassium, <span class=\"italic\">p</span>, is 5 times the number of servings, <span class=\"italic\">x</span>. Therefore, the percentage of an adult&rsquo;s daily allowance of potassium can be expressed as <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAWCAYAAAC/kK73AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABGElEQVRYR+2UgQ3EIAhFHc+BHMdduoqbcCiiFqW9XL2cl/gS06ZV/MBX8wsADnD4iK+n4Y74XBcIHqxxKB/WFiqBw4GxHsIM4YBhvDVgfcC4tX3YvelVSfFvbJHmiORIlwWUWNe2vmOxwdt+Ykb1qRgy8VIg59AudV4sWJqQ4fi3Wsh35wBtF/Knx5SEm2qO9o6Uqiv/E8l34sB8Q7gGVVTsnwXHV9VaI99dCf/UKhpUuN4K5GvlBmKBnfCc8bubP2EknLoQhY/PWa2eEJ4Wzrq2MloxpFUoEer2yA0JCmbB4UnnzLTWPaV0dyCSk5GFVLXQjxiIg8YxXzRTxdfRiW4TU6w8vOyX5+rmWBpuDbdqs9lsNn+EMS/bz8HBGr+wjQAAAABJRU5ErkJggg==\" alt=\"p equals 5 x\"></span>.<p>Choices A, C, and D are incorrect and may result from incorrectly converting 5% to its decimal equivalent, which isn&rsquo;t necessary since <span class=\"italic\">p</span> is expressed as a percentage. Additionally, choices C and D are incorrect because the context should be represented by a linear relationship, not by an exponential relationship.</p><p> </p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAASCAYAAAAdZl26AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAJufgqOgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABHUlEQVRIS+1UAQ7DIAj0eTzI5/gXv9KfMIRaKbJWk63LEi9pqhX1OI6GJ4CYMdKrDEOINMMy7rAl2GPuYx9FjgEhbUykjEPMLqmyRku/J6wh6gMSfyaGW0JwlEXcMEGLmwbmSMokOuS6fBzH697TE7CEbUIV9Tsc96ukOblWxcOSupLiv7aJ55Bo6/miWQwnwHHmfr1PnePaUPu04F2pZzGagEVVWfcEcySbdcJ6/mOrOBX4loUsqm10AnK3I6ocel64+lvMwBIeray/T4TSSTGqqnVB5vcqjUKLocfa51ZdjtsdoJuYE7HOKAdByuoP9DnyBaJmPbuRtI0q83PcsVe5gXuBCO5T+dCV5V/gNfBfQUrUyriwsLDwIEJ4AeAPAlaDOQKNAAAAAElFTkSuQmCC\" alt=\"p equals, 0 point 5 x\"></span></span></p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAASCAYAAAA31qwVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAJufgqOgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAA70lEQVRIS+2U6w3DMAiEPR4DeRzv4lW8yQWDaYiD+oiiJj/ySVGLH/Q4SNM/aIXAH+7JqED/fi01J2RWMsJ7ADQUIpR2UBhqRsqFk7y3W87JfvTsBYCzZF6nV971jIpOIF5Yz/IZtrfHgs7BekliKnz1YKUDtAKa87qidV/j3vKNqE5fNOUdf2EsnYK54mdOfpvbvTMimgNpWeDYr62csfZ5YZozMEGr2G6Etp6AzZwVoJ3RwrxYwVywDY0/V/8NsxtS8OiEH34ROHeoDySV6t7Ic0QZ2z9YFRm9gfOcy8LOxquJBv8WRIP/8PBwGSkt3MlePPBnoKcAAAAASUVORK5CYII=\" alt=\"p equals, 5 x\"></span></span></p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAcCAYAAAApxUKlAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAOJ5y/mQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAB6UlEQVRoQ+2WDdKEIAiGO54H8jjdpat0Ez4B/0Iw+9q22RmfGafNTOAFbJc3gX0FtzhYd4A49TUAdljdAn472ub54hNsPlzf8TEDsIF/2QnLBxIIVaTnraBfZ/MLuOBlvH0NEsatoZ6KIKm6XKi8133k9vMhb0pGw4XHedWdrU+VgT8PI5RKuBJWO+6ra0R8BXKkchiRZ4O8l4yst5IioXdrAek9FNa2/zWwBetMpuzKksd1UlRkdD2JMFAdtaj1OYVJVduwdoCMhikcdVCfgO1oFWC0gtaug+stsSXloGehkkDWByA+OArExvVSNM8DMWRAmgMcfGuHW8sSq78+J997EhYf49AqRUtgl5SterO62uLUbVSxlPMGuTOfk1m1oRYjcl2sKitx6qfFilMNWmtrPnXR+rsnVs7cyWjbkPes559owzjVoAnKsfTfy6QAGrFi2cqA74KJObS7YefuAa+hioVzo/+pcpUIscj4A3/MpHNWBVtfs5H1VwSVyeuSytqHL0dSXMvAp1BbUdiT9xxkCepsfe6WShheI+xSoVyIkzfBTZMBHBc2+AdkU1RtEoTH0b4UC+mtR4pgZWiVNlxVCJXvA+12Bgf7bFIsspBX4rb6f6KQDndZnpPJZDKZTCaTyWTyyyzLH86KGYIMTjl6AAAAAElFTkSuQmCC\" alt=\"p equals, open parenthesis, 0 point 0 5, close parenthesis, to the x power\"></span></span></p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAcCAYAAAApxUKlAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAOJ5y/mQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAB9UlEQVRoQ+2Wi63DIAxFGY+BGCe7ZJVswsO/QIwhRG0eqsSRUBs3AXN9TepmEo8teufjdsTIoX8jxiNu3sWwX9emeM4p7iF9zsnxJMY9hslJtHJAgUBF/L0W9N/Zg4s+ZcmX00Bh/Jb8lAURd/nkvOk5UvuFVDe7YqNCUos4HoZD2Bnw9TKSVdIn0mrHY/OViFPARIqES0SAO7H0WaKvgbuiCPhsKSA+B8LOPSYQcI51DqCImGRfLHGDvgfmvWwaRBhwRylqeU5BPmYeZQK4aArBsDb1CXIe6IplZ1CyXbG48jo3Ejs7SYvXIh/017VbLwD+4SoQLW5bsXkeqKE31EyAkXnvxarnIMHFIVz8ELilaFjztgrYRKpVTla6jUMf8xWxjPMJKONnMYs2tPYIPBerqAqHflosDlXoVgXucqqw+rsn1lm5m1G3Ic2p48KQWANtyKEKS1Bas//ciWygEqtxkH4KFKYlxrhYdV6WazSmWBAb/U91ukSJhYu/8Mesl9yQWFxcfU/ZHU8E7RWvQmwd0ptDFLcq8C16rdgSizaZ4zq/6prXKIWhe67r0noP9kmTwKSyAIx3hBJwTcNdo2IBEqNR55sFy8Ny2rCrALTvC+12B2323aK0OIV8su9W/y8MxPbW+bFYLBaLxWKxWCwWv4pzf3FbyfklZ0dgAAAAAElFTkSuQmCC\" alt=\"p equals, open parenthesis, 1 point 0 5, close parenthesis, to the x power\"></span></span></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-1baffbcf",
    "originalId": "1baffbcf",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">The expression <math alttext=\"0.35 x\"><mrow>\n\t<mn>0.35</mn>\n\t<mi>x</mi>\n</mrow></math> represents the result of decreasing a positive quantity <math alttext=\"x\"><mi>x</mi></math> by what percent?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p style=\"text-align: left;\">Choice D is correct. Let <math alttext=\"n percent sign\"><mi>n</mi><mo>%</mo></math> represent the percent by which the positive quantity <math alttext=\"x\"><mi>x</mi></math> is decreased to result in <math alttext=\"0.35 x\"><mrow>\n\t<mn>0.35</mn>\n\t<mi>x</mi>\n</mrow></math>. The value of <math alttext=\"n\"><mi>n</mi></math> can be found by solving the equation <math alttext=\"x minus left parenthesis StartFraction n Over 100 EndFraction right parenthesis x equals 0.35 x\"><mi>x</mi><mo>-</mo><mfenced><mfrac><mi>n</mi><mn>100</mn></mfrac></mfenced><mi>x</mi><mo>=</mo><mn>0.35</mn><mi>x</mi></math>. Since <math alttext=\"x\"><mi>x</mi></math> is a common factor of each of the terms on the left-hand side of this equation, the equation can be rewritten as <math alttext=\"x left parenthesis 1 minus StartFraction n Over 100 EndFraction right parenthesis equals 0.35 x\"><mi>x</mi><mfenced><mrow><mn>1</mn><mo>-</mo><mfrac><mi>n</mi><mn>100</mn></mfrac></mrow></mfenced><mo>=</mo><mn>0.35</mn><mi>x</mi></math>. Dividing each side of this equation by <math alttext=\"x\"><mi>x</mi></math> yields <math alttext=\"1 minus StartFraction n Over 100 EndFraction equals 0.35\"><mn>1</mn><mo>-</mo><mfrac><mi>n</mi><mn>100</mn></mfrac><mo>=</mo><mn>0.35</mn></math>. Multiplying each side of this equation by <math alttext=\"100\"><mn>100</mn></math> yields <math alttext=\"100 minus n equals 35\"><mn>100</mn><mo>-</mo><mi>n</mi><mo>=</mo><mn>35</mn></math>. Subtracting <math alttext=\"100\"><mn>100</mn></math> from each side of this equation yields <math alttext=\"negative n equals negative 65\"><mrow>\n\t<mrow>\n\t\t<mo>-</mo>\n\t\t<mi>n</mi>\n\t</mrow>\n\t<mo>=</mo>\n\t<mrow>\n\t\t<mo>-</mo>\n\t\t<mn>65</mn>\n\t</mrow>\n</mrow></math>. Dividing each side of this equation by <math alttext=\"negative 1\"><mrow>\n\t<mo>-</mo>\n\t<mn>1</mn>\n</mrow></math> yields <math alttext=\"n equals 65\"><mrow>\n\t<mi>n</mi>\n\t<mo>=</mo>\n\t<mn>65</mn>\n</mrow></math>. Therefore, the expression <math alttext=\"0.35 x\"><mrow>\n\t<mn>0.35</mn>\n\t<mi>x</mi>\n</mrow></math> represents the result of decreasing the positive quantity <math alttext=\"x\"><mi>x</mi></math> by <math alttext=\"65 percent sign\"><mn>65</mn><mo>%</mo></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. Decreasing the quantity <math alttext=\"x\"><mi>x</mi></math> by <math alttext=\"3.5 percent sign\"><mn>3.5</mn><mo>%</mo></math> yields <math alttext=\"x minus 0.035 x\"><mi>x</mi><mo>-</mo><mn>0.035</mn><mi>x</mi></math>, or <math alttext=\"0.965 x\"><mrow>\n\t<mn>0.965</mn>\n\t<mi>x</mi>\n</mrow></math>, not <math alttext=\"0.35 x\"><mrow>\n\t<mn>0.35</mn>\n\t<mi>x</mi>\n</mrow></math>.</p>\n<p style=\"text-align: left;\">Choice B is incorrect. Decreasing the quantity <math alttext=\"x\"><mi>x</mi></math> by <math alttext=\"35 percent sign\"><mn>35</mn><mo>%</mo></math> yields <math alttext=\"x minus 0.35 x\"><mi>x</mi><mo>-</mo><mn>0.35</mn><mi>x</mi></math>, or <math alttext=\"0.65 x\"><mrow>\n\t<mn>0.65</mn>\n\t<mi>x</mi>\n</mrow></math>, not <math alttext=\"0.35 x\"><mrow>\n\t<mn>0.35</mn>\n\t<mi>x</mi>\n</mrow></math>.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. Decreasing the quantity <math alttext=\"x\"><mi>x</mi></math> by <math alttext=\"6.5 percent sign\"><mn>6.5</mn><mo>%</mo></math> yields <math alttext=\"x minus 0.065 x\"><mi>x</mi><mo>-</mo><mn>0.065</mn><mi>x</mi></math>, or <math alttext=\"0.935 x\"><mrow>\n\t<mn>0.935</mn>\n\t<mi>x</mi>\n</mrow></math>, not <math alttext=\"0.35 x\"><mrow>\n\t<mn>0.35</mn>\n\t<mi>x</mi>\n</mrow></math>.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"3.5 percent sign\"><mrow><mn>3.5</mn></mrow><mo>%</mo></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"35 percent sign\"><mrow><mn>35</mn></mrow><mo>%</mo></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"6.5 percent sign\"><mrow><mn>6.5</mn></mrow><mo>%</mo></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"65 percent sign\"><mrow><mn>65</mn></mrow><mo>%</mo></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-65c49824",
    "originalId": "65c49824",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p class=\"stem_paragraph \">A school district is forming a committee to discuss plans for the construction of a new high school. Of those invited to join the committee, 15% are parents of students, 45% are teachers from the current high school, 25% are school and district administrators, and the remaining 6 individuals are students. How many more teachers were invited to join the committee than school and district administrators?</p>",
    "type": "grid-in",
    "correctAnswer": "8.",
    "explanation": "<p>The correct answer is 8. The 6 students represent <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAAAcCAYAAADPwEukAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAOJ5y/mQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAADY0lEQVR4Xu2XC7KrIAyGXZ4LcjnupVvpTriEEKUxwViic+Y23wzTFnn8eSGdWtJ7TfM0p/WdUu0KfoSU3mmdp7S8IvanpPRKSxTKTxM5YOS1TGnOXqo/gx8lvZY0zWt+z0TBiOD1a8nniuygXiEV5+YPbPKpZBnjgaYTT0zav2n5zpE/XUFfHq8zd2ugaxR8pcZ9YdGgXcfILvgqFdOTh+1onIdsea+zGjRKdFFcebYnP/8NWMZ40NV5chh4Ao7OH0qy3aNhL5R9fckfVg1lrlBAtFaxsX0O6z70NhqN87AtMIEHFyhFlOdD4+L4pkS7uWWMBz2dQHHwA8GkQELj/rxTAybJ8QBCv7ACMmjgSYe/d5vKus06Wv544xHnIVswoY+OxsBDP77aDsXCNiXaAFnG1K6vOdMJeBenBB0Myyrb/IQGDvpm97NVA/+j30uw8sxQgKN4xXnIFu4YDt0D5WI5zmsDZBlTu4ZRddYknpelOAm6oEnOHmFzOgsG8JQGTkkeSoQLGnBsUyw0t45tkxK+t7b2UP9TsNZbbzTOQ7Z8XSxbpX/Oa/stY2rXMLoTa4CaE4NOFz72W2gPcDQ/uYAnNHDQx7uOKxp4sQA0Fr5uBQh9zXpP4BHnr23BTfTEVcU5F8tm7EnTKl/TqSFdBb/V0J5OFAhNZ4unhhYqFMuVS9eg5wTxWmqcc4rBaZ27cjufN4JHnCVMttBDzfmaOEyKo2MwUCjOMqZ2DXPViVohX4XbeKVYvDS0YHLYCgWQNKAv+/Ep8+oeZU86oTuxpRjB117r+e6OOF+yBU5GbXNNnJYUbSVbxtSuYe5wooUtOcVmCJJjsZQ3XF7W6gNA0lD6OlcSPGBxznYS12TTDkgvvON82Zaec9RiqQvz/o8riWGMFyNFXbtckPZ7QgMVrZZEVzT0Dk+g5EuNH4+xmGCOeMf5si00iG8E9CqZV61UxZYxHpwVdesw1CDbO4oUtLs10J5SjAirBvSjHh9c5/N5SUjDNcwDzzh/bUt5ILxdNHEEnWjYZCdbxozS07k7cm93FAqgnXB3avj0L29N8hg0wFq9oit75Un1Z+Fz3XviS3jGecgWdPq9xgZ/ky1JOv9VgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIguD/Ypr+ARfn6k+B3OsGAAAAAElFTkSuQmCC\" alt=\"open parenthesis, 100 minus 15, minus 45, minus 25, close parenthesis, percent, equals 15 percent\"></span> of those invited to join the committee. If <span class=\"italic\">x</span> people were invited to join the committee, then <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAWCAYAAACbiSE3AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABc0lEQVRYR+2V4RGDIAyFHY+BGIddXMVNUkMICEks1tr+yXfHVS2Y5L2ACwNrBPyhESBtgNfTrHGBsC8qtxWAFWJ972HEVcz9BbAlCGd5kBBNgPH+HSykKkYOHndJron7BJznXn/OhY2qeQNskIIsBJ2ecW9LIQfAoYqBCYS0R/mvGFadlH8xi9uG1WK6SQatgwaFD8yImucMguVnH2xXC6rzzfusSVToXHuLditUN2Ls9qmcR+vZEDJCT9w8g4Yxmtvq6dd3uTR3tcVzzthilMAH17kTx7m1O4z/70L1oACtJpHLk2JYaFuQE8PLJ740LMaYo3JmWGLc2yYWltB0TpzHvLdNrOclF3ZknDRzgDLfEIPiYSFz3XgVq85eDOOTM/MVYCwxZoVm13D9lbhXsHIUpo9OnTmnuW+KUYTWCmeBatsXAbTY30LELmaJmlqb4pDJfCIG0gRpQwhxFIvnP9AdCAvCQ8vZcRzHcRzHcX7BsrwAqtTYDoRhPbYAAAAASUVORK5CYII=\" alt=\"0 point 1 5 x, equals 6\"></span>. Thus, there were <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAsCAYAAAAgoTVPAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABwElEQVRoQ+2YC66DIBBFXZ4LYjnsxa24E8owTEWdsX5oInpPQmzJ60t6mDtAu5qE0Yc+PuhlGm6gJ7AIg0uioqckKoQhuPjo/QhxGiGMwfdrQaPv43sX9bFIUMCx7EN0Bjl74WhSRXEkaYoGormB9LOuqDbZFCDOQKShpx1guXMKPI9epyJRhLQDWGcyxPMHy4hiI9iJiJNxd2FWWyHm3wUt5svgWMqvXozenCkrqZRmXQmT4PiH+e37EDHOr+NpRbb5TU12a3q5NZZfXEgCeh9GRRBLW0eRK/OlJwERTqK0qrL6lzl/01GVsjfVkNYMZ+O5jJ4qDfGcw81cFyxVpIkkcLvJqJWGI8c2VlUt+1fz/awmljRiHuUDwtjwiQ9mqKS1+6fZyFsv/6slKsJVaWmFH9ZUrzbDsrRVaSSUTuSPknZh250qUv9hknjkTsTS1lFkIftiZf2a+61i59LC0BQNTW5TWP3LmtewpeVNoIinVHbT4v4pzaL5E/c/42lxZEFuyZWNQHiftAr3L7OnVViQ27Jcea0S5DymVZMpLS9IKYj/t36daQ6RwmMdnTPSiEncNB4hDAAAAAAAgLboug8ZHL/DIcGXigAAAABJRU5ErkJggg==\" alt=\"6 over, 0 point 1 5, equals 40\"></span> people invited to join the committee. It follows that there were <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAAaCAYAAADR2YAqAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAANvpXuIwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACLklEQVRoQ+2XC46FIAxFXZ4Lcjnuxa24E4ZSi6VQPvpIzKQnIW9ULLeXFjPLl3Dn7tZldfvp3HXrMc6dbl8Xtx3vY/17nDvc9iPjiRkxp+CODQReY1wwVm1eaWgAxWXDT/S/kWNb3OoXvS4TtNhAS3d4vu6+D+ZtQE07PPM/cWQ5YAK3cHndAy2SmR+M2/wW6LFac9TYHbpnHz+4Ztl81H3nRXOjFhInXw4v+lnXZRUKCqNoUKPyzn1V19Jij+gOMTpzGSHovrRJHdTx0o9En9bSGLhesUCsrL0cp2cTYY58D6jFHtHd032jYFFAl6HJmfmKvoL5+RGDwduCQ7JQ2YXFYnVuW3gGt2BwoTinfMRVYw/o1j686vdIDGkgh2JI84FgNNNCXRzj3TsohCn3Oby1Sjsdk2PHDs0jsS1j1NgDumsb/Jaa+QA/mjK9b8znLVQySIMfDZr5rdhfNx/XBMNZ5YvCG2pfjnxvxHxuUMn8ntgjurUNJuPgz9qo5aSar/iRfJO6JhVI20mOPFFOaj5WCF+/J/aIbjRIz+UNqvmFDgSS+5S8fDn5KnegV2fbIFhLrs8pxh7QHRKe9I/WaOVnnSl3qbRrVI2aSTWD+GIYW8xrmFNPpK4baG3uGzTzgVAIPPcrj2xu2up5Ak/MB+4NuIc2R94ntNhASzeak9//FTXzAdyAe8wqgle0qv8psDmfTPhrYBX/pkpjx0066w3DMAzDMAzDMAzDQJblDxkPHw9cu1n0AAAAAElFTkSuQmCC\" alt=\"0 point 4 5 times 40, equals 18\"></span> teachers and <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAAaCAYAAADR2YAqAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAANvpXuIwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACI0lEQVRoQ+2XDQ6DIAyFPZ4H8jjexat4E0apBSwtlG0my9IvIZvKz+trwW35JcK5h3VZw36GcN16mxDOsK9L2I7P5/p7QjjC9iXjiSfmfIRwbCDwajbBVF3wldoaB8IzAg2490ktlmT8zBxbO5bAHSFX8Uh3er7uUelzCehqH/mKHcoDfi1RjN+ivfW4uxA0rvSRGPWB4OJHY75F99PHjxQzMdRH4vjgFDCrzhrtfD73NV6zhAwqL41R1qLgoNUGzuhOc3RieReMFbVxHSZ92pbmJlpBs8q4URIB6MPXB3LV7q3GGd2W3TdLqWI8VhvzLfq0CuYmWklmX5Wes79tSUh8nFotFPu06wNJKMwlBDKjW3vxqu8j1qTCIGgO2fyBvpJBqZNsigaOKWJzcNWxQxVBYkfGwFxSFc3o7iX4U1TzLfpmguiB/aPR0SG8o1NvPc38+rj6X/Mntq8GmmkzHqgFSOZzTaL5E7q1BJNx8LXX6nU5qvkWfVJggPTikkgVKize427+9VKt1s/JFNs1bkI3GmQrpFn65g/0UfB8sOVXCpmkGW81CNbqJU+aZ0Z3SvZDf7RU86366kqUrgFuNBnSNe0SUBuNczMjB+ZoSbToBkbJ/QTNfMCqL5uLre3Azb/3560yOyegtMbEqw+/T2jmAyPdaI4Q8JfomQ+M9P0Eo+p/Fwj+qar/K7BKvlMdecc9dNY7juM4juM4juM4joMsywvRDhzRcLxilgAAAABJRU5ErkJggg==\" alt=\"0 point 2 5 times 40, equals 10 \"></span> school and district administrators invited to join the committee. Therefore, there were 8 more teachers than school and district administrators invited to join the committee.</p>"
  },
  {
    "id": "sat-math-percen-28ff3966",
    "originalId": "28ff3966",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\"><span class=\"gen_Stem\">A square scale drawing has a side length of <math alttext=\"55\"><mn>55</mn></math> inches, and <math alttext=\"1\"><mn>1</mn></math><cite> </cite>inch on the drawing represents an actual distance of <math alttext=\"19\"><mn>19</mn></math> miles. A larger version of the same drawing is printed as a square with the side length <math alttext=\"65 percent sign\"><mn>65</mn><mo>%</mo></math> longer than the side length of the previous drawing. On the larger drawing, which of the following is closest to the actual distance, in miles, represented by <math alttext=\"1\"><mn>1</mn></math><cite> </cite>inch?</span></p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p style=\"text-align: left;\">Choice B is correct. It's given that <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"1\"><mn>1</mn></math> inch on the drawing represents an actual distance of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"19\"><mn>19</mn></math> miles and that the larger drawing has a side length that is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"65 percent sign\"><mn>65</mn><mo>%</mo></math> longer than the side length of the previous drawing. It follows that <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"left parenthesis 1.65 right parenthesis left parenthesis 1 inch right parenthesis\"><mo>(</mo><mn>1.65</mn><mo>)</mo><mo>(</mo><mn>1</mn><mo>&#160;</mo><mtext>inch</mtext><mo>)</mo></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"1.65\"><mn>1.65</mn></math> inches, on the larger drawing also represents an actual distance of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"19\"><mn>19</mn></math> miles. Therefore, the scale of the larger drawing can be represented as <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"StartFraction 19 miles Over 1.65 inches EndFraction\"><mfrac><mrow><mn>19</mn><mo>&#160;</mo><mtext>miles</mtext></mrow><mrow><mn>1.65</mn><mo>&#160;</mo><mtext>inches</mtext></mrow></mfrac></math>, which is approximately <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"11.52\"><mn>11.52</mn></math> miles per inch. Therefore, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"11.52\"><mn>11.52</mn></math> is closest to the actual distance, in miles, represented by <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"1\"><mn>1</mn></math> inch on the larger drawing.</p>\n<p>Choice A is incorrect and may result from conceptual or calculation errors.</p>\n<p>Choice C is incorrect and may result from conceptual or calculation errors.</p>\n<p>Choice D is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"6.65\"><mn>6.65</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"11.52\"><mn>11.52</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"31.35\"><mn>31.35</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"35.75\"><mn>35.75</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-4aaa9c42",
    "originalId": "4aaa9c42",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">The positive number <math alttext=\"a\"><mi>a</mi></math> is <math alttext=\"2,241 percent sign\"><mrow><mn>2,241</mn></mrow><mo>%</mo></math> of the sum of the positive numbers <math alttext=\"b\"><mi>b</mi></math> and <math alttext=\"c\"><mi>c</mi></math>, and <math alttext=\"b\"><mi>b</mi></math> is <math alttext=\"83 percent sign\"><mrow><mn>83</mn></mrow><mo>%</mo></math> of <math alttext=\"c\"><mi>c</mi></math>. What percent of <math alttext=\"b\"><mi>b</mi></math> is <math alttext=\"a\"><mi>a</mi></math>?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p style=\"text-align: left;\">Choice D is correct. It&rsquo;s given that <math alttext=\"a\"><mi>a</mi></math> is <math alttext=\"2,241 percent sign\"><mn>2,241</mn><mo>%</mo></math> of the sum of <math alttext=\"b\"><mi>b</mi></math> and <math alttext=\"c\"><mi>c</mi></math>. This can be represented by the equation <math alttext=\"a equals left parenthesis StartFraction 2,241 Over 100 EndFraction right parenthesis left parenthesis b plus c right parenthesis\"><mi>a</mi><mo>=</mo><mfenced><mfrac><mn>2,241</mn><mn>100</mn></mfrac></mfenced><mfenced><mrow><mi>b</mi><mo>+</mo><mi>c</mi></mrow></mfenced></math>, or <math alttext=\"a equals 22.41 left parenthesis b plus c right parenthesis\"><mi>a</mi><mo>=</mo><mn>22.41</mn><mfenced><mrow><mi>b</mi><mo>+</mo><mi>c</mi></mrow></mfenced></math>. It&rsquo;s also given that that <math alttext=\"b\"><mi>b</mi></math> is <math alttext=\"83 percent sign\"><mn>83</mn><mo>%</mo></math> of <math alttext=\"c\"><mi>c</mi></math>. This can be represented by the equation <math alttext=\"b equals left parenthesis StartFraction 83 Over 100 EndFraction right parenthesis c\"><mi>b</mi><mo>=</mo><mfenced><mfrac><mn>83</mn><mn>100</mn></mfrac></mfenced><mi>c</mi></math>, or <math alttext=\"b equals 0.83 c\"><mi>b</mi><mo>=</mo><mn>0.83</mn><mi>c</mi></math>. Dividing both sides of this equation by <math alttext=\"0.83\"><mn>0.83</mn></math> yields <math alttext=\"StartFraction b Over 0.83 EndFraction equals c\"><mfrac><mi>b</mi><mn>0.83</mn></mfrac><mo>=</mo><mi>c</mi></math>. Substituting <math alttext=\"StartFraction b Over 0.83 EndFraction\"><mfrac><mi>b</mi><mn>0.83</mn></mfrac></math> for <math alttext=\"c\"><mi>c</mi></math> in the equation <math alttext=\"a equals 22.41 left parenthesis b plus c right parenthesis\"><mi>a</mi><mo>=</mo><mn>22.41</mn><mfenced><mrow><mi>b</mi><mo>+</mo><mi>c</mi></mrow></mfenced></math> yields <math alttext=\"a equals 22.41 left parenthesis b plus StartFraction b Over 0.83 EndFraction right parenthesis\"><mi>a</mi><mo>=</mo><mn>22.41</mn><mfenced><mrow><mi>b</mi><mo>+</mo><mfrac><mi>b</mi><mn>0.83</mn></mfrac></mrow></mfenced></math>, or <math alttext=\"a equals 22.41 left parenthesis StartFraction 1.83 b Over 0.83 EndFraction right parenthesis\"><mi>a</mi><mo>=</mo><mn>22.41</mn><mfenced><mfrac><mrow><mn>1.83</mn><mi>b</mi></mrow><mn>0.83</mn></mfrac></mfenced></math>, which is equivalent to <math alttext=\"a equals StartFraction 41.0103 b Over 0.83 EndFraction\"><mi>a</mi><mo>=</mo><mfrac><mrow><mn>41.0103</mn><mi>b</mi></mrow><mn>0.83</mn></mfrac></math>, or <math alttext=\"a equals 49.41 b\"><mi>a</mi><mo>=</mo><mn>49.41</mn><mi>b</mi></math>. This equation is equivalent to <math alttext=\"a equals left parenthesis StartFraction 4,941 Over 100 EndFraction right parenthesis b\"><mi>a</mi><mo>=</mo><mfenced><mfrac><mn>4,941</mn><mn>100</mn></mfrac></mfenced><mi>b</mi></math>; therefore, <math alttext=\"a\"><mi>a</mi></math> is <math alttext=\"4,941 percent sign\"><mn>4,941</mn><mo>%</mo></math> of <math alttext=\"b\"><mi>b</mi></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice B is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice C is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"23.24 percent sign\"><mrow><mn>23.24</mn></mrow><mo>%</mo></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"49.41 percent sign\"><mrow><mn>49.41</mn></mrow><mo>%</mo></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"2,324 percent sign\"><mrow><mn>2,324</mn></mrow><mo>%</mo></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"4,941 percent sign\"><mrow><mn>4,941</mn></mrow><mo>%</mo></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-0ea56bb2",
    "originalId": "0ea56bb2",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p class=\"stem_paragraph \">The manager of an online news service received the report above on the number of subscriptions sold by the service. The manager estimated that the percent increase from 2012 to 2013 would be double the percent increase from 2013 to 2014. How many subscriptions did the manager expect would be sold in 2014?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p>Choice B is correct. The percent increase from 2012 to 2013 was <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAAAsCAYAAACdbKF/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAADjElEQVR4Xu2bjdGDIAyGO54DOY67dJVu4geECIS/gPJVaZ47ri0NlZDXBPX6yrHv731VL/pt0Na3fs3yXkN7ZR7Zc2z29+rZLPv2iW166fVt/2z7UrHnzHukb48DFnVVIeEvAgjIjcEF9YXEsYE+FwD6+Sw9vtF5olgXNSn9WcOZ92jfHodZgGXblf+sBcCF9wWjMcKyZz7P5rNvSxhAjW9zlnbf0nP6bIv6DILlzPs/fHscrc5jWVFD8gt9wsYPqu3qps+3ctbhzPs/fHsUx5m3rmZhdJdu9EykmAB6CwZlIVzYmk0uqGB3Phg9vrljh3s7fwxn3qN9exzHZtkrL3g21sQGZycGI50FSjaw6LlgpH+vhR7f4NjhXOkYzrxH+zYNpRSPmcL/PgoGx6YhGIdoKo2WqhRF38yxYyH6YzjzbvHtpyktCArm7B4FbHLBSAvhCoq+me/ieftjOPP+lm+Pox6M3CLaYHBsGGK0XZdS9C0zp9Z5f8u329KzIOVglBc6sMHNuoqe/drQeqWYo8s31atLdLF0MuY92rfHgQviLzyIIQ6QT3RFaYPqLyzHhmYX+vkMvb5Rm955c2x+ChcQ12ggzBlNbnyCkFyjZ6+GYwPZAm2uDUSvbyg2bL3zHulbjdAH/rFr47IXZmph1es5TMBW/h32JzGjb73ZlDMOMryrEpdifvwKxd6Q2XzDLE6zcG1/yB1nxNfwWK8JXQLUsa7/4Rswm2+4p6Q+QRnPZyLuuJpghYeR3QuRRoUBgknsrUwZrAmtPO7Ieo2PLIUJSe2rNLl+hDPuED/zsZ7ukHavdhkjhWa7ImplWbgxdyydtiuCI0ZhMrCUjboYSCFC+0FG3t44I0ZhQmiGSWUcEEcorNo4FKMvKrCJxfd1eh9h4Nmk35qWsEenoaVTOcdmBlBI0GI/U0LT1MY5sbl2O5FpQDBtaZaeNSjWlrNRw7ERJsEEt+ERRm7v4O8LWPsLho0wEa2BhQxYzjqcTapsZH+II6vIP5OEkbQ+wtCAELS4vL0VGQM2ORFBP8fGdgmzUipfKDQqxKAsitAEDqVgw3fx3ioQkZROgUNRaLZM1oUmFwOCpSfYqXtmmkBEcntD8MFg+6KCzBSLz4faoGB90dCsmMqSHBthEpzYXEtmuAn/mSTcDCPGSf91JdwIUxpl3ySMRpe30p5NEARBEARBEARBEARBEIbwev0B1zpz2DPkbgYAAAAASUVORK5CYII=\" alt=\"the fraction with numerator 5,880 minus 5,600, and denominator 5,600, equals 0 point 0 5\"></span>, or 5%. Since the percent increase from 2012 to 2013 was estimated to be double the percent increase from 2013 to 2014, the percent increase from 2013 to 2014 was expected to be 2.5%.<br>\nTherefore, the number of subscriptions sold in 2014 is expected to be the number of subscriptions sold in 2013 multiplied by <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAcCAYAAAApxUKlAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAOJ5y/mQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABwUlEQVRoQ+2V65WEIAyFKY+CKMdebMVOsoQYHjE83HVmf5h7DmdGJZh83KCrBccG3nnYDoDz1isFcMDmHYS9wwFgh2CgsoY89uDAxyfnpSkK9gDOb9FnFTBqvxBZ6q76FMiUTPyhse7qWRy3Ef7lIfMn57Rz0oi9F3+T1HY8Nt9MqsWJPQ2L1i2FyuueZnEFVNl8rYaZQVgptmaDztEOswQxzsexCot3TFuPxQXJNTGP3qahVuJ6HymqRQCULaaogUoJXBcvO0bFPworJXCdIwuS+m0ciuopc2Ybw2oO+uGpH8XFPw+rt0EzWPfjUAnO6aTs0BAS/Pg4Da3Gxkz/Aiu7Vit6kMuf4kpOnGPdhuxaWeejsPKLJ6OG901YDGql5bR2bviwJXtOmMGS4vlDZ32pDfMHagEUSoNO9VRrYz/PnPM8rOucJw/4dEbFuat5o1RYeK/+al5uVPoIrNPNcs3ZF2o1jh3Vy/ku9GadUSt+AhZK7qK2q1rRszgGMcqX663B0Dpt3lRLm1NSmqy46y6sO2IYNK5J9RwyimufyVHBycDK0JzWrZtepJB8mTLIztFkMplMJpPJZDKZTKa3yrkfrsAei6VNCvAAAAAASUVORK5CYII=\" alt=\"1 plus 0 point 0 2 5\"></span>, or <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAAAcCAYAAACH35ZhAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAOJ5y/mQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAADH0lEQVR4Xu2WC5KDIAyGPZ4H8ji9S6/Sm7CGEI0xhGDZXTvNN8O08srrB50+ifR6pHma0+OVUum6JSm90mOe0vK8t59fTUrPtHyAmIhP8/freC5TmtfqlMePID2XNM2P9b76MlHhaZog6GNb7+z1twoUef3ZmnbFe+bkxG9zzqcaX3XL6qVemF6xNe2VVxb8pSb39+TsN199mBPdbo134z6ul43t1yqYBgplX0PGePI8c7Bvd0Y+A6/HXE0Y7ekVVMventSz34fkOnOW1zqK3QP5Q3kkcVs5GBW3ZDtYPMa8sONqpk24MIAsoLKxbw4GIR3mcwB4lvsAWWjrNtA8gvLYq334oy2RbEfOrhxWi1oM0j/OyLgleQ85LgvYAo03xPLGHB4EJuMc6H7C2qeT8NgrXSfQ3j7HmzM8WGf/r1IrvMXIuDnqvpt6lyUPQhe0VoGkMtHwcfPWnFpyeBCtgtBN6BeUba90ncixlBupJ2fVA1H8hr9WkyLYfT2ut+IfFXfp2lDHtsDYACmvVSRUOAWlF92agwHVAsX+oYJy2CtdB3CcHYSOnNUEdRXyhfvbqteouDlejWxY1yGdUD4uDbjmOAL9b0FRUj2vNy1nLf97IX9kvGa9fiFuy56KaawIQyqXG/HPqQVa5hRhaqcE6BKUw17pyqCvPjEBWs7Qv/Pe5Df8tZqMmwqt91v1Ghf3dlk485IxHayM8X7XHIfo4Bne1TXB9AuqbQ/A7z/fvoQWc+6rfINcoRZDLd/A6LjNnPcYI+ygcI1rTlG6dCwHtS4sj2ZRugTltEcntLZnb4E8vnmpxWvWa1DcBMavi3czxp3Bop8TxkElszUlydwZzxx5suQzQD5q/liC0hLUsqf5KPHmDH2rJP4NpC2XzwPiJnCtLt7MnqC9yeLl4ohbAgWzN80ZzxwqPDa9ADkI5ZbqFRRg2TuOycYE5MyZp0BXIFFRU2MU+RoRN4BzDUF5yAlcxn0LXAED0QV3JzaxDfx26uUO9TLJV+J6BMtjcHNuXy+4HeSVHtyXqFcQBEEQBEEQBEEQBEEQBEEQ/D3T9AM6dCJPs3uqiQAAAABJRU5ErkJggg==\" alt=\"5,880 times 1 point 0 2 5, equals 6,027\"></span>.<p>Choice A is incorrect and is the result of adding half of the value of the increase from 2012 to 2013 to the 2013 result. Choice C is incorrect and is the result adding twice the value of the increase from 2012 to 2013 to the 2013 result. Choice D is incorrect and is the result of interpreting the percent increase from 2013 to 2014 as double the percent increase from 2012 to 2013.</p></p>",
    "passage": "<div xmlns=\"http://www.imsglobal.org/xsd/apip/apipv1p0/qtiitem/imsqti_v2p1\" class=\"stimulus_reference \">\n          <div class=\"table_wrapper \">\n            <table class=\"table colsep:1 frame:none rowsep:1\">\n              <tbody>\n                <tr>\n                  <td>\n                    <div class=\"tcp-b917c702-f75b-4edd-bead-4cb6ea09b237\">\n                      <table class=\"table_WithBorder tcp-93de1712-3ee1-4006-aa48-725658c8e947\">\n                        <tbody>\n                          <tr>\n                            <td class=\"tcp-97ab7307-d905-4a53-bfcd-7be9354095b0\">Year</td>\n                            <td class=\"tcp-d856edd8-4049-4ef6-88bb-7b7a911a141c\">Subscriptions<br>\n\t\tsold</td>\n                          </tr>\n                          <tr>\n                            <td>2012</td>\n                            <td class=\"tcp-d90846ae-d4a8-4165-88e2-c1804593b70f\">5,600</td>\n                          </tr>\n                          <tr>\n                            <td>2013</td>\n                            <td class=\"tcp-862f35d2-d89e-46c6-b8ca-9badd4c347e7\">5,880</td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">6,020</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">6,027</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">6,440</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">6,468</p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-0231050d",
    "originalId": "0231050d",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p><img src=\"data:image/png;base64,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\" alt=\"The figure presents a line graph. The horizontal axis is labeled &ldquo;Year,&rdquo; and the years 2003 through 2015 are indicated. The vertical axis is labeled &ldquo;Annual snowfall, in inches,&rdquo; and the numbers 0 through 60, in increments of 10, are indicated. There are 13 points indicated on the graph. The data represented by the 13 points are as follows. Note that all values are approximate.  Year, 2003. Number of inches, 40. Year, 2004. Number of inches, 12. Year, 2005. Number of inches, 13. Year, 2006. Number of inches, 14. Year, 2007. Number of inches, 10. Year, 2008. Number of inches, 5. Year, 2009. Number of inches, 8. Year, 2010. Number of inches, 56. Year, 2011. Number of inches, 10. Year, 2012. Number of inches, 3. Year, 2013. Number of inches, 4. Year, 2014. Number of inches, 32. Year, 2015. Number of inches, 19.\" width=\"217\" height=\"151\">\n        <p class=\"stem_paragraph \">\n          <br>\nThe line graph shows the total amount of snow, in inches, recorded each year in Washington, DC, from 2003 to 2015. If <span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAWCAYAAAAxSueLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAA7klEQVRIS+2S4Q3EIAiFGc+BGMddXMVNOEClylnrtbl//RJTQ8uDR4E7UI4U+CFXCJEykdyNhEAh5iF2C2LpGA4xEQZMJqyNTBq4RXPF+iqWYxjcSfH27pS+Y+2WQ3J84qrYtiuiROgKqBAE4vqWvBrjliuhddz/WC/caN/K9WdXAs+OP0L2d+5iRcIygZbDIT7jVAy/VcJuMW205g7/cGLARL+KuWWYUXKdq6pT8p07Ww5XzK/1jN6Vn8S8WA0ior0oIziZeaV3VUMbY7RgHQOHrgoJKuxHf6Why7G7tk/wc/4rbTlWG/fy8vIAgA+0CKrmayJC3wAAAABJRU5ErkJggg==\" alt=\"p percent\"></span></span> is the percent decrease in the annual snowfall from 2003 to 2007, what is the value of<span class=\"italic\"> p </span>?</p></p>",
    "type": "grid-in",
    "correctAnswer": "75.",
    "explanation": "<p>The correct answer is 75. The percent decrease between two values is found by dividing the difference between the two values by the original value and multiplying by 100. The line graph shows that the annual snowfall in 2003 was 40 inches, and the annual snowfall in 2007 was 10 inches. Therefore, the percent decrease in the annual snowfall from 2003 to 2007 is <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAAuCAYAAADwZJ3MAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAXQ/cXWQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAADgklEQVR4Xu2ajZXCIAzHXcodHMg9XKC7uIqbcARITUOC1AJtvfze63lQKpB/Pui9u0i41+Rut8m9nHOp61/wE/t27unul7v/WbeJsGn/cfcPpK4Z97xDX7pubvKWCTca87xf3M1/eWouWLuGMN5vJjXPhfO+N91kMTTAeP4jeyYa7m0w3m4FCiQJ+O0aSg5xaMIGV6QQNB5cVEB0BG6EIHZD735Nt3l+PteWNcSs0t7ZuhJTZ330zdE65SlUS6vR4PXpucQ7muK6MwE3rqG1s3VnbfQFQ8B4wVCaB0ejtxEQQceTBfx+DaeKQi3daNBolTz9HR2S8doaRRVw4xrW2mRX1nobTS9bBUQB4NfSRb+f0ktAYM4yDTNGF+Km6lIbF1sUUHGINfPU0iuFAj3W24UQUZWeRk9++RUNJokKtDzEIGUBt60Bv1uL/kOAuf7bE5cYgUr96HGyUwVssAbtuwEtwnuB+8mcSdtoLZqn81rD260oGnnjGjTbxDnHiYeI85YMUIMmILBMt302/Gn9W9cgRSz0afOV7kUHKq/l05hwn5Y75x7u6j+uj/bG/QW4gNFh5RqKxpcE5NHP20DVGJ5K0YOlCDJyAUNEs4gEaKRzAWvqcc0YJAiLfSZgGW5AaHNbvSNFTudamaEn4poxqWuZBUzAMnmULFMaRavH0eD5c1F4KmB5TOpK86SxJmCZpYDEcAKqgEItA2h/zZjU5echjlR5iIF7v36JnEBAi8ASTQS0FLofeQ3UbVUWMH/u60NMmCf1mYBlqIAAtLlAiCpgxStCzRgkRCW+zJuAZbgBF8ZjaAICvJbxNlAzBlg40d5/idFSBxA34A0YrnwjI3hc/dzeOKk5R4q43oKAAH3Z1/bzaUycg/TvHYHBw4X5a72xNx9T2GBA4IWDaLl3BDTCqIBr6kFPSraJkTLOoXAtmePMNwYaBsB59/qvtho+pcTDEDx7cEoIYsCcglhr3ol6UqrPh2K4YUjdlYyk1Tutvxej7fI1msf3gtayIws4Z4nDC5jq0Yhcz51FFFBxqJERMdImTQjGGeBt8SDiI1C8omiSqMDIQ4zmRIdlr/dBMQIV7x/5GjH6laUJo6KQokUbr3cj69/pog9Bzx8ZhZqAwDLdjjMoRN9pah8nptITHJ07ESL9bKmTE6LiDMfnxvzXfRuGYRiGYRiGYRiGMYTL5Q+SbaMWZ46nGwAAAABJRU5ErkJggg==\" alt=\"open parenthesis, the fraction with numerator 40 minus 10, and denominator 40, close parenthesis, times 100\"></span>, or 75. It&rsquo;s given that this is equivalent to <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAWCAYAAAAxSueLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAA7klEQVRIS+2S4Q3EIAiFGc+BGMddXMVNOEClylnrtbl//RJTQ8uDR4E7UI4U+CFXCJEykdyNhEAh5iF2C2LpGA4xEQZMJqyNTBq4RXPF+iqWYxjcSfH27pS+Y+2WQ3J84qrYtiuiROgKqBAE4vqWvBrjliuhddz/WC/caN/K9WdXAs+OP0L2d+5iRcIygZbDIT7jVAy/VcJuMW205g7/cGLARL+KuWWYUXKdq6pT8p07Ww5XzK/1jN6Vn8S8WA0ior0oIziZeaV3VUMbY7RgHQOHrgoJKuxHf6Why7G7tk/wc/4rbTlWG/fy8vIAgA+0CKrmayJC3wAAAABJRU5ErkJggg==\" alt=\"p percent\"></span>, so the value of <span class=\"italic\">p</span> is 75.</p>"
  },
  {
    "id": "sat-math-percen-993000da",
    "originalId": "993000da",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">The positive number <math alttext=\"a\"><mi>a</mi></math> is <math alttext=\"230 percent sign\"><mrow><mn>230</mn></mrow><mo>%</mo></math> of the number <math alttext=\"b\"><mi>b</mi></math>, and <math alttext=\"a\"><mi>a</mi></math> is <math alttext=\"60 percent sign\"><mrow><mn>60</mn></mrow><mo>%</mo></math> of the number <math alttext=\"c\"><mi>c</mi></math>. If <math alttext=\"c\"><mi>c</mi></math> is <math alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> of <math alttext=\"b\"><mi>b</mi></math>, which of the following is closest to the value of <math alttext=\"p\"><mi>p</mi></math>?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p style=\"text-align: left;\">Choice D is correct. It's given that <math alttext=\"a\"><mi>a</mi></math> is <math alttext=\"230 percent sign\"><mn>230</mn><mo>%</mo></math> of <math alttext=\"b\"><mi>b</mi></math>. It follows that <math alttext=\"a equals StartFraction 230 Over 100 EndFraction b\"><mi>a</mi><mo>=</mo><mfrac><mn>230</mn><mn>100</mn></mfrac><mi>b</mi></math>. It's also given that <math alttext=\"a\"><mi>a</mi></math> is <math alttext=\"60 percent sign\"><mn>60</mn><mo>%</mo></math> of <math alttext=\"c\"><mi>c</mi></math>. It follows that <math alttext=\"a equals StartFraction 60 Over 100 EndFraction c\"><mi>a</mi><mo>=</mo><mfrac><mn>60</mn><mn>100</mn></mfrac><mi>c</mi></math>. Since <math alttext=\"a equals StartFraction 230 Over 100 EndFraction b\"><mi>a</mi><mo>=</mo><mfrac><mn>230</mn><mn>100</mn></mfrac><mi>b</mi></math> and <math alttext=\"a equals StartFraction 60 Over 100 EndFraction c\"><mi>a</mi><mo>=</mo><mfrac><mn>60</mn><mn>100</mn></mfrac><mi>c</mi></math>, it follows that <math alttext=\"StartFraction 230 Over 100 EndFraction b equals StartFraction 60 Over 100 EndFraction c\"><mfrac><mn>230</mn><mn>100</mn></mfrac><mi>b</mi><mo>=</mo><mfrac><mn>60</mn><mn>100</mn></mfrac><mi>c</mi></math>. Multiplying each side of this equation by <math alttext=\"StartFraction 100 Over 60 EndFraction\"><mfrac><mn>100</mn><mn>60</mn></mfrac></math> yields <math alttext=\"StartFraction 23 Over 6 EndFraction b equals c\"><mfrac><mn>23</mn><mn>6</mn></mfrac><mi>b</mi><mo>=</mo><mi>c</mi></math>. If <math alttext=\"c\"><mi>c</mi></math> is <math alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> of <math alttext=\"b\"><mi>b</mi></math>, then <math alttext=\"c equals StartFraction p Over 100 EndFraction b\"><mi>c</mi><mo>=</mo><mfrac><mi>p</mi><mn>100</mn></mfrac><mi>b</mi></math>. It follows that <math alttext=\"StartFraction 23 Over 6 EndFraction equals StartFraction p Over 100 EndFraction\"><mrow>\n<mfrac>\n<mn>23</mn>\n<mn>6</mn>\n</mfrac>\n<mo>=</mo>\n<mrow>\n<mfrac>\n<mi>p</mi>\n<mn>100</mn>\n</mfrac>\n</mrow>\n</mrow></math>. Multiplying each side of this equation by <math alttext=\"100\"><mn>100</mn></math> yields <math alttext=\"StartFraction 2,300 Over 6 EndFraction equals p\"><mfrac><mn>2,300</mn><mn>6</mn></mfrac><mo>=</mo><mi>p</mi></math>. It follows that the value of <math alttext=\"p\"><mi>p</mi></math> is approximately <math alttext=\"383.33\"><mn>383.33</mn></math>. Therefore, of the given choices, <math alttext=\"383\"><mn>383</mn></math> is closest to the value of <math alttext=\"p\"><mi>p</mi></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. This is closest to the value of <math alttext=\"p\"><mi>p</mi></math> if <math alttext=\"b\"><mi>b</mi></math> is <math alttext=\"230 percent sign\"><mn>230</mn><mo>%</mo></math> of <math alttext=\"a\"><mi>a</mi></math>, rather than if <math alttext=\"a\"><mi>a</mi></math> is <math alttext=\"230 percent sign\"><mn>230</mn><mo>%</mo></math> of <math alttext=\"b\"><mi>b</mi></math>, and if <math alttext=\"b\"><mi>b</mi></math> is <math alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> of <math alttext=\"c\"><mi>c</mi></math>, rather than if <math alttext=\"c\"><mi>c</mi></math> is <math alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> of <math alttext=\"b\"><mi>b</mi></math>.</p>\n<p style=\"text-align: left;\">Choice B is incorrect. This is closest to the value of <math alttext=\"p\"><mi>p</mi></math> if <math alttext=\"a\"><mi>a</mi></math> is <math alttext=\"230 percent sign\"><mn>230</mn><mo>%</mo></math> greater than <math alttext=\"b\"><mi>b</mi></math>, rather than <math alttext=\"230 percent sign\"><mn>230</mn><mo>%</mo></math> of <math alttext=\"b\"><mi>b</mi></math>.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. This is closest to the value of <math alttext=\"p\"><mi>p</mi></math> if <math alttext=\"c\"><mi>c</mi></math> is <math alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> greater than <math alttext=\"b\"><mi>b</mi></math>, rather than <math alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> of <math alttext=\"b\"><mi>b</mi></math>.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"138\"><mn>138</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"217\"><mn>217</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"283\"><mn>283</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"383\"><mn>383</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-8bb94668",
    "originalId": "8bb94668",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">The speeds of objects A, B, and C are <math alttext=\"a\"><mi>a</mi></math> meters per second, <math alttext=\"b\"><mi>b</mi></math> meters per second, and <math alttext=\"c\"><mi>c</mi></math> meters per second, respectively. If the speed of object A is <math alttext=\"5,900 percent sign\"><mn>5,900</mn><mo>%</mo></math> of the speed of object C and the speed of object C is <math alttext=\"0.008 percent sign\"><mn>0.008</mn><mo>%</mo></math> of the speed of object B, which expression represents the value of <math alttext=\"a plus b\"><mrow>\n\t<mi>a</mi>\n\t<mo>+</mo>\n\t<mi>b</mi>\n</mrow></math> in terms of <math alttext=\"c\"><mi>c</mi></math>?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p style=\"text-align: left;\">Choice D is correct. It&rsquo;s given that the speeds of objects A, B, and C are <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"a\"><mi>a</mi></math> meters per second, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"b\"><mi>b</mi></math> meters per second, and <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"c\"><mi>c</mi></math> meters per second, respectively. If the speed of object A is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"5,900 percent sign\"><mn>5,900</mn><mo>%</mo></math> of the speed of object C, this means that <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"a equals StartFraction 5,900 Over 100 EndFraction c\"><mi>a</mi><mo>=</mo><mfrac><mn>5,900</mn><mn>100</mn></mfrac><mi>c</mi></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"a equals 59 c\"><mi>a</mi><mo>=</mo><mn>59</mn><mi>c</mi></math>. If the speed of object C is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.008 percent sign\"><mn>0.008</mn><mo>%</mo></math> of the speed of object B, this means that <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"c equals StartFraction 0.008 Over 100 EndFraction b\"><mi>c</mi><mo>=</mo><mfrac><mn>0.008</mn><mn>100</mn></mfrac><mi>b</mi></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"c equals 0.00008 b\"><mi>c</mi><mo>=</mo><mn>0.00008</mn><mi>b</mi></math>. Dividing both sides of this equation by <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.00008\"><mn>0.00008</mn></math> yields <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"StartFraction 1 Over 0.00008 EndFraction c equals b\"><mfrac><mn>1</mn><mn>0.00008</mn></mfrac><mi>c</mi><mo>=</mo><mi>b</mi></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"12,500 c equals b\"><mn>12,500</mn><mi>c</mi><mo>=</mo><mi>b</mi></math>. Since <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"a equals 59 c\"><mi>a</mi><mo>=</mo><mn>59</mn><mi>c</mi></math> and <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"b equals 12,500 c\"><mi>b</mi><mo>=</mo><mn>12,500</mn><mi>c</mi></math>, it follows that <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"a plus b equals 59 c plus 12,500 c\"><mi>a</mi><mo>+</mo><mi>b</mi><mo>=</mo><mn>59</mn><mi>c</mi><mo>+</mo><mn>12,500</mn><mi>c</mi></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"a plus b equals 12,559 c\"><mi>a</mi><mo>+</mo><mi>b</mi><mo>=</mo><mn>12,559</mn><mi>c</mi></math>. Therefore, the expression <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"12,559 c\"><mn>12,559</mn><mi>c</mi></math> represents the value of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"a plus b\"><mi>a</mi><mo>+</mo><mi>b</mi></math> in terms of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"c\"><mi>c</mi></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice B is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice C is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"1,840 c\"><mrow>\n\t<mn>1,840</mn>\n\t<mi>c</mi>\n</mrow></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"5,908 c\"><mrow>\n\t<mn>5,908</mn>\n\t<mi>c</mi>\n</mrow></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"6,025 c\"><mrow>\n\t<mn>6,025</mn>\n\t<mi>c</mi>\n</mrow></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"12,559 c\"><mrow>\n\t<mn>12,559</mn>\n\t<mi>c</mi>\n</mrow></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-1fbd3b67",
    "originalId": "1fbd3b67",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">The number <math alttext=\"a\"><mi>a</mi></math> is <math alttext=\"190 percent sign\"><mrow><mn>190</mn></mrow><mo>%</mo></math> greater than the number <math alttext=\"b\"><mi>b</mi></math>. The number <math alttext=\"b\"><mi>b</mi></math> is <math alttext=\"80 percent sign\"><mrow><mn>80</mn></mrow><mo>%</mo></math> less than <math alttext=\"24\"><mrow><mn>24</mn></mrow></math>. What is the value of <math alttext=\"a\"><mi>a</mi></math>?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p style=\"text-align: left;\">Choice B is correct. It's given that the number <math alttext=\"b\"><mi>b</mi></math> is <math alttext=\"80 percent sign\"><mn>80</mn><mo>%</mo></math> less than <math alttext=\"24\"><mn>24</mn></math>. It follows that <math alttext=\"b\"><mi>b</mi></math> is equal to <math alttext=\"24\"><mn>24</mn></math> minus <math alttext=\"80 percent sign\"><mn>80</mn><mo>%</mo></math> of <math alttext=\"24\"><mn>24</mn></math>, which can be written as <math alttext=\"b equals 24 minus left parenthesis StartFraction 80 Over 100 EndFraction right parenthesis 24\"><mi>b</mi><mo>=</mo><mn>24</mn><mo>-</mo><mfenced><mfrac><mn>80</mn><mn>100</mn></mfrac></mfenced><mn>24</mn></math>. This is equivalent to <math alttext=\"b equals 24 minus 0.8 left parenthesis 24 right parenthesis\"><mi>b</mi><mo>=</mo><mn>24</mn><mo>-</mo><mn>0.8</mn><mfenced><mn>24</mn></mfenced></math>, or <math alttext=\"b equals 4.8\"><mrow>\n\t<mi>b</mi>\n\t<mo>=</mo>\n\t<mn>4.8</mn>\n</mrow></math>. It's also given that the number <math alttext=\"a\"><mi>a</mi></math> is <math alttext=\"190 percent sign\"><mn>190</mn><mo>%</mo></math> greater than the number <math alttext=\"b\"><mi>b</mi></math>. It follows that <math alttext=\"a\"><mi>a</mi></math> is equal to <math alttext=\"b\"><mi>b</mi></math> plus <math alttext=\"190 percent sign\"><mn>190</mn><mo>%</mo></math> of <math alttext=\"b\"><mi>b</mi></math>. Since <math alttext=\"b equals 4.8\"><mrow>\n\t<mi>b</mi>\n\t<mo>=</mo>\n\t<mn>4.8</mn>\n</mrow></math>, this can be written as <math alttext=\"a equals 4.8 plus left parenthesis StartFraction 190 Over 100 EndFraction right parenthesis 4.8\"><mi>a</mi><mo>=</mo><mn>4.8</mn><mo>+</mo><mfenced><mfrac><mn>190</mn><mn>100</mn></mfrac></mfenced><mn>4.8</mn></math>. This is equivalent to <math alttext=\"a equals 4.8 plus 1.9 left parenthesis 4.8 right parenthesis\"><mi>a</mi><mo>=</mo><mn>4.8</mn><mo>+</mo><mn>1.9</mn><mfenced><mn>4.8</mn></mfenced></math>, or <math alttext=\"a equals 13.92\"><mrow>\n\t<mi>a</mi>\n\t<mo>=</mo>\n\t<mn>13.92</mn>\n</mrow></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. This would be the value of <math alttext=\"a\"><mi>a</mi></math> if <math alttext=\"a\"><mi>a</mi></math> were <math alttext=\"190 percent sign\"><mn>190</mn><mo>%</mo></math> of <math alttext=\"b\"><mi>b</mi></math>, not <math alttext=\"190 percent sign\"><mn>190</mn><mo>%</mo></math> greater than <math alttext=\"b\"><mi>b</mi></math>.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. This is <math alttext=\"left parenthesis 190 minus 80 right parenthesis percent sign\"><mfenced><mrow><mn>190</mn><mo>-</mo><mn>80</mn></mrow></mfenced><mo>%</mo></math> of <math alttext=\"24\"><mn>24</mn></math>.</p>\n<p style=\"text-align: left;\">Choice D is incorrect. This would be the value of <math alttext=\"a\"><mi>a</mi></math> if <math alttext=\"b\"><mi>b</mi></math> were <math alttext=\"80 percent sign\"><mn>80</mn><mo>%</mo></math> of <math alttext=\"24\"><mn>24</mn></math>, not <math alttext=\"80 percent sign\"><mn>80</mn><mo>%</mo></math> less than <math alttext=\"24\"><mn>24</mn></math>, and <math alttext=\"a\"><mi>a</mi></math> were <math alttext=\"190 percent sign\"><mn>190</mn><mo>%</mo></math> of <math alttext=\"b\"><mi>b</mi></math>, not <math alttext=\"190 percent sign\"><mn>190</mn><mo>%</mo></math> greater than <math alttext=\"b\"><mi>b</mi></math>.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"9.12\"><mn>9.12</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"13.92\"><mn>13.92</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"26.40\"><mn>26.40</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"36.48\"><mn>36.48</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-e635aede",
    "originalId": "e635aede",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">In <math alttext=\"2008\"><mn>2008</mn></math>, Zinah earned <math alttext=\"14 percent sign\"><mn>14</mn><mo>%</mo></math> more than in <math alttext=\"2007\"><mn>2007</mn></math>, and in <math alttext=\"2009\"><mn>2009</mn></math> Zinah earned <math alttext=\"4 percent sign\"><mn>4</mn><mo>%</mo></math> more than in <math alttext=\"2008\"><mn>2008</mn></math>. If Zinah earned <math alttext=\"y\"><mi>y</mi></math> times as much in <math alttext=\"2009\"><mn>2009</mn></math> as in <math alttext=\"2007\"><mn>2007</mn></math>, what is the value of <math alttext=\"y\"><mi>y</mi></math>?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p style=\"text-align: left;\">Choice D is correct. It&rsquo;s given that in <math alttext=\"2008\"><mn>2008</mn></math> Zinah earned <math alttext=\"14 percent sign\"><mn>14</mn><mo>%</mo></math> more than in <math alttext=\"2007\"><mn>2007</mn></math>. Let <math alttext=\"h\"><mi>h</mi></math> represent the amount Zinah earned in <math alttext=\"2007\"><mn>2007</mn></math> and let <math alttext=\"j\"><mi>j</mi></math> represent the amount that Zinah earned in <math alttext=\"2008\"><mn>2008</mn></math>. This situation can be represented by the equation <math alttext=\"j equals left parenthesis 1 plus StartFraction 14 Over 100 EndFraction right parenthesis h\"><mi>j</mi><mo>=</mo><mfenced><mrow><mn>1</mn><mo>+</mo><mfrac><mn>14</mn><mn>100</mn></mfrac></mrow></mfenced><mi>h</mi></math>, or <math alttext=\"j equals 1.14 h\"><mrow>\n\t<mi>j</mi>\n\t<mo>=</mo>\n\t<mrow>\n\t\t<mn>1.14</mn>\n\t\t<mi>h</mi>\n\t</mrow>\n</mrow></math>. It&rsquo;s also given that in <math alttext=\"2009\"><mn>2009</mn></math> Zinah earned <math alttext=\"4 percent sign\"><mn>4</mn><mo>%</mo></math> more than in <math alttext=\"2008\"><mn>2008</mn></math>. Let <math alttext=\"k\"><mi>k</mi></math> represent the amount Zinah earned in <math alttext=\"2009\"><mn>2009</mn></math>. This situation can be represented by the equation <math alttext=\"k equals left parenthesis 1 plus StartFraction 4 Over 100 EndFraction right parenthesis j\"><mi>k</mi><mo>=</mo><mfenced><mrow><mn>1</mn><mo>+</mo><mfrac><mn>4</mn><mn>100</mn></mfrac></mrow></mfenced><mi>j</mi></math>, or <math alttext=\"k equals 1.04 j\"><mi>k</mi><mo>=</mo><mn>1.04</mn><mi>j</mi></math>. Substituting <math alttext=\"1.14 h\"><mrow>\n\t<mn>1.14</mn>\n\t<mi>h</mi>\n</mrow></math> for <math alttext=\"j\"><mi>j</mi></math> in the equation <math alttext=\"k equals 1.04 j\"><mi>k</mi><mo>=</mo><mn>1.04</mn><mi>j</mi></math> yields <math alttext=\"k equals left parenthesis 1.04 right parenthesis left parenthesis 1.14 h right parenthesis\"><mi>k</mi><mo>=</mo><mfenced><mn>1.04</mn></mfenced><mfenced><mrow><mn>1.14</mn><mi>h</mi></mrow></mfenced></math>, or <math alttext=\"k equals 1.1856 h\"><mrow>\n\t<mi>k</mi>\n\t<mo>=</mo>\n\t<mrow>\n\t\t<mn>1.1856</mn>\n\t\t<mi>h</mi>\n\t</mrow>\n</mrow></math>. If Zinah earned <math alttext=\"y\"><mi>y</mi></math> times as much in <math alttext=\"2009\"><mn>2009</mn></math> as in <math alttext=\"2007\"><mn>2007</mn></math>, then the value of <math alttext=\"y\"><mi>y</mi></math> is <math alttext=\"1.1856\"><mn>1.1856</mn></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice B is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice C is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"0.5600\"><mn>0.5600</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"1.0056\"><mn>1.0056</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"1.1800\"><mn>1.1800</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"1.1856\"><mn>1.1856</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-67c0200a",
    "originalId": "67c0200a",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">The number <math alttext=\"a\"><mi>a</mi></math> is <math alttext=\"70 percent sign\"><mrow><mn>70</mn></mrow><mo>%</mo></math> less than the positive number <math alttext=\"b\"><mi>b</mi></math>. The number <math alttext=\"c\"><mi>c</mi></math> is <math alttext=\"80 percent sign\"><mrow><mn>80</mn></mrow><mo>%</mo></math> greater than <math alttext=\"a\"><mi>a</mi></math>. The number <math alttext=\"c\"><mi>c</mi></math> is how many times <math alttext=\"b\"><mi>b</mi></math>?</p>",
    "type": "grid-in",
    "correctAnswer": ".54, 27/50",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math alttext=\".54\"><mo>.54</mo></math>. It's given that the number <math alttext=\"a\"><mi>a</mi></math> is <math alttext=\"70 percent sign\"><mn>70</mn><mo>%</mo></math> less than the positive number <math alttext=\"b\"><mi>b</mi></math>. Therefore, <math alttext=\"a equals left parenthesis 1 minus StartFraction 70 Over 100 EndFraction right parenthesis b\"><mi>a</mi><mo>=</mo><mfenced><mrow><mn>1</mn><mo>-</mo><mfrac><mn>70</mn><mn>100</mn></mfrac></mrow></mfenced><mi>b</mi></math>, which is equivalent to <math alttext=\"a equals left parenthesis 1 minus 0.70 right parenthesis b\"><mi>a</mi><mo>=</mo><mfenced><mrow><mn>1</mn><mo>-</mo><mn>0.70</mn></mrow></mfenced><mi>b</mi></math>, or <math alttext=\"a equals 0.30 b\"><mi>a</mi><mo>=</mo><mn>0.30</mn><mi>b</mi></math>. It's also given that the number <math alttext=\"c\"><mi>c</mi></math> is <math alttext=\"80 percent sign\"><mn>80</mn><mo>%</mo></math> greater than <math alttext=\"a\"><mi>a</mi></math>. Therefore, <math alttext=\"c equals left parenthesis 1 plus StartFraction 80 Over 100 EndFraction right parenthesis a\"><mi>c</mi><mo>=</mo><mfenced><mrow><mn>1</mn><mo>+</mo><mfrac><mn>80</mn><mn>100</mn></mfrac></mrow></mfenced><mi>a</mi></math>, which is equivalent to <math alttext=\"c equals left parenthesis 1 plus 0.80 right parenthesis a\"><mi>c</mi><mo>=</mo><mfenced><mrow><mn>1</mn><mo>+</mo><mn>0.80</mn></mrow></mfenced><mi>a</mi></math>, or <math alttext=\"c equals 1.80 a\"><mi>c</mi><mo>=</mo><mn>1.80</mn><mi>a</mi></math>. Since <math alttext=\"a equals 0.30 b\"><mrow>\n<mi>a</mi>\n<mo>=</mo>\n<mrow>\n<mn>0.30</mn>\n<mi>b</mi>\n</mrow>\n</mrow></math>, substituting <math alttext=\"0.30 b\"><mrow>\n<mn>0.30</mn>\n<mi>b</mi>\n</mrow></math> for <math alttext=\"a\"><mi>a</mi></math> in the equation <math alttext=\"c equals 1.80 a\"><mrow>\n<mi>c</mi>\n<mo>=</mo>\n<mrow>\n<mn>1.80</mn>\n<mi>a</mi>\n</mrow>\n</mrow></math> yields <math alttext=\"c equals 1.80 left parenthesis 0.30 b right parenthesis\"><mi>c</mi><mo>=</mo><mn>1.80</mn><mfenced><mrow><mn>0.30</mn><mi>b</mi></mrow></mfenced></math>, or <math alttext=\"c equals 0.54 b\"><mi>c</mi><mo>=</mo><mn>0.54</mn><mi>b</mi></math>. Thus, <math alttext=\"c\"><mi>c</mi></math> is <math alttext=\"0.54\"><mn>0.54</mn></math> times <math alttext=\"b\"><mi>b</mi></math>. Note that .54 and 27/50 are examples of ways to enter a correct answer.</p>"
  },
  {
    "id": "sat-math-percen-40e7a1a9",
    "originalId": "40e7a1a9",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\"><math alttext=\"210\"><mn>210</mn></math> is <math alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> greater than <math alttext=\"30\"><mn>30</mn></math>. What is the value of <math alttext=\"p\"><mi>p</mi></math>?</p>",
    "type": "grid-in",
    "correctAnswer": "600",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math alttext=\"600\"><mn>600</mn></math>. It&rsquo;s given that <math alttext=\"210\"><mn>210</mn></math> is <math alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> greater than <math alttext=\"30\"><mn>30</mn></math>. It follows that <math alttext=\"210 equals left parenthesis 1 plus StartFraction p Over 100 EndFraction right parenthesis left parenthesis 30 right parenthesis\"><mn>210</mn><mo>=</mo><mfenced><mrow><mn>1</mn><mo>+</mo><mfrac><mi>p</mi><mn>100</mn></mfrac></mrow></mfenced><mfenced><mn>30</mn></mfenced></math>. Dividing both sides of this equation by <math alttext=\"30\"><mn>30</mn></math> yields <math alttext=\"7 equals 1 plus StartFraction p Over 100 EndFraction\"><mn>7</mn><mo>=</mo><mn>1</mn><mo>+</mo><mfrac><mi>p</mi><mn>100</mn></mfrac></math>. Subtracting <math alttext=\"1\"><mn>1</mn></math> from both sides of this equation yields <math alttext=\"6 equals StartFraction p Over 100 EndFraction\"><mn>6</mn><mo>=</mo><mfrac><mi>p</mi><mn>100</mn></mfrac></math>. Multiplying both sides of this equation by <math alttext=\"100\"><mn>100</mn></math> yields <math alttext=\"p equals 600\"><mrow>\n\t<mi>p</mi>\n\t<mo>=</mo>\n\t<mn>600</mn>\n</mrow></math>. Therefore, the value of <math alttext=\"p\"><mi>p</mi></math> is <math alttext=\"600\"><mn>600</mn></math>.</p>"
  },
  {
    "id": "sat-math-percen-699af7b3",
    "originalId": "699af7b3",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">The weight of sample A is <math alttext=\"468 percent sign\"><mn>468</mn><mo>%</mo></math> of the weight of sample B, and the weight of sample A is <math alttext=\"0.780 percent sign\"><mn>0.780</mn><mo>%</mo></math> of the weight of sample C. If the weight of sample C is <math alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> of the weight of sample B, what is the value of <math alttext=\"p\"><mi>p</mi></math>?</p>",
    "type": "grid-in",
    "correctAnswer": "60000",
    "explanation": "<p>The correct answer is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"60,000\"><mn>60,000</mn></math>. It&rsquo;s given that the weight of sample A is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"468 percent sign\"><mn>468</mn><mo>%</mo></math> of the weight of sample B and <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.780 percent sign\"><mn>0.780</mn><mo>%</mo></math> of the weight of sample C. Let the weight of sample B be <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"b\"><mi>b</mi></math> and the weight of sample C be <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"c\"><mi>c</mi></math>. Then, the weight of sample A is equivalent to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"StartFraction 468 b Over 100 EndFraction\"><mfrac><mrow><mn>468</mn><mi>b</mi></mrow><mn>100</mn></mfrac></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"4.68 b\"><mn>4.68</mn><mi>b</mi></math>, and also equivalent to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"StartFraction 0 period 780 c Over 100 EndFraction\"><mfrac><mrow><mn>0</mn><mo>.</mo><mn>780</mn><mi>c</mi></mrow><mn>100</mn></mfrac></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.00780 c\"><mn>0.00780</mn><mi>c</mi></math>. Setting these expressions equal to each other yields <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"4.68 b equals 0.00780 c\"><mn>4.68</mn><mi>b</mi><mo>=</mo><mn>0.00780</mn><mi>c</mi></math>. Dividing both sides of this equation by <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.00780\"><mn>0.00780</mn></math> yields <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"StartFraction 4.68 b Over 0.00780 EndFraction equals c\"><mfrac><mrow><mn>4.68</mn><mi>b</mi></mrow><mn>0.00780</mn></mfrac><mo>=</mo><mi>c</mi></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"c equals 600 b\"><mi>c</mi><mo>=</mo><mn>600</mn><mi>b</mi></math>. If the weight of sample C is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> of the weight of sample B, then <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"c equals StartFraction p Over 100 EndFraction b\"><mi>c</mi><mo>=</mo><mfrac><mrow><mi>p</mi><mo>&#160;</mo></mrow><mn>100</mn></mfrac><mi>b</mi></math>. Since <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"c equals 600 b\"><mi>c</mi><mo>=</mo><mn>600</mn><mi>b</mi></math> and <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"c equals StartFraction p Over 100 EndFraction b\"><mi>c</mi><mo>=</mo><mfrac><mrow><mi>p</mi><mo>&#160;</mo></mrow><mn>100</mn></mfrac><mi>b</mi></math>, it follows that <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"600 b equals StartFraction p Over 100 EndFraction b\"><mn>600</mn><mi>b</mi><mo>=</mo><mfrac><mrow><mi>p</mi><mo>&#160;</mo></mrow><mn>100</mn></mfrac><mi>b</mi></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"600 equals StartFraction p Over 100 EndFraction\"><mn>600</mn><mo>=</mo><mfrac><mi>p</mi><mn>100</mn></mfrac></math>. Multiplying both sides of this equation by <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"100\"><mn>100</mn></math> yields <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"60,000 equals p\"><mn>60,000</mn><mo>=</mo><mi>p</mi></math>. Therefore, the value of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"p\"><mi>p</mi></math> is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"60,000\"><mn>60,000</mn></math>.</p>"
  },
  {
    "id": "sat-math-percen-58ba7239",
    "originalId": "58ba7239",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">The number <math alttext=\"a\"><mi>a</mi></math> is <math alttext=\"55 percent sign\"><mrow><mn>55</mn></mrow><mo>%</mo></math> less than the number <math alttext=\"b\"><mi>b</mi></math>. The number <math alttext=\"b\"><mi>b</mi></math> is <math alttext=\"320 percent sign\"><mrow><mn>320</mn></mrow><mo>%</mo></math> greater than <math alttext=\"160\"><mn>160</mn></math>. What is the value of <math alttext=\"a\"><mi>a</mi></math>?</p>",
    "type": "grid-in",
    "correctAnswer": "1512/5, 302.4",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"302.4\"><mn>302.4</mn></math>. It&rsquo;s given that the number <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"b\"><mi>b</mi></math> is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"320 percent sign\"><mn>320</mn><mo>%</mo></math> greater than <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"160\"><mn>160</mn></math>. It follows that <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"b\"><mi>b</mi></math> is equal to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"160\"><mn>160</mn></math> plus <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"320 percent sign\"><mn>320</mn><mo>%</mo></math> of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"160\"><mn>160</mn></math>, which can be written as <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"b equals 160 plus 3.2 left parenthesis 160 right parenthesis\"><mi>b</mi><mo>=</mo><mn>160</mn><mo>+</mo><mn>3.2</mn><mo>(</mo><mn>160</mn><mo>)</mo></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"b equals 672\"><mi>b</mi><mo>=</mo><mn>672</mn></math>. It&rsquo;s also given that the number <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"a\"><mi>a</mi></math> is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"55 percent sign\"><mn>55</mn><mo>%</mo></math> less than the number <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"b\"><mi>b</mi></math>. It follows that <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"a\"><mi>a</mi></math> is equal to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"b\"><mi>b</mi></math> minus <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"55 percent sign\"><mn>55</mn><mo>%</mo></math> of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"b\"><mi>b</mi></math>, which can be written as <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"a equals b minus 0.55 b\"><mi>a</mi><mo>=</mo><mi>b</mi><mo>-</mo><mn>0.55</mn><mi>b</mi></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"a equals 0.45 b\"><mi>a</mi><mo>=</mo><mn>0.45</mn><mi>b</mi></math>. Substituting <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"672\"><mn>672</mn></math> for <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"b\"><mi>b</mi></math> in this equation yields <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"a equals 0.45 left parenthesis 672 right parenthesis\"><mi>a</mi><mo>=</mo><mn>0.45</mn><mo>(</mo><mn>672</mn><mo>)</mo></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"a equals 302.4\"><mi>a</mi><mo>=</mo><mn>302.4</mn></math>.</p>"
  },
  {
    "id": "sat-math-percen-5267c3c7",
    "originalId": "5267c3c7",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">The result of increasing the quantity <math alttext=\"x\"><mi>x</mi></math> by <math alttext=\"400 percent sign\"><mn>400</mn>\n<mo>%</mo></math> is <math alttext=\"60\"><mn>60</mn></math>. What is the value of <math alttext=\"x\"><mi>x</mi></math>?</p>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p style=\"text-align: left;\">Choice A is correct. It's given that the result of increasing the quantity <math alttext=\"x\"><mi>x</mi></math> by <math alttext=\"400 percent sign\"><mn>400</mn><mo>%</mo></math> is <math alttext=\"60\"><mn>60</mn></math>. This can be written as <math alttext=\"x plus left parenthesis StartFraction 400 Over 100 EndFraction right parenthesis x equals 60\"><mi>x</mi><mo>+</mo><mfenced><mfrac><mn>400</mn><mn>100</mn></mfrac></mfenced><mi>x</mi><mo>=</mo><mn>60</mn></math>, which is equivalent to <math alttext=\"x plus 4 x equals 60\"><mi>x</mi><mo>+</mo><mn>4</mn><mi>x</mi><mo>=</mo><mn>60</mn></math>, or <math alttext=\"5 x equals 60\"><mrow>\n\t<mrow>\n\t\t<mn>5</mn>\n\t\t<mi>x</mi>\n\t</mrow>\n\t<mo>=</mo>\n\t<mn>60</mn>\n</mrow></math>. Dividing each side of this equation by <math alttext=\"5\"><mn>5</mn></math> yields <math alttext=\"x equals 12\"><mrow>\n\t<mi>x</mi>\n\t<mo>=</mo>\n\t<mn>12</mn>\n</mrow></math>. Therefore, the value of <math alttext=\"x\"><mi>x</mi></math> is <math alttext=\"12\"><mn>12</mn></math>.</p>\n<p style=\"text-align: left;\">Choice B is incorrect. The result of increasing the quantity <math alttext=\"15\"><mn>15</mn></math> by <math alttext=\"400 percent sign\"><mn>400</mn><mo>%</mo></math> is <math alttext=\"75\"><mn>75</mn></math>, not <math alttext=\"60\"><mn>60</mn></math>.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. The result of increasing the quantity <math alttext=\"240\"><mn>240</mn></math> by <math alttext=\"400 percent sign\"><mn>400</mn><mo>%</mo></math> is <math alttext=\"1,200\"><mn>1,200</mn></math>, not <math alttext=\"60\"><mn>60</mn></math>.</p>\n<p style=\"text-align: left;\">Choice D is incorrect. The result of increasing the quantity <math alttext=\"340\"><mn>340</mn></math> by <math alttext=\"400 percent sign\"><mn>400</mn><mo>%</mo></math> is <math alttext=\"1,700\"><mn>1,700</mn></math>, not <math alttext=\"60\"><mn>60</mn></math>.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"12\"><mn>12</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"15\"><mn>15</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"240\"><mn>240</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"340\"><mn>340</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-20845d36",
    "originalId": "20845d36",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">The number <math alttext=\"a\"><mi>a</mi></math> is <math alttext=\"70 percent sign\"><mrow><mn>70</mn></mrow><mo>%</mo></math> less than the positive number <math alttext=\"b\"><mi>b</mi></math>. The number <math alttext=\"c\"><mi>c</mi></math> is <math alttext=\"60 percent sign\"><mrow><mn>60</mn></mrow><mo>%</mo></math> greater than <math alttext=\"a\"><mi>a</mi></math>. The number <math alttext=\"c\"><mi>c</mi></math> is how many times <math alttext=\"b\"><mi>b</mi></math>?</p>",
    "type": "grid-in",
    "correctAnswer": ".48, 12/25",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math alttext=\".48\"><mo>.48</mo></math>. It's given that the number <math alttext=\"a\"><mi>a</mi></math> is <math alttext=\"70 percent sign\"><mn>70</mn><mo>%</mo></math> less than the positive number <math alttext=\"b\"><mi>b</mi></math>. Therefore, <math alttext=\"a equals left parenthesis 1 minus StartFraction 70 Over 100 EndFraction right parenthesis b\"><mi>a</mi><mo>=</mo><mfenced><mrow><mn>1</mn><mo>-</mo><mfrac><mn>70</mn><mn>100</mn></mfrac></mrow></mfenced><mi>b</mi></math>, which is equivalent to <math alttext=\"a equals left parenthesis 1 minus 0.70 right parenthesis b\"><mi>a</mi><mo>=</mo><mfenced><mrow><mn>1</mn><mo>-</mo><mn>0.70</mn></mrow></mfenced><mi>b</mi></math>, or <math alttext=\"a equals 0.30 b\"><mi>a</mi><mo>=</mo><mn>0.30</mn><mi>b</mi></math>. It's also given that the number <math alttext=\"c\"><mi>c</mi></math> is <math alttext=\"60 percent sign\"><mn>60</mn><mo>%</mo></math> greater than <math alttext=\"a\"><mi>a</mi></math>. Therefore, <math alttext=\"c equals left parenthesis 1 plus StartFraction 60 Over 100 EndFraction right parenthesis a\"><mi>c</mi><mo>=</mo><mfenced><mrow><mn>1</mn><mo>+</mo><mfrac><mn>60</mn><mn>100</mn></mfrac></mrow></mfenced><mi>a</mi></math>, which is equivalent to <math alttext=\"c equals left parenthesis 1 plus 0.60 right parenthesis a\"><mi>c</mi><mo>=</mo><mfenced><mrow><mn>1</mn><mo>+</mo><mn>0.60</mn></mrow></mfenced><mi>a</mi></math>, or <math alttext=\"c equals 1.60 a\"><mi>c</mi><mo>=</mo><mn>1.60</mn><mi>a</mi></math>. Since <math alttext=\"a equals 0.30 b\"><mrow>\n<mi>a</mi>\n<mo>=</mo>\n<mrow>\n<mn>0.30</mn>\n<mi>b</mi>\n</mrow>\n</mrow></math>, substituting <math alttext=\"0.30 b\"><mrow>\n<mn>0.30</mn>\n<mi>b</mi>\n</mrow></math> for <math alttext=\"a\"><mi>a</mi></math> in the equation <math alttext=\"c equals 1.60 a\"><mrow>\n<mi>c</mi>\n<mo>=</mo>\n<mrow>\n<mn>1.60</mn>\n<mi>a</mi>\n</mrow>\n</mrow></math> yields <math alttext=\"c equals 1.60 left parenthesis 0.30 b right parenthesis\"><mi>c</mi><mo>=</mo><mn>1.60</mn><mfenced><mrow><mn>0.30</mn><mi>b</mi></mrow></mfenced></math>, or <math alttext=\"c equals 0.48 b\"><mi>c</mi><mo>=</mo><mn>0.48</mn><mi>b</mi></math>. Thus, <math alttext=\"c\"><mi>c</mi></math> is <math alttext=\"0.48\"><mn>0.48</mn></math> times <math alttext=\"b\"><mi>b</mi></math>. Note that .48 and 12/25 are examples of ways to enter a correct answer.</p>"
  },
  {
    "id": "sat-math-percen-86684ce9",
    "originalId": "86684ce9",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">The result of increasing the quantity <math alttext=\"x\"><mi>x</mi></math> by <math alttext=\"1,800 percent sign\"><mrow><mn>1,800</mn></mrow><mo>%</mo></math> is <math alttext=\"684\"><mn>684</mn></math>. What is the value of <math alttext=\"x\"><mi>x</mi></math>?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p style=\"text-align: left;\">Choice D is correct. It&rsquo;s given that the result of increasing the quantity <math alttext=\"x\"><mi>x</mi></math> by <math alttext=\"1,800 percent sign\"><mn>1,800</mn><mo>%</mo></math> is <math alttext=\"684\"><mn>684</mn></math>. It follows that <math alttext=\"x plus left parenthesis StartFraction 1,800 Over 100 EndFraction right parenthesis x equals 684\"><mi>x</mi><mo>+</mo><mfenced><mfrac><mn>1,800</mn><mn>100</mn></mfrac></mfenced><mi>x</mi><mo>=</mo><mn>684</mn></math>, which is equivalent to <math alttext=\"x plus 18 x equals 684\"><mi>x</mi><mo>+</mo><mn>18</mn><mi>x</mi><mo>=</mo><mn>684</mn></math>, or <math alttext=\"19 x equals 684\"><mn>19</mn><mi>x</mi><mo>=</mo><mn>684</mn></math>. Dividing each side of this equation by <math alttext=\"19\"><mn>19</mn></math> yields <math alttext=\"x equals 36\"><mrow>\n<mi>x</mi>\n<mo>=</mo>\n<mn>36</mn>\n</mrow></math>. Therefore, the value of <math alttext=\"x\"><mi>x</mi></math> is <math alttext=\"36\"><mn>36</mn></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. The result of increasing the quantity <math alttext=\"12,996\"><mn>12,996</mn></math> by <math alttext=\"1,800 percent sign\"><mn>1,800</mn><mo>%</mo></math> is <math alttext=\"246,924\"><mn>246,924</mn></math>, not <math alttext=\"684\"><mn>684</mn></math>.</p>\n<p style=\"text-align: left;\">Choice B is incorrect. The result of increasing the quantity <math alttext=\"12,312\"><mn>12,312</mn></math> by <math alttext=\"1,800 percent sign\"><mn>1,800</mn><mo>%</mo></math> is <math alttext=\"233,928\"><mn>233,928</mn></math>, not <math alttext=\"684\"><mn>684</mn></math>.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. The result of increasing the quantity <math alttext=\"38\"><mn>38</mn></math> by <math alttext=\"1,800 percent sign\"><mn>1,800</mn><mo>%</mo></math> is <math alttext=\"722\"><mn>722</mn></math>, not <math alttext=\"684\"><mn>684</mn></math>.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"12,996\"><mn>12,996</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"12,312\"><mn>12,312</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"38\"><mn>38</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"36\"><mn>36</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-623dbebb",
    "originalId": "623dbebb",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">A reseller buys certain books for a purchase price of <math alttext=\"5.00\"><mn>5.00</mn></math> dollars each and then marks them each for sale at a consumer price that is <math alttext=\"270 percent sign\"><mn>270</mn><mo>%</mo></math> of the purchase price. After <math alttext=\"4\"><mn>4</mn></math> months, any remaining books not yet sold are marked at a discounted price that is <math alttext=\"70 percent sign\"><mn>70</mn><mo>%</mo></math> off the consumer price. What is the discounted price of each of the remaining books, in dollars?</p>",
    "type": "grid-in",
    "correctAnswer": "4.05, 81/20",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"4.05\"><mn>4.05</mn></math>. It's given that the purchase price for certain books is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"5.00\"><mn>5.00</mn></math> dollars each. It's also given that each book is marked for sale at a consumer price that is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"270 percent sign\"><mn>270</mn><mo>%</mo></math> of the purchase price. Since the consumer price is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"270 percent sign\"><mn>270</mn><mo>%</mo></math> of the purchase price of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"5.00\"><mn>5.00</mn></math> dollars, it follows that the consumer price is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"left parenthesis 2.7 right parenthesis left parenthesis 5.00 right parenthesis\"><mo>(</mo><mn>2.7</mn><mo>)</mo><mo>(</mo><mn>5.00</mn><mo>)</mo></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"13.50\"><mn>13.50</mn></math>, dollars. It's given that after <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"4\"><mn>4</mn></math> months, any remaining books are discounted at <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"70 percent sign\"><mn>70</mn><mo>%</mo></math> off the consumer price. Thus, the discount amount is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"left parenthesis 0.7 right parenthesis left parenthesis 13.50 right parenthesis\"><mo>(</mo><mn>0.7</mn><mo>)</mo><mo>(</mo><mn>13.50</mn><mo>)</mo></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"9.45\"><mn>9.45</mn></math>, dollars. Subtracting the discount amount from the consumer price gives the discounted price of each of the remaining books: <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"13.50 minus 9.45 equals 4.05\"><mn>13.50</mn><mo>-</mo><mn>9.45</mn><mo>=</mo><mn>4.05</mn></math>. Note that 4.05 and 81/20 are examples of ways to enter a correct answer.</p>"
  },
  {
    "id": "sat-math-percen-2afd3cec",
    "originalId": "2afd3cec",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">After <math alttext=\"20 percent sign\"><mn>20</mn><mo>%</mo></math> of the original number of marbles in a group were removed from the group, <math alttext=\"360\"><mn>360</mn></math> marbles remained in the group. How many marbles were removed from the group?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p style=\"text-align: left;\">Choice B is correct. It's given that <math alttext=\"20 percent sign\"><mn>20</mn><mo>%</mo></math> of the original number of marbles were removed from the group. Let <math alttext=\"x\"><mi>x</mi></math> represent the original number of marbles in the group. It follows that <math alttext=\"StartFraction 20 Over 100 EndFraction x\"><mfrac><mn>20</mn><mn>100</mn></mfrac><mi>x</mi></math>, or <math alttext=\"0.20 x\"><mn>0.20</mn><mi>x</mi></math>, marbles were removed from the group. Therefore, <math alttext=\"x minus 0.20 x\"><mi>x</mi><mo>-</mo><mn>0.20</mn><mi>x</mi></math> marbles remained in the group. It's also given that <math alttext=\"360\"><mn>360</mn></math> marbles remained in the group. Thus, <math alttext=\"x minus 0.20 x equals 360\"><mi>x</mi><mo>-</mo><mn>0.20</mn><mi>x</mi><mo>=</mo><mn>360</mn></math>, or <math alttext=\"0.80 x equals 360\"><mn>0.80</mn><mi>x</mi><mo>=</mo><mn>360</mn></math>. Dividing both sides of this equation by <math alttext=\"0.80\"><mn>0.80</mn></math> yields <math alttext=\"x equals 450\"><mrow>\n\t<mi>x</mi>\n\t<mo>=</mo>\n\t<mn>450</mn>\n</mrow></math>. Substituting <math alttext=\"450\"><mn>450</mn></math> for <math alttext=\"x\"><mi>x</mi></math> in the expression <math alttext=\"0.20 x\"><mn>0.20</mn><mi>x</mi></math> yields <math alttext=\"0.20 left parenthesis 450 right parenthesis\"><mn>0.20</mn><mo>(</mo><mn>450</mn><mo>)</mo></math>, or <math alttext=\"90\"><mn>90</mn></math>. Therefore, <math alttext=\"90\"><mn>90</mn></math> marbles were removed from the group.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. This is <math alttext=\"20 percent sign\"><mn>20</mn><mo>%</mo></math> of the remaining number of marbles.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. This is the original number of marbles, not the number of marbles that were removed.</p>\n<p style=\"text-align: left;\">Choice D is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"72\"><mn>72</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"90\"><mn>90</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"450\"><mn>450</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"1,800\"><mn>1,800</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-2e92cc21",
    "originalId": "2e92cc21",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">The number <math alttext=\"a\"><mi>a</mi></math> is <math alttext=\"110 percent sign\"><mrow><mn>110</mn></mrow><mo>%</mo></math> greater than the number <math alttext=\"b\"><mi>b</mi></math>. The number <math alttext=\"b\"><mi>b</mi></math> is <math alttext=\"90 percent sign\"><mrow><mn>90</mn></mrow><mo>%</mo></math> less than <math alttext=\"47\"><mn>47</mn></math>. What is the value of <math alttext=\"a\"><mi>a</mi></math>?</p>",
    "type": "grid-in",
    "correctAnswer": "9.87, 987/100",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math alttext=\"9.87\"><mn>9.87</mn></math>. It&rsquo;s given that the number <math alttext=\"a\"><mi>a</mi></math> is <math alttext=\"110 percent sign\"><mn>110</mn><mo>%</mo></math> greater than the number <math alttext=\"b\"><mi>b</mi></math>. It follows that <math alttext=\"a equals left parenthesis 1 plus StartFraction 110 Over 100 EndFraction right parenthesis b\"><mi>a</mi><mo>=</mo><mfenced><mrow><mn>1</mn><mo>+</mo><mfrac><mn>110</mn><mn>100</mn></mfrac></mrow></mfenced><mi>b</mi></math>, or <math alttext=\"a equals 2.1 b\"><mrow>\n<mi>a</mi>\n<mo>=</mo>\n<mrow>\n<mn>2.1</mn>\n<mi>b</mi>\n</mrow>\n</mrow></math>. It&rsquo;s also given that the number <math alttext=\"b\"><mi>b</mi></math> is <math alttext=\"90 percent sign\"><mn>90</mn><mo>%</mo></math> less than <math alttext=\"47\"><mn>47</mn></math>. It follows that <math alttext=\"b equals left parenthesis 1 minus StartFraction 90 Over 100 EndFraction right parenthesis left parenthesis 47 right parenthesis\"><mi>b</mi><mo>=</mo><mfenced><mrow><mn>1</mn><mo>-</mo><mfrac><mn>90</mn><mn>100</mn></mfrac></mrow></mfenced><mfenced><mn>47</mn></mfenced></math>, or <math alttext=\"b equals 0.1 left parenthesis 47 right parenthesis\"><mi>b</mi><mo>=</mo><mn>0.1</mn><mfenced><mn>47</mn></mfenced></math>, which yields <math alttext=\"b equals 4.7\"><mrow>\n<mi>b</mi>\n<mo>=</mo>\n<mn>4.7</mn>\n</mrow></math>. Substituting <math alttext=\"4.7\"><mn>4.7</mn></math> for <math alttext=\"b\"><mi>b</mi></math> in the equation <math alttext=\"a equals 2.1 b\"><mrow>\n<mi>a</mi>\n<mo>=</mo>\n<mrow>\n<mn>2.1</mn>\n<mi>b</mi>\n</mrow>\n</mrow></math> yields <math alttext=\"a equals 2.1 left parenthesis 4.7 right parenthesis\"><mi>a</mi><mo>=</mo><mn>2.1</mn><mfenced><mn>4.7</mn></mfenced></math>, which is equivalent to <math alttext=\"a equals 9.87\"><mrow>\n<mi>a</mi>\n<mo>=</mo>\n<mn>9.87</mn>\n</mrow></math>. Therefore, the value of <math alttext=\"a\"><mi>a</mi></math> is <math alttext=\"9.87\"><mn>9.87</mn></math>.</p>"
  },
  {
    "id": "sat-math-percen-ba0e23b0",
    "originalId": "ba0e23b0",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\"><math alttext=\"140\"><mn>140</mn></math> is <math alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> greater than <math alttext=\"10\"><mn>10</mn></math>. What is the value of <math alttext=\"p\"><mi>p</mi></math>?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p style=\"text-align: left;\">Choice B is correct. It's given that <math alttext=\"140\"><mn>140</mn></math> is <math alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> greater than <math alttext=\"10\"><mn>10</mn></math>. It follows that <math alttext=\"140 equals 10 plus left parenthesis StartFraction p Over 100 EndFraction right parenthesis 10\"><mn>140</mn><mo>=</mo><mn>10</mn><mo>+</mo><mfenced><mfrac><mi>p</mi><mn>100</mn></mfrac></mfenced><mn>10</mn></math>, which is equivalent to <math alttext=\"140 equals 10 plus StartFraction 10 Over 100 EndFraction p\"><mn>140</mn><mo>=</mo><mn>10</mn><mo>+</mo><mfrac><mn>10</mn><mn>100</mn></mfrac><mi>p</mi></math>, or <math alttext=\"140 equals 10 plus 0.1 p\"><mn>140</mn><mo>=</mo><mn>10</mn><mo>+</mo><mn>0.1</mn><mi>p</mi></math>. Subtracting <math alttext=\"10\"><mn>10</mn></math> from each side of this equation yields <math alttext=\"130 equals 0.1 p\"><mn>130</mn><mo>=</mo><mn>0.1</mn><mi>p</mi></math>. Dividing each side of this equation by <math alttext=\"0.1\"><mn>0.1</mn></math> yields <math alttext=\"1,300 equals p\"><mn>1,300</mn><mo>=</mo><mi>p</mi></math>, or <math alttext=\"p equals 1,300\"><mi>p</mi><mo>=</mo><mn>1,300</mn></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. This would be the value of <math alttext=\"p\"><mi>p</mi></math> if <math alttext=\"140\"><mn>140</mn></math> were <math alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> of <math alttext=\"10\"><mn>10</mn></math>, not <math alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> greater than <math alttext=\"10\"><mn>10</mn></math>.</p>\n<p style=\"text-align: left;\">Choice C is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice D is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"1,400\"><mn>1,400</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"1,300\"><mn>1,300</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"140\"><mn>140</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"130\"><mn>130</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-8c5dbd3e",
    "originalId": "8c5dbd3e",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">The number <math alttext=\"w\"><mi>w</mi></math> is <math alttext=\"110 percent sign\"><mn>110</mn><mo>%</mo></math> greater than the number <math alttext=\"z\"><mi>z</mi></math>. The number <math alttext=\"z\"><mi>z</mi></math> is <math alttext=\"55 percent sign\"><mn>55</mn><mo>%</mo></math> less than <math alttext=\"50\"><mn>50</mn></math>. What is the value of <math alttext=\"w\"><mi>w</mi></math>?</p>",
    "type": "grid-in",
    "correctAnswer": "189/4, 47.25",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math alttext=\"47.25\"><mn>47.25</mn></math>. It&rsquo;s given that the number <math alttext=\"w\"><mi>w</mi></math> is <math alttext=\"110 percent sign\"><mn>110</mn><mo>%</mo></math> greater than the number <math alttext=\"z\"><mi>z</mi></math>. It follows that <math alttext=\"w equals left parenthesis 1 plus StartFraction 110 Over 100 EndFraction right parenthesis z\"><mi>w</mi><mo>=</mo><mfenced><mrow><mn>1</mn><mo>+</mo><mfrac><mn>110</mn><mn>100</mn></mfrac></mrow></mfenced><mi>z</mi></math>, or <math alttext=\"w equals 2.1 z\"><mi>w</mi><mo>=</mo><mn>2.1</mn><mi>z</mi></math>. It&rsquo;s also given that the number <math alttext=\"z\"><mi>z</mi></math> is <math alttext=\"55 percent sign\"><mn>55</mn><mo>%</mo></math> less than <math alttext=\"50\"><mn>50</mn></math>. It follows that <math alttext=\"z equals left parenthesis 1 minus StartFraction 55 Over 100 EndFraction right parenthesis left parenthesis 50 right parenthesis\"><mi>z</mi><mo>=</mo><mfenced><mrow><mn>1</mn><mo>-</mo><mfrac><mn>55</mn><mn>100</mn></mfrac></mrow></mfenced><mfenced><mn>50</mn></mfenced></math>, or <math alttext=\"z equals 0.45 left parenthesis 50 right parenthesis\"><mi>z</mi><mo>=</mo><mn>0.45</mn><mfenced><mn>50</mn></mfenced></math>, which yields <math alttext=\"z equals 22.5\"><mi>z</mi><mo>=</mo><mn>22.5</mn></math>. Substituting <math alttext=\"22.5\"><mn>22.5</mn></math> for <math alttext=\"z\"><mi>z</mi></math> in the equation <math alttext=\"w equals 2.1 z\"><mi>w</mi><mo>=</mo><mn>2.1</mn><mi>z</mi></math> yields <math alttext=\"w equals 2.1 left parenthesis 22.5 right parenthesis\"><mi>w</mi><mo>=</mo><mn>2.1</mn><mfenced><mn>22.5</mn></mfenced></math>, which is equivalent to <math alttext=\"w equals 47.25\"><mrow>\n<mi>w</mi>\n<mo>=</mo>\n<mn>47.25</mn>\n</mrow></math>. Therefore, the value of <math alttext=\"w\"><mi>w</mi></math> is <math alttext=\"47.25\"><mn>47.25</mn></math>. Note that 47.25 and 189/4 are examples of ways to enter a correct answer.</p>"
  },
  {
    "id": "sat-math-percen-54cb53cf",
    "originalId": "54cb53cf",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">The number of zebras in a population in <math alttext=\"2018\"><mn>2018</mn></math> was <math alttext=\"1.27\"><mn>1.27</mn></math> times the number of zebras in this population in <math alttext=\"2014\"><mn>2014</mn></math>. If the number of zebras in this population in <math alttext=\"2014\"><mn>2014</mn></math> is <math alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> of the number of zebras in this population in <math alttext=\"2018\"><mn>2018</mn></math>, what is the value of <math alttext=\"p\"><mi>p</mi></math>, to the nearest whole number?</p>",
    "type": "grid-in",
    "correctAnswer": "79",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math alttext=\"79\"><mn>79</mn></math>. Let <math alttext=\"x\"><mi>x</mi></math> represent the number of zebras in the population in <math alttext=\"2014\"><mn>2014</mn></math> and let <math alttext=\"y\"><mi>y</mi></math> represent the number of zebras in the population in <math alttext=\"2018\"><mn>2018</mn></math>. It&rsquo;s given that the number of zebras in this population in <math alttext=\"2018\"><mn>2018</mn></math> was <math alttext=\"1.27\"><mn>1.27</mn></math> times the number of zebras in this population in <math alttext=\"2014\"><mn>2014</mn></math>. It follows that the equation <math alttext=\"y equals 1.27 x\"><mrow>\n\t<mi>y</mi>\n\t<mo>=</mo>\n\t<mrow>\n\t\t<mn>1.27</mn>\n\t\t<mi>x</mi>\n\t</mrow>\n</mrow></math> represents this situation. Dividing both sides of this equation by <math alttext=\"1.27\"><mn>1.27</mn></math> yields <math alttext=\"StartFraction y Over 1.27 EndFraction equals x\"><mfrac><mi>y</mi><mn>1.27</mn></mfrac><mo>=</mo><mi>x</mi></math>, or <math alttext=\"left parenthesis StartFraction 1 Over 1.27 EndFraction right parenthesis y equals x\"><mfenced><mfrac><mn>1</mn><mn>1.27</mn></mfrac></mfenced><mi>y</mi><mo>=</mo><mi>x</mi></math>. Therefore, the number of zebras in this population in <math alttext=\"2014\"><mn>2014</mn></math> is <math alttext=\"StartFraction 1 Over 1.27 EndFraction\"><mfrac><mn>1</mn><mn>1.27</mn></mfrac></math> times the number of zebras in this population in <math alttext=\"2018\"><mn>2018</mn></math>. If the number of zebras in this population in <math alttext=\"2014\"><mn>2014</mn></math> is <math alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> of the number of zebras in this population in <math alttext=\"2018\"><mn>2018</mn></math>, then <math alttext=\"x equals StartFraction p Over 100 EndFraction y\"><mi>x</mi><mo>=</mo><mfrac><mi>p</mi><mn>100</mn></mfrac><mi>y</mi></math>. It follows that <math alttext=\"StartFraction 1 Over 1.27 EndFraction equals StartFraction p Over 100 EndFraction\"><mfrac><mn>1</mn><mn>1.27</mn></mfrac><mo>=</mo><mfrac><mi>p</mi><mn>100</mn></mfrac></math>, or <math alttext=\"StartFraction 100 Over 1.27 EndFraction equals p\"><mfrac><mn>100</mn><mn>1.27</mn></mfrac><mo>=</mo><mi>p</mi></math>, which means <math alttext=\"p\"><mi>p</mi></math> is approximately equal to <math alttext=\"78.74\"><mn>78.74</mn></math>. Therefore, the value of <math alttext=\"p\"><mi>p</mi></math>, to the nearest whole number, is <math alttext=\"79\"><mn>79</mn></math>.</p>"
  },
  {
    "id": "sat-math-percen-6feae9c3",
    "originalId": "6feae9c3",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">At a recreation center, visitors used the exercise room for a total of <math alttext=\"t\"><mi>t</mi></math> hours in July. At the same recreation center, visitors used the exercise room for <math alttext=\"3.49 t\"><mrow>\n\t<mn>3.49</mn>\n\t<mi>t</mi>\n</mrow></math> hours in August. What is the percent increase in the number of hours visitors used the exercise room from July to August?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p style=\"text-align: left;\">Choice C is correct. It&rsquo;s given that the total number of hours visitors used the exercise room increased from <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"t\"><mi>t</mi></math> hours in July to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"3.49 t\"><mn>3.49</mn><mi>t</mi></math> hours in August. It follows that the number of hours increased by <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"3.49 t minus t\"><mn>3.49</mn><mi>t</mi><mo>-</mo><mi>t</mi></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"2.49 t\"><mn>2.49</mn><mi>t</mi></math>. Let <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> represent the percent increase in the exercise room use from July to August, or the percentage that <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"2.49 t\"><mn>2.49</mn><mi>t</mi></math> is of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"t\"><mi>t</mi></math>. The value of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"p\"><mi>p</mi></math> can be found using the proportion <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"StartFraction 2.49 t Over t EndFraction equals StartFraction p Over 100 EndFraction\"><mfrac><mrow><mn>2.49</mn><mi>t</mi></mrow><mi>t</mi></mfrac><mo>=</mo><mfrac><mi>p</mi><mn>100</mn></mfrac></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"2.49 equals StartFraction p Over 100 EndFraction\"><mn>2.49</mn><mo>=</mo><mfrac><mi>p</mi><mn>100</mn></mfrac></math>. Multiplying both sides of this equation by <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"100\"><mn>100</mn></math> yields <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"p equals 249\"><mi>p</mi><mo>=</mo><mn>249</mn></math>. Therefore, the percent increase in the number of hours visitors used the exercise room from July to August is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"249 percent sign\"><mn>249</mn><mo>%</mo></math>.</p>\n<p>Choice A is incorrect and may result from conceptual or calculation errors.</p>\n<p>Choice B is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice D is incorrect. The exercise room use in August is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"349 percent sign\"><mn>349</mn><mo>%</mo></math> of the exercise room use in July, but this doesn't represent the percent increase from July to August.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"2.49 percent sign\"><mn>2.49</mn><mo>%</mo></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"3.49 percent sign\"><mn>3.49</mn><mo>%</mo></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"249 percent sign\"><mn>249</mn><mo>%</mo></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"349 percent sign\"><mn>349</mn><mo>%</mo></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-3d73a58b",
    "originalId": "3d73a58b",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">A gift shop buys souvenirs at a wholesale price of <math alttext=\"7.00\"><mn>7.00</mn></math> dollars each and resells them each at a retail price that is <math alttext=\"290 percent sign\"><mn>290</mn><mo>%</mo></math> of the wholesale price. At the end of the season, any remaining souvenirs are marked at a discounted price that is <math alttext=\"80 percent sign\"><mn>80</mn><mo>%</mo></math> off the retail price. What is the discounted price of each remaining souvenir, in dollars?</p>",
    "type": "grid-in",
    "correctAnswer": "203/50, 4.06",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math alttext=\"4.06\"><mn>4.06</mn></math>. It's given that the retail price is <math alttext=\"290 percent sign\"><mn>290</mn><mo>%</mo></math> of the wholesale price of <math alttext=\"dollar sign 7.00\"><mo>$</mo><mn>7.00</mn></math>. Thus, the retail price is <math alttext=\"dollar sign 7.00 left parenthesis StartFraction 290 Over 100 EndFraction right parenthesis\"><mo>$</mo><mn>7.00</mn><mfenced><mfrac><mn>290</mn><mn>100</mn></mfrac></mfenced></math>, which is equivalent to <math alttext=\"dollar sign 7.00 left parenthesis 2.9 right parenthesis\"><mo>$</mo><mn>7.00</mn><mfenced><mn>2.9</mn></mfenced></math>, or <math alttext=\"dollar sign 20.30\"><mo>$</mo><mn>20.30</mn></math>. It's also given that the discounted price is <math alttext=\"80 percent sign\"><mn>80</mn><mo>%</mo></math> off the retail price. Thus, the discounted price is <math alttext=\"dollar sign 20.30 left parenthesis 1 minus StartFraction 80 Over 100 EndFraction right parenthesis\"><mo>$</mo><mn>20.30</mn><mfenced><mrow><mn>1</mn><mo>-</mo><mfrac><mn>80</mn><mn>100</mn></mfrac></mrow></mfenced></math>, which is equivalent to <math alttext=\"dollar sign 20.30 left parenthesis 0.20 right parenthesis\"><mo>$</mo><mn>20.30</mn><mfenced><mn>0.20</mn></mfenced></math>, or <math alttext=\"dollar sign 4.06\"><mo>$</mo><mn>4.06</mn></math>.</p>"
  },
  {
    "id": "sat-math-percen-a51e6f93",
    "originalId": "a51e6f93",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\"><math alttext=\"0.1152\"><mn>0.1152</mn></math> is <math alttext=\"0.08 percent sign\"><mn>0.08</mn><mo>%</mo></math> of the number <math alttext=\"b\"><mi>b</mi></math>. The number <math alttext=\"b\"><mi>b</mi></math> is <math alttext=\"25 percent sign\"><mn>25</mn><mo>%</mo></math> of the number <math alttext=\"c\"><mi>c</mi></math>. What is the value of <math alttext=\"c\"><mi>c</mi></math>?</p>",
    "type": "grid-in",
    "correctAnswer": "576",
    "explanation": "<p>The correct answer is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"576\"><mn>576</mn></math>. It&rsquo;s given that <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.1152\"><mn>0.1152</mn></math> is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.08 percent sign\"><mn>0.08</mn><mo>%</mo></math> of the number <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"b\"><mi>b</mi></math>. It follows that <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.1152 equals StartFraction 0.08 Over 100 EndFraction b\"><mn>0.1152</mn><mo>=</mo><mfrac><mn>0.08</mn><mn>100</mn></mfrac><mi>b</mi></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.1152 equals 0.0008 b\"><mn>0.1152</mn><mo>=</mo><mn>0.0008</mn><mi>b</mi></math>. Dividing both sides of this equation by <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.0008\"><mn>0.0008</mn></math> yields <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"144 equals b\"><mn>144</mn><mo>=</mo><mi>b</mi></math>. It&rsquo;s also given that the number <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"b\"><mi>b</mi></math> is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"25 percent sign\"><mn>25</mn><mo>%</mo></math> of the number <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"c\"><mi>c</mi></math>. It follows that <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"b equals StartFraction 25 Over 100 EndFraction c\"><mi>b</mi><mo>=</mo><mfrac><mn>25</mn><mn>100</mn></mfrac><mi>c</mi></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"b equals 0.25 c\"><mi>b</mi><mo>=</mo><mn>0.25</mn><mi>c</mi></math>. Substituting <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"144\"><mn>144</mn></math> for <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"b\"><mi>b</mi></math> in this equation yields <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"144 equals 0.25 c\"><mn>144</mn><mo>=</mo><mn>0.25</mn><mi>c</mi></math>. Dividing both sides of this equation by <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.25\"><mn>0.25</mn></math> yields <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"576 equals c\"><mn>576</mn><mo>=</mo><mi>c</mi></math>. Therefore, the value of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"c\"><mi>c</mi></math> is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"576\"><mn>576</mn></math>.<br><br></p>"
  },
  {
    "id": "sat-math-percen-a0b165f8",
    "originalId": "a0b165f8",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">A scientist studying the life cycle of dragonflies counted the number of dragonflies in a certain habitat each day for <math alttext=\"46\"><mn>46</mn></math> days. On February <math alttext=\"15\"><mn>15</mn></math>, there were <math alttext=\"99\"><mn>99</mn></math> dragonflies in the habitat. The percent increase in the number of dragonflies in the habitat from January <math alttext=\"1\"><mn>1</mn></math> to February <math alttext=\"15\"><mn>15</mn></math> was <math alttext=\"12.50 percent sign\"><mn>12.50</mn><mo>%</mo></math>. How many dragonflies were in the habitat on January <math alttext=\"1\"><mn>1</mn></math>?</p>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p style=\"text-align: left;\">Choice A is correct. It&rsquo;s given that a scientist studying the life cycle of dragonflies counted the number of dragonflies in a certain habitat each day for <math alttext=\"46\"><mn>46</mn></math> days. It&rsquo;s also given that on February <math alttext=\"15\"><mn>15</mn></math>, there were <math alttext=\"99\"><mn>99</mn></math> dragonflies in the habitat and that the percent increase in the number of dragonflies in the habitat from January <math alttext=\"1\"><mn>1</mn></math> to February <math alttext=\"15\"><mn>15</mn></math> was <math alttext=\"12.50 percent sign\"><mn>12.50</mn><mo>%</mo></math>. This can be represented by the equation<br/><math alttext=\"99 equals left parenthesis 1 plus StartFraction 12.50 Over 100 EndFraction right parenthesis x\"><mn>99</mn><mo>=</mo><mfenced><mrow><mn>1</mn><mo>+</mo><mfrac><mn>12.50</mn><mn>100</mn></mfrac></mrow></mfenced><mi>x</mi></math>, where <math alttext=\"x\"><mi>x</mi></math> represents the number of dragonflies in the habitat on January <math alttext=\"1\"><mn>1</mn></math>. This equation can be rewritten as <math alttext=\"99 equals 1.125 x\"><mn>99</mn><mo>=</mo><mn>1.125</mn><mi>x</mi></math>. Dividing both sides of this equation by <math alttext=\"1.125\"><mn>1.125</mn></math> yields <math alttext=\"88 equals x\"><mrow>\n<mn>88</mn>\n<mo>=</mo>\n<mi>x</mi>\n</mrow></math>. Therefore, there were <math alttext=\"88\"><mn>88</mn></math> dragonflies in the habitat on January <math alttext=\"1\"><mn>1</mn></math>.</p>\n<p style=\"text-align: left;\">Choice B is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice C is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice D is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"88\"><mn>88</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"87\"><mn>87</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"12\"><mn>12</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"8\"><mn>8</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-040f2a84",
    "originalId": "040f2a84",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">The regular price of a shirt at a store is <math alttext=\"dollar sign 11.70\"><mo>$</mo><mn>11.70</mn></math>. The sale price of the shirt is <math alttext=\"80 percent sign\"><mn>80</mn>\n<mo>%</mo></math> less than the regular price, and the sale price is <math alttext=\"30 percent sign\"><mn>30</mn>\n<mo>%</mo></math> greater than the store's cost for the shirt. What was the store&rsquo;s cost, in dollars, for the shirt? (Disregard the <math alttext=\"dollar sign\"><mo>$</mo></math> sign when entering your answer. For example, if your answer is <math alttext=\"dollar sign 4.97\"><mo>$</mo><mn>4.97</mn></math>, enter <math alttext=\"4.97\"><mn>4.97</mn></math>)</p>",
    "type": "grid-in",
    "correctAnswer": "1.8, 9/5",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math alttext=\"1.8\"><mn>1.8</mn></math>. It&rsquo;s given that the regular price of a shirt at a store is <math alttext=\"dollar sign 11.70\"><mo>$</mo><mn>11.70</mn></math>, and the sale price of the shirt is <math alttext=\"80 percent sign\"><mn>80</mn><mo>%</mo></math> less than the regular price. It follows that the sale price of the shirt is <math alttext=\"dollar sign 11.70 left parenthesis 1 minus StartFraction 80 Over 100 EndFraction right parenthesis\"><mo>$</mo><mn>11.70</mn><mfenced><mrow><mn>1</mn><mo>-</mo><mfrac><mn>80</mn><mn>100</mn></mfrac></mrow></mfenced></math>, or <math alttext=\"dollar sign 11.70 left parenthesis 1 minus 0.8 right parenthesis\"><mo>$</mo><mn>11.70</mn><mfenced><mrow><mn>1</mn><mo>-</mo><mn>0.8</mn></mrow></mfenced></math>, which is equivalent to <math alttext=\"dollar sign 2.34\"><mo>$</mo><mn>2.34</mn></math>. It&rsquo;s also given that the sale price of the shirt is <math alttext=\"30 percent sign\"><mn>30</mn><mo>%</mo></math> greater than the store&rsquo;s cost for the shirt. Let <math alttext=\"x\"><mi>x</mi></math> represent the store&rsquo;s cost for the shirt. It follows that <math alttext=\"2.34 equals left parenthesis 1 plus StartFraction 30 Over 100 EndFraction right parenthesis x\"><mn>2.34</mn><mo>=</mo><mfenced><mrow><mn>1</mn><mo>+</mo><mfrac><mn>30</mn><mn>100</mn></mfrac></mrow></mfenced><mi>x</mi></math>, or <math alttext=\"2.34 equals 1.3 x\"><mn>2.34</mn><mo>=</mo><mn>1.3</mn><mi>x</mi></math>. Dividing both sides of this equation by <math alttext=\"1.3\"><mn>1.3</mn></math> yields <math alttext=\"x equals 1.80\"><mi>x</mi><mo>=</mo><mn>1.80</mn></math>. Therefore, the store&rsquo;s cost, in dollars, for the shirt is <math alttext=\"1.80\"><mn>1.80</mn></math>. Note that 1.8 and 9/5 are examples of ways to enter a correct answer.</p>"
  },
  {
    "id": "sat-math-percen-8213b1b3",
    "originalId": "8213b1b3",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">According to a set of standards, a certain type of substance can contain a maximum of <math alttext=\"0.001 percent sign\"><mn>0.001</mn><mo>%</mo></math> phosphorus by mass. If a sample of this substance has a mass of <math alttext=\"140\"><mn>140</mn></math> grams, what is the maximum mass, in grams, of phosphorus the sample can contain to meet these standards?</p>",
    "type": "grid-in",
    "correctAnswer": ".0014",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math alttext=\".0014\"><mo>.0014</mo></math>. It's given that a certain type of substance can contain a maximum of <math alttext=\"0.001 percent sign\"><mn>0.001</mn><mo>%</mo></math> phosphorus by mass to meet a set of standards. If a sample of the substance has a mass of <math alttext=\"140\"><mn>140</mn></math> grams, it follows that the maximum mass, in grams, of phosphorus the sample can contain to meet the standards is <math alttext=\"0.001 percent sign\"><mn>0.001</mn><mo>%</mo></math> of <math alttext=\"140\"><mn>140</mn></math>, or <math alttext=\"StartFraction 0.001 Over 100 EndFraction left parenthesis 140 right parenthesis\"><mfrac><mn>0.001</mn><mn>100</mn></mfrac><mfenced><mn>140</mn></mfenced></math>, which is equivalent to <math alttext=\"left parenthesis 0.00001 right parenthesis left parenthesis 140 right parenthesis\"><mfenced><mn>0.00001</mn></mfenced><mfenced><mn>140</mn></mfenced></math>, or <math alttext=\"0.0014\"><mn>0.0014</mn></math>. Note that .0014 and 0.001 are examples of ways to enter a correct answer.</p>"
  },
  {
    "id": "sat-math-percen-34f8cd89",
    "originalId": "34f8cd89",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\"><math alttext=\"37 percent sign\"><mn>37</mn>\n<mo>%</mo></math> of the items in a box are green. Of those, <math alttext=\"37 percent sign\"><mn>37</mn>\n<mo>%</mo></math> are also rectangular. Of the green rectangular items, <math alttext=\"42 percent sign\"><mn>42</mn>\n<mo>%</mo></math> are also metal. Which of the following is closest to the percentage of the items in the box that are <span style=\"text-decoration: underline;\">not</span> rectangular green metal items?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p style=\"text-align: left;\">Choice C is correct. It's given that <math alttext=\"37 percent sign\"><mn>37</mn><mo>%</mo></math> of the items in a box are green. Let <math alttext=\"x\"><mi>x</mi></math> represent the total number of items in the box. It follows that <math alttext=\"StartFraction 37 Over 100 EndFraction x\"><mfrac><mn>37</mn><mn>100</mn></mfrac><mi>x</mi></math>, or <math alttext=\"0.37 x\"><mn>0.37</mn><mi>x</mi></math>, items in the box are green. It's also given that of those, <math alttext=\"37 percent sign\"><mn>37</mn><mo>%</mo></math> are also rectangular. Therefore, <math alttext=\"StartFraction 37 Over 100 EndFraction left parenthesis 0.37 x right parenthesis\"><mfrac><mn>37</mn><mn>100</mn></mfrac><mfenced><mrow><mn>0.37</mn><mi>x</mi></mrow></mfenced></math>, or <math alttext=\"0.1369 x\"><mn>0.1369</mn><mi>x</mi></math>, items in the box are green rectangular items. It's also given that of the green rectangular items, <math alttext=\"42 percent sign\"><mn>42</mn><mo>%</mo></math> are also metal. Therefore, <math alttext=\"StartFraction 42 Over 100 EndFraction left parenthesis 0.1369 x right parenthesis\"><mfrac><mn>42</mn><mn>100</mn></mfrac><mfenced><mrow><mn>0.1369</mn><mi>x</mi></mrow></mfenced></math>, or <math alttext=\"0.057498 x\"><mn>0.057498</mn><mi>x</mi></math>, items in the box are rectangular green metal items. The number of the items in the box that are not rectangular green metal items is the total number of items in the box minus the number of rectangular green metal items in the box. Therefore, the number of items in the box that are not rectangular green metal items is <math alttext=\"x minus 0.057498 x\"><mi>x</mi><mo>-</mo><mn>0.057498</mn><mi>x</mi></math>, or <math alttext=\"0.942502 x\"><mn>0.942502</mn><mi>x</mi></math>. The percentage of items in the box that are not rectangular green metal items is the percentage that <math alttext=\"0.942502 x\"><mn>0.942502</mn><mi>x</mi></math> is of <math alttext=\"x\"><mi>x</mi></math>. If <math alttext=\"p percent sign\"><mi>p</mi><mo>%</mo></math> represents this percentage, the value of <math alttext=\"p\"><mi>p</mi></math> is <math alttext=\"100 left parenthesis StartFraction 0.942502 x Over x EndFraction right parenthesis\"><mn>100</mn><mfenced><mfrac><mrow><mn>0.942502</mn><mi>x</mi></mrow><mi>x</mi></mfrac></mfenced></math>, or <math alttext=\"94.2502\"><mn>94.2502</mn></math>. Of the given choices, <math alttext=\"94.25 percent sign\"><mn>94.25</mn><mo>%</mo></math> is closest to the percentage of items in the box that are not rectangular green metal items.</p>\n<p style=\"text-align: left;\">Choice A is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice B is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice D is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"1.16 percent sign\"><mn>1.16</mn>\n<mo>%</mo></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"57.50 percent sign\"><mn>57.50</mn>\n<mo>%</mo></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"94.25 percent sign\"><mn>94.25</mn>\n<mo>%</mo></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"98.84 percent sign\"><mn>98.84</mn>\n<mo>%</mo></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-25faa756",
    "originalId": "25faa756",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">The number <math alttext=\"a\"><mi>a</mi></math> is <math alttext=\"60 percent sign\"><mn>60</mn>\n<mo>%</mo></math> greater than the positive number <math alttext=\"b\"><mi>b</mi></math>. The number <math alttext=\"c\"><mi>c</mi></math> is <math alttext=\"45 percent sign\"><mn>45</mn>\n<mo>%</mo></math> less than <math alttext=\"a\"><mi>a</mi></math>. The number <math alttext=\"c\"><mi>c</mi></math> is how many times <math alttext=\"b\"><mi>b</mi></math>?</p>",
    "type": "grid-in",
    "correctAnswer": ".88, 22/25",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math alttext=\".88\"><mo>.88</mo></math>. It&rsquo;s given that the number <math alttext=\"a\"><mi>a</mi></math> is <math alttext=\"60 percent sign\"><mn>60</mn><mo>%</mo></math> greater than the positive number <math alttext=\"b\"><mi>b</mi></math>. Therefore, <math alttext=\"a equals left parenthesis 1 plus StartFraction 60 Over 100 EndFraction right parenthesis b\"><mi>a</mi><mo>=</mo><mfenced><mrow><mn>1</mn><mo>+</mo><mfrac><mn>60</mn><mn>100</mn></mfrac></mrow></mfenced><mi>b</mi></math>, which is equivalent to <math alttext=\"a equals left parenthesis 1 plus 0.60 right parenthesis b\"><mi>a</mi><mo>=</mo><mfenced><mrow><mn>1</mn><mo>+</mo><mn>0.60</mn></mrow></mfenced><mi>b</mi></math>, or <math alttext=\"a equals 1.60 b\"><mrow>\n<mi>a</mi>\n<mo>=</mo>\n<mrow>\n<mn>1.60</mn>\n<mi>b</mi>\n</mrow>\n</mrow></math>. It&rsquo;s also given that the number <math alttext=\"c\"><mi>c</mi></math> is <math alttext=\"45 percent sign\"><mn>45</mn><mo>%</mo></math> less than <math alttext=\"a\"><mi>a</mi></math>. Therefore, <math alttext=\"c equals left parenthesis 1 minus StartFraction 45 Over 100 EndFraction right parenthesis a\"><mi>c</mi><mo>=</mo><mfenced><mrow><mn>1</mn><mo>-</mo><mfrac><mn>45</mn><mn>100</mn></mfrac></mrow></mfenced><mi>a</mi></math>, which is equivalent to <math alttext=\"c equals left parenthesis 1 minus 0.45 right parenthesis a\"><mi>c</mi><mo>=</mo><mfenced><mrow><mn>1</mn><mo>-</mo><mn>0.45</mn></mrow></mfenced><mi>a</mi></math>, or <math alttext=\"c equals 0.55 a\"><mrow>\n<mi>c</mi>\n<mo>=</mo>\n<mrow>\n<mn>0.55</mn>\n<mi>a</mi>\n</mrow>\n</mrow></math>. Since <math alttext=\"a equals 1.60 b\"><mrow>\n<mi>a</mi>\n<mo>=</mo>\n<mrow>\n<mn>1.60</mn>\n<mi>b</mi>\n</mrow>\n</mrow></math>, substituting <math alttext=\"1.60 b\"><mrow>\n<mn>1.60</mn>\n<mi>b</mi>\n</mrow></math> for <math alttext=\"a\"><mi>a</mi></math> in the equation <math alttext=\"c equals 0.55 a\"><mrow>\n<mi>c</mi>\n<mo>=</mo>\n<mrow>\n<mn>0.55</mn>\n<mi>a</mi>\n</mrow>\n</mrow></math> yields <math alttext=\"c equals 0.55 left parenthesis 1.60 b right parenthesis\"><mi>c</mi><mo>=</mo><mn>0.55</mn><mfenced><mrow><mn>1.60</mn><mi>b</mi></mrow></mfenced></math>, or <math alttext=\"c equals 0.88 b\"><mrow>\n<mi>c</mi>\n<mo>=</mo>\n<mrow>\n<mn>0.88</mn>\n<mi>b</mi>\n</mrow>\n</mrow></math>. Thus, the number <math alttext=\"c\"><mi>c</mi></math> is <math alttext=\"0.88\"><mn>0.88</mn></math> times the number <math alttext=\"b\"><mi>b</mi></math>. Note that .88 and 22/25 are examples of ways to enter a correct answer. </p>"
  },
  {
    "id": "sat-math-percen-ad911622",
    "originalId": "ad911622",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">The value of a collectible comic book increased by <math alttext=\"167 percent sign\"><mn>167</mn><mo>%</mo></math> from the end of <math alttext=\"2011\"><mn>2011</mn></math> to the end of <math alttext=\"2012\"><mn>2012</mn></math> and then decreased by <math alttext=\"16 percent sign\"><mn>16</mn><mo>%</mo></math> from the end of <math alttext=\"2012\"><mn>2012</mn></math> to the end of <math alttext=\"2013\"><mn>2013</mn></math>. What was the net percentage increase in the value of the collectible comic book from the end of <math alttext=\"2011\"><mn>2011</mn></math> to the end of <math alttext=\"2013\"><mn>2013</mn></math>?</p>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p style=\"text-align: left;\">Choice A is correct. It&rsquo;s given that the value of the comic book increased by <math alttext=\"167 percent sign\"><mn>167</mn><mo>%</mo></math> from the end of <math alttext=\"2011\"><mn>2011</mn></math> to the end of <math alttext=\"2012\"><mn>2012</mn></math>. Therefore, if the value of the comic book at the end of <math alttext=\"2011\"><mn>2011</mn></math> was <math alttext=\"x\"><mi>x</mi></math> dollars, then the value, in dollars, of the comic book at the end of <math alttext=\"2012\"><mn>2012</mn></math> was <math alttext=\"x plus left parenthesis StartFraction 167 Over 100 EndFraction right parenthesis x\"><mi>x</mi><mo>+</mo><mfenced><mfrac><mn>167</mn><mn>100</mn></mfrac></mfenced><mi>x</mi></math>, which can be rewritten as <math alttext=\"1 x plus 1.67 x\"><mn>1</mn><mi>x</mi><mo>+</mo><mn>1.67</mn><mi>x</mi></math>, or <math alttext=\"2.67 x\"><mrow>\n\t<mn>2.67</mn>\n\t<mi>x</mi>\n</mrow></math>. It&rsquo;s also given that the value of the comic book decreased by <math alttext=\"16 percent sign\"><mn>16</mn><mo>%</mo></math> from the end of <math alttext=\"2012\"><mn>2012</mn></math> to the end of <math alttext=\"2013\"><mn>2013</mn></math>. Therefore, the value, in dollars, of the comic book at the end of <math alttext=\"2013\"><mn>2013</mn></math> was <math alttext=\"2.67 x minus 2.67 x left parenthesis StartFraction 16 Over 100 EndFraction right parenthesis\"><mn>2.67</mn><mi>x</mi><mo>-</mo><mn>2.67</mn><mi>x</mi><mfenced><mfrac><mn>16</mn><mn>100</mn></mfrac></mfenced></math>, which can be rewritten as <math alttext=\"2.67 x minus left parenthesis 2.67 x right parenthesis left parenthesis 0.16 right parenthesis\"><mn>2.67</mn><mi>x</mi><mo>-</mo><mfenced><mrow><mn>2.67</mn><mi>x</mi></mrow></mfenced><mfenced><mn>0.16</mn></mfenced></math>, or <math alttext=\"2.2428 x\"><mn>2.2428</mn><mi>x</mi></math>. Thus, if the value of the comic book at the end of <math alttext=\"2011\"><mn>2011</mn></math> was <math alttext=\"x\"><mi>x</mi></math> dollars, and the value of the comic book at the end of <math alttext=\"2013\"><mn>2013</mn></math> was <math alttext=\"2.2428 x\"><mrow>\n\t<mn>2.2428</mn>\n\t<mi>x</mi>\n</mrow></math> dollars, then from the end of <math alttext=\"2011\"><mn>2011</mn></math> to the end of <math alttext=\"2013\"><mn>2013</mn></math>, the value of the comic book increased by <math alttext=\"2.2428 x minus 1 x\"><mn>2.2428</mn><mi>x</mi><mo>-</mo><mn>1</mn><mi>x</mi></math>, or <math alttext=\"1.2428 x\"><mrow>\n\t<mn>1.2428</mn>\n\t<mi>x</mi>\n</mrow></math>, dollars. Therefore, the increase in the value of the comic book from the end of <math alttext=\"2011\"><mn>2011</mn></math> to the end of <math alttext=\"2013\"><mn>2013</mn></math> is equal to <math alttext=\"1.2428\"><mn>1.2428</mn></math> times the value of the comic book at the end of <math alttext=\"2011\"><mn>2011</mn></math>. It follows that from the end of <math alttext=\"2011\"><mn>2011</mn></math> to the end of <math alttext=\"2013\"><mn>2013</mn></math>, the net percentage increase in the value of the comic book was <math alttext=\"left parenthesis 1.2428 right parenthesis left parenthesis 100 right parenthesis percent sign\"><mfenced><mn>1.2428</mn></mfenced><mfenced><mn>100</mn></mfenced><mo>%</mo></math>, or <math alttext=\"124.28 percent sign\"><mn>124.28</mn><mo>%</mo></math>.</p>\n<p style=\"text-align: left;\">Choice B is incorrect and may result from conceptual or calculation errors. </p>\n<p style=\"text-align: left;\">Choice C is incorrect. This is the difference between the net percentage increase in the value of the comic book from the end of <math alttext=\"2011\"><mn>2011</mn></math> to the end of <math alttext=\"2012\"><mn>2012</mn></math> and the net percentage decrease in the value of the comic book from the end of <math alttext=\"2012\"><mn>2012</mn></math> to the end of <math alttext=\"2013\"><mn>2013</mn></math>, not the net percentage increase in the value of the comic book from the end of <math alttext=\"2011\"><mn>2011</mn></math> to the end of <math alttext=\"2013\"><mn>2013</mn></math>.</p>\n<p style=\"text-align: left;\">Choice D is incorrect. This is the net percentage increase in the value of the comic book from the end of <math alttext=\"2011\"><mn>2011</mn></math> to the end of <math alttext=\"2013\"><mn>2013</mn></math>, if the value of the comic book increased by <math alttext=\"167 percent sign\"><mn>167</mn><mo>%</mo></math> from the end of <math alttext=\"2011\"><mn>2011</mn></math> to the end of <math alttext=\"2012\"><mn>2012</mn></math> and then increased, not decreased, by <math alttext=\"16 percent sign\"><mn>16</mn><mo>%</mo></math> from the end of <math alttext=\"2012\"><mn>2012</mn></math> to the end of <math alttext=\"2013\"><mn>2013</mn></math>.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"124.28 percent sign\"><mn>124.28</mn><mo>%</mo></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"140.28 percent sign\"><mn>140.28</mn><mo>%</mo></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"151.00 percent sign\"><mn>151.00</mn><mo>%</mo></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"209.72 percent sign\"><mn>209.72</mn><mo>%</mo></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-percen-98818acf",
    "originalId": "98818acf",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "percentages-rates",
    "subtopic": "Percentages, ratios & rates",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">The number of audiobooks in a library increased by <math alttext=\"131 percent sign\"><mn>131</mn><mo>%</mo></math> from last year to this year. The number of audiobooks in the library last year was <math alttext=\"n\"><mi>n</mi></math>, and the number of audiobooks in the library this year is <math alttext=\"b n\"><mrow>\n\t<mi>b</mi>\n\t<mi>n</mi>\n</mrow></math>, where <math alttext=\"b\"><mi>b</mi></math> and <math alttext=\"n\"><mi>n</mi></math> are constants. What is the value of <math alttext=\"b\"><mi>b</mi></math>?</p>",
    "type": "grid-in",
    "correctAnswer": "2.31",
    "explanation": "<p style=\"text-align: left;\">The correct answer is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"2.31\"><mn>2.31</mn></math>. It&rsquo;s given that the number of audiobooks in the library increased by <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"131 percent sign\"><mn>131</mn><mo>%</mo></math> from last year to this year. Converting <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"131 percent sign\"><mn>131</mn><mo>%</mo></math> to a decimal yields <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"1.31\"><mn>1.31</mn></math>. It&rsquo;s also given that the number of audiobooks in the library last year was <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"n\"><mi>n</mi></math>, where <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"n\"><mi>n</mi></math> is a constant. It follows that the number of audiobooks in the library this year can be represented by <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"n\"><mi>n</mi></math> plus <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"131 percent sign\"><mn>131</mn><mo>%</mo></math> of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"n\"><mi>n</mi></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"n plus 1.31 n\"><mi>n</mi><mo>+</mo><mn>1.31</mn><mi>n</mi></math>. Combining like terms in this expression yields <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"2.31 n\"><mn>2.31</mn><mi>n</mi></math>. Since the number of audiobooks in the library this year is represented as <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"b n\"><mi>b</mi><mi>n</mi></math>, where <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"b\"><mi>b</mi></math> is a constant, it follows that the value of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"b\"><mi>b</mi></math> is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"2.31\"><mn>2.31</mn></math>.</p>"
  }
];
