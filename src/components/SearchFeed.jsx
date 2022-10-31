import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Videos } from "./";
import { fetchFromAPI } from "../utilities/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((results) => {
      setVideos(results.items);
    });
    document.title = `YourTube | ${searchTerm}`;
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search results for{" "}
        <span style={{ color: "#00a693" }}> {searchTerm} </span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
