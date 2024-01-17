import { useReactTable } from "@tanstack/react-table";

const BasicTable = () => {
  const prepareRow = (row) => {
    // Format the "amount" column as currency
    row.values.amount = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(row.values.amount);

    // Highlight "Pending" rows in red
    row.className = row.values.status === "Pending" ? "pending-row" : "";
  };

  const columns = [
    { Header: "S/N", accessor: "id" },
    { Header: "Staff Name", accessor: "staffName" },
    { Header: "Purchase Request Number", accessor: "purchaseRequestNumber" },
    { Header: "Amount", accessor: "amount" },
    { Header: "Status", accessor: "status" },
    {
      Header: "View",
      accessor: "id",
    //   Cell: ({ row }) => (
    //     <button onClick={() => handleView(row.original)}>View</button>
    //   ),
    },
  ];

  const data = [
    {
      id: 1,
      staffName: "John Doe",
      purchaseRequestNumber: "PR123",
      amount: 100,
      status: "Pending",
    },
    {
      id: 2,
      staffName: "Jane Doe",
      purchaseRequestNumber: "PR456",
      amount: 250,
      status: "Approved",
    },
    // Add more data as needed
  ];

  const tableInstance = useReactTable({ columns, data });

  const handleView = (row) => {
    alert(`Viewing details for purchase request #${row.purchaseRequestNumber}`);
  };

  return (
    <div className="ml-3">
      <table {...tableInstance.getTableProps()}>
        <thead>
          {tableInstance.headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} key={column.id}>
                  {column.render("Header")} 1
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...tableInstance.getTableBodyProps()}>
          {tableInstance.rows.map((row) => (
            <tr {...row.getRowProps()} key={row.id}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} key={cell.id}>
                  {cell.render("Cell", { row })}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;
