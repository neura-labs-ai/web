import { SearchResults, SearchFilterOptions, SearchLanguages, SearchIndexes, SearchPaths, SearchTags } from "@/types/search-types";
import {
	prop,
	getModelForClass,
	ModelOptions,
	ReturnModelType,
} from "@typegoose/typegoose";

@ModelOptions({
	schemaOptions: {
		collection: "search_library",
		timestamps: true,
		autoIndex: true,
	},
})
class Library {
	@prop({ type: String, unique: true })
	public name?: string;

	@prop({ type: String })
	public description?: string;

	@prop({ type: String })
	public language?: string;

	@prop({ type: [String], default: [] })
	public tags?: string[];

	@prop({ type: String, default: null })
	public icon?: string;

	@prop({ type: Number, default: 0 })
	public stars?: number;

	@prop()
	/** A Reference to the Sub-document for the U */
	public comments?: IComment[];

	/**
	 * Find a library by name.
	 * @param name The name of the library.
	 * @returns The library.
	 */
	public static async searchByName(
		this: ReturnModelType<typeof Library>,
		name: string
	): Promise<SearchResults | null> {
		const data = await this.findOne({ name }).populate("comments").exec();

		if (!data) return null;

		return {
			name: data.name,
			description: data.description,
			language: data.language,
			tags: data.tags ?? [],
			icon: data.icon,
			stars: data.stars,
			comments: data.comments ?? [],
		};
	}

	/**
	 * Finds all the libraries that have the same tags and returns
	 * @param list of tags to search for.
	 * @param filters The filters to apply to the search.
	 * @returns An array of libraries with these tags or nothing if none are found.
	 */
	public static async searchByTags(
		this: ReturnModelType<typeof Library>,
		list: string[] | SearchTags[],
		filters?: SearchFilterOptions
	): Promise<SearchResults[]> {
		// Find all the libraries that have the same tags.
		let data = await this.find({ tags: { $in: list } })
			.populate("comments")
			.exec();

		return await this.computeRawLibraryData(data, filters);
	}

	/**
	 * Search the library by a language.
	 * @param language The language to search for.
	 * @param filters The filters to apply to the search.
	 * @returns
	 */
	public static async searchByLanguage(
		this: ReturnModelType<typeof Library>,
		language: SearchLanguages,
		filters?: SearchFilterOptions
	): Promise<SearchResults[]> {
		// Find all the libraries that have the same tags.
		let data = await this.find({ language }).populate("comments").exec();

		return await this.computeRawLibraryData(data, filters);
	}

	/**
	 * Search the library by a query.
	 * @see https://www.mongodb.com/docs/atlas/atlas-search/text/#text
	 * @param i The index to search.
	 * @param q The query to search for.
	 * @param p The path (document field) to search. Note this will also only return the fields that are in the path. If you want to return all fields, use "*".
	 * @param f The filters to apply to the search.
	 */
	public static async searchByQuery(
		this: ReturnModelType<typeof Library>,
		i: SearchIndexes,
		q: string | string[],
		p: SearchPaths,
		f?: SearchFilterOptions
	): Promise<SearchResults[]> {
		// If the path is not an array, then we need to set it to the wildcard.
		// see https://www.mongodb.com/docs/atlas/atlas-search/path-construction/#std-label-ref-path for more info.
		const pathValue = Array.isArray(p) ? p : { wildcard: "*" };
		const scoreValue= f?.score ? { score: { $meta: "searchScore" } } : {};
		const limitValue = f?.limits?.amount ?? 15;

		const data = await this.aggregate<Library>([
			{
				$search: {
					index: i,
					text: {
						query: q,
						path: pathValue,
					},
				},
			},
			{
				$project: scoreValue,
			},
			{
				$limit: limitValue,
			},
		]);

		return await this.computeRawLibraryData(data, f);
	}

	/**
	 * Process the data and return the raw data object with any needed filters in place.
	 * @param data
	 * @returns
	 */
	private static async computeRawLibraryData(
		data: Library[],
		filter?: SearchFilterOptions
	) {
		let result: SearchResults[] = [];
		// Loop through the data and filter out any deleted comments.
		for (let i = 0; i < data.length; i++) {
			let library = data[i];

			// If the library is not popular and has less than 100 stars then skip it.
			if (filter?.popular && library.stars! < filter?.popular.amount) continue;

			let comments = await this.filterComments(filter, library.comments);

			result.push({
				name: library.name,
				description: library.description,
				language: library.language,
				tags: library.tags ?? [],
				icon: library.icon,
				stars: library.stars,
				comments: comments ?? [],
			});
		}

		return result;
	}

	/**
	 * Filter out any comments we don't want to show.
	 * @param comments
	 * @param filter
	 * @returns
	 */
	private static async filterComments(
		filter?: SearchFilterOptions,
		comments?: IComment[]
	): Promise<IComment[]> {
		if (!filter) return [];
		if (!comments) return [];

		let result: IComment[] = [];

		for (let i = 0; i < comments.length; i++) {
			let comment = comments[i];

			if (filter.comments?.isDeleted && comment.isDeleted) continue;
			if (filter.comments?.isFlagged && comment.isFlagged) continue;
			if (filter.comments?.isSpam && comment.isSpam) continue;

			result.push(comment);
		}

		return result;
	}
}

/** Comments Sub-document for the library search engine. */
export class IComment {
	@prop({ type: String })
	public id?: string;

	@prop({ type: String })
	public authorId?: string;

	@prop({ type: String })
	public content?: string;

	@prop({ type: Date })
	public createdAt?: Date;

	@prop({ type: Date })
	public updatedAt?: Date;

	@prop({ type: [Comment] })
	public replies?: Comment[];

	@prop({ type: Number, default: 0 })
	public upvotes?: number;

	@prop({ type: Number, default: 0 })
	public downvotes?: number;

	@prop({ type: Number, default: 0 })
	public totalVotes?: number;

	@prop({ type: Boolean, default: false })
	public isDeleted?: boolean;

	@prop({ type: Boolean, default: false })
	public isEdited?: boolean;

	@prop({ type: Boolean, default: false })
	public isSpam?: boolean;

	@prop({ type: Boolean, default: false })
	public isFlagged?: boolean;
}

export const LibraryModel = getModelForClass(Library);
