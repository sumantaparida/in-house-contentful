/* eslint-disable tailwindcss/no-custom-classname */
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';
import Checkbox from '@mui/material/Checkbox';
import { green, grey } from '@mui/material/colors';

import ContainerNav from '@/components/ContainerNav';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import ContentWrapper from './style';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
                <div className="flex flex-1 flex-col border border-solid border-black bg-slate-100">
                    <ContainerNav />
                    <div className="_content_wrapper flex flex-row">
                        <div className="_l_box flex " />
                        <div className="_r_box flex flex-1 bg-white p-5">
                            <table>
                                <thead className="font-xs text-xs">
                                    <tr>
                                        <th className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </th>
                                        <th>
                                            <div>Name</div>
                                        </th>
                                        <th>
                                            <div>Updated</div>
                                        </th>
                                        <th>
                                            <div>Last updated by</div>
                                        </th>
                                        <th>
                                            <div>Status</div>
                                        </th>
                                        <th className="last">
                                            <div>
                                                <SettingsIcon
                                                    sx={{ fontSize: 20 }}
                                                />
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm font-normal">
                                    <tr>
                                        <td className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="secound">
                                            Malamaal Mondays - 17th Ma (1)
                                        </td>
                                        <td>21 Jan 2022</td>
                                        <td>Sagar Patil</td>
                                        <td>Draft</td>
                                        <td className="last">
                                            <MoreVertIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="secound">
                                            Malamaal Mondays - 17th Ma (1)
                                        </td>
                                        <td>21 Jan 2022</td>
                                        <td>Sagar Patil</td>
                                        <td>Draft</td>
                                        <td className="last">
                                            <MoreVertIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="secound">
                                            Malamaal Mondays - 17th Ma (1)
                                        </td>
                                        <td>21 Jan 2022</td>
                                        <td>Sagar Patil</td>
                                        <td>Draft</td>
                                        <td className="last">
                                            <MoreVertIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="secound">
                                            Malamaal Mondays - 17th Ma (1)
                                        </td>
                                        <td>21 Jan 2022</td>
                                        <td>Sagar Patil</td>
                                        <td>Draft</td>
                                        <td className="last">
                                            <MoreVertIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="secound">
                                            Malamaal Mondays - 17th Ma (1)
                                        </td>
                                        <td>21 Jan 2022</td>
                                        <td>Sagar Patil</td>
                                        <td>Draft</td>
                                        <td className="last">
                                            <MoreVertIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="secound">
                                            Malamaal Mondays - 17th Ma (1)
                                        </td>
                                        <td>21 Jan 2022</td>
                                        <td>Sagar Patil</td>
                                        <td>Draft</td>
                                        <td className="last">
                                            <MoreVertIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="secound">
                                            Malamaal Mondays - 17th Ma (1)
                                        </td>
                                        <td>21 Jan 2022</td>
                                        <td>Sagar Patil</td>
                                        <td>Draft</td>
                                        <td className="last">
                                            <MoreVertIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="secound">
                                            Malamaal Mondays - 17th Ma (1)
                                        </td>
                                        <td>21 Jan 2022</td>
                                        <td>Sagar Patil</td>
                                        <td>Draft</td>
                                        <td className="last">
                                            <MoreVertIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="secound">
                                            Malamaal Mondays - 17th Ma (1)
                                        </td>
                                        <td>21 Jan 2022</td>
                                        <td>Sagar Patil</td>
                                        <td>Draft</td>
                                        <td className="last">
                                            <MoreVertIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="secound">
                                            Malamaal Mondays - 17th Ma (1)
                                        </td>
                                        <td>21 Jan 2022</td>
                                        <td>Sagar Patil</td>
                                        <td>Draft</td>
                                        <td className="last">
                                            <MoreVertIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="secound">
                                            Malamaal Mondays - 17th Ma (1)
                                        </td>
                                        <td>21 Jan 2022</td>
                                        <td>Sagar Patil</td>
                                        <td>Draft</td>
                                        <td className="last">
                                            <MoreVertIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="secound">
                                            Malamaal Mondays - 17th Ma (1)
                                        </td>
                                        <td>21 Jan 2022</td>
                                        <td>Sagar Patil</td>
                                        <td>Draft</td>
                                        <td className="last">
                                            <MoreVertIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="secound">
                                            Malamaal Mondays - 17th Ma (1)
                                        </td>
                                        <td>21 Jan 2022</td>
                                        <td>Sagar Patil</td>
                                        <td>Draft</td>
                                        <td className="last">
                                            <MoreVertIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="secound">
                                            Malamaal Mondays - 17th Ma (1)
                                        </td>
                                        <td>21 Jan 2022</td>
                                        <td>Sagar Patil</td>
                                        <td>Draft</td>
                                        <td className="last">
                                            <MoreVertIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="secound">
                                            Malamaal Mondays - 17th Ma (1)
                                        </td>
                                        <td>21 Jan 2022</td>
                                        <td>Sagar Patil</td>
                                        <td>Draft</td>
                                        <td className="last">
                                            <MoreVertIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="secound">
                                            Malamaal Mondays - 17th Ma (1)
                                        </td>
                                        <td>21 Jan 2022</td>
                                        <td>Sagar Patil</td>
                                        <td>Draft</td>
                                        <td className="last">
                                            <MoreVertIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="secound">
                                            Malamaal Mondays - 17th Ma (1)
                                        </td>
                                        <td>21 Jan 2022</td>
                                        <td>Sagar Patil</td>
                                        <td>Draft</td>
                                        <td className="last">
                                            <MoreVertIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="secound">
                                            Malamaal Mondays - 17th Ma (1)
                                        </td>
                                        <td>21 Jan 2022</td>
                                        <td>Sagar Patil</td>
                                        <td>Draft</td>
                                        <td className="last">
                                            <MoreVertIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="secound">
                                            Malamaal Mondays - 17th Ma (1)
                                        </td>
                                        <td>21 Jan 2022</td>
                                        <td>Sagar Patil</td>
                                        <td>Draft</td>
                                        <td className="last">
                                            <MoreVertIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="secound">
                                            Malamaal Mondays - 17th Ma (1)
                                        </td>
                                        <td>21 Jan 2022</td>
                                        <td>Sagar Patil</td>
                                        <td>Draft</td>
                                        <td className="last">
                                            <MoreVertIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="secound">
                                            Malamaal Mondays - 17th Ma (1)
                                        </td>
                                        <td>21 Jan 2022</td>
                                        <td>Sagar Patil</td>
                                        <td>Draft</td>
                                        <td className="last">
                                            <MoreVertIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="secound">
                                            Malamaal Mondays - 17th Ma (1)
                                        </td>
                                        <td>21 Jan 2022</td>
                                        <td>Sagar Patil</td>
                                        <td>Draft</td>
                                        <td className="last">
                                            <MoreVertIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="secound">
                                            Malamaal Mondays - 17th Ma (1)
                                        </td>
                                        <td>21 Jan 2022</td>
                                        <td>Sagar Patil</td>
                                        <td>Draft</td>
                                        <td className="last">
                                            <MoreVertIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="first">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        color: grey[400],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="secound">
                                            Malamaal Mondays - 17th Ma (1)
                                        </td>
                                        <td>21 Jan 2022</td>
                                        <td>Sagar Patil</td>
                                        <td>Draft</td>
                                        <td className="last">
                                            <MoreVertIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </Main>
    );
};

export default Content;
