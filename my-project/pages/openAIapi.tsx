import axios from "axios";
import { useState, useEffect } from "react";

export default function OpenAiapi() {
  const [weatherdata, setweatherdata] = useState({});

  const API_KEY = "0ec244e46591fd7c367a89652a2c737e";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.5665&lon=126.9780&appid=${API_KEY}`;
  const seoulWeather = async () => {
    try {
      const weatherdata = await axios({
        method: "get",
        url: url,
      });
      setweatherdata(weatherdata);
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    seoulWeather();
  }, []);
  return (
    <>
      <div className="col-lg-2"></div>
      <div className="col-lg-3">
        {Object.keys(weatherdata).length !== 0 && (
          <>
            {weatherdata.data.weather.map(
              (sun) =>
                sun.main === "Rain" && (
                  <img
                    className="backgroundimg"
                    src="https://p4.wallpaperbetter.com/wallpaper/617/727/784/rainy-day-wallpaper-preview.jpg"
                    alt="안개"
                  ></img>
                )
            )}
            {weatherdata.data.weather.map(
              (sun) =>
                sun.main === "Clear" && (
                  <img
                    className="backgroundimg"
                    src="https://mblogthumb-phinf.pstatic.net/MjAxODA3MDZfMjIw/MDAxNTMwODU0ODEzMTA1.5MUQPUyeoHbvJdRMC3p50OMZFqkHtYkj_Qy-kII2VhIg.PUP_vRZrwTsjtHyOBPBYBi6cMuC86i9omE1oQNxNxXQg.JPEG.ggvjf03278/1.jpg?type=w800"
                    alt="안개"
                  ></img>
                )
            )}
            {weatherdata.data.weather.map(
              (sun) =>
                sun.main === "Clouds" && (
                  <img
                    className="backgroundimg"
                    src="https://png.pngtree.com/thumb_back/fh260/background/20220313/pngtree-early-in-the-morning-the-clouds-flying-over-the-city-image_1009633.jpg"
                    alt="안개"
                  ></img>
                )
            )}
            {weatherdata.data.weather.map(
              (sun) =>
                sun.main === "Snow" && (
                  <img
                    className="backgroundimg"
                    src="https://t1.daumcdn.net/cfile/tistory/2444A838583C9EF806"
                    alt="안개"
                  ></img>
                )
            )}
            {weatherdata.data.weather.map(
              (sun) =>
                sun.main === "Haze" && (
                  <img
                    className="backgroundimg"
                    src="https://p4.wallpaperbetter.com/wallpaper/869/108/56/4k-scandinavia-fog-wallpaper-preview.jpg"
                    alt="안개"
                  ></img>
                )
            )}

            <div className="weatherBoxsize">
              <div className="weatherBox">
                <div className="justCenter">
                  <div className="colum">
                    <div> {weatherdata.data.name}</div>
                  </div>
                  <div className="colum">
                    <div>
                      {Math.round((weatherdata.data.main.temp - 273.15) * 10) /
                        10}
                      °C
                    </div>

                    <div className="colum">
                      <div className="WeatherPlace">
                        {/* {weatherdata.data.weather[0].main === "Clouds" && (
                          <div>비</div>
                        )} */}
                        {weatherdata.data.weather.map(
                          (sun) =>
                            sun.main === "Clouds" && (
                              <div>
                                <i className="fa-solid fa-cloud"></i>
                              </div>
                            )
                        )}
                        {weatherdata.data.weather.map(
                          (sun) =>
                            sun.main === "Haze" && (
                              <div>
                                <i className="fa-solid fa-cloud"></i>
                              </div>
                            )
                        )}
                        {weatherdata.data.weather.map(
                          (sun) =>
                            sun.main === "Snow" && (
                              <div>
                                <i className="fa-solid fa-snowflake"></i>
                              </div>
                            )
                        )}
                        {weatherdata.data.weather.map(
                          (sun) =>
                            sun.main === "Rain" && (
                              <div>
                                <i className="fa-solid fa-cloud-showers-heavy"></i>
                              </div>
                            )
                        )}
                        {weatherdata.data.weather.map(
                          (sun) =>
                            sun.main === "Clear" && (
                              <div>
                                <i className="fa-solid fa-sun"></i>
                              </div>
                            )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
