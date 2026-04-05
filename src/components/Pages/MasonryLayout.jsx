import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const MasonryLayout = ({ photos }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>
        {photos.map((data) => {
          return (
            <div key={data["id"]} className="overflow-hidden rounded-lg">
              <img
                src={data["download_url"]}
                alt=""
                loading="lazy"
                style={{
                  width: "100%",
                  display: "block",
                }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryLayout;
