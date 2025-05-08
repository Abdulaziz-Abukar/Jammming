import React from "react";
import { Track } from "../Track/Track";
export function TrackList({ tracks }) {
  return (
    <div>
      {tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
}
