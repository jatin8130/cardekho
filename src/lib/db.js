const {username, password} = process.env;

export const connection = 'mongodb+srv://jatin06:'+password+'@cluster0.z5koddf.mongodb.net/project?retryWrites=true&w=majority'