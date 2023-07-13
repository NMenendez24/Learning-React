import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName="@ariocanario" name="Nahuel Menendez"/>
            <TwitterFollowCard isFollowing={false} userName="@kookyalien" name="Agustina Gallero"/>
            <TwitterFollowCard isFollowing userName="@vegetta777" name="Samuel de Luque"/>
        </section>
    )
}