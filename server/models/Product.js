const crypto = require('crypto');

const supabase = require("../config/database");
const products = supabase.from("products");

class Product {
	product;

	constructor(product) {
		this.product = product;
	}

	async addProduct() {
		const { count, error } = await products.insert(this.product);
		return { count, error };
	}

	static async removeProduct(productId) {
		const { count, error } = await products.delete().eq("id", productId);
		return { count, error };
	}

	async updateProduct(productId) {
		const { data, error } = await products
			.update(this.product)
			.eq("id", productId);
		return { data, error };
	}

	static async getProduct(productId) {
		const { data, error } = await products.select().eq("id", productId);
		return { data, error };
	}

	static async getProducts() {
		const { data, error } = await products.select();
		return { data, error };
	}

    // TODO: Create function to handle files
    async addImage(imageFile) {
        
        try {
            if (!imageFile) throw new Error('Image file not found');
            let image = imageFile.image;

            let filePath = '../uploads/products/' + this.product.slug + '-' + crypto.randomUUID()
            image.mv(filePath);
            this.image = filePath;

            return true;
        } catch (error) {
            throw error;
        }
        
    }

    async updateImage(imageFile) {
        try {
            if (!imageFile) throw new Error('Image file not found');
            let image = imageFile.image;

            let filePath = '../uploads/products/' + this.product.slug + '-' + crypto.randomUUID()
            image.mv(filePath);
            this.image = filePath;
            const {data, error} = await this.updateProduct(this.product)
            return {data, error};
        } catch (error) {
            throw error;
        }

    }
}

module.exports = Product;
