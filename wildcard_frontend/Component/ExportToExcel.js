import React from 'react'
import * as XLSX from "xlsx";

export const ExportToExcel = ({ apiData }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const ExportToCSV = (apiData) => {
    const worksheet = XLSX.utils.json_to_sheet(apiData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workbook, "DataSheet.xlsx");
  };

  return (
    <button onClick={(e) => ExportToCSV(apiData)}>Export</button>
  );
};