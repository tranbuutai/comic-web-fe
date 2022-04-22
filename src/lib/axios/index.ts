import queryString from "query-string";

import { User } from "@/models/user";
import { ComicType, FilterParams } from "@/models/index";
import axios from "./config";

export const apiClient = {
    async homePage<T>(): Promise<T> {
        return await axios.get("/home");
    },

    async getTitles(): Promise<ComicType[]> {
        return await axios.get("/title");
    },

    async getTitleById<T>(id: string | string[]): Promise<T> {
        return await axios.get(`/title/${id}`);
    },

    async getTitleByName<T>(name: string): Promise<T> {
        return await axios.get(`/search/title/${name}`);
    },

    async getTitleByAuthor<T>(authorName: string): Promise<T> {
        return await axios.get(`/search/author/${authorName}`);
    },

    async discover<T>(): Promise<T> {
        return await axios.get(`/discover`);
    },

    async discoverGetMoreComic<T>(id: string): Promise<T> {
        return await axios.get(`/discover/getMore?nextPage=${id}`);
    },

    async filter<T>(params: FilterParams): Promise<T> {
        const paramsString = queryString.stringify(params);
        return await axios.get(`/discover/filter?${paramsString}`);
    },

    async getChapterById<T>(idTitle: string, idChap: string): Promise<T> {
        return await axios.get(`/title/${idTitle}/view/${idChap}`);
    },

    async getListBookmark(userId: string): Promise<ComicType[]> {
        return await axios.get(`/user/bookmark/${userId}`);
    },

    async getUserProfile(userId: string): Promise<User> {
        return await axios.get(`/user/profile/${userId}`);
    },
};
