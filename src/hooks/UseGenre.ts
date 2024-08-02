import useData from "./UseData";

interface Genre {
  id: number;
  name: string;
}

const useGenre = () => useData<Genre>('/genres')

export default useGenre;
