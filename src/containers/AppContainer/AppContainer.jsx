import React, { useState } from "react";
import { SearchResultContainer } from "../SearchResults/SearchResultContainer";
import { PlaylistContainer } from "../Playlist/PlaylistContainer";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Header } from "../../components/Header/Header";
import styles from "./AppContainer.module.css";

export function AppContainer() {
  const mockSearchResults = [
    {
      id: "1",
      name: "Track One",
      artist: "Artist Alpha",
      album: "Album Red",
      uri: "spotify:track:1111aaa",
    },
    {
      id: "2",
      name: "Track Two",
      artist: "Artist Beta",
      album: "Album Blue",
      uri: "spotify:track:2222bbb",
    },
    {
      id: "3",
      name: "Track Three",
      artist: "Artist Gamma",
      album: "Album Green",
      uri: "spotify:track:3333ccc",
    },
  ];

  const mockPlaylist = [
    {
      id: "3",
      name: "Track Three",
      artist: "Artist Gamma",
      album: "Album Green",
      uri: "spotify:track:3333ccc",
    },
    {
      id: "4",
      name: "Track Four",
      artist: "Artist Delta",
      album: "Album Yellow",
      uri: "spotify:track:4444ddd",
    },
    {
      id: "5",
      name: "Track Five",
      artist: "Artist Epsilon",
      album: "Album Purple",
      uri: "spotify:track:5555eee",
    },
  ];

  const [searchResults, setSearchResults] = useState(mockSearchResults);
  const [playlistTracks, setPlaylistTracks] = useState(mockPlaylist);
  const [playlistName, setPlaylistName] = useState("My Playlist");

  // Handle song addition
  function handleAddTrack(track) {
    const dupeChecker = playlistTracks.some(
      (trackInList) => trackInList.id === track.id
    );

    if (!dupeChecker) {
      setPlaylistTracks((prevPlaylist) => [...prevPlaylist, track]);
    }
  }

  // Handle song removal
  function handleRemoveTrack(track) {
    setPlaylistTracks((prevPlaylist) =>
      prevPlaylist.filter((trackInList) => trackInList.id !== track.id)
    );
  }

  // Handle saving playlist
  function handleSavePlaylist() {
    const trackUris = playlistTracks.map((track) => track.uri);
    console.log(`Saving "${playlistName}" with ${trackUris.length} tracks`);
    setPlaylistTracks([]);
    setPlaylistName("New Playlist");
  }
  return (
    <>
      <Header />
      <SearchBar />
      <div className={styles.container}>
        <SearchResultContainer tracks={searchResults} onAdd={handleAddTrack} />
        <PlaylistContainer
          tracks={playlistTracks}
          playlistName={playlistName}
          onNameChange={setPlaylistName}
          onRemove={handleRemoveTrack}
          isRemoval={true}
          onSave={handleSavePlaylist}
        />
      </div>
    </>
  );
}
