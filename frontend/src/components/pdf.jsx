export default function Pdf() {
  const pdfs = [
    { title: "Political Bias in LLMs", file: "/sample2.pdf" },
    { title: "Blockchain Technology", file: "/sample.pdf" },
  ];

  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px 20px",
        backgroundColor: "#0a0f0d",
        color: "#c7f9cc",
        fontFamily: "monospace",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ marginBottom: "30px", color: "#80ed99", fontSize: "26px" }}>
        PDF Library
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {pdfs.map((pdf, index) => (
          <div
            key={index}
            onClick={() => window.open(pdf.file, "_blank")}
            style={{
              width: "280px",
              height: "360px",
              border: "1px solid #183d3d",
              borderRadius: "12px",
              boxShadow: "0 0 20px -5px rgba(0,255,127,0.15)",
              overflow: "hidden",
              backgroundColor: "#0d1b1e",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 0 25px -3px rgba(0,255,127,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 0 20px -5px rgba(0,255,127,0.15)";
            }}
          >
            <iframe
              src={pdf.file}
              title={pdf.title}
              style={{
                width: "100%",
                height: "80%",
                border: "none",
                backgroundColor: "#0a0f0d",
              }}
            />
            <div
              style={{
                height: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                color: "#bbe6c5ff",
                borderTop: "1px solid #183d3d",
                backgroundColor: "#0d1b1e",
              }}
            >
              {pdf.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
