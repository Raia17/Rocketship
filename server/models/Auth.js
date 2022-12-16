const supabase = require("../config/database");

async function signInWithEmail(email, password) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email: email,
		password: password,
	});
	return { data, error };
}

async function signOutSupabase() {
	const { error } = await supabase.auth.signOut();
}

async function signInWithProvider(provider) {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
    })
    return { user, session, error };
}


module.exports = { signInWithEmail, signInWithProvider, signOutSupabase };
