/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable tailwindcss/no-custom-classname */
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import React from 'react';

import SubNav from '@/components/Subnav';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import ContentDetailsWrapper from './style';

const ContentDetails = () => {
    const [value, setValue] = React.useState('1');
    const [containervalue, setContainervalue] = React.useState('general');

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const containerTabChange = (
        _event: React.SyntheticEvent,
        newValue: string,
    ) => {
        setContainervalue(newValue);
    };

    console.log('event', value, containervalue);
    return (
        <Main
            meta={
                <Meta
                    title="In house content full"
                    description="in house content full description"
                />
            }
        >
            <ContentDetailsWrapper className="flex flex-row">
                <div className="flex flex-1 flex-col border border-solid border-black bg-slate-100">
                    <SubNav />
                    <div className="_content_wrapper flex flex-row-reverse">
                        <div className="_l_box flex bg-gray-200 ">
                            <Box
                                sx={{
                                    width: '100%',
                                    typography: 'body1',
                                }}
                            >
                                <TabContext value={value}>
                                    <Box
                                        sx={{
                                            borderBottom: 1,
                                            borderColor: 'divider',
                                        }}
                                    >
                                        <TabList
                                            onChange={handleChange}
                                            aria-label="lab API tabs example"
                                            sx={{
                                                color: 'black',
                                                borderBottom: 1,
                                                borderColor: '#cbd5e0',
                                            }}
                                        >
                                            <Tab
                                                label="General"
                                                value="1"
                                                sx={{
                                                    color: 'black',
                                                    fontSize: '12px',
                                                    fontWeight: 'bold',
                                                }}
                                            />
                                            <Tab
                                                label="Comments"
                                                value="2"
                                                sx={{
                                                    color: 'black',
                                                    fontSize: '12px',
                                                    fontWeight: 'bold',
                                                }}
                                            />
                                            <Tab
                                                label="Info"
                                                value="3"
                                                sx={{
                                                    color: 'black',
                                                    fontSize: '12px',
                                                    fontWeight: 'bold',
                                                }}
                                            />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1">Item One</TabPanel>
                                    <TabPanel value="2">Item Two</TabPanel>
                                    <TabPanel value="3">Item Three</TabPanel>
                                </TabContext>
                            </Box>
                        </div>
                        <div className="_r_box flex flex-1 flex-col bg-white">
                            <div className="_c_sub_nav flex flex-row bg-gray-100">
                                <Box
                                    sx={{
                                        width: '100%',
                                        typography: 'body1',
                                    }}
                                >
                                    <TabContext value={containervalue}>
                                        <Box
                                            sx={{
                                                borderBottom: 1,
                                                borderColor: 'divider',
                                            }}
                                        >
                                            <TabList
                                                onChange={containerTabChange}
                                                aria-label="lab API tabs example"
                                                sx={{
                                                    color: 'black',
                                                    borderBottom: 1,
                                                    borderColor: '#cbd5e0',
                                                }}
                                            >
                                                <Tab
                                                    label="Editor"
                                                    value="general"
                                                    sx={{
                                                        color: 'black',
                                                        fontSize: '14px',
                                                        fontWeight: 'bold',
                                                        textTransform:
                                                            'inherit',
                                                    }}
                                                />
                                                <Tab
                                                    label="References"
                                                    value="comments"
                                                    sx={{
                                                        color: 'black',
                                                        fontSize: '14px',
                                                        fontWeight: 'bold',
                                                        textTransform:
                                                            'inherit',
                                                    }}
                                                />
                                                <Tab
                                                    label="Tags"
                                                    value="tags"
                                                    sx={{
                                                        color: 'black',
                                                        fontSize: '14px',
                                                        fontWeight: 'bold',
                                                        textTransform:
                                                            'inherit',
                                                    }}
                                                />
                                            </TabList>
                                        </Box>
                                        <TabPanel value="general">
                                            Editor
                                        </TabPanel>
                                        <TabPanel value="comments">
                                            Item Two
                                        </TabPanel>
                                        <TabPanel value="tags">
                                            Item Two
                                        </TabPanel>
                                    </TabContext>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentDetailsWrapper>
        </Main>
    );
};

export default ContentDetails;
