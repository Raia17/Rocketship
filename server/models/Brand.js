const crypto = require('crypto');

const supabase = require("../config/database");
const brands = supabase.from("brands");

class Brand {
	brand;

	constructor(brand) {
		this.brand = brand;
	}

	async addBrand() {
		const { count, error } = await brands.insert(this.brand);
		return { count, error };
	}

	static async removeBrand(brandId) {
		const { count, error } = await brands.delete().eq("id", brandId);
		return { count, error };
	}

	async updateBrand(brandId) {
		const { data, error } = await brands
			.update(this.brand)
			.eq("id", brandId);
		return { data, error };
	}

	static async getBrand(brandId) {
		const { data, error } = await brands.select().eq("id", brandId);
		return { data, error };
	}

	static async getBrands() {
		const { data, error } = await brands.select();
		return { data, error };
	}

    // TODO: Create function to handle files
    async addImage(imageFile) {
        
        try {
            if (!imageFile) throw new Error('Image file not found');
            let image = imageFile.image;

            let filePath = '../uploads/brands/' + this.brand.slug + '-' + crypto.randomUUID()
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

            let filePath = '../uploads/brands/' + this.brand.slug + '-' + crypto.randomUUID()
            image.mv(filePath);
            this.image = filePath;
            const {data, error} = await this.updateBrand(this.brand)
            return {data, error};
        } catch (error) {
            throw error;
        }

    }
}

module.exports = Brand;
