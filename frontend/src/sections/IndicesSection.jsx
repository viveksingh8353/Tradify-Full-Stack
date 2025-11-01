import Indices from "../components/Indices"; // ya aapke path ke hisaab se

export default function IndicesSection({ indices }) {
  return (
    <div style={{
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "0 32px",
      width: "100%"
    }}>
      <h2 style={{marginTop: 24, marginBottom: 12}}>Indices</h2>
      <div style={{ display: "flex", gap: "1rem", marginBottom: 24, overflowX: "auto" }}>
        {(indices || []).map((item, idx) => <Indices key={idx} data={item} />)}
      </div>
    </div>
  );
}
