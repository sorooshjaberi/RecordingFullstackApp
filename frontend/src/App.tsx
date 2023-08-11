import { useQuery } from "react-query";
import { fetchAllSongs } from "./api/songs";

type Props = {};
const App = (props: Props) => {
  const { data: songs, isLoading } = useQuery({
    queryKey: ["songs"],
    queryFn: fetchAllSongs,
  });

  if (isLoading) return "loading...";

  return (
    <div className="w-[calc(100%-100px)] p-[1rem] bg-slate-600 rounded-lg mx-auto mt-5 flex flex-wrap justify-between gap-5">
      {songs?.data.map((song) => {
        return (
          <p className="text-red-50 basis-[30%] text-center">{song.name}</p>
        );
      })}
    </div>
  );
};
export default App;
