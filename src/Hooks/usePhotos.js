import { useState, useEffect } from "react";

const usePhotos = (pageNumber) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fecthApi() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://picsum.photos/v2/list?page=${pageNumber}&limit=25`,
        );
        if (!response.ok) throw new Error("Failed to fetch images");
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fecthApi();
  }, [pageNumber]);
  return { photos, loading, error };
};

export default usePhotos;
