import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const boxes = [
    { label: "PDF", path: "/pdf" },
    { label: "Link", path: "/link" },
    { label: "Video", path: "/video" },
    { label: "Image", path: "/image" },
    { label: "API", path: "/api" },
  ];

  return (
    <div
      style={{
        textAlign: "center",
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Top corner icons */}
      <img
        src="/download.png"
        alt="Stellar"
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "2px solid #80ed99",
          boxShadow: "0 0 12px #80ed9966",
          backgroundColor: "#0a0f0d",
          objectFit: "cover",
          zIndex: 1000,
        }}
      />
      <img
        src="/risein.png"
        alt="RiseIn"
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "2px solid #80ed99",
          boxShadow: "0 0 12px #80ed9966",
          backgroundColor: "#0a0f0d",
          objectFit: "cover",
          zIndex: 1000,
        }}
      />

      {/* Heading */}
      <h3
        style={{
          fontSize: "28px",
          marginBottom: "100px",
          color: "#80ed99",
          fontWeight: "600",
        }}
      >
        Welcome, Token Holder
      </h3>

      {/* Boxes */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "25px",
          flexWrap: "wrap",
          width: "80%",
          maxWidth: "800px",
        }}
      >
        {boxes.map((box) => (
          <div
            key={box.label}
            onClick={() => navigate(box.path)}
            style={{
              width: "160px",
              height: "120px",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              fontWeight: "bold",
              background:
                "linear-gradient(135deg, #ffffff, #eafff3, #d2ffe0)",
              color: "#1b4332",
              border: "1px solid #b7ffd0",
              boxShadow: "0 4px 10px rgba(128, 237, 153, 0.25)",
              cursor: "pointer",
              transition: "transform 0.25s, box-shadow 0.25s, border 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.boxShadow =
                "0 6px 18px rgba(128, 237, 153, 0.6)";
              e.currentTarget.style.border = "1px solid #80ed99";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 10px rgba(128, 237, 153, 0.25)";
              e.currentTarget.style.border = "1px solid #b7ffd0";
            }}
          >
            {box.label}
          </div>
        ))}
      </div>
    </div>
  );
}
