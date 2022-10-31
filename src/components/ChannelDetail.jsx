import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Videos } from ".";
import { fetchFromAPI } from "../utilities/fetchFromAPI";
import ChannelCard from "./ChannelCard";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const { id } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });

    fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
    document.title = `YourTube | Channel`;
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(162deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 5%, rgba(7,231,217,0.5522584033613445) 52%, rgba(7,6,92,1) 95%, rgba(2,168,226,1) 98%, rgba(4,121,195,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 20,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
