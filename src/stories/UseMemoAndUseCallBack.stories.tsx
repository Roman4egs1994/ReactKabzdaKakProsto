import React, {ChangeEvent, useCallback, useMemo, useState} from "react";


export default {
    title: "useMemoAndUseCallBack",
}


export const DifficultCountingExample = () => {


    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }


    const setAHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setA(Number(e.currentTarget.value))
    }
    const setBHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setB(+e.currentTarget.value)
    }

    return (
        <>
            <input value={a} onChange={setAHandler}/>
            <input value={b} onChange={setBHandler}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}


//useMemo



export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem", "Vlada"])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf("a") > -1);
        return newArray
    }, [users])

    return (

        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS-SECRET')
    return (
        <div>
            {
                props.users.map((u, i) => <div key={i}>{u}</div>)
            }
        </div>
    )
}

const Users = React.memo(UsersSecret)




//UseCallBackMemo
export const LikeUseCallbackMemo = () => {
    console.log('LikeUseCallbackMemo')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"])



    //Функция для UseMemo
    const addBook = () => {
        console.log('book')
        const newUsers = [...books, 'Sveta' + new Date().getTime()]
        setBooks(newUsers)
    }


    //Пример из 2 функций
    const memoizedAddBook = useMemo(()=> {
        return addBook
    }, [books]) //Запомни мне функцию и перерисуй её только тогда, когда в ней будут изменения


    //Пример вложенной функции в UseMemo
    const memoizedAddBook1 = useMemo(()=> {
        return ()=> {
            console.log('book')
            const newUsers = [...books, 'Sveta' + new Date().getTime()]
            setBooks(newUsers)
        }
    }, [books])


    //UseCallBack
    const memoizedAddBook2 = useCallback(()=> {
            console.log('book')
            const newUsers = [...books, 'Sveta' + new Date().getTime()]
            setBooks(newUsers)
    }, [books])


    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Book addBook={memoizedAddBook}/>
        </>
    )
}


type BooksSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('booksSecret')
    return (
        <div>
            <button onClick={props.addBook}>add user</button>
        </div>
    )
}
const Book = React.memo(BooksSecret)