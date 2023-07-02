/* eslint-disable react/no-array-index-key */
/* eslint-disable tailwindcss/no-custom-classname */
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useState } from 'react';

import ContainerNav from '@/components/ContainerNav';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import ContentModelWrapper from './style';

type DataItem = {
  name: string;
  subName: string;
  field: string;
  lastUpdatedBy: string;
  updated: string;
};

type SortOrder = {
  [key: string]: 'asc' | 'desc';
};

const ContentModel = () => {
  const [data, setData] = useState<DataItem[]>([
    { name: 'AbstractContent', subName: 'hold all common data of content', field: '2', lastUpdatedBy: 'Sagar Patil 1', updated: '1' },
    { name: 'Background Widget', subName: '', field: '22', lastUpdatedBy: 'Sagar Patil 2', updated: '2' },
    { name: 'Bottom Sheet', subName: 'Bottom Sheet To display extra information', field: '22', lastUpdatedBy: 'Sagar Patil 3', updated: '5' },
    {
      name: 'Brochure',
      subName: 'It holds brochure information like brochure title and url. Acts as a child entity in brochure implementation.',
      field: '2',
      lastUpdatedBy: 'Sagar Patil 4',
      updated: '8',
    },
    {
      name: 'Promotion Carousel',
      subName:
        'Acts as a parent entity in brochure implementation. It holds meta information regarding brochure such as tenant, vertical, insurer name, insurer logo.',
      field: '12',
      lastUpdatedBy: 'Sagar Patil 5',
      updated: '999',
    },
    { name: 'Story', subName: '', field: '3', lastUpdatedBy: 'Sagar Patil 6', updated: '0' },
    { name: 'AbstractContent', subName: 'hold all common data of content', field: '2', lastUpdatedBy: 'Sagar Patil 1', updated: '1' },
    { name: 'Background Widget', subName: '', field: '22', lastUpdatedBy: 'Sagar Patil 2', updated: '2' },
    { name: 'Bottom Sheet', subName: 'Bottom Sheet To display extra information', field: '22', lastUpdatedBy: 'Sagar Patil 3', updated: '5' },
    {
      name: 'Brochure',
      subName: 'It holds brochure information like brochure title and url. Acts as a child entity in brochure implementation.',
      field: '2',
      lastUpdatedBy: 'Sagar Patil 4',
      updated: '8',
    },
    {
      name: 'Promotion Carousel',
      subName:
        'Acts as a parent entity in brochure implementation. It holds meta information regarding brochure such as tenant, vertical, insurer name, insurer logo.',
      field: '12',
      lastUpdatedBy: 'Sagar Patil 5',
      updated: '999',
    },
    { name: 'Story', subName: '', field: '3', lastUpdatedBy: 'Sagar Patil 6', updated: '0' },
  ]);

  const [sortOrder, setSortOrder] = useState<SortOrder>({
    name: 'asc',
    lastUpdatedBy: 'asc',
    updated: 'asc',
  });

  const handleSort = (column: keyof DataItem) => {
    const newData = [...data];

    newData.sort((a, b) => {
      if (a[column] < b[column]) return sortOrder[column] === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return sortOrder[column] === 'asc' ? 1 : -1;
      return 0;
    });

    setData(newData);

    setSortOrder(prevSortOrder => ({
      ...prevSortOrder,
      [column]: prevSortOrder[column] === 'asc' ? 'desc' : 'asc',
    }));
  };

  return (
    <Main meta={<Meta title="In house content full" description="in house content full description" />}>
      <ContentModelWrapper className="flex flex-row">
        <div className="flex flex-1 flex-col border border-solid border-black bg-slate-100">
          <ContainerNav
            name="Content Model"
            onlySearch
            searchPlaceholder="Search for a content type"
            isFilter={false}
            buttonName="Add content type"
            buttonAction="/contentModel/new/fields/"
          />
          <div className="_content_wrapper flex flex-row">
            <div className="_r_box flex flex-1 bg-white p-5">
              <table>
                <thead className="font-xs text-xs">
                  <tr>
                    <th className="w-3/5">
                      <div onClick={() => handleSort('name')} role="presentation">
                        Name
                      </div>
                    </th>
                    <th>
                      <div onClick={() => handleSort('field')} role="presentation">
                        Fields
                      </div>
                    </th>
                    <th className="w-1/5">
                      <div>Last Updated by</div>
                    </th>
                    <th className="w-1/6">
                      <div onClick={() => handleSort('updated')} role="presentation">
                        Updated
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm font-normal">
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td className="p-3">
                        {item.name}
                        <span className="flex text-sm font-normal leading-5">{item.subName}</span>
                      </td>
                      <td>{item.field}</td>
                      <td>
                        <AccountCircleIcon className="mx-2 text-blue-500" sx={{ fontSize: 20 }} />
                        {item.lastUpdatedBy}
                      </td>
                      <td>{item.updated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </ContentModelWrapper>
    </Main>
  );
};

export default ContentModel;
