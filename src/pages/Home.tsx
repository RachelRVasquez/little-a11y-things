export default function Home() {
    return (
        <section id="home">
            <p className="h2-style">It's the little things that matter!</p>

            <p>Here you'll find accessible code snippets that you can see in action by toggling between "Code Mode"
                and "Visual Mode" tabs. <br/>Each page explains <b>the barest bones</b> of how the code works with links to
                more in-depth resources for further reading.</p>

            <p>I hope these small, or shall I say <i>little</i>, pieces of knowledge make it easier for developers
                to get started. Enjoy!</p>
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
                <p><a href="https://css-tricks.com/explaining-the-accessible-benefits-of-using-semantic-html-elements/"
                 target="_blank">Using semantic elements</a> in our code is like building a house.
                    There's a reason why you have nails and screws. Sure, they look similar. Sure, you can attempt to
                    use nails
                    for everything. But nails serve a specific purpose.</p>
                <p>Using nails in a way they're not intended weakens the overall structure of
                    your house. Might even make your house fall apart.</p>
                <p className="tagline">"If you want your house aka your site to last, write code semantically."</p>
            </section>
        </section>
    );
}
