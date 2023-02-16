const questionSymbolText = "Q: ";
const answerSymbolText = "A: ";

const faqsContainer = document.getElementsByClassName('faqsContainer')[0];
faqs.forEach(populateFAQs);

function populateFAQs(value, index, array) {
    let faq = document.createElement('div');
    let questionSymbol = document.createElement('div');
    let question = document.createElement('div');
    let spacer = document.createElement('div');
    let answerSymbol = document.createElement('div');
    let answer = document.createElement('div');
    
    
    faq.classList.add("faq");
    questionSymbol.classList.add("questionSymbol");
    question.classList.add("question");
    spacer.classList.add("spacer");
    answerSymbol.classList.add("answerSymbol");
    answer.classList.add("answer");
    
    
    questionSymbol.appendChild(document.createTextNode(questionSymbolText));
    question.appendChild(document.createTextNode(value["question"]));
    answerSymbol.appendChild(document.createTextNode(answerSymbolText));
    answer.appendChild(document.createTextNode(value["answer"]));
    
    faq.appendChild(questionSymbol);
    faq.appendChild(question);
    faq.appendChild(spacer);
    faq.appendChild(answerSymbol);
    faq.appendChild(answer);
    

    faqsContainer.appendChild(faq);
}