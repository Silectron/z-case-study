"use client";

import { getDonations } from "@/api/donation";
import { useState, useEffect } from "react";

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
        <table className="table-auto">
            <thead>
                <tr>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">First Name</th>
                    <th className="px-4 py-2">Last Name</th>
                    <th className="px-4 py-2">Amount</th>
                </tr>
            </thead>
            <tbody>
                {donations.map((transaction) => (
                    <tr key={transaction.id}>
                        <td className="border px-4 py-2">
                            {transaction.donation.createdAtUtc}
                        </td>
                        <td className="border px-4 py-2">
                            {transaction.donation.firstName}
                        </td>
                        <td className="border px-4 py-2">
                            {transaction.donation.lastName}
                        </td>
                        <td className="border px-4 py-2">
                            {transaction.donation.amount}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
