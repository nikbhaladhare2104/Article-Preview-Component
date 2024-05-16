import { useState } from "react";
import SharePopUp from "./components/SharePopUp";

function App() {
  const date = new Date();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <main>
      <section>
        {/* DARKMODE BUTTON  */}
        <div className="container">
          <img src="/drawers.jpg" alt="drawer image" className="img" />
          <div className="card">
            <h1>
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h1>
            <p className="card-info">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>

            {/* AUTHOR INFO  */}
            <div className={`bottom ${active ? "active" : ""}`}>
              <div className="author">
                <img src="/profile_pic.png" alt="avatar" id="author-logo" />
                <div className="author-info">
                  <p>Nikhil Bhaladhare</p>
                  <p>
                    {`${date.getDate()}  ${date.toLocaleString("default", {
                      month: "long",
                    })} ${date.getFullYear()}`}
                  </p>
                </div>
              </div>
              {/* SHARE BUTTON  */}
              <div className="share">
                <SharePopUp />
                <div className="share-btn" onClick={handleClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="13"
                  >
                    <path
                      fill="#6E8098"
                      d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
