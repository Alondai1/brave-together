import React from 'react'
import './SelectedQuotes.scss'
import ExitIcon from './exit-icon.png'

const mockData = [
    { txt: '"לי היה כדאי להישאר בחיים כשאר נולדו הבנים אמרתי לעצמי שאולי בכל זאת היה כדאי להישאר בחיים.\n הקמתי משפחה לתפארת - רק לא לי אלא לעם ישראל"' },
     {txt: '"באושוויץ כתבתי על פיסות נייר של שקי מלט. אך את אותן רשימות לא הצלחתי לשמור עד יום השחרור. \n בעצם - לא רשמתי אותן במחשבה לנצלן באחד הימים - אלא פשוט, באופן כלשהו בן עזרו לי להמשיך לחיות"'} ,
    {}
]

export default function SelectedQuotes({ quotes }) {

    const onExit = (e) =>{
        console.log('exit');
    }

    const handleClick = (e) =>{
        console.log(e);
    }

    return (
        <div className='selected-quotes'>
            <div onClick={onExit} className='icon-container'>
                <img src={ExitIcon} />
            </div>
            <section className='content'>
                <h1>ציטוטים נבחרים</h1>
                <div className='quotes-container'>
                    {
                        mockData.map(currQuote => {
                            return <Quote>{currQuote.txt}</Quote>
                        })
                    }
                </div>
                <div className='or-section'><span>או</span></div>
                <button onClick={handleClick}>סימון חופשי</button>
            </section>
        </div>
    )
}


function Quote({ children }) {
    return (
        <div className='quote'>
            <p>{children}</p>
        </div>
    )
}




