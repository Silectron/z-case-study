"use client";

import DonationsTable from "@/components/DonationsTable";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
    return (
        <NextUIProvider>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <DonationsTable />
            </main>
        </NextUIProvider>
    );
}
