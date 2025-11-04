export default function Image() {
  const images = [
    "/sample.jpeg",
    "/download.jpeg",
    "/download (1).jpeg",
    "/sample2.jpeg",
    "/download.png",
  ];

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "60px",
        fontSize: "20px",
        padding: "0 20px",
      }}
    >
      <h2
        style={{
          marginBottom: "40px",
          fontSize: "28px",
          color: "#80ed99",
          letterSpacing: "0.5px",
        }}
      >
        Image Gallery
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "25px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              width: "240px",
              height: "180px",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.04)";
              e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 3px 10px rgba(0,0,0,0.15)";
            }}
          >
            <img
              src={img}
              alt="Gallery item"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                height: "35px",
                background:
                  "linear-gradient(180deg, transparent, rgba(0,0,0,0.7))",
                color: "#fff",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: "0",
                transition: "opacity 0.3s ease",
              }}
              className="overlay"
            >
              View Image
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
