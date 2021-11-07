import UserCard from "../components/home/UserCard";
import DietCard from "../components/home/DietCard";

const Home = () => {
  return (
    <main className="relative space-y-5">
      <UserCard />

      <DietCard />
    </main>
  );
};

export default Home;
