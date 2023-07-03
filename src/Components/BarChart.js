import React, { useState} from "react";
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
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {dataA, dataB, dataC, dataD,dataE,dataF, dataG, dataH, dataI, dataJ, dataK, dataL,dataM, dataN, dataO, dataP, dataQ,dataR,dataS,dataT,dataU, dataV,dataW,dataX,dataY, dataZ} from "../utils/sector";
import { optionsSector } from "../utils/Config";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

function ChartWithDropDown() {
  const [graphData, setGraphData] = useState(dataA);
  const [graphOptions, setGraphOptions] = useState(optionsSector );
  const [graphTitle, setGraphTitle] = useState("Arts, Culture and Humanities")

  const datasets = [
    { label: "Arts, Culture and Humanities", options: optionsSector, data: dataA },
    { label: "Education", options: optionsSector, data: dataB },
    { label: "Environmental Quality, Protection and Beautification", options: optionsSector, data: dataC },
    { label: "Animal-Related", options: optionsSector, data: dataD },
    { label: "Health - General and Rehabilitative", options: optionsSector, data: dataE },
    { label: "Mental Health, Crisis Intervention", options: optionsSector, data: dataF },
    { label: "Diseases, Disorders, Medical Disciplines", options: optionsSector, data: dataG },
    { label: "Medical Research", options: optionsSector, data: dataH },
    { label: "Crime, Legal-Related", options: optionsSector, data: dataI },
    { label: "Employment, Job-Related", options: optionsSector, data: dataJ },
    { label: "Food, Agriculture and Nutrition", options: optionsSector, data: dataK },
    { label: "Housing, Shelter", options: optionsSector, data: dataL },
    { label: "Public Safety, Disaster Preparedness and Relief", options: optionsSector, data: dataM },
    { label: "Recreation, Sports, Leisure, Athletics", options: optionsSector, data: dataN },
    { label: "Youth Development", options: optionsSector, data: dataO },
    { label: "Human Services - Multipurpose and Other", options: optionsSector, data: dataP },
    { label: "International, Foreign Affairs and National Security", options: optionsSector, data: dataQ },
    { label: "Civil Rights, Social Action, Advocacy", options: optionsSector, data: dataR },
    { label: "Community Improvement, Capacity Building", options: optionsSector, data: dataS },
    { label: "Philanthropy, Voluntarism and Grantmaking Foundations", options: optionsSector, data: dataT },
    { label: "Science and Technology Research Institutes, Services", options: optionsSector, data: dataU },
    { label: "Social Science Research Institutes, Services", options: optionsSector, data: dataV },
    { label: "Public, Society Benefit - Multipurpose and Other", options: optionsSector, data: dataW },
    { label: "Religion-Related, Spiritual Development", options: optionsSector, data: dataX },
    { label: "Mutual/Membership Benefit Organizations, Other", options: optionsSector, data: dataY },
    { label: "Unknown", options: optionsSector, data: dataZ },
    
  ];
  
  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Select Sector">
        {datasets.map((dataset) => (
          <Dropdown.Item
            onClick={() => {
              setGraphData(dataset.data);
              setGraphOptions(dataset.options);
              setGraphTitle(dataset.label)
            }}
          >
            {dataset.label}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <h2>{graphTitle}</h2>
      <div>
        <Bar data={graphData} plugins={[ChartDataLabels]} options={graphOptions} />
      </div>
    </div>
  );
}

export default ChartWithDropDown;
