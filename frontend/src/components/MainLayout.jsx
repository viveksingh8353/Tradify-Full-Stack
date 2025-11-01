// src/components/MainLayout.jsx
import Breadcrumb from "./Breadcrumb";

export default function MainLayout({ children }) {
  return (
    <div style={{
      maxWidth: 1100, margin: "0 auto", padding: "0 32px"
    }}>
      <Breadcrumb />
      {children}
    </div>
  );
}
