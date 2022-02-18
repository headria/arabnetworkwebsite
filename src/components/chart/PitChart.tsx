import { Chart } from "react-chartjs-2";
import { ChartData } from "chart.js";

export default function GetOrderStatic() {
  const data: ChartData<"pie", number[], string> = {
    labels: ["test1", "test2"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const dataUser = {
    labels: ["ssss", "sssss", "sssss"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 22, 33],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="mt-4 mb-5" style={{ marginTop: "200px" }}>
        <h3 className={"mt-3 mb-5"}>sss</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="card p-5">
              <Chart type="pie" key="1" data={data} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-5">{/*<Polar data={dataUser}/>*/}</div>
          </div>
        </div>
      </div>
    </>
  );
}
