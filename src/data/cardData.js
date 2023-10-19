import jsImg from '../assets/js.avif';
import pythonImg from '../assets/python.jpg';
import javaImg from '../assets/java.jpg';
import htmlcssImg from '../assets/htmlcss.jpg';
import phpImg from '../assets/php.jpg';
import cImg from '../assets/cimg.jpg';
import sqlImg from '../assets/sql.webp';
import rustImg from '../assets/rust.webp';
import csharpImg from '../assets/csharp.webp';
import tsImg from '../assets/ts.png';



export const cardData = [
    {
        img: jsImg,
        title: 'Cours en JavaScript',
        text: 'Vous pouvez coder. Peu importe votre âge, vos connaissances antérieures ou votre origine. C&lsquo;est comme faire du vélo : il suffit de s&lsquo;entraîner. Et CodeChallenge, le sie de programmation en ligne, est votre vélo avec roues stabilisatrices. Pratiquez le codage sans pression, à votre rythme, dès les premiers cours. lancez-vous !'
    },
    {
        img: csharpImg,
        title: 'C#',
        text: 'Vous pouvez coder. Peu importe votre âge, vos connaissances antérieures ou votre origine. C&lsquo;est comme faire du vélo : il suffit de s&lsquo;entraîner. Et CodeChallenge, le sie de programmation en ligne, est votre vélo avec roues stabilisatrices. Pratiquez le codage sans pression, à votre rythme, dès les premiers cours. lancez-vous !'
    },
    {
        img: pythonImg,
        title: 'Cours en Python',
        text: 'Vous pouvez coder. Peu importe votre âge, vos connaissances antérieures ou votre origine. C&lsquo;est comme faire du vélo : il suffit de s&lsquo;entraîner. Et CodeChallenge, le sie de programmation en ligne, est votre vélo avec roues stabilisatrices. Pratiquez le codage sans pression, à votre rythme, dès les premiers cours. lancez-vous !'
    },
    {
        img: javaImg,
        title: 'La Programmation en Java',
        text: 'Vous pouvez coder. Peu importe votre âge, vos connaissances antérieures ou votre origine. C&lsquo;est comme faire du vélo : il suffit de s&lsquo;entraîner. Et CodeChallenge, le sie de programmation en ligne, est votre vélo avec roues stabilisatrices. Pratiquez le codage sans pression, à votre rythme, dès les premiers cours. lancez-vous !'
    },
    {
        img: htmlcssImg,
        title: 'Coder avec Html/Css',
        text: 'Vous pouvez coder. Peu importe votre âge, vos connaissances antérieures ou votre origine. C&lsquo;est comme faire du vélo : il suffit de s&lsquo;entraîner. Et CodeChallenge, le sie de programmation en ligne, est votre vélo avec roues stabilisatrices. Pratiquez le codage sans pression, à votre rythme, dès les premiers cours. lancez-vous !'
    },
    {
        img: phpImg,
        title: 'Cours en PHP',
        text: 'Vous pouvez coder. Peu importe votre âge, vos connaissances antérieures ou votre origine. C&lsquo;est comme faire du vélo : il suffit de s&lsquo;entraîner. Et CodeChallenge, le sie de programmation en ligne, est votre vélo avec roues stabilisatrices. Pratiquez le codage sans pression, à votre rythme, dès les premiers cours. lancez-vous !'
    },
    {
        img: sqlImg,
        title: 'Initiation à SQL',
        text: 'Vous pouvez coder. Peu importe votre âge, vos connaissances antérieures ou votre origine. C&lsquo;est comme faire du vélo : il suffit de s&lsquo;entraîner. Et CodeChallenge, le sie de programmation en ligne, est votre vélo avec roues stabilisatrices. Pratiquez le codage sans pression, à votre rythme, dès les premiers cours. lancez-vous !'
    },
    {
        img: tsImg,
        title: "C'est quoi TypeScript",
        text: 'Vous pouvez coder. Peu importe votre âge, vos connaissances antérieures ou votre origine. C&lsquo;est comme faire du vélo : il suffit de s&lsquo;entraîner. Et CodeChallenge, le sie de programmation en ligne, est votre vélo avec roues stabilisatrices. Pratiquez le codage sans pression, à votre rythme, dès les premiers cours. lancez-vous !'
    },
    {
        img: cImg,
        title: 'Quelques cours sur C++',
        text: 'Vous pouvez coder. Peu importe votre âge, vos connaissances antérieures ou votre origine. C&lsquo;est comme faire du vélo : il suffit de s&lsquo;entraîner. Et CodeChallenge, le sie de programmation en ligne, est votre vélo avec roues stabilisatrices. Pratiquez le codage sans pression, à votre rythme, dès les premiers cours. lancez-vous !'
    },
    {
        img: rustImg,
        title: 'Rust',
        text: 'Vous pouvez coder. Peu importe votre âge, vos connaissances antérieures ou votre origine. C&lsquo;est comme faire du vélo : il suffit de s&lsquo;entraîner. Et CodeChallenge, le sie de programmation en ligne, est votre vélo avec roues stabilisatrices. Pratiquez le codage sans pression, à votre rythme, dès les premiers cours. lancez-vous !'
    },
];

export const quizCardData = [
    {
        question: "Que signifie 'TSC' en TypeScript?",
        choices: [
            "TypeScript Compiler",
            "TypeScript Control",
            "TypeScript Configuration",
            "TypeScript Script"
        ],
        correctAnswer: "TypeScript Compiler"
    },
    {
        question: "En cours de Python, que signifie 'IDE' ?",
        choices: [
            "Integrated Development Environment",
            "Interactive Data Entry",
            "Informatique de Développement Éducatif",
            "Institut de Développement Électronique"
        ],
        correctAnswer: "Integrated Development Environment"
    },
    {
        question: "Quel est le résultat de 3 + '3' en JavaScript ?",
        choices: [
            "6",
            "33",
            "Erreur",
            "33 (en tant que chaîne de caractères)"
        ],
        correctAnswer: "33"
    },
    {
        question: "Quelle méthode est utilisée pour ajouter de nouveaux éléments à la fin d'un tableau en JavaScript ?",
        choices: [
            "push()",
            "append()",
            "addToEnd()",
            "insertLast()"
        ],
        correctAnswer: "push()"
    }
];