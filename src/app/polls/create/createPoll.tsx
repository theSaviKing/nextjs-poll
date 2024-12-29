"use client";

import { MouseEvent as RMouseEvent, useState } from "react";

export default function CreatePoll() {
    const [state, setState] = useState({
        choices: false,
        choiceKey: 0,
        choiceList: [] as { id: number; data: string }[],
    });
    function Choice(props: { data: string; id: number }) {
        function handleClick() {
            setState({
                ...state,
                choiceList: state.choiceList.filter(
                    (choice) => choice.id != props.id
                ),
            });
        }
        return (
            <li
                className="btn btn-primary btn-outline hover:btn-error group"
                onClick={handleClick}
                key={props.id}
            >
                {props.data} -- {props.id}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="hidden w-5 h-5 group-hover:inline-block"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.22 3.22A.75.75 0 017.75 3h9A2.25 2.25 0 0119 5.25v9.5A2.25 2.25 0 0116.75 17h-9a.75.75 0 01-.53-.22L.97 10.53a.75.75 0 010-1.06l6.25-6.25zm3.06 4a.75.75 0 10-1.06 1.06L10.94 10l-1.72 1.72a.75.75 0 101.06 1.06L12 11.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L12 8.94l-1.72-1.72z"
                        clipRule="evenodd"
                    />
                </svg>
            </li>
        );
    }
    function checkInput() {
        setState({
            ...state,
            choices:
                document.getElementsByTagName("select")[0].value == "choices",
        });
    }
    function checkSubmit(e: RMouseEvent<HTMLButtonElement, MouseEvent>) {
        const choiceInput = document.getElementById(
            "choice"
        ) as HTMLInputElement;
        const { value } = choiceInput;
        choiceInput.value = "";
        setState({
            ...state,
            choiceList: [
                ...state.choiceList,
                { id: state.choiceKey, data: value },
            ],
            choiceKey: state.choiceKey + 1,
        });
        console.log(state.choiceList);
    }
    return (
        <>
            <header className="flex flex-col gap-4">
                <h2 className="uppercase text-secondary font-bold text-2xl">
                    Create a poll!
                </h2>
                <p className="text-4xl font-light italic">Ask a question...</p>
            </header>
            <form
                action="./submit"
                method="post"
                className="rounded-lg p-8 border border-primary form-control space-y-4 w-3/5"
            >
                <label htmlFor="question">
                    <span>Question</span>
                </label>
                <input
                    type="text"
                    className="input input-primary"
                    placeholder="What's your favorite color?"
                    required
                    id="question"
                    name="question"
                />
                <label htmlFor="type">
                    <span>Question type</span>
                </label>
                <select
                    name="type"
                    id="type"
                    className="select select-primary"
                    required
                    onInput={checkInput}
                    defaultValue="pick"
                >
                    <option disabled value="pick">
                        Pick a question type
                    </option>
                    <option value="short_text">Short answer</option>
                    <option value="boolean">Yes or No</option>
                    <option value="choices">Options</option>
                </select>
                <div
                    id="choices"
                    // className={this.state.choices == false ? "hidden" : ""}
                    className="p-4 rounded border border-primary/50 flex flex-col gap-4"
                >
                    <label>
                        <span>Question choices</span>
                    </label>
                    <input required className="hidden" />
                    <ul id="questionChoices" className="flex flex-wrap gap-2">
                        {state.choiceList.map((choice) => (
                            <Choice data={choice.data} id={choice.id} />
                        ))}
                        <button
                            type="button"
                            id="addChoiceBtn"
                            className="btn btn-primary text-2xl font-black btn-circle"
                            onClick={() => {
                                // @ts-ignore
                                newChoice.showModal();
                            }}
                        >
                            +
                        </button>
                    </ul>
                </div>
                <button type="submit" className="btn btn-primary">
                    Create this poll
                </button>
            </form>
            <dialog id="newChoice" className="modal backdrop-brightness-75">
                <form method="dialog" className="modal-box flex flex-col gap-4">
                    <h3 className="text-2xl text-accent uppercase font-bold">
                        Add question choice
                    </h3>
                    <input
                        type="text"
                        className="input input-secondary"
                        placeholder="Another option..."
                        id="choice"
                        name="choice"
                    />
                    <div className="modal-action">
                        <button
                            className="btn btn-secondary btn-outline"
                            id="closeBtn"
                        >
                            Close
                        </button>
                        <button
                            className="btn btn-accent"
                            onClick={(e) => checkSubmit(e)}
                        >
                            Add choice
                        </button>
                    </div>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button></button>
                </form>
            </dialog>
        </>
    );
}
