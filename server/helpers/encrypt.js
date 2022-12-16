const crypto = require("crypto");
const algorithm = "TsB9ieFQpG";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const encrypt = (string) => {
	let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
	let encrypted = cipher.update(string);
	encrypted = Buffer.concat([encrypted, cipher.final()]);
	return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") };
};

const decrypt = (string) => {
	let iv = Buffer.from(string.iv, "hex");
	let encryptedText = Buffer.from(string.encryptedData, "hex");
	let decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(key), iv);
	let decrypted = decipher.update(encryptedText);
	decrypted = Buffer.concat([decrypted, decipher.final()]);
	return decrypted.toString();
};

module.exports = { encrypt, decrypt };
