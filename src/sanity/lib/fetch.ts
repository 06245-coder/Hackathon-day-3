import { create } from "domain";
import { apiVersion, dataset } from "../env";
import { createClient } from "next-sanity";

const client = createClient({
    projectId: "dl9xm9k6",
    dataset: "production",
    useCdn:true,
    apiVersion:"2023-10-10"
})
export async function sanityFetch({ query, params }: { query: string; params?: any }) {
    return await client.fetch(query, params);
}
  
