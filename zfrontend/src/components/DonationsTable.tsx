"use client";

import { getDonations } from "@/api/donation";
import { useState, useEffect } from "react";
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
} from "@nextui-org/react";

const columns = [
    { key: "createdAtUtc", label: "Date" },
    { key: "firstName", label: "First Name" },
    { key: "lastName", label: "Last Name" },
    { key: "amount", label: "Amount" },
];

export default function DonationsTable() {
    const [donations, setDonations] = useState<TransactionWithDonationObject[]>(
        []
    );

    useEffect(() => {
        getDonations()
            .then((donations) => {
                setDonations(donations);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <Table aria-label="donation table">
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn key={column.key}>{column.label}</TableColumn>
                )}
            </TableHeader>
            <TableBody items={donations} emptyContent={"No rows to display."}>
                {(item) => (
                    <TableRow key={item.id} className="text-black">
                        <TableCell>
                            {new Date(
                                item.donation.createdAtUtc
                            ).toLocaleDateString()}
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
    );
}
