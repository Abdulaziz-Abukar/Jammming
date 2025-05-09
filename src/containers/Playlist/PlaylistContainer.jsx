import React from "react";
import { TrackList } from "../../components/Tracklist/TrackList";
import styles from "./PlaylistContainer.module.css";
export function PlaylistContainer({
  tracks,
  playlistName,
  onRemove,
  isRemoval,
}) {
  return (
    <div className={styles.searchPlaylistContainer}>
      <h2 className={styles.title}>{playlistName}</h2>
      <TrackList tracks={tracks} onRemove={onRemove} isRemoval={isRemoval} />
      <div className={styles.saveButtonContainer}>
        <button className={styles.saveButton}>Save to Spotify</button>
      </div>
    </div>
  );
}
