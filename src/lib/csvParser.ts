import Papa from "papaparse";

export async function parseCSV(filePath: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch CSV file: ${filePath}`);
        }
        return response.text();
      })
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => resolve(results.data),
          error: (error) => reject(error),
        });
      })
      .catch((error) => reject(error));
  });
}