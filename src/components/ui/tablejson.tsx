// src/components/ui/tablejson.tsx

import { useState, useMemo } from 'react';
import { Badge } from "@/components/ui/badge";
import { badgeVariants } from "@/components/ui/badge"
import Link from 'next/link';
import { useReactTable, ColumnDef, createColumnHelper, getCoreRowModel, flexRender, getSortedRowModel } from '@tanstack/react-table';
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

const alphanumericSort = (rowA, rowB, columnId) => {
    const regex = /^[^a-zA-Z0-9]+/; // Regex to find non-alphanumeric characters at the start
  
    // Remove leading non-alphanumeric characters for comparison
    const valA = rowA.getValue(columnId).replace(regex, '');
    const valB = rowB.getValue(columnId).replace(regex, '');
  
    // Perform case-insensitive comparison
    return valA.toLowerCase().localeCompare(valB.toLowerCase());
  };
  

function getColumns(onSelectKeyword) {
    return [


    columnHelper.accessor(row => row.title, {  // Accessor can also use row directly to fetch multiple values
        id: 'title',
        header: 'Title',
        cell: info => {
            // Check if title exists and provide a default value if it does not
            const title = info.row.original.title || 'Default Title';
            // Prepare the image path by transforming the title
            const formattedTitle = title.toLowerCase().replace(/\s+/g, '');

            // Declare imagePath outside of the if/else block
            let imagePath;
            if (
                formattedTitle === "thaivisaadvice" 
                || formattedTitle === "bangkokexpats" 
                || formattedTitle === "digitalnomadcoffeeclub-chiangmai" 
            ) {imagePath = `/images/facebook.png`;} 
            
            else if(
                formattedTitle === "@discoverhongkong"
            ) {imagePath = `/images/instagram.png`;} 
            
            else if(
                formattedTitle === "@discoverhongkong"
                || formattedTitle === "r/chiangmai" 
                || formattedTitle === "r/thailand" 
                || formattedTitle === "r/bangkok" 
                || formattedTitle === "r/digitalnomad" 
            ) {imagePath = `/images/reddit.png`;}

            else if(
                formattedTitle === "christhefreelancer"
            ) {imagePath = `/images/youtube.png`;}

            else if(
                formattedTitle === "@christabellatravels"
                || formattedTitle === "layla|solofemaletravel" 
                || formattedTitle === "@digital_bromad" 
            ) {imagePath = `/images/tiktok.png`;}

            else {imagePath = `/images/${formattedTitle}.png`;}

            // const imagePath = `/images/${formattedTitle}.png`;
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
        enableSorting: true,
        sortingFn: alphanumericSort,
    }),
    columnHelper.accessor('category', {
        header: 'Category',
        cell: info => (<div className="category text-sm"><Badge variant="secondary" onClick={() => onSelectKeyword(info.row.original.category)}>{info.row.original ? info.row.original.category : 'Default category'}</Badge></div>),
        size: 80,
        enableSorting: true,
        sortingFn: alphanumericSort,
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
                        <Badge variant="outline"  onClick={() => onSelectKeyword(tag.trim())}>{tag.trim()}</Badge> // Render each tag within a Badge
                    )) : null} 
                </div>
            );
        },
        enableSorting: true,
        sortingFn: alphanumericSort,
    }),    
    columnHelper.accessor('city', {
        header: 'City',
        cell: info => (<div className="city text-sm"><a onClick={() => onSelectKeyword(info.row.original.city)}>{info.row.original.city}</a></div>),
        enableSorting: true,
        sortingFn: alphanumericSort,
        size: 60,
    }),
    columnHelper.accessor('country', {
        id: 'country',
        header: 'Country',
        cell: info => (<div className="country text-sm"><a onClick={() => onSelectKeyword(info.row.original.country)}>{info.row.original.country}</a></div>),
        enableSorting: true,
        sortingFn: alphanumericSort,
        size: 60,
    }),
    columnHelper.accessor('continent', {
        header: 'Continent',
        cell: info => (<div className="continent text-sm"><a onClick={() => onSelectKeyword(info.row.original.continent)}>{info.row.original.continent}</a></div>),
        enableSorting: true,
        sortingFn: alphanumericSort,
        size: 60,
    }),
    //     columnHelper.accessor('description', {
    //     id: 'description',
    //     header: 'Description',
    //     cell: info => (<div className="description text-xs">{info.row.original.description}</div>),
    //     size: 300,
    // }),


];
}

export function TableJson({ data, anchor, onSelectKeyword }) {
    const columns = useMemo(() => getColumns(onSelectKeyword), [onSelectKeyword]);
    const allLinks = useMemo(() => data, [data]);
    const [sorting, setSorting] = useState<SortingState>([]);


    const table = useReactTable({
        data: allLinks,
        columns,
        // defaultColumn: {size: 50, minSize: 50, maxSize: 600,},
        // initialState: {
        //     columnPinning: {
        //       left: ['title'],
        //       right: [],
        //     },
        // },
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        enableColumnResizing: true,
        columnResizeMode: 'onChange',
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <div className="table-container">
            <table>

                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th 
                                    key={header.id} 
                                    onClick={header.column.getToggleSortingHandler()} 
                                    className={`th-${header.id}`} style={{ width: `${header.getSize()}px` }}>
                                    
                                    <div className='flex justify-center'>
                                        <div>{flexRender(header.column.columnDef.header, header.getContext())}</div>
                                        <div className="sorting-svg">
                                            {header.column.getIsSorted() ? (header.column.getIsSorted() === 'desc' ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M12 6l-4 4h8l-4-4z"/>
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M12 18l4-4H8l4 4z"/>
                                                </svg>
                                            )) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M12 6l-4 4h8l-4-4zM12 18l4-4H8l4 4z"/>
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div className="table-resize"
                                        onMouseDown={header.getResizeHandler()}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-grip-vertical h-2.5 w-2.5"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>    
                                    </div>
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
