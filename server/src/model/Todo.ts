export interface TodoSchema {
    _id: { $oid: string };
    body: string;
    created_at: number;
}
