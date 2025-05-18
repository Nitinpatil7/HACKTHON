import { createContext , useState } from "react";

export  const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [subject, setsubject] = useState(null);
    const [dificullty, setdificullty] = useState(null);
    const [questions, setquestions] = useState([])
    const [currentquestion, setcurrentquestion] = useState(0)
    const [score, setscore] = useState(0);
    const [paymentdone , setpaymentdone]=useState(false);
    const [user, setuser] = useState({ name: "", email: "" });

    return(
        <QuizContext.Provider value={{
            subject, setsubject, 
            dificullty, setdificullty, questions, setquestions, currentquestion, setcurrentquestion, score, setscore , paymentdone , setpaymentdone , user , setuser}}>
            {children}
        </QuizContext.Provider>
    )
}