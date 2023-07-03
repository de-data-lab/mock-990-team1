import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { data, allRecievedByState } from "../utils/Data";
import {dataA, dataB, dataC, dataD,dataE,dataF, dataG, dataH, dataI, dataJ, dataK, dataL,dataM, dataN, dataO, dataP, dataQ,dataR,dataS,dataT,dataU, dataV,dataW,dataX,dataY, dataZ} from "../utils/sector";
import { option, option2018 } from "../utils/Config";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ChartWithDropDown() {
  const [graphData, setGraphData] = useState(dataA);
  const [graphOptions, setGraphOptions] = useState(option);

  const datasets = [
    { label: "Arts, Culture and Humanities", options: option, data: dataA },
    { label: "Education", options: option, data: dataB },
    { label: "Environmental Quality, Protection and Beautification", options: option, data: dataC },
    { label: "Animal-Related", options: option, data: dataD },
    { label: "Health - General and Rehabilitative", options: option, data: dataE },
    { label: "Mental Health, Crisis Intervention", options: option, data: dataF },
    { label: "Diseases, Disorders, Medical Disciplines", options: option, data: dataG },
    { label: "Medical Research", options: option, data: dataH },
    { label: "Crime, Legal-Related", options: option, data: dataI },
    { label: "Employment, Job-Related", options: option, data: dataJ },
    { label: "Food, Agriculture and Nutrition", options: option, data: dataK },
    { label: "Housing, Shelter", options: option, data: dataL },
    { label: "Public Safety, Disaster Preparedness and Relief", options: option, data: dataM },
    { label: "Recreation, Sports, Leisure, Athletics", options: option, data: dataN },
    { label: "Youth Development", options: option, data: dataO },
    { label: "Human Services - Multipurpose and Other", options: option, data: dataP },
    { label: "International, Foreign Affairs and National Security", options: option, data: dataQ },
    { label: "Civil Rights, Social Action, Advocacy", options: option, data: dataR },
    { label: "Community Improvement, Capacity Building", options: option, data: dataS },
    { label: "Philanthropy, Voluntarism and Grantmaking Foundations", options: option, data: dataT },
    { label: "Science and Technology Research Institutes, Services", options: option, data: dataU },
    { label: "Social Science Research Institutes, Services", options: option, data: dataV },
    { label: "Public, Society Benefit - Multipurpose and Other", options: option, data: dataW },
    { label: "Religion-Related, Spiritual Development", options: option, data: dataX },
    { label: "Mutual/Membership Benefit Organizations, Other", options: option, data: dataY },
    { label: "Unknown", options: option, data: dataZ },
    
  ];
  
  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Select Sector">
        {datasets.map((dataset) => (
          <Dropdown.Item
            onClick={() => {
              setGraphData(dataset.data);
              setGraphOptions(dataset.options);
            }}
          >
            {dataset.label}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <div>
        <Bar data={graphData} options={graphOptions} />
      </div>
    </div>
  );
}

export default ChartWithDropDown;
