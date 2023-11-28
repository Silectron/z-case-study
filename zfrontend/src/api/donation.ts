import { BasePathV1 } from "./base";

export async function getDonations(): Promise<TransactionWithDonationObject[]> {
    const headers: Headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "application/json");

    const request: Request = new Request(BasePathV1 + "/donations", {
        method: "GET",
        headers,
    });

    const response = await fetch(request);
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const json = await response.json();
    if (json.errors) {
        throw new Error(json.errors[0].message);
    }

    return json;
}
