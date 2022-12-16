const supabase = require("../config/database");
const categories = supabase.from("categories");

class Category {
	name;

	constructor(name) {
		this.name = name;
	}

	async addCategory() {
		const { count, error } = await categories.insert({ name: this.name });
		return { count, error };
	}

	static async removeCategory(categoryId) {
		const { count, error } = await categories.delete().eq("id", categoryId);
		return { count, error };
	}

	async updateCategory(categoryId) {
		const { data, error } = await categories
			.update({ name: this.name })
			.eq("id", categoryId);
		return { data, error };
	}
}

module.exports = Category
