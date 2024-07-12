**Please clone Exercise 1 and Exercise 2 separately, and then run `npm i` for necessary package installations.**

Tech
---
Vue JS, CSS (BEM naming), Tailwind CSS

Exercise 1
---

For Exercise-1, I created two main components: **MainHero** and **CardsContainer**. The MainHero component contains the banner template and styles, which I styled using Tailwind CSS. The CardsContainer houses my reusable **Cards** and **Button** components. Instead of using a static approach for the Cards component, I created a data.json file to provide dynamic content for the cards. I ensured that the Cards and Button components are reusable for scalability. Additionally, I left comments on functions for better **readability**. I also added functionality where the user can toggle the READ MORE/SEE LESS button to show/hide some of the content inside the card. This can be seen in the mobile view.

![image](https://github.com/user-attachments/assets/13f4f1a3-4458-4013-b5c6-d5978a4d942f)

![image](https://github.com/user-attachments/assets/45c4c684-d64e-4656-b9c4-65cff40b3cc7)

![image](https://github.com/user-attachments/assets/5520a48a-8176-4294-bd41-661ff64e7bc8)


Exercise 2
---
For Exercise-2, I ensured that the **Tabs** and **Accordion** were separate components for better readability and maintainability. I applied a minimalistic approach to the styles, as simple UX is more user-friendly.

![image](https://github.com/user-attachments/assets/90c0ac79-3f98-403d-a98d-3b4144a456ab)


Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.
---
* 'b' + 'a' is a string concatenation resulting in "ba".
* "+ 'a'": The + before 'a' here is interpreted as the unary plus operator, which tries to convert the letter 'a' into a number. Since the string 'a' can't be converted into a number, it will result in NaN (Not-a-Number).
* 'ba' + NaN: This concatenation results in the string 'baNaN'.
* 'baNaN' + 'a' will result in the string 'baNaNa'.
* '.toLowerCase()' will convert 'baNaNa' to lowercase, resulting in 'banana'.
