import { useParams } from "react-router-dom";
import usePhotos from "../../Hooks/usePhotos";
import PageNo from "./PageNo";
import InvalidPage from "./InvalidPage";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";
import MasonryLayout from "./MasonryLayout";

const Page = () => {
  const { pageId } = useParams();
  const currentPage = parseInt(pageId, 10) || 1;

  if ((pageId && isNaN(currentPage)) || currentPage > 40 || currentPage < 1) {
    return <InvalidPage />;
  }
  const { photos, loading, error } = usePhotos(currentPage);
  if (error) return <ErrorPage />;

  return (
    <div className="px-4 py-2 min-h-[calc(100vh-400px)]">
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <MasonryLayout photos={photos} />
          <PageNo currentPage={currentPage} />
        </>
      )}
    </div>
  );
};

export default Page;
