export default function LinkPage() {
  const links = [
    {
      title: "OpenAI Research Blog",
      url: "https://openai.com/research",
      description: "Latest research and insights from OpenAI.",
    },
    {
      title: "Ethereum Foundation",
      url: "https://ethereum.org",
      description: "Official Ethereum documentation and ecosystem hub.",
    },
    {
      title: "MIT Technology Review",
      url: "https://www.technologyreview.com",
      description: "Independent coverage of emerging technologies.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0f0d",
        color: "#c7f9cc",
        padding: "60px 20px",
        fontFamily: "monospace",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "28px", marginBottom: "40px", color: "#80ed99" }}>
        Exclusive Resource Links
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {links.map((link, index) => (
          <div
            key={index}
            onClick={() => window.open(link.url, "_blank")}
            style={{
              backgroundColor: "#0d1b1e",
              border: "1px solid #183d3d",
              borderRadius: "12px",
              padding: "20px",
              cursor: "pointer",
              boxShadow: "0 0 15px -5px rgba(0, 255, 127, 0.15)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 0 25px -3px rgba(0, 255, 127, 0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 0 15px -5px rgba(0, 255, 127, 0.15)";
            }}
          >
            <h3 style={{ color: "#f0f6f1ff", fontSize: "20px", marginBottom: "10px" }}>
              {link.title}
            </h3>
            <p style={{ color: "#a9b2aeff", fontSize: "15px" }}>{link.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
