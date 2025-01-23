import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full">
      <SideNavigation />
      <div className="px-5 py-4">{children}</div>
    </div>
  );
}
