// src/components/ui/table.tsx

import { useState, useMemo } from 'react';
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
    tags: string;
    city: string;
    country: string;
    continent: string;
};

// Column helper to create columns
const columnHelper = createColumnHelper<Link>();

const columns = [
    columnHelper.accessor(row => row.title, {  // Accessor can also use row directly to fetch multiple values
        id: 'title',
        header: 'Title',
        cell: info => (
            <a href={info.row.original.url} target="_blank" className="list__link" style={{ alignItems: "center", display: "flex", columnGap: "10px" }}>
                <div className="relative h-[22px] min-w-[22px] w-[22px] rounded-md overflow-hidden scale-100 transition-all">
                    <img src={`/images/${info.row.original.image}`} alt={info.row.original.title} loading="lazy" decoding="async" className="bg-surface-100" sizes="100vw" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", color: "transparent" }}/>
                </div>
                <div className="link__text-wrapper">
                    <h3 className="text-foreground-light group-hover:text-foreground mb-0 text-sm font-medium transition-colors">{info.row.original.title}</h3>
                </div>
            </a>
        ),
    }),
    columnHelper.accessor('category', {
        header: 'Category',
        cell: info => (<div className="category text-sm"><Badge variant="secondary">{info.row.original.category}</Badge></div>),
    }),
    columnHelper.accessor('tags', {
        header: 'Tags',
        cell: info => (<div className="tags text-sm">{info.row.original.tags}</div>),
    }),
    columnHelper.accessor('city', {
        header: 'City',
        cell: info => (<div className="city text-sm">{info.row.original.city}</div>),
        size: 100,
    }),
    columnHelper.accessor('country', {
        id: 'country',
        header: 'Country',
        cell: info => (<div className="country text-sm">{info.row.original.country}</div>),
        size: 100,
    }),
    columnHelper.accessor('continent', {
        header: 'Continent',
        cell: info => (<div className="continent text-sm">{info.row.original.continent}</div>),
        size: 100,
    }),
        columnHelper.accessor('description', {
        id: 'description',
        header: 'Description',
        cell: info => (<div className="description text-xs">{info.row.original.description}</div>),
        size: 300,
    }),
];

export function Table({ data, anchor }) {
    // Use useMemo to ensure data has a stable reference
    // const stableData = useMemo(() => data.links, [data.links]);

    const allLinks = useMemo(() => {
        return data.reduce((acc, section) => acc.concat(section.links), []);
    }, [data]);

    // Create the table instance
    const table = useReactTable({
        data: allLinks,
        columns,
        // defaultColumn: {size: 50, minSize: 50, maxSize: 600,},
        // state: {
        //     columnPinning,
        // },
        initialState: {
            columnPinning: {
              left: ['title'],
              right: [],
            },
        },
        // enableColumnResizing: true,
        // columnResizeMode: 'onChange',
        getCoreRowModel: getCoreRowModel(),
    });

    // Render the table UI
    return (
        <div className="table-container">
            <table>

                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id} style={{ width: `${header.getSize()}px` }}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                    {/* <div class="table-resize"
                                        onMouseDown={header.getResizeHandler()}
                                    /> */}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} style={{ width: `${cell.column.getSize()}px` }}>
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
