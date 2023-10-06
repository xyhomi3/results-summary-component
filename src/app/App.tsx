import reaction from "@src/assets/images/icon-reaction.svg";
import memory from "@src/assets/images/icon-memory.svg";
import verbal from "@src/assets/images/icon-verbal.svg";
import visual from "@src/assets/images/icon-visual.svg";

function reloadPage() {
  window.location.reload(); // This will reload the current page
}

function App() {
  const summaryData = [
    {
      category: "Reaction",
      score: 80,
      icon: `${reaction}`,
    },
    {
      category: "Memory",
      score: 92,
      icon: `${memory}`,
    },
    {
      category: "Verbal",
      score: 61,
      icon: `${verbal}`,
    },
    {
      category: "Visual",
      score: 72,
      icon: `${visual}`,
    },
  ];

  return (
    <>
      <div className="card">
        <div className="result">
          <div
            style={{
              display: "flex",
              placeSelf: "center",
            }}
          >
            <h1 className="h1" style={{ color: "var(--Light-lavender)" }}>
              Your Result
            </h1>
          </div>
          <div className="result-data">
            <div className="circle-gradient">
              <h1
                style={{
                  fontSize: "3.5em",
                  position: "absolute",
                  paddingBottom: "0.3em",
                }}
              >
                76
              </h1>
              <p className="p">of 100</p>
            </div>
            <div className="comments" style={{ paddingTop: "0em" }}>
              <h1>Great</h1>
              <p style={{ color: "var(--Light-lavender)" }}>
                You scored higher than 65% of the
                <br /> people who have taken these tests.
              </p>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="summary">
          <div>
            <h1>Summary</h1>
          </div>

          <ul className="summary-data">
            {summaryData.map((item, index) => (
              <li key={index} className="data" id={`${item.category}`}>
                <div style={{ display: "flex", gap: "0.7em" }}>
                  <img
                    src={item.icon}
                    alt={`${item.category} icon`}
                    className="icon"
                  />
                  <span className={`${item.category}`}> {item.category}</span>
                </div>
                <span className="score">
                  {item.score}
                  {
                    <span style={{ color: "var(--Light-lavender)" }}>
                      {" "}
                      {"/ 100"}
                    </span>
                  }
                </span>
              </li>
            ))}
          </ul>

          <div className="space">
            <button onClick={reloadPage}>Continue</button>
          </div>

          <div className="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="https://xyhomi3.github.io">XYHOMi3</a>.
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
