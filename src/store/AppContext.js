import { createContext, useState, useEffect, useContext } from "react";
import { useMediaQuery } from "react-responsive";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [dataObject, setDataObject] = useState([]);
  const [dataArray, setDataArray] = useState([]);
  const [selectedSection, setSelectedSection] = useState("");
  const [searchResult, setSearchResult] = useState({
    query: "",
    filteredData: [],
  });

  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (isSystemDark) => setIsDarkMode(isSystemDark)
  );

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/data.json");
      let data = await response.json();

      for (let category in data) {
        data[category] = data[category].map((item) => {
          item.description = item.description.replace(/\\n/g, "<br/>");
          return item;
        });
      }
      console.log(data);

      setDataObject(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (dataObject.hasOwnProperty(selectedSection) || selectedSection !== "") {
      setDataArray(dataObject[selectedSection]);
      setSearchResult((prevResult) => ({
        ...prevResult,
        filteredData: dataObject[selectedSection],
      }));
    } else if (selectedSection === "") {
      const allValues = Object.values(dataObject).flat();
      setDataArray(allValues);
      setSearchResult((prevResult) => ({
        ...prevResult,
        filteredData: allValues,
      }));
    }
  }, [dataObject, selectedSection]);

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        isSideBarOpen,
        setIsSideBarOpen,
        dataArray,
        selectedSection,
        setSelectedSection,
        searchResult,
        setSearchResult,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};
