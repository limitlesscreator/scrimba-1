import './styles/app.module.sass'
import {Player} from "./components/Player";
import {Song} from "./components/Song";
// https://fontawesome.com/v5/docs/web/use-with/react

export default function App() {

    return (
        <h1>
            <Song/>
            <Player/>
        </h1>
    )
}