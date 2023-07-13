export function TwitterFollowCard ({ children, userName, name, isFollowing }) {
    // you can put the prop "children" to refer to the content inside of the element <div>hola</div> "hola" is the cildren of the element called div
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/twitter/${userName}`}/>
                <div className='tw-followCard-info'>
                    <strong className="tw-followCard-name">{name}</strong>
                    <span className="tw-followCard-user">{userName}</span>
                </div>
            </header>
            <aside >
                <button className='tw-followCard-button'>
                    Follow
                </button>
            </aside>
        </article>
    )
}