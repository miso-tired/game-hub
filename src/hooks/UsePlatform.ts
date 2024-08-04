import useData from "./UseData";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const UsePlatform = () => useData<Platform>('/platforms/lists/parents')

export default UsePlatform