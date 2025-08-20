import { Message } from "@/types/Message";
import { get } from "@/utils/axios";

const { data } = await get<Message>({ route: "/" });

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Blank Template</h1>
            {data && <h3>{data.message}</h3>}
        </div>
    );
};

export default HomePage;
