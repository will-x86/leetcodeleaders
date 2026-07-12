export async function getDaily() {
    const response = await fetch("https://leetcode-api-pied.vercel.app/daily");
    const daily: Daily = await response.json();
    return daily;
}

export interface Daily {
    date: string;
    link: string;
    question: Question;
}
export interface Question {
    questionId: string;
    questionFrontendId: string;
    title: string;
    titleSlug: string;
    translatedTitle: any;
    difficulty: string;
    acRate: number;
    topicTags: TopicTag[];
    content: string;
}

export interface TopicTag {
    name: string;
    slug: string;
    nameTranslated: any;
}

export async function getRandom() {
    const response = await fetch("https://leetcode-api-pied.vercel.app/random");
    const random: Random = await response.json();
    return random;
}

export interface Random {
    id: string;
    frontend_id: string;
    title: string;
    title_slug: string;
    difficulty: string;
    url: string;
}
