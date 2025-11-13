import { useState } from 'react'
import './App.css'

function App() {
  return (
      <>
          <header>
              <nav>
                  <ul>
                      <li><a href="" className="current">Home</a></li>
                      <li><a href="">Dialog</a></li>
                      <li><span>More coming soon!</span></li>
                  </ul>
              </nav>
          </header>
         <div className="app-content home">
             <h1>Little A11y Things</h1>
             <p className="tagline">It's the little things that make a big difference.</p>

             <p>Welcome to my little collection of accessible things! Accessibility can feel like such a huge
                 learning curve, and the documentation can be tough on the eyes (and the brain.) I wanted to make
                 something that simplifies those concepts. Breaks it down into smaller pieces. Something that gets
                 straight to the point, and provides code samples that developers can grab and use in the real world.</p>

             <p>I also wanted an excuse to use React so here you go! Enjoy!</p>
         </div>

          <div className="app-content dialog">
          <h1>Little A11y Dialog</h1>
          <div className="tabs" role="tablist" aria-label="Toggle between visual and code mode">
              <button className="tab active" role="tab" aria-selected="true" aria-controls="visual-mode" id="vmode-button"
                      tabIndex="0">Visual Mode
              </button>
              <button className="tab" role="tab" aria-selected="false" aria-controls="code-mode" id="cmode-button"
                      tabIndex="-1">Code Mode
              </button>
          </div>
          <div className="tab-content">
              <div role="tabpanel" id="visual-mode" aria-labelledby="vmode-button" tabIndex="0">
                  <p>Visual mode content</p>
              </div>
              <div role="tabpanel" id="code-mode" aria-labelledby="cmode-button" hidden>
                  <p>Code mode content</p>
                  <p>Button</p>
                  <pre>
                  <code>
                      <button className="dialog-trigger" aria-haspopup="dialog" aria-controls="example-dialog" tabIndex="0">
                         This triggers a dialog!
                      </button>
                  </code>
                      </pre>
                  <p>The dialog</p>
                  <pre><code>
                      <dialog id="example-dialog" className="" aria-labelledby="dialog-title" aria-describedby="dialog-desc">

                                  <h1 className="">Let's Connect</h1>
                                  <button className="btn-close-dialog" aria-label="Close dialog" type="button">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none">
                                          <path
                                              d="M18 7.05L16.95 6L12 10.95L7.05 6L6 7.05L10.95 12L6 16.95L7.05 18L12 13.05L16.95 18L18 16.95L13.05 12L18 7.05Z"
                                              fill="currentColor"></path>
                                      </svg>
                                      <span className="screen-reader-text">Close modal</span>
                                  </button>
                          <p>Just a little dialog with a lot of accessible power!</p>
                      </dialog>
                  </code></pre>
              </div>
          </div>
          <div className="dialog-info">
              <section>
                  <h2>
                      What is it?
                  </h2>
                  <p>Write short description of what this code is meant to display/explain</p>
              </section>
              <section>
                  <h2>
                      Modal or Dialog, does it matter?
                  </h2>
                  <p>Yes. Link to article about when to use either.</p>
              </section>
              <section>
                  <h2>ARIA attributes</h2>
                  <p>Write about aria-controls/has-popup</p>
                  <code>Code sample for button and dialog with nothing in it to show attrs</code>
              </section>
              <section>
                  <h2>Tab-index and focus</h2>
                  <p>Write about good practice to direct focus to the first focusable element in the dialog or the
                      heading. Then if it's closed, re-focus on the last element.</p>
                  <code>JS code sample here</code>
              </section>
              <section>
                  <h2>Other tips and resources</h2>
                  <p>h1 okay, link to other a11y content</p>
              </section>
          </div>
          </div>
          <footer>
              copyright symbol 2025
              link to my site and socials
              "buy me a coffee" link
          </footer>
      </>
  )
}

export default App
