import { createClient } from "next-sanity"; // Correctly import createClient

// Define the client configuration
export const client = createClient({
  projectId: "dl9xm9k6", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name
  apiVersion: "2023-10-10", // Use the correct Sanity API version
  useCdn: true, // Set to false if statically generating pages, ISR, or tag-based revalidation
});

// Define a type for the parameters object
type QueryParams = Record<string, unknown>;

// Reusable fetch function
export async function sanityFetch({ query, params }: { query: string; params?: QueryParams }) {
  return await client.fetch(query, params);
}
