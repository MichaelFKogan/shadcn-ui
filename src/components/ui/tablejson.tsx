// src/components/ui/tablejson.tsx

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
        cell: info => {
            // Check if title exists and provide a default value if it does not
            const title = info.row.original.title || 'Default Title';

            // Prepare the image path by transforming the title
            const formattedTitle = title.toLowerCase().replace(/\s+/g, '');
            const imagePath = `/images/${formattedTitle}.png`;
            return (
                
                <a href={info.row.original ? info.row.original.url : '#'} target="_blank" className="title list__link" style={{ alignItems: "center", display: "flex", columnGap: "10px" }}>
                    <div className="relative h-[22px] min-w-[22px] w-[22px] rounded-md overflow-hidden scale-100 transition-all">
                        <img src={imagePath} alt={info.row.original.title} loading="lazy" decoding="async" className="bg-surface-100" sizes="100vw" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", color: "transparent" }}/>
                    </div>
                    <div className="link__text-wrapper">
                        <h3 className="text-foreground-light group-hover:text-foreground mb-0 text-sm font-medium transition-colors">{info.row.original ? info.row.original.title : 'Default Title'}</h3>
                    </div>
                </a>
        )},
    }),
    columnHelper.accessor('category', {
        header: 'Category',
        cell: info => (<div className="category text-sm"><Badge variant="secondary">{info.row.original ? info.row.original.category : 'Default category'}</Badge></div>),
        size: 80,
    }),
    columnHelper.accessor('tags', {
        header: 'Tags',
        cell: info => {
            // Check if tags exist and is a string, then split by commas; if already an array, use as is; otherwise default to empty array
            let tags = [];
            if (Array.isArray(info.row.original.tags)) {
                tags = info.row.original.tags;
            } else if (typeof info.row.original.tags === 'string') {
                tags = info.row.original.tags.split(', ');
            }
    
            // Filter out empty or whitespace-only tags
            tags = tags.filter(tag => tag.trim().length > 0);
    
            return (
                <div className="tags text-sm">
                    {tags.length > 0 ? tags.map((tag, index) => (
                        <Badge key={index} variant="outline">{tag.trim()}</Badge> // Render each tag within a Badge
                    )) : null} 
                </div>
            );
        },
    }),    
    columnHelper.accessor('city', {
        header: 'City',
        cell: info => (<div className="city text-sm">{info.row.original.city}</div>),
        size: 60,
    }),
    columnHelper.accessor('country', {
        id: 'country',
        header: 'Country',
        cell: info => (<div className="country text-sm">{info.row.original.country}</div>),
        size: 60,
    }),
    columnHelper.accessor('continent', {
        header: 'Continent',
        cell: info => (<div className="continent text-sm">{info.row.original.continent}</div>),
        size: 60,
    }),
    //     columnHelper.accessor('description', {
    //     id: 'description',
    //     header: 'Description',
    //     cell: info => (<div className="description text-xs">{info.row.original.description}</div>),
    //     size: 300,
    // }),
];

export function TableJson({ data, anchor }) {
    // Use useMemo to ensure data has a stable reference
    // const stableData = useMemo(() => data.links, [data.links]);

    // const allLinks = useMemo(() => {
    //     return data.reduce((acc, section) => acc.concat(section.links), []);
    // }, [data]);
    const allLinks = useMemo(() => data, [data]);

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
        enableColumnResizing: true,
        columnResizeMode: 'onChange',
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
                                    <div class="table-resize"
                                        onMouseDown={header.getResizeHandler()}
                                    />
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
