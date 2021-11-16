import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

function App() {
  const [covid, setcovid] = useState([]);
  const api = axios.create({
    baseURL: "https://api.covidtracking.com/v1/states/current.json",
  });
  const getdata = () => {
    api.get().then((e) => {
      setcovid(e.data);
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  const details = (e) => {
    console.log(e);
    // const location = useLocation();
    // console.log(location.state);
    // const navigate = useNavigate();
    // let obj = {
 
    // };
    // navigate(`/details/${obj}`);
  };

  return (
    <>
      <h3 className="container">Covid Tracker</h3>
      <table className="container">
        <thead>
          <tr className="head">
            <td>S no.</td>
            <td>checkTimeEt</td>
            <td>positive</td>
            <td>negative</td>
            <td>hospitalized</td>
            <td>totalTestsViral</td>
            <td>totalTestResults</td>
            <td>onVentilatorCurrently</td>
            <td>total</td>
          </tr>
        </thead>
        <tbody>
          {covid.map((detail, index) => (
            <tr
              key={index}
              onClick={() => {
                details(detail);
              }}
            >
              <td>{index + 1}</td>
              <td>{detail.checkTimeEt}</td>
              <td>{detail.positive}</td>
              <td>{detail.negative}</td>
              <td>{detail.hospitalized}</td>
              <td>{detail.totalTestsViral}</td>
              <td>{detail.totalTestResults}</td>
              <td>{detail.onVentilatorCurrently}</td>
              <td>{detail.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
