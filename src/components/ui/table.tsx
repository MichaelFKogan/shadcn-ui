// src/components/Table.js or similar

import { useMemo } from 'react';
import { Badge } from "@/components/ui/badge";
import { useReactTable, ColumnDef, createColumnHelper, getCoreRowModel, flexRender } from '@tanstack/react-table';
import '../styles/table.css';

// Define the data type
type Link = {
    title: string;
    description: string;
    url: string;
    image: string;
    category: string;
};

// Example data
// const userData: User[] = [
//     { firstName: "Tanner", lastName: "Linsley", age: 33, visits: 100, progress: 50, status: "Married" },
//     { firstName: "Kevin", lastName: "Vandy", age: 27, visits: 200, progress: 100, status: "Single" },
// ];

// Column helper to create columns
const columnHelper = createColumnHelper<Link>();

const columns = [
    columnHelper.accessor('title', { header: 'Title' }),
    columnHelper.accessor('description', { header: 'Description' }),
    columnHelper.accessor('url', { header: 'URL', cell: info => <a href={info.getValue()}>{info.getValue()}</a> }),
    // columnHelper.accessor('image', { header: 'Image', cell: info => <img src={info.getValue()} alt={info.row.original.title} style={{ width: '50px' }} /> }),
    columnHelper.accessor('category', { header: 'Category' }),
];

export function Table({ data, anchor }) {
    // Use useMemo to ensure data has a stable reference
    const stableData = useMemo(() => data.links, [data.links]);

    // Create the table instance
    const table = useReactTable({
        data: stableData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    // Render the table UI
    return (
        <div className="table-container" id={anchor}>
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
