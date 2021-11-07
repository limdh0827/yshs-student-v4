import UserCard from "../components/home/UserCard";
import DietCard from "../components/home/DietCard";
import DDayCard from "../components/home/DDayCard";

const Home = () => {
  return (
    <main className="relative space-y-5">
      <UserCard />

      <DietCard />

      <DDayCard />
    </main>
  );
};

export default Home;
