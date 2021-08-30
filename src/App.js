import React, { useState } from "react";
import "./styles.css";
const list = {
  Startup: [
    {
      name: "Zero to One",
      description:
        "Notes on Startups is a book by Peter Thiel, a famous American investor, and entrepreneur. In it, he describes the major ways in which you can be a successful entrepreneur and how to craft the best company you possibly can.",
      ratings: "9.5/10"
    },
    {
      name: "Founders at Work",
      description:
        "The game runners at Apple, Microsoft, Google, and even Whatsapp were just a bunch of folks like you. Today, they are founders of multi-billion dollar companies.",
      ratings: "9/10"
    },
    {
      name: "Crossing the Chasm",
      description:
        "Want to read the bible for bringing tech products to progressively larger markets? Crossing the Chasm is the book for you. It provides new insights into the realities of high-tech marketing with special emphasis on the internet. ",
      ratings: "9/10"
    },
    {
      name: "Start Something That Matters",
      description:
        "Learn from a man who never worn shoes but started the fastest-growing footwear company. Blake Mycoskie shares his story of how he build a multi-billion company in less than ten years and brought a new business model of success in his book ",
      ratings: "8/10"
    }
  ],
  Growth: [
    {
      name: "The Checklist Manifesto: How to Get Things Right",
      description:
        "We always strive for betterment. Better education, better skill-set, better job, better income… and we still fail. Atul Gawande makes a compelling argument stating that we can do better using the simplest methods, and simplest skill sets.",
      ratings: "9/10"
    },
    {
      name: "The Four Steps to the Epiphany",
      description:
        "The Four Steps to the Epiphany offers a practical four-step solution for streamlining customer development process for startups. It is the first book that launched the Lean Startup approach for new ventures.",
      ratings: "8.5/10"
    },
    {
      name: "Traction",
      description:
        "Most startups don’t fail because they can’t build a successful product. They fail because they can’t get traction. Traction isn’t about how well marketed a startup is, but how many customers it is acquiring on a regular basis, or if free, how many users.",
      ratings: "7/10"
    },
    {
      name: "The 7 Day Startup",
      description:
        "Ever heard of sustainable cash flowing business that was just made in seven days? Dan Norris did and he reveals his secrets in the 7-Day Startup book.",
      ratings: "8.5/10"
    }
  ],
  Finance: [
    {
      name: "Rich Dad Poor Dad",
      description:
        "You’ve probably heard of Robert Kiyosaki’s Rich Dad Poor Dad, but there’s a reason it’s stuck around for more than two decades. In one of the most popular personal finance books of all time,",
      ratings: "9.5/10"
    },
    {
      name: "The Total Money Makeover",
      description:
        "Debt management plays a major role in the state of your personal finances. Need a little help in that area? Take a look at Dave Ramsey’s The Total Money Makeover. ",
      ratings: "8.5/10"
    },
    {
      name: "The Automatic Millionaire",
      description:
        "Who doesn’t want to be a millionaire? David Bach’s “The Automatic Millionaire,” a New York Times, USA Today, Bloomberg Businessweek, and Wall Street Journal business bestseller, shows you how to do just that. ",
      ratings: "8/10"
    },
    {
      name: "Broke Millennial",
      description:
        "EIf you can decipher #GYFLT, then this is the personal finance book for you. (Hint: #GYFLT stands for “get your financial life together” in social media speak.) Erin Lowry’s “Broke Millennial” explains in her signature conversational style how 20-somethings can get in control of their personal finances.",
      ratings: "8.5/10"
    }
  ]
};
const dbList = Object.keys(list);
export default function App() {
  const [selectOption, setSelectOption] = useState("Startup");
  function buttonClickHandler(book) {
    setSelectOption(book);
  }
  return (
    <div className="App">
      <main>
        <h1>The book you must read</h1>
        <h2
          style={{
            fontSize: "large",
            width: "70%",
            margin: "auto",
            padding: "2rem",
            textAlign: "start"
          }}
        >
          Here I have qouted some of the best books available in market about
          start-up, Personal growth and to maintain Finance which is very important. Hope you will read by looking at
          the ratings
        </h2>
        <section>
          {dbList.map((book) => {
            return (
              <button
                className="button-main"
                key={book}
                onClick={() => {
                  buttonClickHandler(book);
                }}
              >
                {book}
              </button>
            );
          })}
        </section>

        <section>
          {list[selectOption].map((lists) => {
            return (
              <div className="container-area">
                <div className="desc-area">
                  <h1 style={{ textAlign: "center" }}>{lists.name}</h1>
                  <p style={{ textAlign: "start" }}>{lists.description}</p>
                  <h4 style={{ textAlign: "start" }}>
                    Rating: {lists.ratings}
                  </h4>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
