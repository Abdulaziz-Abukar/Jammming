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
