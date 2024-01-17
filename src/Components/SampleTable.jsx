import React from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';

const SampleTable = () => {
  const defaultData = [
    {
      firstName: 'tanner',
      lastName: 'linsley',
      age: 24,
      visits: 100,
      status: 'In Relationship',
      progress: 50
    },
    {
      firstName: 'tandy',
      lastName: 'miller',
      age: 40,
      visits: 40,
      status: 'Single',
      progress: 80
    },
    {
      firstName: 'joe',
      lastName: 'dirte',
      age: 45,
      visits: 20,
      status: 'Complicated',
      progress: 10
    }
  ];

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor('firstName', {
      cell: (info) => info.getValue() // get value from object
    }),
    columnHelper.accessor((row) => row.lastName, {
      id: 'lastName',
      header: () => 'LastName'
    }),
    columnHelper.accessor('age', {
      header: () => 'Age'
    }),
    columnHelper.accessor('visits', {
      header: () => 'Visits'
    }),
    columnHelper.accessor('status', {
      header: 'Status'
    }),
    columnHelper.accessor('progress', {
      header: 'Profile Progress'
    })
  ];

  const [data, setData] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <div>
      <table className={'p-3 ms-2 '}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-4" />
    </div>
  );
};

export default SampleTable;
