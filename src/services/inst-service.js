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

    async setComment(text) {
        const number = await this.getCommentNumber();
        const newOrder = {
            id: number,
            comment: text
        }
        const response = await fetch(`${this._apiBase}/post`, {
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
        const res = await this.getResource('/post/');
        const commentNumber = res.length + 1;

        return commentNumber;
    }
}