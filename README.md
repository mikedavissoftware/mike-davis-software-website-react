# Mike Davis's Portfolio Website 🖳

### A Single-Page Scroller Portfolio Site with All the Important Information

!["Screenshot of this site"](public/gif/mds-screenshot.gif)

#### Inspired by [Dopefolio](https://github.com/rammcodes/Dopefolio) by [Ram Maheshwari](https://github.com/rammcodes)

When I came across the Dopefolio portfolio template, I plugged in my information to it and decided that I would like to add more features and convert it to **React**. So, I got started!

The original template was already using **SASS**, which was new to me. But, I found it pretty intuitive once I spent some time fiddling around with it. Ultimately, it behaves much the same as React does with imports and separation of concerns into components, but with CSS instead.

After reorganizing the SASS files a bit, I moved on to converting the project from HTML to React. My first choice for development server was **Vite**, since I have ample experience with it and it works lightning-fast.

In addition to converting to React, I also added new sections & features to the portfolio site, the most notable of which are the viewport-based appearance animations, drop-down accordions in the skills section, and the toggle button between long & short versions of my bio.

Also, to play into the dynamic nature of React, I decided to create a couple local database files, exporting those data objects to be imported by the React components in order to populate the webpage more dynamically.

Beyond local files, I also:
- Fetched blog post data from [dev.to](https://dev.to/mikedavissoftware)
- Submitted contact form data through [emailjs](https://www.emailjs.com/)

Lastly, the contact form uses **emailjs** to submit information to my personal email.

#### Check out the final product [here](https://mikedavissoftware.com/)

---

#### To run the repository locally, clone the repository and then run these commands in your terminal

```bash
npm install

npm run dev
```

Then navigate to the correct port in localhost on your browser.