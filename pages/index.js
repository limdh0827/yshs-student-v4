import UserCard from "../components/home/UserCard";
import DietCard from "../components/home/DietCard";
import DDayCard from "../components/home/DDayCard";
import NoticeBoardCard from "../components/home/NoticeBoardCard";

const Home = () => {
  return (
    <main className="relative space-y-5">
      <UserCard />

      <DietCard />

      <DDayCard />

      <NoticeBoardCard />
    </main>
  );
};

export default Home;
