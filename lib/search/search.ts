import * as Commerce from "commerce-kit";
import { unstable_cache } from "next/cache";
import { simpleSearch } from "./simplesearch";

type CB = (...query:string[]|any[])=>(Promise<Commerce.MappedProduct[]|void|undefined>)
export const searchProducts = unstable_cache<CB>(
	async (query: string,...args:string[]|any[]) => {
		const products = await Commerce.productBrowse({ first: 100 });
		const searchResults = simpleSearch(products, query);
		return searchResults.map((sr) => products.find((p) => p.id === sr.id)).filter(Boolean);
	},
	["search", "products"],
	{
		tags: ["search", "products"],
	},
);
