import AddTask from "@components/Table/AddTask";
import TodoList from "@components/Table/TodoList";
import { RootState } from "@store/index";
import { useSelector } from "react-redux";

const Auth=()=>{
    const auth=useSelector((state:RootState)=>state.auth);
    return(
        <div className="bg-black text-white mt-12">
            <h1>Auth</h1>
            <p>{JSON.stringify(auth)}</p>
        </div>
    )
}

const TodoPage = () => {
    return (
        <>
            <h1>Todo Page</h1>
            <TodoList />
            <AddTask />
            <Auth/>

        </>
    );
};

export default TodoPage;