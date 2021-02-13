export default class InstService {
    
    _apiBase = 'http://localhost:3000';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }

    async getPostItems() {
        return await this.getResource(`/post/`);
    }

    async getCommentItems() {
        return await this.getResource(`/comment/`);
    }

    async setComment(text, id) {
        const number = await this.getCommentNumber();
        const newOrder = {
            id: number,
            comment: text,
            idPost: id
        }
        const response = await fetch(`${this._apiBase}/comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newOrder)
        });
        if (!response.ok){
            throw new Error('json error'); 
        }
    }

    async getCommentNumber() {
        const res = await this.getResource('/comment/');
        const commentNumber = res.length + 1;

        return commentNumber;
    }
}