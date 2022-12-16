const {
	signInWithEmail,
	signInWithProvider,
	signOutSupabase,
} = require("../models/Auth");
const { encrypt, decrypt } = require("../helpers/encrypt");

const signIn = async (req, res, next) => {
	const password = decrypt(req.body.password);

	const { data, error } = await signInWithEmail(req.body.email, password);

	if (error) {
		res.status(400).json({ error });
	}

    res.status(200).json({ message: 'You have sign in successfuly' });
};

const oAuth = async (req, res, next) => {
	const { data, error } = await signInWithProvider(req.params.provider);

	if (error) {
		res.status(400).json({ error });
	}

    res.status(200).json({ message: 'You have sign in successfuly' });
}

const signOut = async (req, res) => {
    const {  error } = await signOutSupabase();

    if (error) {
		res.status(400).json({ error });
	}

    res.status(200).json({ message: 'You have sign out successfuly' });
}

module.exports = { signIn, oAuth, signOut }