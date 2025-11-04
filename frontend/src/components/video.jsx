export default function Video() {
  const videos = [
    {
      title: "Intro to Blockchain",
      url: "https://www.youtube.com/embed/wtfNd-tJI6M?si=Wyce8VTk7WSrIRmR",
    },
    {
      title: "Install and use Freighter Wallet on Stellar Testnet",
      url: "https://www.youtube.com/embed/UKmEJYdP6Mg?si=uiSKRlx7Kn9IW_vG",
    },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "60px", fontSize: "20px" }}>
      <h2 style={{ marginBottom: "30px" }}>Video Library</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {videos.map((video, index) => (
          <div
            key={index}
            style={{
              width: "360px",
              height: "280px",
              border: "2px solid #ccc",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              overflow: "hidden",
              backgroundColor: "#fdfdfd",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
            }}
          >
            <iframe
              src={video.url}
              title={video.title}
              allowFullScreen
              style={{
                width: "100%",
                height: "80%",
                border: "none",
              }}
            />
            <div
              style={{
                height: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                color: "#007bff",
                borderTop: "1px solid #ddd",
              }}
            >
              {video.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
