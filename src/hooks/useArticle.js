import { useState, useEffect } from 'react';

import articleService from '../services/article';

// Article の state と更新ロジックを持つフック
export default function useArticle() {
    // article の state と articles を更新する関数
    const [articles, setArticles] = useState([]);

    // このカスタムフックを利用しているコンポーネントがマウントされたら Article を取得する。
    useEffect(() => {
        articleService.getAll().then(articles => {
            console.log(articles)
            setArticles(articles);
        });
    }, []);

    return { articles };
}