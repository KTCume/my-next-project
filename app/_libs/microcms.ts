expoet type Category = {
    name: string;
}

export type News = {
    id: string;
    title: string;
    category: {
        name: string;
    };
    publisheAt: string;
    createdAt: string;
}