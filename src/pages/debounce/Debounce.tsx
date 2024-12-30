import { useState, useEffect } from "react";

interface DataI {
    id: number;
    name: string;
};

export const Debounce = () => {
  // Dummy data for demonstration
  const dummyData: DataI[] = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Mango" },
    { id: 5, name: "Grapes" },
  ];

  // State to store the search query and search results
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<DataI[]>(dummyData);

  // Effect hook to update search results when search query changes
  useEffect(() => {
    let timeout = setTimeout(() => {
      console.log(searchQuery);
      // Filter dummy data based on search query
      const filteredResults = dummyData.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setSearchResults(filteredResults);
    }, 800);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  return (
    <div>
      <h2>Search Component</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {searchResults.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};