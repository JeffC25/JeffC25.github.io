// import bg8 from '../assets/bg8.svg';

const Home = () => {
    return (
        <div id="home" className="relative h-full snap-start flex flex-col sm:flex-row justify-center items-center text-neutral-800">
            {/* <img src={bg8} className="absolute top-0 object-cover h-full w-full -z-50" /> */}
            <div className="flex flex-col sm:flex-row items-center space-y-10 sm:space-y-0 sm:space-x-20">
                {/* <div className="flex flex-col sm:flex-row items-center space-y-10 sm:space-y-0 sm:space-x-20 bg-neutral-300/50 backdrop-blur-lg p-52 rounded-xl shadow-md"> */}
                {/* <div className="h-fit w-44 sm:w-52 flex flex-col justify-center space-y-4 ">
                    <img 
                        src="https://media.licdn.com/dms/image/C5603AQHmD3d2p0CvPg/profile-displayphoto-shrink_800_800/0/1655080206114?e=1703721600&v=beta&t=xNy3DQr2macGwFxH3VdJ3tdPVCimWHukv67CfK6PO44" 
                        className="w-full aspect-square rounded-full object-cover"
                    />

                    <ul className="flex flex-row justify-center space-x-10">
                        <a href="https://github.com/JeffC25" className="h-8 w-8">
                            <svg className="fill-neutral-800 hover:fill-lime-500/75 hover:animate-pulse" viewBox="2 2 28 28" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path fill-rule="evenodd" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"></path></g></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/jeffrey-li-chen/" className="h-8 w-8">
                            <svg className="fill-neutral-800 hover:fill-lime-500/75 hover:animate-pulse" viewBox="-5 -5 40 40" xmlns="http://www.w3.org/200/750/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path> </g></svg>
                        </a>
                        <a href="jefflichen25@gmail.com" className="h-8 w-8">
                            <svg className="fill-neutral-800 hover:fill-lime-500/75 hover:animate-pulse" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z"></path></g></svg>
                        </a>
                    </ul>

                </div> */}
                <div className="text-center">
                    <h1 className="text-5xl">
                        Hi, I'm Jeff.
                    </h1>
                    <br/>
                    <p className="h-1/2 text-4xl">
                        This site's under construction
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Home;