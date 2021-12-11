import { useState } from "react";

const useCardFilter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return { searchQuery, setSearchQuery };
};

export default useCardFilter;
