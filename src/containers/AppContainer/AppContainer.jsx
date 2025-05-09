import React, { useState, useEffect } from "react";
import {
  redirectToSpotifyAuth,
  getAccessTokenFromCode,
} from "../../utils/SpotifyAuth";
import { searchTracks } from "../../utils/SpotifyAPI";
import { SearchResultContainer } from "../SearchResults/SearchResultContainer";
import { PlaylistContainer } from "../Playlist/PlaylistContainer";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import styles from "./AppContainer.module.css";

export function AppContainer() {
  // ✅ State
  const [token, setToken] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("");

  // ✅ Auth
  useEffect(() => {
    async function authFlow() {
      const accessToken = await getAccessTokenFromCode();
      if (!accessToken) {
        redirectToSpotifyAuth();
      } else {
        setToken(accessToken);
      }
    }

    authFlow();
  }, []);

  // ✅ Handlers
  async function handleSearch(term) {
    if (!token) return;
    const results = await searchTracks(term, token);
    setSearchResults(results);
  }

  function handleAddTrack(track) {
    const alreadyInPlaylist = playlistTracks.some(
      (item) => item.id === track.id
    );
    if (!alreadyInPlaylist) {
      setPlaylistTracks((prev) => [...prev, track]);
    }
  }

  function handleRemoveTrack(track) {
    setPlaylistTracks((prev) => prev.filter((item) => item.id !== track.id));
  }

  function handleSavePlaylist() {
    const trackUris = playlistTracks.map((track) => track.uri);
    console.log(`Saving "${playlistName}" with ${trackUris.length} tracks`);
    setPlaylistTracks([]);
    setPlaylistName("");
  }

  // ✅ Render
  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <div>
        <div className={styles.container}>
          <SearchResultContainer
            tracks={searchResults}
            onAdd={handleAddTrack}
          />
          <PlaylistContainer
            tracks={playlistTracks}
            playlistName={playlistName}
            onNameChange={setPlaylistName}
            onRemove={handleRemoveTrack}
            onSave={handleSavePlaylist}
            isRemoval={true}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
