'use client';

import * as React from 'react';
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import Image from 'next/image';

const data: Payment[] = [
    {
        id: 'm5gr84i9',
        Ziema: 316,
        Razotajs: 'success',
        Vasara: 'ken99@yahoo.com',
    },
    {
        id: '3u1reuv4',
        Ziema: 242,
        Razotajs: 'success',
        Vasara: 'Abe45@gmail.com',
    },
    {
        id: 'derv1ws0',
        Ziema: 837,
        Razotajs: 'processing',
        Vasara: 'Monserrat44@gmail.com',
    },
    {
        id: '5kma53ae',
        Ziema: 874,
        Razotajs: 'success',
        Vasara: 'Silas22@gmail.com',
    },
    {
        id: 'bhqecj4p',
        Ziema: 721,
        Razotajs: 'failed',
        Vasara: 'carmella@hotmail.com',
    },
    {
        id: 'm5gr84i9',
        Ziema: 316,
        Razotajs: 'success',
        Vasara: 'ken99@yahoo.com',
    },
    {
        id: '3u1reuv4',
        Ziema: 242,
        Razotajs: 'success',
        Vasara: 'Abe45@gmail.com',
    },
    {
        id: 'derv1ws0',
        Ziema: 837,
        Razotajs: 'processing',
        Vasara: 'Monserrat44@gmail.com',
    },
    {
        id: '5kma53ae',
        Ziema: 874,
        Razotajs: 'success',
        Vasara: 'Silas22@gmail.com',
    },
    {
        id: 'bhqecj4p',
        Ziema: 721,
        Razotajs: 'failed',
        Vasara: 'carmella@hotmail.com',
    },
];

export type Payment = {
    id: string;
    Ziema: number;
    Razotajs: 'pending' | 'processing' | 'success' | 'failed';
    Vasara: string;
};

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: 'Razotajs',
        header: 'Razotajs',
        cell: ({ row }) => <div className="capitalize">{row.getValue('Razotajs')}</div>,
    },
    {
        accessorKey: 'Vasara',
        header: ({ column }) => {
            return (
                <Button
                    className="gap-2"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    <Image src={'/sun.svg'} width={24} height={24} alt="sun" /> Vasara
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: 'Ziema',
        header: () => (
            <div className="flex items-center gap-2">
                <Image src={'/snow.svg'} width={24} height={24} alt="snow" />
                Ziema
            </div>
        ),
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue('Ziema'));

            return <div className="ml-8 font-medium">{amount}</div>;
        },
    },
];

export function CarTable() {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    return (
        <div className="w-full mb-5">
            <div className="flex items-center py-4"></div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef.header,
                                                      header.getContext(),
                                                  )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && 'selected'}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
