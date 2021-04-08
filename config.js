const config = {
    port: process.env.PORT,
    host: process.env.HOST,
    dbUrl: process.env.DB_URI,
    publicRoute: process.env.PUBLIC_ROUTE,
    uploadFolder: process.env.UPLOAD_FOLDER,
};

module.exports = config;
