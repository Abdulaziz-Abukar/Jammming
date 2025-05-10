import React from "react";
import { TrackList } from "../../components/Tracklist/TrackList";
import styles from "./PlaylistContainer.module.css";
export function PlaylistContainer({
  tracks,
  playlistName,
  onNameChange,
  onRemove,
  isRemoval,
  onSave,
}) {
  return (
    <div className={styles.searchPlaylistContainer}>
      <input
        type="text"
        name="playlistName"
        id="playlistName"
        placeholder="Playlist Name..."
        value={playlistName}
        onChange={(e) => onNameChange(e.target.value)}
        className={styles.inputBox}
      />
      <TrackList tracks={tracks} onRemove={onRemove} isRemoval={isRemoval} />
      <div className={styles.saveButtonContainer}>
        <button className={styles.saveButton} onClick={onSave}>
          Save to Spotify
        </button>
      </div>
    </div>
  );
}
