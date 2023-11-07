import { Link } from 'react-router-dom'
import './languageLink.css';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import PropTypes from 'prop-types';
import {
    TbBrandJavascript,
    TbBrandPython,
    TbBrandTypescript,
    TbBrandPhp,
    TbBrandHtml5,
    TbBrandCss3,
    TbSql,

} from 'react-icons/tb'
import { FaJava, FaRust } from 'react-icons/fa'
import { SiCplusplus, SiCsharp } from 'react-icons/si'

export const languageArray = [
    {
        "language": "JavaScript",
        "icon": <TbBrandJavascript />
    },
    {
        "language": "Python",
        "icon": <TbBrandPython />
    },
    {
        "language": "Java",
        "icon": <FaJava />
    },
    {
        "language": "C++",
        "icon": <SiCplusplus />
    },
    {
        "language": "Rust",
        "icon": <FaRust />
    },
    {
        "language": "Sql",
        "icon": <TbSql />
    },
    {
        "language": "PHP",
        "icon": <TbBrandPhp />
    },
    {
        "language": "HTML-CSS",
        "icon": <TbBrandHtml5 />,
        "icon1": <TbBrandCss3 />
    },
    {
        "language": "Typescript",
        "icon": <TbBrandTypescript />
    },
    {
        "language": "C#",
        "icon": <SiCsharp />
    }
]

function LanguageLink({ toggle, setToggle }) {
    return (
        <section className='languageLink'>
            {languageArray.map((language) => (
                <Link key={language.language} to={`/${language.language.toLowerCase()}`} >
                    <span className='icon'>
                        {language.icon}
                        {language.icon1 && language.icon1}
                    </span>
                    {!toggle && language.language}
                </Link>
            ))}
            <div className='languageLink-toggle' onClick={() => setToggle(!toggle)}>
                {!toggle ? <MdArrowBackIosNew /> : <MdArrowForwardIos />}
            </div>
        </section>
    )
}
LanguageLink.propTypes = {
    toggle: PropTypes.bool,
    setToggle: PropTypes.func
}
export default LanguageLink