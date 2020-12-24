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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container mx-auto px-4 py-4 font-josefin-sans ">
        <main className="max-w-xl bg-transparent h-full mx-auto flex flex-col ">
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
