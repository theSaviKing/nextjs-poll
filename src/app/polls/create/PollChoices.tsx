"use client";

import { useState } from "react";
import { Component } from "react";

export default class CreatePoll extends Component {
    state = {
        choices: false,
    };
    checkInput = () => {
        this.setState({
            choices:
                document.getElementsByTagName("select")[0].value == "choices",
        });
    };
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
                    <label htmlFor="type">Question type</label>
                    <select
                        name="type"
                        id="type"
                        className="select select-primary"
                        required
                        onInput={this.checkInput}
                    >
                        <option disabled selected>
                            Pick a question type
                        </option>
                        <option value="short_text">Short answer</option>
                        <option value="boolean">Yes or No</option>
                        <option value="choices">Options</option>
                    </select>
                    <div
                        id="choices"
                        className={this.state.choices == false ? "hidden" : ""}
                    >
                        <label htmlFor="choices">Question choices</label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Create this poll
                    </button>
                </form>
            </>
        );
    }
}
