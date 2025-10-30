import { useParams } from "react-router-dom";
import ContributionCalendar from "../components/ContributionCalendar";

interface IndexProps {
  token: string;
}

const Index = ({ token }: IndexProps) => {
  const { username } = useParams<{ username: string }>();

  if (!username) {
    return <div>Username not found</div>;
  }

  return (
    <div className="container mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-semibold text-center text-gray-900">
        GitHub Contribution Calendar
      </h1>
      <ContributionCalendar username={username} token={token} />
    </div>
  );
};

export default Index;