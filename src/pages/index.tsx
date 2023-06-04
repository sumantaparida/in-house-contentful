import Navbar from '@/components/Navbar';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
    return (
        <Main
            meta={
                <Meta
                    title="In house content full"
                    description="in house content full description"
                />
            }
        >
            <Navbar />
            Home Page
        </Main>
    );
};

export default Index;
