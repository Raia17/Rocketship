const supabase = require("../config/database");
const genres = supabase.from("genres");

class Genre {
	name;

	constructor(name) {
		this.name = name;
	}

	async addGenre() {
		const { count, error } = await genres.insert({ name: this.name });
		return { count, error };
	}

	static async removeGenre(genreId) {
		const { count, error } = await genres.delete().eq("id", genreId);
		return { count, error };
	}

	async updateGenre(genreId) {
		const { data, error } = await genres
			.update({ name: this.name })
			.eq("id", genreId);
		return { data, error };
	}
}

module.exports = Genre
