export default {
    baseUrl(): string {
        let url = '';

        switch (process.env.NODE_ENV) {
            case 'development':
                url = `http://localhost:8000/graphql`;
                break;
            case 'production':
                url = ``;
                break;
            default:
                break;
        }

        return url;
    },
};
