// import React, { useState } from 'react';

class NewsService {
    #baseUrl = 'http://localhost:9999/news/';

    async getNewsCards() {
        try {
            const response = await fetch(`${this.getBaseUrl()}getNewsCards`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            throw error;
        }
    }

    async addNews() {
        try {
            const response = await fetch(`${this.getBaseUrl()}addNews`, {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            throw error;
        }
    }

    getBaseUrl() {
        return this.#baseUrl;
    }
}


export default NewsService;