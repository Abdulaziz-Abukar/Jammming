export async function searchTracks(searchTerm, accessToken) {
  const encodedTerm = encodeURIComponent(searchTerm);

  const response = await fetch(
    `https://api.spotify.com/v1/search?type=track&q=${encodedTerm}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const jsonResponse = await response.json();

  if (!jsonResponse.tracks) {
    return [];
  }

  return jsonResponse.tracks.items.map((track) => ({
    id: track.id,
    name: track.name,
    artist: track.artists[0].name,
    album: track.album.name,
    uri: track.uri,
  }));
}

export async function savePlaylist(playlistName, trackUris, accessToken) {
  if (!playlistName || trackUris.length === 0) {
    console.warn("Playlist name:", playlistName);
    console.warn("Track URIs:", trackUris);
    console.warn("Playlist name or track URIs missing.");
    return;
  }

  let userId;
  let playlistId;

  // 1. Get User ID
  try {
    const userResponse = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userData = await userResponse.json();
    userId = userData.id;
    console.log("User ID:", userId);
  } catch (error) {
    console.error("Error getting user ID:", error);
    return;
  }

  // 2. Create New Playlist
  try {
    const playlistResponse = await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: playlistName,
          description: "Created with Jammming 🎶",
          public: true,
        }),
      }
    );

    const playlistData = await playlistResponse.json();
    playlistId = playlistData.id;
    console.log("Created Playlist ID:", playlistId);
  } catch (error) {
    console.error("Error creating playlist:", error);
    return;
  }

  // 3. Add Tracks to Playlist
  try {
    const addTracksResponse = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uris: trackUris,
        }),
      }
    );

    const result = await addTracksResponse.json();
    console.log("Tracks added:", result);
  } catch (error) {
    console.error("Error adding tracks:", error);
  }
}
