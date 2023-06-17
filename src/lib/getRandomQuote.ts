import getAllQuotes from './getAllQuotes'

const prevQuoteObj = {
    prev: 1,
    setPrev: function (num: number) { this.prev = num }
}

export default async function getRandomQuote(): Promise<Quote> {

    const results = await getAllQuotes()

    let randomIndex = prevQuoteObj.prev

    while (randomIndex === prevQuoteObj.prev) {
        randomIndex = Math.floor(Math.random() * results.length)
    }

    prevQuoteObj.setPrev(randomIndex)

    return results[randomIndex]
}