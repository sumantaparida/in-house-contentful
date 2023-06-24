/* eslint-disable tailwindcss/no-custom-classname */
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';
import Checkbox from '@mui/material/Checkbox';
import { green, grey } from '@mui/material/colors';
import Link from 'next/link';

import ContainerNav from '@/components/ContainerNav';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { contentList, contentListHeader } from '@/utils/Constant/Content';

import ContentWrapper from './style';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Content = () => {
  return (
    <Main meta={<Meta title="In house content full" description="in house content full description" />}>
      <ContentWrapper className="flex flex-row">
        <div className="flex flex-1 flex-col border border-solid border-black bg-slate-100">
          <ContainerNav />
          <div className="_content_wrapper flex flex-row">
            <div className="_l_box flex " />
            <div className="_r_box flex flex-1 flex-col bg-white p-5">
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
                    {contentListHeader.map(_ele => {
                      const { id, thLabel } = _ele || {};
                      return (
                        <th key={id} className={['Setting'].includes(thLabel) ? 'last' : ''}>
                          <div>
                            {['Setting'].includes(thLabel) ? (
                              <SettingsIcon
                                sx={{
                                  fontSize: 20,
                                }}
                              />
                            ) : (
                              thLabel
                            )}
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="text-sm font-normal">
                  {contentList.map(_ele => {
                    const { id, name, contentType, updateAt, lastUpdatedBy, status } = _ele || {};
                    const { name: NAME } = lastUpdatedBy || {};
                    return (
                      <tr key={id}>
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
                          <Link href={`/content/${id}`}>{name}</Link>
                        </td>
                        <td>{contentType}</td>
                        <td>{updateAt}</td>
                        <td className="_update_by flex flex-row items-center gap-1.5">
                          <div className="_profile flex flex-row rounded-full border border-solid border-cyan-600" />
                          <div className="flex flex-row">{NAME}</div>
                        </td>
                        <td>
                          <span className="rounded-md bg-green-200 px-2 py-1 text-xs font-normal text-cyan-900">{status}</span>
                        </td>
                        <td className="last">
                          <MoreVertIcon sx={{ fontSize: 20 }} />
                        </td>
                      </tr>
                    );
                  })}
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
