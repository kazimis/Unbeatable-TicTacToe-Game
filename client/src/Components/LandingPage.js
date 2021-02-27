import React, { useEffect, useState } from "react";

const LandingPAge = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await (await fetch("/api/data")).json();
      setData(result);
    };
    fetchData();
  }, []);
  console.log(data);
  const playWitComp = (e) => {
    document.getElementsByClassName("gameOption").style.display = "none";
  };

  return (
    <>
      <div className="gameOption col-xs-12 col-sm-6 col-lg-4 col-xl-3">
        <div className="card align-items-center">
          <div className="card-body text-center">
            <h1 className="Game option">Game option</h1>
            <p className="card-text">
              Choose to play with computer or other available player
            </p>
            <button
              type="button"
              class="btn btn-primary btn-lg btn-block mt-5"
              onClick={playWitComp}
            >
              Play with computer
            </button>
            <button type="button" class="btn btn-primary btn-lg btn-block">
              Play with other player
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPAge;
