"use client";

import { useState } from "react";
import { Component } from "react";

function Choice(props: { choice: string }) {
    function handleClick() {}
    return (
        <div
            className="btn btn-primary btn-outline no-animation"
            onClick={handleClick}
        >
            {props.choice}
        </div>
    );
}

export default class CreatePoll extends Component {
    constructor(props: {}) {
        super(props);
        this.state = {
            choices: false,
        };
    }
    checkInput = () => {
        this.setState({
            choices:
                document.getElementsByTagName("select")[0].value == "choices",
        });
    };
    Choice(props: { data: string }) {
        function handleClick() {
            // this;
        }
        return (
            <div
                className="btn btn-primary btn-outline no-animation"
                onClick={handleClick}
            >
                {props.data}
            </div>
        );
    }
    render() {
        return (
            <>
                <header className="flex flex-col gap-4">
                    <h2 className="uppercase text-secondary font-bold text-2xl">
                        Create a poll!
                    </h2>
                    <p className="text-4xl font-light italic">
                        Ask a question...
                    </p>
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
                        onInput={this.checkInput}
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
                        className="p-4 rounded border border-primary/25 flex flex-col gap-4"
                    >
                        <label htmlFor="choices">
                            <span>Question choices</span>
                        </label>
                        <div
                            id="questionChoices"
                            className="flex flex-wrap gap-2"
                        >
                            <this.Choice data="something" />
                            <button
                                type="button"
                                id="choiceBtn"
                                className="btn btn-primary text-2xl font-black btn-circle"
                                onClick={() => {
                                    // @ts-ignore
                                    newChoice.showModal();
                                }}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Create this poll
                    </button>
                </form>
                <dialog id="newChoice" className="modal">
                    <form
                        method="dialog"
                        className="modal-box flex flex-col gap-4"
                    >
                        <p className="text-2xl text-accent">
                            Add question choice
                        </p>
                        <div className="modal-action">
                            <button className="btn btn-primary">Close</button>
                        </div>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                        <button></button>
                    </form>
                </dialog>
            </>
        );
    }
}
