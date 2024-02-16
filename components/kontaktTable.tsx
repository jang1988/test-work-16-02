import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { useEffect, useState } from 'react';

interface Invoice {
    id: number;
    name: string;
    phone: string;
}

export function KontaktTable() {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setInvoices(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Ошибка при получении данных:', error);
                setLoading(false);
            });
    }, []);

    return (
        <Table>
            <TableBody>
                {loading ? (
                    <>
                        <TableRow>
                            <TableCell>Loading...</TableCell>
                            <TableCell>Loading...</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Loading...</TableCell>
                            <TableCell>Loading...</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Loading...</TableCell>
                            <TableCell>Loading...</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Loading...</TableCell>
                            <TableCell>Loading...</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Loading...</TableCell>
                            <TableCell>Loading...</TableCell>
                        </TableRow>
                    </>
                ) : (
                    invoices.map((invoice) => (
                        <TableRow key={invoice.id}>
                            <TableCell className="font-medium">{invoice.name}</TableCell>
                            <TableCell>{invoice.phone}</TableCell>
                        </TableRow>
                    ))
                )}
            </TableBody>
        </Table>
    );
}
