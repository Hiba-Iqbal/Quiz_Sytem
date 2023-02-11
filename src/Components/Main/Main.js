import React, { useState } from "react";
import "./main.css";

const Main = () => {
  const [details, setDeatils] = useState({
    ansOne: "",
    ansTwo: "",
    ansThree: "",
    ansFour: "",
    ansFive: "",
    ansSix: "",
    ansSeven: "",
    ansEight: "",
    ansNine: "",
    ansTen: "",
  });

  const PostData = async (e) => {
    e.preventDefault();

    const {
      ansOne,
      ansTwo,
      ansThree,
      ansFour,
      ansFive,
      ansSix,
      ansSeven,
      ansEight,
      ansNine,
      ansTen,
    } = details;
    const res = await fetch(
      "https://quiz-4bc1b-default-rtdb.firebaseio.com/quiz.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ansOne,
          ansTwo,
          ansThree,
          ansFour,
          ansFive,
          ansSix,
          ansSeven,
          ansEight,
          ansNine,
          ansTen,
        }),
      }
    );
  };

  return (
    <div className="main">
      <div className="main_container1">
        <div>
          <p className="title1">Questions 1 - 6</p>
        </div>
        <div>
          <p className="title2">Choose the correct answer.</p>
        </div>
        <div>
          <ul className="questions">
            <li>
              <p id="question_One">
                1. Mr Griffin has been to the Sunrise Hotel ...
              </p>
              <div className="options">
                <ul>
                  <li>
                    <input
                      type={"radio"}
                      value="opt1"
                      onChange={(e) =>
                        setDeatils({ ...details, ansOne: e.target.value })
                      }
                      name="ansOne"
                    ></input>
                    <label>... once previously.</label>
                  </li>
                  <li>
                    <input
                      type={"radio"}
                      value="opt2"
                      onChange={(e) =>
                        setDeatils({ ...details, ansOne: e.target.value })
                      }
                      name="ansOne"
                    ></input>
                    <label>... twice previously.</label>
                  </li>
                  <li>
                    <input
                      type={"radio"}
                      value="opt3"
                      onChange={(e) =>
                        setDeatils({ ...details, ansOne: e.target.value })
                      }
                      name="ansOne"
                    ></input>
                    <label>... three times previously.</label>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <p id="question_Two">2. Mr Griffin is from ...</p>
              <div>
                <ul>
                  <li>
                    <input
                      type={"radio"}
                      value="opt1"
                      onChange={(e) =>
                        setDeatils({ ...details, ansTwo: e.target.value })
                      }
                      name="ansTwo"
                    ></input>
                    <label>... Melbourne.</label>
                  </li>
                  <li>
                    <input
                      type={"radio"}
                      value="opt2"
                      onChange={(e) =>
                        setDeatils({ ...details, ansTwo: e.target.value })
                      }
                      name="ansTwo"
                    ></input>
                    <label>... Sydney.</label>
                  </li>
                  <li>
                    <input
                      type={"radio"}
                      value="opt3"
                      onChange={(e) =>
                        setDeatils({ ...details, ansTwo: e.target.value })
                      }
                      name="ansTwo"
                    ></input>
                    <label>... Perth.</label>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <p id="question_Three">
                3. Mr&nbsp;Griffin’s passport number is ...
              </p>
              <div>
                <ul>
                  <li>
                    <input
                      type={"radio"}
                      value="opt1"
                      onChange={(e) =>
                        setDeatils({ ...details, ansThree: e.target.value })
                      }
                      name="ansThree"
                    ></input>
                    <label>... 87647489.</label>
                  </li>
                  <li>
                    <input
                      type={"radio"}
                      value="opt2"
                      onChange={(e) =>
                        setDeatils({ ...details, ansThree: e.target.value })
                      }
                      name="ansThree"
                    ></input>
                    <label>... 87637289.</label>
                  </li>
                  <li>
                    <input
                      type={"radio"}
                      value="opt3"
                      onChange={(e) =>
                        setDeatils({ ...details, ansThree: e.target.value })
                      }
                      name="ansThree"
                    ></input>
                    <label>... 87637489.</label>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <p id="question_Four">4. Mr Griffin wants to book ...</p>
              <div>
                <ul>
                  <li>
                    <input
                      type={"radio"}
                      value="opt1"
                      onChange={(e) =>
                        setDeatils({ ...details, ansFour: e.target.value })
                      }
                      name="ansFour"
                    ></input>
                    <label>... a single room for 2 nights.</label>
                  </li>
                  <li>
                    <input
                      type={"radio"}
                      value="opt2"
                      onChange={(e) =>
                        setDeatils({ ...details, ansFour: e.target.value })
                      }
                      name="ansFour"
                    ></input>
                    <label>... a double room for 2 nights.</label>
                  </li>
                  <li>
                    <input
                      type={"radio"}
                      value="opt3"
                      onChange={(e) =>
                        setDeatils({ ...details, ansFour: e.target.value })
                      }
                      name="ansFour"
                    ></input>
                    <label>... a single room for 1 night.</label>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <p id="question_Five">
                5. Mr Griffin will arrive at the Sunrise Hotel by ...
              </p>
              <div>
                <ul>
                  <li>
                    <input
                      type={"radio"}
                      value="opt1"
                      onChange={(e) =>
                        setDeatils({ ...details, ansFive: e.target.value })
                      }
                      name="ansFive"
                    ></input>
                    <label>... 9.15 p.m.</label>
                  </li>
                  <li>
                    <input
                      type={"radio"}
                      value="opt2"
                      onChange={(e) =>
                        setDeatils({ ...details, ansFive: e.target.value })
                      }
                      name="ansFive"
                    ></input>
                    <label>... 10.00 p.m.</label>
                  </li>
                  <li>
                    <input
                      type={"radio"}
                      value="opt3"
                      onChange={(e) =>
                        setDeatils({ ...details, ansFive: e.target.value })
                      }
                      name="ansFive"
                    ></input>
                    <label>... 9.35 p.m.</label>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <p id="question_Six">
                6. When he gets to the Sunrise Hotel, the food Mr Griffin will
                find in his room will be ...
              </p>
              <div>
                <ul>
                  <li>
                    <input
                      type={"radio"}
                      value="opt1"
                      onChange={(e) =>
                        setDeatils({ ...details, ansSix: e.target.value })
                      }
                      name="ansSix"
                    ></input>
                    <label>... a cheese sandwich with fries.</label>
                  </li>
                  <li>
                    <input
                      type={"radio"}
                      value="opt2"
                      onChange={(e) =>
                        setDeatils({ ...details, ansSix: e.target.value })
                      }
                      name="ansSix"
                    ></input>
                    <label>... a cheese sandwich.</label>
                  </li>
                  <li>
                    <input
                      type={"radio"}
                      value="opt3"
                      onChange={(e) =>
                        setDeatils({ ...details, ansSix: e.target.value })
                      }
                      name="ansSix"
                    ></input>
                    <label>... a burger.</label>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        {/* ---------------------------------------------------------------- */}

        <div className="mainContainer2">
          <div>
            <p className="title1">Questions 7 - 10</p>
          </div>
          <div>
            <p className="title2">
              Answer the questions. Write
              <strong> NO MORE THAN THREE WORDS AND / OR A NUMBER </strong> in
              each gap.
            </p>
          </div>

          <div className="sec2">
            <div className="sec2_a sec2_opt">
              <p id="question_Seven" className="sec2_p">
                What number room will Mr&nbsp;Griffin be in at the Sunrise
                Hotel?
              </p>
              <input
                type={Text}
                placeholder="7"
                onChange={(e) =>
                  setDeatils({ ...details, ansSeven: e.target.value })
                }
              ></input>
            </div>
            <div className="sec2_b sec2_opt">
              <p id="question_Eight" className="sec2_p">
                How much will Mr&nbsp;Griffin pay per night at the Sunrise
                Hotel?
              </p>
              <input
                type={Text}
                placeholder="8"
                onChange={(e) =>
                  setDeatils({ ...details, ansEight: e.target.value })
                }
              ></input>
            </div>
            <div className="sec2_c sec2_opt">
              <p id="question_Nine" className="sec2_p">
                Who will take Mr&nbsp;Griffin’s food to his room?
                <input
                  type={Text}
                  placeholder="9"
                  onChange={(e) =>
                    setDeatils({ ...details, ansNine: e.target.value })
                  }
                ></input>
              </p>
            </div>
            <div className="sec2_d sec2_opt">
              <p id="question_Ten" className="sec2_p">
                How much will Mr&nbsp;Griffin pay for his food?
                <input
                  type={Text}
                  placeholder="10"
                  onChange={(e) =>
                    setDeatils({ ...details, ansTen: e.target.value })
                  }
                ></input>
              </p>
            </div>
          </div>
        </div>
        <button onClick={PostData}>Submit</button>
      </div>
    </div>
  );
};

export default Main;
