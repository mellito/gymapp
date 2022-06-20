import React from "react";
import { Typography, Stack, Box } from "@mui/material";
import Loader from "./Loader";

const ExercisesVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;
  return (
    <Box sx={{ marginTop: { lg: "50px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px" textAlign="center">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        Exercises Videos
      </Typography>
      <Stack
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "20px", xs: "0" } }}
      >
        {exerciseVideos?.slice(0, 6).map((video, index) => (
          <a
            target="_blank"
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
            rel="noreferrer"
          >
            <img src={video.video.thumbnails[0].url} alt={video.video.title} />
            <Box>
              <Typography variant="h6" textAlign="center" color="#000">
                {video.video.title}
              </Typography>
              <Typography textAlign="center" color="#ff2625">
                {video.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExercisesVideos;
