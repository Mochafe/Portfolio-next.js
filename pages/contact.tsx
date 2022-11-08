import { useState } from "react";

export default function Contact() {
    const [mail, setMail] = useState();
    const [object, setObject] = useState();
    const [message, setMessage] = useState();


    function handleMail(event: any) {
        setMail(event.target.value);
    }

    function handleObject(event: any) {
        setObject(event.target.value);
    }

    function handleMessage(event: any) {
        setMessage(event.target.value);
    }

    function handleSubmit(event: any) {
        event.preventDefault();

        window.open(`mailto:florianpasquett@gmail.com?subject=${object}&body=${message}`, "_self");
    }

    return (
        <main className="mx-auto w-[30%] pt-3 mt-3 border rounded-xl flex flex-col items-center">
            <h1 className="font-bold text-center text-2xl border-b w-full mb-3">Contact</h1>

            <div className="flex flex-col">
                <label>E-mail</label>
                <input value={mail} onChange={handleMail} className="border focus:rounded-2xl focus:border-2 focus:border-blue-500 outline-none px-3 w-60 h-9 transition-all duration-300" placeholder="Example@example.com" type="email" />
            </div>


            <div className="flex flex-col mt-5">
                <label>Sujet</label>
                <input value={object} onChange={handleObject} className="border-t border-x focus:rounded-t-2xl focus:border-2 focus:border-blue-500 outline-none px-3 w-60 h-9 transition-all duration-300" type="text" />
                <textarea value={message} onChange={handleMessage} name="message" id="message" className="p-3 border outline-none focus:rounded-b-2xl focus:border-blue-500 focus:border-2 resize-none mb-5 transition-all duration-300"></textarea>
            </div>

            <input type="submit" onClick={handleSubmit} className="bg-blue-400 border border-blue-500 hover:bg-blue-500 transition-all duration-300 p-2 text-white mb-4 rounded-xl hover:cursor-pointer" value="Envoyer" />

        </main>
    )
}