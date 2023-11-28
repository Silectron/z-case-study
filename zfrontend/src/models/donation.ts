type TransactionWithDonationObject = {
    id: string;
    type: string;
    refundedAmount: number;
    donation: DonationObject;
    __typename: string;
};

type DonationObject = {
    id: string;
    firstName: string;
    lastName: string;
    createdAtUtc: number;
    amount: number;
    thankYouComment: string;
    isAnonymous: boolean;
    companyName: string;
    __typename: string;
};
