import Head from "next/head";
// import {useState,useEffect} from 'react';
import NewTodo from "../componets/NewTodo";
import TodoHeader from "../componets/TodoHeader";
import TodosList from "../componets/TodosList";

const Home: React.FC = (props) => {
  
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Todo App</title>
      </Head>
      <div className="container mx-auto px-4 py-4 ">
        <main className="max-w-xl bg-red-500 dark:bg-green-500 h-full mx-auto flex flex-col ">
          <TodoHeader />
          <main>
            <NewTodo />
            <TodosList />
          </main>
          <p className="text-gray-700 font-medium text-lg mx-auto mb-6">
            Drag and drop to reorder list
          </p>
        </main>
      </div>
    </>
  );
};

export default Home;
