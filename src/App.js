import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Section from "./Components/Section";
import Carousel from "./Components/Carousel";
import FilterSection from "./Components/FilterSection";
import Menu from "./Components/Menu";
import "./styles.css";
import "./index.css";

const ENDPOINT = "https://qtify-backend-labs.crio.do";

const fetchData = async (url, setter, errorHandler) => {
  try {
    const response = await axios.get(url);
    setter(response.data);
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    if (errorHandler) {
      errorHandler(error);
    }
  }
};

const App = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchData(`${ENDPOINT}/albums/top`, setTopAlbums, (error) => {
      // Handle specific error cases for top albums, if needed
    });

    fetchData(`${ENDPOINT}/albums/new`, setNewAlbums, (error) => {
      // Handle specific error cases for new albums, if needed
    });

    fetchData(`${ENDPOINT}/songs`, (data) => {
      setSongs(data);
      setFilteredSongs(data);
    }, (error) => {
      // Handle specific error cases for songs, if needed
    });

    fetchData(`${ENDPOINT}/genres`, (data) => {
      setGenres([{"key": "all", "label": "All"}, ...data.data]);
    }, (error) => {
      // Handle specific error cases for genres, if needed
    });
  }, []);

  const executeFilter = (genre) => {
    if (genre === 'all') {
      setFilteredSongs(songs);
    } else {
      setFilteredSongs(songs.filter((song) => song.genre.key === genre));
    }
  };

  return (
    <>
      <Navbar />
      <HeroSection />
      <Section navId='ta' title="Top Albums" data={topAlbums} />
      <Section navId='na' title="New Albums" data={newAlbums} />
      <FilterSection
        title="Songs"
        data={filteredSongs}
        filters={genres}
        executeFilter={executeFilter}
      />
      <Menu />
    </>
  );
};

export default App;