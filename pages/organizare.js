const { GoogleSpreadsheet } = require("google-spreadsheet");
import { Fragment, useEffect, useState } from "react";
import { getData } from "./api/sheet";

const Organizare = ({ sheetData }) => {
  const [org, setOrg] = useState([]);
  const [searchedName, setSearchedName] = useState("");
  const [results, setResults] = useState([]);

  const fetchData = async () => {
    const data = await getData();
    setOrg(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSearch = () => {
    let result = [];
    org.forEach(
      (o) => o.name.toLowerCase().includes(searchedName) && result.push(o)
    );

    setResults(result);
  };

  //   console.log(org);
  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium">Nume invitat</label>
      <span className="flex flex-row">
        <input
          type="text"
          id="default-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(event) =>
            setSearchedName(event.target.value.toLowerCase())
          }
        />
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={onSearch}
        >
          Cauta
        </button>
      </span>

      <br />
      <br />

      {results.length ? (
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Nume Invitat
                </th>
                <th scope="col" className="py-3 px-6">
                  Numar Masa
                </th>
              </tr>
            </thead>
            <tbody>
              {results.map((res) => (
                <Fragment key={`${res.name}-${res.table}`}>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {res.name}
                    </th>
                    <td class="py-4 px-6">{res.table}</td>
                  </tr>
                </Fragment>
              ))}

              {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="py-4 px-6">Sliver</td>
            </tr> */}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

// export async function getServersideProps() {
//   await dbConnect();
//   //   const req = await fetch("http://localhost:3000/api/sheet");
//   //   const res = await req.json();
//   console.log("HELLO");
//   const data = await getData();

//   return {
//     props: { sheetData: data },
//   };
// }

export default Organizare;
