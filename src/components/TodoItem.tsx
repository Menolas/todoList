"use client";

import {useState} from "react";
import { toggleTodo } from "@/app/utils/functions";

type TodoItemProps = {
    id: string;
    title: string;
    complete: boolean;
};

export function TodoItem({ id, title, complete }: TodoItemProps) {
    const [isComplete, setIsComplete] = useState(complete);

    const handleToggle = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const newComplete = e.target.checked;
        setIsComplete(newComplete);
        await toggleTodo(id, newComplete);
    };

    return (
        <li className="flex gap-1 items-center">
            <input
                id={id}
                type="checkbox"
                className="cursor-pointer peer"
                defaultChecked={complete}
                onChange={handleToggle}
            />
            <label
                htmlFor={id}
                className="peer-checked:line-through peer-checked:text-slate-500"
            >{title}</label>
        </li>
    );
}
