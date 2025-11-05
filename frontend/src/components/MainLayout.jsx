import Breadcrumb from "../pages/dashboard/components/Breadcrumb";

export default function MainLayout({ children }) {
  return (
    <div className="max-w-[1100px] mx-auto px-6">
      <div className="py-4">
        <Breadcrumb />
      </div>
      {children}
    </div>
  );
}
