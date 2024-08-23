import React from 'react'

function Card({username ="Hitesh", post="SDE"}) {
    return (
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://imgs.search.brave.com/NHPnQ0bwE3UDQ3oUdyl653RU9gtHbaWYrWmpB1zUKd0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zbWlsaW5nLWNh/dWNhc2lhbi1tYWxl/LXNvZnR3YXJlLWRl/dmVsb3Blci13b3Jr/aW5nLWNvbXB1dGVy/LXRlY2gtYnVzaW5l/c3MtY29uY2VwdF8x/MTIxNjQ1LTM3NzMu/anBnP3NpemU9NjI2/JmV4dD1qcGc" alt="" width="384" height="512" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint error cum non! Dolorem, voluptatem officia, soluta ad non laudantium sapiente magni rerum esse excepturi nulla commodi corporis! Cumque, dolore a.
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                         {username}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        {post}
                    </div>
                </figcaption>
            </div>
        </figure>
    )
}

export default Card