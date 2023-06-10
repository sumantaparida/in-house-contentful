import ContainerNav from '@/components/ContainerNav';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import ContentWrapper from './style';

const Content = () => {
    return (
        <Main
            meta={
                <Meta
                    title="In house content full"
                    description="in house content full description"
                />
            }
        >
            <ContentWrapper className="flex flex-row">
                {/* <div className="flex border border-solid border-black">
                    left
                </div> */}
                <div className="flex flex-1 flex-col border border-solid border-black bg-slate-100">
                    <ContainerNav />
                    <div>bottom</div>
                </div>
            </ContentWrapper>
        </Main>
    );
};

export default Content;
