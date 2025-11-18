export default function Home() {
    return (
        <section id="home">
            <p className="h2-style">It's the little things that matter!</p>

            <p className="tagline">Welcome to my little collection of accessible things!</p>

            <p>Here you'll find accessible code snippets that you can see in action by toggling between "Code Mode"
                and "Visual Mode" tabs. <br/>Each page explains the barest bones of how the code works with links to
                more in-depth resources for further reading.</p>

            <p>I hope these small, or shall I say <i>little</i>, pieces of knowledge are easier
                for developers to digest. Enjoy!</p>
            <hr/>

            <section id="definitions">
                <h2>Glossary</h2>
                <p className="glossary-word"><b>A11y</b></p>
                <p>A11y is an abbreviation for accessibility. The number 11 is for the letters between "a" and "y".</p>

                <p className="glossary-word"><b>ARIA</b></p>
                <p>A set of attributes that make our code more accessible, primarily for assistive technologies.</p>

                <p className="glossary-word"><b>Semantics</b></p>
                <p>It's how search engines and assistive technologies
                    understand the structure of a site and it's content. It also shows that you, as
                    a developer, have a foundational understanding of how HTML works.
                </p>
                <p>Using semantic elements in our code is like building a house. There's a reason why you have different nails, and screws.
                    Sure, they can look similar. Sure, you can use nails for everything. But nails serve a specific purpose.
                    Using nails in a way they're not intended weakens the overall structure of
                    your house. Might even make your house fall apart.</p>
                <p className="tagline">"If you want your house aka your site to last, write code semantically."</p>
            </section>
        </section>
    );
}
