import { useEffect, useState } from "react";
import { Box, Button, Typography, Stack, TextField } from "@mui/material";
import { fetchData, exercisesOptions } from "../utils/fetchData";
import HorizontalScrollbar from "../components/HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");

  const [bodyPartList, setBodyPartList] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exercisesOptions,
      );
      setBodyPartList(["all", ...bodyPartData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search.length > 0) {
      const exerciseData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises`,
        exercisesOptions,
      );

      const searchedExercises = exerciseData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search),
      );
      setExercises(searchedExercises);
      setSearch("");
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awsome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercise"
          type="text"
        />
        <Button
          onClick={handleSearch}
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyPartList}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyPart
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
