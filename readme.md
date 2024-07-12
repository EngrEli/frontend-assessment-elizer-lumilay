**Please clone exercise 1 and 2 separately and then run npm i for necessary package installations**
---
npm i

Tech
---
Vue JS, CSS (BEM naming), Tailwind CSS

Exercise 1
---

For Exercise-1, I created two main components: **MainHero** and **CardsContainer**. The MainHero component contains the banner template and styles, which I styled using Tailwind CSS. The CardsContainer houses my reusable **Cards** and **Button** components. Instead of using a static approach for the Cards component, I created a data.json file to provide dynamic content for the cards. I ensured that the Cards and Button components are reusable for scalability. Additionally, I left comments on functions for better **readability**.

Exercise 2
---
For Exercise-2, I ensured that the **Tabs** and **Accordion** were separate components for better readability and maintainability. I applied a minimalistic approach to the styles, as simple UX is more user-friendly.

Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.
---
* 'b' + 'a' is a string concatenation resulting in "ba".
* "+ 'a'": The + before 'a' here is interpreted as the unary plus operator, which tries to convert the letter 'a' into a number. Since the string 'a' can't be converted into a number, it will result in NaN (Not-a-Number).
* 'ba' + NaN: This concatenation results in the string 'baNaN'.
* 'baNaN' + 'a' will result in the string 'baNaNa'.
* '.toLowerCase()' will convert 'baNaNa' to lowercase, resulting in 'banana'.
