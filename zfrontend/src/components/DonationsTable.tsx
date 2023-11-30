"use client";

import { Button, NextUIProvider, Pagination } from "@nextui-org/react";
import { useState, useEffect, useMemo } from "react";
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
} from "@nextui-org/react";
import { TransactionWithDonation, getAllPaginated } from "@/models/donation";
import { getFormattedDate } from "@/utils/date";
import { set } from "cypress/types/lodash";

const columns = [
    { key: "createdAtUtc", label: "Date" },
    { key: "firstName", label: "First Name" },
    { key: "lastName", label: "Last Name" },
    { key: "amount", label: "Amount" },
];

export default function DonationsTable() {
    const [donations, setDonations] = useState<TransactionWithDonation[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasNext, setHasNext] = useState(false);
    const initialPage = 1;
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const rowsPerPage = 10;

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        return donations.slice(start, end);
    }, [page, donations]);

    useEffect(() => {
        setLoading(true);
        getAllPaginated(rowsPerPage, initialPage * rowsPerPage)
            .then((res) => {
                setDonations(res.data);
                setHasNext(res.hasNext);
                setPages(Math.ceil(donations.length / rowsPerPage));
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const handleNext = () => {
        setPage(page + 1);

        getAllPaginated(rowsPerPage, page * rowsPerPage).then((res) => {
            setDonations([...donations, ...res.data]);
            setHasNext(res.hasNext);
            setPages(Math.ceil(donations.length / rowsPerPage));
            setLoading(false);
        });
    };

    return (
        <NextUIProvider>
            <Table
                aria-label="donations table"
                topContent={
                    <Button
                        color="primary"
                        onClick={handleNext}
                        isDisabled={!hasNext}
                    >
                        Next
                    </Button>
                }
                bottomContent={<>{page}</>}
            >
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn key={column.key}>
                            {column.label}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody
                    items={items}
                    emptyContent={loading ? "" : "No donations found"}
                    isLoading={loading}
                    loadingContent={"Loading..."}
                >
                    {(item) => (
                        <TableRow key={item.id} className="text-black">
                            <TableCell>
                                {getFormattedDate(item.donation.createdAtUtc)}
                            </TableCell>
                            <TableCell>{item.donation.firstName}</TableCell>
                            <TableCell>{item.donation.lastName}</TableCell>
                            <TableCell>
                                {(
                                    item.donation.amount - item.refundedAmount
                                ).toLocaleString()}
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </NextUIProvider>
    );
}
// function getAllPaginated(rowsPerPage: number, arg1: number) {
//     throw new Error("Function not implemented.");
// }
