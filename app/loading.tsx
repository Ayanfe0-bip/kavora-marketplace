import { ShoppingBag } from "lucide-react";

export default function Loading() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#faf9f6",
        color: "#10182c",
        gap: "20px",
      }}
    >
      <div
        style={{
          width: "76px",
          height: "76px",
          borderRadius: "22px",
          background: "#10182c",
          display: "grid",
          placeItems: "center",
          color: "#e8c98f",
        }}
      >
        <ShoppingBag size={36} />
      </div>

      <h1
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "30px",
          letterSpacing: "3px",
        }}
      >
        KAVORA<span style={{ color: "#c69b55" }}>.</span>
      </h1>

      <div
        style={{
          width: "45px",
          height: "4px",
          borderRadius: "10px",
          background: "#c69b55",
          animation: "loading 1s ease-in-out infinite alternate",
        }}
      />

      <p
        style={{
          color: "#777d89",
          fontSize: "13px",
        }}
      >
        Preparing your shopping experience...
      </p>

      <style>{`
        @keyframes loading {
          from {
            width: 20px;
            opacity: 0.5;
          }
          to {
            width: 65px;
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}
