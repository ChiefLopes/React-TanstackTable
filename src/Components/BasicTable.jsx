import { useTable } from "@tanstack/react-table";

const BasicTable = () => {
    
    /*** @type import("@tanstack/react-table").columnDef<any>*/
  const columns = [
    {
      Header: "S/N",
      accessorKey: "s/n",
    },
    {
      Header: "Staff Name",
      accessorKey: "staff name",
    },
    {
      Header: "Purchase Request Number",
      accessorKey: "purchase request number",
    },
    {
      Header: "Amount",
      accessorKey: "amount",
    },
    {
      Header: "Status",
      accessorKey: "status",
    },
  ];

  const data = [
    {
      "s/n": 1,
      "staff name": "John Doe",
      "purchase request number": "PR123",
      amount: 100,
      status: "Pending",
    },
    // Add more data as needed
  ];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="ml-3">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} key={column.id}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} key={cell.id}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;
