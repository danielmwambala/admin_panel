import React from "react";
import {
  Inject,
  ChartComponent,
  Legend,
  Category,
  StackingColumnSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

function Stacked({
  width,
  height,
  id,
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
}) {
  return (
    <ChartComponent
      id={id}
      width={width}
      height={height}
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: "white" }}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default Stacked;
