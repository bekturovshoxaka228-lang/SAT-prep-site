import type { SatQuestion } from "./sat-data";

/**
 * Official College Board Inference from sample statistics Question Bank (40 questions)
 * Domain: 3. Problem-Solving and Data Analysis
 * Subtopic: Inference from sample statistics
 * Native W3C MathML & Vector SVG Diagrams (No raster screenshots)
 * Order: Easy -> Medium -> Hard
 */
export const MATH_INFERENCE_STATISTICS_QUESTIONS: SatQuestion[] = [
  {
    "id": "sat-math-infere-0108ac2d",
    "originalId": "0108ac2d",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">At a large high school, 300 students were selected at random and were asked in a survey about a menu change in the school cafeteria. All 300 students completed the survey. It was estimated that 38% of the students were in support of a menu change, with a margin of error of 5.5%. Which of the following is the best interpretation of the survey results?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p>Choice C is correct. It&rsquo;s given that an estimated 38% of sampled students at the school were in support of a menu change, with a margin of error of 5.5%. It follows that the percent of the students at the school who support a menu change is 38% plus or minus 5.5%. The lower bound of this estimation is <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAWCAYAAACVIF9YAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABJklEQVRYR+2UgQ2EIAxFGY+BGIddWIVNemAFC1KtPXPJJX0JUe/6ob8UXCMFB+WxDw8xQ30fGGMchHSO0QKQIJC5+yiLlCeLSIeJhxKKCUMK5TmaXMe8ZxJyBE/ml3Krw4AxUYAM0TvwxSF+Y5VmM5vpmwpL2QrmY1n5oUGNrhlsya+KUHnToHYulS5HXwS/a9HeMSFshaw/1dE6iOOxDo1h0Cpx+j93EWnoFwVptdY1Vya1uh7UW7S1LN1BZiL2VpuGZOexoM8vHpGOtil3BrUJSFnd5hJEOhrECbQJSHnFIH5c7w63g6j9fge1HSLS9fNFD+pump6v0y3KnEENyzO+KDwmfqwp1ZHAY8xVqaDJY7xhriHJYTZYkeZuGIZhGIbxbzj3ARFmU63K9RwWAAAAAElFTkSuQmCC\" alt=\"38 minus 5 point 5\"></span>, or 32.5%. The upper bound of this estimation is <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAWCAYAAACVIF9YAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABLUlEQVRYR+1UiQ3DIAxkPAZiHHbJKmziQhyISXA4aKSqEidZSVqf8fnBZGzOUHwcZskHSu8Vah9Dbrv7zIJoIydiF4uHxKcKiMeJu+jKCdPm4rMW2fZ5TyQFT1bER9HlsUOdKFEgbw3ZqJC/uUpXMbtosMK9QuwFsz6ePChwhpcF5uRbRUh4UyASq4UpXvA2Et4ZUURgmRjn9kKmn5LlCdIwzGNh7NRKSP6vXURXYALZR45anponkbO84lRGNI+s7KASqBzasV7nE7ig4xcPxJNjqu0gEgjpoIbWbY4A4kknjYAE+rlA/njujtZB5n7fwdkJgXhlv+SiHqLlft1uUWUHr4AEtna8UXhO/DwT5QnH01oJscjTeuJGgORwFZiA5r6wsLCwsLCw8G8w5gOn25at3HcYeQAAAABJRU5ErkJggg==\" alt=\"38 plus 5 point 5\"></span>, or 43.5%. Therefore, plausible values of the percent of the students at the school who support a menu change are between 32.5% and 43.5%.<p>Choice A is incorrect. This is the percent of the sampled students at the school who support a menu change. Choices B and D are incorrect and may result from misinterpreting the margin of error.</p><p> </p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">The percent of the students at the school who support a menu change is 38%.</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">The percent of the students at the school who support a menu change is greater than 38%.</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">Plausible values of the percent of the students at the school who support a menu change are between 32.5% and 43.5%.</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">Plausible values of the number of the students at the school who support a menu change are between 295 and 305.</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-1e562f24",
    "originalId": "1e562f24",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "easy",
    "stem": "<p>To estimate the proportion of a population that has a certain characteristic, a random sample was selected from the population. Based on the sample, it is estimated that the proportion of the population that has the characteristic is <math alttext=\"0.49\"><mn>0.49</mn></math>, with an associated margin of error of <math alttext=\"0.04\"><mn>0.04</mn></math>. Based on this estimate and margin of error, which of the following is the most appropriate conclusion about the proportion of the population that has the characteristic?</p>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p style=\"text-align: left;\">Choice A is correct. It&rsquo;s given that the estimate for the proportion of the population that has the characteristic is <math alttext=\"0.49\"><mn>0.49</mn></math> with an associated margin of error of <math alttext=\"0.04\"><mn>0.04</mn></math>. Subtracting the margin of error from the estimate and adding the margin of error to the estimate gives an interval of plausible values for the true proportion of the population that has the characteristic. Therefore, it&rsquo;s plausible that the proportion of the population that has this characteristic is between <math alttext=\"0.45\"><mn>0.45</mn></math> and <math alttext=\"0.53\"><mn>0.53</mn></math>.</p>\n<p style=\"text-align: left;\">Choice B is incorrect. A value less than <math alttext=\"0.45\"><mn>0.45</mn></math> is outside the interval of plausible values for the proportion of the population that has the characteristic.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. The value <math alttext=\"0.49\"><mn>0.49</mn></math> is an estimate for the proportion based on this sample. However, since the margin of error for this estimate is known, the most appropriate conclusion is not that the proportion is exactly one value but instead lies in an interval of plausible values.</p>\n<p style=\"text-align: left;\">Choice D is incorrect. A value greater than <math alttext=\"0.53\"><mn>0.53</mn></math> is outside the interval of plausible values for the proportion of the population that has the characteristic.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p>It is plausible that the proportion is between <math alttext=\"0.45\"><mn>0.45</mn></math> and <math alttext=\"0.53\"><mn>0.53</mn></math>.</p>"
      },
      {
        "id": "B",
        "text": "<p>It is plausible that the proportion is less than <math alttext=\"0.45\"><mn>0.45</mn></math>.</p>"
      },
      {
        "id": "C",
        "text": "<p>The proportion is exactly <math alttext=\"0.49\"><mn>0.49</mn></math>.</p>"
      },
      {
        "id": "D",
        "text": "<p>It is plausible that the proportion is greater than <math alttext=\"0.53\"><mn>0.53</mn></math>.</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-2c76bcce",
    "originalId": "2c76bcce",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">A company designs and makes handbags. To estimate the mean weight of the handbags made by the company on a particular day, a sample of the handbags made by the company on that day was selected at random. Based on the sample, it is estimated that the mean weight of all handbags made by the company on that day is <math alttext=\"27.8 ounces left parenthesis oz right parenthesis\"><mn>27.8</mn>\n<mo>&#160;</mo><mtext>ounces</mtext><mo>&#160;</mo><mfenced><mtext>oz</mtext></mfenced></math>, with an associated margin of error of <math alttext=\"0.02 oz\"><mn>0.02</mn>\n<mo>&#160;</mo><mtext>oz</mtext></math>. Based on this estimate and associated margin of error, which of the following is the most plausible conclusion?</p>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p>Choice A is correct. It's given that the estimated mean weight of all handbags made by the company on a particular day is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"27.8 oz\"><mn>27.8</mn><mo>&#160;</mo><mtext>oz</mtext></math>, with an associated margin of error of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.02 oz\"><mn>0.02</mn><mo>&#160;</mo><mtext>oz</mtext></math>. It follows that plausible values for the mean weight are between <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"left parenthesis 27.8 minus 0.02 right parenthesis oz\"><mo>(</mo><mn>27.8</mn><mo>-</mo><mn>0.02</mn><mo>)</mo><mo>&#160;</mo><mtext>oz</mtext></math> and <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"left parenthesis 27.8 plus 0.02 right parenthesis oz\"><mo>(</mo><mn>27.8</mn><mo>+</mo><mn>0.02</mn><mo>)</mo><mo>&#160;</mo><mtext>oz</mtext></math>. Therefore, the most plausible conclusion is that the mean weight of all handbags made by the company on that day is between <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"27.78 oz\"><mn>27.78</mn><mo>&#160;</mo><mtext>oz</mtext></math> and <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"27.82 oz\"><mn>27.82</mn><mo>&#160;</mo><mtext>oz</mtext></math>.</p>\n<p>Choice B is incorrect and may result from conceptual or calculation errors.</p>\n<p>Choice C is incorrect and may result from conceptual or calculation errors.</p>\n<p>Choice D is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p style=\"text-align: left;\">The mean weight of all handbags made by the company on that day is between <math alttext=\"27.78 oz\"><mn>27.78</mn>\n<mo>&#160;</mo><mtext>oz</mtext></math> and <math alttext=\"27.82 oz\"><mn>27.82</mn>\n<mo>&#160;</mo><mtext>oz</mtext></math>.</p>"
      },
      {
        "id": "B",
        "text": "<p style=\"text-align: left;\">The actual weights of all handbags made by the company on that day are between <math alttext=\"27.78 oz\"><mn>27.78</mn>\n<mo>&#160;</mo><mtext>oz</mtext></math> and <math alttext=\"27.82 oz\"><mn>27.82</mn>\n<mo>&#160;</mo><mtext>oz</mtext></math>.</p>"
      },
      {
        "id": "C",
        "text": "<p style=\"text-align: left;\">The actual weights of all handbags from the sample are between <math alttext=\"27.78 oz\"><mn>27.78</mn>\n<mo>&#160;</mo><mtext>oz</mtext></math> and <math alttext=\"27.82 oz\"><mn>27.82</mn>\n<mo>&#160;</mo><mtext>oz</mtext></math>.</p>"
      },
      {
        "id": "D",
        "text": "<p style=\"text-align: left;\">The mean weight of all handbags made by the company on that day is <math alttext=\"27.8 oz\"><mn>27.8</mn>\n<mo>&#160;</mo><mtext>oz</mtext></math>.</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-6a305cd0",
    "originalId": "6a305cd0",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">In a study, the data from a random sample of a population had a mean of 37, with an associated margin of error of 3. Which of the following is the most appropriate conclusion that can be made about the population mean?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p>Choice C is correct. It&rsquo;s given that the mean of the data from a random sample of a population is 37, with an associated margin of error of 3. The most appropriate conclusion that can be made is that the mean of the entire population will fall between 37, plus or minus 3. Therefore, the population mean is between <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAWCAYAAACFQBGEAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABTElEQVRYR+2W7ZHFIAhFLc+CLMde0ko6YTFK1hi/ULI/djgzTvKIw0UEfYY4nAF8pGHBnxDeL+Bw2bdyPOfu0ItBEo4OnB4sPtxRzIlOHKD9+hCTNHCGs10QRW/JtMVKDCtwdSjBj6TVMglwgrcGLHpKphel+A6rMXDh6uQd9khaDXLUqqJmyQoyikGKlg7ZnZ9c6+ktThiUrPXo9ruk9WK4j4bBmNnUls5lD2scFUh00BekKpNsm5yZGCTo6dCmBPt0V9HEWmtEsfZZJlUFvRgkqelcnZR+TyctEJPzLNu/OmeIWgwByfYM5DoxSb+arKTVrmIK9qvWLPnqb0dJrpO37XukWOhaLTNZa8NyF6TgxLDDik610u6Wy25Dcl5WVLTLLYLgxLDDik6zPW9n+ErjNQmR3vmc2Rh24eqwzjRFURRFURRFUf49xvwANMGlI3N7mgsAAAAASUVORK5CYII=\" alt=\"37 minus 3, which equals 34 \"></span> and <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAWCAYAAACFQBGEAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABe0lEQVRYR+2W7RGDIAyGHY+BGIddXMVNUiDEIiTIV3/0Ls8dV0UkLy8J9iBOe4D/Sc2AuyBcR+C02bOyPceu0NLwC+ByYPyPPes4zzUzWlCsBf9ufIAvtEWDH23DhD5i6lpiRsMqtEmlaWXsSgvnNsAFzhxg/KjUVVEuUoLM5XaTmNWwQp5JPXHjev3AdFtDL0qDWmld0mMax5uGFWhu65jNEtZ2OePvG0mCA+TSiK4b50O/GzFrWkvDfTS8NClmnDvo5zI89tVxMTMZ01BoOyDtRG/ZjJrWo2GFXA97LAhnqdR/Q5NxpYGLktN0NQuIloYV8rNpq2kBrjxmzpnZ8gxwGgKzG4MmfedjTSvGEGJ55nDOktiRL9qKaV27O0Be+nXDOJyRgUeFobCXQQlpF1r0mDaiYSdspqVqav7luEsu+xrSIsoXsX9sEV2mDWjYiZRVGPubHOV95BbtL6lxi/zlzvdq2IlkWuBZyvuOCEVRFEVRFEVR/pvj+AB5jBJSr6PrggAAAABJRU5ErkJggg==\" alt=\"37 plus 3, which equals 40\"></span>.<p>Choice A is incorrect. While it&rsquo;s an appropriate conclusion that the population mean is as low as <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAWCAYAAAC2ew6NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAA5klEQVRIS+2Uaw4EERCEHc+BHMddXMVNapueFqzXjplkf/gSIfS0mi4owRkF6q6mYT3COAJnsrW6lbE7jDREOMDAgRdY2FgAKNqEhMZ1Y35hqgHeQlNH+6UNAQ+rFTRFXVNf1Il3uKshBfWq1Ur8NDMNEW81Lfatj9XUllK9J3SogReDpf1qSTWHlmywoiEhYlpl50T9s5ku2aTNRIw0FLRKv3RuHmRov9B6oqRab9leU2iQx7y2omUx2zH5wxssaUh2ZrdYPqwrx/PPvJ05yxpSIA2ltQ777CLtsKrhcDgcDod/QKkPiPh9pTvksO8AAAAASUVORK5CYII=\" alt=\"37 minus 3\"></span>, or 34, it isn&rsquo;t appropriate to conclude that the population mean is less than 34. Choice B is incorrect. While it&rsquo;s an appropriate conclusion that the population mean is as high as <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAWCAYAAAC2ew6NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAA9klEQVRIS+2U0Q3EIAhAHc+BHMddXMVNONRilAOlbS65D19i2lSKr1B1RAoO8HINDzFDua9ACsMcH3PsG1YOlRYQIEGbaGJrAcDoUBKGpMbcYesAOYLHC67XFwTIEL0Dj1HXoy94Yg36oDE/56lDD9KqJSXWsIhK7BwqOXqc1Ftfq+kjpvqd6NKhTZaW6ompmsuWDNwVtTh0SEYqe0uk/5t9k23GTmLlMCGV3vTfMJ62vrBsPyEdUbSote2FN6KTAx3mPJHU4taOzRcyLKImh97OYRfTi7xy7fn+7BwxiVodeiDe0pAS7zbSG6wOh8PhcDj8A859AJG3wKUuv3sGAAAAAElFTkSuQmCC\" alt=\"37 plus 3\"></span>, or 40, it isn&rsquo;t appropriate to conclude that the population mean is greater than 40. Choice D is incorrect. It isn&rsquo;t an appropriate conclusion that the population mean is less than 34 or greater than 40.</p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">It is less than 37.</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">It is greater than 37.</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">It is between 34 and 40.</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">It is less than 34 or greater than 40.</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-8173f32b",
    "originalId": "8173f32b",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">An analyst collected data on the price of a carton of grape tomatoes at <math alttext=\"30\"><mn>30</mn></math> locations selected at random in Utah. The mean price of a carton of grape tomatoes in Utah was estimated to be <math alttext=\"dollar sign 4.23\"><mo>$</mo><mn>4.23</mn></math>, with an associated margin of error of <math alttext=\"dollar sign 0.08\"><mo>$</mo><mn>0.08</mn></math>. Which of the following is a plausible statement about the mean price of a carton of grape tomatoes for all locations that sell this product in Utah?</p>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p style=\"text-align: left;\">Choice A is correct. It's given that the mean price of a carton of grape tomatoes in Utah was estimated to be <math alttext=\"dollar sign 4.23\"><mo>$</mo><mn>4.23</mn></math>, with an associated margin of error of <math alttext=\"dollar sign 0.08\"><mo>$</mo><mn>0.08</mn></math>. It follows that plausible values for this mean price are between <math alttext=\"dollar sign 4.23 minus dollar sign 0.08\"><mo>$</mo><mn>4.23</mn><mo>-</mo><mo>$</mo><mn>0.08</mn></math> and <math alttext=\"dollar sign 4.23 plus dollar sign 0.08\"><mo>$</mo><mn>4.23</mn><mo>+</mo><mo>$</mo><mn>0.08</mn></math>. Therefore, it's plausible that the mean price of a carton of grape tomatoes for all locations that sell this product in Utah is between <math alttext=\"dollar sign 4.15\"><mo>$</mo><mn>4.15</mn></math> and <math alttext=\"dollar sign 4.31\"><mo>$</mo><mn>4.31</mn></math>.</p>\n<p style=\"text-align: left;\">Choice B is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice C is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice D is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p>It is between <math alttext=\"dollar sign 4.15\"><mo>$</mo><mn>4.15</mn></math> and <math alttext=\"dollar sign 4.31\"><mo>$</mo><mn>4.31</mn></math>.</p>"
      },
      {
        "id": "B",
        "text": "<p>It is either less than <math alttext=\"dollar sign 4.15\"><mo>$</mo><mn>4.15</mn></math> or greater than <math alttext=\"dollar sign 4.31\"><mo>$</mo><mn>4.31</mn></math>.</p>"
      },
      {
        "id": "C",
        "text": "<p>It is less than <math alttext=\"dollar sign 4.15\"><mo>$</mo><mn>4.15</mn></math>.</p>"
      },
      {
        "id": "D",
        "text": "<p>It is greater than <math alttext=\"dollar sign 4.31\"><mo>$</mo><mn>4.31</mn></math>.</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-82dfb646",
    "originalId": "82dfb646",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">A market researcher selected 200 people at random from a group of people who indicated that they liked a certain book. The 200 people were shown a movie based on the book and then asked whether they liked or disliked the movie. Of those surveyed, 95% said they disliked the movie. Which of the following inferences can appropriately be drawn from this survey result?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p>Choice D is correct. The sample was selected from a group of people who indicated that they liked the book. It is inappropriate to generalize the result of the survey beyond the population from which the participants were selected. Choice D is the most appropriate inference from the survey results because it describes a conclusion about people who liked the book, and the results of the survey indicate that most people who like the book disliked the movie.<p>Choices A, B, and C are incorrect because none of these inferences can be drawn from the survey results. Choices A and B need not be true. The people surveyed all liked the book on which the movie was based, which is not necessarily true of all people who go see movies or all people who read books. Thus, the people surveyed are not representative of all people who go see movies or all people who read books. Therefore, the results of this survey cannot appropriately be extended to at least 95% of people who go see movies or to at least 95% of people who read books. Choice C need not be true because the sample includes only people who liked the book, and so the results do not extend to people who dislike the book. <!--EndFragment--></p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">At least 95% of people who go see movies will dislike this movie.</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">At least 95% of people who read books will dislike this movie.</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">Most people who dislike this book will like this movie.</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">Most people who like this book will dislike this movie.</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-90eed2e5",
    "originalId": "90eed2e5",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">A city has 50 city council members. A reporter polled a random sample of 20 city council members and found that 6 of those polled supported a specific bill. Based on the sample, which of the following is the best estimate of the number of city council members in the city who support the bill?</p>",
    "type": "mcq",
    "correctAnswer": "",
    "explanation": "<p>Choice C is correct. Because a random sample of the city council was polled, the proportion of the sample who supported the bill is expected to be approximately equal to the proportion of the total city council who supports the bill. Since 6 of the 20 polled, or 30%, supported the bill, it can be estimated that <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAWCAYAAACVIF9YAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABRklEQVRYR+2V4RHDIAiFHc+BHMddsko2oSLBqIFqsH9653fntdHw5CG1DgE4IKQP/NqMcOBnAY5QrXuIJzTrq1j1j8AxShycEbwLyaYuSJvfwf3zKlZ9MnfnLsblSR8hzYlikFaid+BT1DWVyeLdKVuw6tPBOEivlHdELYsQckafntuTL+2uFIxiuqRe6I9gg8VPcRxC3gSncNQVoASe7ULtICeQk+tMSnOIRV+DilJpSRXnirJJ7fegzTO1Ic0cYtWvIWN0OH0niFAAVW8lgbKxYg75hUGGD2d4N9TiKy00ZfCHLYrQnoPCPA2+vwTy+kyLGvU1mpOfES8XUYq4ljPfbl/JkGbSoo+QkUFhWLyulBTYVEV4Zix/E8iMPseWy49zr/bi3Jti3Sbv0SeA8AY0nuZWGen3BpHZ3DebzWaz2Wz+Dec+8zvxCFohTNQAAAAASUVORK5CYII=\" alt=\"50 times 0 point 3\"></span>, or 15, city council members support the bill.<p>Choice A is incorrect. This is the number of city council members in the sample who supported the bill. Choice B is incorrect and may result from a computational error. Choice D is incorrect. This is the number of city council members in the sample of city council members who were not polled.</p></p>",
    "options": [
      {
        "id": "A",
        "text": "<span class=\"choice_cell align:character align_character:. \">6</span>"
      },
      {
        "id": "B",
        "text": "<span class=\"choice_cell align:character align_character:. \">9</span>"
      },
      {
        "id": "C",
        "text": "<span class=\"choice_cell align:character align_character:. \">15</span>"
      },
      {
        "id": "D",
        "text": "<span class=\"choice_cell align:character align_character:. \">30</span>"
      }
    ]
  },
  {
    "id": "sat-math-infere-97631565",
    "originalId": "97631565",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "easy",
    "stem": "<p>Scott selected <math alttext=\"20\"><mn>20</mn></math> employees at random from all <math alttext=\"400\"><mn>400</mn></math> employees at a company. He found that <math alttext=\"16\"><mn>16</mn></math> of the employees in this sample are enrolled in exactly three professional development courses this year. Based on Scott&rsquo;s findings, which of the following is the best estimate of the number of employees at the company who are enrolled in exactly three professional development courses this year?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p style=\"text-align: left;\">Choice B is correct. It&rsquo;s given that from the sample of <math alttext=\"20\"><mn>20</mn></math> employees at the company, <math alttext=\"16\"><mn>16</mn></math> of the employees are enrolled in exactly three professional development courses this year. Since <math alttext=\"left parenthesis StartFraction 16 Over 20 EndFraction right parenthesis\"><mfenced><mfrac><mn>16</mn><mn>20</mn></mfrac></mfenced></math> is equal to <math alttext=\"0.80\"><mn>0.80</mn></math>, or <math alttext=\"StartFraction 80 Over 100 EndFraction\"><mfrac><mn>80</mn><mn>100</mn></mfrac></math>, it follows that <math alttext=\"80 percent sign\"><mn>80</mn><mo>%</mo></math> of the employees in the sample are enrolled in exactly three professional development courses this year. Therefore, the best estimate for the percentage of employees at the company who are enrolled in exactly three professional development courses this year is <math alttext=\"80 percent sign\"><mn>80</mn><mo>%</mo></math>. It&rsquo;s given that there are a total of <math alttext=\"400\"><mn>400</mn></math> employees at the company. Therefore, the best estimate of the number of employees at the company who are enrolled in exactly three professional development courses this year is <math alttext=\"left parenthesis StartFraction 80 Over 100 EndFraction right parenthesis left parenthesis 400 right parenthesis\"><mfenced><mfrac><mn>80</mn><mn>100</mn></mfrac></mfenced><mfenced><mn>400</mn></mfenced></math>, or <math alttext=\"320\"><mn>320</mn></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. This is the number of employees from the sample who aren't enrolled in exactly three professional development courses this year.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. This is the number of employees who weren't selected for the sample. </p>\n<p style=\"text-align: left;\">Choice D is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"4\"><mn>4</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"320\"><mn>320</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"380\"><mn>380</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"384\"><mn>384</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-9bf4c545",
    "originalId": "9bf4c545",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">The members of a city council wanted to assess the opinions of all city residents about converting an open field into a dog park. The council surveyed a sample of 500 city residents who own dogs. The survey showed that the majority of those sampled were in favor of the dog park. Which of the following is true about the city council&rsquo;s survey?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p>Choice D is correct. The members of the city council wanted to assess opinions of all city residents. To gather an unbiased sample, the council should have used a random sampling design to select subjects from all city residents. The given survey introduced a sampling bias because the 500 city residents surveyed were all dog owners. This sample is not representative of all city residents because not all city residents are dog owners.<p>Choice A is incorrect because when the sampling method isn&rsquo;t random, there is no guarantee that the survey results will be reliable; hence, they cannot be generalized to the entire population. Choice B is incorrect because a larger sample of residents who are dog owners would not correct the sampling bias. Choice C is incorrect because a survey sample of entirely non&ndash;dog owners would likely have a biased opinion, just as a sample of dog owners would likely have a biased opinion.</p><p>\n        <!--EndFragment-->\n      </p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p>It shows that the majority of city residents are in favor of the dog park.</p>"
      },
      {
        "id": "B",
        "text": "<p>The survey sample should have included more residents who are dog owners.</p>"
      },
      {
        "id": "C",
        "text": "<p>The survey sample should have consisted entirely of residents who do not own dogs.</p>"
      },
      {
        "id": "D",
        "text": "<p>The survey sample is biased because it is not representative of all city residents.</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-affb2315",
    "originalId": "affb2315",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "easy",
    "stem": "<p style=\"text-align: left;\">There are <math alttext=\"55\"><mn>55</mn></math> students in Spanish club. A sample of the Spanish club students was selected at random and asked whether they intend to enroll in a new study program. Of those surveyed, <math alttext=\"20 percent sign\"><mn>20</mn><mo>%</mo></math> responded that they intend to enroll in the study program. Based on this survey, which of the following is the best estimate of the total number of Spanish club students who intend to enroll in the study program?</p>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p style=\"text-align: left;\">Choice A is correct. It&rsquo;s given that <math alttext=\"20 percent sign\"><mn>20</mn><mo>%</mo></math> of the students surveyed responded that they intend to enroll in the study program. Therefore, the proportion of students in Spanish club who intend to enroll in the study program, based on the survey, is <math alttext=\"0.20\"><mn>0.20</mn></math>. Since there are <math alttext=\"55\"><mn>55</mn></math> total students in Spanish club, the best estimate for the total number of these students who intend to enroll in the study program is <math alttext=\"55 left parenthesis 0.20 right parenthesis\"><mn>55</mn><mfenced><mn>0.20</mn></mfenced></math>, or <math alttext=\"11\"><mn>11</mn></math>.</p>\n<p style=\"text-align: left;\">Choice B is incorrect. This is the best estimate for the percentage, rather than the total number, of students in Spanish club who intend to enroll in the study program.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. This is the best estimate for the total number of Spanish club students who do not intend to enroll in the study program.</p>\n<p style=\"text-align: left;\">Choice D is incorrect. This is the total number of students in Spanish club.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p style=\"text-align: left;\"><math alttext=\"11\"><mn>11</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p style=\"text-align: left;\"><math alttext=\"20\"><mn>20</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p style=\"text-align: left;\"><math alttext=\"44\"><mn>44</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p style=\"text-align: left;\"><math alttext=\"55\"><mn>55</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-e7d9649f",
    "originalId": "e7d9649f",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">A random sample of 50 people from a town with a population of 14,878 were asked to name their favorite flavor of ice cream. If 7 people in the sample named chocolate as their favorite ice&#8209;cream flavor, about how many people in the town would be expected to name chocolate?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p>Choice B is correct. Let <span class=\"italic\">x </span>be the number of people in the entire town that would be expected to name chocolate. Since the sample of 50 people was selected at random, it is reasonable to expect that the proportion of people who named chocolate as their favorite ice-cream flavor would be the same for both the sample and the town population. Symbolically, this can be expressed as <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAAsCAYAAACJ1f3bAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAChUlEQVR4Xu2aC7KDIAxFuzwXxHLci1vpTighRjESfrUVNWeG6XsdjZCbXC3tqwQ7GQsv8THY8W3hb6UnrJ2sAYHMpOL0yGSge4yTSbunO+x7tIN7cc1za3F8EQ6jdQ6+rBMLs3Nbj038jpCNUyG+x6F/cah7BjfL+a1bsxTjVdaNVfScew8VJPzZ/QORdaY2DheY6MFc5oGIPPkp9gagY4BAF/i8h+3+nA+m9AEdCtJ3UfcW5yf8jPsP/yCOa++8OJ/ygLCIE6z1qfdfRVGUu7J6fXo424dXRembXeUePH5B7Dp3GeejFqcoiqLEEO8PbKtj+4uffvaqYHMzt+te89U9fuWwjvCcbQ742OYkFacKnHx6341vIPayoUgJywlEycolCY8L9uXm+Knz+GYr0BJHxJ+c+N0BbR7yJPhJBJP6N+v3N2mBKDkwShLNj8mtcydGYxyR3ImSPZy5441Jhw7GZEgCUXGZMW9x0jpT+Ymd0xJHZOkOY3xQeAtGuGC84N7OMEnnCERQtUoC+SIKfgjCk8bZdUPGmvzxEfepjSOy+GdwEaoAWvRardvg0vv/JCVQaDVSVccIrTO1Pp4nTmmcJkL7uqpAoaWUCLR8URdWfkIEyeJr4zQRJh+DSwLtJ/hPJIH4nIsEEo6JCbGIMBdASE2cZvYC/fiCjUgC4dygimMj3vU1TpHq3Jo4WUqST9XCJ9P0VHIwqUSFfNNBmFjWQf5YQeiKOFmifukDbS/A1W+qhh9wpEDA7ulrPo/HzyW7NE4Rq0jriC1kaxvniwN8K5BfE3tMxuSuIxa7xN5L4igZfHEaeRdFORnfWa6t5n+V3gCryt2XFEVRFEVRFEW5KK/XBzWuIqI5RjPSAAAAAElFTkSuQmCC\" alt=\"the fraction 7 over 50, end fraction, equals, the fraction x over 14,878\"></span>. Using cross multiplication, <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAAAWCAYAAAAB6jTvAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACgUlEQVRoQ+2V0bGEIAxFLc+CKMdebGU74QExIcYEgvqxO48zw6yrEJObCy5xD3FZFmOscfvEfP0ae1jimoIef1XiZ4tr+gl7/905XvqhwdeM1NaK8yvEuMfAaqCRikm/xFkXR48psAj0FEykZwhsTq8pMC+kbGEexm+t02q7E+cbgY1U69CA2qoJ5H8VKdAbfLY1xyqjZQhsRh6exso5JXfWbMml+TfjfCNFu3WLqbdq3jE92dar/s1aW8c17S7jpdh0uba6ENZbhsCEw9b/ZFh5torT1tyJc5cSU2hX7okdelfnXs5WrRDPOAC0pCUlgJij3ZNgoZYhKEbDlBwQ03/UW7WNxKFmdUZrLT6DRtjH9YjOtPtDKNrlW3lwrcEQ1/dBvYoh0EGtIx3hiVlJSlqG4GJZTtYAUVEAW9xebd44TyFTOrX26kxGZc9lzfWkPq+37h+iGEeHAonoMEOmZYgiVHJAvvYYAnfEaWc3RLZqG43zFIydL72fpFGdObzuIUOQMM4kM28ZAkSqCbkMYczRGt+qbSROhnZiZ7Ryl5+oHk8MwZstdUZgjsintXs1SpJHgvz6eKxivYMKVse1gMyI21u1jcR5g1qrL/YdnTm8jiHzW+7R0BLzJOs1nZU4x5oDAogTolHbSJynQEyon38iLUZ0turgzcaTUuqv5uIRgI5Lo/HwcruRbxoiI49eXCfj92rzxnkCaXcIDzkZJsW5Azpjs091HAY8zRPvNfPgTjpuvc5TQ2i7A5pZhxbbU5snzl2owbxZ2MDDIG9QTVGH1DCDhoLh+yp8JaXgoO+ayT+knBwv7qjJj5OPOu0InEwmk8lkMplMJpPJZPIDLMsfzCzJsaCk0QsAAAAASUVORK5CYII=\" alt=\"7 times 14,878 equals, x times 50\"></span>; solving for <span class=\"italic\">x</span> yields 2,083. The choice closest to the value of 2,083 is choice B, 2,100.<p>Choices A, C, and D are incorrect and may be the result of errors when setting up the proportion, solving for the unknown, or incorrectly comparing the choices to the number of people expected to name chocolate, 2,083.</p></p>",
    "options": [
      {
        "id": "A",
        "text": "<span class=\"align align-44\">350</span>"
      },
      {
        "id": "B",
        "text": "<span class=\"align align-44\">2,100</span>"
      },
      {
        "id": "C",
        "text": "<span class=\"align align-44\">7,500</span>"
      },
      {
        "id": "D",
        "text": "<span class=\"align align-44\">10,500</span>"
      }
    ]
  },
  {
    "id": "sat-math-infere-f4b3672a",
    "originalId": "f4b3672a",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "easy",
    "stem": "<p class=\"stem_paragraph \">A certain forest is 253 acres. To estimate the number of trees in the forest, a ranger randomly selects 5 different 1-acre parcels in the forest and determines the number of trees in each parcel. The numbers of trees in the sample acres are 51, 59, 45, 52, and 73. Based on the mean of the sample, which of the following ranges contains the best estimate for the number of trees in the entire forest?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p>Choice C is correct. The mean of the 5 samples is <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAAAsCAYAAADYbQz9AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAADqklEQVR4Xu2cC7ajIAyGuzwX5HLcS7fSnThgCC8JBEvv+Pi/czj2qgfDnwRC7cxLYl3f62wO9mPS5rc97njPr3VaPsVrR9Ha8Fmm6Pq0GjOS66NYP8s6mYN5fNJ/r1a9aPpf18+6TOn1Uf5Y33PSb9pSvW0cmEPx2mUhx8/GDe3BsFjDk0FhA4kfRGdb8oAdATt6lwwdWh2h1X9IhHDPr3zC+ASNEpL0yW24QUJsA5kWI3N9IPGsrBWehWwFbMsGnqnz5242NWzX2sBwcNm2SwalVjljddgHHfmmnqS9OjC7wHe+iPvhJP1VQv4Z22DNyNyfRShArBNI0NHJ0LIhPD/tRzof0xME7NR52TvcotGqxCgdJEiH8clQCvwSfsU6YPtp8Bk9z9ug7SnbpGBnQUcmg8aGv0oGv9LUZj+lVjGjdJDYkmjwCmnR9Guhlanuh9PDAsUDlkoSC98/NhnaNkgzlMYJ2iCI7yuXAm07JUbpUIImhL7xuVNVNM8m/Y3NHf1eDqkGZUElgbxDG00jXG7DNksVatc8GY7aEJcopWSQKGn1Sx1iOBFK5cm3NtSem+N9UbDj8ohliRO4NRMyfL/G6TklGyghuBlHbU74fmUgZ4Z+epJhdKmWI/VPwaoPwB4buGTrCW6yp67DJTlrMuTQPfXZS2ODD6xi09jQuGewDjwpaP1g6UuGPj9bNDqcGmkGlJbIXpE0DtDYID03Lm0keoKAKdnUq1XMKB3C332BaunRgWwpBzYF/TEdTo1fDqNBSIO1SEEpoQoCpQ27PYNyJhqWDJ1axYzSge3qTQRLVzJszw12xHg7442+s/OIXaciOCE0SbDeZNCitWG3Zyg4awTSLN2j1RFa/fOqUG7j9GjN8r/WoQbHoP2YNGOAOXrYh/bj1rLrAFweCvJ64u9WVJdAl1+5AIjZAj0q0XJ41coD//J7GgByWl+a0Mpx4W+1wLMQ6/6s5fsQP+s3f7pjV4D0GSiRwK3wSVT76Y7bL8TfNOb3xLib0dD+pP2ceD8gfc2LPQM4JUfLJAlKAFoJOBl2JVZ0jzsFwP1IksGVREgGcGukQE/KJLfqoEwCtya8+Q5BXSqL8nO1DTRQINa1RmFzBP8J7U9BOCG4IRG+gGYTLKsA0MxSee0PwGPQ/FsJAG6P5rU/AI/Ab547/6cKAB4DvqsGwIG3mAA4kAzgcWhe+7tTANwb7Wt/AB6B9rU/AAAAAAAAAAAAAAAAAAAAAAAAAJ7J6/UPyozBX5RBV/EAAAAASUVORK5CYII=\" alt=\"the fraction with numerator, 51 plus 59 plus 45 plus 52 plus 73, and denominator 5, equals 56\"></span> trees per acre. The best estimate for the total number of trees in the forest is the product of the mean number of trees per acre in the sample and the total number of acres in the forest. This is (56)(253) = 14,168, which is between 13,500 and 14,500.<p>Choice A is incorrect and may result from multiplying the minimum number of trees per acre in the sample, 45, by the number of acres, 253. Choice B is incorrect and may result from multiplying the median number of trees per acre in the sample, 52, by the number of acres, 253. Choice D is incorrect and may result from multiplying the maximum number of trees per acre in the sample, 73, by the number of acres, 253.</p><p> </p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">11,000 to 12,000</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">12,500 to 13,500</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">13,500 to 14,500</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">18,000 to 19,000</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-2bab1399",
    "originalId": "2bab1399",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "medium",
    "stem": "<p style=\"text-align: left;\">A researcher is designing a study to investigate the average number of hours participants in a training course spend on a particular activity per day. The researcher will report an estimated average number of hours participants in the training course spend on this activity per day with an associated margin of error. The researcher is considering using a random sample of either <math alttext=\"115\"><mn>115</mn></math> or <math alttext=\"230\"><mn>230</mn></math> participants from the training course. Which of the following would be the most likely effect of using the larger random sample compared to the smaller random sample?</p>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p style=\"text-align: left;\">Choice A is correct. When using a random sample to report an estimated average, a larger sample size, such as <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"230\"><mn>230</mn></math> participants instead of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"115\"><mn>115</mn></math> participants, generally leads to a smaller margin of error. Therefore, the most likely effect of using the larger random sample compared to the smaller random sample is that the reported margin of error would be lower.</p>\n<p style=\"text-align: left;\">Choice B is incorrect and may result from conceptual errors.</p>\n<p style=\"text-align: left;\">Choice C is incorrect and may result from conceptual errors.</p>\n<p style=\"text-align: left;\">Choice D is incorrect and may result from conceptual errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p style=\"text-align: left;\">The reported margin of error would be lower.</p>"
      },
      {
        "id": "B",
        "text": "<p style=\"text-align: left;\">The reported margin of error would be higher.</p>"
      },
      {
        "id": "C",
        "text": "<p style=\"text-align: left;\">The reported average number of hours would be lower.</p>"
      },
      {
        "id": "D",
        "text": "<p style=\"text-align: left;\">The reported average number of hours would be higher.</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-37930b2a",
    "originalId": "37930b2a",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "medium",
    "stem": "<p class=\"stem_paragraph \">Residents of a town were surveyed to determine whether they are satisfied with the concession stand at the local park. A random sample of 200 residents was selected. All 200 responded, and 87% said they are satisfied. Based on this information, which of the following statements must be true?<p class=\"list_paragraph \">I. Of all the town residents, 87% would say they are satisfied with the concession stand at the local park.<br>\nII. If another random sample of 200 residents were surveyed, 87% would say they are satisfied.</p></p>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p>Choice A is correct. The purpose of surveying a random sample of residents is to approximate the percent of the town residents that are satisfied with the concession stand. The sample doesn&rsquo;t necessarily get the same result as surveying every resident of the town, nor would another sample necessarily have identical results. Therefore, although it&rsquo;s possible that either statement I or statement II could prove true by surveying every resident of the town, these statements cannot be proven true solely based on the results of the sample.<p>Choice B is incorrect because surveying a sample of the town residents may not have the same result as surveying all the town residents. Choices C and D are incorrect because surveying a different sample of residents could yield different results.</p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">Neither</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">I only</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">II only</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">I and II</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-3e1bd4e2",
    "originalId": "3e1bd4e2",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "medium",
    "stem": "<p style=\"text-align: left;\">Researchers studied a sample of a species of fish from a certain location. The researchers found that the mean length of fish in the sample was <math alttext=\"16.59\"><mn>16.59</mn></math> millimeters. Based on the sample mean and margin of error, the researchers estimated that the mean length of all fish of this species from this location was between <math alttext=\"15.86\"><mn>15.86</mn></math> and <math alttext=\"17.32\"><mn>17.32</mn></math> millimeters. What is the margin of error, in millimeters?</p>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p style=\"text-align: left;\">Choice A is correct. It&rsquo;s given that the mean length of fish in the sample was <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"16.59\"><mn>16.59</mn></math> millimeters. It&rsquo;s also given that based on the sample mean and margin of error, the researchers estimated that the mean length of all fish of this species from this location was between <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"15.86\"><mn>15.86</mn></math> and <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"17.32\"><mn>17.32</mn></math> millimeters. These values are calculated by subtracting the margin of error from <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"16.59\"><mn>16.59</mn></math> millimeters to get the lower bound, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"15.86\"><mn>15.86</mn></math> millimeters, and by adding the margin of error to <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"16.59\"><mn>16.59</mn></math> millimeters to get the upper bound, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"17.32\"><mn>17.32</mn></math> millimeters. It follows that the margin of error, in millimeters, can be calculated as the difference between <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"16.59\"><mn>16.59</mn></math> and <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"15.86\"><mn>15.86</mn></math> or between <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"17.32\"><mn>17.32</mn></math> and <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"16.59\"><mn>16.59</mn></math>. The difference between <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"16.59\"><mn>16.59</mn></math> and <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"15.86\"><mn>15.86</mn></math> is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"16.59 minus 15.86\"><mn>16.59</mn><mo>-</mo><mn>15.86</mn></math>, or <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.73\"><mn>0.73</mn></math>. Therefore, the margin of error, in millimeters, is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"0.73\"><mn>0.73</mn></math>.</p>\n<p style=\"text-align: left;\">Choice B is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. This is the lower bound of the researchers' estimate of the mean length of all fish of this species from this location, not the margin of error.</p>\n<p style=\"text-align: left;\">Choice D is incorrect. This is the mean length of fish in the sample, not the margin of error.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"0.73\"><mn>0.73</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"2.19\"><mn>2.19</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"15.86\"><mn>15.86</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"16.59\"><mn>16.59</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-4096a482",
    "originalId": "4096a482",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "medium",
    "stem": "<p style=\"text-align: left;\">Based on a random sample from a population, a researcher estimated that the mean value of a certain variable for the population is <math alttext=\"20.5\"><mn>20.5</mn></math>, with an associated margin of error of <math alttext=\"1\"><mn>1</mn></math>. Which of the following is the most appropriate conclusion?</p>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p style=\"text-align: left;\">Choice A is correct. It's given that based on a random sample from a population, the estimated mean value for a certain variable for the population is <math alttext=\"20.5\"><mn>20.5</mn></math>, with an associated margin of error of <math alttext=\"1\"><mn>1</mn></math>. This means that it is plausible that the actual mean value of the variable for the population is between <math alttext=\"20.5 minus 1\"><mn>20.5</mn><mo>-</mo><mn>1</mn></math> and <math alttext=\"20.5 plus 1\"><mn>20.5</mn><mo>+</mo><mn>1</mn></math>. Therefore, the most appropriate conclusion is that it is plausible that the actual mean value of the variable for the population is between <math alttext=\"19.5\"><mn>19.5</mn></math> and <math alttext=\"21.5\"><mn>21.5</mn></math>.</p>\n<p style=\"text-align: left;\">Choice B is incorrect. The estimated mean value and associated margin of error describe only plausible values, not all the possible values, for the actual mean value of the variable, so this is not an appropriate conclusion.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. The estimated mean value and associated margin of error describe only plausible values for the actual mean value of the variable, not all the possible values of the variable, so this is not an appropriate conclusion.</p>\n<p style=\"text-align: left;\">Choice D is incorrect. Since <math alttext=\"20.5\"><mn>20.5</mn></math> is the estimated mean value of the variable based on a random sample, the actual mean value of the variable may not be exactly <math alttext=\"20.5\"><mn>20.5</mn></math>. Therefore, this is not an appropriate conclusion.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p style=\"text-align: left;\">It is plausible that the actual mean value of the variable for the population is between <math alttext=\"19.5\"><mn>19.5</mn></math> and <math alttext=\"21.5\"><mn>21.5</mn></math>.</p>"
      },
      {
        "id": "B",
        "text": "<p style=\"text-align: left;\">It is not possible that the mean value of the variable for the population is less than <math alttext=\"19.5\"><mn>19.5</mn></math> or greater than <math alttext=\"21.5\"><mn>21.5</mn></math>.</p>"
      },
      {
        "id": "C",
        "text": "<p style=\"text-align: left;\">Every value of the variable in the population is between <math alttext=\"19.5\"><mn>19.5</mn></math> and <math alttext=\"21.5\"><mn>21.5</mn></math>.</p>"
      },
      {
        "id": "D",
        "text": "<p style=\"text-align: left;\">The mean value of the variable for the population is <math alttext=\"20.5\"><mn>20.5</mn></math>.</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-53d97af5",
    "originalId": "53d97af5",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "medium",
    "stem": "<p class=\"stem_paragraph \">A study was done on the weights of different types of fish in a pond. A random sample of fish were caught and marked in order to ensure that none were weighed more than once. The sample contained 150 largemouth bass, of which 30% weighed more than 2 pounds. Which of the following conclusions is best supported by the sample data?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p>\n        <!--StartFragment-->\n      <p>Choice D is correct. The sample of 150 largemouth bass was selected at random from all the largemouth bass in the pond, and since 30% of the fish in the sample weighed more than 2 pounds, it can be concluded that approximately 30% of all largemouth bass in the pond weigh more than 2 pounds.</p><p>Choices A, B, and C are incorrect. Since the sample contained 150 largemouth bass, of which 30% weighed more than 2 pounds, this result can be generalized only to largemouth bass in the pond, not to all fish in the pond.</p><p>\n        <!--EndFragment-->\n      </p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p>The majority of all fish in the pond weigh less than 2 pounds.</p>"
      },
      {
        "id": "B",
        "text": "<p>The average weight of all fish in the pond is approximately 2 pounds.</p>"
      },
      {
        "id": "C",
        "text": "<p>Approximately 30% of all fish in the pond weigh more than 2 pounds.</p>"
      },
      {
        "id": "D",
        "text": "<p>Approximately 30% of all largemouth bass in the pond weigh more than 2 pounds.</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-642519d7",
    "originalId": "642519d7",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "medium",
    "stem": "<p class=\"stem_paragraph \">A polling agency recently surveyed 1,000 adults who were selected at random from a large city and asked each of the adults, &ldquo;Are you satisfied with the quality of air in the city?&rdquo; Of those surveyed, 78 percent responded that they were satisfied with the quality of air in the city. Based on the results of the survey, which of the following statements must be true?<ol class=\"list_upper_roman\">\n            <li class=\"list_paragraph \">Of all adults in the city, 78 percent are satisfied with the quality of air in the city.</li>\n            <li class=\"list_paragraph \">If another 1,000 adults selected at random from the city were surveyed, 78 percent of them would report they are satisfied with the quality of air in the city.</li>\n            <li class=\"list_paragraph \">If 1,000 adults selected at random from a different city were surveyed, 78 percent of them would report they are satisfied with the quality of air in the city.</li>\n          </ol></p>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p>Choice A is correct. Statement I need not be true. The fact that 78% of the 1,000 adults who were surveyed responded that they were satisfied with the air quality in the city does not mean that the exact same percentage of <span class=\"underline\">all</span> adults in the city will be satisfied with the air quality in the city. Statement II need not be true because random samples, even when they are of the same size, are not necessarily identical with regard to percentages of people in them who have a certain opinion. Statement III need not be true for the same reason that statement II need not be true: results from different samples can vary. The variation may be even bigger for this sample since it would be selected from a different city. Therefore, none of the statements must be true.<p>Choices B, C, and D are incorrect because none of the statements must be true.</p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p>None</p>"
      },
      {
        "id": "B",
        "text": "<p>II only</p>"
      },
      {
        "id": "C",
        "text": "<p>I and II only</p>"
      },
      {
        "id": "D",
        "text": "<p>I and III only</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-89f8d08a",
    "originalId": "89f8d08a",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "medium",
    "stem": "<p class=\"stem_paragraph \">A store manager reviewed the receipts from 80 customers who were selected at random from all the customers who made purchases last Thursday. Of those selected, 20 receipts showed that the customer had purchased fruit. If 1,500 customers made purchases last Thursday, which of the following is the most appropriate conclusion?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p>Choice D is correct. It&rsquo;s given that the manager took a random selection of the receipts of 80 customers from a total of 1,500. It&rsquo;s also given that of those 80 receipts, 20 showed that the customer had purchased fruit. This means that an appropriate estimate of the fraction of customers who purchased fruit is <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABKUlEQVRYR+2Wiw3DIAxEGY+BGIddWCWbuBDiYgxOKDVSpfIk1CYiPuPjZyQADvDWQPqLzfoj/VZAcKSPhdil6fNIEXMQIAfAwFQ0vysi/HkYODzYzoeHt/E5J4FJ8VEHFxN14TNBiTyCS/BMykCMLSZ1vZrnzN76ODYUbKtAk7pezYEe4ogkv6Z9pKAY9WaZYPaknQhLSnp6FmN015/2pMGR9cQSqssCs5fEEO7XtH9v37qtLlfd94vJstmMQGbbkrb5B/C0wMZPhkTeP7HPF1tbFiv7JgamomqbN0QZx4In6NGz5Hi6FdQ+gJ9KuuSKcXfWSX5N+Yj+VCNktwBdwQF/VEs6kr3qpJGC0exVl0WimaXMwwSvhFSZYbJoab1r4761bTabX8OYF0juinCcJLkMAAAAAElFTkSuQmCC\" alt=\"the fraction 20 over 80\"></span>, or <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAwCAYAAAAVQYoQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAY00gKyAAAAKxJREFUeNpjYCAMWoB4GxA/B+L/UD5VwBcgPgbEU6ltMBMSm6oGM4waPGow/QwOQcIgg9cg8Sl2JS48CkYBDZIVKXgUDELACMSHaFF05gDxU2obrADEn4E4kNoG7wbiddQu7FOA+AMQS1LTYGmooWnUrp42A/FBaIqgmsGgOu03EJsDsQASBhncDWUzkWNwAxEFjg65ScwBCwYZuBjK5h7ZraFRMApGwSigGgAA0c1V2axbieYAAAAASUVORK5CYII=\" alt=\"one fourth \"></span>. Multiplying this fraction by the total number of customers yields <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAAuCAYAAAABb8ZBAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAXQ/cXWQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAADtUlEQVR4Xu2YgXHrIAyGvVR3yEDeIwt4l6ySTXiWhBwgAgvZTsg7fXe0NQUD+iUBniTCcwm32xKeIYRYdYiz3+dcRAiPME/z+lMn1GOewm157rYNjzlM88PFH5WwxuZym8KqkUokFHT9pREf0DqK8wVQTGV6fi43FB6KVlBM/9MtrM3dAUaC0r0u6iniQUTq0xPNEP2e/gejJ+oZdpge8T36B4P3+t792CS+cSznIqzRaBEfwPOCX/3GgPZw/fWOsYpvHc+5ADyEGSLRLH7sp71SOhfBe7DlBH5UfKnfLxwIe7+HDMuRA5hdfHlMet9v3AR+aa5VrAICR/pK9/3WF0Dt10GeE/yZlWIsOnfw/2UR99pYrsda0D6VsfN5leXVdtcWIdzD3/rr737+AlqU4lO6lw+BvFiV+I33MPS+xEjFM6Bqc1H6J+Ffa5DGLtmEVtoU4U5nL2CPUny8/iXPTO9nZDRUIxprW046H00bBscT5m2FBMv10GzNpcMAe7YYRnx4Lufw8niao0Z8SaAUybgAORkZT9MmVqkyzVFY/Nq6avPds8UQ4tPi6mmN57gn/hYh84zGgCooaT8y1PtY5Gip+O02sSrOTWgb5wx/torG7uR0dfugLYsI19him+R3xZcNyOjFjwZPDMFRwX1f2SQfK63XtIlV0cj1uR8h3fJq+pTrYzS2WBupDnzwP2sRuUL8GllK/yHxGRZNSuHSVtQia8+G/R8iv0YmrCKla9rEqurcec7wZ6to7S6lfk7tklPUyBx4DPFpEbU5nC/++1hZdlC0iVVxbnndFWSiRSx2GU58AJ5ri9AuUiVsdLTyXZIzttowaMzWdaoTEkfpeJUMBagceBTxW0ZUix9FS40kGTPzfuEZ0LQBWk5rYVtDelCLayjHoXo566hscfQLX83D9rj/rRNbB42P22Sl97TER09ODbUt+lWkd1IEcBs5evba0LzkvkfoW4MsPrD7nqORjxFs6H9WCsUFzuel3R7A+GdG/cdh77AsgtMIlB7xW2OSN+ujCTNP4URXs0XUiXv9V9gW0mlA7jcv/Wlfu4drAGfpGdspwBTc6cUYodDHsOdbzwnOBbROjRLpOcEiZO94zoWQgPp9Nj2sWcTfsoaL/31aB7CS0lF6xe8Zy/kQ2msWncbphP9e9rNHb5ZxPoD1vt8b+dL93hkA00eWDvE96gdmu7t3RH+P+BD1vtcPDKX/869hmFU83Y8PRvOJV7Gz3+c4juM4juM4juM4juM4DjJN/wA8qhPW32YnHwAAAABJRU5ErkJggg==\" alt=\"one fourth times 1,500, equals 375\"></span>. Therefore, the best estimate for the number of customers who purchased fruit is 375.<p>Choices A and B are incorrect because an exact number of customers can&rsquo;t be known from taking a random selection. Additionally, choice A may also be the result of a calculation error. Choice C is incorrect and may result from a calculation error. </p><p> </p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">Exactly 75 customers must have purchased fruit last Thursday.</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">Exactly 375 customers must have purchased fruit last Thursday.</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">The best estimate for the number of customers who purchased fruit last Thursday is 75.</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">The best estimate for the number of customers who purchased fruit last Thursday is 375.</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-9bedc4a0",
    "originalId": "9bedc4a0",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "medium",
    "stem": "<p style=\"text-align: left;\">A company that produces socks wants to estimate the percent of the socks produced in a typical week that are defective. A random sample of <math alttext=\"310\"><mn>310</mn></math> socks produced in a certain week were inspected. Based on the sample, it is estimated that <math alttext=\"12 percent sign\"><mn>12</mn>\n<mo>%</mo></math> of all socks produced by the company in this week are defective, with an associated margin of error of <math alttext=\"3.62 percent sign\"><mn>3.62</mn>\n<mo>%</mo></math>. Based on the estimate and associated margin of error, which of the following is the most appropriate conclusion about all socks produced by the company during this week?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p style=\"text-align: left;\">Choice B is correct. It&rsquo;s given that, based on the sample, an estimate of <math alttext=\"12 percent sign\"><mn>12</mn><mo>%</mo></math> of all socks produced by the company in a certain week are defective, with an associated margin of error of <math alttext=\"3.62 percent sign\"><mn>3.62</mn><mo>%</mo></math>. This estimate, plus or minus the margin of error, gives an interval of plausible values for the actual percent of all socks produced by the company that week that are defective. Subtracting <math alttext=\"3.62 percent sign\"><mn>3.62</mn><mo>%</mo></math> from <math alttext=\"12 percent sign\"><mn>12</mn><mo>%</mo></math> yields <math alttext=\"8.38 percent sign\"><mn>8.38</mn><mo>%</mo></math>. Adding <math alttext=\"3.62 percent sign\"><mn>3.62</mn><mo>%</mo></math> to <math alttext=\"12 percent sign\"><mn>12</mn><mo>%</mo></math> yields <math alttext=\"15.62 percent sign\"><mn>15.62</mn><mo>%</mo></math>. Therefore, it is plausible that between <math alttext=\"8.38 percent sign\"><mn>8.38</mn><mo>%</mo></math> and <math alttext=\"15.62 percent sign\"><mn>15.62</mn><mo>%</mo></math> of all socks produced by the company are defective.</p>\n<p style=\"text-align: left;\">Choice A is incorrect and may result from conceptual errors.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. <math alttext=\"12 percent sign\"><mn>12</mn><mo>%</mo></math> is the estimated percent of defective socks based on the sample. However, since the margin of error for this estimate is known, the most appropriate conclusion is not that the percent of defective socks is exactly <math alttext=\"12 percent sign\"><mn>12</mn><mo>%</mo></math> but instead that it lies in an interval of plausible percents.</p>\n<p style=\"text-align: left;\">Choice D is incorrect and may result from conceptual errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"3.62 percent sign\"><mn>3.62</mn>\n<mo>%</mo></math> of the socks are defective.</p>"
      },
      {
        "id": "B",
        "text": "<p>It is plausible that between <math alttext=\"8.38 percent sign\"><mn>8.38</mn>\n<mo>%</mo></math> and <math alttext=\"15.62 percent sign\"><mn>15.62</mn>\n<mo>%</mo></math> of the socks are defective.</p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"12 percent sign\"><mn>12</mn>\n<mo>%</mo></math> of the socks are defective.</p>"
      },
      {
        "id": "D",
        "text": "<p>It is plausible that more than <math alttext=\"15.62 percent sign\"><mn>15.62</mn>\n<mo>%</mo></math> of the socks are defective.</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-9ee22c16",
    "originalId": "9ee22c16",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "medium",
    "stem": "<p class=\"passage_para \">The town has a total of 6,000 voters. Based on the table, what is the best estimate of the number of voters who plan to vote for Candidate A?</p>",
    "type": "grid-in",
    "correctAnswer": "3",
    "explanation": "<p>The correct answer is 3,540. According to the table, of 400 voters randomly sampled, the total number of men and women who plan to vote for Candidate A is <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAAWCAYAAAAsNNkQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACAUlEQVRoQ+1W7RWEIAxzPAdyHHa5VdyEA0u0FCr161/zHu8UMSRN9ZwyYlxjmKeYDzHmsObfCvG3sDVzTEuqNVaeJ/gtnL/VwBHXEOf0s/z0NXdh9WrRC535cBtJ8HYh49hoicnHdgFB8A1p7tigOTfyPAGZlfx6SCjO2wFZvVr04j5ojGn1wnkovdbkGuZ0TuQQJAu9CShpW3jKVAOIOitk72nQdGXAeB6vB2SpmUGvpt9Ss2JQ3yzDVHzGU6YaWALqAQarV0IC5pfQ1/0VRl6lXi1oE7anYw6JEgG1RJbic54y1eBuQNQgSifnPZXGArBvPjwbVl0jr1LvUb9aR++NUIFuPITRuRaQ3gGSR8PVgMhov3icS3vyv8CZV00v7qlCK5rVkPabEhPNYO5aQD0e4K3OhRm+R/u/+H1AZ145pF7cZ/4P2pMWGxGxFlBLpPFouPuKy6C9SJvUOQrojUa56rXSWwKS/DQv6r11XrrWe7Q0o7RZHdAZj4YnAXEze7G6Qxh+Abe8Mr1aXZuAYEzbKDF1Pwf56yRjxKPBEpDWbb0mAUZP0BMMa2bQC9+So/IEE6OiylSbcyNPD6aA8InKvpJQBLVIHwVk8WrVK4NsuNEJ/VF3Zr22fmVc4bmL3TTjPg31o4CsXq16ERLGnSZ3OBwOh8PhcDgcDofD4ZimP1qUrtaXEqC8AAAAAElFTkSuQmCC\" alt=\"202 plus 34 equals 236\"></span>. The best estimate of the total number of voters in the town who plan to vote for Candidate A is the fraction of voters in the sample who plan to vote for Candidate A, <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAsCAYAAADikXHLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAWNPAnzwAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABnklEQVRYR+2Xi63DIAxFMx4DMQ67ZJVswsMxJgbsxtBWeao4EmpDHXz9IaGbRoxHDG6L8JWGCwd8Vuye27iYTDqbeIToik0afu9sbrkE+bhHdBJ3fy7IhaGg1qYWRvclHWiTrH2zjgmMrI/6CC5dowiKnpwBFAw5bK8Jvk6emgej1hcrGc7l0YL7KGe5XEiuZSeYgUvEFQSWDKZgDJdOo+0NDopBh1U58z2V0Fz2t4WVxXNZNMouo/Ll+z7eUyULN4IIXkItuzg/2Wv0DBpJNXco7VBgWhRlSBOkZYGXRnsmTZXP0oxl+7PdSEL5fa346UYvfSSOK8IijP3eZg4gYTSGBS0Wv061Qx4ai8VzaG97oH6FyG9+i80wdIS5O4K014DFZhgeJRel/VM5A0iG8N1iMwwt6kNfPq2k1XnKYJOn7Jw3w3lJWBwd9mXAzHJRr23ylA06NYIQKWKtN/i8xSZP2ah64z+IatMuijKUxmKTp+55fRxGJ5JQ4OuNToiZeuqRQGgRt70h9YrFZgpNFFCXWnZmsVksFovF77Ftf0fsniy1Y0AkAAAAAElFTkSuQmCC\" alt=\"the fraction 236 over 400\"></span>, multiplied by the total voter population of 6000. Therefore, the answer is <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAAAuCAYAAADZT6AOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAAXQ/cXWQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAE3ElEQVR4Xu2ZgZmzLAzHu9Tt0IG6xy3QXW6VbsJnCNEYE4iKb9Uvv+fhrtIgJPwJaB8a6fNOz+c7fVJKpeqrnG08wQGk9Jdej9fwV5/kNEz/+/mA78byfH8Wtn8vbvNMg8nCJgtqtBnK629hQ6S/V/X74MKQqIb5VSd4Et0kzCyI4R8XH4pO2szFR+2oLxS8LmIC7lv7PrgoWQyVLQ0z1DJ7fd7P4RqFRlmMi5cES6KR1wS/T6maYfUfXBjKOFa2q4HZy7E9l61yj4ByNi33CW5AK9vVyGKotMVMNgltEiqKHaqgeLbRyHo3wtr6PMizGgcFh6Kabb2lzUyMZYtujWHPWIOTsTWLjAJqbH0kqnGrLe3WnvGIbBevV67PtPX5J3LMZs7zFt9urSyJ9e0FsGW8wQlpndEk+Lpk3XbHRUUZcLPwytlQtg8uhHzibEGZzhKdlc34Nmq9s+M2pUql9s7PK95vszbut2PNYd3zADAGlGVQEiNvJwXqfbgArDHjPa61BcPu8b/M3LXsIRnPdWqZJnwUH/teCy6Jj4pnDIT2Pk+bxPHBhopoYzEfm55Be9gcuVjoSITFtwuQHuDjrBhxo/i251f0n9Jv+hn+/fz2d/xIpPC0CSTHKSjeRYbtpkDJa6CXDQC+rFl0HlB0LBkYfUvWLgQStxRe03eaDE2xZ0YKL2djLkRjO26dI612vL9eNkSelI6vh7QsZI1HsmYsKKal8Fy+30F45OjM+Rz89gqXWFvH7OGok02pWp1ltkAxkqKXaAtDY4z5e+mny/d7CA98mIsMVyM4if5BFZTmis9BWwp2uh+Jar9NqVLHD9DcwMda8cwdTvqyDw6J6fl6ZeFAFRQtZvl+kBkVkbl8v7fwIHBTPa3EmviwnRU0rO9lU6rKhC9te4CC8wl0FDp/I6HEjGuGvp8Jz+O78+ECvvtWUfEKT4pM2+o4nqD1silVhwqPIIF4tlGJjNks9tuFd++MJ/2ygkJgIK2g+bdRj02pUscP0NzAx1rxzp1nu9XgMZN+qcLz+H4P4ZWD7sL5rcJbtuOrvpdNqSp9zuuOoOW7BW+H41+KHwvauHy/g/CA7BS7Jr9Wb7V0wBbtNKHvtSHyxPZ8nZKF4hM9Z81iIbQ2Lt/vIjwta8gJoCDxgOT7MBtAZgZ5DfSyAWAMcpL2QBM/e0jIfdd9H9uxOFI7Sx+WWJu+7/nlwuoUoAFjWQYb8NhY/P4MbYZBl8sMBFIPAPVhrMKhXrbDVU7t9LH1sNEWTA8mEU1F+qguOkc7Tk0DVd/3ZDxr0ppqH/DY1Mh9Dx2Xy8zWSdQE+6/4Zt/A1/q39uMWPJPwgVv340Lx2NSojXmtgGvnlyMZM4vD36P4lu+ZLQGgNlt/LvHYlCoV68EhuBg506x4qsoC2fFzicemVKlYwg0uhnfCAX4m1ARgbXW83mNTqlTWjDc4MVYG0pid1b4kvDHjhvCuDZ3ZWmcmKVBVeIaIeZby2JSqBd6xBhchT3oji+Dhf8h4akEhaWIEej1cWKINLsqW93magKyM1Ot1iveVS3AhPFmPY2UueVaT14DHRhLZ7qZQJpJCsrCEB8y3ZV0sHhsOZLs4290U3HLP96oiZ8TYYu9NzmQnel1xtvEEQRAEQRAEQRAEQRAEQRAEQXAIj8d/xSkFLEu6SkUAAADjdEVYdE1hdGhNTAA8bWF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCI+PG1mZW5jZWQ+PG1mcmFjPjxtbj4yMzY8L21uPjxtbj40MDA8L21uPjwvbWZyYWM+PC9tZmVuY2VkPjxtZmVuY2VkPjxtcm93Pjxtbj42PC9tbj48bW8+LDwvbW8+PG1uPjAwMDwvbW4+PC9tcm93PjwvbWZlbmNlZD48bW8+PTwvbW8+PG1uPjM8L21uPjxtbz4sPC9tbz48bW4+NTQwPC9tbj48L21hdGg+bsNI6wAAAABJRU5ErkJggg==\" alt=\"open parenthesis, the fraction 236 over 400, close parenthesis, times, 6000, equals 3540\"></span>.</p>",
    "passage": "<p class=\"passage_para \">A random sample of 400 town voters were asked if they plan to vote for Candidate A or Candidate B for mayor. The results were sorted by gender and are shown in the table below.<table class=\"table_WithBorder\" style=\"width: 33%;\"><thead><tr><td class=\"tcp-538ff2b6-a040-41f0-a6d9-f2db4ed055de\"> </td><th class=\"tcp-7252f876-467b-4b75-83f3-42a7b9ea0d26\" scope=\"col\" style=\"text-align: center; vertical-align: middle;\">Plan to vote for Candidate A</th><th class=\"tcp-804cc4d5-a457-47c5-95f5-49ce60f4da4a\" scope=\"col\" style=\"text-align: center; vertical-align: middle;\">Plan to vote for Candidate B</th></tr></thead><tbody><tr><th class=\"tcp-8b717317-305e-4ca7-860c-2bdf416ae748\" scope=\"row\">Female</th><td class=\"tcp-701845a5-58b1-4f34-8ea5-51f0754f3967 para_center\" style=\"text-align: center; vertical-align: middle;\">202</td><td class=\"tcp-84ed49c6-23c5-461e-a80f-bde9ee399820 para_center\" style=\"text-align: center; vertical-align: middle;\">20</td></tr><tr><th class=\"tcp-04f1c22d-cd41-4a63-aae3-3de6b69017a2\" scope=\"row\">Male</th><td class=\"tcp-ce0f36a3-10cd-4148-bce6-5cee344d0a56 para_center\" style=\"text-align: center; vertical-align: middle;\">34</td><td class=\"tcp-4c42829e-5d6c-481e-b2e0-5b71a1d038a9 para_center\" style=\"text-align: center; vertical-align: middle;\">144</td></tr></tbody></table></p>"
  },
  {
    "id": "sat-math-infere-a2162ea1",
    "originalId": "a2162ea1",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "medium",
    "stem": "<p style=\"text-align: left;\">A company fills boxes with approximately <math alttext=\"23\"><mn>23</mn></math> pounds of oranges. To test the accuracy of the filling process, <math alttext=\"344\"><mn>344</mn></math> boxes of oranges were selected at random and weighed. Based on the sample, it is estimated that the average weight of all boxes of oranges filled by the company in an <math alttext=\"8\"><mn>8</mn></math>-hour period is <math alttext=\"23.1\"><mn>23.1</mn></math> pounds, with an associated margin of error of <math alttext=\"0.19\"><mn>0.19</mn></math> pounds. Which of the following is the best interpretation of this estimate?</p>",
    "type": "mcq",
    "correctAnswer": "A",
    "explanation": "<p style=\"text-align: left;\">Choice A is correct. It's given that the estimate for the average weight of all boxes of oranges filled by the company in an <math alttext=\"8\"><mn>8</mn></math>-hour period is <math alttext=\"23.1\"><mn>23.1</mn></math> pounds, with an associated margin of error of <math alttext=\"0.19\"><mn>0.19</mn></math> pounds. It follows that plausible values for this average weight are between <math alttext=\"23.1 minus 0.19\"><mn>23.1</mn><mo>-</mo><mn>0.19</mn></math> pounds and <math alttext=\"23.1 plus 0.19\"><mn>23.1</mn><mo>+</mo><mn>0.19</mn></math> pounds. Therefore, plausible values for the average weight of all boxes of oranges filled by the company are between <math alttext=\"22.91\"><mn>22.91</mn></math> pounds and <math alttext=\"23.29\"><mn>23.29</mn></math> pounds.</p>\n<p style=\"text-align: left;\">Choice B is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice C is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice D is incorrect and may result from conceptual or calculation errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p>Plausible values for the average weight of all boxes of oranges filled by the company are between <math alttext=\"22.91\"><mn>22.91</mn></math> pounds and <math alttext=\"23.29\"><mn>23.29</mn></math> pounds.</p>"
      },
      {
        "id": "B",
        "text": "<p>Plausible values for the average weight of all boxes of oranges filled by the company are less than <math alttext=\"22.91\"><mn>22.91</mn></math> pounds or greater than <math alttext=\"23.29\"><mn>23.29</mn></math> pounds.</p>"
      },
      {
        "id": "C",
        "text": "<p>The average weight of all boxes of oranges filled by the company is less than <math alttext=\"23.01\"><mn>23.01</mn></math> pounds.</p>"
      },
      {
        "id": "D",
        "text": "<p>The average weight of all boxes of oranges filled by the company is greater than <math alttext=\"23.01\"><mn>23.01</mn></math> pounds.</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-b4f5a7ca",
    "originalId": "b4f5a7ca",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "medium",
    "stem": "<p class=\"stem_paragraph \">A survey was conducted using a sample of history professors selected at random from the California State Universities. The professors surveyed were asked to name the publishers of their current texts. What is the largest population to which the results of the survey can be generalized?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p>Choice C is correct. Selecting a sample at random when conducting a survey allows the results to be generalized to the population from which the sample was selected, but not beyond this population. In this situation, the population that the sample was selected from is history professors from the California State Universities. Therefore, the largest population to which the results of the survey can be generalized is all history professors at all California State Universities.<p>Choices A, B, and D are incorrect. Since the sample was selected at random from history professors from the California State Universities, the results of the survey can&rsquo;t be generalized to all professors in the United States, all history professors in the United States, or all professors at all California State Universities. All three of these populations may use different texts and therefore may name different publishers.</p><p> </p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">All professors in the United States</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">All history professors in the United States</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">All history professors at all California State Universities</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">All professors at all California State Universities</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-e03f3477",
    "originalId": "e03f3477",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "medium",
    "stem": "<p>A sample consisting of <math alttext=\"720\"><mn>720</mn></math> adults who own televisions was selected at random for a study. Based on the sample, it is estimated that <math alttext=\"32 percent sign\"><mn>32</mn>\n<mo>%</mo></math> of all adults who own televisions use their televisions to watch nature shows, with an associated margin of error of <math alttext=\"3.41 percent sign\"><mn>3.41</mn>\n<mo>%</mo></math>. Which of the following is the most plausible conclusion about all adults who own televisions?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p style=\"text-align: left;\">Choice B is correct. It's given that based on a sample selected at random, it's estimated that <math alttext=\"32 percent sign\"><mn>32</mn><mo>%</mo></math> of all adults who own televisions use their televisions to watch nature shows, with an associated margin of error of <math alttext=\"3.41 percent sign\"><mn>3.41</mn><mo>%</mo></math>. Subtracting the margin of error from the estimate and adding the margin of error to the estimate gives an interval of plausible values for the true percentage of adults who own televisions who use their televisions to watch nature shows. This means it's plausible that between <math alttext=\"32 percent sign minus 3.41 percent sign\"><mn>32</mn><mo>%</mo><mo>-</mo><mn>3.41</mn><mo>%</mo></math>, or <math alttext=\"28.59 percent sign\"><mn>28.59</mn><mo>%</mo></math>, and <math alttext=\"32 percent sign plus 3.41 percent sign\"><mn>32</mn><mo>%</mo><mo>+</mo><mn>3.41</mn><mo>%</mo></math>, or <math alttext=\"35.41 percent sign\"><mn>35.41</mn><mo>%</mo></math>, of all adults who own televisions use their televisions to watch nature shows. Therefore, of the given choices, the most plausible conclusion is that between <math alttext=\"28.59 percent sign\"><mn>28.59</mn><mo>%</mo></math> and <math alttext=\"35.41 percent sign\"><mn>35.41</mn><mo>%</mo></math> of all adults who own televisions use their televisions to watch nature shows.</p>\n<p style=\"text-align: left;\">Choice A is incorrect and may result from conceptual errors.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. To make a plausible conclusion about all adults who own televisions, the sample must be selected at random from all adults who own televisions, not just those who use their televisions to watch nature shows.</p>\n<p style=\"text-align: left;\">Choice D is incorrect. Since the sample was selected at random from all adults who own televisions, a plausible conclusion can be made about all adults who own televisions.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p style=\"text-align: left;\">More than <math alttext=\"35.41 percent sign\"><mn>35.41</mn>\n<mo>%</mo></math> of all adults who own televisions use their televisions to watch nature shows.</p>"
      },
      {
        "id": "B",
        "text": "<p style=\"text-align: left;\">Between <math alttext=\"28.59 percent sign\"><mn>28.59</mn>\n<mo>%</mo></math> and <math alttext=\"35.41 percent sign\"><mn>35.41</mn>\n<mo>%</mo></math> of all adults who own televisions use their televisions to watch nature shows. </p>"
      },
      {
        "id": "C",
        "text": "<p style=\"text-align: left;\">Since the sample included adults who own televisions and not just those who use their televisions to watch nature shows, no conclusion can be made.</p>"
      },
      {
        "id": "D",
        "text": "<p style=\"text-align: left;\">Since the sample did not include all the people who watch nature shows, no conclusion can be made.</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-f04d40b2",
    "originalId": "f04d40b2",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "medium",
    "stem": "<p>From a population of <math alttext=\"50,000\"><mn>50,000</mn></math> people, <math alttext=\"1,000\"><mn>1,000</mn></math> were chosen at random and surveyed about a proposed piece of legislation. Based on the survey, it is estimated that <math alttext=\"35 percent sign\"><mn>35</mn>\n<mo>%</mo></math> of people in the population support the legislation, with an associated margin of error of <math alttext=\"3 percent sign\"><mn>3</mn>\n<mo>%</mo></math>. Based on these results, which of the following is a plausible value for the total number of people in the population who support the proposed legislation?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p>Choice C is correct. It&rsquo;s given that an estimated <math alttext=\"35 percent sign\"><mn>35</mn><mo>%</mo></math> of people in the population support the legislation, with an associated margin of error of <math alttext=\"3 percent sign\"><mn>3</mn><mo>%</mo></math>. Subtracting and adding the margin of error from the estimate gives an interval of plausible values for the true percentage of people in the population who support the legislation. Therefore, it&rsquo;s plausible that between <math alttext=\"32 percent sign\"><mn>32</mn><mo>%</mo></math> and <math alttext=\"38 percent sign\"><mn>38</mn><mo>%</mo></math> of people in this population support the legislation. The corresponding numbers of people represented by these percentages in the population can be calculated by multiplying the total population, <math alttext=\"50,000\"><mn>50,000</mn></math>, by <math alttext=\"0.32\"><mn>0.32</mn></math> and by <math alttext=\"0.38\"><mn>0.38</mn></math>, which gives <math alttext=\"50,000 left parenthesis 0.32 right parenthesis equals 16,000\"><mn>50,000</mn><mfenced><mn>0.32</mn></mfenced><mo>=</mo><mn>16,000</mn></math> and <math alttext=\"50,000 left parenthesis 0.38 right parenthesis equals 19,000\"><mn>50,000</mn><mfenced><mn>0.38</mn></mfenced><mo>=</mo><mn>19,000</mn></math>, respectively. It follows that any value in the interval <math alttext=\"16,000\"><mn>16,000</mn></math> to <math alttext=\"19,000\"><mn>19,000</mn></math> is a plausible value for the total number of people in the population who support the proposed legislation. Of the choices given, only <math alttext=\"16,750\"><mn>16,750</mn></math> is in this interval.</p>\n<p>Choice A is incorrect. This is the number of people in the sample, rather than in the population, who support the legislation.</p>\n<p>Choice B is incorrect. This is the number of people in the sample who do not support the legislation.</p>\n<p>Choice D is incorrect. This is a plausible value for the total number of people in the population who do not support the proposed legislation.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"350\"><mn>350</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"650\"><mn>650</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"16,750\"><mn>16,750</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"31,750\"><mn>31,750</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-f85bbf7a",
    "originalId": "f85bbf7a",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "medium",
    "stem": "<p style=\"text-align: left;\">A middle school faculty surveyed students to determine interest in an after-school chess club. Of the <math alttext=\"100\"><mn>100</mn></math> students who were selected at random from all students in the school, <math alttext=\"32 percent sign\"><mn>32</mn><mo>%</mo></math> expressed interest in the club. Based on the sample mean and the margin of error, the faculty expects that between <math alttext=\"24 percent sign\"><mn>24</mn><mo>%</mo></math> and <math alttext=\"40 percent sign\"><mn>40</mn><mo>%</mo></math> of all students in the school would express interest in the club. What is the margin of error?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p style=\"text-align: left;\">Choice B is correct. It's given that of the <math alttext=\"100\"><mn>100</mn></math> students who were selected at random from all students in the school, <math alttext=\"32 percent sign\"><mn>32</mn><mo>%</mo></math> expressed interest in the club. It's also given that based on the sample mean and the margin of error, the faculty expects that between <math alttext=\"24 percent sign\"><mn>24</mn><mo>%</mo></math> and <math alttext=\"40 percent sign\"><mn>40</mn><mo>%</mo></math> of all students in the school would express interest in the club. These values are calculated by subtracting the margin of error from <math alttext=\"32 percent sign\"><mn>32</mn><mo>%</mo></math> to get the lower bound, <math alttext=\"24 percent sign\"><mn>24</mn><mo>%</mo></math>, and by adding the margin of error to <math alttext=\"32 percent sign\"><mn>32</mn><mo>%</mo></math> to get the upper bound, <math alttext=\"40 percent sign\"><mn>40</mn><mo>%</mo></math>. It follows that the margin of error can be calculated as the difference between <math alttext=\"32 percent sign\"><mn>32</mn><mo>%</mo></math> and <math alttext=\"24 percent sign\"><mn>24</mn><mo>%</mo></math> or between <math alttext=\"40 percent sign\"><mn>40</mn><mo>%</mo></math> and <math alttext=\"32 percent sign\"><mn>32</mn><mo>%</mo></math>. The difference between <math alttext=\"32 percent sign\"><mn>32</mn><mo>%</mo></math> and <math alttext=\"24 percent sign\"><mn>24</mn><mo>%</mo></math> is <math alttext=\"left parenthesis 32 minus 24 right parenthesis percent sign\"><mfenced><mrow><mn>32</mn><mo>-</mo><mn>24</mn></mrow></mfenced><mo>%</mo></math>, or <math alttext=\"8 percent sign\"><mn>8</mn><mo>%</mo></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect and may result from conceptual or calculation errors.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. This is the difference between <math alttext=\"40 percent sign\"><mn>40</mn><mo>%</mo></math> and <math alttext=\"24 percent sign\"><mn>24</mn><mo>%</mo></math>, not the difference between <math alttext=\"32 percent sign\"><mn>32</mn><mo>%</mo></math> and <math alttext=\"24 percent sign\"><mn>24</mn><mo>%</mo></math> or between <math alttext=\"40 percent sign\"><mn>40</mn><mo>%</mo></math> and <math alttext=\"32 percent sign\"><mn>32</mn><mo>%</mo></math>.</p>\n<p style=\"text-align: left;\">Choice D is incorrect. This is the percentage of the students selected at random who expressed interest in the club, not the margin of error.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"0 percent sign\"><mn>0</mn><mo>%</mo></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"8 percent sign\"><mn>8</mn><mo>%</mo></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"16 percent sign\"><mn>16</mn><mo>%</mo></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"32 percent sign\"><mn>32</mn><mo>%</mo></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-f8f79e11",
    "originalId": "f8f79e11",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "medium",
    "stem": "<p class=\"stem_paragraph \">A park ranger asked a random sample of visitors how far they hiked during their visit. Based on the responses, the estimated mean was found to be 4.5 miles, with an associated margin of error of 0.5 miles. Which of the following is the best conclusion from these data?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p>Choice D is correct. The given estimated mean has an associated margin of error because from sample data, the population mean can&rsquo;t be determined precisely. Rather, from the sample mean, an interval can be determined within which it&rsquo;s plausible that the population&rsquo;s mean is likely to lie. Since the estimated mean is 4.5 miles with an associated margin of error of 0.5 miles, it follows that between <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAWCAYAAABzCZQcAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABLUlEQVRYR+2V2w3DIAxFMx4DMQ67sEo2cQ2EQBwcHJeqPz4SokE87rUN3SiwB3DY+QhwDLEARPDYpZ+XhouxXwJE3+3tIOw/0BV9mSAynQPk8Yj5XA3FcDNKvzle6eqjKjKd5rsAqGG++UsAdw1uA4cOj6FMTsqkksS66iE+yMtbIkALd8324PD7OYtiXXmzFB3hnT4z4X2en4ZSo5nRUkzfS7lUI29arKte/GRU+pCdj0VXRnXtCuPc/eXGK2JdfTlITXOMyo99TUnrz9Sa5rjoomX0rWmtKArVVSn7C1/mjouuEoFx5DXi15q+B1/ykI141CXN9GpRFO1flkrX86ImoorqNyrRnAdMCs3OKFtLdElNJ9oBra0yXKnnlnYvz3/pMgzDMAzDMPRs2wfs1Wt0B9Y/xAAAAABJRU5ErkJggg==\" alt=\"4 point 5 minus 0 point 5 \"></span> miles and <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAWCAYAAABzCZQcAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABO0lEQVRYR+2U6xGEIAyELY+CKIdeaMVOcgFEIvJYOW/uT74ZBmV47CaBrYZ2R4Y764mOoS5Enix34fPSeDH3r0Deir0Nuf0HurxNEyDTMUCWj5jPXSEZLkbr/x6PdMmoQqbDfOOINcw3F+RMjM4g3tWZjQw7PIYiMSmTSoJ15UOsw8sbEdACMt25Zrsz/D/OIqwrbhaiA97pMxPWxvlhKLQ6My1w0/dSTtXYNw3rkiLQh+x8LEQZ5bUz45Dpzv3tjWdgXbIcUNM9WuV3Cpk0eeaq6R4XXXUZfWsaEQVlutKVSfuDL7PgoitFoB35lYi+a/o+B3nIWgx1oZn+RhRkOj9IrPIYisxe5iVd40VFRBYlN0rRBAIGmA7U2Wll6xVdqOlAOaC0mZGn5HNTu5fnv3QpiqIoiqIo62zbBwv6rnRLTqE3AAAAAElFTkSuQmCC\" alt=\"4 point 5 plus 0 point 5\"></span> miles, or between 4 and 5 miles, is plausibly the mean distance hiked for all visitors.<p>Choices A, B, and C are incorrect. Based on the estimated mean, no determination can be made about the number of miles hiked for all visitors to the park.</p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">It is likely that all visitors hiked between 4 and 5 miles.</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">It is likely that most visitors hiked exactly 4.5 miles.</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">It is not possible that any visitor hiked less than 3 miles.</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">It is plausible that the mean distance hiked for all visitors is between 4 and 5 miles.</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-fc46af57",
    "originalId": "fc46af57",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "medium",
    "stem": "<p class=\"stem_paragraph \">A bag containing 10,000 beads of assorted colors is purchased from a craft store. To estimate the percent of red beads in the bag, a sample of beads is selected at random. The percent of red beads in the bag was estimated to be 15%, with an associated margin of error of 2%. If <span class=\"italic\">r</span> is the actual number of red beads in the bag, which of the following is most plausible?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p>Choice B is correct. It was estimated that 15% of the beads in the bag are red. Since the bag contains 10,000 beads, it follows that there are an estimated <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAAWCAYAAADTuj63AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACWklEQVRoQ+2XjY3DIAyFM14GyjjZJat0E47fhBgMj+DoqsqfhHR1bOdhG9pbKMe2mHX/mPjxhjk2Z49rNdat6peDxEj5zDCbn6ubMYfZzrzZ2o7CV4pWD3NQbaL9SY7VYvlnVzD9XAOJkfKZYTZ/8Gfq9tnNumy2nTJae7S0UBBtSG0QH89nX53BLyrQmI/Z19LuTgx3IpEYKZ8ZZvO36ubwBV93+xa+kVL0tFB62kT7c01euD5pQJj4xdiYmz1sqn4SkBgpn2iyG47XP1O41IQ815O9JXp1c0gdhh6IFkpPm3R/PKlJ9SErr7+wsXojkBgpn2g68Rskg1azOZ7kp7B1S6d82+w7bEPj4gaA/Y1EFm1oDqeFgmh7pT9ssXwAl6i0O5AYKZ9oupEPFTdgjqf5c9i6RXv+7tCU/hA8hdNCQbQhtRmuH1us0UQWJEbKJ5oKwpV9LyRlJn+CqxtH0IXdkqOMaqHk2pDaDNePEzh8JVqQGCmfaCqAhmwif2K0sSF35Z0xj/uztSS+Ljlyba/0pz1kYz+OkRgpn2i64Z/H4cr/jo9PnubPkRoyCeSHTLg/7JDZ9oz+m4/ESPlQakPFDdqT/BTJwzkLOmTQAL3Rn5ZAevqQ04jESPk4kn7u1goFLAuL5E+x1dowdUsNyAcq5C41SAEPGagNqQ3ic9ITmAodVpnEP6/dII0Yh5TPDNDe7LORIXNczbzWWwPmaGnxe8j6g2r7hv6ceNFb/RZR/p+f6I//nrdHIX5Uvoyf6I+7Mt/8KlDm0P4oiqIoiqIoiqIoiqIwLMsfbHzX7N8y8TEAAAAASUVORK5CYII=\" alt=\"10,000 times 0 point 1 5, equals 1,500 \"></span> red beads. It&rsquo;s given that the margin of error is 2%, or <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAAWCAYAAAASPXQbAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACI0lEQVRoQ+2XbbKFIAiGW14Lajntpa20Ey+InpL8IKQ/d3hmnLkhLyiSnbtwjm0J636G9FgQjg3taawB3Kp+dyQaK58ZtPFHuhDOsK95nkarvjNI85jWOju2E11i/lxDorHymUEbf6S7DnELR7j72DaNNM9ovYjEJ3LuKxri4JvJC+J2vI2W7SgDJSQaK58ZtPFFaz/3sFaKTbW+DncWSR7TWl9ddIQNHrmAFrQE0BT23sYlGiufZIIN0/qXdYetP9dEmjKWZm+IVodQvfs+FtzzWNc6kgteb5hnB/c2LtFY+STTj7hB1jQ1G6KJj2h1SHxja2sBVWz4weAH2uKe55NaNxsmClqBnnZEorHySaaCe4O0mgXRxp/TyQ9dC88jWa/EJ5mI/9QwCF2l11tG1hJtfI2O5mA9cIpk+YZaHsl6JT7JRDQbRnH9Wl2BmtwZUcMo47/V/dbSaZZcf/yzN3q3UyvPJ7XuN8yLH0OARGPlk0wFcV7ySVLGf6OLvyXAl9fVml6eT2rdbBgo9dt/PSUaKx9OrUFqNkQTH5HqqNhPP2tGeT6pdathELqWruuKP9eQaKx8kN+V3rhNclFh76VOEL92ICNdfmNbh2iFNI9knxKfH72GQXLRaDyDxPnam93RIFY+M4j2BnO8Nj1dOcdH+3P3ljd5RvtEJD4mxCttq7/djvMgXo2d777jFOBVxn8fOI7jOI7jOI7jOI7jOMCy/AEsh4E6n95hoQAAAABJRU5ErkJggg==\" alt=\"10,000 times 0 point 0 2, equals 200\"></span> beads. If the estimate is too high, there could plausibly be <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAAAWCAYAAADw4W9iAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACGUlEQVRoQ+2XC7KDIAxFXR4LYjnuxa24Ex4hIB+DTflU3kzODNNKI9yQC9qt5NCbUftp/GUVYw6j7Qd8zZo+snvNoZPflbFDZ78DnJhWjDnNrsLY2Kj83tZJwa0FALH241Hb0BxDIMss527Upq1l6guG48UJy2uAE9NKNErUSeX4tk4KSmcNNEqZ4/f6OTGOc1fQ4RrLLDCQ2m05ioE8oVDlWC4xf/pwYnpAQ9+TxVxxcVfQWfJNLTDHzVgZV1ypd2iO0UH4aPkkEPi0UFQSQFYoRozvGgrmy9fwS50ttSgJhb+MMCPH8B7ySWAQo7R2E0AXtPQ+nPy+q++Feo7xXUNxRven4gyd1fe5opWFSeHWggILHPVOqQXfLH4xkscQThbvxUlqk2M/J8Z3DQPHjoVaVmeDWdAkdyNOybFFYEp2rA0WGLTB16f2uFvduDbOBmFP6BuncxQ9tQgb93oMzcixRyCQTT7j6Ovg2nWJUYAZOocY24/Rt3En1mK8We4Lkp0+jBjf1YV7R6nktZLOlOVrwRXImpzxV4wT0wtqque0is4Sdi2cKV6oBVugHzh1HCU6dTd1DXBiWgmm5i34ezopvq5F+mfDacvvHZ7jk0Dn1FTQZZjYSncDYWdjoyfmxLSQj1u2/Gh9UyfFv66FE6SjQOE9lq+FO9KpZ5fwc5avBRxP1NEm/B6phSAIgiAIgiAIgiAsyLb9AWbgwwtRUhGMAAAAAElFTkSuQmCC\" alt=\"1,500 minus 200, equals 1,300 \"></span> red beads. If the estimate is too low, there could plausibly be <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAAAWCAYAAADw4W9iAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACQklEQVRoQ+2X6xWDIAyFHc+BGMddXMVNKCEg4WmgUPsj3zmcWhrhhlzQbimn2vR+XNp9raL1qZX5gMuoqTO6V5+K/L5rM3T0O8CJGUXrSx+7HxtbKb+3dZbg1CLWlLZY49QcfSDLLNeh900Zy9QXDMcLE6bfAU7MKMEoQWcpx7d1lijp5HJvZLJxp+Z4HTt02MYyCwy0H6Yc5cXyhUrHgt3ik+DE1PALYsKqcWjoPFnMFQ20WucIvbVIsbroBpmZY3AQFoAj8GmhsFB5MaNCMWJcVwbHLDUwX76Gb3T2MlILSknrkhx9AZ4E3i5Uyk4AXdDofTh5vqvzQrVjXFfGN2axRnen4gqd92PgobW0c2uRQnNzXWtqwTeLWwwiCicL9+IktcmxnxPjujK8hl6z4NjhvtU6R+HWgpLWwLMkxxGBlOhYmyzQa4PLVmvuVjuuiTNB2OP75umcxUgtao+MJTmOCKREk684+gheK/dkwYWMjQKs0Om1wWWrNY3txuDWwoi0rwal98gltZhvlnxBvnqpIvSYxT7HTWwpr9U6R+k3Sz1+SY5cgazJ/UtwMhb9F8WJqcE1C2qq57Ra5yjdZrE1yU8GYEmObLO4ganj8FSJi0dPmtJ3gBNTgmMWb+rHfBbqHKXbLFZP/ZSbnmNLoN2h9N/PbZjQSoXzOxtbeWJOzAjxuGmLF/ZNnSV6agGgtrpZgJ/laM2hYoHCO/x9LeyRXnp2CT/n72sBx1Pr/UD4HVILQRAEQRAEQRAEQfhDtu0Dlu7mji9fXDkAAAAASUVORK5CYII=\" alt=\"1,500 plus 200, equals 1,700 \"></span> red beads. Therefore, the most plausible statement of the actual number of red beads in the bag is <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAAWCAYAAAAVU2hLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACA0lEQVRoQ+2W25GFIAyGLY+CLMdebMVOWCBEI9eQAzs+5JtxXNkYwp/LcUs5982a47LxsYm3dbd4Getey96z5z7F5utwdHufM73e556qGxpyEgtJ3e1pwRm8WwruWZPafB2Imd8QFOsU3N1t28/73am6XYfxC+HqVt51WONuLpbbztrLHuZ5N31GQkHEQ3BsuIBAT6HNoud3RLcSWYPM1O3JNlSPJEDc7N68kHwPCAEH4djEpSp3xTfsqRAgZCJAAZbfH3UrNsgK3fAwksSCUzIawub5aAAxaIBtm7iUwREeAVtjjUtuKkbKiF9EqlsoMnO4snv2WaKbJEBIqBciqby7mkubwzrHJi7diISPFd46l8QvItGtFtMS3SQBIhjoPYoXBAjxCYSvHTgi9YtIdKuNzRW6/ZRYDx3HS0aKA2Mc6awQVzLyUiR+kVHd3MFf3yOUJbr9mlhaMdjBrR94jk1cyuAmAkXkiz6e4PHE1u2X6MYNEBLY2bwiqOizvUEvEfj/NNYePb8Urm5IreM8S3RjJzY6puMNk03fpR1cevZwbDhA7HkSWiJyqPmlDCc2nLHuc7purQBDN9JEYnLdn3iVugK6GG3KG3NspPREnMGIbh462eJSxr/pFhK5tz9AlJzP6xZGGvN3T3n4vG6+7UujVmmjuimKoiiKoiiKokxk2/4AJlSkqTtKpfoAAAAASUVORK5CYII=\" alt=\"1,300 is less than r, which is less than 1,700\"></span>.<p>Choices A and D are incorrect and may result from misinterpreting the margin of error. It&rsquo;s unlikely that more than 1,700 beads or fewer than 1,300 beads in the bag are red. Choice C is incorrect because 200 is the margin of error for the number of red beads, not the lower bound of the range of red beads.</p><p> </p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAWCAYAAACYPi8fAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABUklEQVRYR+2VjRGDIAyFGY+BGIddXMVNUpIQReQvVtu7lu/OtuLD8EJIzadYnAHrV4i3RWBx+LxyWQjT8Tdx1B6fCSOaR5EF9IyXAFjA4cLdss3l9+1G8ntkRNOFg7vwqc/Y6i3OoeuKcawUk8QGWMHb87tIF5MzoiFSIQfKBIEt84oE7FnmuVrjsHqw4SssZZtXGkM4wby2EQ0NsCkLNpjPxTmXEhDnaI3TJlgftmWPw6bOJctJTo23NTwQM6RZmCYBV4zX1lQ7q+n4iKY8oIBNtc1fMX4qy8itxilIVlI9xMwTOy49J+8zyG2lnja2+LyJxrCgN17XyxF4u7lJkCeamqA2XtkxpLZR6r+zVhCBF643LKiNpyVZID+rp7Mb6Gp6Qe6gZbzUX2qNLYU1WIF4lTduRPM1qCydrrH+BHTU5Nz9E1iOvcY6mUwmk8mkgDEvMLbrfe+1VR4AAAAASUVORK5CYII=\" alt=\"r is greater than 1,700\"></span></span></p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAAWCAYAAAAVU2hLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACA0lEQVRoQ+2W25GFIAyGLY+CLMdebMVOWCBEI9eQAzs+5JtxXNkYwp/LcUs5982a47LxsYm3dbd4Getey96z5z7F5utwdHufM73e556qGxpyEgtJ3e1pwRm8WwruWZPafB2Imd8QFOsU3N1t28/73am6XYfxC+HqVt51WONuLpbbztrLHuZ5N31GQkHEQ3BsuIBAT6HNoud3RLcSWYPM1O3JNlSPJEDc7N68kHwPCAEH4djEpSp3xTfsqRAgZCJAAZbfH3UrNsgK3fAwksSCUzIawub5aAAxaIBtm7iUwREeAVtjjUtuKkbKiF9EqlsoMnO4snv2WaKbJEBIqBciqby7mkubwzrHJi7diISPFd46l8QvItGtFtMS3SQBIhjoPYoXBAjxCYSvHTgi9YtIdKuNzRW6/ZRYDx3HS0aKA2Mc6awQVzLyUiR+kVHd3MFf3yOUJbr9mlhaMdjBrR94jk1cyuAmAkXkiz6e4PHE1u2X6MYNEBLY2bwiqOizvUEvEfj/NNYePb8Urm5IreM8S3RjJzY6puMNk03fpR1cevZwbDhA7HkSWiJyqPmlDCc2nLHuc7purQBDN9JEYnLdn3iVugK6GG3KG3NspPREnMGIbh462eJSxr/pFhK5tz9AlJzP6xZGGvN3T3n4vG6+7UujVmmjuimKoiiKoiiKokxk2/4AJlSkqTtKpfoAAAAASUVORK5CYII=\" alt=\"1,300 is less than r, which is less than 1,700\"></span></span></p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAAAWCAYAAADD9rIuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAB7ElEQVRoQ+2Wi7GEIAxFLY+CKMdebMVO8gghCsgnsjLr7MuZcXbFEMi9gC4IwA6rWQD/8mXWHX8TYLNRjAEXMhTzdjZbrj8HYAN71Bpddkv6fqzbaZB1Q9ID7hBPlNrOzvk9Iol5O6Xaa8C+gol0K/GIbjTQVch9Ne6eJsBG5hPHFcerRhIjhVZou/gRenmpZlrNIpNQTLO6ysv5putGbgaTvJELuD5Jp8RIQUxoqnIeH/X4uChfCMZ3ihHlPVYvxUpM6gk5XTc/gbBKarvtamQ7JjRdkIjIUKwB44zKC8u5k5fhPj2TjsVirRcZm/CK+03VjQJOEei+lojaJTGh6WBIxLDyWiKO5GXkJoUxouMun9ss3cJDN3i0jWcMRkUOiFjJx4zmZVj8nkk1kqNsgm5hgNQgZNa2ZUHurHg/x8bLGhnJy3xqUmLA07rxS7g0Od7GrZebJCY0XZCK6gYpfgnVGDHreZMe0o0a6hOriRN/3UhievRE5ed5QT3umCU1SWTAU7rxYN1JRSukdI9IYiSQUFdBaa738zG1vDFik4K4sfFUb2rcI7rxLipfaUFpbFksScwoNPm2yJ/SMsnXFn/NHUadV2mXf1u3f4U3xbY/WpQv449bfk8o7wSPpNJxpiiKoiiKoijKD7Esf6aiOcTK/YA3AAAAAElFTkSuQmCC\" alt=\"200 is less than r, which is less than 1,500\"></span></span></p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \"><span class=\"math_expression \"><span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAWCAYAAACYPi8fAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAABXElEQVRYR+2VgRGDIAxFHY+BGIddXMVN0kCITSNCBNvetbw7r5r7sfkh4PIpVr+ACxvkxypRiz/5coBphzxY/S2at8IFWIyTaQ8rUJGU+1q0jvVqhgAs0YtCNVtwMZ6ulnHYAjj88fiyHML3bxDcM1c/M6lhmBjvLZqEFO5jJgUFyHDUnpt+dpm0LeMluLbdVKE5EWow1WLRpACZcODwD7RYYzGs4Zwe41SsGNlk6jiy1GRpvK6hQO5QrbAew0yPcblF5GKc7VUZt2jKAQUVft0wM7LivCj7qN9pPHXXBdxN58a4+E+tuESO+22jzoeHtaieBowaf1nNPAHDhxsX1TrUNFcaYDVOBhumDJ8qi+b0lLRCpurmzcb50yW2HTdD5soJKD1HmhoKtFdthJpxfb7s5vGWr9I00hSwprxwFs3XSEZ9/WD9SdJW4333T8RxLI3yZDKZTCaTBsvyADgVCwn03ziTAAAAAElFTkSuQmCC\" alt=\"r is less than 1,300\"></span></span></p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-1ea09200",
    "originalId": "1ea09200",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "hard",
    "stem": "<p class=\"stem_paragraph \">A sample of 40 fourth-grade students was selected at random from a certain school. The 40 students completed a survey about the morning announcements, and 32 thought the announcements were helpful. Which of the following is the largest population to which the results of the survey can be applied?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p>Choice B is correct. Selecting a sample of a reasonable size at random to use for a survey allows the results from that survey to be applied to the population from which the sample was selected, but not beyond this population. In this case, the population from which the sample was selected is all fourth-grade students at a certain school. Therefore, the results of the survey can be applied to all fourth-grade students at the school.<p>Choice A is incorrect. The results of the survey can be applied to the 40 students who were surveyed. However, this isn&rsquo;t the largest group to which the results of the survey can be applied. Choices C and D are incorrect. Since the sample was selected at random from among the fourth-grade students at a certain school, the results of the survey can&rsquo;t be applied to other students at the school or to other fourth-grade students who weren&rsquo;t represented in the survey results. Students in other grades in the school or other fourth-grade students in the country may feel differently about announcements than the fourth-grade students at the school.</p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">The 40 students who were surveyed</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">All fourth-grade students at the school</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">All students at the school</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">All fourth-grade students in the county in which the school is located</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-308084c5",
    "originalId": "308084c5",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "hard",
    "stem": "<p class=\"stem_paragraph \">The results of two random samples of votes for a proposition are shown above. The samples were selected from the same population, and the margins of error were calculated using the same method. Which of the following is the most appropriate reason that the margin of error for sample A is greater than the margin of error for sample B?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p>Choice D is correct. Sample size is an appropriate reason for the margin of error to change. In general, a smaller sample size increases the margin of error because the sample may be less representative of the whole population.<p>Choice A is incorrect. The margin of error will depend on the size of the sample of recorded votes, not the number of votes that could not be recorded. In any case, the smaller number of votes that could not be recorded for sample A would tend to decrease, not increase, the comparative size of the margin of error. Choice B is incorrect. Since the percent in favor for sample A is the same distance from 50% as the percent in favor for sample B, the percent of favorable responses doesn&rsquo;t affect the comparative size of the margin of error for the two samples. Choice C is incorrect. If sample A had a larger margin of error than sample B, then sample A would tend to be less representative of the population. Therefore, sample A is not likely to have a larger sample size.</p></p>",
    "passage": "<div xmlns=\"http://www.imsglobal.org/xsd/apip/apipv1p0/qtiitem/imsqti_v2p1\" class=\"stimulus_reference \">\n        <div class=\"table_wrapper \">\n          <table class=\"table_WithBorder\">\n            <colgroup>\n              <col class=\"colspec align:center colname:col1 colnum:1 colwidth:45 \">\n              <col class=\"colspec align:center colname:col2 colnum:2 colwidth:70 \">\n              <col class=\"colspec align:center colname:col3 colnum:3 colwidth:70 \">\n            </colgroup>\n            <tbody class=\"tbody \">\n              <tr class=\"row \">\n                <td class=\"entry colname:col1 \">Sample</td>\n                <td class=\"entry colname:col2 \">Percent in favor</td>\n                <td class=\"entry colname:col3 \">Margin of error</td>\n              </tr>\n              <tr class=\"row \">\n                <td class=\"entry colname:col1 \">A</td>\n                <td class=\"entry colname:col2 \">52%</td>\n                <td class=\"entry colname:col3 \">4.2%</td>\n              </tr>\n              <tr class=\"row \">\n                <td class=\"entry colname:col1 \">B</td>\n                <td class=\"entry colname:col2 \">48%</td>\n                <td class=\"entry colname:col3 \">1.6%</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">Sample A had a smaller number of votes that could not be recorded.</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">Sample A had a higher percent of favorable responses.</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">Sample A had a larger sample size.</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">Sample A had a smaller sample size.</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-4a422e3e",
    "originalId": "4a422e3e",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "hard",
    "stem": "<p class=\"stem_paragraph \">To determine the mean number of children per household in a community, Tabitha surveyed 20 families at a playground. For the 20 families surveyed, the mean number of children per household was 2.4. Which of the following statements must be true?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p>Choice C is correct. In order to use a sample mean to estimate the mean for a population, the sample must be representative of the population (for example, a simple random sample). In this case, Tabitha surveyed 20 families in a playground. Families in the playground are more likely to have children than other households in the community. Therefore, the sample isn&rsquo;t representative of the population. Hence, the sampling method is flawed and may produce a biased estimate.<p>Choices A and D are incorrect because they incorrectly assume the sampling method is unbiased. Choice B is incorrect because a sample of size 20 could be large enough to make an estimate if the sample had been representative of all the families in the community.</p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p>The mean number of children per household in the community is 2.4.</p>"
      },
      {
        "id": "B",
        "text": "<p>A determination about the mean number of children per household in the community should not be made because the sample size is too small.</p>"
      },
      {
        "id": "C",
        "text": "<p>The sampling method is flawed and may produce a biased estimate of the mean number of children per household in the community.</p>"
      },
      {
        "id": "D",
        "text": "<p>The sampling method is not flawed and is likely to produce an unbiased estimate of the mean number of children per household in the community.</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-6fca0144",
    "originalId": "6fca0144",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">For a baobab tree habitat in South Africa, a scientist randomly selected <math alttext=\"50\"><mn>50</mn></math> baobab trees that were <math alttext=\"17\"><mn>17</mn></math> years old and randomly assigned them to two groups. Each group was subjected to a different watering pattern for <math alttext=\"2\"><mn>2</mn></math> consecutive years to observe whether the watering pattern affects the trees&rsquo; growth rate. Based on the design of the study, what is the largest group to which these results can be applied?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p>Choice D is correct. When a study uses a randomly selected sample, the largest group to which the results of the study can be applied is the population from which the sample was selected. It's given that the scientist randomly selected the trees from the baobab trees in a certain habitat that were <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"17\"><mn>17</mn></math> years old. Therefore, the largest group to which the results of this study can be applied is all the baobab trees that were <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"17\"><mn>17</mn></math> years old in this habitat.</p>\n<p>Choice A is incorrect. Since the sample was randomly selected from a population, the results can be applied to a larger group than the sample.</p>\n<p>Choice B is incorrect. The sample was selected from a population of baobab trees that were <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"17\"><mn>17</mn></math> years old, not <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"19\"><mn>19</mn></math> years old.</p>\n<p>Choice C is incorrect. The sample was selected from a certain tree habitat in South Africa, not from all the baobab trees that were <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"17\"><mn>17</mn></math> years old in South Africa.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p style=\"text-align: left;\">All the <math alttext=\"50\"><mn>50</mn></math> baobab trees that were selected in this habitat </p>"
      },
      {
        "id": "B",
        "text": "<p style=\"text-align: left;\">All the baobab trees that were <math alttext=\"19\"><mn>19</mn></math> years old in this habitat</p>"
      },
      {
        "id": "C",
        "text": "<p style=\"text-align: left;\">All the baobab trees that were <math alttext=\"17\"><mn>17</mn></math> years old in South Africa</p>"
      },
      {
        "id": "D",
        "text": "<p style=\"text-align: left;\">All the baobab trees that were <math alttext=\"17\"><mn>17</mn></math> years old in this habitat</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-7ce2830a",
    "originalId": "7ce2830a",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "hard",
    "stem": "<p class=\"stem_paragraph \">A psychologist designed and conducted a study to determine whether playing a certain educational game increases middle school students&rsquo; accuracy in adding fractions. For the study, the psychologist chose a random sample of 35 students from all of the students at one of the middle schools in a large city. The psychologist found that students who played the game showed significant improvement in accuracy when adding fractions. What is the largest group to which the results of the study can be generalized?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p>Choice B is correct. The largest group to which the results of a study can be generalized is the population from which the random sample was chosen. In this case, the psychologist chose a random sample from all students at one particular middle school. Therefore, the largest group to which the results can be generalized is all the students at the school.<p>Choice A is incorrect because this isn&rsquo;t the largest group the results can be generalized to. Choices C and D are incorrect because these groups are larger than the population from which the random sample was chosen. Therefore, the sample isn&rsquo;t representative of these groups.</p><p> </p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">The 35 students in the sample</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">All students at the school</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">All middle school students in the city</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">All students in the city</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-7d68096f",
    "originalId": "7d68096f",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "hard",
    "stem": "<p>A trivia tournament organizer wanted to study the relationship between the number of points a team scores in a trivia round and the number of hours that a team practices each week. For the study, the organizer selected <math alttext=\"55\"><mn>55</mn></math> teams at random from all trivia teams in a certain tournament. The table displays the information for the <math alttext=\"40\"><mn>40</mn></math> teams in the sample that practiced for at least <math alttext=\"3\"><mn>3</mn></math> hours per week.</p>\n\n<p>Which of the following is the largest population to which the results of the study can be generalized?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p style=\"text-align: left;\">Choice D is correct. It's given that the organizer selected <math alttext=\"55\"><mn>55</mn></math> teams at random from all trivia teams in the tournament. A table is also given displaying the information for the <math alttext=\"40\"><mn>40</mn></math> teams in the sample that practiced for at least <math alttext=\"3\"><mn>3</mn></math> hours per week. Selecting a sample of a reasonable size at random to use for a survey allows the results from that survey to be applied to the population from which the sample was selected, but not beyond this population. Thus, only the sampling method information is necessary to determine the largest population to which the results of the study can be generalized. Since the organizer selected the sample at random from all trivia teams in the tournament, the largest population to which the results of the study can be generalized is all trivia teams in the tournament.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. The sample was selected at random from all trivia teams in the tournament, not just from the teams that scored an average of <math alttext=\"14\"><mn>14</mn></math> or more points per round.</p>\n<p style=\"text-align: left;\">Choice B is incorrect. If a study uses a sample selected at random from a population, the results of the study can be generalized to the population, not just the sample.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. If a study uses a sample selected at random from a population, the results of the study can be generalized to the population, not just a subset of the sample.</p>",
    "passage": "<figure class=\"table\"><table border=\"1\">\n<thead>\n<tr style=\"height: 22.3906px;\">\n<th style=\"text-align: center; height: 22.3906px; width: 25.0771%;\" rowspan=\"2\" scope=\"colgroup\">Hours practiced</th>\n<th style=\"width: 75.2312%; text-align: center; height: 22.3906px;\" colspan=\"3\" scope=\"colgroup\">Number of points per round</th>\n</tr>\n<tr style=\"height: 44.7812px;\">\n<th style=\"width: 25.0771%; text-align: center; height: 44.7812px;\" scope=\"col\">6 to 13 points</th>\n<th style=\"width: 25.0771%; text-align: center; height: 44.7812px;\" scope=\"col\">14 or more points</th>\n<th style=\"width: 25.0771%; text-align: center; height: 44.7812px;\" scope=\"col\">Total</th>\n</tr>\n</thead>\n<tbody>\n<tr style=\"height: 22.3906px;\">\n<th style=\"width: 25.0771%; text-align: left; height: 22.3906px;\" scope=\"row\">3 to 5 hours</th>\n<td style=\"width: 25.0771%; text-align: center; height: 22.3906px;\"><math alttext=\"6\"><mn>6</mn></math></td>\n<td style=\"width: 25.0771%; text-align: center; height: 22.3906px;\"><math alttext=\"4\"><mn>4</mn></math></td>\n<td style=\"width: 25.0771%; text-align: center; height: 22.3906px;\"><math alttext=\"10\"><mn>10</mn></math></td>\n</tr>\n<tr style=\"height: 44.7812px;\">\n<th style=\"width: 25.0771%; text-align: left; height: 44.7812px;\" scope=\"row\">More than 5 hours</th>\n<td style=\"width: 25.0771%; text-align: center; height: 44.7812px;\"><math alttext=\"4\"><mn>4</mn></math></td>\n<td style=\"width: 25.0771%; text-align: center; height: 44.7812px;\"><math alttext=\"26\"><mn>26</mn></math></td>\n<td style=\"width: 25.0771%; text-align: center; height: 44.7812px;\"><math alttext=\"30\"><mn>30</mn></math></td>\n</tr>\n<tr style=\"height: 22.3906px;\">\n<th style=\"width: 25.0771%; text-align: center; height: 22.3906px;\" scope=\"row\">Total</th>\n<td style=\"width: 25.0771%; text-align: center; height: 22.3906px;\"><math alttext=\"10\"><mn>10</mn></math></td>\n<td style=\"width: 25.0771%; text-align: center; height: 22.3906px;\"><math alttext=\"30\"><mn>30</mn></math></td>\n<td style=\"width: 25.0771%; text-align: center; height: 22.3906px;\"><math alttext=\"40\"><mn>40</mn></math></td>\n</tr>\n</tbody>\n</table></figure>",
    "options": [
      {
        "id": "A",
        "text": "<p>All trivia teams in the tournament that scored <math alttext=\"14\"><mn>14</mn></math> or more points in the round</p>"
      },
      {
        "id": "B",
        "text": "<p>The <math alttext=\"55\"><mn>55</mn></math> trivia teams in the sample</p>"
      },
      {
        "id": "C",
        "text": "<p>The <math alttext=\"40\"><mn>40</mn></math> trivia teams in the sample that practiced for at least <math alttext=\"3\"><mn>3</mn></math> hours per week</p>"
      },
      {
        "id": "D",
        "text": "<p>All trivia teams in the tournament</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-85939da5",
    "originalId": "85939da5",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "hard",
    "stem": "<p class=\"stem_paragraph \">In a study of cell phone use, 799 randomly selected US teens were asked how often they talked on a cell phone and about their texting behavior. The data are summarized in the table above. Based on the data from the study, an estimate of the percent of US teens who are heavy texters is 30% and the associated margin of error is 3%. Which of the following is a correct statement based on the given margin of error?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p>Choice D is correct. The given margin of error of 3% indicates that the actual percent of all US teens who are heavy texters is likely within 3% of the estimate of 30%, or between 27% and 33%. Therefore, it is unlikely, or doubtful, that the percent of all US teens who are heavy texters would be 35%.<p>Choice A is incorrect. The margin of error doesn&rsquo;t provide any information about the accuracy of reporting in the study. Choice B is incorrect. Based on the estimate and given margin of error, it is unlikely that the percent of all US teens who are heavy texters would be less than 27%, but it is possible. Choice C is incorrect. While the percent of all US teens who are heavy texters is likely between 27% and 33%, any value within this interval is equally likely. We can&rsquo;t be certain that the value is exactly 33%.</p></p>",
    "passage": "<div class=\"tcp-f3f3ce7c-3193-4bbc-be11-c9789662af64\"><table align=\"center\" class=\"table_WithBorder tcp-3e34fe1f-81c2-4f08-a86f-2ad6ebafc44a\" style=\"width: 50%;\"><thead><tr><th class=\"tcp-377c7335-9b2c-4de8-934e-b5295a6accb2 para_center\" scope=\"col\" style=\"text-align: center; vertical-align: bottom;\">Texting behavior</th><th class=\"tcp-1797dc05-4f49-4b9f-bf10-e74478d3daac para_center\" scope=\"col\" style=\"text-align: center; vertical-align: bottom;\">Talks on cell phone daily</th><th class=\"tcp-a18f906b-7ea1-43b5-ab7a-2dd9200b79ca para_center\" scope=\"col\" style=\"text-align: center; vertical-align: bottom;\">Does not talk on cell phone daily</th><th class=\"tcp-94b20ab5-9505-4f2f-b370-129449908481 para_center\" scope=\"col\" style=\"text-align: center; vertical-align: bottom;\">Total</th></tr></thead><tbody><tr><th class=\"tcp-c752f947-ae0c-4d39-9225-a644f9618d27\" scope=\"row\" style=\"text-align: left; vertical-align: middle;\">Light</th><td class=\"tcp-48506f47-fe61-48c9-8a3a-10da6472df53 para_center\" style=\"text-align: center;\">110</td><td class=\"tcp-d012a152-8840-4a6d-a5f5-b8297f626b59 para_center\" style=\"text-align: center;\">146</td><td class=\"tcp-51f1dfd1-57d7-4fce-af41-22261b2707e4 para_center\" style=\"text-align: center;\">256</td></tr><tr><th class=\"tcp-61e94159-ec2d-4bb2-a52b-96ccd28357a4\" scope=\"row\" style=\"text-align: left; vertical-align: middle;\">Medium</th><td class=\"tcp-e8173193-e7d9-49a9-9820-95273c31246d para_center\" style=\"text-align: center;\">139</td><td class=\"tcp-7632f94a-4e1a-484a-9010-63322123b57f para_center\" style=\"text-align: center;\">164</td><td class=\"tcp-6f13168d-4e6a-48cd-b07c-710c21519464 para_center\" style=\"text-align: center;\">303</td></tr><tr><th class=\"tcp-4900ea18-665f-49a8-829b-5471951302f4\" scope=\"row\" style=\"text-align: left; vertical-align: middle;\">Heavy</th><td class=\"tcp-a066de45-77d1-432c-9415-7bdca11af6ec para_center\" style=\"text-align: center;\">166</td><td class=\"tcp-846d3f44-9d91-49e7-8335-7938220f54c0 para_center\" style=\"text-align: center;\">74</td><td class=\"tcp-b25d31b2-c95f-4fb8-88e6-99cb5287ce48 para_center\" style=\"text-align: center;\">240</td></tr><tr><th class=\"tcp-17b82204-c12b-4efe-b128-1245c48ce2d9 para_center\" scope=\"row\" style=\"text-align: center; vertical-align: middle;\">Total</th><td class=\"tcp-1d46e7ca-6646-4f3b-80aa-e5e72de8fa40 para_center\" style=\"text-align: center;\">415</td><td class=\"tcp-57161190-747f-4357-a738-bf794b8c0b04 para_center\" style=\"text-align: center;\">384</td><td class=\"tcp-c7e3fbdb-baf8-4ce2-83ed-2ac03493ee61 para_center\" style=\"text-align: center;\">799</td></tr></tbody></table></div>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">Approximately 3% of the teens in the study who are classified as heavy texters are not really heavy texters.</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">It is not possible that the percent of all US teens who are heavy texters is less than 27%.</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">The percent of all US teens who are heavy texters is 33%.</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">It is doubtful that the percent of all US teens who are heavy texters is 35%.</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-916ffe9b",
    "originalId": "916ffe9b",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">The table shows the results of a poll. A total of <math alttext=\"803\"><mn>803</mn></math> voters selected at random were asked which candidate they would vote for in the upcoming election. According to the poll, if <math alttext=\"6,424\"><mn>6,424</mn></math> people vote in the election, by how many votes would Angel Cruz be expected to win?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p style=\"text-align: left;\">Choice B is correct. It's given that <math alttext=\"483\"><mn>483</mn></math> out of <math alttext=\"803\"><mn>803</mn></math> voters responded that they would vote for Angel Cruz. Therefore, the proportion of voters from the poll who responded they would vote for Angel Cruz is <math alttext=\"StartFraction 483 Over 803 EndFraction\"><mfrac><mn>483</mn><mn>803</mn></mfrac></math>. It&rsquo;s also given that there are a total of <math alttext=\"6,424\"><mn>6,424</mn></math> voters in the election. Therefore, the total number of people who would be expected to vote for Angel Cruz is <math alttext=\"6,424 left parenthesis StartFraction 483 Over 803 EndFraction right parenthesis\"><mn>6,424</mn><mfenced><mfrac><mn>483</mn><mn>803</mn></mfrac></mfenced></math>, or <math alttext=\"3,864\"><mn>3,864</mn></math>. Since <math alttext=\"3,864\"><mn>3,864</mn></math> of the <math alttext=\"6,424\"><mn>6,424</mn></math> total voters would be expected to vote for Angel Cruz, it follows that <math alttext=\"6,424 minus 3,864\"><mn>6,424</mn><mo>-</mo><mn>3,864</mn></math>, or <math alttext=\"2,560\"><mn>2,560</mn></math> voters would be expected not to vote for Angel Cruz. The difference in the number of votes for and against Angel Cruz is <math alttext=\"3,864 minus 2,560\"><mn>3,864</mn><mo>-</mo><mn>2,560</mn></math>, or <math alttext=\"1,304\"><mn>1,304</mn></math> votes. Therefore, if <math alttext=\"6,424\"><mn>6,424</mn></math> people vote in the election, Angel Cruz would be expected to win by <math alttext=\"1,304\"><mn>1,304</mn></math> votes.</p>\n<p style=\"text-align: left;\">Choice A is incorrect. This is the difference in the number of voters from the poll who responded that they would vote for and against Angel Cruz.</p>\n<p style=\"text-align: left;\">Choice C is incorrect. This is the total number of people who would be expected to vote for Angel Cruz.</p>\n<p style=\"text-align: left;\">Choice D is incorrect. This is the difference between the total number of people who vote in the election and the number of voters from the poll.</p>",
    "passage": "<figure class=\"table\"><table style=\"border-collapse: collapse; width: 39.3547%; height: 71px; border-color: #000000; border-style: solid; margin-left: auto; margin-right: auto;\" border=\"1\">\n<caption><p style=\"text-align: center;\">Poll Results</p></caption>\n<tbody>\n<tr>\n<th style=\"width: 60.589%; text-align: center;\" scope=\"row\">Angel Cruz</th>\n<td style=\"width: 35.3472%; text-align: center;\"><math alttext=\"483\"><mn>483</mn></math></td>\n</tr>\n<tr>\n<th style=\"width: 60.589%; text-align: center;\" scope=\"row\">Terry Smith</th>\n<td style=\"width: 35.3472%; text-align: center;\"><math alttext=\"320\"><mn>320</mn></math></td>\n</tr>\n</tbody>\n</table></figure>",
    "options": [
      {
        "id": "A",
        "text": "<p><math alttext=\"163\"><mn>163</mn></math></p>"
      },
      {
        "id": "B",
        "text": "<p><math alttext=\"1,304\"><mn>1,304</mn></math></p>"
      },
      {
        "id": "C",
        "text": "<p><math alttext=\"3,864\"><mn>3,864</mn></math></p>"
      },
      {
        "id": "D",
        "text": "<p><math alttext=\"5,621\"><mn>5,621</mn></math></p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-9ba3e283",
    "originalId": "9ba3e283",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "hard",
    "stem": "<p class=\"stem_paragraph \">In State X, Mr. Camp&rsquo;s eighth-grade class consisting of 26 students was surveyed and 34.6 percent of the students reported that they had at least two siblings. The average eighth&#8209;grade class size in the state is 26. If the students in Mr. Camp&rsquo;s class are representative of students in the state&rsquo;s eighth-grade classes and there are 1,800 eighth-grade classes in the state, which of the following best estimates the number of eighth&#8209;grade students in the state who have fewer than two siblings?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p>Choice C is correct. It is given that 34.6% of 26 students in Mr. Camp&rsquo;s class reported that they had at least two siblings. Since 34.6% of 26 is 8.996, there must have been 9 students in the class who reported having at least two siblings and 17 students who reported that they had fewer than two siblings. It is also given that the average eighth-grade class size in the state is 26 and that Mr. Camp&rsquo;s class is representative of all eighth-grade classes in the state. This means that in each eighth-grade class in the state there are about 17 students who have fewer than two siblings. Therefore, the best estimate of the number of eighth-grade students in the state who have fewer than two siblings is 17 &times; (number of eighth-grade classes in the state), or <span class=\"math-container\"><img align=\"middle\" role=\"math\" class=\"math-img\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAAAWCAYAAADw4W9iAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABGJhU0UAAAALV/ZLFgAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAACgUlEQVRoQ+2XgZGEIAxFLc+CLMdebGU74UxCMEDQoLhzM5s349wZA3x+It5NJdsyhXn9hHiLhG2B+8Y1hz0dfh+GpqEF5O4/0rVstZZcv67XkjOCXO84LeGzhjmN2a/dCHwgGOoDJ1oKFcIWFphQEfWEHg1k/LIroQ3xWNkwFDs2Xd4DlpwR6Hqfa6GcY99cG+mhZV7z2p91hgBedwo1gh4NbEh5kqCu2MAhfMI613P15oyA33ypt1z7jpbWGPKS6jPUh6OD6o7U0DbOpBNnXvfl6+fcEOXYURoyAxo5mZGGnBgaDheoR28MJWiM8vYLXvFBO740sCCNZmBwkSJHi5VYNQCoQ2yEGu7YcMtIypMmnefEEJJehourNF2DCnGs3asFOJ7luqR/b/hgKhRNaiumbA5LowA9zQKQ4WxSvlnaaMsAiltyYmgYUrNsqjta6Fm+97JGlnm717YUijaqd7lGMsbQKIC1WdIRLrR8xaSBsN70GbqhhZ7Vfsk6WebtXvuqUKlAcXMWXmuWaHR53GcmYU7LAHtODCGsD349uyyfIYD0xoJ1agHoWb2eLPIbPhiaxVZIBo146TMkzYghpDbJ0lDnOTH0Cr16YyjRGvO6D5fNghPWBdLARYrm0GIl5mY5NSkasK807F/Gh5Cui4Ld0NLyq3fe7rUvm0UUIoYqeI5WU9AmatMYa7MAuBGhhxtIjpVvmHYPWHKewsWQvtA6/XpLeB729Cs+XBVKdmsMDedMg3YyUcMcV3NcytE3b8l5SmqYtI7+0lxp0XzghuHrP/vwFdDs5fwz9gu4DwbweNW+nz+G+2AAjsjW3zq/hPvgOI7jOI7jOI7jOP+QafoDW9Uv9ndjlNwAAAAASUVORK5CYII=\" alt=\"17 times 1,800, equals 30,600\"></span>.<p>Choice A is incorrect because 16,200 is the best estimate for the number of eighth-grade students in the state who have at least, not fewer than, two siblings. Choice B is incorrect because 23,400 is half of the estimated total number of eighth-grade students in the state; however, since the students in Mr. Camp&rsquo;s class are representative of students in the eighth-grade classes in the state and more than half of the students in Mr. Camp&rsquo;s class have fewer than two siblings, more than half of the students in each eighth-grade class in the state have fewer than two siblings, too. Choice D is incorrect because 46,800 is the estimated total number of eighth-grade students in the state.</p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p>16,200</p>"
      },
      {
        "id": "B",
        "text": "<p>23,400</p>"
      },
      {
        "id": "C",
        "text": "<p>30,600</p>"
      },
      {
        "id": "D",
        "text": "<p>46,800</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-aa43b41f",
    "originalId": "aa43b41f",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "hard",
    "stem": "<p class=\"stem_paragraph \">Near the end of a US cable news show, the host invited viewers to respond to a poll on the show&rsquo;s website that asked, &ldquo;Do you support the new federal policy discussed during the show?&rdquo; At the end of the show, the host reported that 28% responded &ldquo;Yes,&rdquo; and 70% responded &ldquo;No.&rdquo; Which of the following best explains why the results are unlikely to represent the sentiments of the population of the United States?</p>",
    "type": "mcq",
    "correctAnswer": "B",
    "explanation": "<p>Choice B is correct. In order for the poll results from a sample of a population to represent the entire population, the sample must be representative of the population. A sample that is randomly selected from a population is more likely than a sample of the type described to represent the population. In this case, the people who responded were people with access to cable television and websites, which aren&rsquo;t accessible to the entire population. Moreover, the people who responded also chose to watch the show and respond to the poll. The people who made these choices aren&rsquo;t representative of the entire population of the United States because they were not a random sample of the population of the United States.<p>Choices A, C, and D are incorrect because they present reasons unrelated to whether the sample is representative of the population of the United States.</p><p> </p></p>",
    "options": [
      {
        "id": "A",
        "text": "<p class=\"choice_paragraph \">The percentages do not add up to 100%, so any possible conclusions from the poll are invalid.</p>"
      },
      {
        "id": "B",
        "text": "<p class=\"choice_paragraph \">Those who responded to the poll were not a random sample of the population of the United States.</p>"
      },
      {
        "id": "C",
        "text": "<p class=\"choice_paragraph \">There were not 50% &ldquo;Yes&rdquo; responses and 50% &ldquo;No&rdquo; responses.</p>"
      },
      {
        "id": "D",
        "text": "<p class=\"choice_paragraph \">The show did not allow viewers enough time to respond to the poll.</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-b695711c",
    "originalId": "b695711c",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">A statistician conducted a study to investigate the relationship between the average number of minutes piano students practiced each week and the percentage of correct notes the students played during a recital. For the study, the statistician selected a sample of <math alttext=\"85\"><mn>85</mn></math> piano students at random from all the piano students in a certain region who were in their second year with their conservatory. The table shows the information for <math alttext=\"75\"><mn>75</mn></math> piano students in this sample who practiced at least <math alttext=\"50\"><mn>50</mn></math> minutes on average each week.</p>\n\n<p style=\"text-align: left;\">Which of the following is the largest population to which the results of the study can be generalized?</p>",
    "type": "mcq",
    "correctAnswer": "C",
    "explanation": "<p>Choice C is correct. It&rsquo;s given that the statistician selected a sample of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"85\"><mn>85</mn></math> piano students at random from all piano students in a certain region who were in their second year with their conservatory. It's also given that the table shows the information for <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"75\"><mn>75</mn></math> piano students in the sample who practiced at least <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"50\"><mn>50</mn></math> minutes on average each week. Selecting a sample at random from a population allows the results of the study to be generalized to that population, but not beyond it. Therefore, the largest population to which the results of the study can be generalized is the population of all piano students in the region who were in their second year with their conservatory.</p>\n<p>Choice A is incorrect. The results can't be generalized to all piano students who were in their second year with their conservatory since only students in a certain region were sampled.</p>\n<p>Choice B is incorrect. The results can't be generalized to all piano students in the region since only students in their second year with their conservatory were sampled.</p>\n<p>Choice D is incorrect. The results of the study can be generalized beyond the sample itself to the population from which it was drawn.</p>",
    "passage": "<figure class=\"table\"><table border=\"1\">\n<tbody>\n<tr style=\"height: 44.7917px;\">\n<td style=\"width: 19.9241%; height: 44.7917px;\"> </td>\n<th style=\"height: 44.7917px; width: 79.8598%; text-align: center;\" colspan=\"4\" scope=\"colgroup\">Percentage of correct notes the students played during a recital</th>\n</tr>\n<tr style=\"height: 89.5833px;\">\n<th style=\"width: 19.9241%; height: 89.5833px;\" scope=\"col\">Average number of minutes practiced each week</th>\n<th style=\"width: 14%; height: 89.5833px; text-align: center; vertical-align: middle;\" scope=\"col\">Less than <math alttext=\"50 percent sign\"><mn>50</mn><mo>%</mo></math></th>\n<th style=\"width: 14%; height: 89.5833px; text-align: center; vertical-align: middle;\" scope=\"col\"><math alttext=\"50 percent sign\"><mn>50</mn><mo>%</mo></math> to <math alttext=\"80 percent sign\"><mn>80</mn><mo>%</mo></math></th>\n<th style=\"width: 14%; height: 89.5833px; text-align: center; vertical-align: middle;\" scope=\"col\">Greater than <math alttext=\"80 percent sign\"><mn>80</mn><mo>%</mo></math></th>\n<th style=\"width: 14%; height: 89.5833px; text-align: center; vertical-align: middle;\" scope=\"col\">Total</th>\n</tr>\n<tr style=\"height: 22.3958px;\">\n<th style=\"width: 19.9241%; height: 22.3958px; text-align: left;\" scope=\"row\"><math alttext=\"50\"><mn>50</mn></math> to <math alttext=\"150\"><mn>150</mn></math></th>\n<td style=\"width: 14%; height: 22.3958px; text-align: center; vertical-align: middle;\"><math alttext=\"7\"><mn>7</mn></math></td>\n<td style=\"width: 14%; height: 22.3958px; text-align: center; vertical-align: middle;\"><math alttext=\"28\"><mn>28</mn></math></td>\n<td style=\"width: 14%; height: 22.3958px; text-align: center; vertical-align: middle;\"><math alttext=\"5\"><mn>5</mn></math></td>\n<td style=\"width: 14%; height: 22.3958px; text-align: center; vertical-align: middle;\"><math alttext=\"40\"><mn>40</mn></math></td>\n</tr>\n<tr style=\"height: 22.3958px;\">\n<th style=\"width: 19.9241%; height: 22.3958px; text-align: left;\" scope=\"row\"><math alttext=\"151\"><mn>151</mn></math> or more</th>\n<td style=\"width: 14%; height: 22.3958px; text-align: center; vertical-align: middle;\"><math alttext=\"3\"><mn>3</mn></math></td>\n<td style=\"width: 14%; height: 22.3958px; text-align: center; vertical-align: middle;\"><math alttext=\"11\"><mn>11</mn></math></td>\n<td style=\"width: 14%; height: 22.3958px; text-align: center; vertical-align: middle;\"><math alttext=\"21\"><mn>21</mn></math></td>\n<td style=\"width: 14%; height: 22.3958px; text-align: center; vertical-align: middle;\"><math alttext=\"35\"><mn>35</mn></math></td>\n</tr>\n<tr style=\"height: 22.3958px;\">\n<th style=\"width: 19.9241%; height: 22.3958px; text-align: center;\" scope=\"row\">Total</th>\n<td style=\"width: 14%; height: 22.3958px; text-align: center; vertical-align: middle;\"><math alttext=\"10\"><mn>10</mn></math></td>\n<td style=\"width: 14%; height: 22.3958px; text-align: center; vertical-align: middle;\"><math alttext=\"39\"><mn>39</mn></math></td>\n<td style=\"width: 14%; height: 22.3958px; text-align: center; vertical-align: middle;\"><math alttext=\"26\"><mn>26</mn></math></td>\n<td style=\"width: 14%; height: 22.3958px; text-align: center; vertical-align: middle;\"><math alttext=\"75\"><mn>75</mn></math></td>\n</tr>\n</tbody>\n</table></figure>",
    "options": [
      {
        "id": "A",
        "text": "<p>All piano students who were in their second year with their conservatory</p>"
      },
      {
        "id": "B",
        "text": "<p style=\"text-align: left;\">All piano students in the region</p>"
      },
      {
        "id": "C",
        "text": "<p style=\"text-align: left;\">All piano students in the region who were in their second year with their conservatory</p>"
      },
      {
        "id": "D",
        "text": "<p style=\"text-align: left;\">The <math alttext=\"75\"><mn>75</mn></math> piano students in the sample who practiced at least <math alttext=\"50\"><mn>50</mn></math> minutes on average each week</p>"
      }
    ]
  },
  {
    "id": "sat-math-infere-da978ee6",
    "originalId": "da978ee6",
    "section": "math",
    "domainId": "problem-solving",
    "domainName": "3. Problem-Solving and Data Analysis",
    "subtopicId": "inference-statistics",
    "subtopic": "Inference from sample statistics",
    "difficulty": "hard",
    "stem": "<p style=\"text-align: left;\">A researcher surveyed a random sample of <math alttext=\"1,020\"><mn>1,020</mn></math> people from a certain city to estimate the percentage of people who support a recently announced proposal. From the survey, the researcher estimated that <math alttext=\"86 percent sign\"><mn>86</mn><mo>%</mo></math> of people from the city support this proposal, with an associated margin of error of <math alttext=\"2.13 percent sign\"><mn>2.13</mn><mo>%</mo></math>. The researcher repeated the survey with a random sample of people from the city that was double the original sample size. Assuming the margins of error were calculated in the same way, which of the following is true about the margin of error associated with the estimate from the larger sample?</p>",
    "type": "mcq",
    "correctAnswer": "D",
    "explanation": "<p style=\"text-align: left;\">Choice D is correct. It's given that from the initial survey, the margin of error associated with the estimate was <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"2.13 percent sign\"><mn>2.13</mn><mo>%</mo></math>. A larger sample size generally leads to a smaller margin of error. Therefore, assuming the margins of error were calculated in the same way, the margin of error associated with the estimate from the larger sample is less than <math xmlns=\"http://www.w3.org/1998/Math/MathML\" alttext=\"2.13 percent sign\"><mn>2.13</mn><mo>%</mo></math>.</p>\n<p style=\"text-align: left;\">Choice A is incorrect and may result from conceptual errors.</p>\n<p style=\"text-align: left;\">Choice B is incorrect and may result from conceptual errors.</p>\n<p style=\"text-align: left;\">Choice C is incorrect and may result from conceptual errors.</p>",
    "options": [
      {
        "id": "A",
        "text": "<p style=\"text-align: left;\">The margin of error is between <math alttext=\"2.13 percent sign\"><mn>2.13</mn><mo>%</mo></math> and <math alttext=\"3.13 percent sign\"><mn>3.13</mn><mo>%</mo></math>.</p>"
      },
      {
        "id": "B",
        "text": "<p style=\"text-align: left;\">The margin of error is between <math alttext=\"4.13 percent sign\"><mn>4.13</mn><mo>%</mo></math> and <math alttext=\"5.13 percent sign\"><mn>5.13</mn><mo>%</mo></math>.</p>"
      },
      {
        "id": "C",
        "text": "<p style=\"text-align: left;\">The margin of error is greater than <math alttext=\"5.13 percent sign\"><mn>5.13</mn><mo>%</mo></math>.</p>"
      },
      {
        "id": "D",
        "text": "<p style=\"text-align: left;\">The margin of error is less than <math alttext=\"2.13 percent sign\"><mn>2.13</mn><mo>%</mo></math>.</p>"
      }
    ]
  }
];
