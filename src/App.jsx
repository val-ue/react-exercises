import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <body class="full-width full-height">
        <main class="flex justify-content-center align-items-center full-height">
          <div class="post flex justify-content-center align-items-center">
            <div class="author align-items-center">
              <div class="profile-information align-items-center">
                <img class="profile-picture align-items-center" src="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <div class="about-author">
                  <p class="username medium-bold-font">cool_dude99</p>
                  <p class="location very-thin-font">Ohio, USA</p>
                </div>
              </div>

              <div class="see-more pointer"><i class="icons fa-solid fa-ellipsis"></i></div>
            </div>

            <div class="content">
              <img class="img-post" src="https://images.unsplash.com/photo-1529511582893-2d7e684dd128?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>

            <div class="social">
              <div class="interact flex">
                <div class="social-icons">
                  <i class="icons fa-regular fa-heart pointer"></i>
                  <i class="icons fa-regular fa-comment pointer"></i>
                  <i class="icons fa-regular fa-paper-plane pointer"></i>
                </div>

                <div class="self-icon">
                  <i class="icons fa-regular fa-bookmark pointer"></i>
                </div>
              </div>

              <p class="liked-by very-thin-font">
                Liked by <span class="spotlight"></span> and
                <span class="like-number"></span>
                <span class="others pointer medium-font">others</span>
              </p>

              <p class="description medium-font">
                <span class="spotlight">cool_dude99</span> Something about open
                fields just feels so peaceful 🌾✨
              </p>
              <p class="comment-link very-thin-font pointer">
                View all <span class="comment-number"></span> comments
              </p>
              <p class="post-age very-thin-font">2 days ago</p>
            </div>
          </div>
        </main>
      </body>








      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the  and React logos to learn more
      </p>















    </>
  )
}

export default App
