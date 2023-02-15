import { Card } from "../components/Card";
import { Sidebar } from "../components/Sidebar";

export const Home = () => {
  return (
    <div style={{ display: "flex", flex: "4" }}>
      <Sidebar />
      <Card />
    </div>
  );
};
